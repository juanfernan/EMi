import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoFingerprintPage } from './info-fingerprint.page';

const routes: Routes = [
  {
    path: '',
    component: InfoFingerprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoFingerprintPageRoutingModule {}
