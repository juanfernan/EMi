import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestEventTypesPage } from './request-event-types.page';

const routes: Routes = [
  {
    path: '',
    component: RequestEventTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestEventTypesPageRoutingModule {}
