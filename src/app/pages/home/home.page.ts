import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  public components: IComponent[] = [
    {
      icon: 'albums-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'swap-vertical-outline',
      name: 'Accordion',
      redirectTo: '/accordion'
    }
  ];

  constructor() {
  }


}


interface IComponent {
  icon: string;
  name: string;
  redirectTo: string;
}
