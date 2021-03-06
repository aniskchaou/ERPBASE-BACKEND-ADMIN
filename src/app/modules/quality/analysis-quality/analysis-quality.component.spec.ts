import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisQualityComponent } from './analysis-quality.component';

describe('AnalysisQualityComponent', () => {
  let component: AnalysisQualityComponent;
  let fixture: ComponentFixture<AnalysisQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
