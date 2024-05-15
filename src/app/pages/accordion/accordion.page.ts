import {Component} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage {

  constructor() {
  }

  onAccordionChange(event: any) {
    console.log(event.detail)
  }

}
