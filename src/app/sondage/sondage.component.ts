import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {

  title: string;
  theme: string;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Le premier sondage par exemple';
    this.theme = 'Le thème de ce sondage';
  }

}
