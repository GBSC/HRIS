import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../../services/setup.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Inject } from '@angular/core';
import { Validators } from '@angular/forms'; 
import { Accounttype } from '../../../models/accounttype,interface'; 

@Component({
  selector: 'app-edit.dialog',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditAccountDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditAccountDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: SetupService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    // return this.formControl.hasError('required') ? 'Required field' :
    //   this.formControl.hasError('email') ? 'Not a valid email' :
    //     '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  AccountTypeEdit(): void {
    this.dataService.updateAccounttype(this.data);
  }
}