import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientItemComponent } from './patient-item/patient-item.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsHeaderComponent } from './patients-header/patients-header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AppHiddenDirective } from './directives/app-hidden.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HomeComponent } from './home/home.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { AppRoutingModule } from './app.routing.module';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorItemComponent } from './doctor-item/doctor-item.component';
import { RouterModule } from '@angular/router';
import { AppoitmentComponent } from './appoitment/appoitment.component';
import { appoitmentItemComponent } from './appoitment-item/appoitment-item.component';
import { AppoitmentCreateComponent } from './appoitment-create/appoitment-create.component';
import { AppoitmentEditComponent } from './appoitment-edit/appoitment-edit.component';
import { AppoitmentDetailsComponent } from './appoitment-details/appoitment-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientsComponent,
    PatientItemComponent,
    PatientsHeaderComponent,
    HighlightDirective,
    AppHiddenDirective,
    ShortenPipe,
    HomeComponent,
    PatientDetailComponent,
    PatientEditComponent,
    PatientCreateComponent,
    DoctorCreateComponent,
    DoctorDetailComponent,
    DoctorEditComponent,
    DoctorItemComponent,
    AppoitmentComponent,
    appoitmentItemComponent,
    AppoitmentCreateComponent,
    AppoitmentEditComponent,
    AppoitmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'appoitment/:create',component:AppoitmentCreateComponent}
    ])
    
  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
function appRoutes(appRoutes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

