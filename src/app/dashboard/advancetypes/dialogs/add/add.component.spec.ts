import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAdvanceTypeComponent } from './add.component';


describe('AddAdvanceTypeComponent', () => {
  let component: AddAdvanceTypeComponent;
  let fixture: ComponentFixture<AddAdvanceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdvanceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvanceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
