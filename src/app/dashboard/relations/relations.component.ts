import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { HomeDetails } from '../models/home.details.interface';
import { DashboardService } from '../services/dashboard.service';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { SetupService } from '../services/setup.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { EditRelationComponent } from '../relations/dialogs/edit/edit.component';
import { AddRelationComponent } from '../relations/dialogs/add/add.component';
import { DeleteRelationComponent } from '../relations/dialogs/delete/delete.component';
import { Relation } from '../models/relation,interface';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationComponent implements OnInit {

  displayedColumns = ['Id', 'Code', 'Name', 'Description', 'actions'];
  exampleDatabase: SetupService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;
  homeDetails: HomeDetails;
  Relation : Relation;

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public dataService: SetupService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;


  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  // GetAllCountries(){
  //   this.dashboardService.getAllContries()
  //   .subscribe((result : Country) => {
  //      this.countries = result
  //   },
  //   error => {
  //     console.log(error);
  //     //this.notificationService.printErrorMessage(error);
  //   });
  // }

  // If you don't need a filter or a pagination this can be simplified, you just use code from else block

  addreltion(Relation:Relation) {
    const dialogRef = this.dialog.open(AddRelationComponent, {
      data: {Relation: Relation }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
        this.refresh();
      }
    });
  }

  Editreltion(i: number, Id: number, Code: string, Name: string, Description: string) {
    this.id = Id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditRelationComponent, {
      data: {Id: Id,Code:Code, Name: Name, Description: Description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.Id === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
        this.refresh();
      }
    });
  }

  deletereltion(i: number, Id: number, Code: string, Name: string, Description: string) {
     this.index = i;
     this.id = Id;
     const dialogRef = this.dialog.open(DeleteRelationComponent, {
       data: {Id: Id,Code:Code, Name: Name, Description: Description}
     });

     dialogRef.afterClosed().subscribe(result => {
       if (result === 1) {
         const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
         // for delete we use splice in order to remove single object from DataService
         this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
         this.refreshTable();
         this.refresh();
       }
     });
   }

  private refreshTable() {
    // if there's a paginator active we're using it for refresh
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }
  }


  public loadData() {
    this.exampleDatabase = new SetupService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }


}


export class ExampleDataSource extends DataSource<Relation> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Relation[] = [];
  renderedData: Relation[] = [];

  constructor(public _exampleDatabase: SetupService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => {
      this._paginator.pageIndex = 0;
    });
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Relation[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.GetAllRelation();

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.Relationdata.slice().filter((Relation: Relation) => {
        const searchStr = (Relation.Id + Relation.Code + Relation.Name + Relation.Description ).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }
  disconnect() {
  }



  /** Returns a sorted copy of the database data. */
  sortData(data: Relation[]): Relation[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'Id': [propertyA, propertyB] = [a.Id, b.Id]; break;
        case 'Code': [propertyA, propertyB] = [a.Code, b.Code]; break;
        case 'Name': [propertyA, propertyB] = [a.Name, b.Name]; break;
        case 'Description': [propertyA, propertyB] = [a.Description, b.Description]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}