import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio2Component } from './exercicio2/exercicio2.component';
import { Exercicio3Component } from './exercicio3/exercicio3.component';
import { Exercicio4Component } from './exercicio4/exercicio4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Exercicio5Component } from './exercicio5/exercicio5.component';
import { Exercicio6Component } from './exercicio6/exercicio6.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
