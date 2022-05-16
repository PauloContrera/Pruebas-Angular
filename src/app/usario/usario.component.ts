import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usario',
  templateUrl: './usario.component.html',
  styleUrls: ['./usario.component.css']
})
export class UsarioComponent  {
     @Input() usuario: any = {};
  
    

}
