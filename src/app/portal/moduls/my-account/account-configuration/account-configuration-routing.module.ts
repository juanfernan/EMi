import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HaveBeLoggedInGuard } from 'src/app/core/guard/have-be-logged-in.guard';

import { AccountConfigurationPageModule } from './account-configuration.module';
import { ChangePasswordPage } from './components/change-password/change-password.page';
import { DeactivateUserAccountPage } from './components/deactivate-user-account/deactivate-user-account.page';
import { EditUserEmailPage } from './components/edit-user-email/edit-user-email.page';
import { AccountConfigurationPage } from './account-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: AccountConfigurationPage,
    canActivate: [HaveBeLoggedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountConfigurationPageRoutingModule {}
