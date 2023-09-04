import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  setStorage(chave:string, objeto:any){
    let objetosJson = this.getStorage('login');
    let objetos = objetosJson ? JSON.parse(objetosJson) : [];
    let checagem = objetos.find((elem: any)=>elem.email===objeto.email);

    if(checagem){
       console.log(`O Email ${objeto.email} já esta sendo Usado`);
       return false;
    }else{
      objetos.push(objeto);
      objetos = JSON.stringify(objetos);
      console.log("Cadastro efetuado com sucesso!");
      window.localStorage.setItem(chave,objetos);
      return true;
    }
  }
  getStorage(chave:string){
    return window.localStorage.getItem(chave);
  }
}
