import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGendersComponent } from './edit.component';

describe('EditGendersComponent', () => {
  let component: EditGendersComponent;
  let fixture: ComponentFixture<EditGendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
