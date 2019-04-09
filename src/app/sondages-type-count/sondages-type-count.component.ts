import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sondages-type-count',
  templateUrl: './sondages-type-count.component.html',
  styleUrls: ['./sondages-type-count.component.css']
})
export class SondagesTypeCountComponent implements OnInit {

  nbSondages: string;
  nbSondagesTypeDate: string;
  nbSondagesTypeDateEtLieu: string;
  nbSondagesTypeLieu: string;
  nbSondagesTypeListeChoix: string;
  nbSondagesTypeChoix: string;

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getAllSurveysNumber();
  }

  private getAllSurveysNumber() {
    this.api.getNumberOfSurveys('all').subscribe(res =>
      this.nbSondages = res
    );
    this.api.getNumberOfSurveys('date').subscribe(res =>
      this.nbSondagesTypeDate = res
    );
    this.api.getNumberOfSurveys('location').subscribe(res =>
      this.nbSondagesTypeLieu = res
    );
    this.api.getNumberOfSurveys('dateLocation').subscribe(res =>
      this.nbSondagesTypeDateEtLieu = res
    );
    this.api.getNumberOfSurveys('list').subscribe(res =>
      this.nbSondagesTypeListeChoix = res
    );
  }
}
