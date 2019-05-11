import {Component, OnInit} from '@angular/core';
import {Sondage} from '../models/Sondage';
import {ApiService} from '../api.service';

@Component({
    selector: 'app-answers-survey',
    templateUrl: './answer-surveys.component.html',
    styleUrls: ['./answer-surveys.component.css']
})
export class AnswerSurveysComponent implements OnInit {
    surveys: Sondage[];
    selectedSurvey: Sondage;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getSurveysFromType('all');
    }

    /**
     * gets all surveys
     * @param type survey's type
     */
    getSurveysFromType(type: string) {
        this.apiService.getSurveys(type)
            .subscribe((response) => {
                this.surveys = response;
            });
    }

    selectSurvey(survey: Sondage) {
        this.selectedSurvey = survey;
    }
}
