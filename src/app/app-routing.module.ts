import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/onboarding', pathMatch: 'full' },
  { path: 'onboarding', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'portal', loadChildren: () => import('./portal/portal.module').then(x => x.PortalModule) },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
