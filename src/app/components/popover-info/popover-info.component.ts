import {Component, OnInit} from '@angular/core';
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent {

  public items = Array(5);

  constructor(private popoverCtrl: PopoverController) {
  }

  onSelect(item: number) {
    console.log('Item', item)

    this.popoverCtrl.dismiss({
      item: item
    })
  }

}
