import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInfoPage } from './tab-info.page';

const routes: Routes = [
  {
    path: '',
    component: TabInfoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInfoPageRoutingModule {}
