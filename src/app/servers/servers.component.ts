import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //Allows to write inline html code, does not support indents nor new lines
  template: '<app-server></app-server><app-server></app-server>', 
  //templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
