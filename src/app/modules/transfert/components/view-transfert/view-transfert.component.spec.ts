import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransfertComponent } from './view-transfert.component';

describe('ViewTransfertComponent', () => {
  let component: ViewTransfertComponent;
  let fixture: ComponentFixture<ViewTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransfertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
