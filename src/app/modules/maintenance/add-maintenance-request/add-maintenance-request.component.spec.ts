import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaintenanceRequestComponent } from './add-maintenance-request.component';

describe('AddMaintenanceRequestComponent', () => {
  let component: AddMaintenanceRequestComponent;
  let fixture: ComponentFixture<AddMaintenanceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaintenanceRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaintenanceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
