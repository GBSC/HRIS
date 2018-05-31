import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Country } from '../models/country,interface';
import { Department } from '../models/department.interface';
import { EmployeeType } from '../models/employeetype,interface';
import { Branch } from '../models/branch,interface';
import { Grade } from '../models/grade,interface';
import { Function } from '../models/function,interface';
import { QualificationComponent } from '../qualification/qualification.component';
import { Qualification } from '../models/qualification,interface';
import { EmployeeStatus } from '../models/EmployeeStatus,interface';
import { MaritalStatus } from '../models/maritalstatus,interface';
import { Religion } from '../models/religion,interface';
import { Roster } from '../models/roster,interface';
import { Shift } from '../models/shift,interface';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { Options } from 'selenium-webdriver/chrome';
import { Bank } from '../models/bank,interface';
import { Degree } from '../models/degree,interface';
import { Accounttype } from '../models/accounttype,interface';
import { Designation } from '../models/designation,interface';
import { ManagementLevel } from '../models/managementlevel,interface';
import { Group } from '../models/group,interface';
import { CostCenter } from '../models/costcenter,interface';
import { Language} from '../models/language,interface';
import { GazettedHolidays } from '../models/gazettedholidays,interface';
import { SkillLevels } from '../models/skilllevel,interface';
import { BloodGroup } from '../models/bloodgroup,interface';
import { LeaveType } from '../models/leavetype,interface'; 
import { AdvanceType} from '../models/advancetype,interface';
import { AllowancesType } from '../models/allowancestype,interface';
import { Relation } from '../models/relation,interface';
import { City } from '../models/city,interface';
import { Gender } from '../models/gender,interface';

