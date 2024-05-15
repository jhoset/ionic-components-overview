import {Component} from '@angular/core';
import {ActionSheetButton, ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {

  public actionSheetButtons: ActionSheetButton[] = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash-outline',
      cssClass: 'red',
      data: {
        action: 'delete'
      }
    },
    {
      text: 'Share',
      icon: 'share-outline',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close-outline',
      data: {
        action: 'cancel',
      },
    },
  ]


  constructor(private actionSheetCtrl: ActionSheetController) {
  }

  async presentActionSheet() {

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'red',
          handler: () => {
            console.log('Delete');
          },
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Mark as Favorite',
          icon: 'heart-outline',
          handler: () => {
            console.log('Favorite');
          },
          data: {
            action: 'favorite'
          }
        },
        {
          text: 'Share',
          icon: 'share-outline',
          handler: () => {
            console.log('Share');
          },
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          },
          icon: 'close-outline',
          data: {
            action: 'cancel',
          },
        },
      ],

    });

    await actionSheet.present();
  }

  onClick() {
    this.presentActionSheet();
  }

  onDismiss(event: any) {
    console.log(event.detail)
  }

}
