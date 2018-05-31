import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SetupService } from '../../../services/setup.service';
import { GazettedHolidays } from '../../../models/gazettedholidays,interface';

@Component({
  selector: 'app-add.dialogs',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddGazetedHolidaysComponent {
  constructor(public dialogRef: MatDialogRef<AddGazetedHolidaysComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GazettedHolidays,
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

  public GazetedHolidaysAdd(): void {
    this.dataService.addGazettedHolidays(this.data);
  }
}