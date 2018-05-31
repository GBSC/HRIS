import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalAddDialogComponent } from './add.component';

describe('MaritalAddDialogComponent', () => {
  let component: MaritalAddDialogComponent;
  let fixture: ComponentFixture<MaritalAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaritalAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
