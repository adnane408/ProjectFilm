import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FilmServiceService} from "../film-service.service";
import {FilmModel} from "../list-film/Film.model";
import {Genre} from "../list-film/genre";
import {Filmdetails} from "../list-film/filmdetails";
import {faClock, faHeart, faTimes} from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-solid-svg-icons/faCalendar";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faVoteYea} from "@fortawesome/free-solid-svg-icons/faVoteYea";
import {faMoneyBill} from "@fortawesome/free-solid-svg-icons/faMoneyBill";
import {FavorisService} from "../../favoris.service";
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent {
  film: Filmdetails; // Modèle de film, assurez-vous d'avoir un modèle défini
  genre!: Genre[];

  favorite = faCalendar;
  time = faClock;
  popular=faPeopleGroup
  vote = faVoteYea
  moneu=faMoneyBill
  isFavorite: boolean = false;

  constructor(private route: ActivatedRoute, private filmService: FilmServiceService,private favorisService:FavorisService) { }

  ngOnInit() {
    // Récupérez les détails du film et vérifiez s'il est dans les favoris
    const id = +this.route.snapshot.paramMap.get('id');
    this.getFilmDetails(id);
 
    // Vérifier si le film est dans les favoris et mettre à jour isFavorite
    this.favorisService.getFavoris().subscribe((favoris) => {
      this.isFavorite = favoris.some(film => film.id === id);
    });
  }
  toggleFavori() {
    if (this.isFavorite) {
      this.favorisService.removeFavori(this.film);
    } else {
      this.favorisService.toggleFavori(this.film);
    }
    // Inverser l'état isFavorite après le toggle
    this.isFavorite = !this.isFavorite;
  }
  getFilmDetails(id: number): void {
    this.filmService.getFilmById(id).subscribe(
      (data: any) => {
        this.film = data;
        this.genre = this.film.genres;
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails du film:', error);
      }
    );
  }
  getUrl(name : any){
    return this.filmService.getimagefromapi(name);
  }


}
