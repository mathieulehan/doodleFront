import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {

  title = 'COIN';
  theme = 'THEMEME COIN';

  constructor() {
  }

  ngOnInit() {
  }

}
