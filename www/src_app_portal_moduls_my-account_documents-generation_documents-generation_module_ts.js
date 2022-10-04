"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_my-account_documents-generation_documents-generation_module_ts"],{

/***/ 56765:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/components/family-group-data-modal/family-group-data-modal.page.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FamilyGroupDataModalPage": () => (/* binding */ FamilyGroupDataModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _family_group_data_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family-group-data-modal.page.html?ngResource */ 51569);
/* harmony import */ var _family_group_data_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./family-group-data-modal.page.scss?ngResource */ 49680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);







let FamilyGroupDataModalPage = class FamilyGroupDataModalPage {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.configurationButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
    }
    ngOnInit() {
        this.configurationButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Primary;
        this.configurationButton.text = 'ACEPTAR';
        this.configurationButton.width = "160px";
        this.configurationButton.height = "40px";
    }
    closeModal() {
        console.log("Boton Aceptar");
        this.bsModalRef.hide();
    }
};
FamilyGroupDataModalPage.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalRef }
];
FamilyGroupDataModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-family-group-data-modal',
        template: _family_group_data_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_family_group_data_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FamilyGroupDataModalPage);



/***/ }),

/***/ 94367:
/*!****************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/components/red-siem/red-siem.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedSiemPage": () => (/* binding */ RedSiemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _red_siem_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red-siem.page.html?ngResource */ 56249);
/* harmony import */ var _red_siem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./red-siem.page.scss?ngResource */ 87369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _configs_redSiemDownloadButtonConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/redSiemDownloadButtonConfig */ 12277);
/* harmony import */ var _configs_redSiemMailButtonConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configs/redSiemMailButtonConfig */ 74516);
/* harmony import */ var _models_generateCertificatesUserInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/generateCertificatesUserInfo */ 69784);
/* harmony import */ var _services_documents_generation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/documents-generation.service */ 93827);













let RedSiemPage = class RedSiemPage {
    constructor(fb, router, route, certificateServicesService, bsModalRef) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.certificateServicesService = certificateServicesService;
        this.bsModalRef = bsModalRef;
        this.origin = {};
        this.redirect = false;
        this.certificates = [];
        this.requestGroup = false;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.requiredModalFields = false; //Validar campos modal uno
        this.requiredModalFieldsTwo = false; //Validar campos modal dos
        this.currentDate = new Date();
        //Date Fecha inicial
        this.tmpStartDate = '';
        //Date Decha final
        this.tmpEndDate = '';
        this.deactivateEndDate = true;
        this.CountryListRedSiem = [];
        this.CitysListRedSiem = [];
        this.CountrySelect = '';
        this.selectedPastYears = '';
        this.certificateUserInfo = new _models_generateCertificatesUserInfo__WEBPACK_IMPORTED_MODULE_5__.GenerateCertificatesUserInfo();
        //Información de la descarga
        this.downloadInProgress = false;
        //Información del envío de email
        this.sendEmailInProgress = false;
        this.downloadButtonConfig = _configs_redSiemDownloadButtonConfig__WEBPACK_IMPORTED_MODULE_3__.downloadButtonConfigExport;
        this.emailButtonConfig = _configs_redSiemMailButtonConfig__WEBPACK_IMPORTED_MODULE_4__.emailButtonConfigExport;
        this.isLoading = false;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.country;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute;
        this.form = this.fb.group({
            from: [{
                    value: '',
                }],
            until: [{
                    value: '',
                }],
            status: [{ value: '' }],
        });
    }
    ngOnInit() {
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
        this.certificateServicesService.getCountryRedSiem().subscribe((result) => {
            if (result.StatusCode === 0) {
                this.CountryListRedSiem = result.DataList;
            }
            else {
                //*** Desabilitar campos y mostrar mensaje que no cargaron paises
            }
        }, (error) => this.ErrorRegister(error));
    }
    onChangeCountryRedSiem() {
        const value = this.CountrySelect;
        this.removeMessageDownload = true;
        this.removeMessageSendEmail = true;
        //Parametros descarga y envío de email
        this.selectedItems = [];
        this.dropdownList = [];
        this.certificateUserInfo.NameCountry = this.CountryListRedSiem.filter((obj) => obj.Code === value)[0].Name;
        this.certificateUserInfo.countryCode = value;
        this.getListCitysRedSiem();
        if (this.tmpEndDate !== '' &&
            this.tmpStartDate !== '' &&
            this.selectedItems.length >= 1) {
            this.requiredModalFields = true;
        }
        else {
            this.requiredModalFields = false;
        }
        this.doNotEraseDateFields();
    }
    //Ciudades Red Siem
    getListCitysRedSiem() {
        this.certificateServicesService
            .GetConsultantCities(this.certificateUserInfo)
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                this.CitysListRedSiem = result.DataList;
                this.dropdownList = this.CitysListRedSiem;
                if (this.certificateUserInfo.countryCode == '') {
                    this.selectedItems = [];
                }
                this.isLoading = false;
            }
            else {
                // TODO Desabilitar campos y mostrar mensaje que no cargaron paises
                console.log('error carga paises');
            }
        }, (error) => this.ErrorRegister(error));
    }
    modalValidationToContinue() {
        if (this.tmpEndDate === undefined ||
            this.tmpStartDate === undefined ||
            this.selectedItems.length < 1) {
            this.requiredModalFields = false;
        }
    }
    cancel() {
        this.bsModalRef.hide();
    }
    addCeroToDate(date) {
        if (date < 10) {
            return '0' + date;
        }
        else {
            return date;
        }
    }
    addMonths(numOfMonths, date = new Date()) {
        date.setMonth(date.getMonth() + numOfMonths);
        return date;
    }
    onDateChangedStartDate(event) {
        this.removeMessageDownload = true;
        this.removeMessageSendEmail = true;
        this.tmpStartDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(event.value, 'dd-mm-yyyy', 'es-ES');
        //Parametro para envío de email y descarga
        this.certificateUserInfo.DateStart = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(event.value, 'dd-mm-yyyy', 'es-ES');
        this.daySelectectMyDatePicker = this.addCeroToDate(event.value.getDay());
        this.monthSelectectMyDatePicker = this.addCeroToDate(event.value.getMonth());
        this.yearSelectectMyDatePicker = this.addCeroToDate(event.value.getFullYear());
        this.tmpEndDate = '';
        this.minEndDate = new Date(event.value);
        this.maxEndDate = new Date(this.addMonths(3, event.value));
        this.deactivateEndDate = false;
        if (this.tmpEndDate !== '' &&
            this.tmpStartDate !== '' &&
            this.selectedItems.length >= 1) {
            this.requiredModalFields = true;
        }
        else {
            this.requiredModalFields = false;
        }
        if (this.tmpEndDate === '') {
            this.requiredModalFields = false;
        }
        this.doNotEraseDateFields();
    }
    onDateChangedEndDate(event) {
        this.removeMessageDownload = true;
        this.removeMessageSendEmail = true;
        this.tmpEndDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(event.value, 'yyyy-MM-dd', 'en-US');
        //Parametro para envío de email y descarga
        this.certificateUserInfo.DateEnd = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatDate)(event.value, 'yyyy-MM-dd', 'en-US');
        if (this.tmpEndDate !== '' &&
            this.tmpStartDate !== '' &&
            this.selectedItems.length >= 1) {
            this.requiredModalFields = true;
        }
        else {
            this.requiredModalFields = false;
        }
        if (event.value.getDay() == 0) {
            this.requiredModalFields = false;
        }
        this.doNotEraseDateFields();
    }
    //Validación con los detectores de agregar y remover ciudad
    onItemSelect(item) {
        this.removeMessageDownload = true;
        this.removeMessageSendEmail = true;
        if (this.tmpEndDate !== '' &&
            this.tmpStartDate !== '' &&
            this.selectedItems.length >= 1) {
            this.requiredModalFields = true;
        }
        else {
            this.requiredModalFields = false;
        }
        this.doNotEraseDateFields();
    }
    OnItemDeSelect(item) {
        this.removeMessageDownload = true;
        this.removeMessageSendEmail = true;
        if (this.tmpEndDate !== '' &&
            this.tmpStartDate !== '' &&
            this.selectedItems.length >= 1) {
            this.requiredModalFields = true;
        }
        else {
            this.requiredModalFields = false;
        }
        this.doNotEraseDateFields();
    }
    //Desabilitar borrador de los campos de fecha
    doNotEraseDateFields() { }
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
        if (selectedPastYearValue === undefined ||
            selectedPastYearValue == 'null') {
            this.requiredModalFieldsTwo = false;
        }
        else {
            this.requiredModalFieldsTwo = true;
        }
    }
    //Download y Send Email
    eventDownloadPdf(value) {
        this.removeMessageSendEmail = true;
        this.removeMessageDownload = false;
        this.downloadInProgress = true;
        this.certificateUserInfo.CertificateCode = value;
        this.certificateUserInfo.TypeCertificate = this.certificates.filter((obj) => obj.certificateCode === value)[0].TypeCertificate;
        this.certificateUserInfo.FileName = this.certificates.filter((obj) => obj.certificateCode === value)[0].FileName;
        //Parametro envío de ciudad y código en descarga y envío email
        this.certificateUserInfo.CodeCity = this.selectedItems;
        this.certificateServicesService
            .getDownloadCertAffiliatedPayments(this.certificateUserInfo)
            .subscribe((result) => {
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
            }
            else {
                //Mensaje error
                this.downloadInProgress = false;
                this.completeDownloadSuccess = false;
            }
        }, (error) => this.ErrorRegister(error));
    }
    eventSendEmail(value) {
        this.removeMessageDownload = true;
        this.removeMessageSendEmail = false;
        this.sendEmailInProgress = true;
        //Parametros del títular.
        this.certificateUserInfo.CertificateCode = value;
        this.certificateUserInfo.TypeCertificate = this.certificates.filter((obj) => obj.certificateCode === value)[0].TypeCertificate;
        this.certificateUserInfo.FileName = this.certificates.filter((obj) => obj.certificateCode === value)[0].FileName;
        let mailTitular = localStorage.getItem('userName');
        this.emailTitular = localStorage.getItem('userName');
        this.certificateUserInfo.Mail = mailTitular;
        this.certificateUserInfo.CodeCity = this.selectedItems;
        //Parametros del títular.
        this.certificateServicesService
            .getSendCertAffiliatedPayments(this.certificateUserInfo)
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                this.sendEmailInProgress = false;
                this.completeSendEmailSuccess = true;
            }
            else {
                this.sendEmailInProgress = false;
                this.completeSendEmailSuccess = false;
            }
        }, (error) => this.ErrorRegister(error));
    }
    ErrorRegister(error) {
        /* TODO
        this.dialogService.addDialog(ModalComponent, {
          title: 'Inconvenientes con el portal',
          message: 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.',
          imageUrl: this.config.info.alertImage,
          buttonConfirmText: "ACEPTAR"
        }, { closeByClickingOutside: true });*/
    }
    obtainDate(d) {
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
    getFormatedDate(d) {
        const date = new Date(d);
        if (date) {
            return `${date.getFullYear()}${this.addZeroToOneDigitNumbers(date.getMonth() + 1)}${this.addZeroToOneDigitNumbers(date.getDate())}`;
        }
        return "";
    }
    addZeroToOneDigitNumbers(number) {
        if (number < 10) {
            return "0" + number;
        }
        return number;
    }
    parse(unpaid) {
        return parseInt(unpaid);
    }
};
RedSiemPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _services_documents_generation_service__WEBPACK_IMPORTED_MODULE_6__.DocumentsGenerationService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalRef }
];
RedSiemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-red-siem',
        template: _red_siem_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_red_siem_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedSiemPage);



