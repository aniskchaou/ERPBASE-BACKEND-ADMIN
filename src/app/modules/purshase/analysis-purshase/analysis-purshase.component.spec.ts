import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisPurshaseComponent } from './analysis-purshase.component';

describe('AnalysisPurshaseComponent', () => {
  let component: AnalysisPurshaseComponent;
  let fixture: ComponentFixture<AnalysisPurshaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisPurshaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisPurshaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
