import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TracingEventTypesPageRoutingModule } from './tracing-event-types-routing.module';

import { TracingEventTypesPage } from './tracing-event-types.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TracingEventTypesPageRoutingModule
  ],
  declarations: [TracingEventTypesPage]
})
export class TracingEventTypesPageModule {}
