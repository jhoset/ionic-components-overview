import {Component} from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio',
      value: 'green',
    },
  ];

  constructor(private alertCtrl: AlertController) {
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      // backdropDismiss: false,
      header: 'Title',
      subHeader: 'Sub Title',
      message: 'A message should be a short, complete sentence.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertWithMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Sub Title',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'red',
          handler: () => {
            console.log('CANCEL');
          },
        }
      ]
    })

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'paragraph',
          id: 'paragraph-id',
          type: 'textarea',
          placeholder: 'Placeholder 3',
        },
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        {
          name: 'password',
          type: 'password',
          attributes: {
            maxLength: 5,
            inputMode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler: (event) => {
            console.log('OK', event);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'red',
          handler: () => {
            console.log('CANCEL');
          },
        }
      ]
    })

    await alert.present();
  }


}
