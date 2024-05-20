import {Component, OnInit} from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {PopoverInfoComponent} from "../../components/popover-info/popover-info.component";

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage {

  public componentDescription = 'A Popover is a dialog that appears on top of the current page. ' +
    'It can be used for anything, but generally it is used for overflow actions that don\'t fit in the navigation bar.'

  constructor(public popoverCtrl: PopoverController) {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      //backdropDismiss: false
    })

    await popover.present();

    const {data} = await popover.onWillDismiss();
    console.log(data)

  }

}
