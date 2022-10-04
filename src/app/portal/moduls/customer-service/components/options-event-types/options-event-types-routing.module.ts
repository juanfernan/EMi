import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsEventTypesPage } from './options-event-types.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsEventTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsEventTypesPageRoutingModule {}
