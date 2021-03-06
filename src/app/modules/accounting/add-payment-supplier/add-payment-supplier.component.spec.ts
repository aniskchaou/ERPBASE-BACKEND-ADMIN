import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentSupplierComponent } from './add-payment-supplier.component';

describe('AddPaymentSupplierComponent', () => {
  let component: AddPaymentSupplierComponent;
  let fixture: ComponentFixture<AddPaymentSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
