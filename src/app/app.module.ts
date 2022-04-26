import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './di-demos/component-one/component-one.component';
import {MyComponent} from "./di-demos/my-component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    ComponentOneComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
