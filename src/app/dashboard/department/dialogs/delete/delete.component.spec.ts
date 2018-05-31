import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDepartmentComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteDepartmentComponent;
  let fixture: ComponentFixture<DeleteDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
