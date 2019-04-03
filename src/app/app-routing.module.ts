import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SondageComponent} from './sondage/sondage.component';

const routes: Routes = [
  {path: 'sondages', component: SondageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
