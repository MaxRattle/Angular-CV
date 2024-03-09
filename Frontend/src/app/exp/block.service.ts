import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlockService {
  blocks: any[] = [];
  counter: number = 0;
  addNewBlock(): void {
    const newBlock = {
      name: '',
      position: '',
      achievement: '',
    };
    this.counter += 1;
    if (this.counter < 3) {
      this.blocks.push(newBlock);
    }
  }
  removeNewBlock(): void {
    this.counter -= 1;
    this.blocks.pop();
  }
}
