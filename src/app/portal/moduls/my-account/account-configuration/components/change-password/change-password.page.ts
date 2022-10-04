import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { cancelButtonConfigExport } from 'src/app/portal/moduls/scheduled-services/configs/cancelButtonConfig';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { Regex } from 'src/app/shared/helpers/regex';
import { EmailEqualsValidator } from 'src/app/shared/helpers/validator';
import { environment } from 'src/environments/environment';
import { saveButtonConfigExport } from '../../configs/saveButtonConfig';
import { ChangePassword } from '../../models/changePassword.model';
import { ChangePasswordService } from '../../services/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})

export class ChangePasswordPage implements OnInit {

  imgRoute: string
  environment: any;
  translate: TranslateService;
  changePasswordModel = new ChangePassword();
  userName: string | null;
  confirmResult: boolean = false;
  minlengthPassword: number;
  roleType: string | null;
  passwordForm: any;
  regex = Regex;
  saveButtonConfig = saveButtonConfigExport;
  cancelButtonConfig = cancelButtonConfigExport;
  isLoading = false;
  bsModalRef: BsModalRef;

  constructor(
    translate: TranslateService,
    private changePasswordService: ChangePasswordService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bsModalService: BsModalService
  ) {
    this.saveButtonConfig.buttonType = ButtonType.Primary;
    this.cancelButtonConfig.buttonType = ButtonType.Secundary;
    this.saveButtonConfig.text = "Guardar";
    this.cancelButtonConfig.text = "Cancelar";

    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    this.minlengthPassword = environment.lengthPassword;
      
    this.translate = translate;
    translate.setDefaultLang(environment.country);
    this.passwordForm = this.fb.group({
      previousPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.regex.min1Number), Validators.pattern(this.regex.specialCharacter), Validators.pattern(this.regex.upperCaseCharacter)]],
      confirmPassword: ['', [Validators.required, EmailEqualsValidator('newPassword')]],
    })
  }

  ngOnInit() {
    this.userName = localStorage.getItem("userName");
    this.roleType = localStorage.getItem("roleType");
    this.changePasswordModel.userName = this.userName;
  }

  changePassword() {
    this.bsModalRef = this.generateInformativeModal('Confirmación', '¿Estás seguro que deseas cambiar tu contraseña?', true, false)
    this.bsModalRef.content.onClose
      .subscribe((isConfirmed: any) => {
        this.confirmResult = isConfirmed;
        if (this.confirmResult === true) {
          this.isLoading = true;
          this.changePasswordModel.confirmPassword = this.passwordForm.controls.confirmPassword.value;
          this.changePasswordModel.oldPassword = this.passwordForm.controls.previousPassword.value;
          this.changePasswordModel.newPassword = this.passwordForm.controls.newPassword.value;
          this.changePasswordService.changePasssword(this.changePasswordModel)
            .subscribe((result: any) => {
              this.isLoading = false;
              if (result.StatusCode === 0) {
                this.changePasswordModel = new ChangePassword();
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false, true)
                this.bsModalRef.content.onClose.subscribe((res: any) => {
                  localStorage.clear();
                  this.router.navigate(['/login'], { replaceUrl: true });
                })
              } else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, true)
              }
            }, error => this.ErrorRegister(error));
        }
      });
  }

  cancel() {
    this.roleType === "2" ? this.router.navigate(['/specialists/agenda']) : this.router.navigate(['/portal/home']);
  }

  private ErrorRegister(error: any) {
    this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true, true)
  }

  generateInformativeModal(subTitle: string, description: string, isError: boolean, onlyButtonConfirm: boolean = true) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: onlyButtonConfirm,
        textButton: 'Aceptar',
        textButton1: 'Cancelar',
        textButton2: 'Aceptar',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: true
    };
    return this.bsModalService.show(InformativeModalComponent, initialState);
  }

}
