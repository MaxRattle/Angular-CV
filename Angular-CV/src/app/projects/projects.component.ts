import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  first: string =
    'ConceptVid - сайт для просмотра кино (HTML, SCSS, Angular 17, Material UI, RxJs и другие)';
  second: string =
    'Nonograms - интерактивная игра на основе японских кроссвордов (HTML, CSS, JS).';
  third: string =
    'Project Weather - приложение для определения погоды в городе по запросу (HTML, CSS, JS, Rest API)';
  hint: string = 'Название проекта / Стек технологий';
}
