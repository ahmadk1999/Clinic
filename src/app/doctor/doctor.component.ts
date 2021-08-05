import { Component, OnInit } from "@angular/core";
import { Patient } from "../models/patient";
import { PatientsService } from "../services/patients.services";

@Component({
    selector:'app-doctor',
    templateUrl:"./doctor.component.html"
})
export class DoctorComponent implements OnInit{
    message:string;

    constructor(private patientService:PatientsService){

    }

    ngOnInit(){
        this.patientService.patientAdded.subscribe((data:Patient)=>{
            this.message = "New Patient added";
        });
    }
}