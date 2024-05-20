import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/listen',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'listen',
        loadChildren: () => import('../tab-info/tab-info.module').then(m => m.TabInfoPageModule),
        data: {
          tab: 'Listen'
        }
      },
      {
        path: 'radio',
        loadChildren: () => import('../tab-info/tab-info.module').then(m => m.TabInfoPageModule),
        data: {
          tab: 'Radio'
        }
      },
      {
        path: 'library',
        loadChildren: () => import('../tab-info/tab-info.module').then(m => m.TabInfoPageModule),
        data: {
          tab: 'Library'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
