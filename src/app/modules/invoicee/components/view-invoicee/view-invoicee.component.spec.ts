import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvoiceeComponent } from './view-invoicee.component';

describe('ViewInvoiceeComponent', () => {
  let component: ViewInvoiceeComponent;
  let fixture: ComponentFixture<ViewInvoiceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInvoiceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInvoiceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
