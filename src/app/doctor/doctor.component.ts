import { doctorService } from './../services/doctor.services';
import { doctor } from './../models/doctor';
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:'app-doctor',
    templateUrl:"./doctor.component.html"
})
export class DoctorComponent implements OnInit{
  firstName: string = 'Max'
  doctorName: string;
  isWhite: boolean = true;
  showMessage: boolean = true;
  Doctor: doctor[];
  showDirective = true;
  @ViewChild('firstName')
  fName: string = '';
  message: string = "Pipe test testing";
  currentDate: Date = new Date();
  isLoading = false;
  error: string;

    


        constructor(private router: Router, private DoctorService:doctorService) {
    


            setTimeout(() => {
              this.showMessage = false;
            }, 2000);
          }
        
          ngOnInit(): void {
            this.isLoading = true;
        
            this.DoctorService.getdoctor()
              .subscribe((response: any) => {
                this.isLoading = false;
                this.Doctor = response;
              },
                (error: HttpErrorResponse) => {
                  this.error = error.message;
                });;
          }
        
          getFullName() {
            return this.doctorName;
          }
        
        
          
        
          onAddDoctor() {
            this.router.navigate(['/doctor/create'])
          }
        
          onCleardoctors() {
            this.DoctorService.cleardoctor();
          }
}