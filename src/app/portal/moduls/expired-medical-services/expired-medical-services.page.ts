import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UserLogin } from 'src/app/shared/models/user-login';
import { environment } from 'src/environments/environment';
import { restoreButtonConfigExport } from './configs/filterRestoreButtonConfig';
import { ExpiredMedicalServicesService } from './services/expired-medical-services.service';

@Component({
  selector: 'app-expired-medical-services',
  templateUrl: './expired-medical-services.page.html',
  styleUrls: ['./expired-medical-services.page.scss'],
})
export class ExpiredMedicalServicesPage implements OnInit {

  translate: TranslateService;
  patient: string;
  status: string;
  affiliateType: string | null;
  userLogin = new UserLogin();
  toShowFilterPatient: boolean = true;
  p: number = 1;
  hiddenResult: boolean = true;
  disabledStateFilter: boolean = true;
  showPagination: boolean = false;
  expiredProducts: any;
  expiredProductsFilter: any;
  resultBeneficiaries: any;
  isLoading: boolean = false;
  restoreButtonConfig = restoreButtonConfigExport;
  bsModalRef: BsModalRef;
  searchForm: FormGroup;
  imgRoute: string;

  constructor(
    private expiredMedicalServicesService: ExpiredMedicalServicesService,
    private router: Router,
    translate: TranslateService,
    private bsModalService: BsModalService
  ) {
    this.translate = translate;
    translate.setDefaultLang(environment.country);
    this.affiliateType = localStorage.getItem("affiliateType");
    this.userLogin.documentType = localStorage.getItem("documentType");
    this.userLogin.document = localStorage.getItem("document");

    this.imgRoute = environment.imagesRoute;
  }

  ngOnInit() {
    this.resetForm();
    this.validateAffiliateType();
  }

  resetForm() {
    this.patient = '';
    this.status = '';
    this.hiddenResult = true;
    this.disabledStateFilter = true;
  }

  pageChanged(event: any) {
    this.p = event;
    //$(window).scrollTop(0);
  }

  validateAffiliateType() {
    //AfiliateTypes: 1: Responsable de pago, 2: Beneficiario
    if (this.affiliateType == '1') {
      this.toShowFilterPatient = true;
      this.getBeneficiaries();
    } else if (this.affiliateType == '2') {
      this.toShowFilterPatient = false;
      this.getExpiredProducts(this.userLogin.documentType, this.userLogin.document);
    }
  }

  getBeneficiaries() {
    this.isLoading = true;
    this.expiredMedicalServicesService
      .getBeneficiaries(this.userLogin)
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.Beneficiaries.length > 0) {
            this.resultBeneficiaries = result.Beneficiaries;
          } else {
            this.bsModalRef = this.generateInformativeModal('Beneficiarios', 'No se encontraron beneficiarios', true, true);
            this.bsModalRef.content.onClose.subscribe((result: boolean) => {
              this.router.navigate(['/portal/home'], { replaceUrl: true })
            })
          }
        },
        (error: any) => this.ErrorRegister(error));
  }

  filterBy(type: any, eventFull: any) {
    const event = eventFull.target.value;
    if (event) {
      if (type == 'patient') {
        this.status = '';
        let beneficiary = this.resultBeneficiaries.filter((result: any) => result.Document == event)[0];
        this.getExpiredProducts(beneficiary.DocumentType, beneficiary.Document);
      } else {
        this.expiredProductsFilter = this.expiredProducts.filter((product: any) => product.Status == event);
      }
    }
  }

  getExpiredProducts(DocumentType: any, Document: any) {
    this.isLoading = true;
    this.expiredMedicalServicesService
      .getExpiredProducts(DocumentType, Document)
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.StatusCode === 0) {
            if (result.ExpiredProducts.Products) {
              this.expiredProducts = result.ExpiredProducts.Products;
              this.expiredProductsFilter = this.expiredProducts;
              this.showPagination = true;
              this.hiddenResult = true;
              this.disabledStateFilter = false;
            } else {
              this.expiredProducts = [];
              this.expiredProductsFilter = [];
              this.showPagination = false;
              this.hiddenResult = false;
              this.disabledStateFilter = true;
            }
          } else {
            this.showPagination = false;
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, true);
          }
        },
        (error: any) => this.ErrorRegister(error));
  }

  restoreData() {
    this.resetForm();
    if (this.affiliateType == '1') {
      this.expiredProductsFilter = [];
    } else if (this.affiliateType == '2') {
      this.expiredProductsFilter = this.expiredProducts;
    }
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

  coordinateEvent(event: any, Document: any, CellPhone: any, Email: any) {
    let document = btoa(Document);
    let cellPhone = btoa(CellPhone);
    let email = btoa(Email);
    var paramsUrl = { document: document, cellPhone: cellPhone, email: email }
    if (event == "1") {
      this.router.navigate(['/portal/admin/coordinations'], { queryParams: paramsUrl });
    } else {
      this.bsModalRef = this.generateInformativeModal('Información', 'Concurre al Centro Médico de tu preferencia en el horario estipulado. O comunícate con nuestro chat de Servicio al Cliente', false, true);
      /* TODO integrar la apertura del chat en este modal
      this.dialogService.addDialog(ModalComponent, {
        title: 'Información',
        message: `Concurre al Centro Médico de tu preferencia en el horario estipulado. O comunícate con nuestro chat de Servicio al Cliente`,
        openChatCustomerServiceMsg: "aquí.",
        imageUrl: this.config.info.checkImage,
        buttonConfirmText: "Cerrar"
      }, { closeByClickingOutside: true });*/
    }
  }

  private ErrorRegister(error: any) {
    this.isLoading = false;
    this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true, true);
    /* TODO
    agregar Sentry */
  }

}
