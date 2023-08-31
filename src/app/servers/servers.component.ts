import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // Normal Selector
  //selector: '[app-servers]', // Attribute Selector
  //selector: '.app-servers', // Class Selector

  //Use of `` allows to write with new lines and indents
  /*template: `
  <app-server></app-server>
  <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'placeholder text from two-way binding';
  servers = ['TestServer1', 'TestServer2'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(){}

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'A server was created! Name is '+ this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value; //Cast event to HTML Input as we know it is a HTML Input
  }
}
