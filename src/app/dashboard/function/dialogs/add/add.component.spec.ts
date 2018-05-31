import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAddDialogComponent } from './add.component';

describe('FunctionAddDialogComponent', () => {
  let component: FunctionAddDialogComponent;
  let fixture: ComponentFixture<FunctionAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
