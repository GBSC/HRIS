import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SetupService } from '../../../services/setup.service';
import { AdvanceType } from '../../../models/advancetype,interface';

@Component({
  selector: 'app-add.dialogs',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddAdvanceTypeComponent {
  constructor(public dialogRef: MatDialogRef<AddAdvanceTypeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AdvanceType,
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

  public confirmAddAdvanceType(): void {
    this.dataService.addAdvanceType(this.data);
  }
}