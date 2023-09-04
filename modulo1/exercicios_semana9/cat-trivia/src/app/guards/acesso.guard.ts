import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageServiceService } from '../service/storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AcessoGuard implements CanActivate {
  constructor(private storage : StorageServiceService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.storage.retornarUsuarioLogado()){
      //this.router.navigate(['/home']);
      return true;
    }
    this.router.navigate(['/sem-acesso']);
    return false;
  }

}
