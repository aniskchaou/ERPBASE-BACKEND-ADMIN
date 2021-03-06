import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisIventoryComponent } from './analysis-iventory.component';

describe('AnalysisIventoryComponent', () => {
  let component: AnalysisIventoryComponent;
  let fixture: ComponentFixture<AnalysisIventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisIventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
