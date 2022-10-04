"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_service-history_service-history_module_ts"],{

/***/ 23117:
/*!*****************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/configs/searchButtonConfig.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchButtonConfigExport": () => (/* binding */ searchButtonConfigExport)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);


const searchButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
searchButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Primary;
searchButtonConfig.text = 'Buscar';
searchButtonConfig.width = "100px";
searchButtonConfig.height = "40px";
const searchButtonConfigExport = searchButtonConfig;


/***/ }),

/***/ 98279:
/*!*************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/models/list-file.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListFileModel": () => (/* binding */ ListFileModel)
/* harmony export */ });
class ListFileModel {
}


/***/ }),

/***/ 25994:
/*!******************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/models/service-history-type.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceHistoryType": () => (/* binding */ ServiceHistoryType)
/* harmony export */ });
var ServiceHistoryType;
(function (ServiceHistoryType) {
    ServiceHistoryType[ServiceHistoryType["Prescription"] = 1] = "Prescription";
    ServiceHistoryType[ServiceHistoryType["Inability"] = 2] = "Inability";
})(ServiceHistoryType || (ServiceHistoryType = {}));


/***/ }),

/***/ 66768:
/*!************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/models/serviceHistory.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceHistory": () => (/* binding */ ServiceHistory)
/* harmony export */ });
class ServiceHistory {
}


/***/ }),

/***/ 16716:
/*!*******************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/models/serviceHistoryRequest.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceHistoryRequest": () => (/* binding */ ServiceHistoryRequest)
/* harmony export */ });
class ServiceHistoryRequest {
}


/***/ }),

/***/ 51269:
/*!*********************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/service-history-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceHistoryPageRoutingModule": () => (/* binding */ ServiceHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _service_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-history.page */ 7581);





const routes = [
    {
        path: '',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _service_history_page__WEBPACK_IMPORTED_MODULE_1__.ServiceHistoryPage
    }
];
let ServiceHistoryPageRoutingModule = class ServiceHistoryPageRoutingModule {
};
ServiceHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ServiceHistoryPageRoutingModule);



/***/ }),

/***/ 5417:
/*!*************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/service-history.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceHistoryPageModule": () => (/* binding */ ServiceHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-history-routing.module */ 51269);
/* harmony import */ var _service_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-history.page */ 7581);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 27043);









let ServiceHistoryPageModule = class ServiceHistoryPageModule {
};
ServiceHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _service_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiceHistoryPageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule
        ],
        declarations: [
            _service_history_page__WEBPACK_IMPORTED_MODULE_1__.ServiceHistoryPage
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], ServiceHistoryPageModule);



/***/ }),

/***/ 7581:
/*!***********************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/service-history.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceHistoryPage": () => (/* binding */ ServiceHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _service_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-history.page.html?ngResource */ 76610);
/* harmony import */ var _service_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-history.page.scss?ngResource */ 67117);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_file_list_modal_file_list_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/file-list-modal/file-list-modal.page */ 56869);
/* harmony import */ var src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/user-login */ 20743);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _configs_searchButtonConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configs/searchButtonConfig */ 23117);
/* harmony import */ var _models_list_file_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/list-file.model */ 98279);
/* harmony import */ var _models_service_history_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/service-history-type */ 25994);
/* harmony import */ var _models_serviceHistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/serviceHistory */ 66768);
/* harmony import */ var _models_serviceHistoryRequest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/serviceHistoryRequest */ 16716);
/* harmony import */ var _services_service_history_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/service-history.service */ 95401);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_12__);




















