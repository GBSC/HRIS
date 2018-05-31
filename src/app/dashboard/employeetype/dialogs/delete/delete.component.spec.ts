import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteETypeComponent } from './delete.component';

describe('DeleteETypeComponent', () => {
  let component: DeleteETypeComponent;
  let fixture: ComponentFixture<DeleteETypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteETypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteETypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
