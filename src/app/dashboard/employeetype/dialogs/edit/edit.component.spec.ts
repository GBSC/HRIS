import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { EmployeeTypeEditDialogComponent } from './edit.component';

describe('EmployeeTypeEditDialogComponent', () => {
  let component: EmployeeTypeEditDialogComponent;
  let fixture: ComponentFixture<EmployeeTypeEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTypeEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTypeEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
