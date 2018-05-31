import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDesignationComponent } from './delete.component';

describe('DeleteDesignationComponent', () => {
  let component: DeleteDesignationComponent;
  let fixture: ComponentFixture<DeleteDesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
