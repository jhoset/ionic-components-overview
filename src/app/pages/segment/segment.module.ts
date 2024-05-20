import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SegmentPageRoutingModule} from './segment-routing.module';

import {SegmentPage} from './segment.page';
import {ComponentsModule} from "../../components/components.module";
import {FilterPipe} from "../../pipes/filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentPageRoutingModule,
    ComponentsModule,
    FilterPipe
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule {
}
