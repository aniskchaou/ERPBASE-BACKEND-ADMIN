import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropositionComponent } from './view-proposition.component';

describe('ViewPropositionComponent', () => {
  let component: ViewPropositionComponent;
  let fixture: ComponentFixture<ViewPropositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPropositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
