import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRosterDialogComponent } from './add.component';

describe('AddRosterDialogComponent', () => {
  let component: AddRosterDialogComponent;
  let fixture: ComponentFixture<AddRosterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRosterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRosterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
