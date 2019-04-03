import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SondageComponent} from './sondage/sondage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SondageComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [MatSidenavModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
