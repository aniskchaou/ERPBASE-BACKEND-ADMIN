import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisFleetComponent } from './analysis-fleet.component';

describe('AnalysisFleetComponent', () => {
  let component: AnalysisFleetComponent;
  let fixture: ComponentFixture<AnalysisFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisFleetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
