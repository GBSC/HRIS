import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteshiftComponent } from './delete.component';

describe('DeleteshiftComponent', () => {
  let component: DeleteshiftComponent;
  let fixture: ComponentFixture<DeleteshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
