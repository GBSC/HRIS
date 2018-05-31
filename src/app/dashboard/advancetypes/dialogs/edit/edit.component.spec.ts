import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdvanceTypeComponent } from './edit.component';

describe('EditAdvanceTypeComponent', () => {
  let component: EditAdvanceTypeComponent;
  let fixture: ComponentFixture<EditAdvanceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdvanceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdvanceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
