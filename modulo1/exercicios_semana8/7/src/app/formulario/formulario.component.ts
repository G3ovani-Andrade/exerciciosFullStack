import { Component, Input } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private storage: StorageService){}
  email:string = "";
  senha:string = "";

  salvar(){
    if(this.email=="" || this.senha==""){
      console.log("Preencha todos os campos");
      return;
    }
    let objetoFormulario:any={
      email: this.email,
      senha: this.senha
    }
    if(this.storage.setStorage('login', objetoFormulario)){
      this.email ="";
      this.senha = ""
    }


    // let objetosJson = localStorage.getItem("ola");
    // let objetos = objetosJson ? JSON.parse(objetosJson) : [];
    // let checagem = objetos.find((elem: any)=>elem.email===objetoFormulario.email);
    // console.log(checagem);

    // if(checagem){
    //   console.log("já existe! Não gravou!!!");
    // }else{
    //   objetos.push(objetoFormulario);
    //   this.storage.setStorage('ola', JSON.stringify(objetos));
    //   console.log("gravou");
    //   this.email = "";
    //   this.senha = ""
    // }
  }
}
