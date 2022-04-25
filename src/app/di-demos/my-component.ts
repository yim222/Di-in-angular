import {Component, FactoryProvider, Inject, OnInit} from "@angular/core";
import {
  CountingService,
  CountingService2,
  Service1,
  ServiceOnService
} from "./injected1.service";
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

      <h1>
        See here how two instance of the same service are different instances. Since it's two
        difference injections of useClass
        <br/>
        &#x2193;
      </h1>
      <p>*BTW you can see how to use string token</p>


      <button (click)="this.countingService3.count()">Count - instance 3
      </button>

      <h2>{{this.countingService3.index}}</h2>


      <button (click)="this.countingService4.count()">Count - instance 4
      </button>

      <h2>{{this.countingService4.index}}</h2>

      <p>Don't get confused - it's on the injection level. If you create two
      params from the same injected instance it still will be the same. For example this will be like 3: </p>
      <button (click)="this.countingService5.count()">Count - instance 5
      </button>

      <h2>{{this.countingService5.index}}</h2>

      <h3>Solution - if you want singleton - (look at the first counter above </h3>

      <button (click)="this.countingService6.count()">Count - instance 6
      </button>

      <h2>{{this.countingService6.index}}</h2>


    </div>
  `,
  styleUrls: [],
  providers: [
    {provide: Bootcamp, useClass: SuperBootcamp},//why should I do it lingar?
    SuperBootcamp//type provider
    , {provide: Value, useValue: 9}//value provider
    , factoryProvider
    // ,CountingService
    ,{provide: CountingService, useClass: CountingService}//another useClass service.
    //with string token:
    // https://www.tektutorialshub.com/angular/injection-token-in-angular/#string-token

    ,{provide: "token1", useClass: CountingService2}
    ,{provide: "token2", useClass: CountingService2},
    { provide: "use-exist", useExisting: CountingService}//Play with this, and see the differences
    // { provide: "use-exist", useClass: CountingService}

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
//    @Inject('PRODUCT_SERVICE') private productService: ProductService
              @Inject("token1")public countingService3: CountingService2,
              @Inject("token2")public countingService4: CountingService2,
              @Inject("token1")public countingService5: CountingService2,
              @Inject("use-exist")public countingService6: CountingService2,


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
