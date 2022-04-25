//classic injection:

import {Injectable} from "@angular/core";

@Injectable({// Decorator that marks a class as available to be provided and injected as a dependency.
  providedIn: 'root',
})
export class Service1 {

  constructor() {
    console.log("Hi service 1 ");
  }

  public doSomething(){

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

  public doSomething(){

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



@Injectable({// Decorator that marks a class as available to be provided and injected as a dependency.
  providedIn: 'root'

})

export class CountingService {

  constructor() {
    console.log("Hi I am CountingService");

  }
  index:number = 0;
  count(){
    this.index++;
  }




}


