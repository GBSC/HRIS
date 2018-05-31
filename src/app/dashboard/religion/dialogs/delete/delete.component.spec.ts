import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReligionComponent } from './delete.component';

describe('DeleteReligionComponent', () => {
  let component: DeleteReligionComponent;
  let fixture: ComponentFixture<DeleteReligionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReligionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
