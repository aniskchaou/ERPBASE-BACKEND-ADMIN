import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendQuoteComponent } from './send-quote.component';

describe('SendQuoteComponent', () => {
  let component: SendQuoteComponent;
  let fixture: ComponentFixture<SendQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
