import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sondage-type',
  templateUrl: './sondage-type.component.html',
  styleUrls: ['./sondage-type.component.css']
})
export class SondageTypeComponent implements OnInit {

  sondagesToDisplay: any;
  surveysDateNumber: string;
  surveysDateLocationNumber: string;
  surveysLocationNumber: string;
  surveysListNumber: string;
  displayedColumns: string[];

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getAllSurveysNumber();
    this.getSurveysFromType('date');
    this.displayedColumns = ['id', 'titre', 'theme', 'choix'];
  }

  refresh() {
    this.ngOnInit();
  }

  isInLocalStorage(key: string) {
    console.log(key);
    return !localStorage.getItem(key) === null;
  }

  private getAllSurveysNumber() {
    if (!this.isInLocalStorage('surveysDateNumber')) {
      this.api.getNumberOfSurveys('date').subscribe(res =>
        localStorage.setItem('surveysDateNumber', JSON.stringify(res))
      );
    } else {
      this.surveysDateNumber = JSON.parse(localStorage.getItem('surveysDateNumber'));
    }
    if (!this.isInLocalStorage('surveysLocationNumber')) {
      this.api.getNumberOfSurveys('location').subscribe(res =>
        localStorage.setItem('surveysLocationNumber', JSON.stringify(res))
      );
    } else {
      this.surveysLocationNumber = JSON.parse(localStorage.getItem('surveysLocationNumber'));
    }
    if (!this.isInLocalStorage('surveysDateLocationNumber')) {
      this.api.getNumberOfSurveys('dateLocation').subscribe(res =>
        localStorage.setItem('surveysDateLocationNumber', JSON.stringify(res))
      );
    } else {
      this.surveysDateLocationNumber = JSON.parse(localStorage.getItem('surveysDateLocationNumber'));
    }
    if (!this.isInLocalStorage('surveysListNumber')) {
      this.api.getNumberOfSurveys('list').subscribe(res =>
        localStorage.setItem('surveysListNumber', JSON.stringify(res))
      );
    } else {
      this.surveysListNumber = JSON.parse(localStorage.getItem('surveysListNumber'));
    }
  }

  private getSurveysFromType(type: string) {
    if (!this.isInLocalStorage(type)) {
      this.api.getSurveys(type).subscribe(res => {
        localStorage.setItem('surveysToDisplay', JSON.stringify(res));
      });
    }
    this.sondagesToDisplay = JSON.parse(localStorage.getItem('surveysToDisplay'));
  }
}
