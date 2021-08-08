import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { DoctorComponent } from "./doctor/doctor.component";
import { HomeComponent } from "./home/home.component";
import { PatientDetailComponent } from "./patient-detail/patient-detail.component";
import { PatientEditComponent } from "./patient-edit/patient-edit.component";
import { PatientsComponent } from "./patients/patients.component";


const appRoutes:Route[] = [
   {path:'', component: HomeComponent},
   {path:'patients', component: PatientsComponent, children: 
   [
     {path:':id', component: PatientDetailComponent},
     {path:':id/edit', component: PatientEditComponent},
   ]
   },  
   {path:'doctors', component: DoctorComponent},
   {path:'**', redirectTo : ''}
 ];

@NgModule(
   {
    imports:[
      RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
   }
)
export class   AppRoutingModule{

}