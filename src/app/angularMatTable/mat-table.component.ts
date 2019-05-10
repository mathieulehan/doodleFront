import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @Input() dataToDisplay: any[];
  @Input() displayedColumns: string[];
  // is data to display loading ?
  @Input() isLoading: boolean;
  private dataSource: MatTableDataSource<any>;
  constructor() {
  }

  ngOnInit() {
    // mat table is built when data is loaded
    if (this.isLoading === false) {
      this.dataSource = new MatTableDataSource<any>(this.dataToDisplay);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // french translations
      this.dataSource.paginator._intl.itemsPerPageLabel = 'Nombre maximum de lignes par page';
      this.dataSource.paginator._intl.previousPageLabel = 'Page précédente';
      this.dataSource.paginator._intl.nextPageLabel = 'Page suivante';
      this.dataSource.paginator._intl.firstPageLabel = 'Première page';
      this.dataSource.paginator._intl.lastPageLabel = 'Dernière page';
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // first page is displayed by default
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
