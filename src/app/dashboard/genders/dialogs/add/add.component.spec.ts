import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGendersComponent } from './add.component';


describe('AddGendersComponent', () => {
  let component: AddGendersComponent;
  let fixture: ComponentFixture<AddGendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
