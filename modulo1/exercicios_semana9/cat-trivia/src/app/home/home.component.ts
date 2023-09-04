import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  fact!: Fact;
  srcImagem!:Img;
  srcGif!:Img;
  imgBoolean:boolean = true;
  gifBoolean:boolean = false;
  constructor(private h: HttpClient){

  }
  ngOnInit(): void {
    // this.getFacts().subscribe((i)=>{
    //   this.fact = i;
    //  //  console.log(this.fact);
    //  //  console.log(this.fact.status.sentCount);
    //  });
    //  this.getImagem().subscribe((e)=>{
    //    this.srcImagem = e;
    //    this.srcI = `https://cataas.com/${this.srcImagem.url}`;
    //    console.log(this.srcImagem);
    //  });
     // this.getImagem().subscribe((e)=>{
     //   //this.srcGif= e;
     //   this.srcI = `https://cataas.com/${this.srcImagem.url}`;
     //   console.log(this.srcImagem);
     // });
      this.gif();
      this.imagem();

    this.h.get<Fact>('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1').subscribe((e)=>{
        this.fact = e;
      console.log(this.fact);
    });

  }

  // getFacts():Observable<Fact>{
  //   let apiUrrl = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1';
  //   return this.h.get<Fact>(apiUrrl);
  // }
  imagem(){
    this.h.get<Img>('https://cataas.com/cat?json=true').subscribe(retorno => {
      this.srcImagem = retorno;
      //this.srcI = `https://cataas.com/${this.srcImagem.url}`;
      console.log(this.srcImagem);
      console.log(this.srcImagem.file);
      console.log(this.srcImagem.url);

      this.srcImagem.file = `https://cataas.com/${this.srcImagem.url}`
      });
      this.imgBoolean = true;
    this.gifBoolean = false;
  }
  gif(){
    this.h.get<Img>('https://cataas.com/cat/gif?json=true').subscribe(retorno => {
      this.srcGif = retorno;
      //this.srcI = `https://cataas.com/${this.srcImagem.url}`;
      console.log(this.srcGif);
      console.log(this.srcGif.file);
      console.log(this.srcGif.url);

     this.srcGif.file = `https://cataas.com/${this.srcGif.url}`
      });
      this.imgBoolean = false;
      this.gifBoolean = true;
  }


}
//exemplo do professor
// ngOnInit(): void {
//   const url = 'https://api.adviceslip.com/advice';
//   this.http.get<{ slip: { id: number, advice: string }}>(url).subscribe(retorno => {
//     this.slip = retorno.slip;
//   });
// }
export type Fact ={
  status: {
    verified: null,
    sentCount: number
  },
  _id: string,
  user: string,
  text:string,
  type: string,
  deleted: boolean,
  createdAt: string,
  updatedAt: string,
  __v: 0
};
export type Img = {
  tags: [],
  createdAt: string,
  updatedAt: string,
  validated: boolean,
  owner: null,
  file: string,
  mimetype: string,
  size: number,
  _id: string,
  url: string
}
