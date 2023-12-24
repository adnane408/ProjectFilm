import { Component } from '@angular/core';
import {Filmdetails} from "../list-film/filmdetails";
import {FavorisService} from "../../favoris.service";

@Component({
  selector: 'app-films-favoris',
  templateUrl: './films-favoris.component.html',
  styleUrls: ['./films-favoris.component.css']
})
export class FilmsFavorisComponent {
  favoris: Filmdetails[] = [];

  constructor(private favorisService: FavorisService) {}

  ngOnInit() {
    this.favorisService.getFavoris().subscribe((favoris) => {
      this.favoris = favoris;
    });
  }
}

