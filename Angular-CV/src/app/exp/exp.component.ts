import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BlockService } from './block.service';

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.scss',
})
export class ExpComponent {
  name: string = 'ДВЗ "Звезда"';
  hint_name: string = 'Название место работы';
  position: string = 'Инженер-технолог';
  hint_position: string = 'Должность';
  achievement: string =
    'Победа на конференции молодых специалистов в номинации "за личный вклад в реализации проекта" - разработка веб-приложения для расчета буксировки плавдока';
  hint_achievement: string = 'Достижения';
  show: boolean = false;
  constructor(protected blockService: BlockService) {}
  addNewBlock(): void {
    this.blockService.addNewBlock();
  }
  removeNewBlock(): void {
    this.blockService.removeNewBlock();
  }
}
