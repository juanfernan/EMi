import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliateCardPage } from './components/afiliate-card/afiliate-card.page';
import { MyAfiliatesPage } from './my-afiliates.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewAfiliateFormPage } from './components/new-afiliate-form/new-afiliate-form.page';
import { NewAfiliateCardPage } from './components/new-afiliate-card/new-afiliate-card.page';
import { MyAfiliatesRoutingModule } from './my-afiliates.routing.module';

@NgModule({
  declarations: [
    AfiliateCardPage,
    NewAfiliateFormPage,
    NewAfiliateCardPage,
    MyAfiliatesPage
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MyAfiliatesRoutingModule
  ]
})
export class MyAfiliatesModule { }