import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditModeService } from '../edit-mode.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  description: string =
    'Фронтенд разработчик с годом опыта работы. Ранее работал с React, но перешел на Angular. Разработал интерактивную игру "Nonograms" и концептуальный сайт для просмотра кино. Хочу стать Fullstack-разработчиком. Интересуюсь различными IT-технологиями, в частности блокчейн и все, что с ним связано.';
  hint_description: string = 'Описание';

  editMode: boolean = false;
  constructor(private editeModeService: EditModeService) {}
  ngOnInit() {
    this.editeModeService.editMode$.subscribe((value) => {
      this.editMode = value;
    });
  }
}
