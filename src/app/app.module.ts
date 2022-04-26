import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyComponent} from "./di-demos/my-component";
import {FormsModule} from "@angular/forms";
import { ShowProvidersComponent } from './di-demos/show-providers/show-providers.component';

import {NavyModule} from "./di-demos/modules/navy-module";
import {MainNavyComponent} from "./di-demos/modules/components/main-navy/main-navy.component";
import { MainInfantryComponent } from './di-demos/modules/components/main-infantry/main-infantry.component';
import {InfantryModuleModule} from "./di-demos/modules/infantry-module";

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    ShowProvidersComponent,
    // MainInfantryComponent,
    // MainNavyComponent
    // NavyModule

  ],
  imports: [
    BrowserModule, FormsModule, NavyModule, InfantryModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
