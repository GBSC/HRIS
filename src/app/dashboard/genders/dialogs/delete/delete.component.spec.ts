import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGendersComponent } from './delete.component';

describe('DeleteGendersComponent', () => {
  let component: DeleteGendersComponent;
  let fixture: ComponentFixture<DeleteGendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
