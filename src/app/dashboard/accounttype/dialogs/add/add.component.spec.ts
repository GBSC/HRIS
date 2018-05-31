import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountTypeDialogComponent } from './add.component';

describe('AddAccountTypeDialogComponent', () => {
  let component: AddAccountTypeDialogComponent;
  let fixture: ComponentFixture<AddAccountTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccountTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
