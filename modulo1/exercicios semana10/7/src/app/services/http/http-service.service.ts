import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url: string = 'https://pokeapi.co/api/v2/pokemon'
  pokemons: any = []
  constructor(private http: HttpClient) {
    this.getPokemonApi();
  }
  getPokemonApi() {
    this.pokemons = []
    this.http.get<any>(this.url).subscribe((pokemon) => {
      pokemon.results.forEach((pokemon:any) => {
        this.http.get<any>(`${this.url}/${pokemon.name}`).subscribe((retorno)=>{
          this.pokemons.push(retorno)
        })
      });
    });
  }
  getPokemons() {
    return this.pokemons
  }
  getPokemonPorId(nomePokemon: string) {
    return this.http.get<any>(`${this.url}/${nomePokemon}`)
  }
}
