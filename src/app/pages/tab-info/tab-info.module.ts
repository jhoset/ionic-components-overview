import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabInfoPageRoutingModule } from './tab-info-routing.module';

import { TabInfoPage } from './tab-info.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabInfoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TabInfoPage]
})
export class TabInfoPageModule {}
