import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {FilmModel} from "./list-film/Film.model";
import {Commentaire} from "./list-film/Commentaire";

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {
  private apiKey = 'aef615ddf7416ff3f859c9d357a498c9';
  private baseUrl = 'https://api.themoviedb.org/3';
  backendUrl= "http://localhost:8080"
  private filteredMoviesSource = new BehaviorSubject<FilmModel[]>([]);
  filteredMovies$: Observable<FilmModel[]> = this.filteredMoviesSource.asObservable();

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`;
    return this.http.get<any>(url);
  }
  getFilmById(id: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getimagefromapi( poster_path: string){
    return 'https://image.tmdb.org/t/p/w300' + poster_path
  }
  getMovieByText(text:string){
    const url='https://api.themoviedb.org/3/search/movie?api_key=' +
    this.apiKey + '&language=fr&query=' + text;
    return this.http.get<any>(url);
  }
  updateFilteredMovies(movies: FilmModel[]) {
    this.filteredMoviesSource.next(movies);
  }
  addComment(commentData: Commentaire): Observable<any> {
    console.log(commentData);
    return this.http.post(`${this.backendUrl}/comment`, commentData);
  }

  getComments(id:number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.backendUrl}/${id}/comments`);
  }
}
