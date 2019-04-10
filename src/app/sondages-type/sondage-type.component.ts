import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sondage-type',
  templateUrl: './sondage-type.component.html',
  styleUrls: ['./sondage-type.component.css']
})
export class SondageTypeComponent implements OnInit {

  isLoading: boolean;

  sondagesToDisplay: any;
  surveysDateNumber: string;
  surveysDateLocationNumber: string;
  surveysLocationNumber: string;
  surveysListNumber: string;
  displayedColumns: string[];

  constructor(public api: ApiService) {
  }

  static isInLocalStorage(key: string) {
    return !(localStorage.getItem(key) === null || !localStorage.getItem(key) === undefined);
  }

  ngOnInit() {
    this.getAllSurveysNumber();
    this.getSurveysFromType('date');
    this.displayedColumns = ['id', 'titre', 'theme', 'choix'];
  }

  private getAllSurveysNumber() {
    if (!SondageTypeComponent.isInLocalStorage('surveysDateNumber')) {
      this.api.getNumberOfSurveys('date').subscribe(res =>
          localStorage.setItem('surveysDateNumber', JSON.stringify(res)),
        this.surveysDateNumber = JSON.parse(localStorage.getItem('surveysDateNumber'))
      );
    } else {
      this.surveysDateNumber = JSON.parse(localStorage.getItem('surveysDateNumber'));
    }
    if (!SondageTypeComponent.isInLocalStorage('surveysLocationNumber')) {
      this.api.getNumberOfSurveys('location').subscribe(res =>
          localStorage.setItem('surveysLocationNumber', JSON.stringify(res)),
        this.surveysLocationNumber = JSON.parse(localStorage.getItem('surveysLocationNumber'))
      );
    } else {
      this.surveysLocationNumber = JSON.parse(localStorage.getItem('surveysLocationNumber'));
    }
    if (!SondageTypeComponent.isInLocalStorage('surveysDateLocationNumber')) {
      this.api.getNumberOfSurveys('dateLocation').subscribe(res =>
          localStorage.setItem('surveysDateLocationNumber', JSON.stringify(res)),
        this.surveysDateLocationNumber = JSON.parse(localStorage.getItem('surveysDateLocationNumber'))
      );
    } else {
      this.surveysDateLocationNumber = JSON.parse(localStorage.getItem('surveysDateLocationNumber'));
    }
    if (!SondageTypeComponent.isInLocalStorage('surveysListNumber')) {
      this.api.getNumberOfSurveys('list').subscribe(res =>
          localStorage.setItem('surveysListNumber', JSON.stringify(res)),
        this.surveysListNumber = JSON.parse(localStorage.getItem('surveysListNumber'))
      );
    } else {
      this.surveysListNumber = JSON.parse(localStorage.getItem('surveysListNumber'));
    }
  }

  private getSurveysFromType(type: string) {
    this.isLoading = true;
    this.sondagesToDisplay = undefined;
    this.api.getSurveys(type).subscribe(res => {
        this.isLoading = false;
        localStorage.setItem('surveysToDisplay', JSON.stringify(res));
        this.sondagesToDisplay = JSON.parse(localStorage.getItem('surveysToDisplay'));
      },
    );
  }
}
