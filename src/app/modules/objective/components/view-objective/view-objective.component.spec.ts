import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewObjectiveComponent } from './view-objective.component';

describe('ViewObjectiveComponent', () => {
  let component: ViewObjectiveComponent;
  let fixture: ComponentFixture<ViewObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
