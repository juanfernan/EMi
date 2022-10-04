import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniSesionPage } from './sections/login/ini-sesion/ini-sesion.page';
import { OnboardingPage } from './sections/onboarding/onboarding.page';
import { WelcomePage } from './sections/welcome/welcome.page';
import { RememberPasswordPage } from './sections/password/remember-password/remember-password.page';
import { RememberPasswordCodePage } from './sections/password/remember-password-code/remember-password-code.page';
import { RecoverPasswordMailPage } from './sections/password/recover-password-mail/recover-password-mail.page';
import { RecoverPasswordMailPhonePage } from './sections/password/recover-password-mail-phone/recover-password-mail-phone.page';
import { RecoverPasswordPhonePage } from './sections/password/recover-password-phone/recover-password-phone.page';
import { HaveBeLoggedInGuard } from '../core/guard/have-be-logged-in.guard';
import { AccountCreatePage } from './sections/account-create/account-create.page';
import { RegisterPasswordPage } from './sections/account-create/register-password/register-password.page';
import { DataCompletePage } from './sections/account-create/data-complete/data-complete.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [HaveBeLoggedInGuard],
    component: OnboardingPage
  },
  {
    path: 'welcome',
    component: WelcomePage
  },
  {
    path: 'ini-sesion',
    component: IniSesionPage
  },
  {
    path: 'remember-password',
    component: RememberPasswordPage
  },
  {
    path: 'remember-password-code',
    component: RememberPasswordCodePage
  },
  {
    path: 'recover-password-mail',
    component: RecoverPasswordMailPage
  },
  {
    path: 'recover-password-mail-phone',
    component: RecoverPasswordMailPhonePage
  },
  {
    path: 'recover-password-phone',
    component: RecoverPasswordPhonePage
  },
  {
    path: 'account-create',
    component: AccountCreatePage
  },
  {
    path: 'register-password',
    component: RegisterPasswordPage
  },
  {
    path: 'data-complete',
    component: DataCompletePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
