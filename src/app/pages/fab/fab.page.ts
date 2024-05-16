import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage {

  public componentDescription = 'Fabs are container elements that contain one or more fab buttons. They should be ' +
    'placed in a fixed position that does not scroll with the content. Fabs should have one main fab button.';

  public data = Array(20);

  constructor() {
  }


}