let ServiceHistoryPage = class ServiceHistoryPage {
    constructor(translate, serviceHistoryService, datePipe, route, bsModalService, fb) {
        this.serviceHistoryService = serviceHistoryService;
        this.datePipe = datePipe;
        this.route = route;
        this.bsModalService = bsModalService;
        this.fb = fb;
        this.serviceHistory = new _models_serviceHistory__WEBPACK_IMPORTED_MODULE_9__.ServiceHistory();
        this.tmpStartDate = '';
        this.tmpEndDate = '';
        this.p = 1;
        this.hiddenResult = true;
        this.showPagination = false;
        this.isColombia = false;
        this.specialty = [];
        this.searchButtonConfig = _configs_searchButtonConfig__WEBPACK_IMPORTED_MODULE_6__.searchButtonConfigExport;
        this.colsMd = ServiceHistoryPage.colsMd4;
        this.minorAuthorizations = [];
        this.userLogin = new src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_4__.UserLogin();
        this.showIcon = false;
        this.dateFrom = new Date();
        this.dateUntil = new Date();
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagesRoute;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.country;
        this.translate = translate;
        this.specialtySelected = '';
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.country);
        this.isColombia = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.country === 'co';
        this.form = this.fb.group({
            from: [{ value: '', }],
            until: [{ value: '', }],
            status: [{ value: '' }],
        });
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
        const valueFrom = document.getElementById("dateFrom").value;
    }
    setDateUntil(val) {
        this.form.controls.until.setValue(val);
        const valueUntil = document.getElementById("dateUntil").value;
    }
    obtainDate(d) {
        const date = new Date(d);
        if (date && (d.value != '')) {
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        }
        return "--/--/----";
    }
    getServicesHistory() {
        this.isLoading = true;
        this.serviceHistory.SpecialtyId = '';
        if (this.specialtySelected &&
            this.specialtySelected != '' &&
            this.specialtySelected != 'Seleccione')
            this.serviceHistory.SpecialtyId = this.specialtySelected;
        this.serviceHistoryService
            .getServicesHistory(this.serviceHistory)
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                this.servicesHistory = [];
                this.servicesHistory = result.ServiceHistory;
                if (this.servicesHistory.length > 0) {
                    if (!this.specialtySelected ||
                        this.specialtySelected === '' ||
                        this.specialtySelected === 'Seleccione')
                        this.setSpecialty(this.servicesHistory);
                    this.showPagination = true;
                    this.hiddenResult = true;
                }
                else {
                    this.showPagination = false;
                    this.hiddenResult = false;
                }
            }
            else {
                this.dataEmpty = true;
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
            }
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
    }
    setSpecialty(servicesHistory) {
        this.specialty = [];
        let repeat;
        servicesHistory.forEach((element) => {
            repeat = false;
            if (this.specialty.length == 0 && element.SpecialityName != '')
                this.specialty.push(element.SpecialityName);
            else {
                this.specialty.forEach((elementSpecialty) => {
                    if (element.SpecialityName == elementSpecialty)
                        repeat = true;
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
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                this.doctors = result.ServicesHistoryLists.Doctors;
                this.specialities = result.ServicesHistoryLists.Specialities;
                this.servicesType = result.ServicesHistoryLists.ServicesType;
                this.cities = result.ServicesHistoryLists.Cities;
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
            }
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
    }
    // AAE: obteniendo menores autorizados para un usurio
    getPatiens() {
        this.isLoading = true;
        this.serviceHistoryService.getPatiens(this.serviceHistory).subscribe((result) => {
            if (result.StatusCode === 0) {
                // Filtrando los menores: los menores que se mostrarán son los que tienen un estado = 1, es decir los autorizados
                let filteredMinorAuthorizations = result.AuthorizedMinors.filter(function (filtered) {
                    return filtered.ESTADO != '0';
                });
                this.minorAuthorizations = filteredMinorAuthorizations;
                this.addUserAcountLikePatient();
                this.colsMd = ServiceHistoryPage.colsMd4;
                // Si no tiene menores esconde el combo dropdown que los lista.
                if (this.minorAuthorizations == '') {
                    this.inputMinorAuthorizedShow = false;
                }
                else {
                    this.inputMinorAuthorizedShow = true;
                }
            }
            else {
                this.bsModalRef = this.generateInformativeModal('Error al traer menores autorizados', 'En estos momentos, no se pueden obtener los menores con autorización aprobada, intentelo más tarde o contacte con soporte', true, false);
            }
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
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
    changeDropDown(event) {
        const value = event.target.value;
        // El documento enviado como parámetro se decie según selección de usuario, por defecto el de usuario logueado o menor.
        this.serviceHistory.Document = value;
        // extrayendo tipo documento, si el documento del objeto es igual al seleccionado
        this.serviceHistory.DocumentType = this.minorAuthorizations.filter((n) => n.DOCUMENTO == value)[0].TIPODOC;
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
    onChangeServicesTypes(serviceTypeId) {
        if (serviceTypeId != null && serviceTypeId != '') {
            if (this.specialities.length > 0) {
                this.specialitiesFilter = this.specialities.filter((obj) => obj.Category === serviceTypeId);
            }
            else {
                this.specialities = [];
            }
        }
    }
    onChangePatienteId(serviceTypeId) {
        if (serviceTypeId != null && serviceTypeId != '') {
            if (this.specialities.length > 0) {
                this.specialitiesFilter = this.specialities.filter((obj) => obj.Category === serviceTypeId);
            }
            else {
                this.specialities = [];
            }
        }
    }
    search() {
        let tmpStartDateNew;
        let tmpEndDateNew;
        if (this.tmpStartDate != '' && this.tmpStartDate != null) {
            this.serviceHistory.StartDate = this.datePipe.transform(this.tmpStartDate, 'yyyyMMdd');
        }
        else {
            this.serviceHistory.StartDate = '';
        }
        if (this.tmpEndDate != '' && this.tmpEndDate != null) {
            this.serviceHistory.EndDate = this.datePipe.transform(this.tmpEndDate, 'yyyyMMdd');
        }
        else {
            this.serviceHistory.EndDate = '';
        }
        if (this.serviceHistory.StartDate != '' &&
            this.serviceHistory.EndDate != '') {
            if (tmpEndDateNew < tmpStartDateNew) {
                this.bsModalRef = this.generateInformativeModal('Validación de información', 'La fecha final debe ser mayor a la inicial.', true, false);
                return;
            }
        }
        this.getServicesHistory();
    }
    openServiceHistoryPrescription(object) {
        this.openFileLinkByDocumentCode(object.FileCode, _models_service_history_type__WEBPACK_IMPORTED_MODULE_8__.ServiceHistoryType.Prescription);
    }
    openServiceHistoryInability(object) {
        this.openFileLinkByDocumentCode(object.FileCode, _models_service_history_type__WEBPACK_IMPORTED_MODULE_8__.ServiceHistoryType.Inability);
    }
    openFileLinkByDocumentCode(code, serviceHistoryType) {
        let serviceHistoryRequest = new _models_serviceHistoryRequest__WEBPACK_IMPORTED_MODULE_10__.ServiceHistoryRequest();
        serviceHistoryRequest.Code = code;
        switch (serviceHistoryType) {
            case _models_service_history_type__WEBPACK_IMPORTED_MODULE_8__.ServiceHistoryType.Prescription:
                this.serviceHistoryService
                    .GetServicesHistoryPrescriptions(serviceHistoryRequest)
                    .subscribe((resp) => {
                    if (resp.ServiceHistoryPrescription.length == 1) {
                        try {
                            window.open(resp.ServiceHistoryPrescription[0].Link);
                        }
                        catch (e) {
                            this.bsModalRef = this.generateInformativeModal('Atención', 'No se puede abrir el archivo seleccionado.', true, false);
                        }
                    }
                    else if (resp.ServiceHistoryPrescription.length > 1) {
                        let listFileModel = [];
                        let index = 1;
                        resp.ServiceHistoryPrescription.forEach((element) => {
                            let fileModel = new _models_list_file_model__WEBPACK_IMPORTED_MODULE_7__.ListFileModel();
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
                    }
                    else {
                        this.bsModalRef = this.generateInformativeModal('Atención', resp.Message, true, false);
                    }
                });
                break;
            case _models_service_history_type__WEBPACK_IMPORTED_MODULE_8__.ServiceHistoryType.Inability:
                this.serviceHistoryService
                    .GetServicesHistoryInability(serviceHistoryRequest)
                    .subscribe((resp) => {
                    if (resp.ServiceHistoryPrescription.length == 1) {
                        try {
                            window.open(resp.ServiceHistoryPrescription[0].Link);
                        }
                        catch (e) {
                            this.bsModalRef = this.generateInformativeModal('Atención', 'No se puede abrir el archivo seleccionado.', true, false);
                        }
                    }
                    else if (resp.ServiceHistoryPrescription.length > 1) {
                        let listFileModel = [];
                        let index = 1;
                        resp.ServiceHistoryPrescription.forEach((element) => {
                            let fileModel = new _models_list_file_model__WEBPACK_IMPORTED_MODULE_7__.ListFileModel();
                            fileModel.Link = element.Link;
                            fileModel.NameFile = 'Certificado_Incapacidad_' + index;
                            index++;
                            listFileModel.push(fileModel);
                        });
                        /*
                      this.dialogService.addDialog(ModalListFilesComponent, {
                        listFiles: listFileModel
                      });*/
                    }
                    else {
                        this.bsModalRef = this.generateInformativeModal('Atención', resp.Message, true, false);
                    }
                });
                break;
        }
    }
    getServiceFile(obj) {
        this.isLoading = true;
        this.serviceHistoryService
            .getServiceFile(this.email, obj.FileCode)
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                let pdfCode = result.Value;
                fetch('data:application/pdf;base64,' + pdfCode)
                    .then(function (resp) {
                    return resp.blob();
                })
                    .then(function (blob) {
                    let name = 'RegistroClínico';
                    (0,file_saver__WEBPACK_IMPORTED_MODULE_12__.saveAs)(blob, name);
                });
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
            }
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
    }
    pageChanged(event) {
        this.p = event;
        //Mover scroll
        //$(window).scrollTop(0);
    }
    ErrorRegister(error) {
        this.isLoading = false;
        this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true, false);
    }
    generateModalFile(listFileModel) {
        return this.bsModalService.show(src_app_shared_file_list_modal_file_list_modal_page__WEBPACK_IMPORTED_MODULE_3__.FileListModalPage, {
            initialState: {
                listFiles: listFileModel,
            },
            class: 'modal-lg',
        });
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
            ignoreBackdropClick: true,
        };
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
};
ServiceHistoryPage.colsMd4 = 'col-md-4';
ServiceHistoryPage.colsMd3 = 'col-md-3';
ServiceHistoryPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService },
    { type: _services_service_history_service__WEBPACK_IMPORTED_MODULE_11__.ServiceHistoryService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__.BsModalService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder }
];
ServiceHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-service-history',
        template: _service_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_service_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServiceHistoryPage);



/***/ }),

/***/ 95401:
/*!***********************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/services/service-history.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceHistoryService": () => (/* binding */ ServiceHistoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let ServiceHistoryService = class ServiceHistoryService {
    constructor(http) {
        this.http = http;
    }
    getServicesHistoryLists(serviceHistory) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Services/GetServicesHistoryLists';
        let params = {
            DocumentType: serviceHistory.DocumentType,
            Document: serviceHistory.Document
        };
        return this.http.post(url, params);
    }
    getServicesHistory(serviceHistory) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Services/GetServicesHistory';
        let params = {
            // AAE: Envía documento dependiendo usuarios seleccionados, menores o logueado
            DocumentType: serviceHistory.DocumentType,
            Document: serviceHistory.Document,
            ServiceType: serviceHistory.ServicesTypeId,
            Speciality: serviceHistory.SpecialtyId,
            Doctor: serviceHistory.DoctorId,
            City: serviceHistory.CityId,
            InitDate: serviceHistory.StartDate,
            EndDate: serviceHistory.EndDate
        };
        return this.http.post(url, params);
    }
    sendServiceFile(user, code) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Services/SendServiceFile';
            let params = {
                User: user,
                Code: code
            };
            return this.http.post(url, params);
        });
    }
    sendServiceFileByEmail(email, user, code) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Services/SendServiceFileByEmail';
            let params = {
                Email: email,
                User: user,
                Code: code
            };
            return this.http.post(url, params);
        });
    }
    getServiceFile(user, code) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Services/GetServiceFile';
        let params = {
            User: user,
            Code: code
        };
        return this.http.post(url, params);
    }
    getPatiens(serviceHistory) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Family/GetMinorAuthorizations';
        let params = {
            // Este es el real
            DocumentType: serviceHistory.DocumentType,
            Document: serviceHistory.Document
            // Temporales para probar Test
            // DocumentType : "1",
            // Document : "38944826"
        };
        return this.http.post(url, params);
    }
    getPatients(userLogin) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Affiliate/GetPersons';
        let params = {
            IdReference: userLogin.idReference,
            DocumentType: userLogin.documentType,
            Document: userLogin.document,
        };
        return this.http.post(url, params);
    }
    GetServicesHistoryPrescriptions(request) {
        // let params = new HttpParams();
        // params = params.set('Code', request.Code);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Services/GetServicesHistoryPrescriptions`, request);
    }
    GetServicesHistoryInability(request) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Services/GetServicesHistoryInability`, request);
    }
};
ServiceHistoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ServiceHistoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ServiceHistoryService);



/***/ }),

/***/ 56869:
/*!****************************************************************!*\
  !*** ./src/app/shared/file-list-modal/file-list-modal.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileListModalPage": () => (/* binding */ FileListModalPage),
/* harmony export */   "ListFileModel": () => (/* binding */ ListFileModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _file_list_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-list-modal.page.html?ngResource */ 54045);
/* harmony import */ var _file_list_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-list-modal.page.scss?ngResource */ 28005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);








class ListFileModel {
}
let FileListModalPage = class FileListModalPage {
    constructor(router, modalService, bsModalRef) {
        this.router = router;
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute;
    }
    ngOnInit() {
    }
    closeModal() {
        this.bsModalRef.hide();
    }
    openFile(listFileModel) {
        try {
            window.open(listFileModel.Link);
        }
        catch (e) {
            this.onClose.next(true);
        }
    }
};
FileListModalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalRef }
];
FileListModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-file-list-modal',
        template: _file_list_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_file_list_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FileListModalPage);



/***/ }),

/***/ 67117:
/*!************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/service-history.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n.invoices-status-select {\n  margin-left: auto;\n  margin-right: 0px;\n}\n.invoices-date-picker-indicator {\n  text-align: end;\n  margin-right: 5px;\n}\n.sc-ion-alert-ios-h {\n  --max-width: 85% !important;\n  --width: 85% !important;\n  font-size: 13px !important;\n}\n.table {\n  font-size: 9px;\n}\nion-icon {\n  color: #FF1E2D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UtaGlzdG9yeS5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQWlDSjtBQTlCQTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGNBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQ2hDWTtBRGlFaEIiLCJmaWxlIjoic2VydmljZS1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzc1wiO1xuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBPVCcsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbi5pbnZvaWNlcy1zdGF0dXMtc2VsZWN0IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmludm9pY2VzLWRhdGUtcGlja2VyLWluZGljYXRvciB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgICAtLW1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgLS13aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZSB7XG4gICAgZm9udC1zaXplOiA5cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 28005:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/file-list-modal/file-list-modal.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".cancel {\n  color: #a8a5a5;\n  pointer-events: auto;\n}\n\n.col-md-12 {\n  border-radius: 35px;\n  margin-bottom: -8px;\n  margin-top: -10px;\n  background-color: white;\n}\n\n.modal-center-align {\n  justify-content: center;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\n.contenedor {\n  display: flex;\n  flex-direction: column;\n}\n\n.icon-close {\n  display: flex;\n  justify-content: flex-end;\n  height: 20px;\n}\n\n.icon-header {\n  margin: auto;\n  padding-bottom: 25px;\n}\n\n.file-span {\n  margin-right: 20px;\n  text-decoration: underline;\n  font-family: \"Mark OT\", sans-serif;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.title-list-files {\n  font-size: 18px;\n  color: #00466c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtbGlzdC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiZmlsZS1saXN0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW5jZWwge1xuICAgIGNvbG9yOiAjYThhNWE1O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uY29sLW1kLTEyIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tb2RhbC1jZW50ZXItYWxpZ24ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmljb24tY2xvc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5pY29uLWhlYWRlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG4uZmlsZS1zcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiTWFyayBPVFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGxlLWxpc3QtZmlsZXMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzAwNDY2Yztcbn0iXX0= */";

/***/ }),

/***/ 76610:
/*!************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-history/service-history.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Documentos médicos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\">\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">Documentos Médicos</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-subtitle\">Desde aquí podrás consultar los resultados de tus estudios.</ion-label>\n    </ion-row>\n\n    <ion-row *ngIf=\"isColombia\">\n        <ion-label>Documentos anteriores al 14/04/2022 deben ser solicitados al Servicio de Atención al Cliente</ion-label>\n    </ion-row>\n\n    <form [formGroup]=\"form\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"12\">\n                <ion-item>\n                    <ion-label position=\"floating\">Paciente seleccionado</ion-label>\n                    <ion-select (ionChange)=\"changeDropDown($event)\" name=\"PatientDocument\" id=\"PatientDocument\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option *ngFor=\"let o of minorAuthorizations\" [value]=\"o.DOCUMENTO\">{{o.NOMBRE_1}} {{o.NOMBRE_2}} {{o.APELLIDO_1}} {{o.APELLIDO_2}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"12\">\n                <ion-item button=\"true\" id=\"open-date-input-from\">\n                    <ion-label>{{'PORTAL.MYFACTURES.From' | translate}}</ion-label>\n                    <ion-label class=\"invoices-date-picker-indicator\">{{obtainDate(form.controls.from.value)}}</ion-label>\n                    <ion-popover trigger=\"open-date-input-from\" show-backdrop=\"false\">\n                        <ng-template>\n                            <ion-datetime #popoverDatetimeFrom presentation=\"date\" (ionChange)=\"setDateFrom(popoverDatetimeFrom.value); popoverDatetimeFrom.confirm(true);\" id=\"dateFrom\">\n                            </ion-datetime>\n                        </ng-template>\n                    </ion-popover>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"12\">\n                <ion-item button=\"true\" id=\"open-date-input-until\">\n                    <ion-label>{{'PORTAL.MYFACTURES.Until' | translate}}</ion-label>\n                    <ion-label class=\"invoices-date-picker-indicator\">{{obtainDate(form.controls.until.value)}}</ion-label>\n                    <ion-popover trigger=\"open-date-input-until\" show-backdrop=\"false\">\n                        <ng-template>\n                            <ion-datetime #popoverDatetimeUntil presentation=\"date\" (ionChange)=\"setDateUntil(popoverDatetimeUntil.value); popoverDatetimeUntil.confirm(true);\" id=\"dateUntil\">\n                            </ion-datetime>\n                        </ng-template>\n                    </ion-popover>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n    </form>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{\"PORTAL.SERVICES-HISTORY.Specialty\" | translate}}</ion-label>\n                <ion-select [(ngModel)]=\"specialtySelected\" #CityId=\"ngModel\" name=\"SpecialtyId\" id=\"SpecialtyId\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                    <option *ngFor=\"let o of specialty\" [value]=\"o\">{{o}}</option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <app-button [configuration]=\"searchButtonConfig\" (click)=\"search()\"></app-button>\n        </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"!dataEmpty\">\n\n        <hr/>\n\n        <div *ngFor=\"let obj of servicesHistory | paginate: { itemsPerPage: 7, currentPage: p }\">\n\n            <ion-card class=\"ion-padding-top\">\n                <ion-card-header>\n                    <ion-card-title>{{obj.ServiceTypeDescription}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-row>\n                        <ion-label>Fecha : {{obj.ShortDate}}</ion-label>\n                    </ion-row>\n                    <ion-row>\n                        <ion-label>Dr./a. : {{obj.DoctorName}} </ion-label>\n                    </ion-row>\n                    <ion-row *ngIf=\"obj.Address\">\n                        <ion-label>Dirección : {{obj.Address}}</ion-label>\n                    </ion-row>\n                    <hr/>\n                    <ion-row>\n                        <ion-col size=\"4\" class=\"d-flex ion-justify-content-center\">\n                            <img src=\"{{imgRoute}}icons/icon-historiaclinica.svg\" *ngIf=\"obj.FileCode || obj.FileCode !== ''\" style=\"margin-right: 20px; cursor: pointer;\" alt=\"descargar\" (click)=\"getServiceFile(obj)\" title=\"Historia clinica\" />\n                            <img src=\"{{imgRoute}}icons/icon-historiaclinica-disabled.svg\" *ngIf=\"!obj.FileCode\" style=\"margin-right: 20px; cursor: pointer;\" alt=\"descargar\" title=\"Historia clinica\" />\n                        </ion-col>\n                        <ion-col size=\"4\" class=\"d-flex ion-justify-content-center\">\n                            <img src=\"{{imgRoute}}icons/icon-cert-discapacidad.svg\" *ngIf=\"obj.HasPrescriptions\" alt=\"certDiscapacidad\" style=\"margin-right: 20px; cursor: pointer;\" title=\"Fórmula médica\" (click)=\"openServiceHistoryPrescription(obj)\" />\n                            <img src=\"{{imgRoute}}icons/icon-cert-discapacidad-disabled.svg\" *ngIf=\"!obj.HasPrescriptions\" alt=\"certDiscapacidad\" style=\"margin-right: 20px;\" title=\"Fórmula médica\" />\n                        </ion-col>\n                        <ion-col size=\"4\" class=\"d-flex ion-justify-content-center\">\n                            <img src=\"{{imgRoute}}icons/icon-formula-medica.svg\" *ngIf=\"obj.HasDisability\" alt=\"formularMedica\" style=\"margin-right: 20px; cursor: pointer;\" title=\"Certificado incapacidad\" (click)=\"openServiceHistoryInability(obj)\" />\n                            <img src=\"{{imgRoute}}icons/icon-formula-medica-disabled.svg\" *ngIf=\"!obj.HasDisability\" alt=\"formularMedica\" style=\"margin-right: 20px\" title=\"Certificado incapacidad\" />\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>\n            </ion-card>\n\n        </div>\n\n        <ion-row class=\"ion-padding-top\">\n            <section *ngIf=\"showPagination\">\n                <ng-container>\n                    <pagination-controls previousLabel=\"\" nextLabel=\"\" [autoHide]=\"true\" (pageChange)=\"pageChanged($event)\">\n                    </pagination-controls>\n                </ng-container>\n                </section>\n        </ion-row>\n\n    </div>\n\n    <div *ngIf=\"dataEmpty\">\n        <p>\n            <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> {{\"PORTAL.SERVICES-HISTORY.TitleResult\" | translate}}\n        </p>\n    </div>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ }),

/***/ 54045:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/file-list-modal/file-list-modal.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-dialog modal-md modal-center-align\">\n    <div class=\"modal-body modal-check col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"contenedor\">\n                    <div class=\"icon-close cursor-pointer\">\n                        <a class=\"cancel\" (click)=\"closeModal()\">\n                            <img src=\"{{imgRoute}}icons/cancel.svg\" alt=\"Imagen\">\n                        </a>\n                    </div>\n                    <div class=\"title-list-files\">\n                        <span>¿Qué archivo desea abrir?</span>\n                    </div>\n\n                    <div class=\"body-description\">\n                        <div *ngFor=\"let item of listFiles\">\n                            <span class=\"file-span\" (click)=\"openFile(item)\">{{item.NameFile}}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>";

/***/ }),

/***/ 27043:
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-pagination/fesm2015/ngx-pagination.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxPaginationModule": () => (/* binding */ NgxPaginationModule),
/* harmony export */   "PaginatePipe": () => (/* binding */ PaginatePipe),
/* harmony export */   "PaginationControlsComponent": () => (/* binding */ PaginationControlsComponent),
/* harmony export */   "PaginationControlsDirective": () => (/* binding */ PaginationControlsDirective),
/* harmony export */   "PaginationService": () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);





function PaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.previous());
    })("click", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.screenReaderPageLabel);
  }
}

function PaginationControlsComponent_ul_3_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.screenReaderPageLabel);
  }
}

function PaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_1_a_1_Template, 4, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_3_li_1_span_2_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < _r0.getCurrent());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
  }
}

function PaginationControlsComponent_ul_3_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.setCurrent(page_r10.value));
    })("click", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.setCurrent(page_r10.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.screenReaderPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
  }
}

function PaginationControlsComponent_ul_3_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.screenReaderCurrentLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, page_r10.label, ""));
  }
}

function PaginationControlsComponent_ul_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_4_a_1_Template, 6, 5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_3_li_4_ng_container_2_Template, 7, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() !== page_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() === page_r10.value);
  }
}

function PaginationControlsComponent_ul_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.next());
    })("click", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.screenReaderPageLabel);
  }
}

function PaginationControlsComponent_ul_3_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.screenReaderPageLabel);
  }
}

function PaginationControlsComponent_ul_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_5_a_1_Template, 4, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_3_li_5_span_2_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
  }
}

function PaginationControlsComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_3_li_4_Template, 3, 6, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationControlsComponent_ul_3_li_5_Template, 3, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r1.responsive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages)("ngForTrackBy", ctx_r1.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
  }
}

class PaginationService {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.instances = {};
    this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
  }

  defaultId() {
    return this.DEFAULT_ID;
  }
  /**
   * Register a PaginationInstance with this service. Returns a
   * boolean value signifying whether the instance is new or
   * updated (true = new or updated, false = unchanged).
   */


  register(instance) {
    if (instance.id == null) {
      instance.id = this.DEFAULT_ID;
    }

    if (!this.instances[instance.id]) {
      this.instances[instance.id] = instance;
      return true;
    } else {
      return this.updateInstance(instance);
    }
  }
  /**
   * Check each property of the instance and update any that have changed. Return
   * true if any changes were made, else return false.
   */


  updateInstance(instance) {
    let changed = false;

    for (let prop in this.instances[instance.id]) {
      if (instance[prop] !== this.instances[instance.id][prop]) {
        this.instances[instance.id][prop] = instance[prop];
        changed = true;
      }
    }

    return changed;
  }
  /**
   * Returns the current page number.
   */


  getCurrentPage(id) {
    if (this.instances[id]) {
      return this.instances[id].currentPage;
    }

    return 1;
  }
  /**
   * Sets the current page number.
   */


  setCurrentPage(id, page) {
    if (this.instances[id]) {
      let instance = this.instances[id];
      let maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);

      if (page <= maxPage && 1 <= page) {
        this.instances[id].currentPage = page;
        this.change.emit(id);
      }
    }
  }
  /**
   * Sets the value of instance.totalItems
   */


  setTotalItems(id, totalItems) {
    if (this.instances[id] && 0 <= totalItems) {
      this.instances[id].totalItems = totalItems;
      this.change.emit(id);
    }
  }
  /**
   * Sets the value of instance.itemsPerPage.
   */


  setItemsPerPage(id, itemsPerPage) {
    if (this.instances[id]) {
      this.instances[id].itemsPerPage = itemsPerPage;
      this.change.emit(id);
    }
  }
  /**
   * Returns a clone of the pagination instance object matching the id. If no
   * id specified, returns the instance corresponding to the default id.
   */


  getInstance(id = this.DEFAULT_ID) {
    if (this.instances[id]) {
      return this.clone(this.instances[id]);
    }

    return {};
  }
  /**
   * Perform a shallow clone of an object.
   */


  clone(obj) {
    var target = {};

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        target[i] = obj[i];
      }
    }

    return target;
  }

}

const LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

class PaginatePipe {
  constructor(service) {
    this.service = service; // store the values from the last time the pipe was invoked

    this.state = {};
  }

  transform(collection, args) {
    // When an observable is passed through the AsyncPipe, it will output
    // `null` until the subscription resolves. In this case, we want to
    // use the cached data from the `state` object to prevent the NgFor
    // from flashing empty until the real values arrive.
    if (!(collection instanceof Array)) {
      let _id = args.id || this.service.defaultId();

      if (this.state[_id]) {
        return this.state[_id].slice;
      } else {
        return collection;
      }
    }

    let serverSideMode = args.totalItems && args.totalItems !== collection.length;
    let instance = this.createInstance(collection, args);
    let id = instance.id;
    let start, end;
    let perPage = instance.itemsPerPage;
    let emitChange = this.service.register(instance);

    if (!serverSideMode && collection instanceof Array) {
      perPage = +perPage || LARGE_NUMBER;
      start = (instance.currentPage - 1) * perPage;
      end = start + perPage;
      let isIdentical = this.stateIsIdentical(id, collection, start, end);

      if (isIdentical) {
        return this.state[id].slice;
      } else {
        let slice = collection.slice(start, end);
        this.saveState(id, collection, slice, start, end);
        this.service.change.emit(id);
        return slice;
      }
    } else {
      if (emitChange) {
        this.service.change.emit(id);
      } // save the state for server-side collection to avoid null
      // flash as new data loads.


      this.saveState(id, collection, collection, start, end);
      return collection;
    }
  }
  /**
   * Create an PaginationInstance object, using defaults for any optional properties not supplied.
   */


  createInstance(collection, config) {
    this.checkConfig(config);
    return {
      id: config.id != null ? config.id : this.service.defaultId(),
      itemsPerPage: +config.itemsPerPage || 0,
      currentPage: +config.currentPage || 1,
      totalItems: +config.totalItems || collection.length
    };
  }
  /**
   * Ensure the argument passed to the filter contains the required properties.
   */


  checkConfig(config) {
    const required = ['itemsPerPage', 'currentPage'];
    const missing = required.filter(prop => !(prop in config));

    if (0 < missing.length) {
      throw new Error(`PaginatePipe: Argument is missing the following required properties: ${missing.join(', ')}`);
    }
  }
  /**
   * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
   * array for a given id. This means that the next time the pipe is run on this collection & id, we just
   * need to check that the collection, start and end points are all identical, and if so, return the
   * last sliced array.
   */


  saveState(id, collection, slice, start, end) {
    this.state[id] = {
      collection,
      size: collection.length,
      slice,
      start,
      end
    };
  }
  /**
   * For a given id, returns true if the collection, size, start and end values are identical.
   */


  stateIsIdentical(id, collection, start, end) {
    let state = this.state[id];

    if (!state) {
      return false;
    }

    let isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;

    if (!isMetaDataIdentical) {
      return false;
    }

    return state.slice.every((element, index) => element === collection[start + index]);
  }

}

PaginatePipe.ɵfac = function PaginatePipe_Factory(t) {
  return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService, 16));
};

PaginatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "paginate",
  type: PaginatePipe,
  pure: false
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'paginate',
      pure: false
    }]
  }], function () {
    return [{
      type: PaginationService
    }];
  }, null);
})();
/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */


const DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)"
                         (pageBoundsCorrection)="pageBoundsCorrection.emit($event)">
    <nav role="navigation" [attr.aria-label]="screenReaderPaginationLabel">
    <ul class="ngx-pagination" 
        [class.responsive]="responsive"
        *ngIf="!(autoHide && p.pages.length <= 1)">

        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> 
            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()" aria-disabled="true">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li> 

        <li class="small-screen">
            {{ p.getCurrent() }} / {{ p.getLastPage() }}
        </li>

        <li [class.current]="p.getCurrent() === page.value" 
            [class.ellipsis]="page.label === '...'"
            *ngFor="let page of p.pages; trackBy: trackByIndex">
            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">
                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </a>
            <ng-container *ngIf="p.getCurrent() === page.value">
              <span aria-live="polite">
                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> 
              </span>
            </ng-container>
        </li>

        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()" aria-disabled="true">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

    </ul>
    </nav>
    </pagination-template>
    `;
