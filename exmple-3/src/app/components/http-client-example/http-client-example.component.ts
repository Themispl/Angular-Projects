import { JokesService } from './../../shared/services/jokes.service';
import { Component, inject } from '@angular/core';
import{MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent {

    JokesService = inject(JokesService);

    dadJoke: string = '';
    chuckNorrisJoke: string = '';
    ngOnInit() {

      // this.JokesService.getChuckNorrisJokes()
      // .subscribe((response) => {
      //    this.chuckNorrisJoke = response.value;
      //   console.log("Chuck Joke:" + response);
      // });
      
      // this.JokesService.GETDadJokes()
      //   .subscribe((response) => {
      //     this.dadJoke = response.joke;
      //     console.log("Dad Joke" + response.joke);
      // }); anti na ta grafw polles fores kavw ayto apo kato
      this.refreshDadJoke();
      this.refreshChuckNorrisJoke();
    }

    refreshDadJoke() {
      this.JokesService.GETDadJokes()
        .subscribe((response) => {
          this.dadJoke = response.joke;  
      });
    }

    refreshChuckNorrisJoke(){
      this.JokesService.getChuckNorrisJokes()
      .subscribe((response) => {
         this.chuckNorrisJoke = response.value;
      });
    }
}
