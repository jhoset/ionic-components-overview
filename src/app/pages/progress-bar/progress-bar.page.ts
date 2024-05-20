import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage {

  public componentDescription = 'Progress bars inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.' +
    ' There are two types of progress bars: determinate and indeterminate.'

  public progress = 0;
  public intervalRef!: any;

  public progress2 = 0;
  public intervalRef2!: any;
  public buffer = 0.06;

  constructor() {
    this.initDeterminate();
    this.initBuffer();
  }

  public initDeterminate() {
    this.intervalRef = setInterval(() => {
      this.progress += 0.01;

      if (this.progress > 1) {
        clearInterval(this.intervalRef)
      }
    }, 50)
  }

  public initBuffer() {
    this.intervalRef2 = setInterval(() => {
      this.buffer += 0.06;
      this.progress2 += 0.06;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress2 > 1) {
        clearInterval(this.intervalRef2);
      }
    }, 1000);
  }

}
