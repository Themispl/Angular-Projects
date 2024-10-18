import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      givenName:"themis5",
      surName:"Pila",
      age: 33,
      address:"ilioup",
      email:"themis@kfkf.com"
    },
    {
      givenName:"themis6",
      surName:"Pila",
      age: 33,
      address:"ilioup",
      email:"themis@kfkf.com"
    },
    {
      givenName:"themis7",
      surName:"Pila",
      age: 33,
      address:"ilioup",
      email:"themis@kfkf.com"
    },
    {
      givenName:"themis8",
      surName:"Pila",
      age: 33,
      address:"ilioup",
      email:"themis@kfkf.com"
    }
  ]

}
