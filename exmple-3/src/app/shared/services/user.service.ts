import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { User } from '../interfaces/mongo-backend';

const API_URL=`${environment.apiURL}/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http:HttpClient= inject(HttpClient);
  
  registerUser(user:User){
    return this.http.post<{msg: string}>(`${API_URL}/register`,user);
  }
}
