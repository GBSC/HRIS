import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGazetedHolidaysComponent } from './edit.component';

describe('EditGazetedHolidaysComponent', () => {
  let component: EditGazetedHolidaysComponent;
  let fixture: ComponentFixture<EditGazetedHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGazetedHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGazetedHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
