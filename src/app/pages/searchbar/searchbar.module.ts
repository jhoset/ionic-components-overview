import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarPageRoutingModule } from './searchbar-routing.module';

import { SearchbarPage } from './searchbar.page';
import {ComponentsModule} from "../../components/components.module";
import {FilterPipe} from "../../pipes/filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarPageRoutingModule,
    ComponentsModule,
    FilterPipe
  ],
  declarations: [SearchbarPage]
})
export class SearchbarPageModule {}
