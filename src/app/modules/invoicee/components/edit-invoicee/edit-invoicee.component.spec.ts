import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvoiceeComponent } from './edit-invoicee.component';

describe('EditInvoiceeComponent', () => {
  let component: EditInvoiceeComponent;
  let fixture: ComponentFixture<EditInvoiceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInvoiceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInvoiceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