const DEFAULT_STYLES = `
.ngx-pagination {
  margin-left: 0;
  margin-bottom: 1rem; }
  .ngx-pagination::before, .ngx-pagination::after {
    content: ' ';
    display: table; }
  .ngx-pagination::after {
    clear: both; }
  .ngx-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    margin-right: 0.0625rem;
    border-radius: 0; }
  .ngx-pagination li {
    display: inline-block; }
  .ngx-pagination a,
  .ngx-pagination button {
    color: #0a0a0a; 
    display: block;
    padding: 0.1875rem 0.625rem;
    border-radius: 0; }
    .ngx-pagination a:hover,
    .ngx-pagination button:hover {
      background: #e6e6e6; }
  .ngx-pagination .current {
    padding: 0.1875rem 0.625rem;
    background: #2199e8;
    color: #fefefe;
    cursor: default; }
  .ngx-pagination .disabled {
    padding: 0.1875rem 0.625rem;
    color: #cacaca;
    cursor: default; } 
    .ngx-pagination .disabled:hover {
      background: transparent; }
  .ngx-pagination a, .ngx-pagination button {
    cursor: pointer; }

.ngx-pagination .pagination-previous a::before,
.ngx-pagination .pagination-previous.disabled::before { 
  content: '«';
  display: inline-block;
  margin-right: 0.5rem; }

.ngx-pagination .pagination-next a::after,
.ngx-pagination .pagination-next.disabled::after {
  content: '»';
  display: inline-block;
  margin-left: 0.5rem; }

.ngx-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }
.ngx-pagination .small-screen {
  display: none; }
@media screen and (max-width: 601px) {
  .ngx-pagination.responsive .small-screen {
    display: inline-block; } 
  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {
    display: none; }
}
  `;
