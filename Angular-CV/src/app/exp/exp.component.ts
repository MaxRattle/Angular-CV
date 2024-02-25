import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BlockService } from './block.service';
import { FormsModule } from '@angular/forms';
import { EditModeService } from '../edit-mode.service';

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
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
  constructor(
    protected blockService: BlockService,
    private editeModeService: EditModeService
  ) {}
  addNewBlock(): void {
    this.blockService.addNewBlock();
  }
  removeNewBlock(): void {
    this.blockService.removeNewBlock();
  }

  editMode: boolean = false;
  ngOnInit() {
    this.editeModeService.editMode$.subscribe((value) => {
      this.editMode = value;
    });
  }

  empty: string = '';
}
