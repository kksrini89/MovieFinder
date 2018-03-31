import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';


const routes: Routes = [
  { path: '', component: MoviesComponent},
  { path: 'movie/:id', component: MovieComponent}
];

export const App_Routes: ModuleWithProviders = RouterModule.forRoot(routes);
