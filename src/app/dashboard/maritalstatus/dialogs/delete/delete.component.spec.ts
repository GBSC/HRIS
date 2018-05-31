import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMstatusComponent } from './delete.component';

describe('DeleteMstatusComponent', () => {
  let component: DeleteMstatusComponent;
  let fixture: ComponentFixture<DeleteMstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
