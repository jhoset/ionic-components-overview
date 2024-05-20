import {Component, Input} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage {

  @Input() name!: string;
  @Input() country!: string;

  constructor(private modalCtrl: ModalController) {
  }

  async closeWithoutArguments() {
    return this.modalCtrl.dismiss();
  }

  onConfirm() {
    return this.modalCtrl.dismiss('Armin - Peru', 'confirm')
  }

  onCancel() {
    return this.modalCtrl.dismiss(null, 'cancel')
  }

}