/***/ }),

/***/ 12277:
/*!******************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/configs/redSiemDownloadButtonConfig.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "downloadButtonConfigExport": () => (/* binding */ downloadButtonConfigExport)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);


const downloadButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
downloadButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Tertiary;
downloadButtonConfig.text = 'Descargar';
const downloadButtonConfigExport = downloadButtonConfig;


/***/ }),

/***/ 74516:
/*!**************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/configs/redSiemMailButtonConfig.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailButtonConfigExport": () => (/* binding */ emailButtonConfigExport)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);


const emailButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
emailButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Tertiary;
emailButtonConfig.text = 'Enviar por mail';
const emailButtonConfigExport = emailButtonConfig;


/***/ }),

/***/ 54488:
/*!******************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/documents-generation-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentsGenerationRoutingModule": () => (/* binding */ DocumentsGenerationRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _documents_generation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents-generation.page */ 63081);
/* harmony import */ var _components_red_siem_red_siem_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/red-siem/red-siem.page */ 94367);






const routes = [
    {
        path: '',
        component: _documents_generation_page__WEBPACK_IMPORTED_MODULE_1__.DocumentsGenerationPage,
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard]
    },
    // {
    //   path: 'red-siem/:this.certificates/:valueCertificateCode/:this.certificateUserInfo.Document/:this.certificateUserInfo.DocumentType/:this.certificateUserInfo.RequestGroup/:this.certificateUserInfo.GroupCode/:this.certificateUserInfo.Name',
    //   canActivate: [HaveBeLoggedInGuard],
    //   component: RedSiemPage,
    //   pathMatch: 'full'
    // },
    {
        path: 'red-siem',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _components_red_siem_red_siem_page__WEBPACK_IMPORTED_MODULE_2__.RedSiemPage,
        pathMatch: 'full'
    },
];
let DocumentsGenerationRoutingModule = class DocumentsGenerationRoutingModule {
};
DocumentsGenerationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], DocumentsGenerationRoutingModule);



/***/ }),

/***/ 90319:
/*!**********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/documents-generation.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentsGenerationModule": () => (/* binding */ DocumentsGenerationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _documents_generation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents-generation-routing.module */ 54488);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_family_group_data_modal_family_group_data_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/family-group-data-modal/family-group-data-modal.page */ 56765);
/* harmony import */ var _documents_generation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents-generation.page */ 63081);
/* harmony import */ var _components_red_siem_red_siem_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/red-siem/red-siem.page */ 94367);










let DocumentsGenerationModule = class DocumentsGenerationModule {
};
DocumentsGenerationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _documents_generation_page__WEBPACK_IMPORTED_MODULE_3__.DocumentsGenerationPage,
            _components_family_group_data_modal_family_group_data_modal_page__WEBPACK_IMPORTED_MODULE_2__.FamilyGroupDataModalPage,
            _components_red_siem_red_siem_page__WEBPACK_IMPORTED_MODULE_4__.RedSiemPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _documents_generation_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentsGenerationRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ],
        providers: []
    })
], DocumentsGenerationModule);



/***/ }),

/***/ 63081:
/*!********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/documents-generation.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentsGenerationPage": () => (/* binding */ DocumentsGenerationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _documents_generation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents-generation.page.html?ngResource */ 87178);
/* harmony import */ var _documents_generation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents-generation.page.scss?ngResource */ 8483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/user-login */ 20743);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _components_family_group_data_modal_family_group_data_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/family-group-data-modal/family-group-data-modal.page */ 56765);
/* harmony import */ var _models_generateCertificatesUserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/generateCertificatesUserInfo */ 69784);
/* harmony import */ var _services_documents_generation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/documents-generation.service */ 93827);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 8456);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 28784);



















