import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmDetailsService {

  constructor() { }
  private filmIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  setFilmId(id: number): void {
    this.filmIdSubject.next(id);
  }

  getFilmId(): Observable<number | null> {
    return this.filmIdSubject.asObservable();
  }
}
