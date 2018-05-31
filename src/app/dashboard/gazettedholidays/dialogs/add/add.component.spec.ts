import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGazetedHolidaysComponent } from './add.component';


describe('AddGazetedHolidaysComponent', () => {
  let component: AddGazetedHolidaysComponent;
  let fixture: ComponentFixture<AddGazetedHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGazetedHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGazetedHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
