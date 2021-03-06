import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisEventComponent } from './analysis-event.component';

describe('AnalysisEventComponent', () => {
  let component: AnalysisEventComponent;
  let fixture: ComponentFixture<AnalysisEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
