import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { EditDepDialogComponent } from './edit.component';

describe('EditDepDialogComponent', () => {
  let component: EditDepDialogComponent;
  let fixture: ComponentFixture<EditDepDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
