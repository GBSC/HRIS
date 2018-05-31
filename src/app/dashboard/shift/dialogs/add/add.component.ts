import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SetupService } from '../../../services/setup.service';
import { Shift } from '../../../models/shift,interface'; 

@Component({
  selector: 'app-add.dialog',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class ShiftAddDialogComponent {
  constructor(public dialogRef: MatDialogRef<ShiftAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Shift,
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
    this.dataService.addShift(this.data);
  }
}