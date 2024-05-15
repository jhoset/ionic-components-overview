import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-description',
  templateUrl: './page-description.component.html',
  styleUrls: ['./page-description.component.scss'],
})
export class PageDescriptionComponent {

  @Input() text: string = 'Description here...';

}
