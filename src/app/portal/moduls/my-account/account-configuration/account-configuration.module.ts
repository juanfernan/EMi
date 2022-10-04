import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AccountConfigurationPageRoutingModule } from './account-configuration-routing.module';

import { ChangePasswordPage } from './components/change-password/change-password.page';
import { DeactivateUserAccountPage } from './components/deactivate-user-account/deactivate-user-account.page';
import { DeactivationModalPage } from './components/deactivation-modal/deactivation-modal.page';
import { EditUserEmailPage } from './components/edit-user-email/edit-user-email.page';
import { SharedModule } from '../../../../shared/shared.module';
import { GlobalServiceVariables } from '../../medical-centers/models/globalServiceVariables';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AccountConfigurationPage } from './account-configuration.page';
import { PasswordValidatorComponent } from '../../../../public/sections/shared/components/password-validator/password-validator.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule,
    AccountConfigurationPageRoutingModule
  ],
  declarations: [
    AccountConfigurationPage,
    ChangePasswordPage,
    DeactivateUserAccountPage,
    DeactivationModalPage,
    EditUserEmailPage,
    PasswordValidatorComponent
  ],
  providers: [
    GlobalServiceVariables
  ]
})
export class AccountConfigurationPageModule {}
