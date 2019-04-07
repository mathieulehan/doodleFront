import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Employe} from 'src/app/models/Employe.js';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css'],
  providers: [ApiService]
})
export class EmployesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'dep'];
  dataSource: MatTableDataSource<Employe[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  employes: Employe[];
  nbEmployes: string;

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getNumberOfEmployes();
    this.getEmployes();
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.employes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getEmployes() {
    this.api.getEmployees().subscribe(res => {
      this.employes = res;
    });
  }

  getNumberOfEmployes() {
    this.api.getNumberOfEmployees().subscribe(res => {
      this.nbEmployes = res;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
