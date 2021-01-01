import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceeComponent } from './add-invoicee.component';

describe('AddInvoiceeComponent', () => {
  let component: AddInvoiceeComponent;
  let fixture: ComponentFixture<AddInvoiceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInvoiceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoiceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
