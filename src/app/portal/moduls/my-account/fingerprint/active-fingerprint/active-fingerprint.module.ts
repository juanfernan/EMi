import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveFingerprintPageRoutingModule } from './active-fingerprint-routing.module';

import { ActiveFingerprintPage } from './active-fingerprint.page';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    ActiveFingerprintPageRoutingModule
  ],
  declarations: [
    ActiveFingerprintPage],
  providers:[
    FingerprintAIO
  ]
})
export class ActiveFingerprintPageModule {}
