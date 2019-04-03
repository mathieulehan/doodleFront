import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sondage-count',
  templateUrl: './sondage-count.component.html',
  styleUrls: ['./sondage-count.component.css']
})
export class SondageCountComponent implements OnInit {

  nbSondages: number;

  constructor() {
  }

  ngOnInit() {
    this.nbSondages = 40;
  }

}
