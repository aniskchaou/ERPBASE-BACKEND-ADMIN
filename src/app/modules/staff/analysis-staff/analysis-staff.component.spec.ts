import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisStaffComponent } from './analysis-staff.component';

describe('AnalysisStaffComponent', () => {
  let component: AnalysisStaffComponent;
  let fixture: ComponentFixture<AnalysisStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
