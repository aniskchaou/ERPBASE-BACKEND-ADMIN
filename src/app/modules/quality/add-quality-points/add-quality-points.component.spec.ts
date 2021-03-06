import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQualityPointsComponent } from './add-quality-points.component';

describe('AddQualityPointsComponent', () => {
  let component: AddQualityPointsComponent;
  let fixture: ComponentFixture<AddQualityPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQualityPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQualityPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
