import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsEventTypesPageRoutingModule } from './options-event-types-routing.module';

import { OptionsEventTypesPage } from './options-event-types.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TracingEventTypesPage } from '../tracing-event-types/tracing-event-types.page';
import { EventTypesFormPage } from '../event-types-form/event-types-form.page';
import { RequestEventTypesPage } from '../request-event-types/request-event-types.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OptionsEventTypesPageRoutingModule
  ],
  declarations: [
    OptionsEventTypesPage,
    RequestEventTypesPage,
    TracingEventTypesPage,
    EventTypesFormPage
  ]
})
export class OptionsEventTypesPageModule {}
