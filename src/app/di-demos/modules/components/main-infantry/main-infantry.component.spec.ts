import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfantryComponent } from './main-infantry.component';

describe('MainInfantryComponent', () => {
  let component: MainInfantryComponent;
  let fixture: ComponentFixture<MainInfantryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInfantryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfantryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