let DocumentsGenerationPage = class DocumentsGenerationPage {
    constructor(translate, route, router, certificateServicesService, bsModalService, http) {
        this.route = route;
        this.router = router;
        this.certificateServicesService = certificateServicesService;
        this.bsModalService = bsModalService;
        this.http = http;
        this.userLogin = new src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_4__.UserLogin();
        this.certificateUserInfo = new _models_generateCertificatesUserInfo__WEBPACK_IMPORTED_MODULE_7__.GenerateCertificatesUserInfo();
        this.beneficiaries = [];
        this.titularUser = false;
        this.p = 1; //Número de página
        this.certificates = [];
        this.familyGroups = [];
        this.peaceAndSave = false; //Pagos al día
        this.showPagination = false;
        this.familyGroupsList = false;
        this.selectedFamilyGroup = '';
        this.isLoading = false;
        this.showCertificates = false;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment;
        this.translate = translate;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagesRoute;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.country;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.country);
        this.affiliateType = localStorage.getItem('affiliateType');
    }
    ngOnInit() {
        this.userLogin.idReference = localStorage.getItem('registerId');
        this.userLogin.documentType = localStorage.getItem('documentType');
        this.userLogin.document = localStorage.getItem('document');
        this.affiliateType = localStorage.getItem('affiliateType');
        let nameOneTitular = localStorage.getItem('NameOne');
        let nameTwoTitular = localStorage.getItem('NameTwo');
        let lastNameOne = localStorage.getItem('LastNameOne');
        let lastNameTwo = localStorage.getItem('LastNameTwo');
        let nameTwo = localStorage.getItem('NameTwo');
        this.userLogin.nameUser = localStorage.getItem("NameOne") + " " + nameTwo + " " + lastNameOne + " " + lastNameTwo;
        this.certificateUserInfo.FullNameCertified = nameOneTitular + " " + nameTwoTitular + " " + lastNameOne + " " + lastNameTwo;
        this.certificateUserInfo.LoggedUserDocumentType = localStorage.getItem("documentType");
        this.certificateUserInfo.LoggedUserDocument = localStorage.getItem("document");
        if (this.affiliateType === '1') {
            this.getBeneficiaries();
        }
        this.certificateUserInfo.GroupCode = '';
        this.certificateUserInfo.TypeCertificate = '';
        this.familyGroupsList = true;
        this.certificateUserInfo.Document = this.userLogin.document = localStorage.getItem('document');
        this.certificateUserInfo.DocumentType = this.userLogin.documentType = localStorage.getItem('documentType');
        this.certificateUserInfo.RequestGroup = true;
        this.selectedFamilyGroup = '';
        this.certificateUserInfo.TypeCertificate = 'AFILIACION';
        this.getListCertificates().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe();
        this.showCertificates = false;
    }
    goBack() {
        this.showCertificates = false;
    }
    //Extrayendo Beneficiarios
    getBeneficiaries() {
        this.isLoading = true;
        this.certificateServicesService
            .getBeneficiaries('Affiliate/GetUsersCertificate', this.userLogin)
            .subscribe((result) => {
            if (result.Beneficiaries.length > 0) {
                this.beneficiaries = result.Beneficiaries;
                //Mostrando opción grupo familiar si el usuario es títular
                if (this.affiliateType === '1') {
                    this.titularUser = true;
                }
            }
            else {
                this.isLoading = false;
                this.bsModalRef = this.generateInformativeModal('Beneficiarios', 'No se encontraron beneficiarios', true, true);
            }
        }, (error) => this.ErrorRegister(error));
    }
    //Extrayendo Certificados
    getListCertificates() {
        this.isLoading = true;
        const simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable((observer) => {
            this.certificateServicesService
                .getListCertificates(this.certificateUserInfo)
                .subscribe((result) => {
                if (result.length > 0) {
                    this.showPagination = true;
                }
                if (result.StatusCode === 0) {
                    this.certificates = result.certificates;
                    this.familyGroups = result.groups;
                    this.peaceAndSave = result.peaceSafe;
                    observer.next(true);
                    observer.complete();
                    this.isLoading = false;
                }
                else {
                    this.showPagination = false;
                    this.bsModalRef = this.generateInformativeModal('Certificados', 'No se encontraron certificados', true, true);
                }
            }, (error) => this.ErrorRegister(error));
        });
        return simpleObservable;
    }
    ModalPayNone() {
        this.bsModalRef = this.generateInformativeModal('Para poder continuar con el proceso, debes normalizar tu situación de pago.', 'Si deseas puedes pagar haciendo click en Aceptar, o chatea con uno de nuestros representantes de Servicio al Cliente.', true, false);
        this.bsModalRef.content.onClose.subscribe((accept) => {
            accept ? this.router.navigate(['portal/my-account/my-invoices']) : null;
        });
    }
    openModalGenerateCertificate(valueCertificateCode) {
        let dataCertificates = JSON.stringify(this.certificates);
        this.router.navigate(['portal/my-account/generate-certificates/red-siem'], { queryParams: { certificates: JSON.stringify(this.certificates), certificateCode: valueCertificateCode, patientDocument: this.certificateUserInfo.Document, patientDocumentType: this.certificateUserInfo.DocumentType,
                requestGroup: this.certificateUserInfo.RequestGroup, groupCode: this.certificateUserInfo.GroupCode, fullName: this.certificateUserInfo.Name, fullNameCertified: this.certificateUserInfo.FullNameCertified } });
    }
    //Selección de Usuario
    onChangeBeneficiary(value) {
        this.showCertificates = true;
        if (value != null && value != '' && value != 'familyGroup') {
            //Carga del servicio al seleccionar un beneficiario/familiar
            this.familyGroupsList = false;
            this.certificateUserInfo.Document = value;
            this.certificateUserInfo.DocumentType = this.beneficiaries.filter((n) => n.Document == value)[0].DocumentType;
            this.certificateUserInfo.Name = this.beneficiaries.filter((n) => n.Document == value)[0].FullNames;
            //Tipo de usuario logueado, o listado
            if (value == localStorage.getItem('document')) {
                this.certificateUserInfo.LoginUser = true;
            }
            else {
                this.certificateUserInfo.LoginUser = false;
            }
            this.userFullName = this.beneficiaries.filter((n) => n.Document == value)[0].FullNames;
            this.beneficiarySelect = this.userFullName;
            this.certificateUserInfo.RequestGroup = false;
            this.selectedFamilyGroup = '';
            this.getListCertificates().subscribe();
        }
        if (value == 'familyGroup') {
            //Carga del servicio al seleccionar grupo familiar
            this.familyGroupsList = true;
            this.certificateUserInfo.Document = this.userLogin.document =
                localStorage.getItem('document');
            this.certificateUserInfo.DocumentType = this.userLogin.documentType =
                localStorage.getItem('documentType');
            this.certificateUserInfo.RequestGroup = true;
            this.selectedFamilyGroup = '';
            this.certificateUserInfo.TypeCertificate = 'AFILIACION';
            this.getListCertificates().subscribe((res) => {
                if (res) {
                    this.certificates = null;
                }
            });
        }
        if (value == '') {
            this.selectedFamilyGroup = '';
            this.certificates = [];
            this.familyGroupsList = false;
        }
    }
    //Selección de mi usuario
    onChangeMyUser(event) {
        const value = event.target.value;
        this.certificateUserInfo.LoginUser = true;
        if (value != null && value != '') {
            this.certificateUserInfo.Document = value;
            this.certificateUserInfo.DocumentType = this.userLogin.documentType;
            this.certificateUserInfo.RequestGroup = false;
            this.getListCertificates().subscribe();
        }
    }
    onChangeGroups(event) {
        const value = event;
        if (value.length > 0) {
            let valueUsers = this.familyGroups.filter((obj) => obj.groupCode === value);
            valueUsers.forEach((element) => {
                this.valueUsersValidateScroll = element.User.length;
                if (element.User.length > 5) {
                    this.validateNumberUsers = true;
                }
                else {
                    this.validateNumberUsers = false;
                }
                if (element.User.length > 0) {
                    this.hiddeListUser = false;
                }
                else {
                    this.hiddeListUser = true;
                }
            });
            let groupName = this.familyGroups.filter((obj) => obj.groupCode === value)[0].groupName;
            this.selectedFamilyGroup = groupName;
            //Cargar servicio al seleccionar grupo
            this.certificateUserInfo.Document = this.userLogin.document =
                localStorage.getItem('document');
            this.certificateUserInfo.DocumentType = this.userLogin.documentType =
                localStorage.getItem('documentType');
            this.certificateUserInfo.RequestGroup = true;
            this.certificateUserInfo.GroupCode = value;
            this.getListCertificates().subscribe((res) => {
                if (res) {
                    this.modalFamilyGroups(valueUsers, groupName);
                }
            });
        }
    }
    modalFamilyGroups(valueUsers, groupName) {
        this.bsModalRef = this.bsModalService.show(_components_family_group_data_modal_family_group_data_modal_page__WEBPACK_IMPORTED_MODULE_6__.FamilyGroupDataModalPage, {
            initialState: {
                valueUsers: valueUsers,
                groupName: groupName,
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 'modal-error-no-services',
            backdrop: true,
            ignoreBackdropClick: false,
        });
    }
    eventDownloadPdf(value) {
        //Filtrando parametros de certificado selecto en descarga (los demás son los de carga habitual).
        this.certificateUserInfo.CertificateCode = value;
        this.certificateUserInfo.TypeCertificate = this.certificates.filter((obj) => obj.CertificateCode === value)[0].TypeCertificate;
        this.certificateUserInfo.FileName = this.certificates.filter((obj) => obj.CertificateCode === value)[0].FileName;
        let fileName = this.certificateUserInfo.FileName;
        this.isLoading = true;
        this.certificateServicesService
            .getDownloadCertAffiliatedPayments(this.certificateUserInfo)
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                let pdfCode = result.Download.BitCertificate;
                fetch('data:application/pdf;base64,' + pdfCode)
                    .then(function (resp) {
                    return resp.blob();
                }).then(function (blob) {
                    let reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function () {
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                            let base64data = reader.result;
                            try {
                                const result = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_10__.Filesystem.writeFile({
                                    path: fileName + '.pdf',
                                    data: base64data,
                                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_10__.Directory.Data,
                                });
                                let fileOpener = new _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__.FileOpener();
                                fileOpener.open(result.uri, blob.type)
                                    .then(() => console.log('File is opened'))
                                    .catch(e => console.log('Error opening file', e));
                                (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(blob, fileName);
                            }
                            catch (e) {
                                // TODO mostrar el error en un modal
                                console.error('Unable to write file', e);
                            }
                        });
                    };
                });
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, true);
            }
        }, (error) => this.ErrorRegister(error));
    }
    eventSendEmail(value) {
        let mailTitular = localStorage.getItem('userName');
        //Parametros del títular.
        this.certificateUserInfo.Mail = mailTitular;
        this.certificateUserInfo.CertificateCode = value;
        this.certificateUserInfo.TypeCertificate = this.certificates.filter((obj) => obj.CertificateCode === value)[0].TypeCertificate;
        this.certificateUserInfo.FileName = this.certificates.filter((obj) => obj.CertificateCode === value)[0].FileName;
        this.isLoading = true;
        this.certificateServicesService
            .getSendCertAffiliatedPayments(this.certificateUserInfo)
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                this.bsModalRef = this.generateInformativeModal(result.Title, 'Hemos enviado al correo electrónico' +
                    ' ' +
                    mailTitular +
                    ' ' +
                    'el certificado seleccionado', false, true);
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, true);
            }
        }, (error) => this.ErrorRegister(error));
    }
    ErrorRegister(error) {
        this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true, true);
    }
    generateInformativeModal(subTitle, description, isError, onlyButtonConfirm = true) {
        const initialState = {
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
            ignoreBackdropClick: true,
        };
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_3__.InformativeModalComponent, initialState);
    }
};
DocumentsGenerationPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _services_documents_generation_service__WEBPACK_IMPORTED_MODULE_8__.DocumentsGenerationService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__.BsModalService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient }
];
DocumentsGenerationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-documents-generation',
        template: _documents_generation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_documents_generation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocumentsGenerationPage);



