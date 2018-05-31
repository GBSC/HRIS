import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkillLevelsComponent } from './edit.component';

describe('EditSkillLevelsComponent', () => {
  let component: EditSkillLevelsComponent;
  let fixture: ComponentFixture<EditSkillLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSkillLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSkillLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
