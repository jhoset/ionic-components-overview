import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.page.html',
  styleUrls: ['./spinner.page.scss'],
})
export class SpinnerPage {


  public componentDescription = 'The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.';


  constructor() {
  }
}
