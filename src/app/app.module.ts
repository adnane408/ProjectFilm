import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilmItemComponent } from './list-film/film-item/film-item.component';
import {BodyComponent} from "./body/body.component";
import {NgOptimizedImage} from "@angular/common";
import { FilmDetailsComponent } from './film-details/film-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { NgxEditorModule } from 'ngx-editor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilmsFavorisComponent } from './films-favoris/films-favoris.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFilmComponent,
    HeaderComponent,
    FilmItemComponent,
    BodyComponent,
    BodyComponent,
    FilmDetailsComponent,
    CommentaireComponent,
    FilmsFavorisComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgOptimizedImage,
        ReactiveFormsModule,
      HttpClientModule,
      NgxEditorModule,
      FontAwesomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
