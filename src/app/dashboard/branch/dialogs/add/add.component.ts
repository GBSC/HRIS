import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SetupService } from '../../../services/setup.service';
import { Branch } from '../../../models/branch,interface';

@Component({
  selector: 'app-add.dialog',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class BranchAddDialogComponent {
  constructor(public dialogRef: MatDialogRef<BranchAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Branch,
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
    this.dataService.addBranch(this.data);
  }
}