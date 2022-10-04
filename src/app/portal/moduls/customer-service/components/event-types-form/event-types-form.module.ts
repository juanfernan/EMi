import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventTypesFormPageRoutingModule } from './event-types-form-routing.module';

import { EventTypesFormPage } from './event-types-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventTypesFormPageRoutingModule
  ],
  declarations: [EventTypesFormPage]
})
export class EventTypesFormPageModule {}
