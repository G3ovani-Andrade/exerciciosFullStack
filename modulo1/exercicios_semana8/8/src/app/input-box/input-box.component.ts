import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
  textBusca = "";
  @Output() digitar : EventEmitter<any> = new EventEmitter();

  getMessage() {
    this.digitar.emit(this.textBusca);
  }
}
