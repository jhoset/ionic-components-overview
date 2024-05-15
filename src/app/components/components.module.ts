import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";
import {PageDescriptionComponent} from "./page-description/page-description.component";


@NgModule({
  declarations: [
    HeaderComponent,
    PageDescriptionComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    PageDescriptionComponent
  ]
})
export class ComponentsModule {
}
