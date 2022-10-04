import { Component, Input, OnInit } from '@angular/core';
import { ListInvoices } from '../../models/list-invoices';
import { environment } from 'src/environments/environment';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { MyInvoicesService } from '../../services/my-invoices.service';
import { PaymentForm } from 'src/app/portal/moduls/medical-centers/models/paymentForm.model';
import { ModalDetailFacturePage } from 'src/app/portal/moduls/my-account/my-invoices/components/modal-detail-facture/modal-detail-facture.page'
import { ConfirmCoordination } from 'src/app/portal/moduls/medical-centers/models/ConfirmCoordination.model';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';

declare var SetProperties: any;
declare var PWCheckout: any;

@Component({
  selector: 'app-invoices-grid',
  templateUrl: './invoices-grid.page.html',
  styleUrls: ['./invoices-grid.page.scss'],
})
export class InvoicesGridPage implements OnInit {

  @Input() facturesList: Array<ListInvoices>;

  environment: any;
  coordination = new ConfirmCoordination();
  intervalValidateCoordinationPay: any;
  paymentForm = new PaymentForm();
  isLoading = false;
  bsModalRef: BsModalRef;
  paymentMethodDebitInvoiceCode = environment.paymentMethodDebitInvoiceCode;
  listFactureDetail: any;
  anonymusPayUY: boolean = environment.country === 'uy'

  constructor(
    private bsModalService: BsModalService,
    private myInvoicesService: MyInvoicesService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(environment.country);

    // Aquí se configuran los scripts de pago.
    if (environment.api_siemprepago && environment.ig_payment) {
      // PWCheckout.
      this.load_scripts([environment.api_siemprepago, environment.ig_payment], () => {
      })
    }
   }

  ngOnInit(): void {
  }
  
  showDetail(plan: any) {
    this.getDetailInvoice(plan);
  }

  getDetailInvoice(listFactureService: any) {
    this.isLoading = true;
    this.myInvoicesService
      .getDetailInvoice(listFactureService)
      .subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.isLoading = false;
            this.listFactureDetail = result.DetailInvoicesResponse;
            const initialState: ModalOptions = {
              initialState: {
                serialFacture: this.listFactureDetail.Series,
                factureNumber: this.listFactureDetail.Number,
                starDate: this.listFactureDetail.GeneratedDate,
                endDate: this.listFactureDetail.ExpirationDate,
                valuePay: this.listFactureDetail.Importe,
                balanceFacture: this.listFactureDetail.InvoiceBalance,
                beneficiaries: this.listFactureDetail.Details,
                statusPay: this.listFactureDetail.State,
                paymentMode: this.listFactureDetail.Paymentmode,
                bankCard: this.listFactureDetail.BankCardPayment,
                collectionAddress: this.listFactureDetail.AddressCharge,
                company: this.listFactureDetail.CompanyPayment,
                buttonConfirmText: "PAGAR",
                anonymusEventReturn: this.anonymusPayUY
              }
            };
            this.bsModalRef = this.bsModalService.show(ModalDetailFacturePage, initialState);
            this.bsModalRef.content.onClose
              .subscribe((isConfirmed: any) => {
                if (isConfirmed == true) {
                  this.goToPayCoordination(listFactureService);
                }
              });
          } else {
            this.isLoading = false;
            /*    this.dialogService.addDialog(ModalComponent, {
                 title: 'Servicio: Detalles de factura',
                 message: result.Message,
                 imageUrl: this.config.info.alertImage,
                 buttonConfirmText: "ACEPTAR",
               }, { closeByClickingOutside: true }); */
          }
        },
        error => {
          this.isLoading = false;
          this.ErrorRegister(error)
        });
  }

  // RECURSIVE LOAD SCRIPTS
  load_scripts(urls: any, final_callback: any, index = 0) {
    const that = this;
    if (typeof urls[index + 1] === "undefined") {
      this.load_script(urls[index], final_callback);
    }
    else {
      this.load_script(urls[index], function () {
        that.load_scripts(urls, final_callback, index + 1);
      });
    }
  }

  // LOAD SCRIPT
  load_script(url: string, callback: Function) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.onload = function () { callback(); };
    script.src = url;
    document.head.appendChild(script);
  }

  goToPayCoordination(plan: any) {
    if (plan.State == 'Paga') {
      this.bsModalRef = this.generateInformativeModal('Validación de información',
        `La factura ${plan.Series} - ${plan.Number} ya se encuentra paga.`, true);
    } else {
      this.setProperties(plan);
      PWCheckout.Bind("tokenCreated", this.OnTokenCreated);
      //this.listenReadyToPay()
      const myDiv: any = document.getElementById('PWToken');
      var trxToken = myDiv.value;
      PWCheckout.OpenIframeNormal()
    }
  }

  OnTokenCreated() {
    localStorage.setItem('tokenCreated', 'true');
  }

  setProperties(plan: any) {
    this.paymentForm.form_id = "formCoordinationId";
    this.paymentForm.amount = plan.Amount;
    this.paymentForm.email = localStorage.getItem("userName");
    SetProperties(this.paymentForm);
  }

  /**
  * Método que está pendiente cuando se establezca token para realizar pago.
  *
  * @memberof FacturesGridComponent
  */
  listenReadyToPay() {
    this.intervalValidateCoordinationPay = setInterval(() => {
      var value = localStorage.getItem("tokenCreated");
      if (value === "true") {
        let paymentMethod = {
          PaymentMethodCode: "ONLINE",
          PaymentMethodName: "ONLINE"
        }
        const myDiv: any = document.getElementById('PWToken');
        var trxToken = myDiv.value;
        this.coordination.TrxToken = trxToken;
        //this.payCoordination(paymentMethod);
        this.intervalValidateCoordinationPay = null;
      }
    }, 1000);
  }

  // payCoordination(paymentMethods: any) {
  //   localStorage.setItem('tokenCreated', 'false');
  //   this.coordination.PaymentMethodCode = paymentMethods.PaymentMethodCode;
  //   this.coordination.PaymentMethodName = paymentMethods.PaymentMethodName;
  //   if (this.coordination.PaymentMethodCode != this.paymentMethodDebitInvoiceCode) {
  //     //A los diferentes de débito en factura
  //     this.coordination.Installments = "1";
  //   }
  //   if (this.coordination.Installments === "") {
  //     this.bsModalRef = this.generateInformativeModal('Validación de información', "Seleccione el número de cuotas.", true);
  //     return;
  //   }
  //   this.isLoading = true;
  //   this.myInvoicesService
  //     .payCoordination(this.coordination)
  //     .subscribe(
  //       (result: any) => {
  //         this.isLoading = false;
  //         if (result.StatusCode === 0) {
  //           this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false);
  //           this.coordination.Recommendations = result.Recommendations === "" ? "No se encontraron recomendaciones." : result.Recommendations;
  //           // this.VisibleTwo();
  //           // this.hiddenRecommendations = false;
  //           // this.hiddenButtons = true;
  //         } else {
  //           this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true);
  //         }
  //         localStorage.setItem('tokenCreated', 'false');
  //       },
  //       (error: any) => this.ErrorRegister(error));
  // }

  private ErrorRegister(error: any) {
    localStorage.setItem('tokenCreated', 'false');
    this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true);
    this.isLoading = false;
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
