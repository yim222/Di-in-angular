//classic injection:

import {Injectable} from "@angular/core";

@Injectable({// Decorator that marks a class as available to be provided and injected as a dependency.
  providedIn: 'root',
})
export class Service1 {

  constructor() {
    console.log("Hi service 1 ");
  }


}
