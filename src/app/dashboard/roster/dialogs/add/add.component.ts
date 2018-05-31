import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SetupService } from '../../../services/setup.service';
import { Roster } from '../../../models/roster,interface';  

@Component({
  selector: 'app-add.dialog',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddRosterDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddRosterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Roster,
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

  public AddRoster(): void {
    this.dataService.addRoster(this.data);
  }
}