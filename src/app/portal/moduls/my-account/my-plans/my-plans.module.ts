import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPlansPageRoutingModule } from './my-plans-routing.module';

import { MyPlansPage } from './my-plans.page';
import { SharedModule } from '../../../../shared/shared.module';
import { MyPlansNewPlanPage } from './components/my-plans-new-plan/my-plans-new-plan.page';
import { MyPlansCardPage } from './components/my-plans-card/my-plans-card.page';
import { MyPlansMainInfoPage } from './components/my-plans-main-info/my-plans-main-info.page';
import { MyPlansConsumptionsModalPage } from './components/my-plans-consumptions-modal/my-plans-consumptions-modal.page';
import { PlanlistComponent } from './components/planlist/planlist.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    MyPlansPageRoutingModule
  ],
  declarations: [
    MyPlansPage,
    MyPlansCardPage,
    MyPlansMainInfoPage,
    MyPlansNewPlanPage,
    MyPlansConsumptionsModalPage,
    PlanlistComponent
  ]
})
export class MyPlansPageModule { }
