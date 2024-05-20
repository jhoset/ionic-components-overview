import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  public publisherSelected = '';
  public superHeroes!: Observable<any[]>

  public componentDescription = 'Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. ' +
    'They can be displayed inside of a toolbar or the main content.';

  constructor(private dataService: DataService) {
  }

  public onSegmentChange(ev: any) {
    console.log(ev.detail.value)
    if (ev.detail.value.toLowerCase() == 'all') {
      this.publisherSelected = ''
    } else {
      this.publisherSelected = ev.detail.value;
    }
  }

  ngOnInit(): void {
    this.superHeroes = this.dataService.getHeroes();
  }


}
