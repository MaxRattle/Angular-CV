import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditModeService } from '../edit-mode.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  first: string =
    '1. ConceptVid - сайт для просмотра кино (HTML, SCSS, Angular 17, Material UI, RxJs и другие)';
  second: string =
    '2. Nonograms - интерактивная игра на основе японских кроссвордов (HTML, CSS, JS).';
  third: string =
    '3. Project Weather - приложение для определения погоды в городе по запросу (HTML, CSS, JS, Rest API)';
  hint: string = 'Название проекта / Стек технологий';

  editMode: boolean = false;
  constructor(private editeModeService: EditModeService) {}
  ngOnInit() {
    this.editeModeService.editMode$.subscribe((value) => {
      this.editMode = value;
    });
  }
}
