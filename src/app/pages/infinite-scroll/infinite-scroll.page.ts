import {Component, OnInit, ViewChild} from '@angular/core';
import {InfiniteScrollCustomEvent, IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage {

  @ViewChild('infiniteScroll') infiniteScroll!: IonInfiniteScroll;

  public componentDescription = 'The Infinite Scroll component calls an action to be performed when the user ' +
    'scrolls a specified distance from the bottom or top of the page.'
  public data: any[] = Array(20);

  constructor() {
  }

  onIonInfinite(ev: any) {
    // console.log(ev);
    if ( this.data.length > 50) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
    setTimeout(() => {
      const newData: any[] = Array(10);
      this.data.push(...newData);
      this.infiniteScroll.complete();
    }, 1000)
  }


}
