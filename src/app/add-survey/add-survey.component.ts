import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import * as $ from 'jquery';
import {Sondage} from '../models/Sondage';
import {Employe} from '../models/Employe';

@Component({
    selector: 'app-add-survey',
    templateUrl: './add-survey.component.html',
    styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
    response: any;
    errorMessage: string;
    saved;
    false;
    sondage: Sondage;
    sondageType: string;
    employees: Employe[];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getEmployees();
        this.sondage = {
            titre: '',
            theme: ''
        };
        $(document).ready(function() {
            $('#form_lieu').hide();
            $('#form_liste').hide();
            $('select').change(function() {
                if (this.value === 'sondage_date') {
                    $('#form_date').show();
                    $('#form_lieu').hide();
                    $('#form_liste').hide();
                } else if (this.value === 'sondage_date_lieu') {
                    $('#form_date').show();
                    $('#form_lieu').show();
                    $('#form_liste').hide();
                } else if (this.value === 'sondage_lieu') {
                    $('#form_date').hide();
                    $('#form_lieu').show();
                    $('#form_liste').hide();
                } else if (this.value === 'sondage_liste') {
                    $('#form_date').hide();
                    $('#form_lieu').hide();
                    $('#form_liste').show();
                    let nbChoix = 1;
                    $('#add').click(function() {
                        const lastField = $('#buildyourform div:last');
                        const intId = (lastField && lastField.length && lastField.data('idx') + 1) || 1;
                        const fieldWrapper = $('<div class=\'fieldwrapper\' id=\'field' + intId + '\'/>');
                        fieldWrapper.data('idx', intId);
                        const fName = $('<input type=\'text\' class=\'fieldname\' name=\'choix_' + nbChoix + '\' [(ngModel)]=\'sondage.choix_' + nbChoix + '\' />');
                        const removeButton = $('<input type=\'button\' class=\'remove\' value=\'-\' />');
                        removeButton.click(function() {
                            $(this).parent().remove();
                        });
                        fieldWrapper.append(fName);
                        fieldWrapper.append(removeButton);
                        $('#buildyourform').append(fieldWrapper);
                        nbChoix++;
                    });
                }
            });
        });
    }

    getEmployees() {
        this.apiService.getEmployees().subscribe(res => {
            this.employees = res;
        });
    }

    addSurvey() {
        this.apiService.save(this.sondageType, this.sondage).subscribe(p => {
                this.response = p;
            },
            e => this.errorMessage = e._body,
            () => {
                this.saved = true;
            }
        );
        localStorage.removeItem('employees');
    }

}
