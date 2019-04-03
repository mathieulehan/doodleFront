import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sondages-type-count',
  templateUrl: './sondages-type-count.component.html',
  styleUrls: ['./sondages-type-count.component.css']
})
export class SondagesTypeCountComponent implements OnInit {

  nbSondages: number;
  nbSondagesTypeDate: number;
  nbSondagesTypeDateEtLieu: number;
  nbSondagesTypeLieu: number;
  nbSondagesTypeListeChoix: number;
  nbSondagesTypeChoix: number;

  constructor() {
  }

  ngOnInit() {
    this.nbSondagesTypeChoix = 15;
    this.nbSondagesTypeDate = 4;
    this.nbSondagesTypeDateEtLieu = 6;
    this.nbSondagesTypeListeChoix = 10;
    this.nbSondagesTypeLieu = 5;
    this.nbSondages = this.nbSondagesTypeChoix + this.nbSondagesTypeDate + this.nbSondagesTypeDateEtLieu
      + this.nbSondagesTypeListeChoix + this.nbSondagesTypeLieu;
  }

}
