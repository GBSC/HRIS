import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionAddDialogComponent } from './add.component';

describe('ReligionAddDialogComponent', () => {
  let component: ReligionAddDialogComponent;
  let fixture: ComponentFixture<ReligionAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligionAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
