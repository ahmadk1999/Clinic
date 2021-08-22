import { doctorService } from './../services/doctor.services';

import { PatientsService } from './../services/patients.services';
import { appoitmentService } from './../services/appoitment.service';
import { appoitment } from './../models/appoitments';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appoitment-edit',
  templateUrl: './appoitment-edit.component.html',
  styleUrls: ['./appoitment-edit.component.css']
})
export class AppoitmentEditComponent implements OnInit {
  public patients: Patient[] = [];
  public Doctor: doctor[] = [];
  Appoitment:appoitment;
  

  @ViewChild('editForm')
  editForm: NgForm;

  
  constructor(private httpClient:HttpClient,private route: ActivatedRoute, private Appoitmentservice:appoitmentService,private router:Router,private PatientsService:PatientsService,private Doctorservice:doctorService) {
    this.getPatients();
      this.getdoctor();
   }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.Appoitment = this.Appoitmentservice.Appoitment.find(p => p.id == +params['id']) as appoitment
    })


    this.getdoctor()
   .subscribe((response: any) => {
    
    this.Doctor = response;
    
  },
  

    );;
  

  this.getPatients()
    .subscribe((response: any) => {
      
      this.patients = response;
    },
      );;
  }

  onSubmit(editForm: NgForm) {

    if (!editForm.valid)
      return;

    this.Appoitmentservice.updateappoitment(editForm.value)

    this.editForm.reset()
    

    
    this.router.navigateByUrl('home')

  }
  getPatients(){
    return this.httpClient.get(`${environment.WebApiUrl}/patients.json`)
    .pipe(
        map((response:{[key:string]: any})=>{
       
            let result:Patient[] = [];
  
        for(let key in response){
            if(response.hasOwnProperty(key))
                {
                    let patient = new Patient(0,'','',0);
                    Object.assign(patient,response[key]);
                    patient.key = key;
                    result.push(patient);
                }
        }
        this.patients = result;
        return result;
    }),
    tap(response =>{
        console.log('Tap Operator');
            console.log(response);
    }))
  
    
  }
  
  getdoctor(){
    console.log
    return this.httpClient.get(`${environment.WebApiUrl}/Doctor.json`)
    .pipe(
        map((response:{[key:string]: any})=>{
       
            let result:doctor[] = [];
  
        for(let key in response){
            if(response.hasOwnProperty(key))
                {
                    let Doctor = new doctor(0,'','',0,'');
                    Object.assign(Doctor,response[key]);
                    Doctor.key = key;
                    result.push(Doctor);
                }
        }
        this.Doctor = result;
        return result;
    }),
    tap(response =>{
        console.log('Tap Operator');
            console.log(response);
    }))
  }

}
