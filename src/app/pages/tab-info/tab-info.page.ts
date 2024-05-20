import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tab-info',
  templateUrl: './tab-info.page.html',
  styleUrls: ['./tab-info.page.scss'],
})
export class TabInfoPage implements OnInit {

  public tabSelected: string = '';
  public tabsDescription: string = 'Tabs are a top level navigation component to implement a tab-based navigation. The component is a container of individual Tab components.';
  public tabDescription: string = 'The tab component is a child component of tabs. Each tab can contain a top level navigation stack for an app or a single view. An app can have many tabs, all with their own independent navigation.';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.tabSelected = data['tab'];
    })
  }

}
