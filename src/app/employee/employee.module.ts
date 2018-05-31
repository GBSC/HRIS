import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { AuthGuard } from '../auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { routing } from './employee.routing';
import { BasicinformationComponent } from './basicinformation/basicinformation.component';
import { ProfilepicComponent } from './profilepic/profilepic.component';
import { ImmigrationComponent } from './immigration/immigration.component';
import { EmergencycontactComponent } from './emergencycontact/emergencycontact.component';
import { SocialComponent } from './social/social.component';
import { DocumentComponent } from './document/document.component';
import { QualificationComponent } from './qualification/qualification.component';
import { CpasswordComponent } from './cpassword/cpassword.component';
import { BankComponent } from './bank/bank.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [RootComponent, HomeComponent, BasicinformationComponent, ProfilepicComponent, ImmigrationComponent, EmergencycontactComponent, SocialComponent, DocumentComponent, QualificationComponent, CpasswordComponent, BankComponent, ExperienceComponent],
  exports: [],
  providers: [AuthGuard]
})
export class EmployeeModule { }
