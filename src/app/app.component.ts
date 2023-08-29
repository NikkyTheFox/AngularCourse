import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //external .css file
  // As with templates, there is a possiblity to write inline css code. Do not forget about ``
  /*styles: [`
    h3{
      color: red;
    }
  `]*/
})
export class AppComponent {
  name = 'Adam';
}
