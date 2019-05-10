import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-employes-count',
  templateUrl: './employes-count.component.html',
  styleUrls: ['./employes-count.component.css']
})
export class EmployesCountComponent implements OnInit {

  nbEmployes: string;

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getNumberOfEmployes();
  }

  /**
   * get the number of registered employees from the api
   */
  private getNumberOfEmployes() {
    this.api.getNumberOfEmployees().subscribe(res => {
      this.nbEmployes = res;
    });
  }

}
