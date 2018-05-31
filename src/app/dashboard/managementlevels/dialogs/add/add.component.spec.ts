import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddManagementLevelsComponent } from './add.component';


describe('AddManagementLevelsComponent', () => {
  let component: AddManagementLevelsComponent;
  let fixture: ComponentFixture<AddManagementLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManagementLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManagementLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
