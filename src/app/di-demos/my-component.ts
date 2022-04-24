import {Component, OnInit} from "@angular/core";
import {Service1} from "./injected1.service";
import {Bootcamp, SuperBootcamp} from "./class-provider";
//live example: https://stackblitz.com/run?file=src%2Fapp%2Fproviders.component.ts
@Component({
  selector: 'app-my-component',
  template: `
    <div>
        <h2>My Component</h2>

    </div>
  `,
  styleUrls: [],
  providers :[{ provide: Bootcamp, useClass: SuperBootcamp }]

})

export class MyComponent implements OnInit {

  constructor( private myInjectedService: Service1,
               private myInjectedByClass: Bootcamp) {
  }
  ngOnInit(): void {

    console.log("Hi My Component ")
  }


}
