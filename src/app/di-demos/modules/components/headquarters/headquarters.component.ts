import {Component, OnInit} from '@angular/core';
import {NavyService} from "../../services/NavyService";
import {NavyModule} from "../../navy-module";

@Component({
  selector: 'app-headquarters',
  templateUrl: './headquarters.component.html',
  styleUrls: ['./headquarters.component.css'],
  providers: []
})
export class HeadquartersComponent implements OnInit {

  constructor(private service: NavyService) {
  }

  ngOnInit(): void {
  }

}
