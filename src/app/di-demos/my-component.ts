import {Component, FactoryProvider, Inject, OnInit} from "@angular/core";
import {
   carFactoryService,
  CountingService,
  CountingService2,
  Service1,
  ServiceOnService, SIMPLE_OBJECT, SimpleObject
} from "./injected1.service";
import {
  Bootcamp,
  factoryProvider,
  SuperBootcamp,
  Value
} from "./class-provider";
import {retry} from "rxjs";
// import {NavyModule} from "./modules/navy-module";
import {NavyService} from "./modules/services/NavyService";


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
      <h3>Injection Token Object</h3>
      <h4>a = {{simpleObj.a}}</h4>

      <h2>Cars : </h2>
      <ul>
        <li *ngFor="let car of cars">

          brand: {{car.brand}}, year: {{car.year}}
        </li>
      </ul>
      new cars:
      <br/>
      Brand:
      <input  name = "brand" [(ngModel)]="newCarData.brand">
<!--      Because You are usine ngModel You don't need the function -->
      <p>new brand = {{newCarData.brand}}</p>
      <br/>
      year:
      <input (keyup)="onKey($event)" type = "number" name ="year" [(ngModel)]="newCarData.year">
      <p>new year = {{newCarData.year}}</p>
      <button (click)="addCar()">add car with use factory </button>
      <button (click)="doSomething()">Do something</button>
<!--U cannot access the app-headquarters directly since it's defined inside moudule... -->
<!--      <app-headquarters></app-headquarters>-->

<!--    <app-main0navy></app-main0navy>-->
    <app-main-infantry></app-main-infantry>







    </div>
  `,
  styleUrls: [],
  providers: [
    {provide: Bootcamp, useClass: SuperBootcamp}//why should I do it lingar?
    ,SuperBootcamp//type provider
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
    ,{provide: SIMPLE_OBJECT, useValue: {a: "zxczxc"}},
    carFactoryService//use factory...
    ,{provide: "use-factory", useFactory:()=>alert("simple-factory... ")},

  ]

})

export class MyComponent implements OnInit {

  constructor(
              private myInjectedService: Service1,
              private myInjectedByClass: SuperBootcamp,
              private myInjectedByValue: Value,
              private myInjectedServiceOnService: ServiceOnService,
              public countingService1: CountingService,//must to be public if we want to use it on the template
              // private countingService1: CountingService//Error
              public countingService2: CountingService,
              //    @Inject('PRODUCT_SERVICE') private productService: ProductService
              @Inject("token1") public countingService3: CountingService2,
              @Inject("token2") public countingService4: CountingService2,
              @Inject("token1") public countingService5: CountingService2,
              @Inject("use-exist") public countingService6: CountingService2,
              @Inject(SIMPLE_OBJECT) public simpleObj: SimpleObject,
              // @Inject("use-factory") public simplefactory: any// not working well
              private service: NavyService

  ) {

    console.log("myInjectedByValue = ", myInjectedByValue);
    let a = factoryProvider.useFactory();
    console.log("This value come by injected factory.");
    console.log("a = ", a);

  }

  cars: any = [
    {brand: "Volvo", year: 2000},
    {brand: "Honda", year: 2010}

  ];
  newCarData: any = {brand: "", year:  0};


  onKey(event: any){
    // console.log("???, ", event.target.name);

    this.newCarData[event.target.name] = event.target.value;

  }
  addCar(){
    let newCar = carFactoryService.useFactory(this.newCarData.brand, this.newCarData.year);
    this.cars.push(newCar);

    this.newCarData = {
      brand: "", year: 0

    }
  }

  doSomething(){
    // this.simplefactory();
  }

  ngOnInit(): void {

    console.log("Hi My Component ");
  }
}
