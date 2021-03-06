import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import {TabModule} from 'angular-tabs-component';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movieDetails/movie.component';
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { GenresComponent } from './components/genres/genres.component';
import { UpcomingComponent } from './pages/upcomingMovies/upcoming.component';
import { SeriesComponent } from './pages/series/series.component';
import { SerieComponent } from './pages/serieDetails/serie.component';
import { ActorComponent } from './pages/actorDetails/actor.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SerieCardComponent } from './components/serie-card/serie-card.component';
import { SeriesService } from './services/serieService/serieservice.service';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { SeasonCardComponent } from './components/season-card/season-card.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieCardComponent,
    GenresComponent,
    UpcomingComponent,
    SeriesComponent,
    SerieComponent,
    ActorComponent,
    SearchComponent,
    NavbarComponent,
    CategoryComponent,
    SerieCardComponent,
    ActorCardComponent,
    SeasonCardComponent,
    ActorsComponent,
    //SignInComponent,
    //SignUpComponent,
    //UserFormComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    //TabModule,
    //IgxTabsModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
