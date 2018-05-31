import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { EditRosterDialogComponent } from './edit.component';

describe('EditRosterDialogComponent', () => {
  let component: EditRosterDialogComponent;
  let fixture: ComponentFixture<EditRosterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRosterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRosterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
