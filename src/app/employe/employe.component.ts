import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Employe} from '../models/Employe';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employeToDisplay: Employe;

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getEmploye(1);
  }

  private getEmploye(id: number) {
    this.api.getEmploye(id).subscribe(res => {
      this.employeToDisplay = res;
    });
  }
}
