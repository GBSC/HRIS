import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShiftDialogComponent } from './edit.component';

describe('EditShiftDialogComponent', () => {
  let component: EditShiftDialogComponent;
  let fixture: ComponentFixture<EditShiftDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShiftDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShiftDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
