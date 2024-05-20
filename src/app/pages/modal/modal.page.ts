import {Component} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ModalInfoPage} from "../modal-info/modal-info.page";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  public componentDescription = 'A Modal is a dialog that appears on top of the app\'s content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.';

  constructor(private modalCtrl: ModalController) {
  }


  async onOpenModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        name: 'Armin',
        country: 'Perú'
      }
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();
    console.log({data, role})
    if ( role=== 'confirm' ) {
      console.log('Confirmed modal!');
    }
  }

}
