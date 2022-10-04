import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoFingerprintPageRoutingModule } from './info-fingerprint-routing.module';

import { InfoFingerprintPage } from './info-fingerprint.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    InfoFingerprintPageRoutingModule
  ],
  declarations: [InfoFingerprintPage]
})
export class InfoFingerprintPageModule {}
