import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent {
  @Input() titulo: string="";
  @Input() classe: string="";
  @Input() tipo: string="";
  @Input() dataBsToggle: string="";
  @Input() dataBsTarget: string="";
  @Input() dataBsDismis: string="";
  @Input() arialLabel: string="";



}
