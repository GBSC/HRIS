import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';

import { routing } from './dashboard.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { DashboardService } from './services/dashboard.service';

import { AuthGuard } from '../auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatDialogModule, MatButtonModule, MatIconModule, MatToolbarModule
} from "@angular/material";
import { BrowserModule } from '@angular/platform-browser';
import { SetupService } from './services/setup.service';
import { HttpClientModule } from '@angular/common/http';
import { AddCountryComponent } from './home/dialogs/add/add.component';
import { EditCountryComponent } from './home/dialogs/edit/edit.component';
import { DeleteCountryComponent } from './home/dialogs/delete/delete.component';

import { DepartmentComponent } from './department/department.component';
import { EmployeeTypes } from './employeetype/employeetype.component';
import {  BranchComponent } from './branch/branch.component';
import { FunctionComponent } from './function/function.component';
import { GradesComponent } from './grade/grade.component';
import { QualificationComponent } from './qualification/qualification.component';
import { EmployeeStatuscomponent } from './employeestatus/employeestatus.component';
import { ReligionComponent } from './religion/religion.component';
import { MaritalStatusComponent } from './maritalstatus/maritalstatus.component';
import { ShiftComponent } from './shift/shift.component'; 
 

import { AddDepartmentDialogComponent } from './department/dialogs/add/add.component';
import { EditDepDialogComponent } from './department/dialogs/edit/edit.component';
import { DeleteDepartmentComponent } from './department/dialogs/delete/delete.component';

import { ShiftAddDialogComponent } from './shift/dialogs/add/add.component';
import { EditShiftDialogComponent } from './shift/dialogs/edit/edit.component';

import { BranchAddDialogComponent } from './branch/dialogs/add/add.component';
import { BranchEditDialogComponent } from './branch/dialogs/edit/edit.component';
import { DeleteBranchComponent } from './branch/dialogs/delete/delete.component';

import { EmployeeStatusAddDialogComponent } from './employeestatus/dialogs/add/add.component';
import { EmployeeStatusEditDialogComponent } from './employeestatus/dialogs/edit/edit.component';

import { EmployeeTypeAddDialogComponent } from './employeetype/dialogs/add/add.component';
import { EmployeeTypeEditDialogComponent } from './employeetype/dialogs/edit/edit.component';  

import { FunctionAddDialogComponent } from './function/dialogs/add/add.component';
import { FunctionEditDialogComponent } from './function/dialogs/edit/edit.component';

import { GradeAddDialogComponent } from './grade/dialogs/add/add.component';
import { GradeEditDialogComponent } from './grade/dialogs/edit/edit.component';

import { MaritalAddDialogComponent } from './maritalstatus/dialogs/add/add.component';
import { MaritalEditDialogComponent } from './maritalstatus/dialogs/edit/edit.component';

import { QualificationAddDialogComponent } from './qualification/dialogs/add/add.component';
import { QualificationEditComponent } from './qualification/dialogs/edit/edit.component';

import { ReligionAddDialogComponent } from './religion/dialogs/add/add.component';
import { ReligionEditDialogComponent } from './religion/dialogs/edit/edit.component';

import { DeleteestatusComponent } from './employeestatus/dialogs/delete/delete.component';
import { DeleteFunctionComponent } from './function/dialogs/delete/delete.component';
import { DeletegradeComponent } from './grade/dialogs/delete/delete.component';
import { DeleteQualificationComponent } from './qualification/dialogs/delete/delete.component';
import { DeleteMstatusComponent } from './maritalstatus/dialogs/delete/delete.component';
import { DeleteReligionComponent } from './religion/dialogs/delete/delete.component';
import { DeleteshiftComponent } from './shift/dialogs/delete/delete.component';
import { DeleteETypeComponent } from './employeetype/dialogs/delete/delete.component';
 

