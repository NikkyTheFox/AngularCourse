import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { UsernameDatabindingComponent } from './username-databinding/username-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameDatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // FormsModule is required for Two-Way-Binding!!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
