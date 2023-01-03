import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent{

  name:string = "Tiago";
  age:number = 34;
  job: string = "idiota";


  
 
}
