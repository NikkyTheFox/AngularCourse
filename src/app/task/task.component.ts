import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  content: string = 'Future Angular expert'
  clickNumber: number = 0;
  toggleFlag: boolean = false;
  clicks: number[] = [];

  onClick(): void {
    this.toggleFlag = !this.toggleFlag;
    this.clicks.push(this.clickNumber);
    this.clickNumber++;
  }

  getVisibility(){
    return this.toggleFlag === true ? 'visible' : 'hidden'
  }
  
  getContent(){
    return this.content;
  }

  getClickNumber(){
    return this.clickNumber;
  }

  getToggleFlag(){
    return this.toggleFlag;
  }

  getClicks(){
    return this.clicks;
  }
}
