import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TermsService } from 'src/app/public/services/terms.service';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UrlDataService } from 'src/app/shared/services/url-data-service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  htmlString: string
  tagCode: string;
  bsModalRef: BsModalRef;

  constructor(
    private urlDataService: UrlDataService,    
    private bsModalService: BsModalService,
    private termsService: TermsService
  ) {
    this.urlDataService.setHeaderNavPortal(['Servicios al Cliente', 'Términos y condiciones de uso']);
   }

  ngOnInit() {
    let roleType = localStorage.getItem("roleType");
    this.tagCode = roleType != "2" ? "TYCC" : "TYCE";
    this.getTerms();
  }

  getTerms() {
    this.termsService
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
