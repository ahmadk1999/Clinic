import { ComponentFixture, TestBed } from '@angular/core/testing';

import { appoitmentItemComponent } from './appoitment-item.component';

describe('AppoitmentItemComponent', () => {
  let component: appoitmentItemComponent;
  let fixture: ComponentFixture<appoitmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ appoitmentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(appoitmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
