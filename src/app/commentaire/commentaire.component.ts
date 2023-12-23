import { Component } from '@angular/core';
import {Editor, Validators} from "ngx-editor";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  editor!: Editor;
  html: string = 'hello world';
  formData: { nom: string, comment: string } = { nom: '', comment: '' };
  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  ngOnInit(){
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
