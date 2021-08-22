import { appoitmentService } from './../services/appoitment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appoitment } from '../models/appoitments';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-appoitment',
  templateUrl: './appoitment.component.html',
  styleUrls: ['./appoitment.component.css']
})
export class AppoitmentComponent implements OnInit {
  showMessage: boolean;
  isLoading: boolean;
  Appoitment:appoitment[];
  error: string;
  


  constructor(private router: Router, private AppoitmentService:appoitmentService) {
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
   }

   ngOnInit(): void {
    this.isLoading = true;
        
    this.AppoitmentService.getAppointnment()
    .subscribe((response: any) => {
     this.isLoading = false;
     this.Appoitment = response;
    },
   (error: HttpErrorResponse) => {
   this.error = error.message;
    });;
  }


  
  onAddappoitment() {
    this.router.navigate(['/appoitment/create'])
  }

  onClearAppoitment() {
    
    this.AppoitmentService.clearappoitments();
    this.router.navigate(['/home'])
  }
  

}
