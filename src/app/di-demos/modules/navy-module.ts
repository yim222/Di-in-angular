import {NgModule} from '@angular/core';
import {HeadquartersComponent} from "./components/headquarters/headquarters.component";
import {FoodWarehouseComponent} from "./components/food-warehouse/food-warehouse.component";
import {ArsenalComponent} from "./components/arsenal/arsenal.component";
import {PilotComponent} from "./components/pilot/pilot.component";
import {MainNavyComponent} from "./components/main-navy/main-navy.component";

@NgModule({
  imports: [],
  providers: [],//will be available to entire app
  declarations: [MainNavyComponent, HeadquartersComponent, FoodWarehouseComponent, ArsenalComponent, PilotComponent],//soldier not available here
  exports: [

    MainNavyComponent
  ],
  bootstrap: []
})
export class NavyModule {
}
