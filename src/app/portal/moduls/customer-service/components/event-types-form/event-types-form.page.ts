import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';
import { EventTypesClass } from '../options-event-types/models/eventTypes';
import { EventtypesformService } from './services/eventtypesform.service';

@Component({
  selector: 'app-event-types-form',
  templateUrl: './event-types-form.page.html',
  styleUrls: ['./event-types-form.page.scss'],
})
export class EventTypesFormPage implements OnInit {

  @Output() continueFormProcess = new EventEmitter<any>();
  @Input() stepOneInformation: any;

  translate: TranslateService;
  country: string;
  eventTypesClass = new EventTypesClass();
  areasRelatedToTheEvent: any = [];
  reasonsForReimbursement: any = [];
  patternNamesOfficial: any;
  eventDate: string;
  currentDate = new Date();
  departments: any = [];
  cities: any = [];
  //DocumentFiles
  fileSizeAllowMB: number = 2;
  allowedExtensionsFileUpload = ["pdf", "png", "jpeg"];
  typeErrorFile: string = "";
  disabledInputFile: boolean = false;
  multipleFiles: any = [];
  viewSelectedFiles: boolean = false;
  buttonNameFile: string = "VER DETALLES";
  viewMessagesInformation: boolean = false;
  viewMessageInformationId: string;
  applicant: string;
  termsAndConditions: string;
  environment: any;

  bsModalRef: BsModalRef;
  //charCountDown: number = 0;

  eventCommentsMaxChar:number=1000;
  eventCommentsMinChar:number=40;
  formEventType: FormGroup;

  configurationButtonSend = new ButtonConfiguration();
  buttonSendText: string;

  constructor(
    private eventtypesformService: EventtypesformService,
    private bsModalService: BsModalService,
    private fb: FormBuilder,
    translate: TranslateService
  ) {
    this.translate = translate;
    this.environment = environment;
    this.formEventType = this.fb.group({
      eventdate: [{ value: '' }, Validators.required],
      relatedAreas: [{ value: '' }, Validators.required],
      namesOfficials: [{ value: '' }, Validators.pattern('^[a-zA-Z \-\']+')],
      eventComments: ['', Validators.required],
      reasonsForReimbursement: ['', Validators.required]
    })

    this.translate.get('PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.SendBtn').subscribe(resp => {
      this.buttonSendText = resp;
    });

    this.configurationButtonSend.buttonType = ButtonType.Primary;
    this.configurationButtonSend.text = this.buttonSendText;
    this.country = environment.country;
   }

  ngOnInit() {
    this.formEventType.controls.namesOfficials.setValue('');
    this.patternNamesOfficial = /^([a-z ñáéíóú]{1,40})$/i;

    this.eventTypesClass.EventType = this.stepOneInformation.eventType;
    this.eventTypesClass.SubjectOfTheEvent = this.stepOneInformation.subjectOfTheEvent;
    this.eventTypesClass.ApplicantDocumentType = this.stepOneInformation.ApplicantDocumentType;
    this.eventTypesClass.ApplicantDocument = this.stepOneInformation.ApplicantDocument;
    this.eventTypesClass.ThirdDocumentType = this.stepOneInformation.ThirdDocumentType;
    this.eventTypesClass.ThirdDocument = this.stepOneInformation.ThirdDocument;
    //Validando si tiene cuenta bancaria o no/otro tipo
    this.eventTypesClass.BankAccountUser = this.stepOneInformation.checkCustomerIsActiveInfo.BankAccountUser;
    //Inicializando valores del modelo.
    this.eventTypesClass.RelatedArea = '';
    this.eventTypesClass.NamesOfficial = '';
    this.eventDate = '';
    this.eventTypesClass.EventDate = '';
    this.eventTypesClass.EventComment = '';
    this.eventTypesClass.AcceptTermsAndConditions = false;
    this.eventTypesClass.ReasonsForReimbursement = '';
    this.eventTypesClass.SendFileThanksAndCongratulations = '';
    this.eventTypesClass.SendFilesComplaintsAndClaims = '';
    this.eventTypesClass.SendBeneficiaryDeathCertificate = '';
    this.eventTypesClass.SendFileBankAccount = '';
    this.eventTypesClass.SendFileTitularDeathCertificate = '';
    this.applicant = ''; //local no se envía al servicio final, para seleccion cónyuge o hijo
    this.eventTypesClass.SendFilesCivilRegistrationMarriage = '';
    this.eventTypesClass.SendFileBirthCertificateSon = '';
    this.eventTypesClass.SendFileSpouseDeathCertificate = '';
    this.eventTypesClass.SendFileExtraJudgmentStatement = '';
    this.eventTypesClass.SendFileBankAccountCertificate = '';
    this.eventTypesClass.SendFileBankStatementOrRemovablePayroll = '';

    this.getAreasRelatedToTheEvent();
    this.getDepartments();
    //Reemplazo esta funcion por *ngIf="eventTypesClass.EventComment.length==0
    //this.characterCountDown(); 

    if (this.stepOneInformation.eventType == '2') {
      this.getReasonsForReimbursement();
    }
    this.getTermsConditions();
    //Enviando información de departamento y ciudad por debajo para Uruguay
    if (this.country === 'uy') {
      this.eventTypesClass.EventCodeDepartment = this.stepOneInformation.checkCustomerIsActiveInfo.CodeDepartment;
      this.eventTypesClass.EventCodeCity = this.stepOneInformation.checkCustomerIsActiveInfo.CodeCity;
    } else {
      this.eventTypesClass.EventCodeDepartment = '';
      this.eventTypesClass.EventCodeCity = '';
    }
  }

