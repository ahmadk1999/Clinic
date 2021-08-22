import { doctorService } from './../services/doctor.services';
import { doctor } from './../models/doctor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

  Doctor:doctor;

  constructor(private router:Router, private Doctorservice:doctorService, private route:ActivatedRoute) {
    this.Doctor = new doctor(0,'','',0,'')
   }

  ngOnInit(): void {
       let allowEdit = this.route.snapshot.queryParams['allowEdit'];

      this.route.params.subscribe((params:Params)=>{
        this.Doctor = this.Doctorservice.Doctor.find(p => p.id == +params['id'] ) as doctor;
        
      })
      
    
  }
  

  onEdit(id:number){
    this.router.navigate(['/doctor', id, 'edit' ], {queryParams: {allowEdit: true}});
    
  }
}
