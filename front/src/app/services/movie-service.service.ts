import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Movie{
  constructor(
    public title:string,
    public director:string,
    public releaseDate:string,
    public type:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private REST_URL:string = 'http://localhost:8080/restws/movie-service/movies';
  private movies:Movie[] = [];

  constructor(
    private http:HttpClient
  ) {
    this.getMovies().subscribe(
      response => {
        this.movies = response;
      }
    );
   }

  //get a single movie by title
  getMovie(title:string){
    return this.http.get<Movie>(this.REST_URL + '/' + title);
  }
  
  //get all the movies
  getMovies(){
    return this.http.get<Movie[]>(this.REST_URL);
  }

  //update a movie
  updateMovie(updatedMovie:Movie, oldTitle:string){
    for(let i=0; i<this.movies.length; i++){
      if(this.movies[i].title === oldTitle){
        this.movies.splice(i,1);
        this.movies.push(updatedMovie);
      }
    }    
  }

  //delete a movie is done on the front-end because it is very complicated to modify a
  //file on the classpath
  deleteMovie(title:string){
    return this.http.delete(this.REST_URL + '/' + title);
  }

  searchForMovie(searchTerm:string){
    return this.http.get<Movie[]>(this.REST_URL + '/search/' + searchTerm);
  }

  
}
