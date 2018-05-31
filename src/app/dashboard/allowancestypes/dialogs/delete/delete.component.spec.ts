import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllowncesTypeComponent } from './delete.component';

describe('DeleteAllowncesTypeComponent', () => {
  let component: DeleteAllowncesTypeComponent;
  let fixture: ComponentFixture<DeleteAllowncesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAllowncesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllowncesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
