import {Component, OnInit} from '@angular/core';
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage {

  loading!: HTMLIonLoadingElement;

  componentDescription = 'An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app\'s content, and can be dismissed by the app to resume user interaction with the app.'

  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000
    });

    await this.loading.present();
  }

}
