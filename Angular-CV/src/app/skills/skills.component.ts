import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: string =
    'HTML (BEM, SEO), CSS (FLEX, GRID, Adaptive, Cross-browser), SCSS, JavaScript, TypeScript, Angular 16/17 (Material-UI, RxJs), Node (FS module), nvm, vite, editorconfig, npm';
  hint_skills: string = 'Ваши навыки';
}
