import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css'],
  providers: [ApiService]
})
export class EmployesComponent implements OnInit {
  employes: any;
  nbEmployes: string;
  displayedColumns: string[];
  isLoading: boolean;

  constructor(public api: ApiService) {
  }

  static isInLocalStorage(key: string) {
    return !(localStorage.getItem(key) === null || !localStorage.getItem(key) === undefined);
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
    this.isLoading = true;
    this.employes = undefined;
    if (!EmployesComponent.isInLocalStorage('employees')) {
      this.api.getEmployees().subscribe(res => {
          this.isLoading = false;
          localStorage.setItem('employees', JSON.stringify(res));
        },
        this.employes = JSON.parse(localStorage.getItem('employees')));
    } else {
      this.isLoading = false;
      this.employes = JSON.parse(localStorage.getItem('employees'));
    }
  }

}
