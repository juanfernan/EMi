import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';
import { downloadButtonConfigExport } from '../../configs/redSiemDownloadButtonConfig';
import { emailButtonConfigExport } from '../../configs/redSiemMailButtonConfig';
import { GenerateCertificatesUserInfo } from '../../models/generateCertificatesUserInfo';
import { DocumentsGenerationService } from '../../services/documents-generation.service';

@Component({
  selector: 'app-red-siem',
  templateUrl: './red-siem.page.html',
  styleUrls: ['./red-siem.page.scss'],
})
export class RedSiemPage implements OnInit {
  
  origin: any = {};
  redirect: boolean = false;
  to: any;
  certificates: any = [];
  certificateCode: string;
  patientDocument: string | null;
  patientDocumentType: string | null;
  requestGroup: boolean = false;
  groupCode: string;
  fullName: string;
  fullNameCertified: string;

  translate: TranslateService;
  country: string;
  environment: any;
  lastYear: any;
  ancestorYear: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  requiredModalFields = false; //Validar campos modal uno
  requiredModalFieldsTwo = false; //Validar campos modal dos
  currentDate = new Date();
  //Date Fecha inicial
  tmpStartDate: any = '';
  daySelectectMyDatePicker: number;
  monthSelectectMyDatePicker: number;
  yearSelectectMyDatePicker: number;
  //Date Decha final
  tmpEndDate: any = '';
  minEndDate: Date;
  maxEndDate: Date;
  deactivateEndDate: boolean = true;
  CountryListRedSiem: any = [];
  CitysListRedSiem: any = [];
  CountrySelect: any = '';
  selectedPastYears: any = '';
  emailTitular: any;
  certificateUserInfo = new GenerateCertificatesUserInfo();

