import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieServiceService, Movie } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  private movie:Movie;
  private title:string;

  constructor(private router:Router, private route:ActivatedRoute, private movieService:MovieServiceService) { }

  ngOnInit() {
    //which movie to be modified
    this.title = this.route.snapshot.params['title'];
    //fetch the movie from back
    this.movieService.getMovie(this.title).subscribe(res => {
      this.movie = res;
    });
    
  }

  //we are only updating the movies on the front end and the movies.json file remains unchanged
  onUpdateMovie(){
    this.movieService.updateMovie(this.movie, this.title);
    this.router.navigate(['/movies']);    
  }

}
