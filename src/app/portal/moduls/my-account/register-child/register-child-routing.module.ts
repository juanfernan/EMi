import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HaveBeLoggedInGuard } from 'src/app/core/guard/have-be-logged-in.guard';

import { RegisterChildPage } from './register-child.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterChildPage,
    canActivate: [HaveBeLoggedInGuard],
  },
  // {
  //   path: 'selected-child',
  //   loadChildren: () => import('./register-child.module').then( m => m.RegisterChildPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterChildPageRoutingModule {}
