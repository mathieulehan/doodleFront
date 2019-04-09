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

  ngOnInit() {
    this.getNumberOfSurveys();
  }

  getNumberOfSurveys() {
    this.api.getNumberOfSurveys('all').subscribe(res => {
      this.nbSondages = res;
    });
  }

}
