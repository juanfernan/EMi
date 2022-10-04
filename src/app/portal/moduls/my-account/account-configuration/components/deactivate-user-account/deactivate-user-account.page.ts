import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { GlobalServiceVariables } from 'src/app/portal/moduls/medical-centers/models/globalServiceVariables';
import { cancelButtonConfigExport } from 'src/app/portal/moduls/scheduled-services/configs/cancelButtonConfig';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { environment } from 'src/environments/environment';
import { acceptButtonConfigExport } from '../../configs/acceptButtonConfig';
import { deactivateUserAccountModel } from '../../models/deactivateUserAccount.model';
import { DeactivateUserAccountService } from '../../services/deactivate-user-account.service';
import { DeactivationModalPage } from '../deactivation-modal/deactivation-modal.page';

@Component({
  selector: 'app-deactivate-user-account',
  templateUrl: './deactivate-user-account.page.html',
  styleUrls: ['./deactivate-user-account.page.scss'],
})
export class DeactivateUserAccountPage implements OnInit {

  translate: TranslateService;
  country: string = environment.country;
  questionsDeactivateAccount: any = [];
  deactivateUsersAccountModel = new deactivateUserAccountModel();
  cancelButtonConfig = cancelButtonConfigExport;
  acceptButtonConfig = acceptButtonConfigExport;
  isLoading = false;
  bsModalRef: BsModalRef;

  constructor(
    private bsModalService: BsModalService,
    private deactivateUserAccountService: DeactivateUserAccountService,
    private globalServiceVariables: GlobalServiceVariables, 
    private router: Router
  ) {
    this.acceptButtonConfig.buttonType = ButtonType.Primary;
    this.cancelButtonConfig.buttonType = ButtonType.Secundary;
    this.acceptButtonConfig.text = "Guardar";
    this.cancelButtonConfig.text = "Cancelar";
   }

  ngOnInit() {
    this.listQuestionsDeactivateAccount();
    this.deactivateUsersAccountModel.UserAccount = localStorage.getItem("userName");
  }

  acceptUserDeactivateModal() {
    let nameCompanyCountry: any;
    if (this.country === 'co') {
      nameCompanyCountry = " emi."
    } else {
      nameCompanyCountry = " ucm."
    }
    this.bsModalRef = this.bsModalService.show(DeactivationModalPage, {
      initialState: {
        title: "Con esta acción sólo estás inactivando tu cuenta de acceso al portal para clientes de",
        nameCompanyCountry: nameCompanyCountry,
        message: "Sin embargo, seguirás teniendo acceso a todos los servicios contratados con nosotros. ",
        messageQuestion: "¿Estás seguro de que deseas inactivar tu usuario de acceso al portal? Cuéntanos por qué:",
        messageSpan: "Es obligatorio que respondas esta pregunta para desactivar tu cuenta.",
        questionsDeactivateAccount: this.questionsDeactivateAccount,
        cancelButton: "Cancelar",
        acceptButton: "Aceptar",
        imageUrl: environment.checkImage
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: false

    })
    this.bsModalRef.content.onClose.subscribe((result: any) => {
      if (result) {
        this.deactivateUsersAccountModel.Code = this.globalServiceVariables.deactivateUserCode;
        this.deactivateUsersAccountModel.Comment = "";
        if (this.deactivateUsersAccountModel.Code === "3") {
          this.deactivateUsersAccountModel.Comment = this.globalServiceVariables.deactivateUserComment;
        }
        this.DeactivateUserAccount();
      }
    })
  }

  listQuestionsDeactivateAccount() {
    this.isLoading = true;
    this.deactivateUserAccountService.GetDeactivationType()
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.StatusCode === 0) {
            this.questionsDeactivateAccount = result.DataList;
          } else {
            this.generateInformativeModal(
              result.Title, result.Message, true, true
            )
          }
        },
        (error: any) => this.ErrorRegister(error));
  }

  DeactivateUserAccount() {
    this.isLoading = true;
    this.deactivateUserAccountService.GetDeactivateUserAccount(this.deactivateUsersAccountModel)
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.StatusCode === 0) {
            localStorage.clear();
            this.router.navigate(['/login']);
          } else {
            this.isLoading = false;
            this.bsModalRef = this.generateInformativeModal(
              result.Title, result.Message, true, true
            );
          }
        },
        error => this.ErrorRegister(error));
  }

  private ErrorRegister(error: any) {
    this.isLoading = false;
    this.bsModalRef = this.generateInformativeModal(
      'Inconvenientes con el portal',
      'En este momento no podemos procesar tu solicitud. Por favor, inténtalo más tarde.',
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
