import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ListagemComponent } from './listagem/listagem.component';
import { DetalhamentoComponent } from './detalhamento/detalhamento.component';

const routes: Routes = [
  {path:'cadastro',component:CadastroComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'listagem',component:ListagemComponent},
  {path:'detalhamento/:nomePokemon',component:DetalhamentoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
