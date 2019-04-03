import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SondageComponent} from './sondage/sondage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MatBadgeModule, MatCardModule, MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {EmployeComponent} from './employe/employe.component';
import {SondageTypeComponent} from './sondages-type/sondage-type.component';
import {SondageCountComponent} from './sondages-count/sondage-count.component';
import {EmployesComponent} from './employes/employes.component';
import {EmployesCountComponent} from './employes-count/employes-count.component';
import {SondagesComponent} from './sondages/sondages.component';
import {SondagesTypeCountComponent} from './sondages-type-count/sondages-type-count.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatTreeModule,
    MatCardModule,
    MatBadgeModule
  ],
  exports: [MatSidenavModule, MatButtonModule, MatTreeModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
