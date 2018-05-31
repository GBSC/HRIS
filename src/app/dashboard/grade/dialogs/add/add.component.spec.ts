import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeAddDialogComponent } from './add.component';

describe('GradeAddDialogComponent', () => {
  let component: GradeAddDialogComponent;
  let fixture: ComponentFixture<GradeAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
