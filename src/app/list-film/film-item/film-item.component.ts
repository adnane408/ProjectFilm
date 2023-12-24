import {Component, Input} from '@angular/core';
import {FilmModel} from "../Film.model";
import {FilmServiceService} from "../../film-service.service";
import {ActivatedRoute} from "@angular/router";
import {Filmdetails} from "../filmdetails";
@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {
  @Input() film:Filmdetails;
  constructor(private filmservice:FilmServiceService,
              private route:ActivatedRoute) {
  }
  getUrl(name : any){
    return this.filmservice.getimagefromapi(name);
  }
  ngOnInit(){

  }
}
