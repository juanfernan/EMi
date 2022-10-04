import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ForgotPass } from 'src/app/public/models/entities/forgot-pass';
import { NewForgotPassword } from 'src/app/public/models/requests/new-forgot-password';
import { NewForgotPasswordService } from 'src/app/public/services/new-forgot-password.service';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { onlyNumber, ValidatorStartCellPhoneNumber } from 'src/app/shared/helpers/validator';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { SentryHandelError } from 'src/app/shared/services/sentry.handelerror';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recover-password-phone',
  templateUrl: './recover-password-phone.page.html',
  styleUrls: ['./recover-password-phone.page.scss']
})
export class RecoverPasswordPhonePage implements OnInit {

  phoneForm: FormGroup
  continueText: string;
  environment: any;
  continuarButton = new ButtonConfiguration();
  isLoading: boolean;
  responsePassword: ForgotPass;
  bsModalRef: BsModalRef;
  imgRoute: string;

  constructor(
    private fb: FormBuilder, 
    private translate: TranslateService, 
    private forgotPassServices: NewForgotPasswordService,
    private urlDataService: UrlDataService, 
    private router: Router, 
    private modalInfo: BsModalService, 
    private sentry: SentryHandelError
    ) {
    this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
      this.continueText = resp;
    });;
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    this.continuarButton.buttonType = ButtonType.Primary;
    this.continuarButton.text = this.continueText;

    this.phoneForm = this.fb.group({
      phone: ['', [Validators.required, ValidatorStartCellPhoneNumber]],
    })
  }

  ngOnInit(): void {
  }

  onlyNumber(event: any): boolean {
    return onlyNumber(event);
  }

  forgotPassword() {
    if (this.phoneForm.invalid) {
      return
    }else{
    let user = new NewForgotPassword();
    this.isLoading = true;
    user.User = this.phoneForm.get('phone')?.value;
    this.forgotPassServices.sendCodeForgotPassword(user).subscribe(
      resp => {
        this.responsePassword = resp;
        this.isLoading = false;

        if (this.responsePassword.StatusCode == 0) {
          this.urlDataService.NewForgotPasswor = user
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
            class: 'modal-dialog-centered modal-rounded'
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
            class: 'modal-dialog-centered modal-rounded'
          }
          this.bsModalRef = this.modalInfo.show(InformativeModalComponent, initialState);
        }
      }, error => {
        this.sentry.handleError(error);
      }
    )
    }
  }
}
