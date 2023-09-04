import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { ButtonBoxComponent } from './components/button-box/button-box.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    InputBoxComponent,
    ButtonBoxComponent,
    ModalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
