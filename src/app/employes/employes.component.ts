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
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'dep'];
  employes: Employe[];
  nbEmployes: string;

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getNumberOfEmployes();
    this.getEmployes();
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
}
