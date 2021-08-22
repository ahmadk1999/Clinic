import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoitmentCreateComponent } from './appoitment-create.component';

describe('AppoitmentCreateComponent', () => {
  let component: AppoitmentCreateComponent;
  let fixture: ComponentFixture<AppoitmentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoitmentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoitmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
