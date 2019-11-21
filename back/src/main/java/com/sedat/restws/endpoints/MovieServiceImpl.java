package com.sedat.restws.endpoints;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.ws.rs.core.Response;

import org.apache.cxf.helpers.IOUtils;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sedat.restws.model.Movie;
import com.sedat.restws.services.MovieService;

@Service
public class MovieServiceImpl implements MovieService {

	@Override
	public List<Movie> getMovies() {
		ClassLoader classLoader = getClass().getClassLoader();
		File file = new File(classLoader.getResource("movies.json").getFile());
		String fileasstring = null;
		Set<Movie> movies = null;
		try {
			fileasstring = IOUtils.newStringFromBytes(Files.readAllBytes(file.toPath()));
			ObjectMapper m = new ObjectMapper();
			movies = m.readValue(fileasstring, new TypeReference<Set<Movie>>() {});
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		
		return new ArrayList<>(movies);
	}

	@Override
	public Movie getMovie(String title) {
		List<Movie> currentMovies = this.getMovies();
		Movie res = null;
		for(Movie eachMovie : currentMovies) {
			if(eachMovie.getTitle().equals(title)) {
				res = eachMovie;
				return res;
			}
		}
		return res;
	}

	/**
	 * Currently not working because of the CORS policy it is very difficult to implement
	 * this functionality. It would have been so much easier with a normal
	 * application with a database layer. We could simply pass in the id of the movie
	 * we want to update and also the new movie object.
	 */
	@Override
	public Response updateMovie(Movie updatedMovie) {
		ClassLoader classLoader = getClass().getClassLoader();
		File file = new File(classLoader.getResource("movies.json").getFile());
		Response response;
		try {
			FileOutputStream out = new FileOutputStream(file);
			ObjectMapper m = new ObjectMapper();
			m.writeValue(out, updatedMovie);
			out.flush();
			out.close();
			response = Response.ok().build();
		} catch (Exception e) {
			response = Response.notModified().build();			
		}
		return response;
	}

	/**
	 * Again we could have just deleted an entry from the database
	 * with the id of the entity
	 */
	@Override
	public Response deleteMovie(String title) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Movie> serachForMovie(String searchTerm) {
		List<Movie> allMovies = this.getMovies();
		List<Movie> result = new ArrayList<>();
		for(Movie eachMov : allMovies) {
			String term = searchTerm.toLowerCase();
			if( eachMov.getTitle().toLowerCase().contains(term) || 
					eachMov.getDirector().toLowerCase().contains(term) ||
					eachMov.getReleaseDate().toLowerCase().contains(term) ||
					eachMov.getType().toLowerCase().contains(term)) {
				result.add(eachMov);
			}
		}
		return result;
	}
}
