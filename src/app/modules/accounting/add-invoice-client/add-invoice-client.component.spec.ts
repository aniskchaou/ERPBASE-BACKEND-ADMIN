import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceClientComponent } from './add-invoice-client.component';

describe('AddInvoiceClientComponent', () => {
  let component: AddInvoiceClientComponent;
  let fixture: ComponentFixture<AddInvoiceClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInvoiceClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoiceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
