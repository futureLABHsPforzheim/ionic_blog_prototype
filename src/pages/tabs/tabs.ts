import { Component } from '@angular/core';

import { LocationPage } from '../location/location';
import { CameraPage } from '../camera/camera';
import { TimePage } from '../time/time';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimePage;
  tab2Root = LocationPage;
  tab3Root = CameraPage;

  constructor() {

  }
}
