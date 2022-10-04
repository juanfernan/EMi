import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PortalComponent } from './portal.component';
import { PortalRoutingModule } from './portal-rounting.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PortalComponent,
  ],
  imports: [
    PortalRoutingModule,
    SharedModule,
    RouterModule,
    CommonModule
  ]
})

export class PortalModule { }
