import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageServiceService } from '../service/storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private storage:StorageServiceService,private router:Router){}
ngOnInit(){
  this.criarForm();
}
  loginFormModel:{usuario:string,senha:string,confirmaSenha:string}={
    usuario:"",
    senha:'',
    confirmaSenha:'',
  }
  senha:string ="";
  usuario:string = "";
  confirmaSenha:string = "";
  mensagem:string = "";

  criarForm(){
    this.loginFormModel = {
      usuario:"",
      senha:"",
      confirmaSenha:""
    }
  }
  ///////////////////////////////
  /////////////////////////////SEM FORM MODEL - para estudo
  //////////////////////////
  // login(){
  //   const confirmacaoSenha = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$%^&*()/\\])/.test(this.senha);
  //   this.storage.getLocalStorage("USUARIO_LOGADO")

  //   if(this.senha === this.confirmaSenha){
  //     if(!confirmacaoSenha){
  //       this.mensagem = "A senha deve conter Aa1@";
  //     }else if(this.senha.length <8){
  //       this.mensagem = "A senha deve ter pelo menos 8 caracteres";
  //     }else{
  //       this.storage.setLocalStorage("USUARIO_LOGADO",{usuario:this.usuario,senha:this.senha});
  //       this.senha =""
  //       this.usuario =""
  //       this.confirmaSenha =""
  //       this.mensagem = "Logado"
  //       setTimeout(() => this.mensagem ="",4000);
  //       this.router.navigate(['/home']);
  //     }
  //   }else{
  //     this.mensagem = "As senhas devem ser iguais";
  //   }

  // }
 //senha para teste 12345&Rg

   login(){
    const confirmacaoSenha = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$%^&*()/\\])/.test(this.loginFormModel.senha);
    if(this.loginFormModel.senha === this.loginFormModel.confirmaSenha){
      if(!confirmacaoSenha){
        this.mensagem = "A senha deve conter Aa1@";
      }else if(this.loginFormModel.senha.length <8){
        this.mensagem = "A senha deve ter pelo menos 8 caracteres";
      }else{
        this.storage.setLocalStorage("USUARIO_LOGADO",this.loginFormModel);
        this.router.navigate(['/home']);
      }
    }else{
      this.mensagem = "As senhas devem ser iguais";
    }
    console.log(this.loginFormModel);

  }
}
