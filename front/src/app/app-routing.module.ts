import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component:HomeComponent },
  { path: 'movies', component:MoviesComponent},
  { path: 'movies/:title', component: UpdateMovieComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
