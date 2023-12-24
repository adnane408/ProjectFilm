import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectCLass';
  ngOnInit() {
    localStorage.clear(); // Efface le localStorage au démarrage de l'application
  }
}
