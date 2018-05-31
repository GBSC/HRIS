import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBloodgropsComponent } from './delete.component';

describe('DeleteBloodgropsComponent', () => {
  let component: DeleteBloodgropsComponent;
  let fixture: ComponentFixture<DeleteBloodgropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBloodgropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBloodgropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
