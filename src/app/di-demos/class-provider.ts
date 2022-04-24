import { ClassProvider } from '@angular/core';

export class Bootcamp {
  constructor() {

    console.log("Hi Bootcamp")

  }
}

export class SuperBootcamp {

  constructor() {

    console.log("Hi Super Bootcamp")

  }

}

export const classProvider: ClassProvider = {
    provide: Bootcamp,
    useClass: SuperBootcamp
};
