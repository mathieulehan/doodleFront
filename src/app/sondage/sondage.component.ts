import {Component, OnInit} from '@angular/core';
import {Sondage} from '../models/Sondage';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {

  sondageToDisplay: Sondage;

  constructor(public api: ApiService) {
  }

  /**
   * get the survey with id = 5 on component init
   */
  ngOnInit() {
    this.getSondage(5);
  }

  /**
   * get a specific survey by its id
   * @param id
   */
  private getSondage(id: number) {
    this.api.getSurvey(id).subscribe(res => {
      this.sondageToDisplay = res;
    });
  }
}
