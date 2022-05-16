import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent  {

  usuarios: string[]=['Juan', 'Pedro', 'Maria', 'Luis', 'Jorge'];
  name: string="Antonella";
  age: number=24;

  decirHola(){
    alert('Hola');
  }
  borrarUsuario(persona: string){
    for(let i=0;i<this.usuarios.length;i++){
      if(this.usuarios[i]==persona){
        this.usuarios.splice(i,1);
      }
    }
  }
  agregarUsuario(NuevoUsuario: any){
    console.log(NuevoUsuario.value);
    //agregar Usuario
    this.usuarios.push(NuevoUsuario.value);
    return false;
  }
}
