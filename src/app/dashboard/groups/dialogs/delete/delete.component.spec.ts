import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGroupsComponent } from './delete.component';

describe('DeleteGroupsComponent', () => {
  let component: DeleteGroupsComponent;
  let fixture: ComponentFixture<DeleteGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
