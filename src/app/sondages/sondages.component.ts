import {Component, OnInit, ViewChild} from '@angular/core';
import {Sondage} from 'src/app/models/Sondage.js';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-sondages',
  templateUrl: './sondages.component.html',
  styleUrls: ['./sondages.component.css']
})
export class SondagesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'theme', 'owner'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  sondages: any;
  nbSondages: number;
  dataSource: any;
  private ELEMENT_DATA: Sondage[];
  constructor() {
  }

  ngOnInit() {
    this.ELEMENT_DATA = [
      {id: 1, title: 'Hydrogen', owner: 2, theme: 'H'},
      {id: 2, title: 'Helium', owner: 2, theme: 'He'},
      {id: 3, title: 'Lithium', owner: 3, theme: 'Li'},
      {id: 4, title: 'Beryllium', owner: 3, theme: 'Be'},
      {id: 5, title: 'Boron', owner: 3, theme: 'B'},
      {id: 6, title: 'Carbon', owner: 3, theme: 'C'},
      {id: 7, title: 'Nitrogen', owner: 3, theme: 'N'},
      {id: 8, title: 'Oxygen', owner: 3, theme: 'O'},
      {id: 9, title: 'Fluorine', owner: 3, theme: 'F'},
      {id: 10, title: 'Neon', owner: 3, theme: 'Ne'},
      {id: 11, title: 'Sodium', owner: 2, theme: 'Na'},
      {id: 12, title: 'Magnesium', owner: 4, theme: 'Mg'},
      {id: 13, title: 'Aluminum', owner: 4, theme: 'Al'},
      {id: 14, title: 'Silicon', owner: 4, theme: 'Si'},
      {id: 15, title: 'Phosphorus', owner: 4, theme: 'P'},
      {id: 16, title: 'Sulfur', owner: 4, theme: 'S'},
      {id: 17, title: 'Chlorine', owner: 4, theme: 'Cl'},
      {id: 18, title: 'Argon', owner: 4, theme: 'Ar'},
      {id: 19, title: 'Potassium', owner: 4, theme: 'K'},
      {id: 20, title: 'Calcium', owner: 2, theme: 'Ca'},
    ];
    this.dataSource = new MatTableDataSource<Sondage>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.nbSondages = 40;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