  //Información de la descarga
  downloadInProgress: boolean = false;
  completeDownloadSuccess: boolean;
  removeMessageDownload: boolean;
  //Información del envío de email
  sendEmailInProgress: boolean = false;
  completeSendEmailSuccess: boolean;
  removeMessageSendEmail: boolean;
  imgRoute: string;
  downloadButtonConfig = downloadButtonConfigExport;
  emailButtonConfig = emailButtonConfigExport;
  isLoading: boolean = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private certificateServicesService: DocumentsGenerationService,
    private bsModalRef: BsModalRef
  ) {
    this.environment = environment;
    this.country = environment.country;
    this.imgRoute = environment.imagesRoute;

    this.form = this.fb.group({
      from: [{
        value: '',
      }],
      until: [{
        value: '',
      }],
      status: [{ value: '' }],
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.certificates = JSON.parse(params.certificates);
      this.certificateCode = params.certificateCode;
      this.patientDocument = params.patientDocument;
      this.patientDocumentType = params.patientDocumentType;
      this.requestGroup = params.requestGroup;
      this.groupCode = params.groupCode;
      this.fullName = params.fullName;
      this.fullNameCertified = params.fullNameCertified;
    });

    this.certificateUserInfo.Document = this.patientDocument;
    this.certificateUserInfo.DocumentType = this.patientDocumentType;
    this.certificateUserInfo.RequestGroup = this.requestGroup;
    this.certificateUserInfo.GroupCode = this.groupCode;
    this.certificateUserInfo.Name = this.fullName;
    this.certificateUserInfo.FullNameCertified = this.fullNameCertified;

    this.getListCountryRedSiem();
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      searchPlaceholderText: 'Buscar ciudades',
      allowSearchFilter: true,
      limitSelection: 10,
      maxHeight: 120,
      noDataLabel: 'No hay ciudades para mostrar',
      //renombrando tal cúal llegan el campo en el servicio y removiendo el default
      idField: 'Code',
      textField: 'Name',
    };
    this.modalValidationToContinue();
    this.getPreviousYears();
    this.getListCitysRedSiem();
  }

  //Países Red Siem
  getListCountryRedSiem() {
    this.certificateServicesService.getCountryRedSiem().subscribe(
      (result: any) => {
        if (result.StatusCode === 0) {
          this.CountryListRedSiem = result.DataList;
        } else {
          //*** Desabilitar campos y mostrar mensaje que no cargaron paises
        }
      },
      (error) => this.ErrorRegister(error)
    );
  }

  onChangeCountryRedSiem() {
    const value: any = this.CountrySelect;
    this.removeMessageDownload = true;
    this.removeMessageSendEmail = true;
    //Parametros descarga y envío de email
    this.selectedItems = [];
    this.dropdownList = [];
    this.certificateUserInfo.NameCountry = this.CountryListRedSiem.filter(
      (obj: any) => obj.Code === value
    )[0].Name;
    this.certificateUserInfo.countryCode = value;
    this.getListCitysRedSiem();

    if (
      this.tmpEndDate !== '' &&
      this.tmpStartDate !== '' &&
      this.selectedItems.length >= 1
    ) {
      this.requiredModalFields = true;
    } else {
      this.requiredModalFields = false;
    }
    this.doNotEraseDateFields();
  }

  //Ciudades Red Siem
  getListCitysRedSiem() {
    this.certificateServicesService
      .GetConsultantCities(this.certificateUserInfo)
      .subscribe(
        (result: any) => {
          if (result.StatusCode === 0) {
            this.CitysListRedSiem = result.DataList;
            this.dropdownList = this.CitysListRedSiem;
            if (this.certificateUserInfo.countryCode == '') {
              this.selectedItems = [];
            }
            this.isLoading = false;
          } else {
            // TODO Desabilitar campos y mostrar mensaje que no cargaron paises
            console.log('error carga paises');
          }
        },
        (error) => this.ErrorRegister(error)
      );
  }

  modalValidationToContinue() {
    if (
      this.tmpEndDate === undefined ||
      this.tmpStartDate === undefined ||
      this.selectedItems.length < 1
    ) {
      this.requiredModalFields = false;
    }
  }

  cancel() {
    this.bsModalRef.hide();
  }

  addCeroToDate(date: any) {
    if (date < 10) {
      return '0' + date;
    } else {
      return date;
    }
  }

  addMonths(numOfMonths: any, date = new Date()) {
    date.setMonth(date.getMonth() + numOfMonths);
    return date;
  }

  onDateChangedStartDate(event: any): void {
    this.removeMessageDownload = true;
    this.removeMessageSendEmail = true;
    this.tmpStartDate = formatDate(event.value, 'dd-mm-yyyy', 'es-ES');
    //Parametro para envío de email y descarga
    this.certificateUserInfo.DateStart = formatDate(
      event.value,
      'dd-mm-yyyy',
      'es-ES'
    );
    this.daySelectectMyDatePicker = this.addCeroToDate(event.value.getDay());
    this.monthSelectectMyDatePicker = this.addCeroToDate(
      event.value.getMonth()
    );
    this.yearSelectectMyDatePicker = this.addCeroToDate(
      event.value.getFullYear()
    );
    this.tmpEndDate = ''; 
    this.minEndDate = new Date(event.value);
    this.maxEndDate = new Date(this.addMonths(3, event.value));
    this.deactivateEndDate = false;
    if (
      this.tmpEndDate !== '' &&
      this.tmpStartDate !== '' &&
      this.selectedItems.length >= 1
    ) {
      this.requiredModalFields = true;
    } else {
      this.requiredModalFields = false;
    }
    if (this.tmpEndDate === '') {
      this.requiredModalFields = false;
    }
    this.doNotEraseDateFields();
  }

  onDateChangedEndDate(event: any): void {
    this.removeMessageDownload = true;
    this.removeMessageSendEmail = true;
    this.tmpEndDate = formatDate(event.value, 'yyyy-MM-dd', 'en-US');
    //Parametro para envío de email y descarga
    this.certificateUserInfo.DateEnd = formatDate(
      event.value,
      'yyyy-MM-dd',
      'en-US'
    );
    if (
      this.tmpEndDate !== '' &&
      this.tmpStartDate !== '' &&
      this.selectedItems.length >= 1
    ) {
      this.requiredModalFields = true;
    } else {
      this.requiredModalFields = false;
    }
    if (event.value.getDay() == 0) {
      this.requiredModalFields = false;
    }
    this.doNotEraseDateFields();
  }

  //Validación con los detectores de agregar y remover ciudad
  onItemSelect(item: any) {
    this.removeMessageDownload = true;
    this.removeMessageSendEmail = true;
    if (
      this.tmpEndDate !== '' &&
      this.tmpStartDate !== '' &&
      this.selectedItems.length >= 1
    ) {
      this.requiredModalFields = true;
    } else {
      this.requiredModalFields = false;
    }
    this.doNotEraseDateFields();
  }

  OnItemDeSelect(item: any) {
    this.removeMessageDownload = true;
    this.removeMessageSendEmail = true;
    if (
      this.tmpEndDate !== '' &&
      this.tmpStartDate !== '' &&
      this.selectedItems.length >= 1
    ) {
      this.requiredModalFields = true;
    } else {
      this.requiredModalFields = false;
    }
    this.doNotEraseDateFields();
  }

  //Desabilitar borrador de los campos de fecha
  doNotEraseDateFields() {}

  getPreviousYears() {
    let getDate = new Date();
    this.lastYear = getDate.getFullYear() - 1;
    this.ancestorYear = getDate.getFullYear() - 2;
  }

  //Input años de la modal tipo dos AQUI
  onSelectedPastYear() {
    const selectedPastYearValue = this.selectedPastYears;
    this.removeMessageDownload = true;
    this.removeMessageSendEmail = true;
    //Parametro certificado de pagos
    this.certificateUserInfo.CertifiedYear = selectedPastYearValue;
    if (
      selectedPastYearValue === undefined ||
      selectedPastYearValue == 'null'
    ) {
      this.requiredModalFieldsTwo = false;
    } else {
      this.requiredModalFieldsTwo = true;
    }
  }

  //Download y Send Email
  eventDownloadPdf(value: any) {
    this.removeMessageSendEmail = true;
    this.removeMessageDownload = false;
    this.downloadInProgress = true;
    this.certificateUserInfo.CertificateCode = value;
    this.certificateUserInfo.TypeCertificate = this.certificates.filter(
      (obj: any) => obj.certificateCode === value
    )[0].TypeCertificate;
    this.certificateUserInfo.FileName = this.certificates.filter(
      (obj: any) => obj.certificateCode === value
    )[0].FileName;
    //Parametro envío de ciudad y código en descarga y envío email
    this.certificateUserInfo.CodeCity = this.selectedItems;
    this.certificateServicesService
      .getDownloadCertAffiliatedPayments(this.certificateUserInfo)
      .subscribe(
        (result: any) => {
          if (result.StatusCode === 0) {
            let pdfCode = result.Download.BitCertificate;
            fetch('data:application/pdf;base64,' + pdfCode)
              .then(function (resp) {
                return resp.blob();
              })
              .then(function (blob) {
                // let name = result.Download.NameCertificate;
                // saveAs(blob, name);
                var fileURL = URL.createObjectURL(blob);
                window.open(fileURL, "_blank");
              });
            this.downloadInProgress = false;
            this.completeDownloadSuccess = true;
          } else {
            //Mensaje error
            this.downloadInProgress = false;
            this.completeDownloadSuccess = false;
          }
        },
        (error) => this.ErrorRegister(error)
      );
  }

  eventSendEmail(value: any) {
    this.removeMessageDownload = true;
    this.removeMessageSendEmail = false;
    this.sendEmailInProgress = true;
    //Parametros del títular.
    this.certificateUserInfo.CertificateCode = value;
    this.certificateUserInfo.TypeCertificate = this.certificates.filter(
      (obj: any) => obj.certificateCode === value
    )[0].TypeCertificate;
    this.certificateUserInfo.FileName = this.certificates.filter(
      (obj: any) => obj.certificateCode === value
    )[0].FileName;
    let mailTitular = localStorage.getItem('userName');
    this.emailTitular = localStorage.getItem('userName');
    this.certificateUserInfo.Mail = mailTitular;
    this.certificateUserInfo.CodeCity = this.selectedItems;
    //Parametros del títular.
    this.certificateServicesService
      .getSendCertAffiliatedPayments(this.certificateUserInfo)
      .subscribe(
        (result: any) => {
          if (result.StatusCode === 0) {
            this.sendEmailInProgress = false;
            this.completeSendEmailSuccess = true;
          } else {
            this.sendEmailInProgress = false;
            this.completeSendEmailSuccess = false;
          }
        },
        (error) => this.ErrorRegister(error)
      );
  }

  private ErrorRegister(error: any) {
    /* TODO
    this.dialogService.addDialog(ModalComponent, {
      title: 'Inconvenientes con el portal',
      message: 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.',
      imageUrl: this.config.info.alertImage,
      buttonConfirmText: "ACEPTAR"
    }, { closeByClickingOutside: true });*/
  }

  obtainDate(d: any) {
    const date = new Date(d);
    if (date && (d.value != '')) {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    return "--/--/----";
  }

  setDateFrom(val) {
    this.form.controls.from.setValue(val);
  }

  setDateUntil(val) {
    this.form.controls.until.setValue(val);
  }

  getFormatedDate(d: any) {
    const date = new Date(d);
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

  parse(unpaid: string) {
    return parseInt(unpaid);
  }
}
