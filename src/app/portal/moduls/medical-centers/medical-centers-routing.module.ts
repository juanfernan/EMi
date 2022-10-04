import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HaveBeLoggedInGuard } from 'src/app/core/guard/have-be-logged-in.guard';
import { ClinicDetailsPage } from './components/clinic-details/clinic-details.page';
import { MainCoordinationsPage } from './components/main-coordinations/main-coordinations.page';

import { MedicalCentersPage } from './medical-centers.page';
import { NewCoordinationPage } from './components/new-coordination/new-coordination.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HaveBeLoggedInGuard],
    component: MedicalCentersPage
  },
  {
    //Clinicas detalle, adicciona las coordenadas en su detalle
    path: 'details/:code/:patientDirectionLatitude/:patientDirectionLongitude',
    canActivate: [HaveBeLoggedInGuard],
    component: ClinicDetailsPage,
    pathMatch: 'full'
  },
  {
    //Clinicas detalle, flujo habitual
    path: 'details/:code',
    canActivate: [HaveBeLoggedInGuard],
    component: ClinicDetailsPage,
    pathMatch: 'full'
  },
  {
    path: 'coordinations',
    canActivate: [HaveBeLoggedInGuard],
    component: MainCoordinationsPage,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalCentersPageRoutingModule {}
