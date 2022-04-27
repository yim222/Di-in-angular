import {NavyModule} from "../navy-module";
import {Injectable} from "@angular/core";

@Injectable(
  {
    providedIn: NavyModule,//makes error
    // providedIn: "root"
  }
)
export class NavyService {
  //....
  constructor() {
    console.log("Hi I am navy service.")
  }
}
