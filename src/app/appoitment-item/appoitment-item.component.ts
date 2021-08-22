import { appoitment } from './../models/appoitments';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoitment-item',
  templateUrl: './appoitment-item.component.html',
  styleUrls: ['./appoitment-item.component.css']
})
export class appoitmentItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input('appoitmentItem')
    Appoitment:appoitment

  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){

  }

  ngOnChanges(){

  }
}
