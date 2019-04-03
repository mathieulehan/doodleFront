import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor() {
  }

  ngOnInit() {
    this.firstName = 'Mathieu';
    this.lastName = 'Le Hanc\'';
  }

}
