import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-dialog-body',
  standalone: true,
  imports: [
    MatIcon,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatIconButton,
    MatSuffix,
    MatDialogClose,
  ],
  templateUrl: './dialog-body.component.html',
  styleUrl: './dialog-body.component.scss',
})
export class DialogBodyComponent {}
