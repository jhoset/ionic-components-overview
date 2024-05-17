import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage {

  componentDescription: string = 'The grid is a powerful mobile-first flexbox system for building custom layouts. ' +
    'It is composed of three units — a grid, row(s) and column(s). Columns will expand to fill the row, and will resize' +
    ' to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. '

  constructor() {
  }

}
