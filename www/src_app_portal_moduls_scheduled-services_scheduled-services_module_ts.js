"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_scheduled-services_scheduled-services_module_ts"],{

/***/ 92749:
/*!******************************************************************************!*\
  !*** ./src/app/portal/moduls/scheduled-services/models/cancelMedicalHome.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelMedicalHomeService": () => (/* binding */ cancelMedicalHomeService)
/* harmony export */ });
class cancelMedicalHomeService {
}


/***/ }),

/***/ 17371:
/*!******************************************************************************!*\
  !*** ./src/app/portal/moduls/scheduled-services/models/scheduledServices.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduledServices": () => (/* binding */ ScheduledServices)
/* harmony export */ });
class ScheduledServices {
}


/***/ }),

/***/ 42578:
/*!***************************************************************************************!*\
  !*** ./src/app/portal/moduls/scheduled-services/scheduled-services-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduledServicesPageRoutingModule": () => (/* binding */ ScheduledServicesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _scheduled_services_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduled-services.page */ 83557);





const routes = [
    {
        path: '',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _scheduled_services_page__WEBPACK_IMPORTED_MODULE_1__.ScheduledServicesPage
    }
];
let ScheduledServicesPageRoutingModule = class ScheduledServicesPageRoutingModule {
};
ScheduledServicesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ScheduledServicesPageRoutingModule);



/***/ }),

/***/ 75398:
/*!*******************************************************************************!*\
  !*** ./src/app/portal/moduls/scheduled-services/scheduled-services.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduledServicesPageModule": () => (/* binding */ ScheduledServicesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scheduled_services_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduled-services-routing.module */ 42578);
/* harmony import */ var _scheduled_services_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduled-services.page */ 83557);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ScheduledServicesPageModule = class ScheduledServicesPageModule {
};
ScheduledServicesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _scheduled_services_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScheduledServicesPageRoutingModule
        ],
        declarations: [_scheduled_services_page__WEBPACK_IMPORTED_MODULE_1__.ScheduledServicesPage]
    })
], ScheduledServicesPageModule);



/***/ }),

/***/ 83557:
/*!*****************************************************************************!*\
  !*** ./src/app/portal/moduls/scheduled-services/scheduled-services.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduledServicesPage": () => (/* binding */ ScheduledServicesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scheduled_services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduled-services.page.html?ngResource */ 85097);
/* harmony import */ var _scheduled_services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduled-services.page.scss?ngResource */ 65933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/user-login */ 20743);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _configs_cancelButtonConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs/cancelButtonConfig */ 67407);
/* harmony import */ var _models_cancelMedicalHome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/cancelMedicalHome */ 92749);
/* harmony import */ var _models_scheduledServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/scheduledServices */ 17371);
/* harmony import */ var _services_scheduled_services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/scheduled-services.service */ 82664);














