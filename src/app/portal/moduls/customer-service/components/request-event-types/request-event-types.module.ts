import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestEventTypesPageRoutingModule } from './request-event-types-routing.module';

import { RequestEventTypesPage } from './request-event-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestEventTypesPageRoutingModule
  ],
  declarations: [RequestEventTypesPage]
})
export class RequestEventTypesPageModule {}
