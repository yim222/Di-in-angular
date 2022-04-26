import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWarehouseComponent } from './food-warehouse.component';

describe('FoodWarehouseComponent', () => {
  let component: FoodWarehouseComponent;
  let fixture: ComponentFixture<FoodWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
