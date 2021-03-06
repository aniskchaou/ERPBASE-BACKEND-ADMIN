import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceSupplierComponent } from './add-invoice-supplier.component';

describe('AddInvoiceSupplierComponent', () => {
  let component: AddInvoiceSupplierComponent;
  let fixture: ComponentFixture<AddInvoiceSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInvoiceSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoiceSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
