import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExpiredMedicalServicesPageRoutingModule } from './expired-medical-services-routing.module';
import { ExpiredMedicalServicesPage } from './expired-medical-services.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ExpiredMedicalServicesPageRoutingModule
  ],
  declarations: [ExpiredMedicalServicesPage]
})
export class ExpiredMedicalServicesPageModule {}
