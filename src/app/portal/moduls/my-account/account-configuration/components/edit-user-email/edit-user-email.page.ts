import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { cancelButtonConfigExport } from 'src/app/portal/moduls/scheduled-services/configs/cancelButtonConfig';
import { User } from 'src/app/public/models/entities/user';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { EmailEqualsValidator } from 'src/app/shared/helpers/validator';
import { saveButtonConfigExport } from '../../configs/saveButtonConfig';
import { editUserEmail } from '../../models/edit-user-email.model';
import { EditUserEmailService } from '../../services/edit-user-email.service';

@Component({
  selector: 'app-edit-user-email',
  templateUrl: './edit-user-email.page.html',
  styleUrls: ['./edit-user-email.page.scss'],
})
export class EditUserEmailPage implements OnInit {

  translate: TranslateService;
  user = new User();
  authenticationEmailLogin: any = "";
  roleType: string | null;
  changeEmailModel = new editUserEmail();
  emailForm: FormGroup;
  isLoading = false;
  cancelButtonConfig = cancelButtonConfigExport;
  saveButtonConfig = saveButtonConfigExport;
  bsModalRef: BsModalRef;

  constructor(
    private editUsersEmails: EditUserEmailService,
    private fb: FormBuilder,
    private bsModalService: BsModalService,
    private router: Router
  ) {
    this.saveButtonConfig.buttonType = ButtonType.Primary;
    this.cancelButtonConfig.buttonType = ButtonType.Secundary;
    this.saveButtonConfig.text = "Guardar";
    this.cancelButtonConfig.text = "Cancelar";
    
    this.emailForm = this.fb.group({
      oldEmail: ['', [Validators.required]],
      newEmail: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, EmailEqualsValidator('newEmail')]],
    })
  }

  ngOnInit() {
    this.roleType = localStorage.getItem("roleType");
    this.changeEmailModel.userName = localStorage.getItem("userName");
  }

  inputAuthenticationEmailLogin() {
    if (this.emailForm.controls.oldEmail.value.toLowerCase() == localStorage.getItem("userName")!.toLowerCase()) {
      return true
    }
    return false
  }

  confirmMailChange() {
    this.bsModalRef = this.generateInformativeModal(
      '¿Estás seguro de que deseas cambiar tu correo electrónico?',
      'Ten presente que al aceptar, tu sesión se cerrará automáticamente para que ingreses con el nuevo usuario.',
      true,
      false
    )
    this.bsModalRef.content.onClose.subscribe((isConfirmed: any) => {
      if (isConfirmed) {
        if (this.inputAuthenticationEmailLogin()) {
          this.EditUserEmail();
        } else {
          this.equalAuthenticationMailModal();
        }
        //Invocar servicio de change email
      } else {
        //Limpiando campos
        this.authenticationEmailLogin = '';
        this.user = new User();
        this.isLoading = false;
        //this.dialogService.removeAll();
        // $('.close').click();
      }
    })
  }

  equalAuthenticationMailModal() {
    this.bsModalRef = this.generateInformativeModal(
      "Validación de información",
      "El correo electrónico actual no es válido.",
      true,
      true
    )
  }

  EditUserEmail() {
    this.isLoading = true;
    this.changeEmailModel.confirmEmail = this.emailForm.controls.confirmEmail.value;
    this.changeEmailModel.oldEmail = this.emailForm.controls.oldEmail.value;
    this.changeEmailModel.newEmail = this.emailForm.controls.newEmail.value;
    this.editUsersEmails
      .ChangeEmail(this.changeEmailModel)
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.StatusCode === 87) {
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false, true);
            this.bsModalRef.content.onClose.subscribe((isConfirmed: any) => {
              localStorage.clear();
              this.router.navigate(['/onboarding/ini-sesion']);
            })
          } else {
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, true);
          }
        },
        error => this.ErrorRegister(error));
  }

  private ErrorRegister(error: any) {
    this.generateInformativeModal(
      'Inconvenientes con el portal',
      'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.',
      true,
      true
    )
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
