import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisProductionComponent } from './analysis-production.component';

describe('AnalysisProductionComponent', () => {
  let component: AnalysisProductionComponent;
  let fixture: ComponentFixture<AnalysisProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
