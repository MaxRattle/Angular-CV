import { Component } from '@angular/core';

@Component({
  selector: 'app-edu',
  standalone: true,
  imports: [],
  templateUrl: './edu.component.html',
  styleUrl: './edu.component.scss',
})
export class EduComponent {
  name: string = 'Дальневосточный Федеральный Университет';
  hint_name: string = 'Название учебного заведения';
  faculty: string = 'Политехнический институт,';
  hint_faculty: string = 'Название факультета';
  city: string = 'Владивосток';
  hint_city: string = 'Местоположение учебного заведения';
  degree: string = 'Бакалавр';
  hint_degree: string = 'Ваша ученая степень';
  date: string = '2017-2022';
  hint_string: string = 'Дата поступления - окончания';
  specialization: string =
    'Конструкторско-технологическое обеспечение машиностроительных производств';
  hint_specialization: string = 'Ваша специальность';
}
