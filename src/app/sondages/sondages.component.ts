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
  surveys: Sondage[];
  nbSondages: string;
  displayedColumns: string[];
  private errorMessage: any;

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getAllSurveysNumber();
    this.getSurveysFromType('all');
    this.displayedColumns = ['titre', 'theme', 'id', 'choix'];
  }

  getAllSurveysNumber() {
    this.api.getNumberOfSurveys('all').subscribe(res =>
      this.nbSondages = res
    );
  }

  getSurveysFromType(type: string) {
    this.api.getSurveys(type)
      .subscribe((response) => {
        this.surveys = response;
      });
  }
}
