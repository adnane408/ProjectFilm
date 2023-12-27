import {Component, Input} from '@angular/core';
import {Editor, Validators} from "ngx-editor";
import {FormControl, FormGroup} from "@angular/forms";
import {Commentaire} from "../list-film/Commentaire";
import {FilmServiceService} from "../film-service.service";
import {Filmdetails} from "../list-film/filmdetails";
import {FilmDetailsService} from "../film-details.service";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  @Input() filmId: number | undefined;
  editor!: Editor;
  html: string = 'hello world';
  formData: { nom: string, comment: string } = { nom: '', comment: '' };
  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  constructor(private filmService:FilmServiceService,
              private filmDetailsService: FilmDetailsService) {
  }
  ngOnInit(){
    this.editor = new Editor();
    this.filmDetailsService.getFilmId().subscribe((filmId) => {
      // Utilisez l'ID du film ici
      if (filmId) {
        this.filmId=filmId;
        console.log(filmId);
      }
    });
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  onSubmit() {
    const commentData:Commentaire =new Commentaire(this.filmId,this.formData.nom,this.formData.comment);

    this.filmService.addComment(commentData).subscribe(
      (response) => {
        console.log(commentData);
        console.log('Commentaire ajouté avec succès', response);
        // Réinitialiser le formulaire après l'ajout du commentaire si besoin
        this.resetForm();
      },
      (error) => {
        // Gérer les erreurs ici
        console.error('Erreur lors de l\'ajout du commentaire', error);
      }
    );
  }

  resetForm() {
    this.formData.nom = '';
    this.formData.comment = '';
  }
}
