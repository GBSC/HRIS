import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTypeAddDialogComponent } from './add.component';

describe('EmployeeTypeAddDialogComponent', () => {
  let component: EmployeeTypeAddDialogComponent;
  let fixture: ComponentFixture<EmployeeTypeAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTypeAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTypeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
