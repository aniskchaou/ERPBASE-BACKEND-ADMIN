import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisAccountingComponent } from './analysis-accounting.component';

describe('AnalysisAccountingComponent', () => {
  let component: AnalysisAccountingComponent;
  let fixture: ComponentFixture<AnalysisAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisAccountingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
