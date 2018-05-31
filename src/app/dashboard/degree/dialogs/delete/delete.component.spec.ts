import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDegreeComponent } from './delete.component';

describe('DeleteDegreeComponent', () => {
  let component: DeleteDegreeComponent;
  let fixture: ComponentFixture<DeleteDegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
