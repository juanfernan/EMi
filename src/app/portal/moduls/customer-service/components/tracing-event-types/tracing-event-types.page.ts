import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TracingeventtypesService } from './services/tracingeventtypes.service';
import { environment } from 'src/environments/environment';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';

@Component({
  selector: 'app-tracing-event-types',
  templateUrl: './tracing-event-types.page.html',
  styleUrls: ['./tracing-event-types.page.scss'],
})
export class TracingEventTypesPage implements OnInit {

  @Input() tracingEventTypesItialization: boolean = false;

  translate: TranslateService;
  getEventStatus: any = [];
  country:string;
  bsModalRef: BsModalRef;
  p: number = 1;
  isLoading: boolean = false;
  //country = this.config.info.country;
  showPagination: boolean = false;
  applicantDocumentType: string | null;
  applicantDocument: string | null;
  environment: any;

  constructor(
    private tracingeventtypesService: TracingeventtypesService,
    private bsModalService: BsModalService,
  ) {
    this.environment = environment;
    this.country = environment.country;
   }

  ngOnInit() {
    this.applicantDocumentType = localStorage.getItem("documentType");
    this.applicantDocument = localStorage.getItem("document");
    if (this.tracingEventTypesItialization) {
      this.postTracingPqrs(this.applicantDocumentType, this.applicantDocument);
    }
  }

  pageChanged(event: any) {
    this.p = event;
  }

  postTracingPqrs(applicantDocumentType:any, applicantDocument:any) {
    this.isLoading = true;
    this.tracingeventtypesService
      .postTracingPqrs(applicantDocumentType, applicantDocument)
      .subscribe(
        result => {
          this.tracingEventTypesItialization = false;
          if (result.StatusCode === 0) {
            this.showPagination = true;
            this.isLoading = false;
            this.getEventStatus = result.tracingPqrs;
          }
          else {
            this.isLoading = false;
            this.showPagination = false;
            this.bsModalRef = this.generateInformativeModal(result.Title,
              result.Message,false, false);
          }
        },
        error => {
          this.isLoading = false;
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

  generateInformativeModal(subTitle: string, description: string, isError: boolean, twoButtons: boolean) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: !twoButtons,
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
