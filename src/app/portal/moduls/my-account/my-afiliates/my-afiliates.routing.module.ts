import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaveBeLoggedInGuard } from 'src/app/core/guard/have-be-logged-in.guard';
import { MyAfiliatesPage } from './my-afiliates.page';
import { NewAfiliateFormPage } from './components/new-afiliate-form/new-afiliate-form.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HaveBeLoggedInGuard],
    component: MyAfiliatesPage
  },
  {
    path: 'new-afiliate',
    canActivate: [HaveBeLoggedInGuard],
    component: NewAfiliateFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAfiliatesRoutingModule { }