import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyInvoicesPageRoutingModule } from './my-invoices-routing.module';

import { MyInvoicesPage } from './my-invoices.page';
import { MonthPipe } from './pipes/month.pipe';
import { InvoicesGridPage } from './components/invoices-grid/invoices-grid.page';
import { InvoicesFilterPage } from './components/invoices-filter/invoices-filter.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MyInvoicesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyInvoicesPage, MonthPipe, InvoicesGridPage, InvoicesFilterPage]
})
export class MyInvoicesPageModule { }
