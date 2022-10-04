import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { NewForgotPasswordService } from 'src/app/public/services/new-forgot-password.service';
import { ForgotPass } from 'src/app/public/models/entities/forgot-pass';
import { BsModalService, ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';
import { NewForgotPassword } from 'src/app/public/models/requests/new-forgot-password';
import { SentryHandelError } from 'src/app/shared/services/sentry.handelerror';

@Component({
  selector: 'app-recover-password-mail',
  templateUrl: './recover-password-mail.page.html',
  styleUrls: ['./recover-password-mail.page.scss'],
})
export class RecoverPasswordMailPage implements OnInit {

  continuarButton = new ButtonConfiguration();
  emailForm: FormGroup;
  environment: any;
  continueText: string;
  isLoading: boolean;
  responsePassword: ForgotPass;
  bsModalRef: BsModalRef;
  imgRoute: string;
  
  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private forgotPassServices: NewForgotPasswordService,
    private router: Router,
    private modalInfo: BsModalService,
    private sentry: SentryHandelError,
    private urlDataService: UrlDataService
  ) {
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
      this.continueText = resp;
    });;
    this.continuarButton.buttonType = ButtonType.Primary;
    this.continuarButton.text = this.continueText;
    
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
   }

  ngOnInit(): void {
  }

  forgotPassword() {
    if (this.emailForm.invalid) {
      return
    }else{
    let user = new NewForgotPassword();
    this.isLoading = true;
    user.User = this.emailForm.get('email')?.value;
    this.forgotPassServices.sendCodeForgotPassword(user).subscribe(
      resp => {
        this.responsePassword = resp;
        this.isLoading = false;
        if (this.responsePassword.StatusCode == 0) {
          this.urlDataService.NewForgotPasswor = user
          const initialState: ModalOptions = {
            initialState: {
              iconHeader: 'alert-circle.svg',
              subTitle: this.responsePassword.Title,
              description: this.responsePassword.Message,
              onlyButtonConfirm: true,
              textButton: 'Aceptar',
              textButton1: '',
              textButton2: '',
              visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            backdrop: true,
            ignoreBackdropClick: true
          }
          this.bsModalRef = this.modalInfo.show(InformativeModalComponent, initialState);
          this.bsModalRef.content.onClose.subscribe(
            (resp: any) => {
              if (resp) {
                this.router.navigate(['/onboarding/remember-password-code']);
              }
            }
          )
        } else {
          const initialState: ModalOptions = {
            initialState: {
              iconHeader: 'alert-circle.svg',
              subTitle: this.responsePassword.Title,
              description: this.responsePassword.Message,
              onlyButtonConfirm: true,
              textButton: 'Aceptar',
              textButton1: '',
              textButton2: '',
              visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            backdrop: true,
            ignoreBackdropClick: true
          }
          this.modalInfo.show(InformativeModalComponent, initialState);
        }
      },
      error => {
        this.sentry.handleError(error);
      }
    )
    }
  }
}
