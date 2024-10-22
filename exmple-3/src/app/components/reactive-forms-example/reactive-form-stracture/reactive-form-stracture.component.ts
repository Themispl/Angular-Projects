import { Component, Output, EventEmitter } from '@angular/core';
import{FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatButtonModule} from '@angular/material/button';
import { EPerson } from '../../../shared/interfaces/person';

@Component({
  selector: 'app-reactive-form-stracture',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './reactive-form-stracture.component.html',
  styleUrl: './reactive-form-stracture.component.css'
})
export class ReactiveFormStractureComponent {
@Output() person = new EventEmitter<EPerson>()

  userForm = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18,[
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('', Validators.required)
  })

  ngOnInit(){
    this.userForm.get('address')?.setValue('road1')//etsi pernei to value auto san proepilogi
  }

  onSubmit(value: any){
    console.log(value);
    this.person.emit(value as EPerson)
    this.userForm.reset();
  }
}