/***/ }),

/***/ 69784:
/*!******************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/models/generateCertificatesUserInfo.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateCertificatesUserInfo": () => (/* binding */ GenerateCertificatesUserInfo)
/* harmony export */ });
class GenerateCertificatesUserInfo {
    constructor() {
        this.CodeCity = [];
    }
}


/***/ }),

/***/ 93827:
/*!********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/services/documents-generation.service.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentsGenerationService": () => (/* binding */ DocumentsGenerationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let DocumentsGenerationService = class DocumentsGenerationService {
    constructor(http) {
        this.http = http;
    }
    //GetBeneficiaries
    getBeneficiaries(url, userLogin) {
        let params = {
            DocumentType: userLogin.documentType,
            Document: userLogin.document,
            IdReference: userLogin.idReference
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + url, params);
    }
    //Certificados
    getListCertificates(generateCertificatesUserInfo) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Affiliate/GetCertificates';
        let params = {
            LoggedUserDocumentType: generateCertificatesUserInfo.LoggedUserDocumentType,
            LoggedUserDocument: generateCertificatesUserInfo.LoggedUserDocument,
            DocumentType: generateCertificatesUserInfo.DocumentType,
            Document: generateCertificatesUserInfo.Document,
            TypeCertificate: generateCertificatesUserInfo.TypeCertificate,
            RequestGroup: generateCertificatesUserInfo.RequestGroup,
            GroupCode: generateCertificatesUserInfo.GroupCode,
            LoginUser: generateCertificatesUserInfo.LoginUser
        };
        return this.http.post(url, params);
    }
    //Descarga Certificados
    getDownloadCertAffiliatedPayments(generateCertificatesUserInfo) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Affiliate/GetDownloadCertAffiliatedPayments';
        let params = {
            DocumentType: generateCertificatesUserInfo.DocumentType,
            Document: generateCertificatesUserInfo.Document,
            TypeCertificate: generateCertificatesUserInfo.TypeCertificate,
            RequestGroup: generateCertificatesUserInfo.RequestGroup,
            GroupCode: generateCertificatesUserInfo.GroupCode,
            FileName: generateCertificatesUserInfo.FileName,
            CertificateCode: generateCertificatesUserInfo.CertificateCode,
            //Parametros extra para certificado de Red Siem y covertura de viaje
            Name: generateCertificatesUserInfo.Name,
            Surnames: generateCertificatesUserInfo.Surnames,
            Country: generateCertificatesUserInfo.countryCode,
            CodeCity: generateCertificatesUserInfo.CodeCity,
            DateStart: generateCertificatesUserInfo.DateStart,
            DateEnd: generateCertificatesUserInfo.DateEnd,
            NameCountry: generateCertificatesUserInfo.NameCountry,
            FullNameCertified: generateCertificatesUserInfo.FullNameCertified,
            //Para certificado de pagos
            CertifiedYear: generateCertificatesUserInfo.CertifiedYear
        };
        return this.http.post(url, params);
    }
    //Envío email Certificados
    getSendCertAffiliatedPayments(generateCertificatesUserInfo) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Affiliate/GetSendCertAffiliatedPayments';
        let params = {
            //Select patient data
            DocumentType: generateCertificatesUserInfo.DocumentType,
            Document: generateCertificatesUserInfo.Document,
            TypeCertificate: generateCertificatesUserInfo.TypeCertificate,
            RequestGroup: generateCertificatesUserInfo.RequestGroup,
            GroupCode: generateCertificatesUserInfo.GroupCode,
            FileName: generateCertificatesUserInfo.FileName,
            CertificateCode: generateCertificatesUserInfo.CertificateCode,
            //Titular data
            Name: generateCertificatesUserInfo.Name,
            Surnames: generateCertificatesUserInfo.Surnames,
            Mail: generateCertificatesUserInfo.Mail,
            Country: generateCertificatesUserInfo.countryCode,
            CodeCity: generateCertificatesUserInfo.CodeCity,
            DateStart: generateCertificatesUserInfo.DateStart,
            DateEnd: generateCertificatesUserInfo.DateEnd,
            NameCountry: generateCertificatesUserInfo.NameCountry,
            FullNameCertified: generateCertificatesUserInfo.FullNameCertified,
            //Para certificado de pagos
            CertifiedYear: generateCertificatesUserInfo.CertifiedYear
        };
        return this.http.post(url, params);
    }
    //Países Red Siem
    getCountryRedSiem() {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'DataLists/GetCountryRedSiem';
        let params = {};
        return this.http.post(url, params);
    }
    //Ciudades Red Siem
    GetConsultantCities(generateCertificatesUserInfo) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'DataLists/GetCitiesRedSiem';
        let params = {
            Country: generateCertificatesUserInfo.countryCode
        };
        return this.http.post(url, params);
    }
    handleError(error) {
        console.error(error);
    }
};
DocumentsGenerationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DocumentsGenerationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DocumentsGenerationService);



/***/ }),

/***/ 75400:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* binding */ AwesomeCordovaNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 42474);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 98219);



var AwesomeCordovaNativePlugin =
/** @class */
function () {
  function AwesomeCordovaNativePlugin() {}
  /**
   * Returns a boolean that indicates whether the plugin is installed
   *
   * @returns {boolean}
   */


  AwesomeCordovaNativePlugin.installed = function () {
    var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
    return isAvailable;
  };
  /**
   * Returns the original plugin object
   */


  AwesomeCordovaNativePlugin.getPlugin = function () {
    if (typeof window !== 'undefined') {
      return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
    }

    return null;
  };
  /**
   * Returns the plugin's name
   */


  AwesomeCordovaNativePlugin.getPluginName = function () {
    var pluginName = this.pluginName;
    return pluginName;
  };
  /**
   * Returns the plugin's reference
   */


  AwesomeCordovaNativePlugin.getPluginRef = function () {
    var pluginRef = this.pluginRef;
    return pluginRef;
  };
  /**
   * Returns the plugin's install name
   */


  AwesomeCordovaNativePlugin.getPluginInstallName = function () {
    var plugin = this.plugin;
    return plugin;
  };
  /**
   * Returns the plugin's supported platforms
   */


  AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
    var platform = this.platforms;
    return platform;
  };

  AwesomeCordovaNativePlugin.pluginName = '';
  AwesomeCordovaNativePlugin.pluginRef = '';
  AwesomeCordovaNativePlugin.plugin = '';
  AwesomeCordovaNativePlugin.repo = '';
  AwesomeCordovaNativePlugin.platforms = [];
  AwesomeCordovaNativePlugin.install = '';
  return AwesomeCordovaNativePlugin;
}();



