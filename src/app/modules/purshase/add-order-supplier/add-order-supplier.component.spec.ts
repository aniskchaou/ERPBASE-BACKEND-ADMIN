import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderSupplierComponent } from './add-order-supplier.component';

describe('AddOrderSupplierComponent', () => {
  let component: AddOrderSupplierComponent;
  let fixture: ComponentFixture<AddOrderSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
