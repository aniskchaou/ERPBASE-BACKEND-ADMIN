import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQualityControlComponent } from './add-quality-control.component';

describe('AddQualityControlComponent', () => {
  let component: AddQualityControlComponent;
  let fixture: ComponentFixture<AddQualityControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQualityControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQualityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
