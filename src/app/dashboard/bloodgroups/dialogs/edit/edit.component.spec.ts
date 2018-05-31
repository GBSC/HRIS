import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloodgropsComponent } from './edit.component';

describe('EditBloodgropsComponent', () => {
  let component: EditBloodgropsComponent;
  let fixture: ComponentFixture<EditBloodgropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBloodgropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBloodgropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
