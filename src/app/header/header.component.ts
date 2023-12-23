import { Component } from "@angular/core";
import { FilmModel } from "../list-film/Film.model";
import { FilmServiceService } from "../film-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;
  films: FilmModel[]= [];
  filmsFiltered!: FilmModel[];
  filter: string = ''; // Déclaration de la variable filter

  constructor(private filmService: FilmServiceService) {}

  onSearch(filterText: string) {
    this.filmService.getMovieByText(filterText).subscribe(
        (data) => {
          this.filmService.updateFilteredMovies(data.results); // Mettre à jour les films filtrés dans le service
        }
    );
  }

  // ... (autres méthodes du composant)
}
