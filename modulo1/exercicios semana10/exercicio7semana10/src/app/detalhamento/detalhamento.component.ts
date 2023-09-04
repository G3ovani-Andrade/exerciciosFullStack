import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpServiceService } from '../services/http/http-service.service';

@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.css']
})
export class DetalhamentoComponent implements OnInit{
  idPokemon = "";
  pokemon: any;
  constructor(private rotaAtiva:ActivatedRoute,private http:HttpServiceService){

  }
  ngOnInit(): void {
    this.rotaAtiva.params.subscribe((rota)=>{
      this.idPokemon = rota['nomePokemon'];
    })
    this.http.getPokemonPorId(this.idPokemon).subscribe((retorno)=>{
      this.pokemon = retorno;
      console.log(this.pokemon);
    })
  }

}
