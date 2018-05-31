import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionEditDialogComponent } from './edit.component';

describe('FunctionEditDialogComponent', () => {
  let component: FunctionEditDialogComponent;
  let fixture: ComponentFixture<FunctionEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
