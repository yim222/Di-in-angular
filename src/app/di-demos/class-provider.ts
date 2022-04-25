import {ClassProvider, FactoryProvider, Injectable} from '@angular/core';

@Injectable({// Decorator that marks a class as available to be provided and injected as a dependency.
  providedIn: 'root',
})export class Bootcamp {
  constructor() {

    console.log("Hi Bootcamp")

  }
}

export class SuperBootcamp {

  constructor() {

    console.log("Hi Super Bootcamp")

  }

}


export class Value {

  constructor() {

    console.log("Hi I serve as value")

  }

}

export const factoryProvider: FactoryProvider = {
  provide: 'factory1',
  useFactory: function () {
    console.log("I am a function that can return things");
    return {a:"a", b:"b"}
  },
  //U cannot add you own functions...
  // useLingar: ()=> {
  //   return  "lingar";
  // },
  deps: []
};


export const classProvider: ClassProvider = {
    provide: Bootcamp,
    useClass: SuperBootcamp
};
