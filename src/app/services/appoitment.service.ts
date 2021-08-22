import { appoitment } from '../models/appoitments';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LoggingService } from "./logging.service";
import { environment } from "src/environments/environment";
import { map, tap } from "rxjs/operators";



@Injectable({
    providedIn:'root'
})
export class appoitmentService{
    appoitmentAdded = new Subject<appoitment>();
    public Appoitment:appoitment[] = [];
    constructor(private logService:LoggingService, private httpClient:HttpClient){

    }

    addAppointment(data:appoitment){

        this.httpClient.post(`${environment.WebApiUrl}/appointment.json`, data,
        {
            
        }).subscribe(result=>{
            console.log(result);
        });
        
        this.Appoitment.push(data);
        this.logService.logInfo('appoitment was Added');
        this.appoitmentAdded.next(data);
    }
    getAppointnment(){
        
        return this.httpClient.get(`${environment.WebApiUrl}/appointment.json`)
        .pipe(
            map((response:{[key:string]: any})=>{
           
                let result:appoitment[] = [];

            for(let key in response){
                if(response.hasOwnProperty(key))
                    {
                        let Appoitment = new appoitment(0,'','');
                        Object.assign(Appoitment,response[key]);
                        Appoitment.key = key;
                        result.push(Appoitment);
                    }
            }
            this.Appoitment= result;
            return result;
        }),
        tap(response =>{
            console.log('Tap Operator');
                console.log(response);
        }))

        
    }
    clearappoitments(){
        this.httpClient.delete(`${environment.WebApiUrl}/appointment.json`).subscribe(s => {
            this.Appoitment = [];
        });
    }
    updateappoitment(Appoitment:appoitment){
        let obj :{[key:string]: any} = {};
        console.log(Appoitment);

        obj[Appoitment.key] = Appoitment;
        console.log(obj);
        this.httpClient.patch(`${environment.WebApiUrl}/appointment.json`, obj).subscribe(response =>{
            console.log(response);
        })
    }

    
}