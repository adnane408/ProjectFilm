import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Filmdetails} from "./app/list-film/filmdetails";
 // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root',
})
export class FavorisService {
  private favoris: Filmdetails[] = [];
  private favorisSubject = new BehaviorSubject<Filmdetails[]>([]);

  constructor() {
    this.loadFavorisFromLocalStorage(); // Charge les favoris depuis le localStorage au démarrage
  }

  toggleFavori(film: Filmdetails) {
    const index = this.favoris.findIndex((f) => f.id === film.id);

    if (index === -1) {
      film.isFavorite = true;
      this.favoris.push(film);
    } else {
      film.isFavorite = false;
      this.favoris.splice(index, 1);
    }

    this.updateFavoris();
  }

  removeFavori(film: Filmdetails) {
    const index = this.favoris.findIndex((f) => f.id === film.id);

    if (index !== -1) {
      film.isFavorite = false;
      this.favoris.splice(index, 1);
      this.updateFavoris();
    }
  }

  private updateFavoris() {
    this.favorisSubject.next([...this.favoris]);
    this.saveFavorisToLocalStorage();
  }

  private loadFavorisFromLocalStorage() {
    const savedFavoris = localStorage.getItem('favoris');
    if (savedFavoris) {
      this.favoris = JSON.parse(savedFavoris);
      this.favorisSubject.next([...this.favoris]);
    }
  }

  private saveFavorisToLocalStorage() {
    localStorage.setItem('favoris', JSON.stringify(this.favoris));
  }

  getFavoris(): Observable<Filmdetails[]> {
    return this.favorisSubject.asObservable();
  }
}
