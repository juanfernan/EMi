import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { OnboardingPage } from './sections/onboarding/onboarding.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { OnboardingHeaderComponent } from './components/onboarding-header/onboarding-header.component';
import { OnboardingCarouselComponent } from './components/onboarding-carousel/onboarding-carousel.component';
import { WelcomePage } from './sections/welcome/welcome.page';
import { IniSesionPage } from './sections/login/ini-sesion/ini-sesion.page';
import { RememberPasswordPage } from './sections/password/remember-password/remember-password.page';
import { RememberPasswordCodePage } from './sections/password/remember-password-code/remember-password-code.page';
import { RecoverPasswordMailPage } from './sections/password/recover-password-mail/recover-password-mail.page';
import { RecoverPasswordMailPhonePage } from './sections/password/recover-password-mail-phone/recover-password-mail-phone.page';
import { RecoverPasswordPhonePage } from './sections/password/recover-password-phone/recover-password-phone.page';
import { OptionCityComponent } from './sections/useful-phones/option-city/option-city.component';
import { ListPhonesComponent } from './sections/useful-phones/list-phones/list-phones.component';
import { CodeInputModule } from 'angular-code-input';
import { RouterModule } from '@angular/router';
import { AccountCreatePage } from './sections/account-create/account-create.page';
import { AccountVerificationPage } from './sections/account-create/account-verification/account-verification.page';
import { DataCompletePage } from './sections/account-create/data-complete/data-complete.page';
import { RegisterPasswordPage } from './sections/account-create/register-password/register-password.page';
import { TermsPage } from './sections/terms/terms.page';
import { SecurityQuestionPage } from './sections/account-create/account-verification/components/security-question/security-question.page';

@NgModule({
  declarations: [
    OnboardingPage,
    OnboardingCarouselComponent,
    OnboardingHeaderComponent,
    WelcomePage,
    IniSesionPage,
    RememberPasswordPage,
    RememberPasswordCodePage,
    RecoverPasswordMailPage,
    RecoverPasswordMailPhonePage,
    RecoverPasswordPhonePage,
    OptionCityComponent,
    ListPhonesComponent,
    AccountCreatePage,
    AccountVerificationPage,
    DataCompletePage,
    RegisterPasswordPage,
    TermsPage,
    SecurityQuestionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PublicRoutingModule,
    SharedModule,
    CodeInputModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PublicModule { }
