import {ExistingProvider, TypeProvider, ValueProvider} from "@angular/core";

export const valueProvider: ValueProvider = {
  provide: 'Token',
  useValue: 'bootcamp'
};



export class Bootcamp {

  constructor() {
    console.log("Hi Bootcamp");

  }

  index: number = 0;

  count() {
    this.index++;
  }


}


export class Bootcamp2 {

  constructor() {
    console.log("Hi Bootcamp2");

  }

  index: number = 0;

  count() {
    this.index++;
  }


}
export const typeProvider: TypeProvider = Bootcamp;


export const bootcamp2TypeProvider: TypeProvider = Bootcamp2;



export const useExistProvider: ExistingProvider = {
  provide: Bootcamp2,
  useExisting: bootcamp2TypeProvider
};
