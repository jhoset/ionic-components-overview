import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {text} from "ionicons/icons";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit{
  public albums: any[] = []
  public textToSearch: string = '';

  public componentDescription = 'Searchbars represent a text field that can be used to search through a collection. ' +
    'They can be displayed inside of a toolbar or the main content. A searchbar should be used instead of an input to search lists.';

  constructor(private dataService: DataService) {
  }

  onSearch(ev: any) {
    console.log(ev)
  }

  onInput(ev: any) {
    console.log(ev)
    this.textToSearch = ev.detail.value;
  }

  ngOnInit(): void {
    this.dataService.getAlbums().subscribe(data => {
      this.albums = data
    })
  }

  protected readonly text = text;
}
