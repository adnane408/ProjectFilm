import {Genre} from "./genre";

export  class FilmModel{
  adult: boolean;
  backdrop_path: string;
  genre: Genre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  tagline:string;


    constructor(adult: boolean, backdrop_path: string, genre: Genre[], id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path: string, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, tagline: string) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.genre = genre;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.tagline = tagline;
    }
}
