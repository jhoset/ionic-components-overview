import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {
  public componentDescription = 'The Range slider lets users select from a range of values by moving the slider knob. By default one knob controls the value of the range. This behavior can be customized using dual knobs.'

  constructor() {
  }

  ngOnInit() {
  }

}
