import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { VerifyCodeRequest } from 'src/app/public/models/requests/verify-code-request';
import { NewForgotPasswordService } from 'src/app/public/services/new-forgot-password.service';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { BaseResponse } from 'src/app/shared/models/response/base-response';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-remember-password-code',
  templateUrl: './remember-password-code.page.html',
  styleUrls: ['./remember-password-code.page.scss']
})
export class RememberPasswordCodePage implements OnInit {

  codeForm: FormGroup
  continueText: string;
  codeIncomplete: boolean;
  continuarButton = new ButtonConfiguration();
  user: string;
  bsModalRef: BsModalRef;
  isLoading: boolean;
  code: string;
  imgRoute: string;

  constructor(
    private fb: FormBuilder, 
    private translate: TranslateService, 
    private forgotServices: NewForgotPasswordService,
    private urlDataService: UrlDataService, 
    private modalInfo: BsModalService, 
    private router: Router
    ) {
    this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
      this.continueText = resp;
    });;

    this.continuarButton.buttonType = ButtonType.Primary;
    this.continuarButton.text = this.continueText;
    this.imgRoute = environment.imagesRoute;
    this.codeForm = this.fb.group({
      code: ['', [Validators.required]],
    })
    this.codeIncomplete = true;
  }

  ngOnInit(): void {
    this.user = this.urlDataService.NewForgotPasswor.User;
    this.codeForm.reset();
  }

  onCodeChanged(code: string) {
    this.code = code;
    code.length == 4 ? (this.codeIncomplete = false, this.onCodeCompleted()) : (this.codeIncomplete = true)
  }

  onCodeCompleted() {
    if (this.codeForm.invalid) {
      return
    }else{
    let verifyCodeRequest = new VerifyCodeRequest();
    verifyCodeRequest.Code = this.code;
    verifyCodeRequest.user = this.user;
    this.isLoading = true;
    this.forgotServices.verifyCode(verifyCodeRequest).subscribe(
      (resp: BaseResponse) => {
        this.isLoading = false;
        if (resp.StatusCode == 0) {
          this.urlDataService.CodeValidator = verifyCodeRequest.Code
          this.router.navigate(['/onboarding/remember-password']);
        }
        else if (resp.StatusCode == 9) {
          const initialState: ModalOptions = {
            initialState: {
              iconHeader: 'alert-circle.svg',
              subTitle: resp.Title,
              description: 'El código ingresado es incorrecto',
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
            (resp: any) => {
              if (resp) {
                this.router.navigate(['/onboarding/ini-session']);
              }
            }
          )
        }
      }
    )
    }
  }
}