import { BankAddDialogComponent } from './bank/dialogs/add/add.component';
import { BankEditDialogComponent } from './bank/dialogs/edit/edit.component';
import { BankComponent } from './bank/bank.component';
import { AddDegreeDialogComponent } from './degree/dialogs/add/add.component';
import { EditDegreeDialogComponent } from './degree/dialogs/edit/edit.component';
import { DeleteDegreeComponent } from './degree/dialogs/delete/delete.component';
import { DegreeComponent } from './degree/degree.component';
import { AddAccountTypeDialogComponent } from './accounttype/dialogs/add/add.component';
import { EditAccountDialogComponent } from './accounttype/dialogs/edit/edit.component';
import { DeleteAccountTypeComponent } from './accounttype/dialogs/delete/delete.component';
import { AccountTypeComponent } from './accounttype/accounttype.component';
import { RosterComponent } from './roster/roster.component';
import { AddRosterDialogComponent } from './roster/dialogs/add/add.component';
import { EditRosterDialogComponent } from './roster/dialogs/edit/edit.component';
import { DeleteRosterComponent } from './roster/dialogs/delete/delete.component';
import { DeleteBankComponent } from './bank/dialogs/delete/delete.component';
import { DesignationComponent } from './designations/designations.component';
import { AddDesignationComponent } from './designations/dialogs/add/add.component';
import { EditDesignationComponent } from './designations/dialogs/edit/edit.component';
import { DeleteDesignationComponent } from './designations/dialogs/delete/delete.component';
import { ManagementLevelsComponent } from './managementlevels/managementlevels.component';
import { AddManagementLevelsComponent } from './managementlevels/dialogs/add/add.component';
import { EditManagementLevelsComponent } from './managementlevels/dialogs/edit/edit.component';
import { DeleteManagementLevelsComponent } from './managementlevels/dialogs/delete/delete.component';
import { GroupComponent } from './groups/groups.component';
import { AddGroupsComponent } from './groups/dialogs/add/add.component';
import { EditGroupsComponent } from './groups/dialogs/edit/edit.component';
import { DeleteGroupsComponent } from './groups/dialogs/delete/delete.component';
import { GazettedHolidaysComponent } from './gazettedholidays/gazettedholidays.component';
import { AddGazetedHolidaysComponent } from './gazettedholidays/dialogs/add/add.component';
import { EditGazetedHolidaysComponent } from './gazettedholidays/dialogs/edit/edit.component';
import { DeleteGazetedHolidaysComponent } from './gazettedholidays/dialogs/delete/delete.component';
import { CostCenterComponent } from './costcenters/costcenters.component';
import { AddCostCenterComponent } from './costcenters/dialogs/add/add.component';
import { EditCostCentersComponent } from './costcenters/dialogs/edit/edit.component';
import { DeleteCostCentersComponent } from './costcenters/dialogs/delete/delete.component';
import { LanguageComponent } from './languages/languages.component';
import { SkillLevelsComponent } from './skilllevels/skilllevels.component';
import { AddskillLevelsComponent } from './skilllevels/dialogs/add/add.component';
import { EditSkillLevelsComponent } from './skilllevels/dialogs/edit/edit.component';
import { DeleteSkillLevelsComponent } from './skilllevels/dialogs/delete/delete.component';
import { BloodGroupComponent } from './bloodgroups/bloodgroups.component';
import { AddBloodgropsComponent } from './bloodgroups/dialogs/add/add.component';
import { EditBloodgropsComponent } from './bloodgroups/dialogs/edit/edit.component';
import { DeleteBloodgropsComponent } from './bloodgroups/dialogs/delete/delete.component';
import { LeaveTypeComponent } from './leavetypes/leavetypes.component';
import { AddLeavesTypeComponent } from './leavetypes/dialogs/add/add.component';
import { EditLeavesTypeComponent } from './leavetypes/dialogs/edit/edit.component';
import { DeleteLeaveTypeComponent } from './leavetypes/dialogs/delete/delete.component';
import { AddLanguagesComponent } from './languages/dialogs/add/add.component';
import { EditLanguagesComponent } from './languages/dialogs/edit/edit.component';
import { DeleteLanguagesComponent } from './languages/dialogs/delete/delete.component';
import { AdvanceTypeComponent } from './advancetypes/advancetypes.component';
import { AddAdvanceTypeComponent } from './advancetypes/dialogs/add/add.component';
import { EditAdvanceTypeComponent } from './advancetypes/dialogs/edit/edit.component';
import { DeleteAdvanceTypedeleteComponent } from './advancetypes/dialogs/delete/delete.component';
import { AllowancesTypeComponent } from './allowancestypes/allowancestypes.component';
import { AddAllowancesTypeComponent } from './allowancestypes/dialogs/add/add.component';
import { EditAllowancesTypeComponent } from './allowancestypes/dialogs/edit/edit.component';
import { DeleteAllowncesTypeComponent } from './allowancestypes/dialogs/delete/delete.component';
import { RelationComponent } from './relations/relations.component';
import { AddRelationComponent } from './relations/dialogs/add/add.component';
import { EditRelationComponent } from './relations/dialogs/edit/edit.component';
import { DeleteRelationComponent } from './relations/dialogs/delete/delete.component';
import { GenderComponent } from './genders/genders.component';
import { AddGendersComponent } from './genders/dialogs/add/add.component';
import { EditGendersComponent } from './genders/dialogs/edit/edit.component';
import { DeleteGendersComponent } from './genders/dialogs/delete/delete.component';
import { CityComponent } from './cities/cities.component';
import { AddCityComponent } from './cities/dialogs/add/add.component';
import { EditCityComponent } from './cities/dialogs/edit/edit.component';
import { DeleteCityComponent } from './cities/dialogs/delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  declarations: [
    RootComponent, 
    HomeComponent, SettingsComponent,
    AddCountryComponent, 
    EditCountryComponent,
    DeleteCountryComponent,
     
      BankAddDialogComponent,
      BankEditDialogComponent,
      DeleteBankComponent,
      BankComponent,

      AddDepartmentDialogComponent,
      EditDepDialogComponent,
      DeleteDepartmentComponent,

      ShiftAddDialogComponent,
      EditShiftDialogComponent,
      DeleteshiftComponent,
      
      BranchAddDialogComponent,
      BranchEditDialogComponent,
      DeleteBranchComponent,


      EmployeeStatusAddDialogComponent,
      EmployeeStatusEditDialogComponent,
      DeleteestatusComponent,

      EmployeeTypeAddDialogComponent,
      EmployeeTypeEditDialogComponent,
      DeleteETypeComponent,
 
        
      FunctionAddDialogComponent,
      FunctionEditDialogComponent,
      DeleteFunctionComponent,

      GradeAddDialogComponent,
      GradeEditDialogComponent,
      DeletegradeComponent,

      MaritalAddDialogComponent,
      MaritalEditDialogComponent,
      DeleteMstatusComponent,

      QualificationAddDialogComponent,
      QualificationEditComponent,
      DeleteQualificationComponent,
      
      ReligionAddDialogComponent,
      ReligionEditDialogComponent,
      DeleteReligionComponent,

      AddDegreeDialogComponent,
      EditDegreeDialogComponent,
      DeleteDegreeComponent,

      AddAccountTypeDialogComponent,
     EditAccountDialogComponent,
     DeleteAccountTypeComponent,

        
      AddRosterDialogComponent,
      EditRosterDialogComponent,
      DeleteRosterComponent,

      DesignationComponent,
      AddDesignationComponent,
      EditDesignationComponent,
      DeleteDesignationComponent,
  
      ManagementLevelsComponent,
      AddManagementLevelsComponent,
      EditManagementLevelsComponent,
      DeleteManagementLevelsComponent,
  
      GroupComponent,
      AddGroupsComponent,
      EditGroupsComponent,
      DeleteGroupsComponent,
  
      GazettedHolidaysComponent,
      AddGazetedHolidaysComponent,
      EditGazetedHolidaysComponent,
      DeleteGazetedHolidaysComponent,
  
      CostCenterComponent,
      AddCostCenterComponent,
      EditCostCentersComponent,
      DeleteCostCentersComponent,
  
      LanguageComponent,
  
      SkillLevelsComponent,
      AddskillLevelsComponent,
      EditSkillLevelsComponent,
      DeleteSkillLevelsComponent,
  
      BloodGroupComponent,
      AddBloodgropsComponent,
      EditBloodgropsComponent,
      DeleteBloodgropsComponent,
  
      LeaveTypeComponent,
      AddLeavesTypeComponent,
      EditLeavesTypeComponent,
      DeleteLeaveTypeComponent,
  
      LanguageComponent,
      AddLanguagesComponent,
      EditLanguagesComponent,
      DeleteLanguagesComponent,
  
      AdvanceTypeComponent,
      AddAdvanceTypeComponent,
      EditAdvanceTypeComponent,
      DeleteAdvanceTypedeleteComponent,
  
      AllowancesTypeComponent,
      AddAllowancesTypeComponent,
      EditAllowancesTypeComponent,
      DeleteAllowncesTypeComponent,
  
      RelationComponent,
      AddRelationComponent,
      EditRelationComponent,
      DeleteRelationComponent,
  
      GenderComponent,
      AddGendersComponent,
      EditGendersComponent,
      DeleteGendersComponent,
  
  
      CityComponent,
      AddCityComponent,
      EditCityComponent,
      DeleteCityComponent,

      DepartmentComponent,
      EmployeeTypes,
      BranchComponent,
      FunctionComponent,
      GradesComponent,
      QualificationComponent,
      EmployeeStatuscomponent, 
      MaritalStatusComponent,
      ReligionComponent,
      RosterComponent,
      ShiftComponent,
      BankComponent,
      DegreeComponent,
      AccountTypeComponent,
      
    ],
  entryComponents: [
    AddCountryComponent,
    EditCountryComponent,
    DeleteCountryComponent,

    BankAddDialogComponent,
    BankEditDialogComponent,
    DeleteBankComponent,

    AddDepartmentDialogComponent,
    EditDepDialogComponent,
    DeleteDepartmentComponent,

    ShiftAddDialogComponent,
    EditShiftDialogComponent,
    DeleteshiftComponent,
    
    BranchAddDialogComponent,
    BranchEditDialogComponent,
    DeleteBranchComponent,


    EmployeeStatusAddDialogComponent,
    EmployeeStatusEditDialogComponent,
    DeleteestatusComponent,

    EmployeeTypeAddDialogComponent,
    EmployeeTypeEditDialogComponent,
    DeleteETypeComponent,

      
    FunctionAddDialogComponent,
    FunctionEditDialogComponent,
    DeleteFunctionComponent,

    GradeAddDialogComponent,
    GradeEditDialogComponent,
    DeletegradeComponent,

    MaritalAddDialogComponent,
    MaritalEditDialogComponent,
    DeleteMstatusComponent,

    QualificationAddDialogComponent,
    QualificationEditComponent,
    DeleteQualificationComponent,
    
    ReligionAddDialogComponent,
    ReligionEditDialogComponent,
    DeleteReligionComponent,

    AddDegreeDialogComponent,
    EditDegreeDialogComponent,
    DeleteDegreeComponent,

    AddAccountTypeDialogComponent,
   EditAccountDialogComponent,
   DeleteAccountTypeComponent,

      
    AddRosterDialogComponent,
    EditRosterDialogComponent,
    DeleteRosterComponent,

    
    AddManagementLevelsComponent,
    EditManagementLevelsComponent,
    DeleteManagementLevelsComponent,

    AddGroupsComponent,
    EditGroupsComponent,
    DeleteGroupsComponent,

    AddGazetedHolidaysComponent,
    EditGazetedHolidaysComponent,
    DeleteGazetedHolidaysComponent,

    AddLanguagesComponent,
    EditLanguagesComponent,
    DeleteLanguagesComponent,

    AddskillLevelsComponent,
    EditSkillLevelsComponent,
    DeleteSkillLevelsComponent,

    AddBloodgropsComponent,
    EditBloodgropsComponent,
    DeleteBloodgropsComponent,

    AddDesignationComponent,
    EditDesignationComponent,
    DeleteDesignationComponent,

    AddCostCenterComponent,
    EditCostCentersComponent,
    DeleteCostCentersComponent,

    AddLeavesTypeComponent,
    EditLeavesTypeComponent,
    DeleteLeaveTypeComponent,

    AddAdvanceTypeComponent,
    EditAdvanceTypeComponent,
    DeleteAdvanceTypedeleteComponent,

    AddAllowancesTypeComponent,
    EditAllowancesTypeComponent,
    DeleteAllowncesTypeComponent,

    AddRelationComponent,
    EditRelationComponent,
    DeleteRelationComponent,
    
    AddGendersComponent,
    EditGendersComponent,
    DeleteGendersComponent,

    AddCityComponent,
    EditCityComponent,
    DeleteCityComponent,
   

  ],
  exports: [],
  providers: [AuthGuard, DashboardService, SetupService]
})
export class DashboardModule { }
