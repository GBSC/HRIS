import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionEditDialogComponent } from './edit.component';

describe('ReligionEditDialogComponent', () => {
  let component: ReligionEditDialogComponent;
  let fixture: ComponentFixture<ReligionEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligionEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
