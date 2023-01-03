import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {


  animals: Animal[] = [
    { name :"Turca", type: "Dog", age: 0 },
    { name: "Tom", type: "Cat", age: 1 },
    { name: "Frida", type: "Dog", age: 5 },
    { name: "Bob", type: "Horse", age: 3 }
  ];

  animalDetails: string = "";
  showAge(animal:Animal):void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
    
  }

}
