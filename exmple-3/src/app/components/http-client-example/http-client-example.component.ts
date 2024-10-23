import { JokesService } from './../../shared/services/jokes.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent {

    JokesService = inject(JokesService);

    dadJoke: string = '';
    chuckNorrisJoke: string = '';
    ngOnInit() {

      this.JokesService.getChuckNorrisJokes()
      .subscribe((response) => {
         //this.chuckNorrisJoke = response.value;
        console.log("Chuck Joke:" + response);
      });
      
      this.JokesService.GETDadJokes()
        .subscribe((response) => {
          //this.dadJoke = response.joke;
          console.log("Dad Joke" + response.joke);
      });
    }
}
