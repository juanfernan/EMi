import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { FileListModalPage } from 'src/app/shared/file-list-modal/file-list-modal.page';
import { UserLogin } from 'src/app/shared/models/user-login';
import { environment } from 'src/environments/environment';
import { searchButtonConfigExport } from './configs/searchButtonConfig';
import { ListFileModel } from './models/list-file.model';
import { ServiceHistoryType } from './models/service-history-type';
import { ServiceHistory } from './models/serviceHistory';
import { ServiceHistoryRequest } from './models/serviceHistoryRequest';
import { ServiceHistoryService } from './services/service-history.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.page.html',
  styleUrls: ['./service-history.page.scss'],
})
export class ServiceHistoryPage implements OnInit {

  translate: TranslateService;
  servicesHistory: any;
  doctors: any;
  servicesType: any;
  specialities: any;
  specialitiesFilter: any;
  cities: any;
  serviceHistory = new ServiceHistory();
  tmpStartDate: any = '';
  tmpEndDate: any = '';
  p: number = 1;
  country: string;
  hiddenResult: boolean = true;
  email: string | null;
  showPagination: boolean = false;
  detectMinor: any;
  imgRoute: string;
  dataEmpty: boolean;
  isLoading: boolean;
  isColombia: boolean = false;
  specialty: any = [];
  specialtySelected: string;
  bsModalRef: BsModalRef;
  searchButtonConfig = searchButtonConfigExport;
  environment: any;

  private static readonly colsMd4: string = 'col-md-4';
  private static readonly colsMd3: string = 'col-md-3';
  colsMd: string = ServiceHistoryPage.colsMd4;
  inputMinorAuthorizedShow: boolean;
  optionMinorAuthorizedShow: boolean;
  minorAuthorizations: any = [];
  userLogin = new UserLogin();
  showIcon = false;
  form: FormGroup;

  dateFrom: Date = new Date();
  dateUntil: Date = new Date();

  constructor(
    translate: TranslateService,
    private serviceHistoryService: ServiceHistoryService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private bsModalService: BsModalService,
    private fb: FormBuilder
  ) {
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    this.country = environment.country;
    this.translate = translate;
    this.specialtySelected = '';
    translate.setDefaultLang(environment.country);
    this.isColombia = environment.country === 'co';

    this.form = this.fb.group({
      from: [{ value: '', }],
      until: [{ value: '', }],
      status: [{ value: '' }],
    })
  }

  ngOnInit() {
    this.dataEmpty = false;
    //$(window).scrollTop(0); TODO

    this.serviceHistory.ServicesTypeId = '';
    this.serviceHistory.CityId = '';
    this.serviceHistory.SpecialtyId = '';
    this.serviceHistory.DoctorId = '';
    this.serviceHistory.StartDate = '';
    this.serviceHistory.EndDate = '';
    this.serviceHistory.DocumentType = localStorage.getItem('documentType');
    this.serviceHistory.Document = localStorage.getItem('document');
    this.email = localStorage.getItem('userName');

    //Datos del paciente logueado
    let lastNameOne = localStorage.getItem('LastNameOne');
    let lastNameTwo = localStorage.getItem('LastNameTwo');
    let nameOne = localStorage.getItem('NameOne');
    let nameTwo = localStorage.getItem('NameTwo');
    this.userLogin.nameUser =
      nameOne + ' ' + nameTwo + ' ' + lastNameOne + ' ' + lastNameTwo;
    this.getServicesHistory();
    this.getServicesHistoryLists();
    this.getPatiens();
  }

  ngAfterViewInit() {
    let chatData = this.route.snapshot.data;
    // let scriptChatLoaded = localStorage.getItem("scriptChatLoaded");
    // if(scriptChatLoaded === "true"){
    /* TODO
    if (zopimComponent) {
      zopimComponent.settings(null, chatData['chatVisible'], chatData['chatWidget'], chatData['chatDepartment'], '', '');
    }*/
  }

  setDateFrom(val) {
    this.form.controls.from.setValue(val);
    const valueFrom = (<HTMLInputElement>document.getElementById("dateFrom")).value;
  }

