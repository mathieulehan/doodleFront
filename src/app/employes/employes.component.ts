import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css'],
  providers: [ApiService]
})
export class EmployesComponent implements OnInit {
  employes;
  nbEmployes: string;
  displayedColumns: string[];

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getNumberOfEmployes();
    this.getEmployes();
    this.displayedColumns = ['id', 'firstName', 'lastName', 'birthDate', 'age', 'departement', 'sondages'];
  }

  getNumberOfEmployes() {
    this.nbEmployes = localStorage.getItem('employeesNumber');
    if (this.nbEmployes === null) {
      this.api.getNumberOfEmployees().subscribe(res => {
        localStorage.setItem('employeesNumber', res);
      });
    } else {
      this.nbEmployes = JSON.parse(localStorage.getItem('employeesNumber'));
    }
  }

  getEmployes() {
    if (!this.isInLocalStorage('employees')) {
      this.api.getEmployees().subscribe(res => {
          localStorage.setItem('employees', JSON.stringify(res));
        },
        this.employes = JSON.parse(localStorage.getItem('employees')));
    } else {
      this.employes = JSON.parse(localStorage.getItem('employees'));
    }
  }

  isInLocalStorage(key: string) {
    return !localStorage.getItem(key) === null;
  }

}
