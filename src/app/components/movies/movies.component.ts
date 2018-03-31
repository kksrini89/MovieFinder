import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { MovieserviceService } from '../../services/movieservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  popularMovies: Array<Object>;
  inTheatresMovies: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  popularMovieSubscription: Subscription;
  inTheatresMovieSubscription: Subscription;
  searchResMovieSubscription: Subscription;

  constructor(private movieService: MovieserviceService) { }

  ngOnInit(): void {
    this.popularMovieSubscription = this.movieService.getPopularMovies().subscribe(res => {
      this.popularMovies = res.results;
    });
    this.inTheatresMovieSubscription = this.movieService.getInTheatres().subscribe(res => {
      this.inTheatresMovies = res.results;
    });
  }

  ngOnDestroy(): void {
    if (this.inTheatresMovieSubscription) {
      this.inTheatresMovieSubscription.unsubscribe();
    }
    if (this.popularMovieSubscription) {
      this.popularMovieSubscription.unsubscribe();
    }
    if (this.searchResMovieSubscription) {
      this.searchResMovieSubscription.unsubscribe();
    }
  }

  searchMovies(): void {
    // console.log(this.searchStr);
    this.searchResMovieSubscription = this.movieService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }

}
