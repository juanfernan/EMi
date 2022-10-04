import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScheduledServicesPageRoutingModule } from './scheduled-services-routing.module';
import { ScheduledServicesPage } from './scheduled-services.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ScheduledServicesPageRoutingModule
  ],
  declarations: [ScheduledServicesPage]
})
export class ScheduledServicesPageModule {}
