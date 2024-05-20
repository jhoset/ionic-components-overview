import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpinnerPageRoutingModule } from './spinner-routing.module';

import { SpinnerPage } from './spinner.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SpinnerPageRoutingModule,
        ComponentsModule
    ],
  declarations: [SpinnerPage]
})
export class SpinnerPageModule {}
