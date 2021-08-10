import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Patient } from "../models/patient";
import { LoggingService } from "./logging.service";

@Injectable({
    providedIn:'root'
})
export class PatientsService{

    patientAdded = new Subject<Patient>();

    private patients = [
        new Patient(1, 'Joe', 'E', 24),
        new Patient(2, 'Lee', 'A', 24),
        new Patient(3,'Sara', 'C', 24)
      ]

    constructor(private logService:LoggingService){

    }

    addPatient(data:Patient){
        this.patients.push(data);
        this.logService.logInfo('Patients was Added');
        this.patientAdded.next(data);
    }

    getPatients(){
        // let results: Patient[] = []; 
        // const myClonedArray  = Object.assign(results, this.patients);
        // return  myClonedArray;

        return this.patients;
    }

}