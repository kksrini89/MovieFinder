import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Injectable()
export class MovieserviceService {
  private _apikey: string;

  constructor(private http: HttpClient) {
    this._apikey = 'd9c6fccdb7f12d7d85322074616df297';
  }

  getPopularMovies() {
    return this.http.jsonp('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this._apikey, 'callback');
  }

  getInTheatres() {
    return this.http.jsonp('https://api.themoviedb.org/3/discover/movie?' +
    'primary_release_date.gte=2018-03-25&primary_release_date.lte=2018-03-30&api_key=' + this._apikey, 'callback');
  }

}
