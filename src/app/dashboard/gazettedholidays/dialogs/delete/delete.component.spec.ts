import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGazetedHolidaysComponent } from './delete.component';

describe('DeleteGazetedHolidaysComponent', () => {
  let component: DeleteGazetedHolidaysComponent;
  let fixture: ComponentFixture<DeleteGazetedHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGazetedHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGazetedHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
