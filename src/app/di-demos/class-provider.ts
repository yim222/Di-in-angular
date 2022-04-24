import {ClassProvider, Injectable} from '@angular/core';

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

export const classProvider: ClassProvider = {
    provide: Bootcamp,
    useClass: SuperBootcamp
};
