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

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'sondage', component: SondageComponent},
  {path: 'sondages', component: SondagesComponent},
  {path: 'sondages-type', component: SondageTypeComponent},
  {path: 'sondages-count', component: SondageCountComponent},
  {path: 'sondages-type-count', component: SondagesTypeCountComponent},
  {path: 'employe', component: EmployeComponent},
  {path: 'employes', component: EmployesComponent},
  {path: 'employes-count', component: EmployesCountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
