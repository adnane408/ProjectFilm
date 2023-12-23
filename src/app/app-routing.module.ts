import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmItemComponent} from "./list-film/film-item/film-item.component";
import {FilmDetailsComponent} from "./film-details/film-details.component";
import {ListFilmComponent} from "./list-film/list-film.component";

const routes: Routes =
  [{ path: 'film-details/:id', component: FilmDetailsComponent },
  { path: 'films', component: ListFilmComponent },
  { path: '', component: ListFilmComponent },
  { path: '**', redirectTo:"/not-found" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
