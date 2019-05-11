import {Component, Input, OnInit} from '@angular/core';
import {Sondage} from '../models/Sondage';

@Component({
    selector: 'app-answer-survey',
    templateUrl: './answer-survey.component.html',
    styleUrls: ['./answer-survey.component.css']
})
export class AnswerSurveyComponent implements OnInit {
    @Input() selectedSurvey: Sondage;

    constructor() {
    }

    ngOnInit() {
    }
}
