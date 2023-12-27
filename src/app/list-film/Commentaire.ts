import {text} from "@fortawesome/fontawesome-svg-core";

export class Commentaire{
  public filmId:number;
  public _email:string;
  public _text:string;

  constructor(filmId: number, email: string, text: string) {
    this.filmId = filmId;
    this._email = email;
    this._text = text;
  }

}
