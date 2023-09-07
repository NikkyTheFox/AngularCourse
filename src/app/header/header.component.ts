import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() pageSelect = new EventEmitter<string>();
  collapsed = true;
  


  onPress(value: string){
    this.pageSelect.emit(value);
  }
}
