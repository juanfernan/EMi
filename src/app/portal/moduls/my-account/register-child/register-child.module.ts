import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterChildPageRoutingModule } from './register-child-routing.module';

import { RegisterChildPage } from './register-child.page';
import { SharedModule } from '../../../../shared/shared.module';
import { SelectedChildPage } from './components/selected-child/selected-child.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterChildPageRoutingModule
  ],
  declarations: [
    RegisterChildPage,
    SelectedChildPage
  ]
})
export class RegisterChildPageModule {}
