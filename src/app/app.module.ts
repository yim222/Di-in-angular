import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyComponent} from "./di-demos/my-component";
import {FormsModule} from "@angular/forms";
import { ShowProvidersComponent } from './di-demos/show-providers/show-providers.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    ShowProvidersComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
