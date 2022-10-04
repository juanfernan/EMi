import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { PortalCommonService } from '../../../service-solicitud/services/portal-common.service';
import { EventTypesClass } from '../options-event-types/models/eventTypes';
import { RequestEventTypesService } from './services/request-event-types.service';

@Component({
  selector: 'app-request-event-types',
  templateUrl: './request-event-types.page.html',
  styleUrls: ['./request-event-types.page.scss'],
})
export class RequestEventTypesPage implements OnInit {

  translate: TranslateService;
  pattern: string;
  eventTypesClass = new EventTypesClass();
  eventTypesList: any = [];
  checkCustomerIsActiveInfo: any = [];
  enterDataOfTheThird: boolean = false;
  documentTypes: any = [];
  continueFormProcess: boolean = false;
  stepOneInformation: any;
  subtitle: string = "";
  bsModalRef: BsModalRef;
  isLoading: boolean = false;
  formRequest: FormGroup;

  configurationButtonSearch = new ButtonConfiguration();
  buttonSearchText: string;

  constructor(
    translate: TranslateService,
    private requestEventTypesService: RequestEventTypesService,
    private portalCommonServiceService: PortalCommonService,
    private bsModalService: BsModalService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.translate = translate;
    this.formRequest = this.fb.group({
      eventType: [{ value: '', disabled: false }, Validators.required],
      subjectOfTheEvent: [{ value: '', disabled: false }, Validators.required],
      thirdDocumentType: [{ value: '', disabled: false }, Validators.required],
      thirdDocument: [{ value: '', disabled: false },
      Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]
    })

    this.translate.get('PORTAL.CUSTOMER-SERVICE.GRATITUDE.ButtonSearch').subscribe(resp => {
      this.buttonSearchText = resp;
    });
    this.configurationButtonSearch.buttonType = ButtonType.Primary;
    this.configurationButtonSearch.text = this.buttonSearchText;
   }

  ngOnInit() {
    this.classModelInitialization();
    this.getEventTypes();
    this.translate.get('PORTAL.CUSTOMER-SERVICE.GRATITUDE.TitleInformation').subscribe(message => {
      this.subtitle = message;
    });
  }

  changeEvent() {
    this.eventTypesClass.EventType = this.formRequest.controls.eventType.value();
  }

  continueFormProcessInfo(event: any) {
    if (event.continueFormProcess === false) {
      this.backSearchSection();
    }
  }

  searchThirdPartyStatus() {
    this.checkIfTheCustomerIsActive('02');
  }

  onChangeSubjectOfTheEvent(event: string) {
    if (event) {
      if (event == '01') {
        //Si es uno mismo valida directamente si está activo
        this.enterDataOfTheThird = false;
        this.checkIfTheCustomerIsActive(event);

      } else {
        //Si es un tercero, primero el usuario debe digitar los datos de este y luego buscar si es activo
        this.enterDataOfTheThird = true;
        this.getDocumentTypes();
      }
    } else {
      this.enterDataOfTheThird = false;
    }
  }

  getDocumentTypes() {
    this.requestEventTypesService
      .getDocumentTypes('DataLists/GetDocumentTypes')
      .subscribe(
        result => {
          this.documentTypes = result.DataList;
        },
        error => console.log(error));
  }

  checkIfTheCustomerIsActive(subjectOfTheEvent: string) {
    //Parametros obtenidos en los formularios de este paso 1 enviados por input al formulario siguiente.
    var thirdDocumentType: string | null;
    var thirdDocument: string | null;
    if (subjectOfTheEvent == '01') {
      thirdDocumentType = this.eventTypesClass.ApplicantDocumentType;
      thirdDocument = this.eventTypesClass.ApplicantDocument;
      this.postValidateActive(
        this.eventTypesClass.ApplicantDocumentType,
        this.eventTypesClass.ApplicantDocument,
        thirdDocumentType,
        thirdDocument
      );
    } else {
      thirdDocumentType = this.eventTypesClass.ThirdDocumentType;
      thirdDocument = this.eventTypesClass.ThirdDocument
      this.postValidateActive(
        this.eventTypesClass.ThirdDocumentType,
        this.eventTypesClass.ThirdDocument,
        thirdDocumentType,
        thirdDocument
      );
    }
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

  backSearchSectionConfirm() {
    this.bsModalRef = this.generateInformativeModal('¿Deseas regresar a solicitar un nuevo tipo de evento?',
      'Se perderá toda la información proporcionada en este formulario.', true, true);
    this.bsModalRef.content.onClose.subscribe((accept: boolean) => {
      accept ? this.backSearchSection() : null;
    })
  }

  backSearchSection() {
    this.enterDataOfTheThird = false;
    this.eventTypesClass = new EventTypesClass();
    this.continueFormProcess = false;
    this.classModelInitialization();
  }

  postValidateActive(documentType: any, document: any, thirdDocumentType: any, thirdDocument: any) {
    this.isLoading = true;
    this.requestEventTypesService
      .postValidateActive(documentType, document)
      .subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.checkCustomerIsActiveInfo = result.pqrs;
            //Valida si continúa el proceso.
            this.stepOneInformation = {
              eventType: this.eventTypesClass.EventType,
              subjectOfTheEvent: this.eventTypesClass.SubjectOfTheEvent,
              ApplicantDocumentType: this.eventTypesClass.ApplicantDocumentType,
              ApplicantDocument: this.eventTypesClass.ApplicantDocument,
              ThirdDocumentType: thirdDocumentType,
              ThirdDocument: thirdDocument,
              checkCustomerIsActiveInfo: this.checkCustomerIsActiveInfo
            };
            if (this.checkCustomerIsActiveInfo.ActiveUser === true) {
              this.isLoading = false;
              this.continueFormProcess = true;
            } else {
              this.continueFormProcess = false;
              this.bsModalRef = this.generateInformativeModal(result.Title,
                this.checkCustomerIsActiveInfo.Message, true, false);
            }
            this.isLoading = false;
          }
          else {
            this.bsModalRef = this.generateInformativeModal(result.Title,
              result.Message, true, false);
              this.isLoading = false;
          }
        },
        // TODO falta mostrar el error
        error => console.log(error));
  }

  classModelInitialization() {
    this.eventTypesClass.EventType = '';
    this.eventTypesClass.SubjectOfTheEvent = '';
    this.eventTypesClass.ThirdDocumentType = '';
    this.eventTypesClass.ThirdDocument = '';
    this.eventTypesClass.ApplicantDocumentType = localStorage.getItem("documentType");
    this.eventTypesClass.ApplicantDocument = localStorage.getItem("document");
  }

  getEventTypes() {
    this.requestEventTypesService
      .getEventType()
      .subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.eventTypesList = result.DataList;
          }
        },
        // TODO falta mostrar el error
        error => console.log(error));
  }

}
