import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";
import {Observable} from "rxjs";
import {IonicComponent} from "./interfaces/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public components!: Observable<IonicComponent[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.components = this.dataService.getMenuOpts();
  }
}
