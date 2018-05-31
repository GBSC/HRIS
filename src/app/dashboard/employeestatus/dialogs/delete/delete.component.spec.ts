import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteestatusComponent } from './delete.component';

describe('DeleteestatusComponent', () => {
  let component: DeleteestatusComponent;
  let fixture: ComponentFixture<DeleteestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
