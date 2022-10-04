import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';
import { DetailListInvoices } from './models/detail-list-invoices';
import { ListInvoices } from './models/list-invoices';
import { ListInvoicesFactures } from './models/list-invoices-factures';
import { MyInvoicesService } from './services/my-invoices.service';

@Component({
  selector: 'app-my-invoices',
  templateUrl: './my-invoices.page.html',
  styleUrls: ['./my-invoices.page.scss'],
})
export class MyInvoicesPage implements OnInit {
  form: FormGroup;
  configurationButton = new ButtonConfiguration();
  _environment: any;
  listFactureService = new ListInvoicesFactures();
  listFactureDetails = new DetailListInvoices();
  statusInvoice: any;
  bsModalRef?: BsModalRef;
  listFactureServices: any[];
  unpaid: string;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private myInvoicesService: MyInvoicesService,
    public modalService: BsModalService,
    private urlDataService: UrlDataService
  ) {
    this.urlDataService.setHeaderNavPortal(['Mi cuenta', 'Mis facturas']);
    this._environment = environment;
    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = "Buscar";
    this.form = this.fb.group({
      from: [{ value: '' }],
      until: [{ value: '' }],
      status: [{ value: '' }],
    })
  }

  ngOnInit(): void {
    this.loadInfoFacture();
  }

  private loadInfoFacture() {
    localStorage.removeItem('anonymousPayInfo')
    this.listFactureService.StartDate = "";
    this.listFactureService.Enddate = "";
    this.listFactureService.IdStatusInvoice = "";
    this.listFactureService.DocumentType = localStorage.getItem("documentType");
    this.listFactureService.Document = localStorage.getItem("document");
    this.getItemsListStatusInvoice();
    this.listInvoiceFacture();
    localStorage.setItem('tokenCreated', 'false');
  }

  //Get Status Facture
  getItemsListStatusInvoice() {
    this.myInvoicesService
      .getListStatusInvoice()
      .subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.statusInvoice = result;
          } else {
            //this.showPagination = false;
            this.showErrorNotificationModal('No se encontró el servicio de estado de facturas, por favor intentalo más tarde');
          }
        },
        error => this.showErrorNotificationModal(error.message)
      );
  }

  showErrorNotificationModal(msg: string) {
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
    this.bsModalRef = this.modalService.show(InformativeModalComponent, initialState);
  }

  //Get List Facture
  listInvoiceFacture() {
    this.isLoading = true;
    this.myInvoicesService
      .getListInvoices(this.listFactureService)
      .subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.myInvoicesService.setListInvoices(result.InvoicesResponse.ListInvoices);
            this.myInvoicesService.getListInvoices$().subscribe(data => {
              this.listFactureServices = data
              this.isLoading = false;
            })
            this.countUnpaidFactures(this.listFactureServices);
            if (this.listFactureServices.length > 0) {
              //this.showPagination = true;
              //this.hiddenResult = true;
            } else {
              //this.showPagination = false;
              //this.hiddenResult = false;
            }
          }
          else {
            this.isLoading = false;
            this.showErrorNotificationModal('No se encontró el servicio de estado de facturas, por favor intentalo más tarde');
          }
        },
        (error: any) => {
          this.isLoading = false;
          this.showErrorNotificationModal(error.message)
        }
      )
  }

  countUnpaidFactures(data: Array<ListInvoices>) {
    const unpaidTotal = data.filter(x => x.State === 'Impaga');
    this.unpaid = unpaidTotal.length.toString();
  }
  
  // search() {
  //   let tmpStartDateNew: any;
  //   let tmpEndDateNew: any;
  //   if (this.form.controls.from.value != "") {
  //     tmpStartDateNew = this.form.controls.from.value;
  //     this.listFactureService.StartDate = this.datePipe.transform(tmpStartDateNew, 'yyyyMMdd');
  //   } else {
  //     this.listFactureService.StartDate = "";
  //   }

  //   if (this.form.controls.until.value != '') {
  //     tmpEndDateNew = this.form.controls.until.value;
  //     this.listFactureService.Enddate = this.datePipe.transform(tmpEndDateNew, 'yyyyMMdd');
  //   } else {
  //     this.listFactureService.Enddate = "";
  //   }

  //   if (this.listFactureService.StartDate != "" && this.listFactureService.Enddate != "") {
  //     if (tmpEndDateNew < tmpStartDateNew) {
  //       this.showErrorNotificationModal('La fecha final debe ser mayor a la inicial.');
  //     }
  //   }
  //   this.listInvoiceFacture();
  // }

}