/***/ }),

/***/ 63512:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
/**
 *
 */
function checkReady() {
  if (typeof process === 'undefined') {
    var win_1 = typeof window !== 'undefined' ? window : {};
    var DEVICE_READY_TIMEOUT_1 = 5000; // To help developers using cordova, we listen for the device ready event and
    // log an error if it didn't fire in a reasonable amount of time. Generally,
    // when this happens, developers should remove and reinstall plugins, since
    // an inconsistent plugin is often the culprit.

    var before_1 = Date.now();
    var didFireReady_1 = false;
    win_1.document.addEventListener('deviceready', function () {
      console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
      didFireReady_1 = true;
    });
    setTimeout(function () {
      if (!didFireReady_1 && win_1.cordova) {
        console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
      }
    }, DEVICE_READY_TIMEOUT_1);
  }
}

/***/ }),

/***/ 42474:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 23280);

var ERR_CORDOVA_NOT_AVAILABLE = {
  error: 'cordova_not_available'
};
var ERR_PLUGIN_NOT_INSTALLED = {
  error: 'plugin_not_installed'
};
/**
 * @param callback
 */

function getPromise(callback) {
  var tryNativePromise = function () {
    if (Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };

  if (typeof window !== 'undefined' && window.angular) {
    var doc = window.document;
    var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();

    if (injector) {
      var $q = injector.get('$q');
      return $q(function (resolve, reject) {
        callback(resolve, reject);
      });
    }

    console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
  }

  return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */

function wrapPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var pluginResult, rej;
  var p = getPromise(function (resolve, reject) {
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return resolve(args);
      }, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return reject(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    }

    rej = reject;
  }); // Angular throws an error on unhandled rejection, but in this case we have already printed
  // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
  // to error

  if (pluginResult && pluginResult.error) {
    p.catch(function () {});
    typeof rej === 'function' && rej(pluginResult.error);
  }

  return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */

function wrapOtherPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return getPromise(function (resolve, reject) {
    var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);

    if (pluginResult) {
      if (pluginResult.error) {
        reject(pluginResult.error);
      } else if (pluginResult.then) {
        pluginResult.then(resolve).catch(reject);
      }
    } else {
      reject({
        error: 'unexpected_error'
      });
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */


function wrapObservable(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
    var pluginResult;

    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return observer.next(args);
      }, function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return observer.error(args);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
    }

    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
      observer.complete();
    }

    return function () {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }

          return callCordovaPlugin(pluginObj, opts.clearFunction, []);
        }
      } catch (e) {
        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
        console.warn(e);
      }
    };
  });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */


function wrapEventObservable(event, element) {
  element = typeof window !== 'undefined' && element ? get(window, element) : element || (typeof window !== 'undefined' ? window : {});
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */


function checkAvailability(plugin, methodName, pluginName) {
  var pluginRef, pluginPackage;

  if (typeof plugin === 'string') {
    pluginRef = plugin;
  } else {
    pluginRef = plugin.constructor.getPluginRef();
    pluginName = plugin.constructor.getPluginName();
    pluginPackage = plugin.constructor.getPluginInstallName();
  }

  var pluginInstance = getPlugin(pluginRef);

  if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === 'undefined') {
    if (typeof window === 'undefined' || !window.cordova) {
      cordovaWarn(pluginName, methodName);
      return ERR_CORDOVA_NOT_AVAILABLE;
    }

    pluginWarn(pluginName, pluginPackage, methodName);
    return ERR_PLUGIN_NOT_INSTALLED;
  }

  return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */

function instanceAvailability(pluginObj, methodName) {
  return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function setIndex(args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  } // ignore resolve and reject in case sync


  if (opts.sync) {
    return args;
  } // If the plugin method expects myMethod(success, err, options)


  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === 'node') {
    args.push(function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
    var obj = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    var setSuccessIndex = function () {
      // If we've specified a success/error index
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };

    var setErrorIndex = function () {
      // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
      // defined and thus causing non expected behavior.
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
      } else {
        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
      }
    };

    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }

  return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  } // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.


  args = setIndex(args, opts, resolve, reject);
  var availabilityCheck = checkAvailability(pluginObj, methodName);

  if (availabilityCheck === true) {
    var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef()); // eslint-disable-next-line prefer-spread

    return pluginInstance[methodName].apply(pluginInstance, args);
  } else {
    return availabilityCheck;
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */

function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }

  args = setIndex(args, opts, resolve, reject);

  if (instanceAvailability(pluginObj, methodName)) {
    // eslint-disable-next-line prefer-spread
    return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
  }
}
/**
 * @param pluginRef
 */

function getPlugin(pluginRef) {
  if (typeof window !== 'undefined') {
    return get(window, pluginRef);
  }

  return null;
}
/**
 * @param element
 * @param path
 */

function get(element, path) {
  var paths = path.split('.');
  var obj = element;

  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }

    obj = obj[paths[i]];
  }

  return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */

function pluginWarn(pluginName, plugin, method) {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
  } else {
    console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
  }

  if (plugin) {
    console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
  }
}
/**
 * @private
 * @param pluginName
 * @param method
 */

function cordovaWarn(pluginName, method) {
  if (typeof process === 'undefined') {
    if (method) {
      console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    } else {
      console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
  }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */

var wrap = function (pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */

function wrapInstance(pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (opts.sync) {
      return callInstance(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;

        if (opts.destruct) {
          pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.next(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return observer.error(args);
          });
        } else {
          pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }

        if (pluginResult && pluginResult.error) {
          observer.error(pluginResult.error);
        }

        return function () {
          try {
            if (opts.clearWithArgs) {
              return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
            }

            return callInstance(pluginObj, opts.clearFunction, []);
          } catch (e) {
            console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
            console.warn(e);
          }
        };
      });
    } else if (opts.otherPromise) {
      return getPromise(function (resolve, reject) {
        var result;

        if (opts.destruct) {
          result = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return resolve(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return reject(args);
          });
        } else {
          result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }

        if (result && result.then) {
          result.then(resolve, reject);
        } else {
          reject();
        }
      });
    } else {
      var pluginResult_1, rej_1;
      var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return resolve(args);
          }, function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            return reject(args);
          });
        } else {
          pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        }

        rej_1 = reject;
      }); // Angular throws an error on unhandled rejection, but in this case we have already printed
      // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
      // to error

      if (pluginResult_1 && pluginResult_1.error) {
        p.catch(function () {});
        typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
      }

      return p;
    }
  };
}

/***/ }),

/***/ 61485:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 42474);


/**
 * @param pluginObj
 * @param methodName
 */

function overrideFunction(pluginObj, methodName) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
    var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);

    if (availabilityCheck === true) {
      var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
      pluginInstance_1[methodName] = observer.next.bind(observer);
      return function () {
        return pluginInstance_1[methodName] = function () {};
      };
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }
  });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */


function cordovaFunctionOverride(pluginObj, methodName, args) {
  if (args === void 0) {
    args = [];
  }

  return overrideFunction(pluginObj, methodName);
}

/***/ }),

/***/ 35084:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 42474);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */

function cordovaInstance(pluginObj, methodName, config, args) {
  args = Array.from(args);
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 91830:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 42474);

/**
 * @param pluginObj
 * @param key
 */

function cordovaPropertyGet(pluginObj, key) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
  }

  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */

function cordovaPropertySet(pluginObj, key, value) {
  if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
  }
}

/***/ }),

/***/ 54461:
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 42474);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */

function cordova(pluginObj, methodName, config, args) {
  return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}

/***/ }),

/***/ 44717:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
  if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
    return pluginObj._objectInstance[key];
  }

  return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */

function instancePropertySet(pluginObj, key, value) {
  if (pluginObj._objectInstance) {
    pluginObj._objectInstance[key] = value;
  }
}

/***/ }),

/***/ 63142:
/*!******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 84624:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 63512);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 75400);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 42474);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 54461);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 61485);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 35084);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 91830);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 44717);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 63142);

 // Decorators








(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

/***/ }),

/***/ 98219:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
  var paths = path.split('.');
  var obj = element;

  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }

    obj = obj[paths[i]];
  }

  return obj;
}
/**
 * @param callback
 * @private
 */

function getPromise(callback) {
  if (callback === void 0) {
    callback = function () {};
  }

  var tryNativePromise = function () {
    if (typeof Promise === 'function' || typeof window !== 'undefined' && window.Promise) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
    }
  };

  return tryNativePromise();
}

