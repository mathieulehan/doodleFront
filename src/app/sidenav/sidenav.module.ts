import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav.component';
import {MatSidenavModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    AppRoutingModule
  ],
  declarations: [SidenavComponent]
  ,
  exports: [SidenavComponent]
})
export class SidenavModule {
}
