import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SondageComponent} from './sondage/sondage.component';
import {AppComponent} from './app.component';
import {EmployeComponent} from './employe/employe.component';
import {SondageTypeComponent} from './sondage-type/sondage-type.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'sondage', component: SondageComponent},
  {path: 'sondageType', component: SondageTypeComponent},
  {path: 'employe', component: EmployeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
