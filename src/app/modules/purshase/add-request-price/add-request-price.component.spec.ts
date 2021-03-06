import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequestPriceComponent } from './add-request-price.component';

describe('AddRequestPriceComponent', () => {
  let component: AddRequestPriceComponent;
  let fixture: ComponentFixture<AddRequestPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRequestPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequestPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
