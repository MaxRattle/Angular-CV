import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NameComponent } from './name/name.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EduComponent } from './edu/edu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    NameComponent,
    AboutComponent,
    SkillsComponent,
    EduComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular-CV';
}
