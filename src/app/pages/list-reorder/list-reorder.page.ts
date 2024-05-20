import {Component, OnInit} from '@angular/core';
import {ItemReorderEventDetail} from "@ionic/angular";

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage {

  componentDescription = 'Reorder is a component that allows an item to be dragged to change its order within a group of items. ' +
    'It must be used within a reorder group to provide a visual drag and drop interface.';

  heroes: string[] = ['Aqua-man', 'Superman', 'Batman', 'Snowden']

  public enableReorder: boolean = false;

  constructor() {
  }

  onHandleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged item', event.detail.from + 1, 'to', event.detail.to + 1, 'position');
    console.log('Before complete', this.heroes);
    event.detail.complete(this.heroes);
    console.log('After complete', this.heroes);
  }

}
