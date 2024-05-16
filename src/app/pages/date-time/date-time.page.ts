import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage {

  public defaultBirthDate = new Date();

  public componentDescription = 'Datetimes present a calendar interface and time wheel, making it easy for users to select dates and times. '

  constructor() { }


}
