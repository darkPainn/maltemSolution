import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie, MovieServiceService } from '../services/movie-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @ViewChild('createMovieForm', {static:false}) createMovieForm:NgForm;
  @ViewChild('searchMovieForm', {static:false}) searchMovieForm:NgForm;
  @ViewChild('sortMoviesForm', {static:false}) sortMoviesForm:NgForm;
  private movies:Movie[] = [];
  private movieCreated:Movie;

  constructor(private router:Router, private movieService:MovieServiceService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      response => {
        this.movies = response;
      }
    );
  }

  onCreateMovie(){
    this.movieCreated = new Movie(
      this.createMovieForm.value.title,
      this.createMovieForm.value.director,
      this.createMovieForm.value.releaseDate,
      this.createMovieForm.value.type
    );
    this.movies.push(this.movieCreated);
    this.createMovieForm.reset();
  }

  onSearcForMovie(){
    let searchTerm:string = this.searchMovieForm.value.searchTerm;
    this.movieService.searchForMovie(searchTerm).subscribe(
      response => {
        this.movies = response;
      }
    );
    this.searchMovieForm.reset();
  }

  onSortMovies(){
    console.log(this.sortMoviesForm.value.sortBy);
    this.movies.sort((n1,n2) => {
      if (n1 > n2) {
          return 1;
      }
  
      if (n1 < n2) {
          return -1;
      }
  
      return 0;
  });   
  }

  deleteMovie(i:number){
    let title:string = this.movies[i].title;
    this.movies.splice(i,1)
    this.movieService.deleteMovie(title);
  }

  updateMovie(i:number){
    let title:string = this.movies[i].title;
    this.router.navigate(['movies/' + title]);
  }

}
