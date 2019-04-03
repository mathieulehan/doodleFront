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
import {SondageTypeComponent} from './sondage-type/sondage-type.component';

@NgModule({
  declarations: [
    AppComponent,
    SondageComponent,
    SidenavComponent,
    EmployeComponent,
    SondageTypeComponent,
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
