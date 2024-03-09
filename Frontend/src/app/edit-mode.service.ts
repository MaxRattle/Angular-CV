import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditModeService {
  editMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toggleEditMode(): void {
    this.editMode$.next(!this.editMode$.value);
  }
}
