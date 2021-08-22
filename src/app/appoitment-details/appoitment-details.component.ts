import { appoitmentService } from './../services/appoitment.service';
import { appoitment } from './../models/appoitments';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-appoitment-details',
  templateUrl: './appoitment-details.component.html',
  styleUrls: ['./appoitment-details.component.css']
})
export class AppoitmentDetailsComponent implements OnInit {

  Appoitment:appoitment;

  constructor(private router:Router, private appoitmentService:appoitmentService, private route:ActivatedRoute) {
    this.Appoitment = new appoitment(0,'','')
   }

  ngOnInit(): void {
       let allowEdit = this.route.snapshot.queryParams['allowEdit'];

      this.route.params.subscribe((params:Params)=>{
        this.Appoitment = this.appoitmentService.Appoitment.find(p => p.id == +params['id'] ) as appoitment;
        
      })
      
    
  }
  

  onEdit(id:number){
    this.router.navigate(['/appoitment', id, 'edit' ], {queryParams: {allowEdit: true}});
    
  }

}
