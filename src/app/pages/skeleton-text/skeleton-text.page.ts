import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage {

  public componentDescription = 'Skeleton Text is a component for rendering placeholder(wildcard) content. The element will render a gray block at the specified width.'


  public loading = true;
  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 2500)

  }

}
