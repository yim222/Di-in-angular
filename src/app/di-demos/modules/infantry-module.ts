

import { NgModule } from '@angular/core';
import {HeadquartersComponent} from "./components/headquarters/headquarters.component";
import {FoodWarehouseComponent} from "./components/food-warehouse/food-warehouse.component";
import {ArsenalComponent} from "./components/arsenal/arsenal.component";
import {PilotComponent} from "./components/pilot/pilot.component";
import {NavyService} from "./services/NavyService";
import {MainNavyComponent} from "./components/main-navy/main-navy.component";
import {MainInfantryComponent} from "./components/main-infantry/main-infantry.component";
@NgModule({
  imports:      [  ],
  providers:    [ ],
  declarations: [MainInfantryComponent,
    // HeadquartersComponent, FoodWarehouseComponent, ArsenalComponent, PilotComponent

  ],//soldier not available here
  exports: [

    MainInfantryComponent
  ],
  bootstrap:    [  ]
})
export class InfantryModuleModule { }
