import { Component, OnInit } from '@angular/core';
import { FilmModel } from "./Film.model";
import { FilmServiceService } from "../film-service.service";

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {
  films: FilmModel[] = [];
  page: number = 1;
  totalPages: number = 0;
  totalPagesArray: number[] = [];

  constructor(private filmService: FilmServiceService) { }

  ngOnInit(): void {
    this.filmService.filteredMovies$.subscribe((filteredMovies) => {
      this.films = filteredMovies.length > 0 ? filteredMovies : []; // Utiliser les films filtrés s'ils existent
      // Sinon, utilisez la méthode habituelle pour obtenir les films populaires lorsqu'aucun filtre n'est appliqué
      if (filteredMovies.length === 0) {
        this.getFilms();
      }
    });
  }

  getFilms(): void {
    this.filmService.getPopularMovies(this.page).subscribe(
      (data) => {
        this.films = data.results;
        this.totalPages = data.total_pages;
        this.totalPagesArray = new Array(this.totalPages).fill(0).map((x, i) => i + 1);
      },
      (error) => {
        console.error('Error fetching film data:', error);
      }
    );
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.getFilms();
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.getFilms();
    }
  }

  goToPage(pageNumber: number): void {
    this.page = pageNumber;
    this.getFilms();
  }
}
