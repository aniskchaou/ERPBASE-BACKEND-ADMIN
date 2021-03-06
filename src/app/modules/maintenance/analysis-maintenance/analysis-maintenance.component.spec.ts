import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMaintenanceComponent } from './analysis-maintenance.component';

describe('AnalysisMaintenanceComponent', () => {
  let component: AnalysisMaintenanceComponent;
  let fixture: ComponentFixture<AnalysisMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