  getFormatedDate(date: Date) {
    if (date) {
      return `${date.getFullYear()}${this.addZeroToOneDigitNumbers(date.getMonth() + 1)}${this.addZeroToOneDigitNumbers(date.getDate())}`;
    }
    return "";
  }

  addZeroToOneDigitNumbers(number: number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }

  //Información de los archivos guardados.
  inputFileEvent(file: any) {
    if (file.error) {
      switch (file.keyword) {
        case "TANKS_AND_CONGRATULATIONS":
          this.eventTypesClass.SendFileThanksAndCongratulations = '';
          break;
        case "ACKNOWLEDGMENTS_AND_CLAIMS":
          this.eventTypesClass.SendFilesComplaintsAndClaims = '';
          break;
        case "BENEFICIARYS_DEATH":
          this.eventTypesClass.SendBeneficiaryDeathCertificate = '';
          break;
        case "BANK_ACCOUNT":
          this.eventTypesClass.SendFileBankAccount = '';
          break;
        case "TITULAR_DEATH":
          this.eventTypesClass.SendFileTitularDeathCertificate = '';
          break;
        case "CERTIFICATE_SPOUSE":
          this.eventTypesClass.SendFilesCivilRegistrationMarriage = '';
          break;
        case "CERTIFICATE_BIRTH_SON":
          this.eventTypesClass.SendFileBirthCertificateSon = '';
          break;
        case "SPOUSE_DEATH":
          this.eventTypesClass.SendFileSpouseDeathCertificate = '';
          break;
        case "EXTRA_JUDGMENT_STATEMENT":
          this.eventTypesClass.SendFileExtraJudgmentStatement = '';
          break;
        case "BANK_ACCOUNT_CERTIFICATE":
          this.eventTypesClass.SendFileBankAccountCertificate = '';
          break;
        case "BANK_STATEMENT_OR_REMOVABLE_PAYROLL":
          this.eventTypesClass.SendFileBankStatementOrRemovablePayroll = '';
          break;
      }
      // No cumplió la validación
      switch (file.error) {
        case "WRONG_SIZE":
          this.bsModalRef = this.generateInformativeModal(`Error:`, `El tamaño máximo permitido es de: ${this.fileSizeAllowMB} "MB."`, true, false);
          // this.alert.warn(`Error: El tamaño máximo permitido es de: ${this.fileSizeAllowMB} "MB."`);
          break;
        case "WRONG_EXT":
          // this.alert.warn(`Error: Las extenciones permitidas son: ${this.allowedExtensionsFileUpload.join(", ")}`);
          this.bsModalRef = this.generateInformativeModal(`Error:`, `El tamaño máximo permitido es de: ${this.fileSizeAllowMB} "MB."`, true, false);
          break;
      }
    }
    else if (file && file.name && file.extension && file.base64 && file.keyword) {
      //Llenando campos del File especifico.
      this.typeErrorFile = "";
      this.disabledInputFile = false;
      let resultFile = [{ Name: file.name, Extension: file.extension, File: file.base64 }];

      switch (file.keyword) {
        case "TANKS_AND_CONGRATULATIONS":
          this.disabledInputFile = false;
          this.eventTypesClass.SendFileThanksAndCongratulations = resultFile;
          break;
        case "ACKNOWLEDGMENTS_AND_CLAIMS":
          this.multipleFiles.push({ name: file.name, extension: file.extension, file: file.base64 });
          this.eventTypesClass.SendFilesComplaintsAndClaims = this.multipleFiles;
          if (this.multipleFiles.length == 3) {
            this.disabledInputFile = true;
          }
          break;
        case "BENEFICIARYS_DEATH":
          this.disabledInputFile = false;
          this.eventTypesClass.SendBeneficiaryDeathCertificate = resultFile;
          break;
        case "BANK_ACCOUNT":
          this.disabledInputFile = false;
          this.eventTypesClass.SendFileBankAccount = resultFile;
          break;
        case "TITULAR_DEATH":
          this.disabledInputFile = false;
          this.eventTypesClass.SendFileTitularDeathCertificate = resultFile;
          break;
        case "CERTIFICATE_SPOUSE":
          this.disabledInputFile = false;
          this.eventTypesClass.SendFilesCivilRegistrationMarriage = resultFile;
          break;
        case "CERTIFICATE_BIRTH_SON":
          this.eventTypesClass.SendFileBirthCertificateSon = resultFile;
          break;
        case "SPOUSE_DEATH":
          this.eventTypesClass.SendFileSpouseDeathCertificate = resultFile;
          break;
        case "EXTRA_JUDGMENT_STATEMENT":
          this.eventTypesClass.SendFileExtraJudgmentStatement = resultFile;
          break;
        case "BANK_ACCOUNT_CERTIFICATE":
          this.eventTypesClass.SendFileBankAccountCertificate = resultFile;
          break;
        case "BANK_STATEMENT_OR_REMOVABLE_PAYROLL":
          this.eventTypesClass.SendFileBankStatementOrRemovablePayroll = resultFile;
          break;
      }
    }
  }
  
