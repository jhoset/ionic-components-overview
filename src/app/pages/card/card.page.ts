import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage {
  componentDescription = 'Cards are containers that display content such as text, images, buttons, and lists. ' +
    'A card can be a single component, but is often made up of a header, title, subtitle, and content. ';

  constructor() {
  }

}