/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */

class PaginationControlsDirective {
  constructor(service, changeDetectorRef) {
    this.service = service;
    this.changeDetectorRef = changeDetectorRef;
    this.maxSize = 7;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pages = [];
    this.changeSub = this.service.change.subscribe(id => {
      if (this.id === id) {
        this.updatePageLinks();
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  ngOnInit() {
    if (this.id === undefined) {
      this.id = this.service.defaultId();
    }

    this.updatePageLinks();
  }

  ngOnChanges(changes) {
    this.updatePageLinks();
  }

  ngOnDestroy() {
    this.changeSub.unsubscribe();
  }
  /**
   * Go to the previous page
   */


  previous() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() - 1);
  }
  /**
   * Go to the next page
   */


  next() {
    this.checkValidId();
    this.setCurrent(this.getCurrent() + 1);
  }
  /**
   * Returns true if current page is first page
   */


  isFirstPage() {
    return this.getCurrent() === 1;
  }
  /**
   * Returns true if current page is last page
   */


  isLastPage() {
    return this.getLastPage() === this.getCurrent();
  }
  /**
   * Set the current page number.
   */


  setCurrent(page) {
    this.pageChange.emit(page);
  }
  /**
   * Get the current page number.
   */


  getCurrent() {
    return this.service.getCurrentPage(this.id);
  }
  /**
   * Returns the last page number
   */


  getLastPage() {
    let inst = this.service.getInstance(this.id);

    if (inst.totalItems < 1) {
      // when there are 0 or fewer (an error case) items, there are no "pages" as such,
      // but it makes sense to consider a single, empty page as the last page.
      return 1;
    }

    return Math.ceil(inst.totalItems / inst.itemsPerPage);
  }

  getTotalItems() {
    return this.service.getInstance(this.id).totalItems;
  }

  checkValidId() {
    if (this.service.getInstance(this.id).id == null) {
      console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`);
    }
  }
  /**
   * Updates the page links and checks that the current page is valid. Should run whenever the
   * PaginationService.change stream emits a value matching the current ID, or when any of the
   * input values changes.
   */


  updatePageLinks() {
    let inst = this.service.getInstance(this.id);
    const correctedCurrentPage = this.outOfBoundCorrection(inst);

    if (correctedCurrentPage !== inst.currentPage) {
      setTimeout(() => {
        this.pageBoundsCorrection.emit(correctedCurrentPage);
        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
      });
    } else {
      this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
    }
  }
  /**
   * Checks that the instance.currentPage property is within bounds for the current page range.
   * If not, return a correct value for currentPage, or the current value if OK.
   */


  outOfBoundCorrection(instance) {
    const totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);

    if (totalPages < instance.currentPage && 0 < totalPages) {
      return totalPages;
    } else if (instance.currentPage < 1) {
      return 1;
    }

    return instance.currentPage;
  }
  /**
   * Returns an array of Page objects to use in the pagination controls.
   */


  createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
    // paginationRange could be a string if passed from attribute, so cast to number.
    paginationRange = +paginationRange;
    let pages = []; // Return 1 as default page number
    // Make sense to show 1 instead of empty when there are no items

    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    let ellipsesNeeded = paginationRange < totalPages;
    let i = 1;

    while (i <= totalPages && i <= paginationRange) {
      let label;
      let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
      let openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
      let closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);

      if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
        label = '...';
      } else {
        label = pageNumber;
      }

      pages.push({
        label: label,
        value: pageNumber
      });
      i++;
    }

    return pages;
  }
  /**
   * Given the position in the sequence of pagination links [i],
   * figure out what page number corresponds to that position.
   */


  calculatePageNumber(i, currentPage, paginationRange, totalPages) {
    let halfWay = Math.ceil(paginationRange / 2);

    if (i === paginationRange) {
      return totalPages;
    } else if (i === 1) {
      return i;
    } else if (paginationRange < totalPages) {
      if (totalPages - halfWay < currentPage) {
        return totalPages - paginationRange + i;
      } else if (halfWay < currentPage) {
        return currentPage - halfWay + i;
      } else {
        return i;
      }
    } else {
      return i;
    }
  }

}

PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) {
  return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

PaginationControlsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: PaginationControlsDirective,
  selectors: [["pagination-template"], ["", "pagination-template", ""]],
  inputs: {
    id: "id",
    maxSize: "maxSize"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  exportAs: ["paginationApi"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'pagination-template,[pagination-template]',
      exportAs: 'paginationApi'
    }]
  }], function () {
    return [{
      type: PaginationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageBoundsCorrection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

function coerceToBoolean(input) {
  return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */


class PaginationControlsComponent {
  constructor() {
    this.maxSize = 7;
    this.previousLabel = 'Previous';
    this.nextLabel = 'Next';
    this.screenReaderPaginationLabel = 'Pagination';
    this.screenReaderPageLabel = 'page';
    this.screenReaderCurrentLabel = `You're on page`;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._directionLinks = true;
    this._autoHide = false;
    this._responsive = false;
  }

  get directionLinks() {
    return this._directionLinks;
  }

  set directionLinks(value) {
    this._directionLinks = coerceToBoolean(value);
  }

  get autoHide() {
    return this._autoHide;
  }

  set autoHide(value) {
    this._autoHide = coerceToBoolean(value);
  }

  get responsive() {
    return this._responsive;
  }

  set responsive(value) {
    this._responsive = coerceToBoolean(value);
  }

  trackByIndex(index) {
    return index;
  }

}

PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) {
  return new (t || PaginationControlsComponent)();
};

PaginationControlsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PaginationControlsComponent,
  selectors: [["pagination-controls"]],
  inputs: {
    id: "id",
    maxSize: "maxSize",
    directionLinks: "directionLinks",
    autoHide: "autoHide",
    responsive: "responsive",
    previousLabel: "previousLabel",
    nextLabel: "nextLabel",
    screenReaderPaginationLabel: "screenReaderPaginationLabel",
    screenReaderPageLabel: "screenReaderPageLabel",
    screenReaderCurrentLabel: "screenReaderCurrentLabel"
  },
  outputs: {
    pageChange: "pageChange",
    pageBoundsCorrection: "pageBoundsCorrection"
  },
  decls: 4,
  vars: 4,
  consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["role", "navigation"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], ["aria-disabled", "true", 4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], ["aria-disabled", "true"], [4, "ngIf"], ["aria-live", "polite"], [1, "pagination-next"]],
  template: function PaginationControlsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
        return ctx.pageChange.emit($event);
      })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
        return ctx.pageBoundsCorrection.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationControlsComponent_ul_3_Template, 6, 8, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.screenReaderPaginationLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
    }
  },
  dependencies: [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
  styles: [".ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:\" \";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:\"\\ab\";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:\"\\bb\";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'pagination-controls',
      template: DEFAULT_TEMPLATE,
      styles: [DEFAULT_STYLES],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    directionLinks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    responsive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previousLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nextLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenReaderPaginationLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenReaderPageLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    screenReaderCurrentLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    pageBoundsCorrection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NgxPaginationModule {}

NgxPaginationModule.ɵfac = function NgxPaginationModule_Factory(t) {
  return new (t || NgxPaginationModule)();
};

NgxPaginationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxPaginationModule,
  declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
});
NgxPaginationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [PaginationService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
      providers: [PaginationService],
      exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-pagination
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_service-history_service-history_module_ts.js.map