  onChangeEventDepartment(codeDepartment: any) {
    this.eventTypesClass.EventCodeDepartment = codeDepartment;
    if (codeDepartment != null && codeDepartment != "") {
      this.getCities(codeDepartment);
    } else {
      this.cities = [];
    }
  }

  getCities(codeDepartment: string) {
    this.eventtypesformService
      .getCities(codeDepartment)
      .subscribe(
        result => {
          this.cities = result;
        },
        error => console.error(error));
  }

  previewFilesSelect() {
    this.viewSelectedFiles = !this.viewSelectedFiles;
    if (this.viewSelectedFiles) {
      this.buttonNameFile = "OCULTAR";
    }
    else {
      this.buttonNameFile = "VER DETALLES";
    }
  }

  onChangeEventCodeCity(event: string) {
    this.eventTypesClass.EventCodeCity = event;
  }

  removeFileOfItemsSelected(name: string) {
    //Removiendo Files, en los files múltiples 3 en 1.
    this.multipleFiles = this.multipleFiles.filter((obj: { name: string; }) => obj.name != name);
    this.eventTypesClass.SendFilesComplaintsAndClaims = this.multipleFiles;
    if (this.multipleFiles.length == 3) {
      this.disabledInputFile = true;
    } else {
      this.disabledInputFile = false;
    }
    if (this.multipleFiles.length < 1) {
      this.buttonNameFile = "VER DETALLES";
      this.viewSelectedFiles = false;
    }
  }

