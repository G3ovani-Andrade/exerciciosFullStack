import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoGuard } from './guards/acesso.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate: [AcessoGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AcessoGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent,canActivate: [AcessoGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
