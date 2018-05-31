import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SetupService } from '../../../services/setup.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteRosterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteRosterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: SetupService) { }

  ngOnInit() {
  }


  public Rosterdelete(): void {
    this.dataService.deleteRoster(this.data);
  }
}
