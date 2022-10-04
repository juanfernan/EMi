import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { PoliciesService } from './services/policies.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {

  htmlString: string;
  tagCode: string;
  bsModalRef: BsModalRef;
  
  constructor(
    private policiesService: PoliciesService ,
    private urlDataService: UrlDataService,
    private bsModalService: BsModalService
  ) { 
    this.urlDataService.setHeaderNavPortal(['Servicios al Cliente', 'Política de tratamiento de datos']);
  }

  ngOnInit() {
    let roleType = localStorage.getItem("roleType");
    this.tagCode = roleType != "2" ? "PPC" : "PPE";
    this.getPolicies();
  }

  getPolicies() {
    this.policiesService
      .getLegalContent(this.tagCode)
      .subscribe(
        result => {
          this.htmlString = result.LegalContent.Content;
        },
        error => {
          this.showErrorNotificationModal(error.message);
        });
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
    this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
  }

}
