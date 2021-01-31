import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustWarehouseComponent } from './adjust-warehouse.component';

describe('AdjustWarehouseComponent', () => {
  let component: AdjustWarehouseComponent;
  let fixture: ComponentFixture<AdjustWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjustWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
