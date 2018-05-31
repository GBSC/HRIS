import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SetupService } from '../../../services/setup.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteBloodgropsComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteBloodgropsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: SetupService) { }

  ngOnInit() {
  }


  public Bloodgropsdelete(): void {
    this.dataService.deleteBloodGroups(this.data);
  }

}
