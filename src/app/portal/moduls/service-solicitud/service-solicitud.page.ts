import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ValidatorStartCellPhoneNumber } from 'src/app/shared/helpers/validator';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { UserLogin } from 'src/app/shared/models/user-login';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';
import { ServiceTermsModalComponent } from '../service-solicitud/components/service-terms-modal/service-terms-modal.component';
import { Patient } from './models/pantient';
import { PlanService } from './services/plan.service';
import { PortalCommonService } from './services/portal-common.service';
import { PortalValidatorService } from './services/portal-validator.service';
import { RequestPhoneNumbers } from './models/request-phone-numbers';
import { PhonesNumbersModel } from './models/phone-numbers';
import { AddressDetail } from './models/address-detail';
import { PhoneNumberService } from './services/phone-number.service';
import { ShowDetailsService } from './services/show-details.service';
import { PhoneNumberModel } from './models/phone-number';
import { CardPhoneModel } from './models/card-phone';
import { ModalPhonesCenterComponent } from './components/modal-phones-center/modal-phones-center.component';

@Component({
  selector: 'app-service-solicitud',
  templateUrl: './service-solicitud.page.html',
  styleUrls: ['./service-solicitud.page.scss'],
})
export class ServiceSolicitudPage implements OnInit {

  steps = [1, 2, 3];
  actualStep = 1;
  continuarButton = new ButtonConfiguration();
  private documentPerson: string = "";
  userLogin = new UserLogin();
  persons: any;
  patient: Patient;
  form: FormGroup;
  continueText: string;
  dontShowPatientNumber = true;
  cellPhonePatient = "";
  validateCellNumberError = false;
  validateCellPhonePatientError = false;
  maxLength: string;
  imgRoute: string;
  buttonContinuarDisabled: boolean;
  bsModalRef?: BsModalRef;
  isLoading: boolean;

  planServices: any;
  environment: any;
  latitud: string;
  longitud: string;
  checkTerminos: boolean;
  checkConsentimientos: boolean;
  cancelarButton = new ButtonConfiguration();

  canContinue: boolean;
  canNotContinue: boolean;
  selectedPerson: any;
  country: string;

  requestPhoneNumber: RequestPhoneNumbers;
  listNumberPhones: PhonesNumbersModel;
  _addressDetail = new AddressDetail();
  informativeTitleModal: string = "Información";

  service: any;

  constructor(
    private commonService: PortalCommonService,
    private modalService: BsModalService,
    private translate: TranslateService,
    private fb: FormBuilder,
    private router: Router,
    private planServicesService: PlanService,
    private phoneNumberServices: PhoneNumberService,
    private urlDataService: UrlDataService,
    private showDetailsService: ShowDetailsService,
  ) {
    this.isLoading = true;
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    this.maxLength = environment.lengthCell;
    this.country = environment.country;

    this.buttonContinuarDisabled = true;
    this.continuarButton.buttonType = ButtonType.Primary;
    this.continuarButton.text = "Continuar";

    this.form = this.fb.group({
      cellPhone: [{ value: '', disabled: !this.dontShowPatientNumber }, [ValidatorStartCellPhoneNumber]],
      cellPhonePatient: [{ value: '', disabled: !this.dontShowPatientNumber }, [ValidatorStartCellPhoneNumber]],
    });

  }

  ngOnInit() {
    this.loadDataPerson();
    this.checkConsentimientos = false;
  }

  // first step

  setNextStep() {
    if (!this.buttonContinuarDisabled) {
      this.actualStep++;
      switch (this.actualStep) {
        case 1:
          break;
        case 2:
          this.activateValidation();
          this.SetInitialCheckFalse();
          break;
        case 3:
          this.loadCoordenadas();
          this.loadServices(this.patient);
          this.SetInitialCheckFalse();
          break;
        case 4:
          this.actualStep = 1;
      }
    }
  }

  setLastStep() {
    this.actualStep--;
  }

  loadDataPerson() {
    this.isLoading = true;
    this.userLogin.documentType = localStorage.getItem("documentType");
    this.userLogin.document = localStorage.getItem("document");
    this.userLogin.idReference = localStorage.getItem("registerId");
    this.getPersons();
  }


  // second step

  changeSwich() {
    this.dontShowPatientNumber = !this.dontShowPatientNumber;
    !this.dontShowPatientNumber ?
      this.form.controls.cellPhone.disable() :
      this.form.controls.cellPhone.enable();
    this.activateValidation();
  }

  //activamos el proceso para emitir la respuesta a la pagina principal
  activateValidation() {
    if (this.dontShowPatientNumber) {
      if (this.form.controls.cellPhone.value != "" && this.form.controls.cellPhone.valid) {
        this.patient.CellPhone = this.form.controls.cellPhone.value;
        this.canContinue = true;
        this.buttonContinuarDisabled = false;
      } else {
        this.canNotContinue = false;
        this.buttonContinuarDisabled = true;
      }
    } else {
      if (this.form.controls.cellPhonePatient.value != "" && this.form.controls.cellPhonePatient.valid) {
        this.patient.CellPhone = this.form.controls.cellPhonePatient.value;
        this.canContinue = true;
        this.buttonContinuarDisabled = false;
      } else {
        this.canNotContinue = false;
      }
    }

  }

