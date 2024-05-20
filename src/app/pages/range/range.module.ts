import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangePageRoutingModule } from './range-routing.module';

import { RangePage } from './range.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RangePageRoutingModule,
        ComponentsModule
    ],
  declarations: [RangePage]
})
export class RangePageModule {}
