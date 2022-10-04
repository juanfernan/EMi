import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HaveBeLoggedInGuard } from 'src/app/core/guard/have-be-logged-in.guard';

import { ServiceHistoryPage } from './service-history.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HaveBeLoggedInGuard],
    component: ServiceHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceHistoryPageRoutingModule {}
