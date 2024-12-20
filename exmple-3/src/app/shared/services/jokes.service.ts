import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Jokes, ChuckNorrisJokes} from '../interfaces/jokes';


const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const CHUCH_NORIS_API_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  http: HttpClient = inject(HttpClient);
 // constructor(HttpClient: HttpClient) { }

 GETDadJokes() {
  return this.http.get<Jokes>(DAD_JOKES_API_URL, {
    headers: {
      Accept: 'application/json'
    }
  });
}
getChuckNorrisJokes() {
  return this.http.get<ChuckNorrisJokes>(CHUCH_NORIS_API_URL, {
    headers: {
      Accept: 'application/json'
    }
  });
}
}
