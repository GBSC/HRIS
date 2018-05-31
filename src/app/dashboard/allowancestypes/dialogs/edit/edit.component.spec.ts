import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllowancesTypeComponent } from './edit.component';

describe('EditAllowancesTypeComponent', () => {
  let component: EditAllowancesTypeComponent;
  let fixture: ComponentFixture<EditAllowancesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllowancesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllowancesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
