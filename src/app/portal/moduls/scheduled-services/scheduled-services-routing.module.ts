import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HaveBeLoggedInGuard } from 'src/app/core/guard/have-be-logged-in.guard';
import { ScheduledServicesPage } from './scheduled-services.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HaveBeLoggedInGuard],
    component: ScheduledServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduledServicesPageRoutingModule {}
