import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage {

  public items: any[] = Array(5);

  public componentDescription = 'Refresher provides pull-to-refresh functionality on a content component. The pull-to-refresh pattern lets a user pull down on a list of data in order to retrieve more data.';

  constructor() {
  }

  public handleRefresh(event: any){
    this.items = []
    setTimeout(() => {
      this.items = Array(10);
      event.target.complete();
    }, 1500)
  }


}
