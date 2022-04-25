import {Component, FactoryProvider, OnInit} from "@angular/core";
import {Service1, ServiceOnService} from "./injected1.service";
import {
  Bootcamp,
  factoryProvider,
  SuperBootcamp,
  Value
} from "./class-provider";
//live example: https://stackblitz.com/run?file=src%2Fapp%2Fproviders.component.ts
@Component({
  selector: 'app-my-component',
  template: `
    <div>
        <h2>My Component</h2>

    </div>
  `,
  styleUrls: [],
  providers :[
    { provide: Bootcamp, useClass: SuperBootcamp },//why should I do it lingar?
    SuperBootcamp//type provider
    ,{provide: Value, useValue: 9}//value provider
    ,factoryProvider

  ]

})

export class MyComponent implements OnInit {

  constructor( private myInjectedService: Service1,
               private myInjectedByClass: SuperBootcamp,
               private myInjectedByValue: Value,
               private myInjectedServiceOnService: ServiceOnService
  ){

    console.log("myInjectedByValue = ", myInjectedByValue);
    let a = factoryProvider.useFactory();
    console.log("This value come by injected factory.");
    console.log("a = ", a);

  }
  ngOnInit(): void {

    console.log("Hi My Component ")
  }


}
