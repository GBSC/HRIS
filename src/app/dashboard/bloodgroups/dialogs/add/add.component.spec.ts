import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBloodgropsComponent } from './add.component';


describe('AddBloodgropsComponent', () => {
  let component: AddBloodgropsComponent;
  let fixture: ComponentFixture<AddBloodgropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBloodgropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodgropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
