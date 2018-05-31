import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAllowancesTypeComponent } from './add.component';


describe('AddAllowancesTypeComponent', () => {
  let component: AddAllowancesTypeComponent;
  let fixture: ComponentFixture<AddAllowancesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAllowancesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAllowancesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
