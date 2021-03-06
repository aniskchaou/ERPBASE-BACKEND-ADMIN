import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisPayrollComponent } from './analysis-payroll.component';

describe('AnalysisPayrollComponent', () => {
  let component: AnalysisPayrollComponent;
  let fixture: ComponentFixture<AnalysisPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisPayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
