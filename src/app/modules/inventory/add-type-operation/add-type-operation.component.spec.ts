import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeOperationComponent } from './add-type-operation.component';

describe('AddTypeOperationComponent', () => {
  let component: AddTypeOperationComponent;
  let fixture: ComponentFixture<AddTypeOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
