import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieserviceService } from '../../services/movieservice.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private movie: Object;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieserviceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
        const id: number = data['id'];
        this.movieService.getMovieById(id).subscribe(res => {
          this.movie = res;
        });
    });
  }

}
