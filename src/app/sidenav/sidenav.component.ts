import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

/** @title Sidenav with custom escape and backdrop click behavior */
@Component({
  selector: 'app-sidenav-disable-close-example',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close() {
    this.sidenav.close();
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
