import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountTypeComponent } from './delete.component';

describe('DeleteAccountTypeComponent', () => {
  let component: DeleteAccountTypeComponent;
  let fixture: ComponentFixture<DeleteAccountTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccountTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