  setDateUntil(val) {
    this.form.controls.until.setValue(val);
    const valueUntil = (<HTMLInputElement>document.getElementById("dateUntil")).value;
  }

  obtainDate(d: any) {
    const date = new Date(d);
    if (date && (d.value != '')) {
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    return "--/--/----";
  }

  getServicesHistory() {
    this.isLoading = true;
    this.serviceHistory.SpecialtyId = '';
    if (
      this.specialtySelected &&
      this.specialtySelected != '' &&
      this.specialtySelected != 'Seleccione'
    )
      this.serviceHistory.SpecialtyId = this.specialtySelected;
      this.serviceHistoryService
      .getServicesHistory(this.serviceHistory)
      .subscribe(
        (result: any) => {
          if (result.StatusCode === 0) {
            this.servicesHistory = [];
            this.servicesHistory = result.ServiceHistory;
            if (this.servicesHistory.length > 0) {
              if (
                !this.specialtySelected ||
                this.specialtySelected === '' ||
                this.specialtySelected === 'Seleccione'
              )
                this.setSpecialty(this.servicesHistory);
                this.showPagination = true;
                this.hiddenResult = true;
            } else {
              this.showPagination = false;
              this.hiddenResult = false;
            }
          } else {
            this.dataEmpty = true;
            this.bsModalRef = this.generateInformativeModal(
              result.Title,
              result.Message,
              true,
              false
            );
          }
          this.isLoading = false;
        },
        (error) => this.ErrorRegister(error)
      );
  }

  setSpecialty(servicesHistory: any) {
    this.specialty = [];
    let repeat: boolean;
    servicesHistory.forEach((element: any) => {
      repeat = false;
      if (this.specialty.length == 0 && element.SpecialityName != '')
        this.specialty.push(element.SpecialityName);
      else {
        this.specialty.forEach((elementSpecialty: any) => {
          if (element.SpecialityName == elementSpecialty) repeat = true;
        });
        if (!repeat && element.SpecialityName != '')
          this.specialty.push(element.SpecialityName);
      }
    });
    this.specialty.unshift('Seleccione');
  }

  // Extrayendo servicios y datos del paciente, en los otros inputs
  getServicesHistoryLists() {
    this.isLoading = true;
    this.serviceHistoryService
      .getServicesHistoryLists(this.serviceHistory)
      .subscribe(
        (result: any) => {
          if (result.StatusCode === 0) {
            this.doctors = result.ServicesHistoryLists.Doctors;
            this.specialities = result.ServicesHistoryLists.Specialities;
            this.servicesType = result.ServicesHistoryLists.ServicesType;
            this.cities = result.ServicesHistoryLists.Cities;
          } else {
            this.bsModalRef = this.generateInformativeModal(
              result.Title,
              result.Message,
              true,
              false
            );
          }
          this.isLoading = false;
        },
        (error) => this.ErrorRegister(error)
      );
  }

  // AAE: obteniendo menores autorizados para un usurio
  getPatiens() {
    this.isLoading = true;
    this.serviceHistoryService.getPatiens(this.serviceHistory).subscribe(
      (result: any) => {
        if (result.StatusCode === 0) {
          // Filtrando los menores: los menores que se mostrarán son los que tienen un estado = 1, es decir los autorizados
          let filteredMinorAuthorizations = result.AuthorizedMinors.filter(
            function (filtered: any) {
              return filtered.ESTADO != '0';
            }
          );
          this.minorAuthorizations = filteredMinorAuthorizations;
          this.addUserAcountLikePatient();
          this.colsMd = ServiceHistoryPage.colsMd4;
          // Si no tiene menores esconde el combo dropdown que los lista.
          if (this.minorAuthorizations == '') {
            this.inputMinorAuthorizedShow = false;
          } else {
            this.inputMinorAuthorizedShow = true;
          }
        } else {
          this.bsModalRef = this.generateInformativeModal(
            'Error al traer menores autorizados',
            'En estos momentos, no se pueden obtener los menores con autorización aprobada, intentelo más tarde o contacte con soporte',
            true,
            false
          );
        }
        this.isLoading = false;
      },
      (error) => this.ErrorRegister(error)
    );
  }

  addUserAcountLikePatient() {
    let lastNameOne = localStorage.getItem('LastNameOne');
    let lastNameTwo = localStorage.getItem('LastNameTwo');
    let nameOne = localStorage.getItem('NameOne');
    let nameTwo = localStorage.getItem('NameTwo');

    let userAcount = {
      DOCUMENTO: this.serviceHistory.Document,
      TIPODOC: this.serviceHistory.DocumentType,
      NOMBRE_1: nameOne,
      NOMBRE_2: nameTwo,
      APELLIDO_1: lastNameOne,
      APELLIDO_2: lastNameTwo,
    };
    this.minorAuthorizations.unshift(userAcount);
  }

  // AAE: Se le envian los parametros del (change) en el html y al selecciona una opción, envia eso al actualizar el input
  changeDropDown(event: any) {
    const value = event.target.value;
    // El documento enviado como parámetro se decie según selección de usuario, por defecto el de usuario logueado o menor.
    this.serviceHistory.Document = value;
    // extrayendo tipo documento, si el documento del objeto es igual al seleccionado
    this.serviceHistory.DocumentType = this.minorAuthorizations.filter(
      (n: any) => n.DOCUMENTO == value
    )[0].TIPODOC;

    // Refrescando datos selectos al escojer un paciente.
    this.serviceHistory.ServicesTypeId = '';
    this.serviceHistory.CityId = '';
    this.serviceHistory.SpecialtyId = '';
    this.serviceHistory.DoctorId = '';
    this.tmpStartDate = '';
    this.tmpEndDate = '';
    // Recargando datos del paciente en los otros inputs
    this.getServicesHistoryLists();
    this.detectMinor = true;

    if (this.serviceHistory.Document === '') {
      this.serviceHistory.DocumentType = localStorage.getItem('documentType');
      this.serviceHistory.Document = localStorage.getItem('document');
      this.detectMinor = false;
      // Recargando datos del paciente en los otros inputs
      this.getServicesHistoryLists();
    }
  }

  onChangeServicesTypes(serviceTypeId: string) {
    if (serviceTypeId != null && serviceTypeId != '') {
      if (this.specialities.length > 0) {
        this.specialitiesFilter = this.specialities.filter(
          (obj: any) => obj.Category === serviceTypeId
        );
      } else {
        this.specialities = [];
      }
    }
  }

  onChangePatienteId(serviceTypeId: string) {
    if (serviceTypeId != null && serviceTypeId != '') {
      if (this.specialities.length > 0) {
        this.specialitiesFilter = this.specialities.filter(
          (obj: any) => obj.Category === serviceTypeId
        );
      } else {
        this.specialities = [];
      }
    }
  }

  search() {
    let tmpStartDateNew: any;
    let tmpEndDateNew: any;
    if (this.tmpStartDate != '' && this.tmpStartDate != null) {
      this.serviceHistory.StartDate = this.datePipe.transform(
        this.tmpStartDate,
        'yyyyMMdd'
      );
    } else {
      this.serviceHistory.StartDate = '';
    }
    if (this.tmpEndDate != '' && this.tmpEndDate != null) {
      this.serviceHistory.EndDate = this.datePipe.transform(
        this.tmpEndDate,
        'yyyyMMdd'
      );
    } else {
      this.serviceHistory.EndDate = '';
    }

    if (
      this.serviceHistory.StartDate != '' &&
      this.serviceHistory.EndDate != ''
    ) {
      if (tmpEndDateNew < tmpStartDateNew) {
        this.bsModalRef = this.generateInformativeModal(
          'Validación de información',
          'La fecha final debe ser mayor a la inicial.',
          true,
          false
        );
        return;
      }
    }
    this.getServicesHistory();
  }

  openServiceHistoryPrescription(object: any) {
    this.openFileLinkByDocumentCode(
      object.FileCode,
      ServiceHistoryType.Prescription
    );
  }

  openServiceHistoryInability(object: any) {
    this.openFileLinkByDocumentCode(
      object.FileCode,
      ServiceHistoryType.Inability
    );
  }

  openFileLinkByDocumentCode(
    code: string,
    serviceHistoryType: ServiceHistoryType
  ) {
    let serviceHistoryRequest = new ServiceHistoryRequest();
    serviceHistoryRequest.Code = code;
    switch (serviceHistoryType) {
      case ServiceHistoryType.Prescription:
        this.serviceHistoryService
          .GetServicesHistoryPrescriptions(serviceHistoryRequest)
          .subscribe((resp: any) => {
            if (resp.ServiceHistoryPrescription.length == 1) {
              try {
                window.open(resp.ServiceHistoryPrescription[0].Link);
              } catch (e) {
                this.bsModalRef = this.generateInformativeModal(
                  'Atención',
                  'No se puede abrir el archivo seleccionado.',
                  true,
                  false
                );
              }
            } else if (resp.ServiceHistoryPrescription.length > 1) {
              let listFileModel: any[] = [];
              let index = 1;

              resp.ServiceHistoryPrescription.forEach((element: any) => {
                let fileModel = new ListFileModel();
                fileModel.Link = element.Link;
                fileModel.NameFile = 'Formula_Medica_' + index;
                index++;
                listFileModel.push(fileModel);
              });
              this.bsModalRef = this.generateModalFile(listFileModel);
              /* TODO create new modal
            this.dialogService.addDialog(ModalListFilesComponent, {
              listFiles: listFileModel
            }); */
            } else {
              this.bsModalRef = this.generateInformativeModal(
                'Atención',
                resp.Message,
                true,
                false
              );
            }
          });
        break;
      case ServiceHistoryType.Inability:
        this.serviceHistoryService
          .GetServicesHistoryInability(serviceHistoryRequest)
          .subscribe((resp: any) => {
            if (resp.ServiceHistoryPrescription.length == 1) {
              try {
                window.open(resp.ServiceHistoryPrescription[0].Link);
              } catch (e) {
                this.bsModalRef = this.generateInformativeModal(
                  'Atención',
                  'No se puede abrir el archivo seleccionado.',
                  true,
                  false
                );
              }
            } else if (resp.ServiceHistoryPrescription.length > 1) {
              let listFileModel: any[] = [];
              let index = 1;

              resp.ServiceHistoryPrescription.forEach((element: any) => {
                let fileModel = new ListFileModel();
                fileModel.Link = element.Link;
                fileModel.NameFile = 'Certificado_Incapacidad_' + index;
                index++;
                listFileModel.push(fileModel);
              });
              /*
            this.dialogService.addDialog(ModalListFilesComponent, {
              listFiles: listFileModel
            });*/
            } else {
              this.bsModalRef = this.generateInformativeModal(
                'Atención',
                resp.Message,
                true,
                false
              );
            }
          });
        break;
    }
  }

  getServiceFile(obj: any) {
    this.isLoading = true;
    this.serviceHistoryService
      .getServiceFile(this.email, obj.FileCode)
      .subscribe(
        (result: any) => {
          if (result.StatusCode === 0) {
            let pdfCode = result.Value;
            fetch('data:application/pdf;base64,' + pdfCode)
              .then(function (resp) {
                return resp.blob();
              })
              .then(function (blob) {
                let name = 'RegistroClínico';
                saveAs(blob, name);
              });
          } else {
            this.bsModalRef = this.generateInformativeModal(
              result.Title,
              result.Message,
              true,
              false
            );
          }
          this.isLoading = false;
        },
        (error) => this.ErrorRegister(error)
      );
  }

  pageChanged(event: any) {
    this.p = event;
    //Mover scroll
    //$(window).scrollTop(0);
  }

  private ErrorRegister(error: any) {
    this.isLoading = false;
    this.bsModalRef = this.generateInformativeModal(
      'Inconvenientes con el portal',
      'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.',
      true,
      false
    );
  }

  generateModalFile(listFileModel: ListFileModel[]) {
    return this.bsModalService.show(FileListModalPage, {
      initialState: {
        listFiles: listFileModel,
      },
      class: 'modal-lg',
    });
  }

  generateInformativeModal(
    subTitle: string,
    description: string,
    isError: boolean,
    twoButtons: boolean
  ) {
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
      ignoreBackdropClick: true,
    };
    return this.bsModalService.show(InformativeModalComponent, initialState);
  }
}
