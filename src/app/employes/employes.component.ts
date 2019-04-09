import {Component, OnInit} from '@angular/core';
import {Employe} from 'src/app/models/Employe.js';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css'],
  providers: [ApiService]
})
export class EmployesComponent implements OnInit {
  employes: Employe[];
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
    this.api.getNumberOfEmployees().subscribe(res => {
      this.nbEmployes = res;
    });
  }

  getEmployes() {
    this.api.getEmployees().subscribe(res => {
      this.employes = res;
    });
  }
}
