import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employes-count',
  templateUrl: './employes-count.component.html',
  styleUrls: ['./employes-count.component.css']
})
export class EmployesCountComponent implements OnInit {

  nbEmployes: number;

  constructor() {
  }

  ngOnInit() {
    this.nbEmployes = 12;
  }

}
