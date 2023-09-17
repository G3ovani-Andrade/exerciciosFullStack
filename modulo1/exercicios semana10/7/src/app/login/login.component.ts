import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../services/storage/storage-service.service';
import { Usuario } from '../usuario/Usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  numero: boolean = false;
  minuscula: boolean = false;
  maiuscula: boolean = false;
  especial: boolean = false;
  usuarios: any = [];
  constructor(private storage: StorageServiceService,private rotas : Router) { }

  mensagem: string = ''
  loginFormModel: Usuario = {
    usuario: '',
    senha: ''
  }
  ngOnInit() {
    this.criarForm();
  }
  criarForm() {
    this.loginFormModel = {
      usuario: "",
      senha: "",
    }
  }

  checar() {
    this.maiuscula = /^(?=.*[A-Z])/.test(this.loginFormModel.senha);
    this.minuscula = /^(?=.*[a-z])/.test(this.loginFormModel.senha);
    this.numero = /^(?=.*[0-9])/.test(this.loginFormModel.senha);
    this.especial = /^(?=.*[!@#$%^&*()_+\-=[\]{};'¨:"\|,.<>/?])/.test(this.loginFormModel.senha);
  }

  login() {
    this.limparMensagem();
    this.usuarios = this.storage.getLocalStorage('USUARIO');
    if(this.checarUsuario(this.usuarios)){
      this.mensagem = 'Usuário ou senha inválido'
    }else{
      this.rotas.navigate(['/listagem'])
    }

  }

  checarUsuario(usuarios: Usuario[]) {
    let novoArray = usuarios.find((usuario) => JSON.stringify(usuario) === JSON.stringify(this.loginFormModel));
    if (novoArray) {
      return false;
    } else {
      return true;
    }
  }
  limparMensagem() {
    setTimeout(() => {
      this.mensagem = "";
    }, 2000);
  }
}