/***/ }),

/***/ 8456:
/*!*************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/file-opener/__ivy_ngcc__/ngx/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileOpener": () => (/* binding */ FileOpener)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 84624);





var FileOpener =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(FileOpener, _super);

  function FileOpener() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FileOpener.prototype.open = function (filePath, fileMIMEType) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "open", {
      "callbackStyle": "object",
      "successName": "success",
      "errorName": "error"
    }, arguments);
  };

  FileOpener.prototype.uninstall = function (packageId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uninstall", {
      "callbackStyle": "object",
      "successName": "success",
      "errorName": "error"
    }, arguments);
  };

  FileOpener.prototype.appIsInstalled = function (packageId) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "appIsInstalled", {
      "callbackStyle": "object",
      "successName": "success",
      "errorName": "error"
    }, arguments);
  };

  FileOpener.prototype.showOpenWithDialog = function (filePath, fileMIMEType) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showOpenWithDialog", {
      "callbackStyle": "object",
      "successName": "success",
      "errorName": "error"
    }, arguments);
  };

  FileOpener.pluginName = "FileOpener";
  FileOpener.plugin = "cordova-plugin-file-opener2";
  FileOpener.pluginRef = "cordova.plugins.fileOpener2";
  FileOpener.repo = "https://github.com/pwlin/cordova-plugin-file-opener2";
  FileOpener.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];

  FileOpener.ɵfac = /*@__PURE__*/function () {
    var ɵFileOpener_BaseFactory;
    return function FileOpener_Factory(t) {
      return (ɵFileOpener_BaseFactory || (ɵFileOpener_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FileOpener)))(t || FileOpener);
    };
  }();

  FileOpener.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FileOpener,
    factory: function (t) {
      return FileOpener.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FileOpener, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return FileOpener;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



/***/ }),

/***/ 26549:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _Users_juan_Downloads_PortalClientesyVentasMovilV2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_juan_Downloads_PortalClientesyVentasMovilV2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_juan_Downloads_PortalClientesyVentasMovilV2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_juan_Downloads_PortalClientesyVentasMovilV2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_juan_Downloads_PortalClientesyVentasMovilV2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_juan_Downloads_PortalClientesyVentasMovilV2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_juan_Downloads_PortalClientesyVentasMovilV2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,_Users_juan_Downloads_PortalClientesyVentasMovilV2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,_Users_juan_Downloads_PortalClientesyVentasMovilV2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 93568:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;

(function (Directory) {
  /**
   * The Documents directory
   * On iOS it's the app's documents directory.
   * Use this directory to store user-generated content.
   * On Android it's the Public Documents folder, so it's accessible from other apps.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */
  Directory["Documents"] = "DOCUMENTS";
  /**
   * The Data directory
   * On iOS it will use the Documents directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["Data"] = "DATA";
  /**
   * The Library directory
   * On iOS it will use the Library directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.1.0
   */

  Directory["Library"] = "LIBRARY";
  /**
   * The Cache directory
   * Can be deleted in cases of low memory, so use this directory to write app-specific files
   * that your app can re-create easily.
   *
   * @since 1.0.0
   */

  Directory["Cache"] = "CACHE";
  /**
   * The external directory
   * On iOS it will use the Documents directory
   * On Android it's the directory on the primary shared/external
   * storage device where the application can place persistent files it owns.
   * These files are internal to the applications, and not typically visible
   * to the user as media.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["External"] = "EXTERNAL";
  /**
   * The external storage directory
   * On iOS it will use the Documents directory
   * On Android it's the primary shared/external storage directory.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */

  Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));

var Encoding;

(function (Encoding) {
  /**
   * Eight-bit UCS Transformation Format
   *
   * @since 1.0.0
   */
  Encoding["UTF8"] = "utf8";
  /**
   * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
   * Unicode character set
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["ASCII"] = "ascii";
  /**
   * Sixteen-bit UCS Transformation Format, byte order identified by an
   * optional byte-order mark
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */


const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */

const FilesystemEncoding = Encoding;

/***/ }),

/***/ 91662:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 93568);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 64046)).then(m => new m.FilesystemWeb())
});



/***/ }),

/***/ 49680:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/components/family-group-data-modal/family-group-data-modal.page.scss?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n.title-subtitle {\n  color: #66182A;\n  width: 80%;\n  font-size: 18px;\n  text-align: center;\n}\n.family-group__container {\n  padding: 20px;\n}\n.family-group__title-container {\n  font-size: 18px;\n  font-weight: bold;\n}\n.family-group__title-container,\n.family-group__member-container,\n.family-group__button-container {\n  display: flex;\n  justify-content: center;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbWlseS1ncm91cC1kYXRhLW1vZGFsLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0ksY0NWYztFRFdkLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBaUNKO0FBOUJBOzs7RUFHSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBaUNKIiwiZmlsZSI6ImZhbWlseS1ncm91cC1kYXRhLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuLnRpdGxlLXN1YnRpdGxle1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhbWlseS1ncm91cF9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZmFtaWx5LWdyb3VwX190aXRsZS1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZhbWlseS1ncm91cF9fdGl0bGUtY29udGFpbmVyLFxuLmZhbWlseS1ncm91cF9fbWVtYmVyLWNvbnRhaW5lcixcbi5mYW1pbHktZ3JvdXBfX2J1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4O1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 87369:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/components/red-siem/red-siem.page.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n.date-indicator {\n  text-align: end;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZC1zaWVtLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFpQ0oiLCJmaWxlIjoicmVkLXNpZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBPVCcsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbi5kYXRlLWluZGljYXRvciB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 8483:
/*!*********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/documents-generation.page.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-item {\n  border: none !important;\n}\nion-label {\n  pointer-events: all !important;\n}\nion-icon {\n  font-size: 28px;\n  color: #FF1E2D;\n}\ntable {\n  font-size: 10px;\n}\n.modal-rounded .modal-content {\n  border-radius: 35px !important;\n  width: 750px;\n  border: none !important;\n}\n.documents-generation__lower-container__left {\n  display: flex;\n  justify-content: center;\n  border-right: 1px solid #e6e6e6;\n  height: 55vh;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding: 10px;\n  background-color: rgb(247, 247, 247);\n}\n.documents-generation__lower-container__left .documents-generation__clients-card-container {\n  display: flex;\n  justify-content: center;\n}\n.documents-generation__lower-container__left .documents-generation__client-card {\n  margin: 10px;\n  margin-left: 42px;\n  width: 80%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n}\n.documents-generation__lower-container__left .documents-generation__client-card .documents-generation__client-card__data-container-outer {\n  display: flex;\n  align-items: center;\n}\n.documents-generation__lower-container__left .documents-generation__client-card .documents-generation__client-card__data-container {\n  display: flex;\n  align-items: center;\n}\n.documents-generation__lower-container__left .documents-generation__client-card .documents-generation__client-card__data-container .documents-generation__client-card__name {\n  font-size: large;\n  font-weight: bold;\n  color: #FF1E2D;\n}\n.documents-generation__lower-container__left .documents-generation__client-card .documents-generation__client-card__data-container .documents-generation__client-card__ci {\n  font-size: small;\n  color: #4d4d4d;\n}\n.documents-generation__lower-container__left .documents-generation__client-card:hover {\n  cursor: pointer;\n  background-color: #e9e9e9;\n}\n.documents-generation__table-container {\n  padding: 20px;\n}\n.documents-generation__table-container .table > :not(:first-child) {\n  border-top: solid 2px #FF1E2D;\n}\n.documents-generation__table-container .action-icon {\n  cursor: pointer;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.documents-generation__groups-card__container {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50cy1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFpQ0o7QUE5QkE7RUFDSSx1QkFBQTtBQWlDSjtBQTlCQTtFQUNJLDhCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZUFBQTtFQUNBLGNDZlk7QURnRGhCO0FBOUJBO0VBQ0ksZUFBQTtBQWlDSjtBQTdCSTtFQUNJLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBZ0NSO0FBNUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQStCSjtBQTlCSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQWdDUjtBQTlCSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBZ0NSO0FBL0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBaUNaO0FBL0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBaUNaO0FBaENZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDNURBO0FEOEZoQjtBQWhDWTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQWtDaEI7QUE5Qkk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFnQ1I7QUE1QkE7RUFDSSxhQUFBO0FBK0JKO0FBOUJJO0VBQ0ksNkJBQUE7QUFnQ1I7QUE5Qkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWdDUjtBQTVCQTtFQUNJLFlBQUE7QUErQkoiLCJmaWxlIjoiZG9jdW1lbnRzLWdlbmVyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxudGFibGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm1vZGFsLXJvdW5kZWQge1xuICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmRvY3VtZW50cy1nZW5lcmF0aW9uX19sb3dlci1jb250YWluZXJfX2xlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICBoZWlnaHQ6IDU1dmg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgICAuZG9jdW1lbnRzLWdlbmVyYXRpb25fX2NsaWVudHMtY2FyZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmRvY3VtZW50cy1nZW5lcmF0aW9uX19jbGllbnQtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQycHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5kb2N1bWVudHMtZ2VuZXJhdGlvbl9fY2xpZW50LWNhcmRfX2RhdGEtY29udGFpbmVyLW91dGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kb2N1bWVudHMtZ2VuZXJhdGlvbl9fY2xpZW50LWNhcmRfX2RhdGEtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLmRvY3VtZW50cy1nZW5lcmF0aW9uX19jbGllbnQtY2FyZF9fbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9jdW1lbnRzLWdlbmVyYXRpb25fX2NsaWVudC1jYXJkX19jaSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZG9jdW1lbnRzLWdlbmVyYXRpb25fX2NsaWVudC1jYXJkOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgIH1cbn1cblxuLmRvY3VtZW50cy1nZW5lcmF0aW9uX190YWJsZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLnRhYmxlPiA6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAycHggJHByaW1hcnktY29sb3I7XG4gICAgfVxuICAgIC5hY3Rpb24taWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbi5kb2N1bWVudHMtZ2VuZXJhdGlvbl9fZ3JvdXBzLWNhcmRfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHB4O1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 51569:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/components/family-group-data-modal/family-group-data-modal.page.html?ngResource ***!
  \***********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-grid>\n\n\n    <ion-row class=\"ion-padding-top ion-justify-content-center\">\n        <ion-label class=\"title-subtitle\">Estos son tus familiares en: {{groupName}}</ion-label>\n        \n\n\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <div *ngFor=\"let member of valueUsers[0]?.User\" class=\"row\">\n                <div class=\"family-group__member-container col-12\">\n                    {{member}}\n                </div>\n            </div>\n        </ion-col>\n    </ion-row>\n    \n    <div class=\"icon-close cursor-pointer\" (click)=\"closeModal()\">\n        <app-button [configuration]=\"configurationButton\" ></app-button>\n    </div>\n\n</ion-row>\n\n</ion-grid>";

/***/ }),

