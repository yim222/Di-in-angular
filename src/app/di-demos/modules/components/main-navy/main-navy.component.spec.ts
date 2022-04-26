import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavyComponent } from './main-navy.component';

describe('Main0navyComponent', () => {
  let component: MainNavyComponent;
  let fixture: ComponentFixture<MainNavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
