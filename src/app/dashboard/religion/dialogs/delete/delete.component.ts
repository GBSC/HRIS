import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SetupService } from '../../../services/setup.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteReligionComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DeleteReligionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: SetupService) { }

  ngOnInit() {
  }


  public religiondelete(): void {
    this.dataService.deleteReligion(this.data);
  }
}
