import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletegradeComponent } from './delete.component';

describe('DeletegradeComponent', () => {
  let component: DeletegradeComponent;
  let fixture: ComponentFixture<DeletegradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletegradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletegradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
