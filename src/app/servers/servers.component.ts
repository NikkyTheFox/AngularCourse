import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // Normal Selector
  //selector: '[app-servers]', // Attribute Selector
  //selector: '.app-servers', // Class Selector
  //Use of `` allows to write with new lines and indents
  template: `
  <app-server></app-server>
  <app-server></app-server>`, 
  //templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
