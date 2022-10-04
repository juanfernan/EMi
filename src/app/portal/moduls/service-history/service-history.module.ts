import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServiceHistoryPageRoutingModule } from './service-history-routing.module';
import { ServiceHistoryPage } from './service-history.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    ServiceHistoryPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    ServiceHistoryPage
  ],
  providers: [
    DatePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ServiceHistoryPageModule {}
