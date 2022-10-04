import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaveBeLoggedInGuard } from '../core/guard/have-be-logged-in.guard';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [HaveBeLoggedInGuard],
    component: PortalComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./moduls/home/home.module').then(x => x.HomePageModule)
      },
      {
        path: 'my-account/my-plans',
        loadChildren: () => import('./moduls/my-account/my-plans/my-plans.module').then(x => x.MyPlansPageModule)
      },
      {
        path: 'my-account/my-data',
        loadChildren: () => import('./moduls/my-account/my-data/my-data.module').then(x => x.MyDataModule)
      },
      {
        path: 'my-account/my-invoices',
        loadChildren: () => import('./moduls/my-account/my-invoices/my-invoices.module').then(x => x.MyInvoicesPageModule)
      },
      {
        path: 'request-service',
        loadChildren: () => import('./moduls/service-solicitud/service-solicitud.module').then(x => x.ServiceSolicitudPageModule)
      },
      {
        path: 'my-account/my-afiliates',
        loadChildren: () => import('./moduls/my-account/my-afiliates/my-afiliates.module').then(x => x.MyAfiliatesModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./moduls/medical-centers/medical-centers.module').then(x => x.MedicalCentersPageModule)
      },
      {
        path: 'admin/clinics',
        loadChildren: () => import('./moduls/medical-centers/medical-centers.module').then(x => x.MedicalCentersPageModule)
      },
      {
        path: 'medical-centers/map-clinics-nearby',
        loadChildren: () => import('./moduls/medical-centers/medical-centers.module').then(x => x.MedicalCentersPageModule)
      },
      {
        path: 'admin/clinics/coordinations',
        loadChildren: () => import('./moduls/medical-centers/medical-centers.module').then(x => x.MedicalCentersPageModule)
      },
      {
        path: 'myhealth/scheduledservices',
        loadChildren: () => import('./moduls/scheduled-services/scheduled-services.module').then(x => x.ScheduledServicesPageModule)
      },
      {
        path: 'myhealth/expired-medical-services',
        loadChildren: () => import('./moduls/expired-medical-services/expired-medical-services.module').then(x => x.ExpiredMedicalServicesPageModule)
      },
      {
        path: 'myhealth/service-history',
        loadChildren: () => import('./moduls/service-history/service-history.module').then( m => m.ServiceHistoryPageModule)
      },
      {
        path: 'my-account/generate-certificates',
        loadChildren: () => import('./moduls/my-account/documents-generation/documents-generation.module').then(x => x.DocumentsGenerationModule)
      },
      {
        path: 'my-account/generate-certificates/red-siem',
        loadChildren: () => import('./moduls/my-account/documents-generation/documents-generation.module').then( m => m.DocumentsGenerationModule)
      },
      {
        path: 'my-account/account-configuration',
        loadChildren: () => import('./moduls/my-account/account-configuration/account-configuration.module').then(x => x.AccountConfigurationPageModule)
      },
      {
        path: 'my-account/registerChild',
        loadChildren: () => import('./moduls/my-account/register-child/register-child.module').then(x => x.RegisterChildPageModule)
      },
      {
        path: 'service-solicitud',
        loadChildren: () => import('./moduls/service-solicitud/service-solicitud.module').then(x => x.ServiceSolicitudPageModule)
      },
      {
        path: 'my-account/fingerprint',
        loadChildren: () => import('./moduls/my-account/fingerprint/active-fingerprint/active-fingerprint.module').then(x => x.ActiveFingerprintPageModule)
      },
      {
        path: 'my-account/info-fingerprint',
        loadChildren: () => import('./moduls/my-account/fingerprint/info-fingerprint/info-fingerprint.module').then(x => x.InfoFingerprintPageModule)
      },
      {
        path: 'customer-service/faqs',
        loadChildren: () => import('./moduls/customer-service/components/faqs/faqs.module').then(x => x.FaqsPageModule)
      },
      {
        path: 'customer-service/optionseventtypes',
        loadChildren: () => import('./moduls/customer-service/components/options-event-types/options-event-types.module').then(x => x.OptionsEventTypesPageModule)
      },
      {
        path: 'customer-service/terms',
        loadChildren: () => import('./moduls/customer-service/components/terms/terms.module').then(x => x.TermsPageModule)
      },
      {
        path: 'customer-service/policies',
        loadChildren: () => import('./moduls/customer-service/components/policies/policies.module').then(x => x.PoliciesPageModule)
      },
      {
        path: 'specialists',
        loadChildren: () => import('./moduls/specialists/specialists.module').then(x => x.SpecialistsPageModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {

}
