import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsFavorisComponent } from './films-favoris.component';

describe('FilmsFavorisComponent', () => {
  let component: FilmsFavorisComponent;
  let fixture: ComponentFixture<FilmsFavorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmsFavorisComponent]
    });
    fixture = TestBed.createComponent(FilmsFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
