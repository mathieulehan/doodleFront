import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav.component';
import {MatButtonModule, MatListModule, MatSidenavModule, MatTooltipModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {AppRoutingModule} from '../app-routing.module';

/**
 * All modules used in sidenav
 */
@NgModule({
    imports: [
        CommonModule,
        MatSidenavModule,
        MatCardModule,
        AppRoutingModule,
        MatListModule,
        MatDividerModule,
        MatButtonModule,
        MatTooltipModule
    ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent, MatDividerModule]
})
export class SidenavModule {
}
