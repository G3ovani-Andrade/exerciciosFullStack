import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }
  getLocalStorage(chave:string){
    return localStorage.getItem(chave);
  }
  setLocalStorage(chave: string, valor: object){
    localStorage.setItem(chave, JSON.stringify(valor));
  }
}