  //validamos si el numero de telefono ingresado es correcto
  validateCellNumber() {
    if (this.dontShowPatientNumber) {
      let isValid = this.numberIsValid(this.patient.CellPhone);
      (isValid) ? this.validateCellNumberError = false : this.validateCellNumberError = true;
      this.activateValidation()
    }
    else {
      let isValid = this.numberIsValid(this.cellPhonePatient);
      (isValid) ? this.validateCellPhonePatientError = false : this.validateCellPhonePatientError = true;
      this.activateValidation()
    }
  }

  numberIsValid(number: string): boolean {
    return PortalValidatorService.validateNumberCellPhone(number);
  }

  numberOnly(event: any): boolean {
    return PortalValidatorService.numberOnly(event);
  }


  // third step

  SetInitialCheckFalse() {
    this.checkTerminos = false;
    this.checkConsentimientos = false;
  }

  getPersons() {
    this.commonService
      .getPersons(this.userLogin).subscribe(
        result => {
          if (result.StatusCode === 0) {
            this.persons = result.Beneficiaries;
            this.isLoading = false;
          } else {
            this.generateInformativeModal(result.Title, result.Message);
          }
        },
        error => this.ErrorRegister(error));
  }

  selectionPerson(persona: any) {
    this.patient = new Patient();
    this.patient.BirthDate = persona.BirthDate;
    this.patient.CellPhone = persona.CellPhone;
    this.patient.Document = persona.Document;
    this.patient.DocumentType = persona.DocumentType;
    this.patient.DocumentTypeShort = persona.DocumentTypeShort;
    this.patient.Email = persona.Email;
    this.patient.FullNameTitular = persona.FullNameTitular;
    this.patient.FullNames = persona.FullNames;
    this.patient.IsTitular = persona.IsTitular;
    this.patient.Life = persona.Life;
    this.form.controls.cellPhone.setValue(persona.CellPhone);
    this.buttonContinuarDisabled = false;
    this.setNextStep();
  }

  loadCoordenadas() {
    if (this.country == 'co') {
      this.latitud = "6.215367329734754";
      this.longitud = "-75.57630227350138";
    }
    else {
      this.latitud = "-34.89083518038249";
      this.longitud = "-56.14904493065947";
    }
  }

  loadServices(person: any) {
    this.isLoading = true;
    this.planServicesService
      .getEnabledServices(person.DocumentType, person.Document, this.latitud, this.longitud)
      .subscribe((result) => {
        if (result.StatusCode === 0) {
          this.planServices = result.EnabledServices.filter((obj: any) => obj.Code == "02" || obj.Code == "07" || obj.Code == "09" || obj.Code == "10");
          if (this.planServices.length > 0)
            this.validateResponse(this.planServices);
          else {
            const subTitle = 'Atención'
            const description = 'No se encontraron servicios habilitados para el paciente seleccionado.'
            this.bsModalRef = this.generateInformativeModal(subTitle, description);
            this.bsModalRef.content.onClose.subscribe((result: any) => {
              this.router.navigate(['/portal/home']);
            })
          }
        } else {
          this.bsModalRef = this.generateInformativeModal(result.Title, result.Message);
        }
        this.isLoading = false;
      }, error => this.ErrorRegister(error))
  }

  validateResponse(listService: any) {
    listService.forEach((service: any) => {
      switch (service.Code) {
        case "02":
          service.IconApp = "call-outline.svg";
          break;
        case "07":
          service.IconApp = "chatbox-outline.svg";
          break;
        case "09":
          service.IconApp = "videocam-outline.svg";
          break;
        case "10":
          service.IconApp = "videocam-outline.svg";
          break;
      }
    });
  }

  private ErrorRegister(error: any) {
    this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar su solicitud. Por favor inténtalo mas tarde.');
    this.router.navigate(['/portal/home'], { replaceUrl: true });
  }

  openTerminos() {
    this.translate.get("PORTAL.SERVICE-SOLICITUDE.Terminos").subscribe(message => {
      const initialState: ModalOptions = {
        initialState: {
          texto: message,
        },
        class: 'modal-dialog-centered modal-rounded',
        id: 'modal-activation',
      };
      this.bsModalRef = this.modalService.show(ServiceTermsModalComponent, initialState);
    });
  }

  openConsentimientos() {
    this.translate.get("PORTAL.SERVICE-SOLICITUDE.Consentimientos").subscribe(message => {
      const initialState: ModalOptions = {
        initialState: {
          texto: message,
        },
        class: 'modal-dialog-centered modal-rounded',
        id: 'modal-activation',
      };
      this.bsModalRef = this.modalService.show(ServiceTermsModalComponent, initialState);
    });
  }

