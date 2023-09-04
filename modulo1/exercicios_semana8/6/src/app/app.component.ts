import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundaEtapa';

  personagem: any = {
    nome: "Daryl Dixon",
    imagem: "assets/Daryl_Dixon.png",
    nomeAtor: "Norman Reedus",
    descricao: "Apesar de seu mau humor e volatilidade, ele é tolerado pelo grupo principal de sobreviventes devido às suas habilidades em caçar animais e à destemida eficiência em matar mortos-vivos.",
  };

}
