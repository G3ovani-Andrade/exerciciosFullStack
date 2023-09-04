import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component {
  nome:string="";
  cpf:string="";
  diaAniversario:string="";
  senha:string="";


  cadastrar(){
    console.log(this.nome,"",this.cpf,this.diaAniversario,this.senha);

  }

  limpar(){
    this.nome="";
    this.cpf="";
    this.diaAniversario="";
    this.senha="";
 }
}
