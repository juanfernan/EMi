import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { User } from 'src/app/public/models/entities/user';
import { RegisterService } from 'src/app/public/services/register.service';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { Regex } from 'src/app/shared/helpers/regex';
import { EmailEqualsValidator } from 'src/app/shared/helpers/validator';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.page.html',
  styleUrls: ['./register-password.page.scss'],
})
export class RegisterPasswordPage implements OnInit {

  formPassword: FormGroup;
  configurationButton = new ButtonConfiguration();
  bsModalRef: BsModalRef;
  continueText: string;
  regex = Regex;
  user: User;
  hide = true;
  hideC = true;
  imgRoute: any;

  constructor(
    private bsModalService: BsModalService,
    private fb: FormBuilder,
    private translate: TranslateService,
    private registerService: RegisterService,
    private urlDataService: UrlDataService,
    private router: Router
  ) {
    this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
      this.continueText = resp;
    });;

    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = this.continueText;

    this.imgRoute = environment.imagesRoute;

    this.formPassword = this.fb.group({
      password: ['', [Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.regex.min1Number),
        Validators.pattern(this.regex.specialCharacter),
        Validators.pattern(this.regex.upperCaseCharacter)]],
      passwordConfirm: ['', [Validators.required, EmailEqualsValidator('password')]]
    })
   }

   ngOnInit(): void {
    this.loadUser()
  }

  loadUser() {
    this.user = this.urlDataService.User;
    if (!this.user) this.router.navigate(['welcome'], { replaceUrl: true });
  }

  showErroResponse(msg: string) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: 'Hubo un problema',
        description: msg,
        onlyButtonConfirm: true,
        textButton: 'Aceptar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 1
    }
    this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
    this.bsModalRef.content.onClose.subscribe(() => {
      this.router.navigate(['/welcome/ini-sesion']);
    });
  }

  showSuccessResponse(msg: string) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-check.svg',
        subTitle: 'Registro exitoso',
        description: msg,
        onlyButtonConfirm: true,
        textButton: 'Aceptar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 1
    }
    this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
    this.bsModalRef.content.onClose.subscribe(() => {
      this.router.navigate(['/welcome/ini-sesion']);
    });
  }

  saveUser() {
    this.user.Password = this.formPassword.controls.password.value;
    this.user.ConfirmPassword = this.formPassword.controls.passwordConfirm.value;
    this.registerService.saveUser(this.user).subscribe(resp => {
      if (resp.StatusCore == 0) {
        this.showSuccessResponse(resp.Message);
      }
      else {
        this.showErroResponse(resp.Message);
      }
    })
  }

}
