import { 
  Component, 
  Input, 
  OnInit, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
 } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None // Change this to modify css encaptulation! 
                                        // In this case, label{ color: red } will be applied globally, hence applied to cockpit component too!

})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy called!');
  }
}
