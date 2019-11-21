package com.sedat.restws.services;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.sedat.restws.model.Movie;


@Path("/movie-service")
@Consumes("application/xml, application/json")
@Produces("application/json")
public interface MovieService {
	
	@Path("/movies/{title}")
	@GET
	public Movie getMovie(@PathParam("title") String title);
	
	@Path("/movies")
	@GET
	public List<Movie> getMovies();
	
	@Path("/movies")
	@PUT
	public Response updateMovie(Movie updatedMovie);
	
	@Path("/movies/{title}")
	@DELETE
	public Response deleteMovie(@PathParam("title") String title);
	
	@Path("/movies/search/{searchTerm}")
	@GET
	public List<Movie> serachForMovie(@PathParam("searchTerm") String searchTerm);
}
