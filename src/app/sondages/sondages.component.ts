import {Component, OnInit, ViewChild} from '@angular/core';
import {Sondage} from 'src/app/models/Sondage.js';
import {MatPaginator, MatSort} from '@angular/material';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sondages',
  templateUrl: './sondages.component.html',
  styleUrls: ['./sondages.component.css']
})
export class SondagesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'theme', 'owner'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  sondages: Sondage[];
  nbSondages: number;
  dataSource: any;
  private ELEMENT_DATA: Sondage[];

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.getAllSurveysNumber();
    this.getSurveysFromType('all');
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getAllSurveysNumber() {
    this.api.getNumberOfSurveys('all').subscribe(res =>
      this.nbSondages = res
    );
  }

  private getSurveysFromType(type: string) {
    this.api.getSurveys(type).subscribe(res => {
      this.sondagesToDisplay = res;
    });
  }
}
