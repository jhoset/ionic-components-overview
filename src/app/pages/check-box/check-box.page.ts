import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.page.html',
  styleUrls: ['./check-box.page.scss'],
})
export class CheckBoxPage {

  public componentDescription = 'Checkboxes allow the selection of multiple options from a set of options. ' +
    'They appear as checked (ticked) when activated. '

  public data = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: true,
    },
    {
      name: 'success',
      selected: false,
    },
    {
      name: 'danger',
      selected: false,
    },
    {
      name: 'warning',
      selected: true,
    },

    {
      name: 'light',
      selected: false,
    },
    {
      name: 'dark',
      selected: false,
    },
    {
      name: 'medium',
      selected: false,
    }
  ];


  constructor() {
  }

  public onClick(item: any) {
    console.log(item);
  }


}
