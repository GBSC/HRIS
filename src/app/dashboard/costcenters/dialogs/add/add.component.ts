import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SetupService } from '../../../services/setup.service';
import { CostCenter } from '../../../models/costcenter,interface';

@Component({
  selector: 'app-add.dialogs',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddCostCenterComponent {
  constructor(public dialogRef: MatDialogRef<AddCostCenterComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CostCenter,
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

  public CostCenterAdd(): void {
    this.dataService.addCostCenter(this.data);
  }
}