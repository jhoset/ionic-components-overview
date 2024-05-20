import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage {

  public componentDescription = 'Items are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. ' +
    'Items should only be used as rows in a List with other items. Items can be swiped, deleted, reordered, edited, and more.';

  constructor() {
  }


}
