//classic injection:
import {FactoryProvider, Injectable, InjectionToken} from "@angular/core";

@Injectable({// Decorator that marks a class as available to be provided and injected as a dependency.
  providedIn: 'root',
})
export class Service1 {

  constructor() {
    console.log("Hi service 1 ");
  }

  public doSomething() {

    console.log("Service 1 do something...")
  }


}

@Injectable({
  providedIn: 'root'
})
export class Service2 {

  constructor() {
    console.log("Hi service 2 ");
  }

  public doSomething() {

    console.log("Service 2 do something...")
  }


}

@Injectable({// Decorator that marks a class as available to be provided and injected as a dependency.
  providedIn: 'root'

})

export class ServiceOnService {

  constructor(private innerService: Service1,
              private innerService2: Service2) {
    console.log("Hi I am ServiceOnService");
    innerService.doSomething();
  }


}


@Injectable(
  // {// Decorator that marks a class as available to be provided and injected as a dependency.
  // }
)

export class CountingService {

  constructor() {
    console.log("Hi I am CountingService");

  }

  index: number = 0;

  count() {
    this.index++;
  }


}


@Injectable()
export class CountingService2 {

  constructor() {
    console.log("Hi I am CountingService2");

  }

  index: number = 0;

  count() {
    this.index++;
  }


}

@Injectable()
export class SimpleObject {
  a = "amm";
  b = "ahh";
}

export const SIMPLE_OBJECT = new InjectionToken<SimpleObject>('simple.object');


export const carFactoryService: FactoryProvider = {

  provide: "aa",
  useFactory: (
    brand: string, year: number) => {
    return {brand: brand, year: year}
  }

};
