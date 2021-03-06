import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentClientComponent } from './add-payment-client.component';

describe('AddPaymentClientComponent', () => {
  let component: AddPaymentClientComponent;
  let fixture: ComponentFixture<AddPaymentClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