/***/ 56249:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/components/red-siem/red-siem.page.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Certificado Red Siem</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row *ngIf=\"certificateCode == '5'\" class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.GENERATE-CERTIFICATE-MODAL.titleCertificateRedSiem\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row *ngIf=\"certificateCode == '5'\" class=\"ion-padding-top\">\n        <ion-label>{{\"PORTAL.GENERATE-CERTIFICATE-MODAL.subtitleCertificateRedSiem\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row *ngIf=\"certificateCode == '4'\" class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.GENERATE-CERTIFICATE-MODAL.titleCertificateTravel\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row *ngIf=\"certificateCode == '4'\" class=\"ion-padding-top\">\n        <ion-label>{{\"PORTAL.GENERATE-CERTIFICATE-MODAL.subtitleCertificateTravel\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row *ngIf=\"certificateCode == '3'\" class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.GENERATE-CERTIFICATE-MODAL.titleCertificatePayments\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row *ngIf=\"certificateCode == '3'\" class=\"ion-padding-top\">\n        <ion-label>{{\"PORTAL.GENERATE-CERTIFICATE-MODAL.subtitleCertificatePayments\" | translate}}</ion-label>\n    </ion-row>\n\n    <div *ngIf=\"certificateCode == '5' || certificateCode == '4'\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"12\">\n                <ion-item>\n                    <ion-label position=\"floating\">País</ion-label>\n                    <ion-select #CountrySelects=\"ngModel\" name=\"CountrySelect\" [(ngModel)]=\"CountrySelect\" required (ionChange)=\"onChangeCountryRedSiem()\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option *ngFor=\"let country of CountryListRedSiem\" [value]=\"country.Code\">{{country.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <div *ngIf=\"CountrySelects.invalid\">\n                    <ion-label class=\"ion-validator\" *ngIf=\"CountrySelects.errors!.required && CountrySelects.touched\">\n                        {{\"PORTAL.EDIT-APPOINTMENT.RequiredField\" | translate}}\n                    </ion-label>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"12\">\n                <ion-item>\n                    <ion-label position=\"floating\">Ciudad</ion-label>\n                    <ion-select [multiple]=\"true\" (ionCancel)=\"OnItemDeSelect($event)\" required #SelectItem=\"ngModel\" [(ngModel)]=\"selectedItems\" (ionChange)=\"onItemSelect($event)\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option *ngFor=\"let city of CitysListRedSiem\" [value]=\"city.$value\"></ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <form [formGroup]=\"form\">\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-col>\n                    <ion-item button=\"true\" id=\"open-date-input-from\">\n                        <ion-label>Fecha desde</ion-label>\n                        <ion-label class=\"date-indicator\">{{obtainDate(form.controls.from.value)}}</ion-label>\n                        <ion-popover trigger=\"open-date-input-from\" show-backdrop=\"false\">\n                            <ng-template>\n                                <ion-datetime #tmpStartDate presentation=\"date\" (ionChange)=\"setDateFrom(tmpStartDate.value); tmpStartDate.confirm(true);\">\n                                </ion-datetime>\n                            </ng-template>\n                        </ion-popover>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-col>\n                    <ion-item button=\"true\" id=\"open-date-input-until\">\n                        <ion-label>Fecha hasta</ion-label>\n                        <ion-label class=\"date-indicator\">{{obtainDate(form.controls.until.value)}}</ion-label>\n                        <ion-popover trigger=\"open-date-input-until\" show-backdrop=\"false\">\n                            <ng-template>\n                                <ion-datetime #tmpEndDate presentation=\"date\" (ionChange)=\"setDateUntil(tmpEndDate.value); tmpEndDate.confirm(true);\">\n                                </ion-datetime>\n                            </ng-template>\n                        </ion-popover>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n        </form>\n\n        <ion-row class=\"ion-padding-top\" *ngIf=\"downloadInProgress || sendEmailInProgress\">\n            <ion-col size=\"12\">\n                <ion-item>\n                    <ion-label *ngIf=\"downloadInProgress === true\" class=\"alert alert-info\" role=\"alert\">\n                        Descargando certificado...\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"completeDownloadSuccess === true && downloadInProgress === false && removeMessageDownload === false\" class=\"alert alert-success\" role=\"alert\">\n                        La descarga finalizó exitosamente.\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"completeDownloadSuccess === false && downloadInProgress === false && removeMessageDownload === false\" class=\"alert alert-danger\" role=\"alert\">\n                        Error al descargar el certificado.\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"sendEmailInProgress === true\" class=\"alert alert-info\" role=\"alert\">\n                        Enviando email...\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"completeSendEmailSuccess === true && sendEmailInProgress === false && removeMessageSendEmail === false\" class=\"alert alert-success\" role=\"alert\">\n                        Hemos enviado al correo electrónico: <strong>{{emailTitular}}</strong> el certificado seleccionado.\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"completeSendEmailSuccess === false && sendEmailInProgress === false && removeMessageSendEmail === false\" class=\"alert alert-danger\" role=\"alert\">\n                        Error al enviar el email.\n                    </ion-label>\n                    <br/>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"certificateCode == '4'\">\n            <ion-col>\n                <app-button [disabled]=\"!requiredModalFields\" [configuration]=\"downloadButtonConfig\" (click)=\"eventDownloadPdf(4)\"></app-button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"certificateCode == '5'\">\n            <ion-col>\n                <app-button [disabled]=\"!requiredModalFields\" [configuration]=\"downloadButtonConfig\" (click)=\"eventDownloadPdf(5)\"></app-button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"certificateCode == '4'\">\n            <ion-col>\n                <app-button [disabled]=\"!requiredModalFields\" [configuration]=\"emailButtonConfig\" (click)=\"eventSendEmail(4)\"></app-button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"certificateCode == '5'\">\n            <ion-col>\n                <app-button [disabled]=\"!requiredModalFields\" [configuration]=\"emailButtonConfig\" (click)=\"eventSendEmail(5)\"></app-button>\n            </ion-col>\n        </ion-row>\n\n    </div>\n\n    <div *ngIf=\"certificateCode == '3'\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-select id=\"selectedPastYears\" name=\"selectedPastYear\" [(ngModel)]=\"selectedPastYears\" required (selectionChange)=\"onSelectedPastYear()\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                <ion-select-option value=\"null\" selected>(*) Selecciona una opción</ion-select-option>\n                <ion-select-option [value]=\"lastYear\">{{lastYear}}</ion-select-option>\n                <ion-select-option [value]=\"ancestorYear\">{{ancestorYear}}</ion-select-option>\n            </ion-select>\n            <ion-label *ngIf=\"requiredModalFieldsTwo === false\" class=\"ion-validator\">\n                {{\"PORTAL.EDIT-APPOINTMENT.RequiredField\" | translate}}\n            </ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n\n            <ion-col size=\"12\">\n\n                <ion-item>\n                    <ion-label *ngIf=\"downloadInProgress === true\" class=\"alert alert-info\" role=\"alert\">\n                        Descargando certificado...\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"completeDownloadSuccess === true && downloadInProgress === false && removeMessageDownload === false\" class=\"alert alert-success\" role=\"alert\">\n                        La descarga finalizó exitosamente.\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"completeDownloadSuccess === false  && downloadInProgress === false  && removeMessageDownload === false\" class=\"alert alert-danger\" role=\"alert\">\n                        Error al descargar el certificado.\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"sendEmailInProgress === true\" class=\"alert alert-info\" role=\"alert\">\n                        Enviando email...\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"completeSendEmailSuccess === true && sendEmailInProgress === false && removeMessageSendEmail === false\" class=\"alert alert-success\" role=\"alert\">\n                        Hemos enviado al correo electrónico: <strong>{{emailTitular}}</strong> el certificado seleccionado.\n                    </ion-label>\n                    <br/>\n                    <ion-label *ngIf=\"completeSendEmailSuccess === false  && sendEmailInProgress === false  && removeMessageSendEmail === false\" class=\"alert alert-danger\" role=\"alert\">\n                        Error al enviar el email.\n                    </ion-label>\n                    <br/>\n                </ion-item>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col>\n                <app-button [disabled]=\"!requiredModalFieldsTwo\" [configuration]=\"downloadButtonConfig\" (click)=\"eventDownloadPdf(3)\"></app-button>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-padding-top\">\n            <ion-col>\n                <app-button [disabled]=\"!requiredModalFieldsTwo\" [configuration]=\"emailButtonConfig\" (click)=\"eventSendEmail(3)\">\n                </app-button>\n            </ion-col>\n        </ion-row>\n\n    </div>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ }),

