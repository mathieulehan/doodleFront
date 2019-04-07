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

  ngOnInit() {
    this.getSondage(5);
  }

  private getSondage(id: number) {
    this.api.getSurvey(id).subscribe(res => {
      this.sondageToDisplay = res;
    });
  }
}
