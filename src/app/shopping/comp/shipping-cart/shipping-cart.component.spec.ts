import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCartComponent } from './shipping-cart.component';

describe('ShippingCartComponent', () => {
  let component: ShippingCartComponent;
  let fixture: ComponentFixture<ShippingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
