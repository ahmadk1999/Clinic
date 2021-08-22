import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { doctor } from '../models/doctor';

@Component({
  selector: 'app-doctor-item',
  templateUrl: './doctor-item.component.html',
  styleUrls: ['./doctor-item.component.css']
})
export class DoctorItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input('doctorItem')
    Doctor:doctor; 

  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){

  }

  ngOnChanges(){

  }
}
