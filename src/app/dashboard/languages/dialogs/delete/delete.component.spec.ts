import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLanguagesComponent } from '../delete/delete.component';

describe('DeleteLanguagesComponent', () => {
  let component: DeleteLanguagesComponent;
  let fixture: ComponentFixture<DeleteLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
