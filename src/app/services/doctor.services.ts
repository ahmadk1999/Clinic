import { doctor } from './../models/doctor';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LoggingService } from "./logging.service";
import { environment } from "src/environments/environment";
import { map, tap } from "rxjs/operators";



@Injectable({
    providedIn:'root'
})
export class doctorService{

    doctorAdded = new Subject<doctor>();

    public Doctor: doctor[] = [];

    constructor(private logService:LoggingService, private httpClient:HttpClient){

    }

    adddoctor(data:doctor){
        console.log("im here");
        this.httpClient.post(`${environment.WebApiUrl}/Doctor.json`, data,
        {
            
        }).subscribe(result=>{
           console.log(result);
       });
        
        this.Doctor.push(data);
        this.logService.logInfo('Doctor was Added');
        this.doctorAdded.next(data);
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

        //return this.patients;
    }

    updateDoctor(Doctor:doctor){
        let obj :{[key:string]: any} = {};
        console.log(Doctor);

        obj[Doctor.key] = Doctor;
        console.log(obj);
        this.httpClient.patch(`${environment.WebApiUrl}/Doctor.json`, obj).subscribe(response =>{
            console.log(response);
        })
    }

    cleardoctor(){
        this.httpClient.delete(`${environment.WebApiUrl}/Doctor.json`).subscribe(s => {
            this.Doctor = [];
        });
    }
}