import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEditDialogComponent } from './edit.component';

describe('GradeEditDialogComponent', () => {
  let component: GradeEditDialogComponent;
  let fixture: ComponentFixture<GradeEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
