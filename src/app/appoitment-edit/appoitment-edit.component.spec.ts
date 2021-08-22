import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoitmentEditComponent } from './appoitment-edit.component';

describe('AppoitmentEditComponent', () => {
  let component: AppoitmentEditComponent;
  let fixture: ComponentFixture<AppoitmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoitmentEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoitmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