  generateInformativeModal(subTitle: string, description: string) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: true,
        textButton: 'Aceptar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: true
    };
    return this.modalService.show(InformativeModalComponent, initialState);
  }

  checkConsentimiento() {
    if (!this.checkConsentimientos) {
      const initialState: ModalOptions = {
        initialState: {
          iconHeader: 'alert-circle.svg',
          subTitle: 'Atención',
          description: 'Para poder solicitar una atención, debe aceptar la casilla de consentimiento informado.',
          onlyButtonConfirm: true,
          textButton: 'Aceptar',
          textButton1: '',
          textButton2: '',
          visibleButtonClose: false,
        },
        class: 'modal-dialog-centered modal-rounded',
        id: 'modal-error-no-services',
        backdrop: true,
        ignoreBackdropClick: true
      };
      return this.modalService.show(InformativeModalComponent, initialState);
    }
  }

  // seccion service

  loadService() {
    if (!this.checkTerminos) {
      switch (this.service.Code) {
        case "02":
        case "07":
        case "09":
        case "10":
          this.loadVideoCall();
          break;
      }
    }
  }

  loadPhoneExperienceCenter() {
    this.phoneNumberServices.getPhonesExperienceCenter(this.requestPhoneNumber).subscribe((response: any) => {
      if (response) {
        response.UPhoneses.forEach((element: any) => {
          this.listNumberPhones = response;
        });
        if (this.listNumberPhones.UPhoneses.length == 0) {
          this.loadPhoneEperienceCenterByDefault();
          this.loadModalPhoneNumbers();
        }
        else {
          this.loadModalPhoneNumbers();
        }
      }

    });
  }

  getUserLocation() {
    this.requestPhoneNumber = new RequestPhoneNumbers();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.requestPhoneNumber.Latitud = String(position.coords.latitude);
        this.requestPhoneNumber.Longitud = String(position.coords.longitude);
        this.loadPhoneExperienceCenter();
      }, error => {
        this.generateInformativeModal("Atención", "En este momento no es posible obtener tu ubicación. Verifica los permisos.");
      });
    } else {
      this.requestPhoneNumber.Latitud = "";
      this.requestPhoneNumber.Longitud = "";
      this.loadPhoneExperienceCenter();
    }
  }

  loadPhoneEperienceCenterByDefault() {
    let listNumberPhone = new PhoneNumberModel();
    let numberPhone = new CardPhoneModel();

    if (this.country == 'co') {
      listNumberPhone.CityName = "Montevideo";
      listNumberPhone.Phones = [];
      numberPhone.Tel = "147";
      listNumberPhone.Phones.push(numberPhone);
    }
    else {
      listNumberPhone.CityName = "Medellín";
      listNumberPhone.Phones = [];
      numberPhone.Tel = "6044441330";
      listNumberPhone.Phones.push(numberPhone);
    }

    this.listNumberPhones.UPhoneses.push(listNumberPhone);
  }

  loadModalPhoneNumbers() {
    const initialState: ModalOptions = {
      initialState: {
        listPhoneNumbers: this.listNumberPhones,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: true
    };
    return this.modalService.show(ModalPhonesCenterComponent, initialState);
  }

  loadVideoCall() {
    this._addressDetail.ServiceType = this.service.ServiceType;
    this._addressDetail.PatientDocumentType = this.urlDataService.SelectedPerson.DocumentType;
    this._addressDetail.PatientDocument = this.urlDataService.SelectedPerson.Document;
    this._addressDetail.Country = "";
    this._addressDetail.DepartmentId = "";
    this._addressDetail.CityId = "";
    this._addressDetail.NeighborhoodId = "008";
    this._addressDetail.Street = "";
    this._addressDetail.Bis = "";
    this._addressDetail.Apartment = "";
    this._addressDetail.AddressDetails = "";
    this._addressDetail.Latitude = null;
    this._addressDetail.Longitude = null;
    this._addressDetail.PatientCellPhone = this.urlDataService.SelectedPerson.CellPhone;
    this._addressDetail.Coverage = true;
    this.videoCallPetition(this._addressDetail);
  }

  videoCallPetition(_addressDetail: any) {
    this.showDetailsService
      .getVideoCallPetition(_addressDetail)
      .subscribe(
        (result) => {
          if (result.StatusCode === 0) {
            if (result.Petition.Cod == '1') {
              this.urlDataService.UrlService = result.Petition.Return.Url;
              this.router.navigate(['/videochat']);
            } else {
              this.generateInformativeModal(this.informativeTitleModal, result.Petition.Message);
            }
          } else {
            this.generateInformativeModal(result.Title, result.Message);
          }
        },
        error => this.ErrorRegister(error));
  }

}