/***/ 87178:
/*!*********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/documents-generation/documents-generation.page.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Generar Certificados</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.GENERATE-CERTIFICATE.titleOfTheSelection\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-subtitle\">{{\"PORTAL.GENERATE-CERTIFICATE.descriptionOfTheSelection\" | translate}}</ion-label>\n    </ion-row>\n\n    <div *ngIf=\"!showCertificates\">\n\n        <div *ngIf=\"affiliateType == '1'\">\n\n            <div *ngFor=\"let beneficiary of beneficiaries\" (click)=\"onChangeBeneficiary(beneficiary.Document)\">\n\n                <ion-card>\n                    <ion-row>\n                        <ion-col size=\"2\" style=\"text-align:center; align-self:center;\">\n                            <ion-icon name=\"person-outline\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"10\">\n                            <ion-card-header>\n                                <ion-card-title>{{beneficiary.FullNames}}</ion-card-title>\n                            </ion-card-header>\n                            <ion-card-content>\n                                <ion-label>{{beneficiary.DocumentType == 1 ? 'CI' : ''}}:{{beneficiary.Document}}</ion-label>\n                            </ion-card-content>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n            </div>\n\n            <div *ngIf=\"titularUser\">\n\n                <div *ngFor=\"let groups of familyGroups\" (click)=\"onChangeGroups(groups.groupCode)\">\n\n                    <ion-card>\n                        <ion-row>\n                            <ion-col size=\"2\" style=\"text-align:center; align-self:center;\">\n                                <ion-icon name=\"person-outline\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"10\">\n                                <ion-card-header>\n                                    <ion-card-title>{{groups.groupName}}</ion-card-title>\n                                </ion-card-header>\n                                <ion-card-content>\n                                    <ion-label>{{groups.groupName}}</ion-label>\n                                </ion-card-content>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div *ngIf=\"affiliateType=='2'\">\n\n            <ion-card (click)=\"onChangeMyUser(userLogin.document)\">\n                <ion-row>\n                    <ion-col size=\"2\" style=\"text-align:center; align-self:center;\">\n                        <ion-icon name=\"person-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"10\">\n                        <ion-card-header>\n                            <ion-card-title>{{userLogin.nameUser}}</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <ion-label>{{userLogin.DocumentType}}: {{userLogin.Document}}</ion-label>\n                        </ion-card-content>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n\n        </div>\n\n    </div>\n\n    <div *ngIf=\"showCertificates\">\n\n        <ion-row class=\"ion-padding-top\" display=\"flex\" flex-direction=\"row\" justifiy-content=\"flex-end\">\n            <ion-label (click)=\"goBack();\">\n                {{ \"PORTAL.NEARBY-CLINICS-DETAIL.BackToList\" | translate}}</ion-label>\n        </ion-row>\n\n        <hr/>\n\n        <div *ngIf=\"certificates?.length !=0 && certificates\">\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-col>\n                    <ion-label class=\"title-subtitle\">{{beneficiarySelect}}</ion-label>\n                </ion-col>\n            </ion-row>\n\n            <div *ngFor=\"let certificate of certificates\">\n\n                <ion-row class=\"ion-padding-top\">\n                    <ion-col size=\"12\">\n                        <ion-label style=\"font-weight: 500;\">{{certificate.CertificateName}}</ion-label>\n                    </ion-col>\n                </ion-row>\n\n                <div *ngIf=\"certificate.CertificateCode === 2\">\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-col size=\"2\">\n                            <ion-icon size=\"small\" name=\"cloud-download-outline\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"10\">\n                            <a *ngIf=\"peaceAndSave == true\" (click)=\"eventDownloadPdf(2)\">\n                                {{\"PORTAL.GENERATE-CERTIFICATE.downloadButton\" | translate}}\n                            </a>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-col size=\"2\">\n                            <ion-icon size=\"small\" name=\"cloud-download-outline\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"10\">\n                            <a *ngIf=\"peaceAndSave == false\" (click)=\"ModalPayNone()\">\n                                {{\"PORTAL.GENERATE-CERTIFICATE.downloadButton\" | translate}}\n                            </a>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-col size=\"2\">\n                            <ion-icon size=\"small\" name=\"mail-outline\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"10\">\n                            <a *ngIf=\"peaceAndSave == true\" (click)=\"eventSendEmail(2)\">\n                                {{\"PORTAL.GENERATE-CERTIFICATE.emailButton\" | translate}}\n                            </a>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-col size=\"2\">\n                            <ion-icon size=\"small\" name=\"cloud-download-outline\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"10\">\n                            <a *ngIf=\"peaceAndSave == false\" (click)=\"ModalPayNone()\">\n                                {{\"PORTAL.GENERATE-CERTIFICATE.emailButton\" | translate}}\n                            </a>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <div *ngIf=\"certificate.CertificateCode === 1\">\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-col size=\"2\">\n                            <ion-icon size=\"small\" name=\"cloud-download-outline\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"10\">\n                            <a (click)=\"eventDownloadPdf(1)\">\n                                {{\"PORTAL.GENERATE-CERTIFICATE.downloadButton\" | translate}}\n                            </a>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-col size=\"2\">\n                            <ion-icon size=\"small\" name=\"mail-outline\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"10\">\n                            <a (click)=\"eventSendEmail(1)\">\n                                {{\"PORTAL.GENERATE-CERTIFICATE.emailButton\" | translate}}\n                            </a>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n                <div *ngIf=\"certificate.CertificateCode === 3 || certificate.CertificateCode === 4 || certificate.CertificateCode === 5\">\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-col size=\"2\">\n                            <ion-icon size=\"small\" name=\"settings-outline\"></ion-icon>\n                        </ion-col>\n                        <ion-col size=\"10\">\n                            <a (click)=\"openModalGenerateCertificate(certificate.CertificateCode)\">\n                                    {{\"PORTAL.GENERATE-CERTIFICATE.generateCertificate\" | translate}}\n                                </a>\n                        </ion-col>\n                    </ion-row>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_my-account_documents-generation_documents-generation_module_ts.js.map