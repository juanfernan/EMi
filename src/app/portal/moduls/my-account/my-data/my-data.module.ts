import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountRoutingModule } from './my-data-routing.module';
import { MyDataPage } from './my-data.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyDataPage
  ],
  imports: [
    MyAccountRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyDataModule { }
