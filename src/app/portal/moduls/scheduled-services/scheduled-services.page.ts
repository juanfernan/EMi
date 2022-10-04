import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UserLogin } from 'src/app/shared/models/user-login';
import { environment } from 'src/environments/environment';
import { cancelButtonConfigExport } from './configs/cancelButtonConfig';
import { cancelMedicalHomeService } from './models/cancelMedicalHome';
import { ScheduledServices } from './models/scheduledServices';
import { ScheduledServicesService } from './services/scheduled-services.service';

@Component({
  selector: 'app-scheduled-services',
  templateUrl: './scheduled-services.page.html',
  styleUrls: ['./scheduled-services.page.scss'],
})

export class ScheduledServicesPage implements OnInit {

  isLoading: boolean;
  translate: TranslateService;
  country = environment.country;
  userLogin = new UserLogin();
  scheduledServices: any;
  showPagination: boolean = false;
  p: number = 1;
  bsModalRef: BsModalRef;
  cancelButtonConfig: any = cancelButtonConfigExport;
  mockedScheduledServices: any = [
    {
      DescriptionState: "Pendiente",
      UserName: "Juan",
      UserDocumentTypeStr: "DNI",
      userDocument: "12345678",
      ServiceTypeDescription: "Consulta",
      SpecialityName: "Odontología",
      DoctorName: "Dr. Juan",
      Date: "10/10/2019",
      Address: "Av. Las Flores 123",
      CityName: "Lima",
      ServiceType: 9,
      CodeState: 2,
      ServiceNumber: "12",
      Canceled: false
    },
    {
      DescriptionState: "Pendiente",
      UserName: "Juan",
      UserDocumentTypeStr: "DNI",
      userDocument: "12345678",
      ServiceTypeDescription: "Consulta",
      SpecialityName: "Odontología",
      DoctorName: "Dr. Juan",
      Date: "10/10/2019",
      Address: "Av. Las Flores 123",
      CityName: "Lima",
      ServiceType: 7,
      CodeState: 1,
      ServiceNumber: "12"
    },
    {
      DescriptionState: "Pendiente",
      UserName: "Juan",
      UserDocumentTypeStr: "DNI",
      userDocument: "12345678",
      ServiceTypeDescription: "Consulta",
      SpecialityName: "Odontología",
      DoctorName: "Dr. Juan",
      Date: "10/10/2019",
      Address: "Av. Las Flores 123",
      CityName: "Lima",
      ServiceType: 7,
      CodeState: 1,
      ServiceNumber: "12"
    }
  ]

  constructor(
    private scheduledServicesService: ScheduledServicesService,
    translate: TranslateService,
    private route: ActivatedRoute,
    private bsModalService: BsModalService,
    private router: Router
  ) {
    this.translate = translate;
    translate.setDefaultLang(environment.country);
  }

  ngOnInit() {
    this.cancelButtonConfig.text = this.translate.instant('PORTAL.SCHEDULED-SERVICES.TitleButtonCancel')
    this.userLogin.documentType = localStorage.getItem("documentType");
    this.userLogin.document = localStorage.getItem("document");
    this.userLogin.idReference = localStorage.getItem("registerId");
    let lastNameOne = localStorage.getItem("LastNameOne");
    let lastNameTwo = localStorage.getItem("LastNameTwo");
    let nameTwo = localStorage.getItem("NameTwo");
    this.userLogin.nameUser = localStorage.getItem("NameOne") + " " + nameTwo + " " + lastNameOne + " " + lastNameTwo;
    this.loadScheduledServices();
  }

  ngAfterViewInit() {
    let chatData = this.route.snapshot.data;
    // let scriptChatLoaded = localStorage.getItem("scriptChatLoaded");
    // if(scriptChatLoaded === "true"){
    //if (zopimComponent) {
    //  zopimComponent.settings(null, chatData['chatVisible'], chatData['chatWidget'], chatData['chatDepartment'], '', '');
    //}
  }

  loadScheduledServices() {
    this.isLoading = true;
    this.scheduledServicesService
      .getSheduledServices(this.userLogin)
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.StatusCode === 0) {
            if (result.ServiceHistory.length > 0) {
              this.showPagination = true;
              this.scheduledServices = result.ServiceHistory;
            } else {/* Mock
              this.showPagination = true;
              this.scheduledServices = this.mockedScheduledServices;
              */
              this.showPagination = false;
              this.bsModalRef = this.generateInformativeModal('Servicios programados', 'No se encontraron servicios programados.', true, false);
              this.bsModalRef.content.onClose.subscribe((accept: any) => {
                this.router.navigate(['/portal/home'], { replaceUrl: true });
              })
            }
          } else {
            this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
            this.bsModalRef.content.onClose.subscribe((accept: any) => {
              this.router.navigate(['/portal/home'], { replaceUrl: true });
            })
          }
        },
        error => this.ErrorRegister(error));
  }

  cancelService(object: any) {
    this.bsModalRef = this.generateInformativeModal('Cancelar servicio', '¿Estás seguro que deseas cancelar el servicio?', false, true);
    this.bsModalRef.content.onClose.subscribe((accept: any) => {
      if (accept) {
        this.isLoading = true;
        let scheduledServices = new ScheduledServices();
        scheduledServices.Code = object.Code;
        scheduledServices.Canceled = object.Canceled
        scheduledServices.ServiceType = object.ServiceType;
        let coordination = object.Coordination;
        scheduledServices.IdReference = coordination.IdReference;
        scheduledServices.AgendaType = coordination.AgendaType;
        scheduledServices.RDACode = coordination.RDACode;
        scheduledServices.ClinicCode = coordination.MedicalCenter ? coordination.MedicalCenter.ClinicCode : "";
        scheduledServices.SpecialityCode = coordination.SpecialityCode;
        scheduledServices.YearMonthDay = coordination.YearMonthDay;
        scheduledServices.Time = coordination.Time;
        scheduledServices.Document = coordination.Document;
        scheduledServices.DocumentTypeUser = this.userLogin.documentType;
        scheduledServices.DocumentUser = this.userLogin.document;
        scheduledServices.ApplicantNameOne = localStorage.getItem("NameOne");
        scheduledServices.ApplicantNameTwo = localStorage.getItem("NameTwo");
        scheduledServices.ApplicantLastNameOne = localStorage.getItem("LastNameOne");
        scheduledServices.ApplicantLastNameTwo = localStorage.getItem("LastNameTwo");
        scheduledServices.ApplicantDocumentType = localStorage.getItem("documentType");
        scheduledServices.ApplicantDocumentTypeName = localStorage.getItem("documentTypeName");
        scheduledServices.ApplicantDocument = localStorage.getItem("document");
        scheduledServices.ApplicantCellPhone = localStorage.getItem("CellPhone");
        scheduledServices.ApplicantMail = localStorage.getItem("userName");

        this.scheduledServicesService
          .cancelService(scheduledServices).subscribe(
            (result: any) => {
              if (result.StatusCode === 0) {
                this.isLoading = false;
                this.bsModalRef = this.generateInformativeModal(result.Message, result.Title, false, false);
                this.bsModalRef.content.onClose.subscribe((accept: any) => {
                  window.location.reload()
                })
              } else {
                this.isLoading = false;
                this.bsModalRef = this.generateInformativeModal(result.Message, result.Title, true, false);
              }
            }
          )
      }
    }, ((error: any) => this.ErrorRegister(error)))
  }

  cancelMedicalHomeService(object: any) {
    if (object.UserName == null || object.UserName == '') {
      object.UserName = this.userLogin.nameUser
    }
    this.bsModalRef = this.generateInformativeModal('Cancelar servicio', '¿Estás seguro que deseas cancelar el servicio?', false, true);
    this.bsModalRef.content.onClose.subscribe((accept: any) => {
      if (accept) {
        this.isLoading = true;
        let cancelMedicalService = new cancelMedicalHomeService();
        cancelMedicalService.IdService = object.IdService;
        this.scheduledServicesService.cancelMedicalHomeService(cancelMedicalService).subscribe(
          (result: any) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
              this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false, false);
            } else {
              this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
            }
          })
      }
    }, ((error: any) => this.ErrorRegister(error)))
  }

  pageChanged(event: any) {
    this.p = event;
    //Mover scroll
    //$(window).scrollTop(0);
  }

  private ErrorRegister(error: any) {
    this.isLoading = false;
    this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true, false);
    /*
    this.dialogService.removeAll();
    this.dialogService.addDialog(ModalComponent, {
      title: 'Inconvenientes con el portal',
      message: 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.',
      imageUrl: this.config.info.alertImage,
      buttonConfirmText: "ACEPTAR"
    }, { closeByClickingOutside: true }); */
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
