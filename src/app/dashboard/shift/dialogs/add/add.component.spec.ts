import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftAddDialogComponent } from './add.component';

describe('ShiftAddDialogComponent', () => {
  let component: ShiftAddDialogComponent;
  let fixture: ComponentFixture<ShiftAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
