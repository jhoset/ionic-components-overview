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
      icon: 'swap-vertical-outline',
      name: 'Accordion',
      redirectTo: '/accordion'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/check-box'
    },
    {
      icon: 'calendar-outline',
      name: 'Date & Time Pickers',
      redirectTo: '/date-time'
    },
    {
      icon: 'balloon-outline',
      name: 'Floating Action Button',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
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
