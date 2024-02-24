import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NameComponent } from './name/name.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EduComponent } from './edu/edu.component';
import { ExpComponent } from './exp/exp.component';
import { ProjectsComponent } from './projects/projects.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular-CV';
}
