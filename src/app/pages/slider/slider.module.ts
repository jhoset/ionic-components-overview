import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SliderPageRoutingModule} from './slider-routing.module';

import {SliderPage} from './slider.page';
import {ComponentsModule} from "../../components/components.module";

import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SliderPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderPageModule {
}
