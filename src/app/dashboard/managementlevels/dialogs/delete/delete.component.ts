import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SetupService } from '../../../services/setup.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteManagementLevelsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteManagementLevelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: SetupService) { }

  ngOnInit() {
  }


  public managementlevelssdelete(): void {
    this.dataService.deleteManagementLevel(this.data);
  }
}
