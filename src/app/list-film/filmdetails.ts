import {Genre} from "./genre";
import {ProductionCountry} from "./productionCountry";
import {ProductionCompany} from "./productionCompany";
import {SpokenLanguage} from "./spokenLanguage";

export interface Filmdetails {
  isFavorite:boolean;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | any; // You may update this type based on the actual data
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
