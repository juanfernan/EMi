import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from '../../models/button-configuration';
import { environment } from 'src/environments/environment';

export interface InformativeModel {
  iconHeader: string;
  visibleButtonClose: boolean;
  subTitle: any;
  description: any;
  onlyButtonConfirm: boolean
  textButton: string;
  textButton1: string;
  textButton2: string;
  onClose: Subject<boolean>;
}

@Component({
  selector: 'app-informative-modal',
  templateUrl: './informative-modal.component.html',
  styleUrls: ['./informative-modal.component.scss']
})

export class InformativeModalComponent {
  configurationButton = new ButtonConfiguration();
  configurationButton1 = new ButtonConfiguration();
  configurationButton2 = new ButtonConfiguration();
  
  public onClose: Subject<boolean>;
  iconHeader: string;
  visibleButtonClose: boolean;
  imgRoute: string;
  environment: any;
  subTitle: string;
  description: string;
  onlyButtonConfirm: boolean
  textButton: string;
  textButton1: string;
  textButton2: string;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private bsModalRef: BsModalRef
  ) {
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
  }

  ngOnInit(): void {
    this.onClose = new Subject();
    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = this.textButton;
    //this.configurationButton.width = "150px";

    this.configurationButton1.buttonType = ButtonType.Primary;
    this.configurationButton1.text = this.textButton1;
    //this.configurationButton1.width = "100px";

    this.configurationButton2.buttonType = ButtonType.Primary;
    this.configurationButton2.text = this.textButton2;
    //this.configurationButton2.width = "100px";
  }

  closeModal() {
    this.bsModalRef.hide();
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
