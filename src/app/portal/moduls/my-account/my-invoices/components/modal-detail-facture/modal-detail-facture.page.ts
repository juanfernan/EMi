import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { Subject } from 'rxjs';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { environment } from 'src/environments/environment';

export interface OptionsModel {
  serialFacture: string;
  factureNumber: string;
  starDate: string;
  endDate: string;
  valuePay: string;
  balanceFacture: string;
  beneficiaries: string ;
  statusPay: string;
  paymentMode: string;
  //Validation paymentMode
  bankCard: string;
  collectionAddress: string;
  company: string;
  buttonConfirmText: string;
  anonymusEventReturn: boolean;
}

@Component({
  selector: 'app-modal-detail-facture',
  templateUrl: './modal-detail-facture.page.html',
  styleUrls: ['./modal-detail-facture.page.scss']
})

export class ModalDetailFacturePage {

  configurationButton = new ButtonConfiguration();
  configurationButtonCancel = new ButtonConfiguration();
  //textButton: string;
  public onClose: Subject<boolean>;
  country: string;
  serialFacture: string;
  factureNumber: string;
  starDate: string;
  endDate: string;
  valuePay: string;
  balanceFacture: string;
  beneficiaries: any;
  statusPay: string;
  paymentMode: string;
  company: string;
  anonymusEventReturn: boolean
  //Validation paymentMode
  bankCard: string;
  collectionAddress: string;
  buttonConfirmText: string;
  environment: any;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private bsModalRef: BsModalRef
  ) {
    if (this.paymentMode == 'Debito') {
      this.paymentMode = 'Debito';
    }
    this.environment = environment;
    this.country = environment.country;
  }

  ngOnInit(): void {
    this.onClose = new Subject();
    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = this.buttonConfirmText;
    this.configurationButtonCancel.buttonType = ButtonType.Primary;
    this.configurationButtonCancel.text = 'Cerrar';
  }

  confirm() {
    this.onClose.next(true);
    this.onClose.complete();
    this.bsModalRef.hide();
  }

  cancel() {
    this.onClose.next(false);
    this.onClose.complete();
    this.bsModalRef.hide();
  }

}
