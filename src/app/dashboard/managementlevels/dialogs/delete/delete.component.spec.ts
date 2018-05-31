import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteManagementLevelsComponent } from './delete.component';

describe('DeleteManagementLevelsComponent', () => {
  let component: DeleteManagementLevelsComponent;
  let fixture: ComponentFixture<DeleteManagementLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteManagementLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteManagementLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
