import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SetupService } from '../../../services/setup.service';  
import { MaritalStatus } from '../../../models/maritalstatus,interface';

@Component({
  selector: 'app-add.dialog',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class MaritalAddDialogComponent {
  constructor(public dialogRef: MatDialogRef<MaritalAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MaritalStatus,
              public dataService: SetupService) { }

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

  public confirmAdd(): void {
    this.dataService.addMaritalStatus(this.data);
  }
}