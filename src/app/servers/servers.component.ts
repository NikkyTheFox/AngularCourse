import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //Use of `` allows to write with new lines and indents
  template: `
  <app-server></app-server>
  <app-server></app-server>`, 
  //templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
