import {Component, FactoryProvider, OnInit} from "@angular/core";
import {CountingService, Service1, ServiceOnService} from "./injected1.service";
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

      <button (click)="this.countingService1.count()">Count - instance 1
      </button>

      <h2>{{this.countingService1.index}}</h2>

      <button (click)="this.countingService2.count()">Count - instance 2
      </button>

      <h2>{{this.countingService2.index}}</h2>

    </div>
  `,
  styleUrls: [],
  providers: [
    {provide: Bootcamp, useClass: SuperBootcamp},//why should I do it lingar?
    SuperBootcamp//type provider
    , {provide: Value, useValue: 9}//value provider
    , factoryProvider
    // ,CountingService
    ,{provide: CountingService, useClass: CountingService}
  ]

})

export class MyComponent implements OnInit {

  constructor(private myInjectedService: Service1,
              private myInjectedByClass: SuperBootcamp,
              private myInjectedByValue: Value,
              private myInjectedServiceOnService: ServiceOnService,
              public countingService1: CountingService,//must to be public if we want to use it on the template
              // private countingService1: CountingService//Error
              public countingService2: CountingService,
  ) {

    console.log("myInjectedByValue = ", myInjectedByValue);
    let a = factoryProvider.useFactory();
    console.log("This value come by injected factory.");
    console.log("a = ", a);

  }

  ngOnInit(): void {

    console.log("Hi My Component ");
  }


}