let ScheduledServicesPage = class ScheduledServicesPage {
    constructor(scheduledServicesService, translate, route, bsModalService, router) {
        this.scheduledServicesService = scheduledServicesService;
        this.route = route;
        this.bsModalService = bsModalService;
        this.router = router;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.country;
        this.userLogin = new src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_3__.UserLogin();
        this.showPagination = false;
        this.p = 1;
        this.cancelButtonConfig = _configs_cancelButtonConfig__WEBPACK_IMPORTED_MODULE_5__.cancelButtonConfigExport;
        this.mockedScheduledServices = [
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
        ];
        this.translate = translate;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.country);
    }
    ngOnInit() {
        this.cancelButtonConfig.text = this.translate.instant('PORTAL.SCHEDULED-SERVICES.TitleButtonCancel');
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
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                if (result.ServiceHistory.length > 0) {
                    this.showPagination = true;
                    this.scheduledServices = result.ServiceHistory;
                }
                else { /* Mock
                  this.showPagination = true;
                  this.scheduledServices = this.mockedScheduledServices;
                  */
                    this.showPagination = false;
                    this.bsModalRef = this.generateInformativeModal('Servicios programados', 'No se encontraron servicios programados.', true, false);
                    this.bsModalRef.content.onClose.subscribe((accept) => {
                        this.router.navigate(['/portal/home'], { replaceUrl: true });
                    });
                }
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
                this.bsModalRef.content.onClose.subscribe((accept) => {
                    this.router.navigate(['/portal/home'], { replaceUrl: true });
                });
            }
        }, error => this.ErrorRegister(error));
    }
    cancelService(object) {
        this.bsModalRef = this.generateInformativeModal('Cancelar servicio', '¿Estás seguro que deseas cancelar el servicio?', false, true);
        this.bsModalRef.content.onClose.subscribe((accept) => {
            if (accept) {
                this.isLoading = true;
                let scheduledServices = new _models_scheduledServices__WEBPACK_IMPORTED_MODULE_7__.ScheduledServices();
                scheduledServices.Code = object.Code;
                scheduledServices.Canceled = object.Canceled;
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
                    .cancelService(scheduledServices).subscribe((result) => {
                    if (result.StatusCode === 0) {
                        this.isLoading = false;
                        this.bsModalRef = this.generateInformativeModal(result.Message, result.Title, false, false);
                        this.bsModalRef.content.onClose.subscribe((accept) => {
                            window.location.reload();
                        });
                    }
                    else {
                        this.isLoading = false;
                        this.bsModalRef = this.generateInformativeModal(result.Message, result.Title, true, false);
                    }
                });
            }
        }, ((error) => this.ErrorRegister(error)));
    }
    cancelMedicalHomeService(object) {
        if (object.UserName == null || object.UserName == '') {
            object.UserName = this.userLogin.nameUser;
        }
        this.bsModalRef = this.generateInformativeModal('Cancelar servicio', '¿Estás seguro que deseas cancelar el servicio?', false, true);
        this.bsModalRef.content.onClose.subscribe((accept) => {
            if (accept) {
                this.isLoading = true;
                let cancelMedicalService = new _models_cancelMedicalHome__WEBPACK_IMPORTED_MODULE_6__.cancelMedicalHomeService();
                cancelMedicalService.IdService = object.IdService;
                this.scheduledServicesService.cancelMedicalHomeService(cancelMedicalService).subscribe((result) => {
                    this.isLoading = false;
                    if (result.StatusCode === 0) {
                        this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false, false);
                    }
                    else {
                        this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
                    }
                });
            }
        }, ((error) => this.ErrorRegister(error)));
    }
    pageChanged(event) {
        this.p = event;
        //Mover scroll
        //$(window).scrollTop(0);
    }
    ErrorRegister(error) {
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
    generateInformativeModal(subTitle, description, isError, twoButtons) {
        const initialState = {
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
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
};
ScheduledServicesPage.ctorParameters = () => [
    { type: _services_scheduled_services_service__WEBPACK_IMPORTED_MODULE_8__.ScheduledServicesService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.BsModalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
ScheduledServicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-scheduled-services',
        template: _scheduled_services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scheduled_services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScheduledServicesPage);



/***/ }),

/***/ 82664:
/*!*****************************************************************************************!*\
  !*** ./src/app/portal/moduls/scheduled-services/services/scheduled-services.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduledServicesService": () => (/* binding */ ScheduledServicesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let ScheduledServicesService = class ScheduledServicesService {
    constructor(http) {
        this.http = http;
    }
    getSheduledServices(userLogin) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Services/GetSheduledServices';
        let params = {
            DocumentType: userLogin.documentType,
            Document: userLogin.document,
            IdReference: userLogin.idReference
        };
        return this.http.post(url, params);
    }
    cancelService(scheduledServices) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Services/CancelService';
        //let url = "http://localhost:52401/api/Services/CancelService";
        let params = {
            Code: scheduledServices.Code,
            ServiceType: scheduledServices.ServiceType,
            DocumentType: scheduledServices.DocumentTypeUser,
            Document: scheduledServices.DocumentUser,
            CancelCoordinationRequest: {
                IdReference: scheduledServices.IdReference,
                AgendaType: scheduledServices.AgendaType,
                RDACode: scheduledServices.RDACode,
                ClinicCode: scheduledServices.ClinicCode,
                SpecialityCode: scheduledServices.SpecialityCode,
                YearMonthDay: scheduledServices.YearMonthDay,
                Time: scheduledServices.Time,
                Document: scheduledServices.Document
            },
            Applicant: {
                ApplicantNameOne: scheduledServices.ApplicantNameOne,
                ApplicantNameTwo: scheduledServices.ApplicantNameTwo,
                ApplicantLastNameOne: scheduledServices.ApplicantLastNameOne,
                ApplicantLastNameTwo: scheduledServices.ApplicantLastNameTwo,
                ApplicantDocumentType: scheduledServices.ApplicantDocumentType,
                ApplicantDocumentTypeName: scheduledServices.ApplicantDocumentTypeName,
                ApplicantDocument: scheduledServices.ApplicantDocument,
                ApplicantCellPhone: scheduledServices.ApplicantCellPhone,
                ApplicantMail: scheduledServices.ApplicantMail
            }
        };
        return this.http.post(url, params);
    }
    cancelMedicalHomeService(cancelMedicalHomeService) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Services/GetCancelMedicalHomeService';
        let params = {
            IdService: cancelMedicalHomeService.IdService
        };
        return this.http.post(url, params);
    }
};
ScheduledServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ScheduledServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ScheduledServicesService);



