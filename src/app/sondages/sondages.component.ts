import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sondages',
  templateUrl: './sondages.component.html',
  styleUrls: ['./sondages.component.css']
})
export class SondagesComponent implements OnInit {

  sondages: any;
  nbSondages: number;

  constructor() {
  }

  ngOnInit() {
    this.nbSondages = 40;
  }

}
