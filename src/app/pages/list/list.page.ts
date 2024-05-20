import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";
import {IonList} from "@ionic/angular";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('ionListWithIS') ionListWithIS!: IonList;

  public users!: Observable<any>;

  public componentDescription = 'Lists are made up of multiple rows of items which can contain text, buttons, toggles, icons, thumbnails, and much more. ' +
    'Lists generally contain items with similar data content, such as images and text.';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.users = this.dataService.getUsers()
  }

  public onShare(user: any) {
    console.log('Share > ', user)
    this.closeIonListSlidedItems();
  }

  public onFavorite(user: any) {
    console.log('Favorite >', user)
    this.closeIonListSlidedItems();
  }

  public onDelete(user: any) {
    console.log('Delete > ', user)
    this.closeIonListSlidedItems();
  }

  public closeIonListSlidedItems() {
    this.ionListWithIS.closeSlidingItems();
  }

}
