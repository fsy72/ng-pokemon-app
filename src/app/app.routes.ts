import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./pokemon/routes').then(m => m.pokemonRoutes) },
  { path: '**', component: PageNotFoundComponent }
];
