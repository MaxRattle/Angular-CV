import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { EditModeService } from '../edit-mode.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss',
})
export class NameComponent implements OnInit {
  name: string = 'Максим';
  hint_name: string = 'Ваше Имя';
  surname: string = 'Сушков';
  hint_surname: string = 'Ваша Фамилия';
  position: string = 'Angular-developer';
  hint_position: string = 'Ваша Должность';
  mail: string = 'max_123_99@mail.ru';
  hint_mail: string = 'Ваша электронная почта';
  phone: string | number = '+7' + 9140758320;
  hint_phone: string = 'Ваш номер телефона';
  telegram: string = '@maxrattle99';
  hint_telegram: string = 'Ваше имя пользователя в Telegram';
  location: string = 'Россия, Приморский край, Большой Камень';
  hint_location: string = 'Ваше местоположение';

  editMode: boolean = false;
  constructor(private editeModeService: EditModeService) {}
  ngOnInit() {
    this.editeModeService.editMode$.subscribe((value) => {
      this.editMode = value;
    });
  }
}
