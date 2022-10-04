import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TracingEventTypesPage } from './tracing-event-types.page';

const routes: Routes = [
  {
    path: '',
    component: TracingEventTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TracingEventTypesPageRoutingModule {}
