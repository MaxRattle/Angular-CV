import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  description: string =
    'Фронтенд разработчик с годом опыта работы. Ранее работал с React, но перешел на Angular. Разработал интерактивную игру "Nonograms" и концептуальный сайт для просмотра кино. Хочу стать Fullstack-разработчиком. Интересуюсь различными IT-технологиями, в частности блокчейн и все, что с ним связано.';
  hint_description: string = 'Описание';
}
