import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {MatTabChangeEvent} from '@angular/material';

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

  /**
   * returns true if the given key exists on local storage
   * prevents redundant calls to the API
   * @param key the key to check
   */
  static isInLocalStorage(key: string) {
    return !(localStorage.getItem(key) === null || !localStorage.getItem(key) === undefined);
  }

  ngOnInit() {
    this.getAllSurveysNumber();
    this.getSurveysFromType('date');
    this.displayedColumns = ['id', 'titre', 'theme', 'choix'];
  }

  /**
   * gets all surveys from the API using ApiService
   * checks local storage before calling ApiService
   */
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

  /**
   * Get all surveys from a specified type
   * @param type survey's type
   */
  private getSurveysFromType(type: string) {
    this.isLoading = true;
    this.api.getSurveys(type).subscribe(res => {
        this.isLoading = false;
        localStorage.setItem('surveysToDisplay', JSON.stringify(res));
        this.sondagesToDisplay = JSON.parse(localStorage.getItem('surveysToDisplay'));
      },
    );
  }

  /**
   * on matTab click, loads data according to tab index
   * @param event matTab click
   */
  onLinkClick(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.getSurveysFromType('date');
        break;
      case 1:
        this.getSurveysFromType('location');
        break;
      case 2:
        this.getSurveysFromType('dateLocation');
        break;
      case 3:
        this.getSurveysFromType('list');
        break;
    }
  }
}
