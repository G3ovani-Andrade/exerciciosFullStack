import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
  @Input() titulo:string = "";
  @Input() identificador:string = "";
  @Input() nome:string = "";
  @Input() classLabel:string = "";
  @Input() classInput:string = "";
  @Input() tipo:string = "";



}
