import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientsService } from '../services/patients.services';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  patient:Patient;

  constructor(private route:ActivatedRoute, private patientService:PatientsService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((params:Params)=>{
      this.patient = this.patientService.getPatients().find(p => p.id == +params['id'] ) as Patient;
      console.log(this.patient);
    })    
  }

}
