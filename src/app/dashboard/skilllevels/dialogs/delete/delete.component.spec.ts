import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSkillLevelsComponent } from './delete.component';

describe('DeleteSkillLevelsComponent', () => {
  let component: DeleteSkillLevelsComponent;
  let fixture: ComponentFixture<DeleteSkillLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSkillLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSkillLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
