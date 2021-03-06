import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisFixComponent } from './analysis-fix.component';

describe('AnalysisFixComponent', () => {
  let component: AnalysisFixComponent;
  let fixture: ComponentFixture<AnalysisFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
