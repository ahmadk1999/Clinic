
import { appoitment } from './../models/appoitments';
import { appoitmentService } from './../services/appoitment.service';

import { Component, Input } from '@angular/core';
import { Patient } from '../models/patient';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { doctor } from '../models/doctor';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-appoitment-create',
  templateUrl: './appoitment-create.component.html',
  styleUrls: ['./appoitment-create.component.css']
})
export class AppoitmentCreateComponent  {

  
  
  public patients: Patient[] = [];
  public Doctor: doctor[] = [];
  public id:number;
  createForm:FormGroup;

    constructor( private httpClient:HttpClient,private appoitmentService:appoitmentService){
      this.getPatients();
      this.getdoctor();
    }

    
 

 ngOnInit(): void {
  this.createForm = new FormGroup({
    patientName: new FormControl(),
    doctorName:new FormControl(),
    date:new FormControl(),
    description:new FormControl()
  
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
 onSubmit(){
    
  let Appoitment = new appoitment( this.appoitmentService.Appoitment.length + 1,this.createForm.value.doctorName,this.createForm.value.patientName);
  
  Appoitment.date = this.createForm.value.date;
  Appoitment.description = this.createForm.value.description;


  this.appoitmentService.addAppointment(Appoitment);

  this.createForm.reset();
}


  
}
  


