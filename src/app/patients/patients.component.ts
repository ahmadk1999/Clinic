import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { LoggingService } from '../services/logging.service';
import { PatientsService } from '../services/patients.services';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  firstName:string = 'Max'
  patientName:string;
  isWhite:boolean = true;
  showMessage:boolean = true;
  patients: Patient[];
  showDirective = true;
  @ViewChild('firstName')
  fName:string ='';
  message:string ="Pipe test testing";
  currentDate:Date = new Date();

  constructor(private patientService:PatientsService) { 
    this.patientName = "Maria";
    // this.patients = ['Joe', 'Lee', 'Sara'];
 

    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.patients = this.patientService.getPatients();
  }

  getFullName(){
    return this.patientName;
  }


  addPatient(data:Patient){
       this.patientService.addPatient(data);
  }
}
