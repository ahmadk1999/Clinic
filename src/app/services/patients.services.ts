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
        new Patient( 'Joe', 'E', 24),
        new Patient( 'Lee', 'A', 24),
        new Patient( 'Sara', 'C', 24)
      ]

    constructor(private logService:LoggingService){

    }

    addPatient(data:Patient){
        this.patients.push(data);
        this.logService.logInfo('Patients was Added');
        this.patientAdded.next(data);
    }

    getPatients(){
        return this.patients;
    }
}