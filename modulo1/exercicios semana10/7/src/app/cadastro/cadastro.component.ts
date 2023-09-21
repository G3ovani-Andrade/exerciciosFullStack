import { Component, ViewChild } from '@angular/core';
import { Usuario } from '../usuario/Usuario';
import { StorageServiceService } from '../services/storage/storage-service.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuarios: any = [];
  mensagem: string = '';

  cadastroForm:FormGroup;

  constructor(private storage: StorageServiceService) {
    this.cadastroForm = new FormGroup({
      usuario:new FormControl('',[Validators.required]),
      senha:new FormControl('',[]),
      confirmacao_senha:new FormControl('',[]),
    });
    this.cadastroForm.get('usuario')?.setValidators([Validators.required,this.checarDisponibilidadeUsuario()]);
    this.cadastroForm.get('senha')?.setValidators([Validators.required,Validators.minLength(8),this.checarSenha(),this.checarConfirmacaoSenha()]);
    this.cadastroForm.get('confirmacao_senha')?.setValidators([Validators.required,Validators.minLength(8),this.checarSenha(),this.checarConfirmacaoSenha()]);

  }



  cadastrar() {
      this.usuarios.push(
        {
        usuario:this.cadastroForm.get('usuario')?.value,
        senha:this.cadastroForm.get('senha')?.value
      });
      this.storage.setLocalStorage('USUARIO', this.usuarios);
  }

  limparMensagem(){
    setTimeout(() => {
      this.mensagem = "";
    }, 2000);
  }

  checarUsuario() {
    this.usuarios = [];
    this.usuarios = this.storage.getLocalStorage('USUARIO');
    let novoArray = this.usuarios.find((usuario:Usuario) => JSON.stringify(usuario.usuario) === JSON.stringify(this.cadastroForm.get("usuario")?.value));
    if (novoArray) {
      return true;
    } else {
      return false;
    }
  }

  checarSenha(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const senha = control.value;
        if (!senha) {
            return null;
        }
        const hasMaiuscula = /[A-Z]+/.test(senha);
        const hasMinuscula = /[a-z]+/.test(senha);
        const hasNumero = /[0-9]+/.test(senha);
        const hasCaractereEspecial =  /[!@#$%^&*()_+\-=[\]{};'¨:"\|,.<>/?]+/.test(senha);
        const senhaValida = hasMaiuscula && hasMinuscula && hasNumero && hasCaractereEspecial;
        return !senhaValida ? {senhaValidaRetorno:true}: null;
    }
}

checarConfirmacaoSenha():ValidatorFn{
  return():ValidationErrors | null=>{
    const senha = this.cadastroForm.get('senha')?.value;
    const confirmacaoSenha = this.cadastroForm.get('confirmacao_senha')?.value;
    if(!confirmacaoSenha || !senha){
      return null;
    }
    return confirmacaoSenha!==senha ?{senhaCorrespondente:true} :null;
  }
}

checarDisponibilidadeUsuario():ValidatorFn{
  return():ValidationErrors | null=>{
      let usuaioExiste = this.checarUsuario()
      if (usuaioExiste) {
        return {usuarioExiste:true};
      }
    return null
  }
}

}

