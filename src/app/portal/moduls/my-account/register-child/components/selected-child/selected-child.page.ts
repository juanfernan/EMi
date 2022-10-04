import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { addAfiliateButtonConfigExport } from '../../configs/add-afiliate-nutton-config';
import { SelectedChildService } from '../../services/selected-child.service';
import { PortalCommonService } from 'src/app/portal/moduls/service-solicitud/services/portal-common.service';

@Component({
  selector: 'app-selected-child',
  templateUrl: './selected-child.page.html',
  styleUrls: ['./selected-child.page.scss'],
})
export class SelectedChildPage implements OnInit {

  translate: TranslateService;
  myChildren: any = [];
  registerId: any;
  idDocument: string = '';
  @Output() childChange = new EventEmitter();
  legendChild: string = '';
  addAfiliateButtonConfig = addAfiliateButtonConfigExport;
  isLoading: boolean = false;
  bsModalRef: BsModalRef;

  constructor(translate: TranslateService, 
    private commonService: PortalCommonService, 
    private route: ActivatedRoute,
    private selectedChildService: SelectedChildService, 
    private bsModalService: BsModalService
  ) {
    this.translate = translate;

  }

  ngOnInit() {
    this.registerId = localStorage.getItem("registerId");
    this.getchildren();
    this.translate.get('PORTAL.REGISTER-CHILD.Subtitle').subscribe(message => {
      this.legendChild = message;
    });
  }

  getchildren() {
    this.isLoading = true;
    this.selectedChildService
      .getYoungerEighteen(this.registerId)
      .subscribe(
        (result: any) => {
          this.myChildren = result.Members;
          this.isLoading = false;
        },
        (error: any) => this.ErrorRegister(error)
      );
  }

  private ErrorRegister(error: any) {
    this.isLoading = false;
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: 'Inconvenientes con el portal',
        description: 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.',
        onlyButtonConfirm: true,
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
    this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
  }

  onChildChange(event: any) {
    var filteredchild = this.myChildren.find(function (el: any) {
      return el.Document === event;
    });
    this.childChange.emit(filteredchild);
  }

}
