import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sondage-type',
  templateUrl: './sondage-type.component.html',
  styleUrls: ['./sondage-type.component.css']
})
export class SondageTypeComponent implements OnInit {

  sondagesToDisplay: any;
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
  }

}
