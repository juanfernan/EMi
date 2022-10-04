import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { GlobalServiceVariables } from 'src/app/portal/moduls/medical-centers/models/globalServiceVariables';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';


export interface DeactivationModel {
  title: string;
  nameCompanyCountry: string;
  message: string;
  messageQuestion: string;
  messageSpan: string;
  questionsDeactivateAccount: any;
  cancelButton: string;
  acceptButton: string;
  imageUrl: string;
  onClose: Subject<boolean>;
}

@Component({
  selector: 'app-deactivation-modal',
  templateUrl: './deactivation-modal.page.html',
  styleUrls: ['./deactivation-modal.page.scss']
})

export class DeactivationModalPage implements OnInit {

  configurationButton1 = new ButtonConfiguration();
  configurationButton2 = new ButtonConfiguration();
  title: string;
  nameCompanyCountry: string;
  message: string;
  messageQuestion: string;
  messageSpan: string;
  questionsDeactivateAccount: any;
  cancelButton: string;
  acceptButton: string;
  imageUrl: string;
  onClose: Subject<boolean>;
  imgRoute: string;
  deactivatedQuestion: any;
  selectOtherMotive = false;
  validationButtonGo = false;
  alternateReason: string = '';
  environment: any;

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private globalServiceVariables: GlobalServiceVariables
    ) {
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
  }

  ngOnInit(): void {
    this.onClose = new Subject();
    this.configurationButton1.buttonType = ButtonType.Tertiary;
    this.configurationButton1.text = this.cancelButton;
    this.configurationButton1.width = "150px";
    this.configurationButton2.buttonType = ButtonType.Primary;
    this.configurationButton2.text = this.acceptButton;
    this.configurationButton2.width = "150px";
  }

  closeModal() {
    this.onClose.next(false);
    this.onClose.complete();
    this.bsModalRef.hide();
  }

  confirm() {
    if (this.selectOtherMotive) {
      this.globalServiceVariables.deactivateUserCode = '3';
      this.globalServiceVariables.deactivateUserComment = this.alternateReason;
    }
    this.onClose.next(true);
    this.onClose.complete();
    this.bsModalRef.hide();
  }

  cancel() {
    this.onClose.next(false);
    this.onClose.complete();
    this.bsModalRef.hide();
  }

  onSelectedPastDeactivateQuestion(eventFull: any) {
    const event = eventFull.value;
    this.globalServiceVariables.deactivateUserCode = event;
    if (event == '3') {
      this.selectOtherMotive = true;
    } else {
      this.selectOtherMotive = false;
    }
    if (event === '' || event === "null" || event === '3') {
      this.validationButtonGo = false;
    } else {
      this.validationButtonGo = true;
    }
  }
}
