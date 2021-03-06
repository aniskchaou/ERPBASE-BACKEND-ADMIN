import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellAnalysisComponent } from './sell-analysis.component';

describe('SellAnalysisComponent', () => {
  let component: SellAnalysisComponent;
  let fixture: ComponentFixture<SellAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
