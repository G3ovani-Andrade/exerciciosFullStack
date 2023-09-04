import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensagem:string ="";
  pegarMensagem(event: string) {
    console.log(event);
    this.mensagem = event;
  }
  title = 'segundaEtapa';
}
