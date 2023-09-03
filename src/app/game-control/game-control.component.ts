import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('tick') gameTick = new EventEmitter<{i: number}>();
  iterator: number = 1;
  interval: any;
  constructor() { }

  ngOnInit(): void {
  }

  emitTick(){
    this.gameTick.emit({i: this.iterator});
    this.iterator = this.iterator + 1;
    console.log('emitting');
  }

  onStart(){
    this.interval = setInterval(() => this.emitTick(), 1000);
  }

  onStop(){
    clearInterval(this.interval);
  }

}
