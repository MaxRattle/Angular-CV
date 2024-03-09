import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NameComponent } from './name/name.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EduComponent } from './edu/edu.component';
import { ExpComponent } from './exp/exp.component';
import { ProjectsComponent } from './projects/projects.component';
import { EditModeService } from './edit-mode.service';
import { NgStyle } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    NameComponent,
    AboutComponent,
    SkillsComponent,
    EduComponent,
    ExpComponent,
    ProjectsComponent,
    NgStyle,
    NgxPrintModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [EditModeService],
})
export class AppComponent {
  isEditMode: boolean = false;
  constructor(
    @Inject(EditModeService) private editModeService: EditModeService
  ) {}
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    this.editModeService.toggleEditMode();
  }
}
