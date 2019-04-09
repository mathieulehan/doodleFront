import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sondage-type',
  templateUrl: './sondage-type.component.html',
  styleUrls: ['./sondage-type.component.css']
})
export class SondageTypeComponent implements OnInit {

  sondagesToDisplay: any;
  nbSondagesTypeDate: string;
  nbSondagesTypeDateEtLieu: string;
  nbSondagesTypeLieu: string;
  nbSondagesTypeListeChoix: string;
  displayedColumns: string[] = ['id', 'title', 'theme', 'owner'];

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getAllSurveysNumber();
    this.getSurveysFromType('date');
  }

  private getAllSurveysNumber() {
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

  private getSurveysFromType(type: string) {
    this.api.getSurveys(type).subscribe(res => {
      this.sondagesToDisplay = res;
    });
  }
}
