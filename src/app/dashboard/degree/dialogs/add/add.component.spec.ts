import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDegreeDialogComponent } from './add.component';

describe('AddDegreeDialogComponent', () => {
  let component: AddDegreeDialogComponent;
  let fixture: ComponentFixture<AddDegreeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDegreeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDegreeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
