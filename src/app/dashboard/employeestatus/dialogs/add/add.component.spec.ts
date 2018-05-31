import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStatusAddDialogComponent } from './add.component';

describe('EmployeeStatusAddDialogComponent', () => {
  let component: EmployeeStatusAddDialogComponent;
  let fixture: ComponentFixture<EmployeeStatusAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeStatusAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeStatusAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
