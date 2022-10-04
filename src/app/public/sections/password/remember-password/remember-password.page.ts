import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { SetPassword } from 'src/app/public/models/entities/setPassword';
import { SecurityQuestionRequest } from 'src/app/public/models/requests/security-question-request';
import { NewForgotPasswordService } from 'src/app/public/services/new-forgot-password.service';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { Regex } from 'src/app/shared/helpers/regex';
import { EmailEqualsValidator } from 'src/app/shared/helpers/validator';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { BaseResponse } from 'src/app/shared/models/response/base-response';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.page.html',
  styleUrls: ['./remember-password.page.scss'],
})
export class RememberPasswordPage implements OnInit {

  isLoading: boolean;
  passForm: FormGroup;
  continuarButton = new ButtonConfiguration();
  continueText: string;
  regex = Regex;
  bsModalRef: BsModalRef;
  hide = true;
  hideC = true;
  setPassword: SetPassword;
  imgRoute: string;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private passwordService: NewForgotPasswordService,
    private modalInfo: BsModalService,
    private router: Router,
    private urlDataService: UrlDataService
  ) {
    this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
      this.continueText = resp;
    });;
    this.continuarButton.buttonType = ButtonType.Primary;
    this.continuarButton.text = this.continueText;
    this.imgRoute = environment.imagesRoute;
    this.passForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.regex.min1Number), Validators.pattern(this.regex.specialCharacter), Validators.pattern(this.regex.upperCaseCharacter)]],
      passwordConfirm: ['', [Validators.required, EmailEqualsValidator('password')]]
    })
  }

  ngOnInit() {
    !this.urlDataService.NewForgotPasswor ? this.router.navigate(['/onboarding']) : this.setRequest();
  }

  setRequest() {
    this.setPassword = new SetPassword()
    this.setPassword.Email = this.urlDataService.NewForgotPasswor.User
    this.setPassword.Code = this.urlDataService.CodeValidator
  }

  complete() {
    if (this.passForm.invalid) {
      return
    }else{
    this.setPassword.NewPassword = this.passForm.get('password')?.value;
    this.setPassword.ConfirmPassword = this.passForm.get('passwordConfirm')?.value;
    this.isLoading = true;
    this.passwordService.setPassword(this.setPassword).subscribe(
      (resp: BaseResponse) => {
        this.isLoading = false;
        if (resp.StatusCode == 24) {
          const initialState: ModalOptions = {
            initialState: {
              iconHeader: 'alert-circle.svg',
              subTitle: resp.Title,
              description: resp.Message,
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
            (resp: boolean) => {
              if (resp) {
                this.router.navigate(['/onboarding/ini-sesion']);
              }
            }
          )
        } else if (resp.StatusCode == 18 || resp.StatusCode == 46) {
          const initialState: ModalOptions = {
            initialState: {
              iconHeader: 'alert-circle.svg',
              subTitle: resp.Title,
              description: resp.Message,
              onlyButtonConfirm: false,
              textButton: '',
              textButton1: 'Cancelar',
              textButton2: 'Enviar Correo',
              visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            backdrop: true,
            ignoreBackdropClick: true
          }
          this.bsModalRef = this.modalInfo.show(InformativeModalComponent, initialState);
          this.bsModalRef.content.onClose.subscribe(
            (resp: boolean) => {
              if (resp) {
                let profile = localStorage.getItem('profile') === "customers" ? '1' : localStorage.getItem('profile') === "doctor" ? '4' : '2';
                this.passwordService.activationMail(this.setPassword.NewPassword, profile).subscribe(
                  resp => {
                    this.callModal(resp);
                  }
                )
              }
            }
          )
        }
        else {
          const initialState: ModalOptions = {
            initialState: {
              iconHeader: 'alert-circle.svg',
              subTitle: resp.Title,
              description: resp.Message,
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
            (resp: boolean) => {
              if (resp) {
                this.router.navigate(['/onboarding']);
              }
            }
          )
        }
      }
    )
    }
  }

  callModal(resp: BaseResponse) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: resp.Title,
        description: resp.Message,
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
  }

}
