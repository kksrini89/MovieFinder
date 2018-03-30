import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import { MovieserviceService } from '../../services/movieservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  popularMovies: Array<Object>;
  inTheatresMovies: Array<Object>;

  popularMovieSubscription: Subscription;
  inTheatresMovieSubscription: Subscription;

  constructor(private movieService: MovieserviceService) { }

  ngOnInit() {
    this.popularMovieSubscription = this.movieService.getPopularMovies().subscribe(res => {
      console.log(res.results);
      this.popularMovies = res.results;
    });

    this.inTheatresMovieSubscription = this.movieService.getInTheatres().subscribe(res => {
      this.inTheatresMovies = res.results;
    });
  }

  ngOnDestroy() {
    if (this.inTheatresMovieSubscription) {
      this.inTheatresMovieSubscription.unsubscribe();
    }
    if (this.popularMovieSubscription) {
      this.popularMovieSubscription.unsubscribe();
    }
  }

}
