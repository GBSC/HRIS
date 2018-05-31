import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationAddDialogComponent } from './add.component';

describe('QualificationAddDialogComponent', () => {
  let component: QualificationAddDialogComponent;
  let fixture: ComponentFixture<QualificationAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
