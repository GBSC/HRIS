import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAddDialogComponent } from './add.component';

describe('BankAddDialogComponent', () => {
  let component: BankAddDialogComponent;
  let fixture: ComponentFixture<BankAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
