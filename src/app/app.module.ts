import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // FormsModule is required for Two-Way-Binding!!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
