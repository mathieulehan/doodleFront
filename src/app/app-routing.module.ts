import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SondageComponent} from './sondage/sondage.component';
import {AppComponent} from './app.component';
import {EmployeComponent} from './employe/employe.component';
import {SondageTypeComponent} from './sondages-type/sondage-type.component';
import {SondageCountComponent} from './sondages-count/sondage-count.component';
import {EmployesComponent} from './employes/employes.component';
import {EmployesCountComponent} from './employes-count/employes-count.component';
import {SondagesComponent} from './sondages/sondages.component';
import {SondagesTypeCountComponent} from './sondages-type-count/sondages-type-count.component';
import {AddDepartmentComponent} from './add-department/add-department.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {AddSurveyComponent} from './add-survey/add-survey.component';
import {AnswerSurveysComponent} from './answer-surveys/answer-surveys.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'sondage', component: SondageComponent},
  {path: 'sondages', component: SondagesComponent},
  {path: 'sondages-type', component: SondageTypeComponent},
  {path: 'sondages-count', component: SondageCountComponent},
  {path: 'sondages-type-count', component: SondagesTypeCountComponent},
  {path: 'employe', component: EmployeComponent},
  {path: 'employes', component: EmployesComponent},
    {path: 'employes-count', component: EmployesCountComponent},
    {path: 'addDepartment', component: AddDepartmentComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
    {path: 'addSurvey', component: AddSurveyComponent},
    {path: 'answerSurveys', component: AnswerSurveysComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
