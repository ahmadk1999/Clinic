import { doctor } from './../models/doctor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { doctorService } from '../services/doctor.services';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  Doctor:doctor;

  @ViewChild('editForm')
  editForm: NgForm;

  genders = ["Male", "Female"]
  constructor(private route: ActivatedRoute, private Doctorservice: doctorService,private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.Doctor = this.Doctorservice.Doctor.find(p => p.id == +params['id']) as doctor
    })
  }

  onSubmit(editForm: NgForm) {

    if (!editForm.valid)
      return;

    this.Doctorservice.updateDoctor(editForm.value)

    this.editForm.reset()
    

    this.editForm.form.patchValue({
      gender: 'Male'
    })
    this.router.navigateByUrl('home')

  }

}
