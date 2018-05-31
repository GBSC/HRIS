import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { EditDegreeDialogComponent } from './edit.component';

describe('EditDegreeDialogComponent', () => {
  let component: EditDegreeDialogComponent;
  let fixture: ComponentFixture<EditDegreeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDegreeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDegreeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
