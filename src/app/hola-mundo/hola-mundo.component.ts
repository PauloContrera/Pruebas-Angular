import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent  {
    usuario=["Juan","Pedro","Maria","Luis"];
    activado: boolean = true;

    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
    hobbies: string[] ;

    constructor() { 
        this.name = "Juan";
        this.age = 30;
        this.address = {
            street: "Calle falsa 123",
            city: "Madrid"
        }
        this.hobbies = ["Cine", "Series", "Comer"];
      }
}
