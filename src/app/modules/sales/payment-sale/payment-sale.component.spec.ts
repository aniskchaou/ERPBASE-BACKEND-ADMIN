import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSaleComponent } from './payment-sale.component';

describe('PaymentSaleComponent', () => {
  let component: PaymentSaleComponent;
  let fixture: ComponentFixture<PaymentSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
