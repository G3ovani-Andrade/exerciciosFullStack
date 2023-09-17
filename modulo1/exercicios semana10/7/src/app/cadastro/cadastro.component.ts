import { Component, ViewChild } from '@angular/core';
import { Usuario } from '../usuario/Usuario';
import { StorageServiceService } from '../services/storage/storage-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  numero: boolean = false;
  minuscula: boolean = false;
  maiuscula: boolean = false;
  especial: boolean = false;
  usuarios: any = [];
  confimarSenha: string = "";
  mensagem: string = '';
  loginFormModel: Usuario = {
    usuario: '',
    senha: ''
  }

  cadastroForm:FormGroup;

  constructor(private storage: StorageServiceService) {
    this.cadastroForm = new FormGroup({
      nome_usuario:new FormControl('',[Validators.required]),
      senha:new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmacao_senha:new FormControl('',[Validators.required,Validators.minLength(8)]),
    });
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

  checar(senha:string) {
    this.maiuscula = /^(?=.*[A-Z])/.test(senha);
    this.minuscula = /^(?=.*[a-z])/.test(senha);
    this.numero = /^(?=.*[0-9])/.test(senha);
    this.especial = /^(?=.*[!@#$%^&*()_+\-=[\]{};'¨:"\|,.<>/?])/.test(senha);
  }

  cadastrar() {
    let senha = this.cadastroForm.get('senha')?.value;
    this.checar(senha);
    this.limparMensagem();
    if (this.loginFormModel.senha != this.confimarSenha) {
      this.mensagem = "As senhas são diferentes"
    }
    if (!(this.maiuscula && this.minuscula && this.especial && this.numero && !(this.loginFormModel.senha.length < 8))) {
      return;
    } else {
      this.usuarios = []
      this.usuarios = this.storage.getLocalStorage('USUARIO');
      if (this.checarUsuario(this.usuarios)) {
        this.usuarios.push(this.loginFormModel);
        this.storage.setLocalStorage('USUARIO', this.usuarios);
        this.criarForm();
        this.confimarSenha = "";
        this.mensagem = "cadastrado com sucesso"
      } else {
        this.mensagem = 'Usuário ja cadastrado'
      }
    }
  }

  limparMensagem(){
    setTimeout(() => {
      this.mensagem = "";
    }, 2000);
  }

  checarUsuario(usuarios: Usuario[]) {
    let novoArray = usuarios.find((usuario) => JSON.stringify(usuario.usuario) === JSON.stringify(this.loginFormModel.usuario));
    if (novoArray) {
      console.log(novoArray);
      return false;
    } else {
      return true
    }
  }
}