@Injectable()
export class SetupService {
  refresh(): any {
    throw new Error("Method not implemented.");
  }
  private readonly API_URL = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllCountries';
  private readonly API_URL_EmployeeStatus = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllEmployeeStatus'; 
  private readonly API_URL_MaritalStatus = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllMaritialStatus';
  private readonly API_URL_Religion = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllReligion'; 
  private readonly API_URL_Roster = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllRosters'; 
  private readonly API_URL_Shift = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getallshifts';
  private readonly API_URL_Bank = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllBanks';
  private readonly API_URL_Degree = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllDegrees';
  private readonly API_URL_Accounttype = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllAccountTypes';
  private readonly API_URL_Designation = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllDesignations';
  private readonly API_URL_ManagementLevel = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getAllManagementlevels';
  private readonly API_URL_Group = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getAllGroups';
  private readonly API_URL_CostCenter = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllCostCenter';
  private readonly API_URL_Language = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getAllLanguages';
  private readonly API_URL_GazettedHolidays = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllGazettedHolidays';
  private readonly API_URL_SkillLevels = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllSkillLevel';
  private readonly API_URL_BloodGroups = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllBloodGroup';
  private readonly API_URL_LeaveTypes = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllLeaveType';
  private readonly API_URL_Department = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getalldepartment'; 
  private readonly API_URL_EmployeeType = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getallemployeetypes'; 
  private readonly API_URL_Branch = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getallbranches'; 
  private readonly API_URL_Function = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getallfunctions'; 
  private readonly API_URL_Grade = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getallgrades'; 
  private readonly API_URL_Qualification = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/getallqulifications'; 
  private readonly API_URL_AdvanceType = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllAdvanceTypes';
  private readonly API_URL_AllowancesType = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllAllowancesTypes';
  private readonly API_URL_Relation = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllRelations';
  private readonly API_URL_Gender = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllGenders';
  private readonly API_URL_City = 'http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/GetAllCities';


 
 

  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) { }
  get data(): Country[] {
    return this.dataChange.value;
  }

  

  get depdata(): Department[]{
    return this.dataChange.value;
  }

  get accounttypedata(): Accounttype[]{
    return this.dataChange.value;
  }
  get degreedata(): Degree[]{
    return this.dataChange.value;
  }
  get Employeetypedata(): EmployeeType[]{
    return this.dataChange.value;
  }
  get Employeestatusdata(): EmployeeStatus[]{
    return this.dataChange.value;
  }
  get branchdata(): Branch[]{
    return this.dataChange.value;
  }

  get functiondata(): Function[]{
    return this.dataChange.value;
  }

  get gradedata(): Grade[]{
    return this.dataChange.value;
  }
  get qualificationdata(): Qualification[]{
    return this.dataChange.value;
  }

  get maritalstatusdata(): MaritalStatus[]{
    return this.dataChange.value;
  }

  get religiondata(): Religion[]{
    return this.dataChange.value;
  }
  get rosterdata(): Roster[]{
    return this.dataChange.value;
  }

  get bankdata(): Bank[]{
    return this.dataChange.value;
  }
  get shiftdata(): Shift[]{
    return this.dataChange.value;
  }
  get Designationdata(): Designation[] {
    return this.dataChange.value;
  }

  get ManagementLeveldata(): ManagementLevel[] {
    return this.dataChange.value;
  }

  get Groupdata(): Group[] {
    return this.dataChange.value;
  }

  
  get CostCenterdata(): CostCenter[] {
    return this.dataChange.value;
  }

  get Languagedata(): Language[] {
    return this.dataChange.value;
  }

  get GazettedHolidaysdata(): GazettedHolidays[] {
    return this.dataChange.value;
  }
  BloodGroups
  get SkillLevelsdata(): SkillLevels[] {
    return this.dataChange.value;
  }

  get   BloodGroupsdata(): BloodGroup[] {
    return this.dataChange.value;
  }
  get     LeaveTypesdata(): LeaveType[] {
    return this.dataChange.value;
  }

 

  get Relationdata(): Relation[]{
    return this.dataChange.value;
  }



  get AdvanceTypedata(): AdvanceType[]{
    return this.dataChange.value;
  }

  get AllowancesTypedata(): AllowancesType[]{
    return this.dataChange.value;
  }

  get Genderdata(): Gender[]{
    return this.dataChange.value;
  }

  get Citydata(): City[]{
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS  Country*/
/** CRUD METHODS */
getAllCountries(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<Country[]>(this.API_URL).subscribe(data => {
    this.dataChange.next(data);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addCountry(country: Country): void {
  let obj = {
    Id : country.Id,
    Name: country.Name,
    Code: country.Code,
    Currency: country.Currency,
    CurrencyISO: country.CurrencyISO,
  }; 

  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Country>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/AddCountry/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = country;
// this.getAllCountries();
}

updateCountry(country: Country): void {
  let obj = {
    Id : country.Id,
    Name: country.Name,
    Code: country.Code,
    Currency: country.Currency,
    CurrencyISO: country.CurrencyISO,
  };  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Country>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/AddCountry/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = country;
}



DeleteCountry(country : Country): void {

console.log(country);
  
let authToken = localStorage.getItem('auth_token');  
let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}

this.httpClient.get<Country[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteCountry/'+country.Id).subscribe(data => {
  console.log(data);
  this.dataChange.next(data);
},
  (error: HttpErrorResponse) => {
    console.log(error.name + ' ' + error.message);
  });
}


 /** CRUD METHODS  FOR DESIGNATIONS*/


    /** CRUD METHODS DEPARTMENTS */
    getAllDepartments(): void {
      
      let authToken = localStorage.getItem('auth_token');  
      let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
      
      this.httpClient.get<Department[]>(this.API_URL_Department).subscribe(depdata => {
        this.dataChange.next(depdata);
      },
        (error: HttpErrorResponse) => {
          console.log(error.name + ' ' + error.message);
        });
    }
  
    // DEMO ONLY, you can find working methods below
    addDepartment(department: Department): void {
      let obj = {
        Name: department.Name,
        Code: department.Code,
        Id: 0,
        Description: department.Description, 
      };
     

      let authToken = localStorage.getItem('auth_token');  
      let headers = {headers: {'Content-Type':'application/json'}}
      this.httpClient.post<Department>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddDepartment/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
      this.dialogData = department; 
    
    }
 

    updateDepartment(department: Department): void {
      let obj = {
        Id : department.Id,
        Name: department.Name,
        Code: department.Code,
        Description: department.Description
      };  
      let authToken = localStorage.getItem('auth_token');  
      let headers = {headers: {'Content-Type':'application/json'}}
      this.httpClient.post<Department>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/AddDepartment/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
      this.dialogData = department;
  
    }
  
    deleteDepartment(department: Department): void {
      console.log(department);
    
      let authToken = localStorage.getItem('auth_token');  
      let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
      
      this.httpClient.get<Department[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteDepartment/'+department.Id).subscribe(depdata => {
        console.log(depdata);
        this.dataChange.next(depdata);
      },
        (error: HttpErrorResponse) => {
          console.log(error.name + ' ' + error.message);
        });
    
    }






    /** CRUD METHODS BANK */
    getAllBanks(): void {
      console.log(Bank);
      let authToken = localStorage.getItem('auth_token');  
      let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
      
      this.httpClient.get<Bank[]>(this.API_URL_Bank).subscribe(bankdata => {
        this.dataChange.next(bankdata);
      },
        (error: HttpErrorResponse) => {
          console.log(error.name + ' ' + error.message);
        });
    }
  
    // DEMO ONLY, you can find working methods below
    addBank(bank: Bank): void {
      let obj = {
        Id:bank.Id,
        Name: bank.Name,
        Code: bank.Code,
        Description: bank.Description,
        Accounttitle: bank.Accounttitle, 
        Accountnumber: bank.Accountnumber
      };
     console.log(bank);

      let authToken = localStorage.getItem('auth_token');  
      let headers = {headers: {'Content-Type':'application/json'}}
      this.httpClient.post<Bank>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddBank/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
      this.dialogData = bank; 
    
    }
 

    updateBank(bank: Bank): void {
      let obj = {
        Id : bank.Id,
        Name: bank.Name,
        Code: bank.Code,
        Description: bank.Description,
        Accounttitle: bank.Accounttitle, 
        Accountnumber: bank.Accountnumber
      };  
      let authToken = localStorage.getItem('auth_token');  
      let headers = {headers: {'Content-Type':'application/json'}}
      this.httpClient.post<Bank>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddBank/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
      this.dialogData = bank;
  
    }
  
    deleteBank(bank: Bank): void {
      console.log(bank);
    
      let authToken = localStorage.getItem('auth_token');  
      let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
      
      this.httpClient.get<Bank[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteBank/'+bank.Id).subscribe(bankdata => {
        console.log(bankdata);
        this.dataChange.next(bankdata);
      },
        (error: HttpErrorResponse) => {
          console.log(error.name + ' ' + error.message);
        });
    
    }
    
      /** CRUD METHODS EmployeeTypes */
      getAllEmployeeTypes(): void {
      
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
        
        this.httpClient.get<EmployeeType[]>(this.API_URL_EmployeeType).subscribe(Employeetypedata => {
          this.dataChange.next(Employeetypedata);
        },
          (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          });
      }
    
      // DEMO ONLY, you can find working methods below
      addEmployeeType(employeetype: EmployeeType): void {
        let obj = {
          Name: employeetype.Name,
          Code: employeetype.Code,
          Id: employeetype.Id,
          Description: employeetype.Description, 
        };
       
  
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json'}}
        this.httpClient.post<EmployeeType>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddEmployeeType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
        this.dialogData = employeetype; 
      }
    
      updateEmployeeType(employeetype: EmployeeType): void {
        let obj = {
          Id : employeetype.Id,
          Name: employeetype.Name,
          Code: employeetype.Code,
          Description: employeetype.Description
        };  
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json'}}
        this.httpClient.post<EmployeeType>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/AddEmployeeType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
        this.dialogData = employeetype;
      }
    
      deleteEmployeeType(employeetype : EmployeeType): void {
        console.log(employeetype);
    
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
        
        this.httpClient.get<EmployeeType[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteEmployeeType/'+employeetype.Id).subscribe(Employeetypedata => {
          console.log(Employeetypedata);
          this.dataChange.next(Employeetypedata);
        },
          (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          });
      
      }

        /** CRUD METHODS Branch */

      getAllbranches(): void {
      
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
        
        this.httpClient.get<Branch[]>(this.API_URL_Branch).subscribe(branchdata => {
          this.dataChange.next(branchdata);
        },
          (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          });
      }
    
      // DEMO ONLY, you can find working methods below
      addBranch(branch: Branch): void {
        let obj = {
          Name: branch.Name,
          Code: branch.Code,
          Id: branch.Id,
          Description: branch.Description, 
        };
       
        
        let authToken = localStorage.getItem('auth_token');   
        let headers = {headers: {'Content-Type':'application/json'}}
        this.httpClient.post<Branch>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddBranch/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
        this.dialogData = branch; 
      
      }
    
      updateBranch(branch: Branch): void {
        let obj = {
          Id : branch.Id,
          Name: branch.Name,
          Code: branch.Code,
          Description: branch.Description
        };  
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json'}}
        this.httpClient.post<Branch>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/AddBranch/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
        this.dialogData = branch;
    ;
      }
    
      deleteBranch(branch: Branch): void {
   

        console.log(branch);
    
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
        
        this.httpClient.get<Country[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteBranch/'+branch.Id).subscribe(branchdata => {
          console.log(branchdata);
          this.dataChange.next(branchdata);
        },
          (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          });
      }

       /** CRUD METHODS Function */

       getAllFunctions(): void {
      
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
        
        this.httpClient.get<Function[]>(this.API_URL_Function).subscribe(functiondata => {
          this.dataChange.next(functiondata);
        },
          (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          });
      }
    
      // DEMO ONLY, you can find working methods below
      addFunction(addfunc: Function): void {
        let obj = {
          Name: addfunc.Name,
          Code: addfunc.Code,
          Id: addfunc.Id,
          Description: addfunc.Description, 
        };
      
        
        let authToken = localStorage.getItem('auth_token');   
        let headers = {headers: {'Content-Type':'application/json'}}
        this.httpClient.post<Function>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddFunction/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
        this.dialogData = addfunc; 
      }
    
      updatefunction(updatefunc: Function): void {
        let obj = {
          Name: updatefunc.Name,
          Code: updatefunc.Code,
          Id: updatefunc.Id,
          Description: updatefunc.Description, 
        };
       
        
        let authToken = localStorage.getItem('auth_token');   
        let headers = {headers: {'Content-Type':'application/json'}}
        this.httpClient.post<Function>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddFunction/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
        this.dialogData = updatefunc; 
      }
    
      deletefunction(func: Function): void {

        console.log(func);
    
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
        
        this.httpClient.get<Function[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteFunction/'+func.Id).subscribe(functiondata => {
          console.log(functiondata);
          this.dataChange.next(functiondata);
        },
          (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          });
      
      }

             /** CRUD METHODS Grade */

             getAllgrades(): void {
      
              let authToken = localStorage.getItem('auth_token');  
              let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
              
              this.httpClient.get<Grade[]>(this.API_URL_Grade).subscribe(gradedata => {
                this.dataChange.next(gradedata);
              },
                (error: HttpErrorResponse) => {
                  console.log(error.name + ' ' + error.message);
                });
            }
          
            // DEMO ONLY, you can find working methods below
            addGrade(grade: Grade): void {
              let obj = {
                Name: grade.Name,
                Code: grade.Code,
                Id: grade.Id,
                Description: grade.Description, 
                Duedays: grade.ConfirmDueDays,
              };
             
              
              let authToken = localStorage.getItem('auth_token');   
              let headers = {headers: {'Content-Type':'application/json'}}
              this.httpClient.post<Grade>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddGrade/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
              this.dialogData = grade; 
            }
          
            updateGrade(grade: Grade): void {
              let obj = {
                Name: grade.Name,
                Code: grade.Code,
                Id: grade.Id,
                Description: grade.Description, 
                Duedays: grade.ConfirmDueDays,
              };
             
              
              let authToken = localStorage.getItem('auth_token');   
              let headers = {headers: {'Content-Type':'application/json'}}
              this.httpClient.post<Grade>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddGrade/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
              this.dialogData = grade; 
            }
          
            deleteGrade(grade: Grade): void {
              console.log(grade);
    
        let authToken = localStorage.getItem('auth_token');  
        let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
        
        this.httpClient.get<Grade[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteGrade/'+grade.Id).subscribe(gradedata => {
          console.log(gradedata);
          this.dataChange.next(gradedata);
        },
          (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          });
            
            }


                /** CRUD METHODS Qualification */

                getAllqualifications(): void {
      
                  let authToken = localStorage.getItem('auth_token');  
                  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                  
                  this.httpClient.get<Qualification[]>(this.API_URL_Qualification).subscribe(qualificationdata => {
                    this.dataChange.next(qualificationdata);
                  },
                    (error: HttpErrorResponse) => {
                      console.log(error.name + ' ' + error.message);
                    });
                }
              
                // DEMO ONLY, you can find working methods below
                addQualification(qualification: Qualification): void {
                  let obj = {
                    Name: qualification.Name,
                    Code: qualification.Code,
                    Id:qualification.Id,
                    Description: qualification.Description, 
                  };
                 
                  
                  let authToken = localStorage.getItem('auth_token');   
                  let headers = {headers: {'Content-Type':'application/json'}}
                  this.httpClient.post<Qualification>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/AddQualification',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                  this.dialogData = qualification; 
                }
              
                updateQualification(qualification: Qualification): void {
                  let obj = {
                    Name: qualification.Name,
                    Code: qualification.Code,
                    Id:qualification.Id,
                    Description: qualification.Description, 
                  };
                 
                  
                  let authToken = localStorage.getItem('auth_token');   
                  let headers = {headers: {'Content-Type':'application/json'}}
                  this.httpClient.post<Qualification>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/AddQualification',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                  this.dialogData = qualification; 
                }
              
                deleteQualification(qualification: Qualification): void {
                  console.log(qualification);
    
                  let authToken = localStorage.getItem('auth_token');  
                  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                  
                  this.httpClient.get<Qualification[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteQualification/'+qualification.Id).subscribe(qualificationdata => {
                    console.log(qualificationdata);
                    this.dataChange.next(qualificationdata);
                  },
                    (error: HttpErrorResponse) => {
                      console.log(error.name + ' ' + error.message);
                    });
                
                }

                        /** CRUD METHODS EmployeeStatus */

                        getAllEmployeeStatus(): void {
      
                          let authToken = localStorage.getItem('auth_token');  
                          let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                          
                          this.httpClient.get<EmployeeStatus[]>(this.API_URL_EmployeeStatus).subscribe(employeestatusdata => {
                            this.dataChange.next(employeestatusdata);
                          },
                            (error: HttpErrorResponse) => {
                              console.log(error.name + ' ' + error.message);
                            });
                        }
                      
                        // DEMO ONLY, you can find working methods below
                        addEmployeeStatus(employeestatus: EmployeeStatus): void {
                          let obj = {
                            Name: employeestatus.Name,
                            Code: employeestatus.Code,
                            Id: employeestatus.Id,
                            Description: employeestatus.Description, 
                          };
                         
                          
                          let authToken = localStorage.getItem('auth_token');   
                          let headers = {headers: {'Content-Type':'application/json'}}
                          this.httpClient.post<EmployeeStatus>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddEmployeeStatus',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                          this.dialogData = employeestatus;
                        }
                      
                        updateEmployeeStatus(employeestatus: EmployeeStatus): void {
                          let obj = {
                            Name: employeestatus.Name,
                            Code: employeestatus.Code,
                            Id:employeestatus.Id,
                            Description: employeestatus.Description, 
                          };
                         
                          
                          let authToken = localStorage.getItem('auth_token');   
                          let headers = {headers: {'Content-Type':'application/json'}}
                          this.httpClient.post<EmployeeStatus>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddEmployeeStatus',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                          this.dialogData = employeestatus;
                        }
                      
                        deleteEmployeeStatus(employeestatus: EmployeeStatus): void {
                          
                          console.log(employeestatus);
    
                          let authToken = localStorage.getItem('auth_token');  
                          let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                          
                          this.httpClient.get<EmployeeStatus[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteEmployeeStatus/'+employeestatus.Id).subscribe(Employeestatusdata => {
                            console.log(Employeestatusdata);
                            this.dataChange.next(Employeestatusdata);
                          },
                            (error: HttpErrorResponse) => {
                              console.log(error.name + ' ' + error.message);
                            });
                        
                        }


                           /** CRUD METHODS MaritalStatus */

                           getAllMaritalStatus(): void {
      
                            let authToken = localStorage.getItem('auth_token');  
                            let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                            
                            this.httpClient.get<MaritalStatus[]>(this.API_URL_MaritalStatus).subscribe(maritalstatusdata => {
                              this.dataChange.next(maritalstatusdata);
                            },
                              (error: HttpErrorResponse) => {
                                console.log(error.name + ' ' + error.message);
                              });
                          }
                        
                          // DEMO ONLY, you can find working methods below
                          addMaritalStatus(maritalstatus: MaritalStatus): void {
                            let obj = {
                              Name: maritalstatus.Name,
                              Code: maritalstatus.Code,
                              Id: maritalstatus.Id,
                              Description: maritalstatus.Description, 
                            };
                           
                            
                            let authToken = localStorage.getItem('auth_token');   
                            let headers = {headers: {'Content-Type':'application/json'}}
                            this.httpClient.post<MaritalStatus>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddMaritialStatus/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                            this.dialogData = maritalstatus;
                          }
                        
                          updateMaritalStatus(maritalstatus: MaritalStatus): void {
                            let obj = {
                              Name: maritalstatus.Name,
                              Code: maritalstatus.Code,
                              Id: maritalstatus.Id,
                              Description: maritalstatus.Description, 
                            };
                           
                            
                            let authToken = localStorage.getItem('auth_token');   
                            let headers = {headers: {'Content-Type':'application/json'}}
                            this.httpClient.post<MaritalStatus>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddMaritialStatus/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                            this.dialogData = maritalstatus;
                          }
                        
                          deleteMaritalStatus(maritalstatus: MaritalStatus): void {
                            console.log(maritalstatus);
    
                            let authToken = localStorage.getItem('auth_token');  
                            let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                            
                            this.httpClient.get<MaritalStatus[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteMaritialStatus/'+maritalstatus.Id).subscribe(maritalstatusdata => {
                              console.log(maritalstatusdata);
                              this.dataChange.next(maritalstatusdata);
                            },
                              (error: HttpErrorResponse) => {
                                console.log(error.name + ' ' + error.message);
                              });
                          
                          }

                          /** CRUD METHODS Religion */

                          getAllReligions(): void {
      
                            let authToken = localStorage.getItem('auth_token');  
                            let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                            
                            this.httpClient.get<Religion[]>(this.API_URL_Religion).subscribe(religiondata => {
                              this.dataChange.next(religiondata);
                            },
                              (error: HttpErrorResponse) => {
                                console.log(error.name + ' ' + error.message);
                              });
                          }
                        
                          // DEMO ONLY, you can find working methods below
                          addReligion(religion: Religion): void {
                            let obj = {
                              Name: religion.Name,
                              Code: religion.Code,
                              Id:religion.Id,
                              Description: religion.Description, 
                            };
                           
                            
                            let authToken = localStorage.getItem('auth_token');   
                            let headers = {headers: {'Content-Type':'application/json'}}
                            this.httpClient.post<Religion>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddReligion/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                            this.dialogData = religion;
                          }
                        
                          updateReligion(religion: Religion): void {
                            let obj = {
                              Name: religion.Name,
                              Code: religion.Code,
                              Id: religion.Id,
                              Description: religion.Description, 
                            };
                           
                            
                            let authToken = localStorage.getItem('auth_token');   
                            let headers = {headers: {'Content-Type':'application/json'}}
                            this.httpClient.post<Religion>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddReligion/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                            this.dialogData = religion;
                          }
                        
                          deleteReligion(religion: Religion): void {
                            console.log(religion);
    
                            let authToken = localStorage.getItem('auth_token');  
                            let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                            
                            this.httpClient.get<Religion[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteReligion/'+religion.Id).subscribe(religiondata => {
                              console.log(religiondata);
                              this.dataChange.next(religiondata);
                            },
                              (error: HttpErrorResponse) => {
                                console.log(error.name + ' ' + error.message);
                              });
                          
                          
                          }



                             /** CRUD METHODS ROSTER */

                             getAllRosters(): void {
      
                              let authToken = localStorage.getItem('auth_token');  
                              let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                              
                              this.httpClient.get<Roster[]>(this.API_URL_Roster).subscribe(rosterdata => {
                                this.dataChange.next(rosterdata);
                              },
                                (error: HttpErrorResponse) => {
                                  console.log(error.name + ' ' + error.message);
                                });
                            }
                          
                            // DEMO ONLY, you can find working methods below
                            addRoster(roster: Roster): void {
                              let obj = {
                                Name: roster.Name,
                                Code: roster.Code,
                                Id:roster.Id,
                                Description: roster.Description, 
                              };
                             
                              
                              let authToken = localStorage.getItem('auth_token');   
                              let headers = {headers: {'Content-Type':'application/json'}}
                              this.httpClient.post<Roster>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddRoster/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                              this.dialogData = roster;
                            }
                          
                            updateRoster(roster: Roster): void {
                              let obj = {
                                Name: roster.Name,
                                Code: roster.Code,
                                Id: roster.Id,
                                Description: roster.Description, 
                              };
                             
                              
                              let authToken = localStorage.getItem('auth_token');   
                              let headers = {headers: {'Content-Type':'application/json'}}
                              this.httpClient.post<Roster>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddRoster/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                              this.dialogData = roster;
                            }
                          
                            deleteRoster(roster: Roster): void {
                              console.log(roster);
      
                              let authToken = localStorage.getItem('auth_token');  
                              let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                              
                              this.httpClient.get<Roster[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteRoster/'+roster.Id).subscribe(rosterdata => {
                                console.log(rosterdata);
                                this.dataChange.next(rosterdata);
                              },
                                (error: HttpErrorResponse) => {
                                  console.log(error.name + ' ' + error.message);
                                });
                            
                            
                            }
  
                          /** CRUD METHODS Shift */

                          getAllShifts(): void {
      
                            let authToken = localStorage.getItem('auth_token');  
                            let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                            
                            this.httpClient.get<Shift[]>(this.API_URL_Shift).subscribe(shiftdata => {
                              this.dataChange.next(shiftdata);
                            },
                              (error: HttpErrorResponse) => {
                                console.log(error.name + ' ' + error.message);
                              });
                          }
                        
                          // DEMO ONLY, you can find working methods below
                          addShift(shift: Shift): void {
                            let obj = {
                              Name: shift.Name,
                              Code: shift.Code,
                              Id: shift.Id,
                              Description: shift.Description, 
                            };
                           
                            
                            let authToken = localStorage.getItem('auth_token');   
                            let headers = {headers: {'Content-Type':'application/json'}}
                            this.httpClient.post<Shift>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddShifts/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                            this.dialogData = shift;
                          }
                        
                          updateShift(shift: Shift): void {
                            let obj = {
                              Id : shift.Id,
                              Name: shift.Name,
                              Code: shift.Code,
                              Description: shift.Description
                            };  
                            let authToken = localStorage.getItem('auth_token');  
                            let headers = {headers: {'Content-Type':'application/json'}}
                            this.httpClient.post<Shift>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/AddShifts/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                            this.dialogData = shift;
                        ;
                          }
                        
                          deleteShift(shift: Shift): void {
                            console.log(shift);
    
                            let authToken = localStorage.getItem('auth_token');  
                            let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                            
                            this.httpClient.get<Shift[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteShifts/'+shift.Id).subscribe(shiftdata => {
                              console.log(shiftdata);
                              this.dataChange.next(shiftdata);
                            },
                              (error: HttpErrorResponse) => {
                                console.log(error.name + ' ' + error.message);
                              });
                          
                          }



                                  /** CRUD METHODS Degree */

                                  getAllDegrees(): void {
      
                                    let authToken = localStorage.getItem('auth_token');  
                                    let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                                    
                                    this.httpClient.get<Degree[]>(this.API_URL_Degree).subscribe(degreedata => {
                                      this.dataChange.next(degreedata);
                                    },
                                      (error: HttpErrorResponse) => {
                                        console.log(error.name + ' ' + error.message);
                                      });
                                  }
                                
                                  // DEMO ONLY, you can find working methods below
                                  addDegree(degree: Degree): void {
                                    let obj = {
                                      Name: degree.Name,
                                      Code: degree.Code,
                                      Id: degree.Id,
                                      Description: degree.Description, 
                                    };
                                   
                                    
                                    let authToken = localStorage.getItem('auth_token');   
                                    let headers = {headers: {'Content-Type':'application/json'}}
                                    this.httpClient.post<Degree>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddDegree/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                                    this.dialogData = degree;
                                  }
                                
                                  updateDegree(degree: Degree): void {
                                    let obj = {
                                      Name: degree.Name,
                                      Code: degree.Code,
                                      Id: degree.Id,
                                      Description: degree.Description, 
                                    };
                                   
                                    
                                    let authToken = localStorage.getItem('auth_token');   
                                    let headers = {headers: {'Content-Type':'application/json'}}
                                    this.httpClient.post<Degree>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddDegree/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                                    this.dialogData = degree;
                                 
                                  }
                                
                                  deleteDegree(degree: Degree): void {
                                    console.log(degree);
            
                                    let authToken = localStorage.getItem('auth_token');  
                                    let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                                    
                                    this.httpClient.get<Degree[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteDegree/'+degree.Id).subscribe(degreedata => {
                                      console.log(degreedata);
                                      this.dataChange.next(degreedata);
                                    },
                                      (error: HttpErrorResponse) => {
                                        console.log(error.name + ' ' + error.message);
                                      });
                                  
                                  }



                                        /** CRUD METHODS Degree */

                                        getAllAccounttypes(): void {
      
                                          let authToken = localStorage.getItem('auth_token');  
                                          let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                                          
                                          this.httpClient.get<Accounttype[]>(this.API_URL_Accounttype).subscribe(accounttypedata => {
                                            this.dataChange.next(accounttypedata);
                                          },
                                            (error: HttpErrorResponse) => {
                                              console.log(error.name + ' ' + error.message);
                                            });
                                        }
                                      
                                        // DEMO ONLY, you can find working methods below
                                        addAccounttype(accounttype: Accounttype): void {
                                          let obj = {
                                            Name: accounttype.Name,
                                            Code: accounttype.Code,
                                            Id: accounttype.Id,
                                            Description: accounttype.Description, 
                                          };
                                         
                                          
                                          let authToken = localStorage.getItem('auth_token');   
                                          let headers = {headers: {'Content-Type':'application/json'}}
                                          this.httpClient.post<Accounttype>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddAccountType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                                          this.dialogData = accounttype;
                                        }
                                      
                                        updateAccounttype(accounttype: Accounttype): void {
                                          let obj = {
                                            Name: accounttype.Name,
                                            Code: accounttype.Code,
                                            Id: accounttype.Id,
                                            Description: accounttype.Description, 
                                          };
                                         
                                          
                                          let authToken = localStorage.getItem('auth_token');   
                                          let headers = {headers: {'Content-Type':'application/json'}}
                                          this.httpClient.post<Accounttype>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddAccountType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
                                          this.dialogData = accounttype;
                                     
                                        }
                                      
                                        deleteAccounttype(accounttype: Accounttype): void {
                                          console.log(accounttype);
                  
                                          let authToken = localStorage.getItem('auth_token');  
                                          let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
                                          
                                          this.httpClient.get<Accounttype[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteAccountType/'+accounttype.Id).subscribe(accounttypedata=> {
                                            console.log(accounttypedata);
                                            this.dataChange.next(accounttypedata);
                                          },
                                            (error: HttpErrorResponse) => {
                                              console.log(error.name + ' ' + error.message);
                                            });
                                        
                                        }


 /** CRUD METHODS  FOR DESIGNATIONS*/

 getAllDesignations(): void {
  let authToken = localStorage.getItem('auth_token');  
    let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
    
    this.httpClient.get<Designation[]>(this.API_URL_Designation).subscribe(Designationdata => {
      this.dataChange.next(Designationdata);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
}

// DEMO ONLY, you can find working methods below
addDesignation(Designation: Designation): void {
  let obj = {
    Id : Designation.Id,
    Name: Designation.Name,
    Code: Designation.Code,
    Description: Designation.Description,
  }; 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Designation>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddDesignation',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Designation;

}


updateDesignation(Designation: Designation): void {
  let obj = {
    Id : Designation.Id,
    Name: Designation.Name,
    Code: Designation.Code,
    Description: Designation.Description,
  };  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Designation>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/AddDesignation/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Designation;
}

deleteDesignation(designation: Designation): void {
   
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<Designation[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteDesignation/'+designation.Id).subscribe(Designationdata => {
  
    this.dataChange.next(Designationdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}


 /** CRUD METHODS  FOR managementlevel*/
 getAllManagementlevels(): void {
      
  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<ManagementLevel[]>(this.API_URL_ManagementLevel).subscribe(ManagementLeveldata => {
    this.dataChange.next(ManagementLeveldata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addManagementLevel(ManagementLevel: ManagementLevel): void {
  let obj = {
    Id : ManagementLevel.Id,
    Name: ManagementLevel.Name,
    Code: ManagementLevel.Code,
    Description: ManagementLevel.Description,
  }; 

  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<ManagementLevel>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/addManagementLevel/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = ManagementLevel;
}



updateManagementLevel(ManagementLevel: ManagementLevel): void {
  let obj = {
    Id : ManagementLevel.Id,
    Code: ManagementLevel.Code,
    Name: ManagementLevel.Name,
    Description: ManagementLevel.Description,
  };  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<ManagementLevel>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/addManagementLevel/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = ManagementLevel;
}

deleteManagementLevel(ManagementLevel: ManagementLevel): void {

  console.log(ManagementLevel);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<ManagementLevel[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteManagementLevel/'+ManagementLevel.Id).subscribe(ManagementLeveldata => {
    console.log(ManagementLeveldata);
    this.dataChange.next(ManagementLeveldata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    }); 
}



 /** CRUD METHODS  FOR group*/

 getAllGroups(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<Group[]>(this.API_URL_Group).subscribe(Groupdata => {
    this.dataChange.next(Groupdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addGroup(Group: Group): void {
  let obj = {
    Id : Group.Id,
    Name: Group.Name,
    Code: Group.Code,
    Description: Group.Description,
  }; 

  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Group>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/addGroup/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Group;
}

updateGroup(Group: Group): void {
  let obj = {
    Id : Group.Id,
    Code: Group.Code,
    Name: Group.Name,
    Description: Group.Description,
  };  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Group>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/addGroup/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Group;
}

deleteGroup(Group: Group): void {

  console.log(Group);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<Group[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteGroup/'+Group.Id).subscribe(Groupdata => {
    console.log(Groupdata);
    this.dataChange.next(Groupdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

}


 /** CRUD METHODS  FOR CostCenter*/

 GetAllCostCenter(): void {
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<CostCenter[]>(this.API_URL_CostCenter).subscribe(CostCenterdata => {
    this.dataChange.next(CostCenterdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addCostCenter(CostCenter: CostCenter): void {
  let obj = {
    Id : CostCenter.Id,
    Name: CostCenter.Name,
    Code: CostCenter.Code,
    CostCenterCode: CostCenter.CostCenterCode,
    ProfitCenterCode: CostCenter.ProfitCenterCode,
  }; 
  console.log(CostCenter);
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<CostCenter>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddCostCenter/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = CostCenter;
}

updateCostCenter(CostCenter: CostCenter): void {
  let obj = {
    Id : CostCenter.Id,
    Name: CostCenter.Name,
    Code: CostCenter.Code,
    CostCenterCode: CostCenter.CostCenterCode,
    ProfitCenterCode: CostCenter.ProfitCenterCode,
  };  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<CostCenter>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/addCostCenter/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = CostCenter;
}

deleteCostCenter(id: number): void {
  console.log(id);
}


 /** CRUD METHODS  FOR language*/

 getAllLanguages(): void {

  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<Language[]>(this.API_URL_Language).subscribe(Languagedata => {
    this.dataChange.next(Languagedata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addLanguage(Language: Language): void {
  let obj = {
    Id : Language.Id,
    Code: Language.Code,
    Name: Language.Name,
    Description: Language.Description,
  }; 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Language>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/addLanguage/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Language;
}

updateLanguage(Language: Language): void {
  let obj = {
    Id : Language.Id,
    Code: Language.Code,
    Name: Language.Name,
    Description: Language.Description,
  };  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Language>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/addLanguage/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Language;
}

deleteLanguage(Language: Language): void { 
  console.log(Language); 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<Language[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteLanguage/'+Language.Id).subscribe(Languagedata => {
    console.log(Languagedata);
    this.dataChange.next(Languagedata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}




 /** CRUD METHODS  FOR GazettedHolidays*/

 getAllGazettedHolidays(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<GazettedHolidays[]>(this.API_URL_GazettedHolidays).subscribe(GazettedHolidaysdata => {
    this.dataChange.next(GazettedHolidaysdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addGazettedHolidays(GazettedHolidays: GazettedHolidays): void {
  let obj = {
    Id : GazettedHolidays.Id,
    Name: GazettedHolidays.Name,
    Code: GazettedHolidays.Code,
    Description: GazettedHolidays.Description,
    Remarks :GazettedHolidays.Remarks,
    HolidayDate	: GazettedHolidays.HolidayDate
  }; 

  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<GazettedHolidays>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddGazettedHolidays/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = GazettedHolidays;
}

updateGazettedHolidays(GazettedHolidays: GazettedHolidays): void {
  let obj = {
    Id : GazettedHolidays.Id,
    Name: GazettedHolidays.Name,
    Code: GazettedHolidays.Code,
    Description: GazettedHolidays.Description,
    Remarks :GazettedHolidays.Remarks,
    HolidayDate	: GazettedHolidays.HolidayDate
  };  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<GazettedHolidays>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddGazettedHolidays/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = GazettedHolidays;
}

deleteGazettedHolidays(GazettedHolidays: GazettedHolidays): void {

  console.log(GazettedHolidays);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<GazettedHolidays[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteGazettedHolidays/'+GazettedHolidays.Id).subscribe(GazettedHolidaysdata => {
    console.log(GazettedHolidaysdata);
    this.dataChange.next(GazettedHolidaysdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}


 /** CRUD METHODS  FOR SkillLevels*/

 getAllSkillLevels(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<SkillLevels[]>(this.API_URL_SkillLevels).subscribe(SkillLevelsdata => {
    this.dataChange.next(SkillLevelsdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addSkillLevel(SkillLevels: SkillLevels): void {
  let obj = {
    Id : SkillLevels.Id,
    Code: SkillLevels.Code,
    Name: SkillLevels.Name,
    Description: SkillLevels.Description,
  };   
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<SkillLevels>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/addSkillLevel/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = SkillLevels;
  this.getAllSkillLevels();
}

updateSkillLevel(SkillLevels: SkillLevels): void {
  let obj = {
    Id : SkillLevels.Id,
    Name: SkillLevels.Name,
    Code: SkillLevels.Code,
    Description: SkillLevels.Description,
  };  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<SkillLevels>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/setup/addSkillLevel/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = SkillLevels;
}

deleteSkillLevel(SkillLevels: SkillLevels): void {
  console.log(SkillLevels);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<SkillLevels[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteSkillLevel/'+SkillLevels.Id).subscribe(SkillLevelsdata => {
    console.log(SkillLevelsdata);
    this.dataChange.next(SkillLevelsdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}



 /** CRUD METHODS  FOR BloodGroup*/

 getAllBloodGroups(): void {
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<BloodGroup[]>(this.API_URL_BloodGroups).subscribe(BloodGroupsdata => {
    this.dataChange.next(BloodGroupsdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addBloodGroups(BloodGroups: BloodGroup): void {
  let obj = {
    Id : BloodGroups.Id,
    Name: BloodGroups.Name,
    Code: BloodGroups.Code,
    Description: BloodGroups.Description,
  }; 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<BloodGroup>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddBloodGroup',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = BloodGroups;
}

updateBloodGroups(BloodGroups: BloodGroup): void {
  let obj = {
    Id : BloodGroups.Id,
    Name: BloodGroups.Name,
    Code: BloodGroups.Code,
    Description: BloodGroups.Description,
  };  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<BloodGroup>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddBloodGroup',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = BloodGroups;
}

deleteBloodGroups(BloodGroups: BloodGroup): void {

  console.log(BloodGroups);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<BloodGroup[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteBloodGroup/'+BloodGroups.Id).subscribe(BloodGroupsdata => {
    console.log(BloodGroupsdata);
    this.dataChange.next(BloodGroupsdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}



 /** CRUD METHODS  FOR LeaveType*/

 GetAllLeaveType(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<LeaveType[]>(this.API_URL_LeaveTypes).subscribe(LeaveTypesdata => {
    this.dataChange.next(LeaveTypesdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addLeaveTypes(LeaveTypes: LeaveType): void {
  let obj = {
    Id : LeaveTypes.Id,
    Name: LeaveTypes.Name,
    Code: LeaveTypes.Code,
    Description: LeaveTypes.Description,
  }; 

  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<LeaveType>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddLeaveType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = LeaveTypes;
}

updateLeaveTypes(LeaveTypes: LeaveType): void {
  let obj = {
    Id : LeaveTypes.Id,
    Name: LeaveTypes.Name,
    Code: LeaveTypes.Code,
    Description: LeaveTypes.Description,
  }; 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<LeaveType>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddLeaveType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = LeaveTypes;
}

deleteLeaveTypes(LeaveTypes: LeaveType): void {

  console.log(LeaveTypes);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<LeaveType[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteLeaveType/'+LeaveTypes.Id).subscribe(LeaveTypesdata => {
    console.log(LeaveTypesdata);
    this.dataChange.next(LeaveTypesdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}



 /** CRUD METHODS  FOR AdvanceType*/

 GetAllAllowancesType(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<AllowancesType[]>(this.API_URL_AllowancesType).subscribe(AllowancesTypedata => {
    this.dataChange.next(AllowancesTypedata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addAllowancesType(AllowancesType: AllowancesType): void {
  let obj = {
    Id : AllowancesType.Id,
    Name: AllowancesType.Name,
    Code: AllowancesType.Code,
    Description: AllowancesType.Description,
  }; 

  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<AllowancesType>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddAllowancesType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = AllowancesType;
}

updateAllowancesType(AllowancesType: AllowancesType): void {
  let obj = {
    Id : AllowancesType.Id,
    Name: AllowancesType.Name,
    Code: AllowancesType.Code,
    Description: AllowancesType.Description,
  }; 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<AllowancesType>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddAllowancesType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = AllowancesType;
}

deleteAllowancesType(AllowancesType: AllowancesType): void {

  console.log(AllowancesType);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<AllowancesType[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteAllowancesType/'+AllowancesType.Id).subscribe(AllowancesTypedata => {
    console.log(AllowancesTypedata);
    this.dataChange.next(AllowancesTypedata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

/** CRUD METHODS  FOR AdvanceType*/

GetAllAdvanceType(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<AdvanceType[]>(this.API_URL_AdvanceType).subscribe(AdvanceTypedata => {
    this.dataChange.next(AdvanceTypedata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addAdvanceType(AdvanceType: AdvanceType): void {
  let obj = {
    Id : AdvanceType.Id,
    Name: AdvanceType.Name,
    Code: AdvanceType.Code,
    Description: AdvanceType.Description,
  }; 

  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<AdvanceType>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddAdvanceType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = AdvanceType;
}

updateAdvanceType(AdvanceType: AdvanceType): void {
  let obj = {
    Id : AdvanceType.Id,
    Name: AdvanceType.Name,
    Code: AdvanceType.Code,
    Description: AdvanceType.Description,
  }; 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<AdvanceType>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddAdvanceType/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = AdvanceType;
}

deleteAdvanceType(AdvanceType: AdvanceType): void {

  console.log(AdvanceType);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<AdvanceType[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteAdvanceType/'+AdvanceType.Id).subscribe(AdvanceTypedata => {
    console.log(AdvanceTypedata);
    this.dataChange.next(AdvanceTypedata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}




/** CRUD METHODS  FOR AdvanceType*/

GetAllRelation(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<Relation[]>(this.API_URL_Relation).subscribe(Relationdata => {
    this.dataChange.next(Relationdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addRelation(Relation: Relation): void {
  let obj = {
    Id : Relation.Id,
    Code: Relation.Code,
    Name: Relation.Name,
    Description: Relation.Description,
  }; 

  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Relation>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddRelation/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Relation;
}

updateRelation(Relation: Relation): void {
  let obj = {
    Id : Relation.Id,
    Code: Relation.Code,
    Name: Relation.Name,
    Description: Relation.Description,
  }; 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Relation>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddRelation/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Relation;
}

deleteRelation(Relation: Relation): void {

  console.log(Relation);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<Relation[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteRelation/'+Relation.Id).subscribe(Relationdata => {
    console.log(Relationdata);
    this.dataChange.next(Relationdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}


/** CRUD METHODS  FOR AdvanceType*/

GetAllCities(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<City[]>(this.API_URL_City).subscribe(Citydata => {
    this.dataChange.next(Citydata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addCity(City: City): void {
  let obj = {
    Id : City.Id,
    Code: City.Code,
    Name: City.Name,
    CountryName: City.CountryName,
  }; 
  console.log(City);
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<City>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddCity/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = City;
}

updateCity(City: City): void {
  let obj = {
    Id : City.Id,
    Code: City.Code,
    Name: City.Name,
    CountryName: City.CountryName,
  }; 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<City>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddCity/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = City;
}

deleteCity(City: City): void {

  console.log(City);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<City[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteCity/'+City.Id).subscribe(Citydata => {
    console.log(Citydata);
    this.dataChange.next(Citydata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}



/** CRUD METHODS  FOR AdvanceType*/

GetAllGender(): void {
      
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<Gender[]>(this.API_URL_Gender).subscribe(Genderdata => {
    this.dataChange.next(Genderdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}

// DEMO ONLY, you can find working methods below
addGenders(Gender: Gender): void {
  let obj = {
    Id : Gender.Id,
    Name: Gender.Name,
    Code: Gender.Code,
    Description: Gender.Description,
  }; 

  
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Gender>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddGender/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Gender;
}

updateGenders(Gender: Gender): void {
  let obj = {
    Id : Gender.Id,
    Name: Gender.Name,
    Code: Gender.Code,
    Description: Gender.Description,
  }; 
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json'}}
  this.httpClient.post<Gender>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/AddGender/',JSON.stringify(obj), headers).subscribe(res => console.log('Done'));
  this.dialogData = Gender;
}

deleteGenders(Gender: Gender): void {

  console.log(Gender);
    
  let authToken = localStorage.getItem('auth_token');  
  let headers = {headers: {'Content-Type':'application/json','Authorization':`bearer ${authToken}`}}
  
  this.httpClient.get<AdvanceType[]>('http://demo-gbscinc.azurewebsites.net/hrisservice/api/Setup/DeleteGender/'+Gender.Id).subscribe(Genderdata => {
    console.log(Genderdata);
    this.dataChange.next(Genderdata);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
}


  

}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:
    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }
    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/