import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalEditDialogComponent } from './edit.component';

describe('MaritalEditDialogComponent', () => {
  let component: MaritalEditDialogComponent;
  let fixture: ComponentFixture<MaritalEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaritalEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
