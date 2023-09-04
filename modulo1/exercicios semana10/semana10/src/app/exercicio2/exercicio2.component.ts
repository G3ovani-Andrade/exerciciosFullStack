import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component {

arrayFotos: any = [
  {
     url: "https://i.pinimg.com/474x/bf/62/83/bf62831faf87b320e3f4795095ec3c35.jpg",
     description:"Rick Grimes é um personagem fictício e o principal protagonista da série de quadrinhos pós-apocalíptica The Walking Dead e das nove primeiras temporadas da série de televisão de mesmo nome, na qual é interpretado por Andrew Lincoln."
   },
   {
     url: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/4c/Jeffrey-Dean-Morgan-como-Negan.jpg/250px-Jeffrey-Dean-Morgan-como-Negan.jpg",
     description:"Negan é um personagem fictício da série de quadrinhos americana The Walking Dead. Ele foi criado pelo escritor Robert Kirkman e pelo desenhista Charlie Adlard, e é interpretado pelo ator Jeffrey Dean Morgan na série de televisão de mesmo nome do canal AMC."
   },
   {
     url: "https://lumiere-a.akamaihd.net/v1/images/michonne_the_walking_dead_a81082e0.jpeg?region=206,0,1360,1360",
     description:"Michonne, é uma personagem fictícia da série de histórias em quadrinhos americana The Walking Dead. A personagem é interpretada pela atriz Danai Gurira na série de televisão de mesmo nome e dublada por Samira Wiley no video game The Walking Dead: Michonne."
   },
   {
     url: "https://lumiere-a.akamaihd.net/v1/images/maggie_greene_twd_5_36c4ba4c.jpeg?region=534,0,2133,2133",
     description:"Maggie Greene é uma personagem fictícia da série de quadrinhos norte-americana The Walking Dead, que é interpretada pela atriz Lauren Cohan na série de televisão de mesmo nome do canal AMC. Em ambas as mídias, ela é a filha do fazendeiro veterinário Hershel Greene e namorada de Glenn."
   },
   {
     url: "https://lumiere-a.akamaihd.net/v1/images/5fc289672cf782aaa7e5831f8e462438_4096x2730_2a60182d.jpeg?region=683,0,2730,2730",
     description:"Daryl Dixon é um personagem fictício da série televisiva de drama e terror pós-apocalíptica da AMC, The Walking Dead. O personagem foi criado especificamente para o seriado pelos escritores Frank Darabont, Charles H. Eglee e Jack LoGiudice e é interpretado pelo ator americano Norman Reedus."
   }
 ]
}
