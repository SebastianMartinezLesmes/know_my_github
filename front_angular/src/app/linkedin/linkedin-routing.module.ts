import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkedinPage } from './linkedin.page';

const routes: Routes = [
  {
    path: '',
    component: LinkedinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkedinPageRoutingModule {}
