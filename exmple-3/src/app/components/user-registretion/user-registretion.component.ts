import { MatButtonModule } from '@angular/material/button';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/mongo-backend';


@Component({
  selector: 'app-user-registretion',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './user-registretion.component.html',
  styleUrl: './user-registretion.component.css'
})
export class UserRegistretionComponent {
  userService= inject(UserService);

  registrationStatus:{succes:boolean, message:string}={succes:false, message:'Not attempt yet'};

  form = new FormGroup({
    givenName: new FormControl('', [Validators.required]),
    surName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  onSubmit(value:any) {
    console.log(value);
    const user: User={
      givenName: this.form.get('givenName')?.value || '',
      surName: this.form.get('surName')?.value || '',
      email: this.form.get('email')?.value || '',
      password: this.form.get('password')?.value || '',
      confirmPassword: this.form.get('confirmPassword')?.value || ''
    }
    this.userService.registerUser(user).subscribe({
      next: (response) =>{//an gini h klisi
        console.log("No Errors",response);
        this.registrationStatus={succes:true, message:response.msg};
      },
      error: (response) =>{//an den gini h klisi
        console.log("Errors",response);
        this.registrationStatus={succes:false, message:response.error.msg};
      }
    })

}}
