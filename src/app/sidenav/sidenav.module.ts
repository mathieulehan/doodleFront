import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav.component';
import {MatSidenavModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule
  ],
  declarations: [SidenavComponent]
  ,
  exports: [SidenavComponent]
})
export class SidenavModule {
}
