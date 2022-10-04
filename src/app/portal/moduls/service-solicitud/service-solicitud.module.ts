import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceSolicitudPageRoutingModule } from './service-solicitud-routing.module';

import { ServiceSolicitudPage } from './service-solicitud.page';
import { SharedModule } from '../../../shared/shared.module';
import { CardTypeServicePage } from './components/card-type/card-type-service.page';
import { ModalPhonesCenterComponent } from './components/modal-phones-center/modal-phones-center.component';
import { BirthdayPipe } from './pipes/birthday.pipe';
import { ServiceTermsModalComponent } from '../service-solicitud/components/service-terms-modal/service-terms-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ServiceSolicitudPageRoutingModule
  ],
  declarations: [
    ServiceSolicitudPage,
    CardTypeServicePage,
    ModalPhonesCenterComponent,
    BirthdayPipe,
    ServiceTermsModalComponent
  ]
})
export class ServiceSolicitudPageModule {}
