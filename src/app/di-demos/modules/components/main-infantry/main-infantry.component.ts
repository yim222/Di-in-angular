import { Component, OnInit } from '@angular/core';
import {NavyService} from "../../services/NavyService";

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
