import { Component } from '@angular/core';
import { EditModeService } from '../edit-mode.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: string =
    'HTML (BEM, SEO), CSS (FLEX, GRID, Adaptive, Cross-browser), SCSS, JavaScript, TypeScript, Angular 16/17 (Material-UI, RxJs), Node (FS module), nvm, vite, editorconfig, npm';
  hint_skills: string = 'Ваши навыки';

  editMode: boolean = false;
  constructor(private editeModeService: EditModeService) {}
  ngOnInit() {
    this.editeModeService.editMode$.subscribe((value) => {
      this.editMode = value;
    });
  }
}
