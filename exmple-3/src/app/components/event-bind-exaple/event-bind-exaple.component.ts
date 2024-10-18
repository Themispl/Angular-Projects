import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind-exaple',
  standalone: true,
  imports: [],
  templateUrl: './event-bind-exaple.component.html',
  styleUrl: './event-bind-exaple.component.css'
})
export class EventBindExapleComponent {
  times: number =0;
  userInput: string = ' ';

  incrementTimes(){
    this.times++
  }

  decrementTimes(){
    this.times--
  }

  resetTimes(){
    this.times=0
  }
  onUserInput(event: Event){
    this.userInput = (event.target as HTMLInputElement).value;
  }
}
