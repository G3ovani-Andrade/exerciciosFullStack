import { Component, OnInit } from '@angular/core';
import { HttpServiceService} from '../services/http/http-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{
  listaHttp:any=[];
  constructor(private serviceHttp: HttpServiceService){
    this.listaHttp = []
    this.listaHttp = serviceHttp.getPokemons();
  }
  ngOnInit(){

  }

}
