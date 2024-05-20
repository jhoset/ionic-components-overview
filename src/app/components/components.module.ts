import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";
import {PageDescriptionComponent} from "./page-description/page-description.component";
import {PopoverInfoComponent} from "./popover-info/popover-info.component";


@NgModule({
  declarations: [
    HeaderComponent,
    PageDescriptionComponent,
    PopoverInfoComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    PageDescriptionComponent,
    PopoverInfoComponent
  ]
})
export class ComponentsModule {
}
