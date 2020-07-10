import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCartSummaryComponent } from './shipping-cart-summary.component';

describe('ShippingCartSummaryComponent', () => {
  let component: ShippingCartSummaryComponent;
  let fixture: ComponentFixture<ShippingCartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingCartSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
