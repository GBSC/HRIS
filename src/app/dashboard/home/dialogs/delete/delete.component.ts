import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SetupService } from '../../../services/setup.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteCountryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: SetupService) { }

  ngOnInit() {
  }

  public submit() : void {
    
  }


  public Countrydelete(): void {
    this.dataService.DeleteCountry(this.data);
  }

}
