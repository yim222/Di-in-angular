import { Component, OnInit } from '@angular/core';
import {
  bootcamp2TypeProvider,
  typeProvider, useExistProvider,
  valueProvider
} from "../some-providers";

@Component({
  selector: 'app-show-providers',
  templateUrl: './show-providers.component.html',
  styleUrls: ['./show-providers.component.css'],

})
export class ShowProvidersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("value providers = " , valueProvider.useValue);

    let a = new typeProvider();
    console.log(a.count())

    console.log(a.index);

    let b = new typeProvider();
    b.count();
    b.count();
    console.log(a.index);

    console.log(b.index);


    let c = new bootcamp2TypeProvider();
    c.count();
    c.count();


    let d =  new useExistProvider.useExisting();
    console.log("d = " ,  d.index);


  }

}
