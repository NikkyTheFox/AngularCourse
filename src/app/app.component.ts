import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ticks: number[] = [];

  onGameTick(eventData: {i: number}){
    console.log('here');
    this.ticks.push(eventData.i);
    console.log(eventData.i);
  }
}
