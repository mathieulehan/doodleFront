import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnswerSurveysComponent} from './answer-surveys.component';

describe('AnswerSurveysComponent', () => {
    let component: AnswerSurveysComponent;
    let fixture: ComponentFixture<AnswerSurveysComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AnswerSurveysComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AnswerSurveysComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
