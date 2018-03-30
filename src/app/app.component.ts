import { Component } from '@angular/core';
import { MovieserviceService } from './services/movieservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieserviceService]
})
export class AppComponent {
  constructor(private movieService: MovieserviceService){}
}
