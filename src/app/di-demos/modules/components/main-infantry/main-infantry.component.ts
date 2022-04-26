import { Component, OnInit } from '@angular/core';
import {NavyService} from "../../services/NavyService";
//Service Scope
// The services that we provide at the root module are app-scoped, which means that we can access them from every component/service within the app.
//
// Any service provided in the other Modules (Other than the Lazy Loaded Module) is also available for the entire application.
//
// The services that are provided in a Lazy Loaded Module are module scoped and available only in the Lazy loaded module.
//
// The services provided at the Component level are available only to the Component & and to the child components.
@Component({
  selector: 'app-main-infantry',
  templateUrl: './main-infantry.component.html',
  styleUrls: ['./main-infantry.component.css']
})
export class MainInfantryComponent implements OnInit {

  constructor(
    private service: NavyService
  ) { }

  ngOnInit(): void {
  }

}