/***/ }),

/***/ 65933:
/*!******************************************************************************************!*\
  !*** ./src/app/portal/moduls/scheduled-services/scheduled-services.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlZC1zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoic2NoZWR1bGVkLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbn0iXX0= */";

/***/ }),

/***/ 85097:
/*!******************************************************************************************!*\
  !*** ./src/app/portal/moduls/scheduled-services/scheduled-services.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Servicios coordinados</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.SCHEDULED-SERVICES.Title\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-subtitle\">{{\"PORTAL.SCHEDULED-SERVICES.Description\" | translate}}</ion-label>\n    </ion-row>\n\n    <div *ngFor=\"let obj of scheduledServices\" class=\"ion-padding-top\">\n\n        <ion-card>\n            <ion-card-header>\n                <ion-card-title>{{obj.ServiceTypeDescription}}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n                    <ion-label *ngIf=\"obj.UserName\">{{obj.UserName}}</ion-label>\n                </ion-row>\n\n                <ion-row *ngIf=\"obj.UserName == null || obj.UserName.length === 0\">\n                    <ion-label>{{userLogin.nameUser}}</ion-label>\n                </ion-row>\n\n                <ion-row *ngIf=\"obj.ServiceType == 9\">\n                    <ion-label>{{obj.DescriptionState}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <ion-label>{{obj.UserDocumentTypeStr}} {{obj.userDocument}}</ion-label>\n                </ion-row>\n\n                <ion-row *ngIf=\"obj.userDocument == null || obj.userDocument.length === 0\">\n                    <ion-label>{{userLogin.document}}</ion-label>\n                </ion-row>\n\n                <hr/>\n\n                <ion-row *ngIf=\"obj.ServiceTypeDescription\">\n                    <ion-label>{{obj.ServiceTypeDescription}}</ion-label>\n                </ion-row>\n\n                <ion-row *ngIf=\"obj.ServiceType == 9\" [hidden]=\"obj.ServiceNumber === '0' || obj.ServiceNumber === ''\">\n                    <ion-label>No. {{obj.ServiceNumber}}</ion-label>\n                </ion-row>\n\n                <ion-row *ngIf=\"obj.ServiceType != 9\">\n                    <ion-label>{{obj.SpecialityName}}</ion-label>\n                </ion-row>\n\n                <ion-row *ngIf=\"obj.DoctorName\">\n                    <ion-label>{{obj.DoctorName}}</ion-label>\n                </ion-row>\n\n                <ion-row *ngIf=\"obj.Date\">\n                    <ion-label>{{obj.Date}}</ion-label>\n                </ion-row>\n\n                <ion-row *ngIf=\"obj.ServiceType != 9\">\n                    <ion-label *ngIf=\"obj.Address\">{{obj.Address}}</ion-label>\n                </ion-row>\n\n                <ion-row *ngIf=\"obj.CityName\">\n                    <ion-label>{{obj.CityName}}</ion-label>\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n        <ion-row>\n            <ion-col>\n                <app-button [configuration]=\"cancelButtonConfig\" *ngIf=\"obj.ServiceType != 9\" (click)=\"cancelService(obj)\"></app-button>\n            </ion-col>\n            <ion-col>\n                <app-button [configuration]=\"cancelButtonConfig\" *ngIf=\"obj.Canceled == false && obj.ServiceType == 9 && obj.CodeState != 3\" (click)=\"cancelMedicalHomeService(obj)\"></app-button>\n            </ion-col>\n        </ion-row>\n\n    </div>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_scheduled-services_scheduled-services_module_ts.js.map