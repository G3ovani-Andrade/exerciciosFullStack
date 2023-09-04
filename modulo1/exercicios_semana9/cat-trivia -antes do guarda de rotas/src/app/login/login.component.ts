import { Component } from '@angular/core';
import { StorageServiceService } from '../service/storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private storage:StorageServiceService){}

  senha:string ="";
  usuario:string = "";
  confirmaSenha:string = "";
  mensagem:string = "";

  login(){
    const confirmacaoSenha = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$%^&*()/\\])/.test(this.senha);
    if(this.senha === this.confirmaSenha){
      if(!confirmacaoSenha){
        this.mensagem = "A senha deve conter Aa1@";
      }else if(this.senha.length <8){
        this.mensagem = "A senha deve ter pelo menos 8 caracteres";
      }else{
        this.storage.setLocalStorage("USUARIO_LOGADO",{usuario:this.usuario,senha:this.senha});
        this.senha =""
        this.usuario =""
        this.confirmaSenha =""
        this.mensagem = "Logado"
        setTimeout(() => this.mensagem ="",4000);
      }
    }else{
      this.mensagem = "As senhas devem ser iguais";
    }

  }
 //senha para teste 12345&Rg

}
