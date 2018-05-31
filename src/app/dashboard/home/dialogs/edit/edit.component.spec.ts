import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountryComponent } from './edit.component';

describe('EditCountryComponent', () => {
  let component: EditCountryComponent;
  let fixture: ComponentFixture<EditCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
