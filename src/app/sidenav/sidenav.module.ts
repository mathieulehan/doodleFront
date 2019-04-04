import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav.component';
import {MatListModule, MatSidenavModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    AppRoutingModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent, MatDividerModule]
})
export class SidenavModule {
}