  onChangeReasonsForReimbursement(event: string) {
    //Validaciones para cargar los tipos de archivos.
    this.eventTypesClass.ReasonsForReimbursement = event;
    //Para reiniciar el valor de los files
    this.eventTypesClass.SendBeneficiaryDeathCertificate = '';
    this.eventTypesClass.SendFileBankAccount = '';
    this.eventTypesClass.SendFileTitularDeathCertificate = '';
    this.eventTypesClass.SendFilesCivilRegistrationMarriage = '';
    this.eventTypesClass.SendFileBirthCertificateSon = '';
    this.eventTypesClass.SendFileSpouseDeathCertificate = '';
    this.eventTypesClass.SendFileExtraJudgmentStatement = '';
    this.eventTypesClass.SendFileBankAccountCertificate = '';
    this.eventTypesClass.SendFileBankStatementOrRemovablePayroll = '';
  }

  getTermsConditions() {
    this.eventtypesformService
      .getTermsConditions()
      .subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.termsAndConditions = result.termConditions.Message;
          }
          else {
            this.bsModalRef = this.generateInformativeModal(result.Title,
              result.Message, true, false);
          }
        },
        error => console.error(error));
  }

  getDepartments() {
    this.eventtypesformService
      .getDepartments()
      .subscribe(
        result => {
          this.departments = result;
        },
        error => console.error(error));
  }

  onChangeApplicant(event: any) {
    if (event == '' || event == '4' || event == '1' || event == '2') {
      this.eventTypesClass.SendFilesCivilRegistrationMarriage = '';
      this.eventTypesClass.SendFileBirthCertificateSon = '';
      this.eventTypesClass.SendFileSpouseDeathCertificate = '';
      this.eventTypesClass.SendFileExtraJudgmentStatement = '';
      this.eventTypesClass.SendFileBankAccountCertificate = '';
      this.eventTypesClass.SendFileBankStatementOrRemovablePayroll = '';
    }
  }

  eventAcceptTermsAndConditions() {
    this.bsModalRef = this.generateInformativeModal(
      'Terminos y condiciones',
      this.termsAndConditions, true, true);
    this.bsModalRef.content.onClose.subscribe((accept: boolean) => {
      if (accept) {
        this.eventTypesClass.AcceptTermsAndConditions = true;
      } else {
        this.eventTypesClass.AcceptTermsAndConditions = false;
      }
    })
  }

  sendDataEventType() {
    this.eventTypesClass.EventDate = this.getFormatedDate(this.formEventType.controls.eventdate.value);
    this.postCreatePqrs(this.eventTypesClass);
  }


  postCreatePqrs(eventTypesClass: EventTypesClass) {
    this.eventtypesformService
      .postCreatePqrs(eventTypesClass)
      .subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.bsModalRef = this.generateInformativeModal(
              result.Title,
              `${result.Message}: ${result.SettledNumber}`, true, true);
            this.bsModalRef.content.onClose.subscribe((accept: boolean) => {
              if (accept) {
                this.eventTypesClass = new EventTypesClass();
                this.continueFormProcess.emit({
                  continueFormProcess: false
                });
              }
            })
          }
          else {
            this.bsModalRef = this.generateInformativeModal(result.Title,
              result.Message, true, false);
          }
        },
        error => {
          this.showErrorNotificationModal(error.message);
        });
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

  getReasonsForReimbursement() {
    this.eventtypesformService
      .getRefundTypes(this.stepOneInformation.checkCustomerIsActiveInfo.ActiveUserResponsible)
      .subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.reasonsForReimbursement = result.DataList
          }
          else {
            this.bsModalRef = this.generateInformativeModal(result.Title,
              result.Message, true, false);
          }
        },
        error => console.error(error));
  }

  getAreasRelatedToTheEvent() {
    this.eventtypesformService
      .getEventAreas()
      .subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.areasRelatedToTheEvent = result.DataList
          }
          else {
            this.bsModalRef = this.generateInformativeModal(result.Title,
              result.Message, true, false);
          }
        },
        error => console.error(error));
  }

  viewMessagesInformationEvent(event: any) {
    this.viewMessageInformationId = event;
    this.viewMessagesInformation = !this.viewMessagesInformation;
  }

}
