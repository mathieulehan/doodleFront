import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sondage-count',
  templateUrl: './sondage-count.component.html',
  styleUrls: ['./sondage-count.component.css']
})
export class SondageCountComponent implements OnInit {

  nbSondages: string;

  constructor(public api: ApiService) {
  }

  /**
   * On init :
   * gets the number of created surveys (any kind)
   */
  ngOnInit() {
    this.getNumberOfSurveys();
  }

  /**
   * gets the number of created surveys from the API using ApiService
   */
  getNumberOfSurveys() {
    this.api.getNumberOfSurveys('all').subscribe(res => {
      this.nbSondages = res;
    });
  }

}
