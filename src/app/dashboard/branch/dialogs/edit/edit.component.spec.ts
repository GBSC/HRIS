import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchEditDialogComponent } from './edit.component';

describe('BranchEditDialogComponent', () => {
  let component: BranchEditDialogComponent;
  let fixture: ComponentFixture<BranchEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
