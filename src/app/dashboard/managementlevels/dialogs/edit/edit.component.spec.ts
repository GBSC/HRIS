import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManagementLevelsComponent } from './edit.component';

describe('EditManagementLevelsComponent', () => {
  let component: EditManagementLevelsComponent;
  let fixture: ComponentFixture<EditManagementLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManagementLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManagementLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
