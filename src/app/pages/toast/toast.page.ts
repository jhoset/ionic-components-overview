import {Component, OnInit} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage {
  public toastDescription = 'A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app\'s content, and can be dismissed by the app to resume user interaction with the app.'

  constructor(private toastCtrl: ToastController) {
  }

  async displayToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Hello World!',
      duration: 3000,
      position: position,
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel'
        }
      ]
    });

    await toast.present();
  }

}
