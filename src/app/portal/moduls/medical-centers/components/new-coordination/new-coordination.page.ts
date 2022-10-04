import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { UserLogin } from 'src/app/shared/models/user-login';
import { environment } from 'src/environments/environment';
import { PortalCommonService } from '../../../service-solicitud/services/portal-common.service';
import { ConfirmCoordination } from '../../models/ConfirmCoordination.model';
import { PaymentForm } from '../../models/paymentForm.model';
import { DetailsPendingCoordinationsService } from '../../services/details-pending-coordinations.service';
import { NewCoordinationsService } from '../../services/new-coordinations.service';
import { InformativeModalComponent } from '../../../../../shared/components/informative-modal/informative-modal.component';
import { continueButtonConfigExport, PayButtonConfigExport, PayCoordinationButtonConfigExport } from '../../configs/button-configurations';
import { AgmMap } from '@agm/core';

//SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);
declare var SetProperties: any;
declare var PWCheckout: any;

@Component({
  selector: 'app-new-coordination',
  templateUrl: './new-coordination.page.html',
  styleUrls: ['./new-coordination.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewCoordinationPage implements OnInit {

  translate: TranslateService;
  servicesTypes: any = [];
  specialties: any;
  registerId: any;
  familyMembers: any = [];
  coordination = new ConfirmCoordination();
  specialtyType: string;
  specialtyMessage: string;
  medicalCenterSchedules: any;
  schedules: any;
  schedules1: any;
  schedules2: any;
  schedules3: any;
  hiddenLabelSchedule: boolean = true;
  disabledButton: boolean = true;
  servicesTypesRequired: boolean = false;
  hiddenStepOne: boolean = false;
  hiddenStepTwo: boolean = true;
  hiddenStepThree: boolean = true;

  continueButtonConfig = continueButtonConfigExport;
  payButtonConfig = PayButtonConfigExport;
  payCoordinationButtonConfig = PayCoordinationButtonConfigExport;

  preConfirm: any;
  type: any;
  latitude: number;
  longitude: number;
  confirmResult: boolean;
  hiddenPayment: boolean;
  hiddenRecommendations: boolean = true;
  hiddenButtons: boolean = false;
  coordinationPaymentMethods: any;
  paymentForm = new PaymentForm();
  paymentMethodDebitInvoiceCode = environment.paymentMethodDebitInvoiceCode;
  franchisesPayment: any;
  userLogin = new UserLogin();
  imgRoute: string
  environment: any;
  // customer = new Customer();
  @ViewChild(AgmMap)
  public agmMap: AgmMap

  @Input() newCoordinationClick: boolean;
  @Input() reloadNewCoordination: boolean = false;
  @Input() coordinationDetail: any;
  @Output() returnToList = new EventEmitter();

  tokenCreated: boolean = false;
  persons: any;
  whoDisabled: boolean = true;
  specialtytTypeThreeDenied: any;
  disableMedicalCenter: boolean = false;
  intervalValidateCoordinationPay: any;
  isLoading = false;
  bsModalRef: BsModalRef;
  
  constructor(
    private commonService: PortalCommonService, 
    translate: TranslateService,
    private newCoordinationsService: NewCoordinationsService, 
    private bsModalService: BsModalService, 
    private detailsPendingCoordinationService: DetailsPendingCoordinationsService
  ) {
    this.translate = translate;
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    translate.setDefaultLang(environment.country);
    //Aquí se configuran los scripts de pago.
    if (environment.api_siemprepago && environment.ig_payment) {
      // PWCheckout.
      this.load_scripts([environment.api_siemprepago, environment.ig_payment], () => {
      })
    }
   }

   getCardImage(card: string) {
    if (card) {
      return `${this.imgRoute}${card.replace('-icon', '.jpg').replace('pay ', '')}`;
    }
    else {
      return `${this.imgRoute}tarjetadef.jpg`;
    }
  }

  ngOnInit() {
    this.loadData();
    this.VisibleOne();
  }

  getParam(param: any) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == param) {
        return sParameterName[1];
      }
    }
    return null
  }

  loadData() {
    this.cleanFields();
    this.registerId = localStorage.getItem("registerId");
    this.coordination.IdReference = this.registerId;
    this.coordination.UserEmail = localStorage.getItem("userName");
    this.coordination.Token = "1234567890";
    this.hiddenRecommendations = true;
    this.hiddenButtons = false;
    this.userLogin.documentType = localStorage.getItem("documentType");
    this.userLogin.document = localStorage.getItem("document");
    this.userLogin.idReference = this.registerId;
    this.initializeObject();
    this.getPersons();
  }

  VisibleOne() {//Horarios
    //$(window).scrollTop(0);
    this.hiddenStepOne = false;
    this.hiddenStepTwo = true;
    this.hiddenStepThree = true;
  }

  VisibleTwo() {//Detalle mapa
    //$(window).scrollTop(0);
    this.hiddenStepOne = true;
    this.hiddenStepTwo = false;
    this.hiddenStepThree = true;
    if (Number(this.coordination.Price) > 0) {
      this.hiddenPayment = false;
    } else {
      this.hiddenPayment = true;
    }
  }

  VisibleThree() { //Pago
    localStorage.setItem('tokenCreated', 'false');
    //$(window).scrollTop(0);
    this.hiddenStepOne = true;
    this.hiddenStepTwo = true;
    this.hiddenStepThree = false;
    this.coordination.Installments = "";
    this.getPaymentMethods();
  }

  initializeObject() {
    this.coordination.Number = "";
    this.coordination.ServicesType = "";
    this.coordination.SpecialityCode = "";
    this.coordination.ClinicCode = "";
    this.coordination.DocumentType = "";
    this.coordination.Number = "";
    this.coordination.Phone = "";
    this.coordination.Email = "";
  }

  getPersons() {
    this.isLoading = true;
    this.commonService
      .getPersons(this.userLogin)
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.StatusCode === 0) {
            this.persons = result.Beneficiaries;
            let document = this.getParam('document') ? atob(this.getParam('document')!) : "";
            if (document !== "" && result.Beneficiaries != null && result.Beneficiaries.length > 0) {
              this.coordinationData(document);
              this.whoDisabled = true;
            } else {
              this.whoDisabled = false;
            }
            this.getServicesTypes();
          } else {
            this.isLoading = false;
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true);
          }
          this.isLoading = false;
        },
        (error: any) => {
          this.ErrorRegister(error)
          this.isLoading = false;
        });
  }

  coordinationData(documento: string) {
    let selectedPerson = this.persons.filter((obj: any) => obj.Document === documento);
    this.coordination.DocumentType = selectedPerson[0].DocumentType;
    this.coordination.Number = documento;
    this.coordination.Phone = (selectedPerson[0].CellPhone === null || selectedPerson[0].CellPhone === '') ? "090000000" : selectedPerson[0].CellPhone;
    this.coordination.Email = (selectedPerson[0].Email === null || selectedPerson[0].Email === '') ? "test@hotmail.com" : selectedPerson[0].Email;
    this.coordination.FullNames = selectedPerson[0].FullNames;
  }

  onChangeSelectPerson(documentEvent: any) {
    this.coordinationData(documentEvent.target.value);
  }

  getServicesTypes() {
    this.isLoading = true;
    this.newCoordinationsService
      .getServicesTypes('DataLists/GetServiceTypes')
      .subscribe(
        (result: any) => {
          this.servicesTypes = result.DataList;
          this.reloadNewCoordination = false;
          this.isLoading = false;
        },
        (error: any) => this.ErrorRegister(error));
  }

  onChangeFamily(document: string) {
    this.familyMembers.forEach((element: any) => {
      if (element.Document === document) {
        this.coordination.DocumentType = element.DocumentType;
        this.coordination.Phone = element.Phone;
        this.coordination.Email = element.Email;
        this.coordination.FullNames = element.FullNames;
      }
    });
  }

  getSpecialties(serviceTypeId: string) {
    this.isLoading = true;
    this.newCoordinationsService
      .getSpecialties(serviceTypeId)
      .subscribe(
        (result: any) => {
          this.specialties = result['MedicalSpecialites'];
          this.isLoading = false;
        },
        (error: any) => this.ErrorRegister(error));
  }

  onChangeSpeciality(codeEvent: any) {
    const code = codeEvent.target.value;
    if (code != null && code != "") {
      let specialtySelected = this.specialties.filter((obj: any) => obj.Code === code);
      this.coordination.SpecialityName = specialtySelected[0].Description;
      this.cleanDependenciesSpeciality();
      this.getMedicalCenterSchedules(specialtySelected[0]);
    } else {
      this.cleanDependenciesSpeciality();
    }
  }

  cleanDependenciesSpeciality() {
    this.coordination.ClinicCode = "";
    this.schedules = [];
    this.schedules1 = [];
    this.schedules2 = [];
    this.schedules3 = [];
    this.hiddenLabelSchedule = true;
    this.disabledButton = true;
    this.medicalCenterSchedules = [];
  }

  onChangeServicesTypes(serviceTypeIdEvent: any) {
    const serviceTypeId = serviceTypeIdEvent.target.value;
    if (serviceTypeId != null && serviceTypeId != "") {
      if (Number(serviceTypeId) >= 0) {
        this.servicesTypesRequired = false;
      }
      this.servicesTypes.forEach((element: any) => {
        if (element.Code === serviceTypeId) {
          this.coordination.ServicesTypeName = element.Name;
        }
      });
      // Limpiar campos dependientes y volver a consultar
      this.cleanDependenciesServicesTypes();
      this.getSpecialties(serviceTypeId);
    } else {
      this.servicesTypesRequired = true;
      this.disabledButton = true;
      // Limpiar campos dependientes
      this.cleanDependenciesServicesTypes();
    }
  }

  cleanDependenciesServicesTypes() {
    this.schedules = [];
    this.schedules1 = [];
    this.schedules2 = [];
    this.schedules3 = [];
    this.medicalCenterSchedules = [];
    this.specialties = [];
    this.hiddenLabelSchedule = true;
    this.coordination.ClinicCode = "";
    this.coordination.SpecialityCode = "";
  }

  preConfirmCoordination() {
    this.isLoading = true;
    this.coordination.Phone = "090000000";
    this.newCoordinationsService
      .preConfirmCoordination(this.coordination)
      .subscribe(
        (result: any) => {
          if (result.StatusCode === 0) {
            this.preConfirm = result.PreConfirm;
            this.coordination.Price = this.preConfirm.Price;
            this.coordination.ClinicAddress = this.preConfirm.ClinicAddress;
            this.coordination.PatientCode = this.preConfirm.PatientCode;
            this.coordination.ProductCode = this.preConfirm.ProductCode;
            this.VisibleTwo();
            // Cargar mapa
            this.latitude = Number(this.preConfirm.Latitude);
            this.longitude = Number(this.preConfirm.Longitude);
            // this.agmMap.triggerResize();
          } else {
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true);
          }
          localStorage.setItem('tokenCreated', 'false');
          this.isLoading = false;
        },
        (error: any) => this.ErrorRegister(error));
  }

  confirmCoordination() {
    this.isLoading = true;
    this.newCoordinationsService
      .confirmCoordination(this.coordination)
      .subscribe(
        (result: any) => {
          if (result.StatusCode === 0) {
            this.isLoading = false;
            this.coordination.Recommendations = result.Recommendations === "" ? "No se encontraron recomendaciones." : result.Recommendations;
            this.hiddenRecommendations = false;
            this.hiddenButtons = true;
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false);
          } else {
            this.hiddenRecommendations = true;
            this.hiddenButtons = false;
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true);
          }
          this.isLoading = false;
        },
        (error: any) => this.ErrorRegister(error));
  }

  cleanFields() {
    this.coordination.ClinicAddress = "";
    this.coordination.ClinicCode = "";
    this.coordination.ClinicName = "";
    this.coordination.Date = "";
    this.coordination.Installments = "";
    this.coordination.LocalCode = "";
    this.coordination.PaymentMethodCode = "";
    this.coordination.PaymentMethodName = "";
    this.coordination.Price = "";
    this.coordination.ProductCode = "";
    this.coordination.Recommendations = "";
    this.coordination.ServicesType = "";
    this.coordination.ServicesTypeName = "";
    this.coordination.SpecialityCode = "";
    this.coordination.SpecialityName = "";
    this.coordination.Time = "";
    this.coordination.TrxToken = "";
    this.coordination.YearMonthDay = "";
    this.schedules = [];
    this.schedules1 = [];
    this.schedules2 = [];
    this.schedules3 = [];
    this.hiddenLabelSchedule = true;
    this.disabledButton = true;
    this.servicesTypesRequired = true;
  }

  getMedicalCenterSchedules(specialtySelected: any) {
    this.isLoading = true;
    this.newCoordinationsService
      .getMedicalCenterSchedules('Coordinations/MedicalCenterSchedules', specialtySelected.Code)
      .subscribe(
        (resultResponse: any) => {
          const result = resultResponse['MedicalCenterSchedules']
          if (result.length > 0) {
            this.disableMedicalCenter = false;
            this.medicalCenterSchedules = result;
          } else {
            if (specialtySelected.Type !== "3") {
              this.disableMedicalCenter = true;
              this.bsModalRef = this.generateInformativeModal('Coordinación', "La especialidad que estás solicitando no tiene agenda  disponible en las próximas 72 h hábiles. Por favor, inténtalo de nuevo a la brevedad o comunícate al 2487 3333 de 9 a 19 horas", true);
            }
          }
          this.isLoading = false;
          this.validateSpecialty(specialtySelected);
        },
        (error: any) => this.ErrorRegister(error));
  }

  validateSpecialty(specialtySelected: any) {
    if (specialtySelected.Type === "1") {
      this.disabledButton = false;
    }
    else if (specialtySelected.Type === "2") {
      this.bsModalRef = this.generateInformativeModal('Coordinación', specialtySelected.Message, true);
      this.disabledButton = false;
    } else if (specialtySelected.Type === "3") {
      this.bsModalRef = this.generateInformativeModal('Coordinación', specialtySelected.Message, true);
      this.disabledButton = true;
    }
    this.specialtytTypeThreeDenied = specialtySelected.Type
  }

  selectedSchedule(clinicCodeEvent: any) {
    const clinicCode = clinicCodeEvent.target.value;
    if (clinicCode != null && clinicCode != "") {
      this.medicalCenterSchedules.forEach((element: any) => {
        if (element.ClinicCode === clinicCode) {
          this.schedules = new Array();
          this.schedules1 = new Array();
          this.schedules2 = new Array();
          this.schedules3 = new Array();
          this.schedules = element.MedicalCenterSchedules;
          var countsSchedules = this.schedules.length;
          var itemscolums = Number(countsSchedules / 3);
          for (var i = 0; i < this.schedules.length; i++) {
            if (i < itemscolums) {
              this.schedules1.push(this.schedules[i]);
            } else if (i < (itemscolums * 2)) {
              this.schedules2.push(this.schedules[i]);
            } else {
              this.schedules3.push(this.schedules[i]);
            }
          }
          this.coordination.ClinicName = element.ClinicName;
          this.coordination.RDACode = element.RDACode;
          this.coordination.LocalCode = element.LocalCode;
          this.hiddenLabelSchedule = false;
          this.disabledButton = true;
        }
      });
    } else {
      this.schedules = [];
      this.schedules1 = [];
      this.schedules2 = [];
      this.schedules3 = [];
      this.hiddenLabelSchedule = true;
      this.disabledButton = true;
    }
  }

  selectSchedule(yearMonthDay: string, time: string, date: string) {
    this.disabledButton = false;
    this.coordination.YearMonthDay = yearMonthDay;
    this.coordination.Time = time;
    this.coordination.Date = date;
  }

  //Logica detalle
  call() {
    this.bsModalRef = this.generateInformativeModal('Línea de atención', "Comunícate a la línea de atención del centro de coordinación de centros médicos 24873333", false);
  }

  returnNewCoordination() {
    if (this.hiddenButtons) {//Ya confirmó
      this.hiddenRecommendations = true;
      this.hiddenButtons = false;
      this.cleanFields();
    }
    this.VisibleOne();
  }

  cancelCoordination() {
    this.bsModalRef = this.generateInformativeModal('Confirmación', "¿Estás seguro de cancelar la coordinación?", false, false);
    this.bsModalRef.content.onClose.subscribe((accepted: boolean) => {
      if (accepted) {
        this.confirmResult = accepted;
        if (this.confirmResult === true) {
          this.detailsPendingCoordinationService
            .cancelCoordination(localStorage.getItem("registerId"),
              this.coordination.ServicesType,
              this.coordination.RDACode,
              this.coordination.ClinicCode,
              this.coordination.SpecialityCode,
              this.coordination.YearMonthDay,
              this.coordination.Time,
              this.coordination.Number,
              localStorage.getItem("CellPhone"),
              localStorage.getItem("userName")).subscribe((response: any) => {
                if (response.StatusCode === 0) {
                  if (!response.Tittle || !response.Message) {
                    this.generateInformativeModal('Confirmación', "La coordinación ha sido cancelada", false);
                  } else {
                    this.generateInformativeModal(response.Tittle, response.Message, false);
                  }
                } else {
                  if (!response.Tittle || !response.Message) {
                    this.generateInformativeModal('Error', "Ocurrió un error al cancelar la coordinación", true);
                  } else {
                    this.generateInformativeModal(response.Tittle, response.Message, true);
                  }
                }
              })
        }
      }
    })
  }

  returnList() {
    this.returnToList.emit();
  }

  //Termina logica detalle
  getPaymentMethods() {
    this.isLoading = true;
    this.newCoordinationsService
      .getPaymentMethods(this.coordination)
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.StatusCode === 0) {
            if (result.CoordinationPaymentMethods.length > 0) {
              this.coordinationPaymentMethods = result.CoordinationPaymentMethods
                .filter((obj: any) => obj.ExternalMethod === false);
              this.franchisesPayment = result.CoordinationPaymentMethods
                .filter((obj: any) => obj.ExternalMethod === true);
            } else {
              this.coordinationPaymentMethods = [];
              this.franchisesPayment = [];
            }
          } else {
            if (!result.Tittle || !result.Message) {
              this.bsModalRef = this.generateInformativeModal('Error', "Ocurrió un error al obtener los métodos de pago", true);
            } else {
              this.bsModalRef = this.generateInformativeModal(result.Tittle, result.Message, true);
            }
          }
          this.isLoading = false;
        },
        (error: any) => this.ErrorRegister(error));
  }

  OnTokenCreated() {
    localStorage.setItem('tokenCreated', 'true');
  }

  /**
   * Método que inicializa el pago.
   *
   * @memberof NewCoordinationComponent
   */
  goToPayCoordination() {
    this.setProperties();
    PWCheckout.Bind("tokenCreated", this.OnTokenCreated);
    this.listenReadyToPay()
    const myDiv: any = document.getElementById('PWToken');
    var trxToken = myDiv.value;
    PWCheckout.OpenIframeNormal()
  }

  /**
   * Método que está pendiente cuando se establezca token para realizar pago.
   *
   * @memberof NewCoordinationComponent
   */
  listenReadyToPay() {
    this.intervalValidateCoordinationPay = setInterval(() => {
      var value = localStorage.getItem("tokenCreated");
      if (value === "true") {
        let paymentMethod = {
          PaymentMethodCode: "ONLINE",
          PaymentMethodName: "ONLINE"
        }
        const myDiv: any = document.getElementById('PWToken');
        var trxToken = myDiv.value;
        this.coordination.TrxToken = trxToken;
        this.payCoordination(paymentMethod);
        this.intervalValidateCoordinationPay = null;
      }
    }, 1000);
  }

  payCoordination(paymentMethods: any) {
    localStorage.setItem('tokenCreated', 'false');
    this.coordination.PaymentMethodCode = paymentMethods.PaymentMethodCode;
    this.coordination.PaymentMethodName = paymentMethods.PaymentMethodName;
    if (this.coordination.PaymentMethodCode != this.paymentMethodDebitInvoiceCode) {
      // A los diferentes de débito en factura
      this.coordination.Installments = "1";
    }
    if (this.coordination.Installments === "") {
      this.bsModalRef = this.generateInformativeModal('Validación de información', "Seleccione el número de cuotas.", true);
      return;
    }
    this.isLoading = true;
    this.newCoordinationsService
      .payCoordination(this.coordination)
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.StatusCode === 0) {
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false);
            this.coordination.Recommendations = result.Recommendations === "" ? "No se encontraron recomendaciones." : result.Recommendations;
            this.VisibleTwo();
            this.hiddenRecommendations = false;
            this.hiddenButtons = true;
          } else {
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true);
          }
          localStorage.setItem('tokenCreated', 'false');
        },
        (error: any) => this.ErrorRegister(error));
  }

  setProperties() {
    this.paymentForm.form_id = "formCoordinationId";
    this.paymentForm.amount = this.coordination.Price;
    this.paymentForm.email = this.coordination.UserEmail;
    SetProperties(this.paymentForm);
  }

  getBankCardInformation() {
    this.newCoordinationsService
      .getBankCardInformation()
      .subscribe(
        (resultData: any) => {
          const result = resultData["CardInformationList"];
          this.franchisesPayment = result;
        },
        (error: any) => this.ErrorRegister(error));
  }

  private ErrorRegister(error: any) {
    localStorage.setItem('tokenCreated', 'false');
    this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true);
    this.isLoading = false;
  }

  // RECURSIVE LOAD SCRIPTS
  load_scripts(urls: any, final_callback: any, index = 0) {
    const that = this;
    if (typeof urls[index + 1] === "undefined") {
      this.load_script(urls[index], final_callback);
    } else {
      this.load_script(urls[index], function () {
        that.load_scripts(urls, final_callback, index + 1);
      });
    }
  }

  // LOAD SCRIPT
  load_script(url: string, callback: Function) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.onload = function () { callback(); };
    script.src = url;
    document.head.appendChild(script);
  }

  generateInformativeModal(subTitle: string, description: string, isError: boolean, onlyButtonConfirm: boolean = true) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: onlyButtonConfirm,
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
