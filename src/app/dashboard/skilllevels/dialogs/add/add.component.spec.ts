import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddskillLevelsComponent } from './add.component';


describe('AddskillLevelsComponent', () => {
  let component: AddskillLevelsComponent;
  let fixture: ComponentFixture<AddskillLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddskillLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddskillLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
