import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef; // Local reference fetched through ViewChild()

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent});
  // }

  onAddServer(nameInput) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     blueprintName: this.newServerName, 
  //     blueprintContent: this.newServerContent});
  // }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value, 
      blueprintContent: this.serverContentInput.nativeElement.value});
  }
}
