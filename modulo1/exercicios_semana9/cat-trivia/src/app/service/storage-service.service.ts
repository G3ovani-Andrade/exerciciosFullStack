import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  usuarioLogado:boolean = false;
  constructor() { }
  getLocalStorage(chave:string){
    let usuarioJson = localStorage.getItem(chave);
    if(usuarioJson){
      this.usuarioLogado = true;
    }
    //localStorage.getItem(chave);

  }
  setLocalStorage(chave: string, valor: object){
    localStorage.setItem(chave, JSON.stringify(valor));
  }
  retornarUsuarioLogado(){
    this.getLocalStorage('USUARIO_LOGADO');
    return this.usuarioLogado;
  }
}
