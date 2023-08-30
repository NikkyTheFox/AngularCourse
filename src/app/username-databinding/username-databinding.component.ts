import { Component } from '@angular/core';

@Component({
  selector: 'app-username-databinding',
  templateUrl: './username-databinding.component.html',
  styleUrls: ['./username-databinding.component.css']
})
export class UsernameDatabindingComponent {
  username = '';
  
  resetUsername(){
    this.username = '';
  }
}
