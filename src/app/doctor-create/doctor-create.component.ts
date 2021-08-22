import { Router } from '@angular/router';
import { doctorService } from './../services/doctor.services';




import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { doctor } from '../models/doctor';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {
  
  createForm:FormGroup;
  

  constructor(private DoctorService:doctorService,private router:Router) { }

  ngOnInit(): void {

    this.createForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
      }),      
      age: new FormControl(),    
      email: new FormControl(null, [Validators.required, Validators.email,this.restrictedEmails]),
      gender: new FormControl('Male'),
      specialization: new FormControl()
    })
  }

  onSubmit(){
    
    let Doctor = new doctor(this.DoctorService.Doctor.length + 1, this.createForm.value.fullName.firstName, this.createForm.value.fullName.lastName,  this.createForm.value.age, this.createForm.value.specialization);

    Doctor.email = this.createForm.value.email;
    Doctor.gender = this.createForm.value.gender;

    this.DoctorService.adddoctor(Doctor)

    this.createForm.reset();
    this.router.navigate(['home']);
  }

  restrictedEmails(control:FormControl){ 
    let emails = ['test@test.com', 'aa@aa.com']
      if(emails.indexOf(control.value) > -1){
        return {restrictedEmail: true}
      }
  
      return null;      
  }

}
