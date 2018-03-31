import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieserviceService {
  private _apikey: string;

  constructor(private http: HttpClient) {
    this._apikey = 'd9c6fccdb7f12d7d85322074616df297';
  }

  getPopularMovies(): Observable<Object> {
    return this.http.jsonp('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this._apikey, 'callback');
  }

  getInTheatres(): Observable<Object> {
    return this.http.jsonp('https://api.themoviedb.org/3/discover/movie?' +
    'primary_release_date.gte=2018-03-25&primary_release_date.lte=2018-03-31&api_key=' + this._apikey, 'callback');
  }

  searchMovies(searchStr: string): Observable<Object> {
    return this.http.jsonp(`https://api.themoviedb.org/3/search/movie?api_key=${this._apikey}&query=${searchStr}`, 'callback');
  }

  getMovieById(id: number): Observable<Object> {
    return this.http.jsonp(`https://api.themoviedb.org/3/movie/${id}?&api_key=${this._apikey}`, 'callback');
  }

}
