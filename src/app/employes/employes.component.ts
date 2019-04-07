import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Employe} from 'src/app/models/Employe.js';
import {ApiService} from '../api.service';

export interface UserData {
  id: string;
  name: string;
  birthDate: string;
  numEtudiant: string;
}

const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name,
    birthDate: Math.round(Math.random() * 100).toString(),
    numEtudiant: Math.round(Math.random() * 10000000).toString()
  };
}

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css'],
  providers: [ApiService]
})
export class EmployesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'birthDate', 'numEtudiant'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  employes: Employe[];
  nbEmployes: string;

  constructor(public api: ApiService) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.nbEmployes = '100';
  }

  ngOnInit() {
    this.getNumberOfEmployes();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  private getEmployes() {
    this.api.getEmployees().subscribe(res => {
      this.employes = res;
    });
  }

  private getNumberOfEmployes() {
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
