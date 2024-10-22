import { Component } from '@angular/core';
import { ReactiveFormStractureComponent } from './reactive-form-stracture/reactive-form-stracture.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-reactive-forms-example',
  standalone: true,
  imports: [ReactiveFormStractureComponent, PersonTableComponent, SimpleDatatableComponent],
  templateUrl: './reactive-forms-example.component.html',
  styleUrl: './reactive-forms-example.component.css'
})
export class ReactiveFormsExampleComponent {
  currentPerson: EPerson | undefined;

  onPerson(person: EPerson){
    console.log("Parent>>>", person);
    this.currentPerson = person;
    ManyPerson.push(person);
  }
}
