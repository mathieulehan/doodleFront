import {Component, OnInit} from '@angular/core';
import {Sondage} from 'src/app/models/Sondage.js';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sondages',
  templateUrl: './sondages.component.html',
  styleUrls: ['./sondages.component.css'],
  providers: [ApiService]
})
export class SondagesComponent implements OnInit {
  isLoading: boolean;
  surveys: Sondage[];
  nbSondages: string;
  displayedColumns: string[];

  constructor(public api: ApiService) {
  }

  /**
   * On init :
   *  gets all existing surveys
   *  gets the number of created surveys
   *  defines columns to use in mat table
   */
  ngOnInit() {
    this.getAllSurveysNumber();
    this.getSurveysFromType('all');
    this.displayedColumns = ['titre', 'theme', 'id', 'choix'];
  }

    /**
     * gets the number of created surveys (of any type)
     */
  getAllSurveysNumber() {
    this.api.getNumberOfSurveys('all').subscribe(res =>
      this.nbSondages = res
    );
  }

    /**
     * gets all surveys
     * @param type survey's type
     */
  getSurveysFromType(type: string) {
    this.isLoading = true;
    this.surveys = undefined;
    this.api.getSurveys(type)
      .subscribe((response) => {
        this.isLoading = false;
        localStorage.setItem('surveysToDisplay', JSON.stringify(response));
        this.surveys = JSON.parse(localStorage.getItem('surveysToDisplay'));
      });
  }
}
