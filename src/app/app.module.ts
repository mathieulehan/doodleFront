import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SondageComponent} from './sondage/sondage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './sidenav/sidenav.component';
import {
    MatBadgeModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {EmployeComponent} from './employe/employe.component';
import {SondageTypeComponent} from './sondages-type/sondage-type.component';
import {SondageCountComponent} from './sondages-count/sondage-count.component';
import {EmployesComponent} from './employes/employes.component';
import {EmployesCountComponent} from './employes-count/employes-count.component';
import {SondagesComponent} from './sondages/sondages.component';
import {SondagesTypeCountComponent} from './sondages-type-count/sondages-type-count.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import 'hammerjs';
import {MatTableComponent} from './angularMatTable/mat-table.component';
import {AddDepartmentComponent} from './add-department/add-department.component';
import {FormsModule} from '@angular/forms';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {AddSurveyComponent} from './add-survey/add-survey.component';
import {AnswerSurveysComponent} from './answer-surveys/answer-surveys.component';
import {AnswerSurveyComponent} from './answer-survey/answer-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    SondageComponent,
    SidenavComponent,
    EmployeComponent,
    SondageTypeComponent,
    SondageCountComponent,
    EmployesComponent,
    EmployesCountComponent,
    SondagesComponent,
    SondagesTypeCountComponent,
    MatTableComponent,
      AddDepartmentComponent,
      AddEmployeeComponent,
      AddSurveyComponent,
      AnswerSurveysComponent,
      AnswerSurveyComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatButtonModule,
        MatTreeModule,
        MatCardModule,
        MatBadgeModule,
        HttpClientModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatSortModule,
        MatDividerModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatOptionModule,
        MatSelectModule
    ],
  exports: [MatSidenavModule, MatButtonModule, MatTreeModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
