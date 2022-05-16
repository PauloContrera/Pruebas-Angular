import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto-aleatorio',
  templateUrl: './texto-aleatorio.component.html',
  styleUrls: ['./texto-aleatorio.component.css']
})
export class TextoAleatorioComponent implements OnInit {
  texto = document.getElementById('texto');
  text2=["H","o","l","a"," ","M","u","n","d","o"];
  constructor() { }

  ngOnInit(): void {
  }
  dateControl = document.querySelector('input[type="date"]');
  date = new Date();
  minuto = this.date.getMinutes();
  segundos=this.date.getSeconds();
  milisegundos=this.date.getMilliseconds();
  aux2=this.text2.length;
  texto3: any=this.Vectorizar_acumulativo(this.text2);
        // console.log("holu:");
     
        // texto.innerHTML=this.texto3[this.milisegundos%this.aux2];



  Vectorizar_acumulativo(texto: string[]){
    var vector=[];
    var aux3 = null;
    for(var i=0;i<texto.length;i++){
        aux3=texto[0];
        for(var j=1;j<=i;j++){
            aux3+=texto[j];
        }
        vector.push(aux3);
        // console.log(vector);
    }
      return     vector;    
  }



}


