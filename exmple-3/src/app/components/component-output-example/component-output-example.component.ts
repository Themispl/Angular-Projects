import { Person } from './../../../../../example-2/src/app/shared/intefaces/person';
import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson } from '../../shared/interfaces/person';


@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {//etsi vgazw ena alert otan patao se ena onoma sthn lista
    showPersonClicked(person:EPerson){
      alert(this.personTemplate(person))
    }

    personTemplate(person: EPerson){
      return`
      Person Details
      
      First Name: ${person.givenName}
      Last Name: ${person.surName}
      Age: ${person.age}
      Email: ${person.email}
      Address: ${person.address}
      `
    }
}
