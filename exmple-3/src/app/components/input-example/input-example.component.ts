import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.css'
})
export class InputExampleComponent {

  person0: Person ={
    givenName:"themis",
    surName:"Pila",
    age: 33,
    address:"ilioup",
    email:"themis@kfkf.com"
  }
  person1: Person ={
    givenName:"themis2",
    surName:"Pila2",
    age: 33,
    address:"ilioup",
    email:"themis2@kfkf.com"
  }
}
