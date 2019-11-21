import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    HeaderComponent,
    UpdateMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
