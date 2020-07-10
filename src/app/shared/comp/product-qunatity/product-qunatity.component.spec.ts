import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQunatityComponent } from './product-qunatity.component';

describe('ProductQunatityComponent', () => {
  let component: ProductQunatityComponent;
  let fixture: ComponentFixture<ProductQunatityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductQunatityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQunatityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
