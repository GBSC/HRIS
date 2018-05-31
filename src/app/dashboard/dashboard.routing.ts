import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { RootComponent }    from './root/root.component';
import { HomeComponent }    from './home/home.component'; 
import { SettingsComponent }    from './settings/settings.component'; 
import { DepartmentComponent } from './department/department.component'; 
import { FunctionComponent } from './function/function.component'; 
import { EmployeeTypes  } from './employeetype/employeetype.component';
import { BranchComponent  } from './branch/branch.component'; 
import { QualificationComponent  } from './qualification/qualification.component'; 
import {  GradesComponent  } from './grade/grade.component';  
import { EmployeeStatuscomponent } from './employeestatus/employeestatus.component';
import { MaritalStatusComponent } from './maritalstatus/maritalstatus.component'; 
import { ReligionComponent } from './religion/religion.component'; 
import { ShiftComponent } from './shift/shift.component';
import { BankComponent } from './bank/bank.component';
import { DegreeComponent } from './degree/degree.component';
import { AccountTypeComponent } from './accounttype/accounttype.component';
import { RosterComponent } from './roster/roster.component';
import { ManagementLevelsComponent }    from './managementlevels/managementlevels.component'; 
import { DesignationComponent } from './designations/designations.component';
import { GroupComponent } from './groups/groups.component';
import { GazettedHolidaysComponent } from './gazettedholidays/gazettedholidays.component';
import { CostCenterComponent } from './costcenters/costcenters.component';
import { LanguageComponent } from './languages/languages.component';
import { SkillLevelsComponent } from './skilllevels/skilllevels.component';
import { BloodGroupComponent } from './bloodgroups/bloodgroups.component';
import { BloodGroup } from './models/bloodgroup,interface';
import { LeaveType } from './models/leavetype,interface';
import { LeaveTypeComponent } from './leavetypes/leavetypes.component';
import { AdvanceTypeComponent } from './advancetypes/advancetypes.component';
import { AllowancesTypeComponent } from './allowancestypes/allowancestypes.component';
import { RelationComponent } from './relations/relations.component';
import { City } from './models/city,interface';
import { Gender } from './models/gender,interface';
import { GenderComponent } from './genders/genders.component';
import { CityComponent } from './cities/cities.component';

import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'dashboard',
      component: RootComponent, canActivate: [AuthGuard],

      children: [      
       { path: '', component: HomeComponent },
       { path: 'home',  component: HomeComponent },
       { path: 'settings',  component: SettingsComponent },
       { path: 'department',  component: DepartmentComponent },
       { path: 'employeetype',  component: EmployeeTypes },
       { path: 'branch',  component: BranchComponent },
       { path: 'function',  component: FunctionComponent },
       { path: 'grade',  component: GradesComponent },
       { path: 'qualification',  component: QualificationComponent },
       { path: 'employeestatus',  component: EmployeeStatuscomponent },
       { path: 'maritalstatus',  component: MaritalStatusComponent },
       { path: 'religion',  component: ReligionComponent },
       { path: 'shift',  component: ShiftComponent },
       { path: 'bank',  component: BankComponent },
       { path: 'degree',  component: DegreeComponent },
       { path: 'accounttype',  component: AccountTypeComponent },
       { path: 'roster',  component: RosterComponent },
       { path: 'managementlevels',  component: ManagementLevelsComponent },
       {path: 'designations', component:DesignationComponent},
       {path: 'groups', component:GroupComponent},
       {path: 'gazettedholidays', component:GazettedHolidaysComponent},
       {path: 'costcenters', component:CostCenterComponent},
       {path: 'languages', component:LanguageComponent},
       {path: 'skilllevels', component:SkillLevelsComponent},
       {path: 'bloodgroups', component:BloodGroupComponent},
       {path: 'leavetypes', component:LeaveTypeComponent},
       { path: 'department',  component: DepartmentComponent },
       { path: 'employeetype',  component: EmployeeTypes },
       { path: 'branch',  component: BranchComponent },
       { path: 'function',  component: FunctionComponent },
       { path: 'grade',  component: GradesComponent },
       { path: 'qualification',  component: QualificationComponent },
       { path: 'employeestatus',  component: EmployeeStatuscomponent },
       { path: 'maritalstatus',  component: MaritalStatusComponent },
       { path: 'religion',  component: ReligionComponent },
       { path: 'shift',  component: ShiftComponent },
       { path: 'advancetypes',  component: AdvanceTypeComponent },
       { path: 'allowancestypes',  component: AllowancesTypeComponent },
       { path: 'relations',  component: RelationComponent },
       { path: 'genders',  component: GenderComponent },
       { path: 'cities',  component: CityComponent }
      ]       
    }  
]);

