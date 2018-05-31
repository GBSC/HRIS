import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { EmployeeStatusEditDialogComponent } from './edit.component';

describe('EmployeeStatusEditDialogComponent', () => {
  let component: EmployeeStatusEditDialogComponent;
  let fixture: ComponentFixture<EmployeeStatusEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeStatusEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeStatusEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
