import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage {

  public favorite: boolean = false;

  componentDescription = 'Buttons provide a clickable element, which can be used in forms, ' +
    'or anywhere that needs simple, standard button functionality. They may display text, icons, ' +
    'or both. '

  constructor() {
  }

  public onClick() {
    this.favorite = !this.favorite;
  }

}
