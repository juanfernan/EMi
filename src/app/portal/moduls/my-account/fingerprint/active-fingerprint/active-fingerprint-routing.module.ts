import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveFingerprintPage } from './active-fingerprint.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveFingerprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveFingerprintPageRoutingModule {}
