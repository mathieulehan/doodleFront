import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SondageComponent} from './sondage/sondage.component';

const routes: Routes = [
  {path: 'sondage', component: SondageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
