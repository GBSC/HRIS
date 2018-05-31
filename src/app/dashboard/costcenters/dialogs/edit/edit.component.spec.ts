import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCostCentersComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditCostCentersComponent;
  let fixture: ComponentFixture<EditCostCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCostCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCostCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
