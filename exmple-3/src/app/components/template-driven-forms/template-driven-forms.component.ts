import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { TemplateFormStractureComponent } from './template-form-stracture/template-form-stracture.component';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [PersonTableComponent, SimpleDatatableComponent, TemplateFormStractureComponent],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {


}