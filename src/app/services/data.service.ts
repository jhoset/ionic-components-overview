import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IonicComponent} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }


  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts() {
    return this.http.get<IonicComponent[]>('/assets/data/menu-opts.json')
  }

  getHeroes() {
    return this.http.get<IonicComponent[]>('/assets/data/superheroes.json')
  }
}
