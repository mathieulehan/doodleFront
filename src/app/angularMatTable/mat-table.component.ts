import {Component, Input, OnChanges, OnInit, SimpleChange, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnChanges, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @Input() dataToDisplay: any[];
  @Input() displayedColumns: string[];
  @Input() isLoading: boolean;
  private dataSource: MatTableDataSource<any>;
  constructor() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    /*for (const change in changes) {
      let changedProp = changes[change];
      console.log(change + ' prec : ' + changedProp.previousValue);
      console.log(change + ' act : ' + changedProp.currentValue);
    }*/
  }

  ngOnInit() {
    if (this.isLoading === false) {
      this.dataSource = new MatTableDataSource<any>(this.dataToDisplay);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
