import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventTypesFormPage } from './event-types-form.page';

const routes: Routes = [
  {
    path: '',
    component: EventTypesFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventTypesFormPageRoutingModule {}
