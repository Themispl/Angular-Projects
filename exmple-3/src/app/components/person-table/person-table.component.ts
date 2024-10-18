import { Component, Input } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { EventBindExapleComponent } from '../event-bind-exaple/event-bind-exaple.component';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() person: Person | undefined
}
