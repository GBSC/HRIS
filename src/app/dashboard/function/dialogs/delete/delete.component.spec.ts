import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFunctionComponent } from './delete.component';

describe('DeleteFunctionComponent', () => {
  let component: DeleteFunctionComponent;
  let fixture: ComponentFixture<DeleteFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
