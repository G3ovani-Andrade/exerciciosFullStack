import { Injectable } from '@angular/core';
import { Usuario } from '../../usuario/Usuario';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }


  getLocalStorage(chave:string){
    let obj:Array<Usuario> =[];
    let objJson = localStorage.getItem(chave);
    obj = objJson ? JSON.parse(objJson):[];
    return obj;
  }

  setLocalStorage(chave:string,obj:Array<Usuario>){
    localStorage.setItem(chave,JSON.stringify(obj))
  }

}
