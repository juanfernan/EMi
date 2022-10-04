"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_customer-service_components_options-event-types_options-event-types_module_ts"],{

/***/ 17894:
/*!*****************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/event-types-form/event-types-form.page.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTypesFormPage": () => (/* binding */ EventTypesFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _event_types_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-types-form.page.html?ngResource */ 4157);
/* harmony import */ var _event_types_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-types-form.page.scss?ngResource */ 30973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _options_event_types_models_eventTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options-event-types/models/eventTypes */ 22064);
/* harmony import */ var _services_eventtypesform_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/eventtypesform.service */ 2046);













let EventTypesFormPage = class EventTypesFormPage {
    constructor(eventtypesformService, bsModalService, fb, translate) {
        this.eventtypesformService = eventtypesformService;
        this.bsModalService = bsModalService;
        this.fb = fb;
        this.continueFormProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.eventTypesClass = new _options_event_types_models_eventTypes__WEBPACK_IMPORTED_MODULE_6__.EventTypesClass();
        this.areasRelatedToTheEvent = [];
        this.reasonsForReimbursement = [];
        this.currentDate = new Date();
        this.departments = [];
        this.cities = [];
        //DocumentFiles
        this.fileSizeAllowMB = 2;
        this.allowedExtensionsFileUpload = ["pdf", "png", "jpeg"];
        this.typeErrorFile = "";
        this.disabledInputFile = false;
        this.multipleFiles = [];
        this.viewSelectedFiles = false;
        this.buttonNameFile = "VER DETALLES";
        this.viewMessagesInformation = false;
        //charCountDown: number = 0;
        this.eventCommentsMaxChar = 1000;
        this.eventCommentsMinChar = 40;
        this.configurationButtonSend = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.translate = translate;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment;
        this.formEventType = this.fb.group({
            eventdate: [{ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            relatedAreas: [{ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            namesOfficials: [{ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[a-zA-Z \-\']+')],
            eventComments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            reasonsForReimbursement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
        });
        this.translate.get('PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.SendBtn').subscribe(resp => {
            this.buttonSendText = resp;
        });
        this.configurationButtonSend.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Primary;
        this.configurationButtonSend.text = this.buttonSendText;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.country;
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
        }
        else {
            this.eventTypesClass.EventCodeDepartment = '';
            this.eventTypesClass.EventCodeCity = '';
        }
    }
    getFormatedDate(date) {
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
    //Información de los archivos guardados.
    inputFileEvent(file) {
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
    onChangeEventDepartment(codeDepartment) {
        this.eventTypesClass.EventCodeDepartment = codeDepartment;
        if (codeDepartment != null && codeDepartment != "") {
            this.getCities(codeDepartment);
        }
        else {
            this.cities = [];
        }
    }
    getCities(codeDepartment) {
        this.eventtypesformService
            .getCities(codeDepartment)
            .subscribe(result => {
            this.cities = result;
        }, error => console.error(error));
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
    onChangeEventCodeCity(event) {
        this.eventTypesClass.EventCodeCity = event;
    }
    removeFileOfItemsSelected(name) {
        //Removiendo Files, en los files múltiples 3 en 1.
        this.multipleFiles = this.multipleFiles.filter((obj) => obj.name != name);
        this.eventTypesClass.SendFilesComplaintsAndClaims = this.multipleFiles;
        if (this.multipleFiles.length == 3) {
            this.disabledInputFile = true;
        }
        else {
            this.disabledInputFile = false;
        }
        if (this.multipleFiles.length < 1) {
            this.buttonNameFile = "VER DETALLES";
            this.viewSelectedFiles = false;
        }
    }
    onChangeReasonsForReimbursement(event) {
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
            .subscribe(result => {
            if (result.StatusCode === 0) {
                this.termsAndConditions = result.termConditions.Message;
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
            }
        }, error => console.error(error));
    }
    getDepartments() {
        this.eventtypesformService
            .getDepartments()
            .subscribe(result => {
            this.departments = result;
        }, error => console.error(error));
    }
    onChangeApplicant(event) {
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
        this.bsModalRef = this.generateInformativeModal('Terminos y condiciones', this.termsAndConditions, true, true);
        this.bsModalRef.content.onClose.subscribe((accept) => {
            if (accept) {
                this.eventTypesClass.AcceptTermsAndConditions = true;
            }
            else {
                this.eventTypesClass.AcceptTermsAndConditions = false;
            }
        });
    }
    sendDataEventType() {
        this.eventTypesClass.EventDate = this.getFormatedDate(this.formEventType.controls.eventdate.value);
        this.postCreatePqrs(this.eventTypesClass);
    }
    postCreatePqrs(eventTypesClass) {
        this.eventtypesformService
            .postCreatePqrs(eventTypesClass)
            .subscribe(result => {
            if (result.StatusCode === 0) {
                this.bsModalRef = this.generateInformativeModal(result.Title, `${result.Message}: ${result.SettledNumber}`, true, true);
                this.bsModalRef.content.onClose.subscribe((accept) => {
                    if (accept) {
                        this.eventTypesClass = new _options_event_types_models_eventTypes__WEBPACK_IMPORTED_MODULE_6__.EventTypesClass();
                        this.continueFormProcess.emit({
                            continueFormProcess: false
                        });
                    }
                });
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
            }
        }, error => {
            this.showErrorNotificationModal(error.message);
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
            ignoreBackdropClick: true
        };
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
    showErrorNotificationModal(msg) {
        const initialState = {
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
        };
        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
    getReasonsForReimbursement() {
        this.eventtypesformService
            .getRefundTypes(this.stepOneInformation.checkCustomerIsActiveInfo.ActiveUserResponsible)
            .subscribe(result => {
            if (result.StatusCode === 0) {
                this.reasonsForReimbursement = result.DataList;
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
            }
        }, error => console.error(error));
    }
    getAreasRelatedToTheEvent() {
        this.eventtypesformService
            .getEventAreas()
            .subscribe(result => {
            if (result.StatusCode === 0) {
                this.areasRelatedToTheEvent = result.DataList;
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
            }
        }, error => console.error(error));
    }
    viewMessagesInformationEvent(event) {
        this.viewMessageInformationId = event;
        this.viewMessagesInformation = !this.viewMessagesInformation;
    }
};
EventTypesFormPage.ctorParameters = () => [
    { type: _services_eventtypesform_service__WEBPACK_IMPORTED_MODULE_7__.EventtypesformService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService }
];
EventTypesFormPage.propDecorators = {
    continueFormProcess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }],
    stepOneInformation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
EventTypesFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-event-types-form',
        template: _event_types_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_event_types_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventTypesFormPage);



/***/ }),

/***/ 2046:
/*!***************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/event-types-form/services/eventtypesform.service.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventtypesformService": () => (/* binding */ EventtypesformService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let EventtypesformService = class EventtypesformService {
    constructor(http) {
        this.http = http;
    }
    getEventAreas() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/DataLists/GetEventAreas`);
    }
    getTermsConditions() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/pqrs/TermsConditions`);
    }
    getRefundTypes(responsable) {
        let params = {
            Responsable: responsable
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/DataLists/GetRefundType`, params);
    }
    getDepartments() {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/DataLists/GetDepartmentsWithOutOther`, null);
    }
    getCities(departmentCode) {
        let params = {
            value: departmentCode
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/DataLists/GetCitiesWithOutOther`, params);
    }
    postCreatePqrs(eventTypesClass) {
        let params = {
            EventType: eventTypesClass.EventType,
            SubjectOfTheEvent: eventTypesClass.SubjectOfTheEvent,
            ApplicantDocumentType: eventTypesClass.ApplicantDocumentType,
            ApplicantDocument: eventTypesClass.ApplicantDocument,
            ThirdDocumentType: eventTypesClass.ThirdDocumentType,
            ThirdDocument: eventTypesClass.ThirdDocument,
            RelatedArea: eventTypesClass.RelatedArea,
            NamesOfficial: eventTypesClass.NamesOfficial,
            EventDate: eventTypesClass.EventDate,
            EventCodeDepartment: eventTypesClass.EventCodeDepartment,
            EventCodeCity: eventTypesClass.EventCodeCity,
            EventComment: eventTypesClass.EventComment,
            AcceptTermsAndConditions: eventTypesClass.AcceptTermsAndConditions,
            SendFileThanksAndCongratulations: eventTypesClass.SendFileThanksAndCongratulations,
            SendFilesComplaintsAndClaims: eventTypesClass.SendFilesComplaintsAndClaims,
            SendBeneficiaryDeathCertificate: eventTypesClass.SendBeneficiaryDeathCertificate,
            SendFileBankAccount: eventTypesClass.SendFileBankAccount,
            SendFileTitularDeathCertificate: eventTypesClass.SendFileTitularDeathCertificate,
            SendFilesCivilRegistrationMarriage: eventTypesClass.SendFilesCivilRegistrationMarriage,
            SendFileBirthCertificateSon: eventTypesClass.SendFileBirthCertificateSon,
            SendFileSpouseDeathCertificate: eventTypesClass.SendFileSpouseDeathCertificate,
            SendFileExtraJudgmentStatement: eventTypesClass.SendFileExtraJudgmentStatement,
            SendFileBankAccountCertificate: eventTypesClass.SendFileBankAccountCertificate,
            SendFileBankStatementOrRemovablePayroll: eventTypesClass.SendFileBankStatementOrRemovablePayroll,
            ReasonsForReimbursement: eventTypesClass.ReasonsForReimbursement,
            BankAccountUser: eventTypesClass.BankAccountUser
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}pqrs/PostCreatePqrs`, params);
    }
};
EventtypesformService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
EventtypesformService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], EventtypesformService);



/***/ }),

/***/ 22064:
/*!****************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/options-event-types/models/eventTypes.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTypesClass": () => (/* binding */ EventTypesClass)
/* harmony export */ });
class EventTypesClass {
}


/***/ }),

/***/ 10812:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/options-event-types/options-event-types-routing.module.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsEventTypesPageRoutingModule": () => (/* binding */ OptionsEventTypesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _options_event_types_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options-event-types.page */ 80232);




const routes = [
    {
        path: '',
        component: _options_event_types_page__WEBPACK_IMPORTED_MODULE_0__.OptionsEventTypesPage
    }
];
let OptionsEventTypesPageRoutingModule = class OptionsEventTypesPageRoutingModule {
};
OptionsEventTypesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OptionsEventTypesPageRoutingModule);



/***/ }),

/***/ 53180:
/*!*************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/options-event-types/options-event-types.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsEventTypesPageModule": () => (/* binding */ OptionsEventTypesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _options_event_types_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options-event-types-routing.module */ 10812);
/* harmony import */ var _options_event_types_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options-event-types.page */ 80232);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _tracing_event_types_tracing_event_types_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tracing-event-types/tracing-event-types.page */ 45932);
/* harmony import */ var _event_types_form_event_types_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-types-form/event-types-form.page */ 17894);
/* harmony import */ var _request_event_types_request_event_types_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../request-event-types/request-event-types.page */ 44462);











let OptionsEventTypesPageModule = class OptionsEventTypesPageModule {
};
OptionsEventTypesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _options_event_types_routing_module__WEBPACK_IMPORTED_MODULE_0__.OptionsEventTypesPageRoutingModule
        ],
        declarations: [
            _options_event_types_page__WEBPACK_IMPORTED_MODULE_1__.OptionsEventTypesPage,
            _request_event_types_request_event_types_page__WEBPACK_IMPORTED_MODULE_5__.RequestEventTypesPage,
            _tracing_event_types_tracing_event_types_page__WEBPACK_IMPORTED_MODULE_3__.TracingEventTypesPage,
            _event_types_form_event_types_form_page__WEBPACK_IMPORTED_MODULE_4__.EventTypesFormPage
        ]
    })
], OptionsEventTypesPageModule);



/***/ }),

/***/ 80232:
/*!***********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/options-event-types/options-event-types.page.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsEventTypesPage": () => (/* binding */ OptionsEventTypesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _options_event_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options-event-types.page.html?ngResource */ 83490);
/* harmony import */ var _options_event_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options-event-types.page.scss?ngResource */ 39932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let OptionsEventTypesPage = class OptionsEventTypesPage {
    constructor() {
        this.tracingEventTypesItialization = false;
        this.currentSection = 'change-option';
    }
    ngOnInit() {
        this.currentSection = 'change-option';
    }
    setSection(section) {
        this.currentSection = section;
        if (this.currentSection == 'change-option') {
            this.tracingEventTypesItialization = true;
        }
        else {
            this.tracingEventTypesItialization = false;
        }
    }
    eventTracingEventTypesItialization(event) {
        if (event == 'change-option') {
            this.tracingEventTypesItialization = true;
        }
        else {
            this.tracingEventTypesItialization = false;
        }
    }
    changeTab($event) {
        this.tabIndex = $event.index == 0;
        if ($event.index == false) {
            this.tracingEventTypesItialization = false;
        }
        else {
            this.tracingEventTypesItialization = true;
        }
    }
};
OptionsEventTypesPage.ctorParameters = () => [];
OptionsEventTypesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-options-event-types',
        template: _options_event_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_options_event_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OptionsEventTypesPage);



/***/ }),

/***/ 44462:
/*!***********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/request-event-types/request-event-types.page.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestEventTypesPage": () => (/* binding */ RequestEventTypesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _request_event_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-event-types.page.html?ngResource */ 24584);
/* harmony import */ var _request_event_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-event-types.page.scss?ngResource */ 65002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var _service_solicitud_services_portal_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service-solicitud/services/portal-common.service */ 29014);
/* harmony import */ var _options_event_types_models_eventTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options-event-types/models/eventTypes */ 22064);
/* harmony import */ var _services_request_event_types_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/request-event-types.service */ 62515);














let RequestEventTypesPage = class RequestEventTypesPage {
    constructor(translate, requestEventTypesService, portalCommonServiceService, bsModalService, router, fb) {
        this.requestEventTypesService = requestEventTypesService;
        this.portalCommonServiceService = portalCommonServiceService;
        this.bsModalService = bsModalService;
        this.router = router;
        this.fb = fb;
        this.eventTypesClass = new _options_event_types_models_eventTypes__WEBPACK_IMPORTED_MODULE_6__.EventTypesClass();
        this.eventTypesList = [];
        this.checkCustomerIsActiveInfo = [];
        this.enterDataOfTheThird = false;
        this.documentTypes = [];
        this.continueFormProcess = false;
        this.subtitle = "";
        this.isLoading = false;
        this.configurationButtonSearch = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.translate = translate;
        this.formRequest = this.fb.group({
            eventType: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            subjectOfTheEvent: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            thirdDocumentType: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            thirdDocument: [{ value: '', disabled: false },
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]
        });
        this.translate.get('PORTAL.CUSTOMER-SERVICE.GRATITUDE.ButtonSearch').subscribe(resp => {
            this.buttonSearchText = resp;
        });
        this.configurationButtonSearch.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Primary;
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
    continueFormProcessInfo(event) {
        if (event.continueFormProcess === false) {
            this.backSearchSection();
        }
    }
    searchThirdPartyStatus() {
        this.checkIfTheCustomerIsActive('02');
    }
    onChangeSubjectOfTheEvent(event) {
        if (event) {
            if (event == '01') {
                //Si es uno mismo valida directamente si está activo
                this.enterDataOfTheThird = false;
                this.checkIfTheCustomerIsActive(event);
            }
            else {
                //Si es un tercero, primero el usuario debe digitar los datos de este y luego buscar si es activo
                this.enterDataOfTheThird = true;
                this.getDocumentTypes();
            }
        }
        else {
            this.enterDataOfTheThird = false;
        }
    }
    getDocumentTypes() {
        this.requestEventTypesService
            .getDocumentTypes('DataLists/GetDocumentTypes')
            .subscribe(result => {
            this.documentTypes = result.DataList;
        }, error => console.log(error));
    }
    checkIfTheCustomerIsActive(subjectOfTheEvent) {
        //Parametros obtenidos en los formularios de este paso 1 enviados por input al formulario siguiente.
        var thirdDocumentType;
        var thirdDocument;
        if (subjectOfTheEvent == '01') {
            thirdDocumentType = this.eventTypesClass.ApplicantDocumentType;
            thirdDocument = this.eventTypesClass.ApplicantDocument;
            this.postValidateActive(this.eventTypesClass.ApplicantDocumentType, this.eventTypesClass.ApplicantDocument, thirdDocumentType, thirdDocument);
        }
        else {
            thirdDocumentType = this.eventTypesClass.ThirdDocumentType;
            thirdDocument = this.eventTypesClass.ThirdDocument;
            this.postValidateActive(this.eventTypesClass.ThirdDocumentType, this.eventTypesClass.ThirdDocument, thirdDocumentType, thirdDocument);
        }
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
    backSearchSectionConfirm() {
        this.bsModalRef = this.generateInformativeModal('¿Deseas regresar a solicitar un nuevo tipo de evento?', 'Se perderá toda la información proporcionada en este formulario.', true, true);
        this.bsModalRef.content.onClose.subscribe((accept) => {
            accept ? this.backSearchSection() : null;
        });
    }
    backSearchSection() {
        this.enterDataOfTheThird = false;
        this.eventTypesClass = new _options_event_types_models_eventTypes__WEBPACK_IMPORTED_MODULE_6__.EventTypesClass();
        this.continueFormProcess = false;
        this.classModelInitialization();
    }
    postValidateActive(documentType, document, thirdDocumentType, thirdDocument) {
        this.isLoading = true;
        this.requestEventTypesService
            .postValidateActive(documentType, document)
            .subscribe(result => {
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
                }
                else {
                    this.continueFormProcess = false;
                    this.bsModalRef = this.generateInformativeModal(result.Title, this.checkCustomerIsActiveInfo.Message, true, false);
                }
                this.isLoading = false;
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, false);
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
            .subscribe(result => {
            if (result.StatusCode === 0) {
                this.eventTypesList = result.DataList;
            }
        }, 
        // TODO falta mostrar el error
        error => console.log(error));
    }
};
RequestEventTypesPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _services_request_event_types_service__WEBPACK_IMPORTED_MODULE_7__.RequestEventTypesService },
    { type: _service_solicitud_services_portal_common_service__WEBPACK_IMPORTED_MODULE_5__.PortalCommonService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
RequestEventTypesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-request-event-types',
        template: _request_event_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_request_event_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RequestEventTypesPage);



/***/ }),

/***/ 62515:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/request-event-types/services/request-event-types.service.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestEventTypesService": () => (/* binding */ RequestEventTypesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let RequestEventTypesService = class RequestEventTypesService {
    constructor(http) {
        this.http = http;
    }
    getEventType() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/DataLists/GetEventType`);
    }
    getDocumentTypes(url) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/${url}`, null);
    }
    postValidateActive(documentType, document) {
        let params = {
            DocumentType: documentType,
            Document: document
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/pqrs/ValidateActive`, params);
    }
};
RequestEventTypesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RequestEventTypesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RequestEventTypesService);



/***/ }),

/***/ 96859:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/tracing-event-types/services/tracingeventtypes.service.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TracingeventtypesService": () => (/* binding */ TracingeventtypesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let TracingeventtypesService = class TracingeventtypesService {
    constructor(http) {
        this.http = http;
    }
    postTracingPqrs(documentType, document) {
        let params = {
            DocumentType: documentType,
            Document: document
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/pqrs/TracingPqrs`, params);
    }
};
TracingeventtypesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
TracingeventtypesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], TracingeventtypesService);



/***/ }),

/***/ 45932:
/*!***********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/tracing-event-types/tracing-event-types.page.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TracingEventTypesPage": () => (/* binding */ TracingEventTypesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tracing_event_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracing-event-types.page.html?ngResource */ 71759);
/* harmony import */ var _tracing_event_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracing-event-types.page.scss?ngResource */ 10615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var _services_tracingeventtypes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tracingeventtypes.service */ 96859);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);








let TracingEventTypesPage = class TracingEventTypesPage {
    constructor(tracingeventtypesService, bsModalService) {
        this.tracingeventtypesService = tracingeventtypesService;
        this.bsModalService = bsModalService;
        this.tracingEventTypesItialization = false;
        this.getEventStatus = [];
        this.p = 1;
        this.isLoading = false;
        //country = this.config.info.country;
        this.showPagination = false;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.country;
    }
    ngOnInit() {
        this.applicantDocumentType = localStorage.getItem("documentType");
        this.applicantDocument = localStorage.getItem("document");
        if (this.tracingEventTypesItialization) {
            this.postTracingPqrs(this.applicantDocumentType, this.applicantDocument);
        }
    }
    pageChanged(event) {
        this.p = event;
    }
    postTracingPqrs(applicantDocumentType, applicantDocument) {
        this.isLoading = true;
        this.tracingeventtypesService
            .postTracingPqrs(applicantDocumentType, applicantDocument)
            .subscribe(result => {
            this.tracingEventTypesItialization = false;
            if (result.StatusCode === 0) {
                this.showPagination = true;
                this.isLoading = false;
                this.getEventStatus = result.tracingPqrs;
            }
            else {
                this.isLoading = false;
                this.showPagination = false;
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false, false);
            }
        }, error => {
            this.isLoading = false;
            this.showErrorNotificationModal(error.message);
        });
    }
    showErrorNotificationModal(msg) {
        const initialState = {
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
        };
        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
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
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
    }
};
TracingEventTypesPage.ctorParameters = () => [
    { type: _services_tracingeventtypes_service__WEBPACK_IMPORTED_MODULE_2__.TracingeventtypesService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService }
];
TracingEventTypesPage.propDecorators = {
    tracingEventTypesItialization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
TracingEventTypesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tracing-event-types',
        template: _tracing_event_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tracing_event_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TracingEventTypesPage);



/***/ }),

/***/ 30973:
/*!******************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/event-types-form/event-types-form.page.scss?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.container-characters-counter {\n  background-color: #f3f3f3;\n  padding: 1px;\n  margin-top: 10px;\n  border-radius: 4px;\n  color: #555;\n}\n.iconInfo {\n  margin-left: -28px;\n  margin-top: 5px;\n}\n.iconInfo2 {\n  margin-top: 8px;\n  margin-left: 12px;\n}\n.emi1-txttitulofamiliar {\n  font-size: 22px;\n  text-align: center;\n  color: #494949;\n  margin: 0;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LXR5cGVzLWZvcm0ucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBaUNKIiwiZmlsZSI6ImV2ZW50LXR5cGVzLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuLmNvbnRhaW5lci1jaGFyYWN0ZXJzLWNvdW50ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG4uaWNvbkluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjhweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pY29uSW5mbzIge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmVtaTEtdHh0dGl0dWxvZmFtaWxpYXIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 39932:
/*!************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/options-event-types/options-event-types.page.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n.tab-pane {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMtZXZlbnQtdHlwZXMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFpQ0o7QUE5QkE7RUFDSSxZQUFBO0FBaUNKIiwiZmlsZSI6Im9wdGlvbnMtZXZlbnQtdHlwZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG4udGFiLXBhbmUge1xuICAgIG1hcmdpbjogMTBweDtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 65002:
/*!************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/request-event-types/request-event-types.page.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".alert-danger-email {\n  font-size: 11px;\n  float: left;\n  width: 100%;\n  font-weight: 400 !important;\n  color: #c12a2b !important;\n}\n\n.content-family .emi1-txttitulofamiliar {\n  text-align: left;\n}\n\n.emi1-txttitulofamiliar {\n  font-size: 22px;\n  text-align: center;\n  color: #494949;\n  margin: 0;\n  text-align: left;\n}\n\nbody {\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtZXZlbnQtdHlwZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6InJlcXVlc3QtZXZlbnQtdHlwZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWRhbmdlci1lbWFpbCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2MxMmEyYiAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1mYW1pbHkgLmVtaTEtdHh0dGl0dWxvZmFtaWxpYXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5lbWkxLXR4dHRpdHVsb2ZhbWlsaWFyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5ib2R5IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */";

/***/ }),

/***/ 10615:
/*!************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/tracing-event-types/tracing-event-types.page.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.alert-danger-email {\n  font-size: 11px;\n  float: left;\n  width: 100%;\n  font-weight: 400 !important;\n  color: #c12a2b !important;\n}\n.content-family .emi1-txttitulofamiliar {\n  text-align: left;\n}\n.emi1-txttitulofamiliar {\n  font-size: 22px;\n  text-align: center;\n  color: #494949;\n  margin: 0;\n  text-align: left;\n}\nbody {\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNpbmctZXZlbnQtdHlwZXMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGdCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQWlDSiIsImZpbGUiOiJ0cmFjaW5nLWV2ZW50LXR5cGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbi5hbGVydC1kYW5nZXItZW1haWwge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNjMTJhMmIgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtZmFtaWx5IC5lbWkxLXR4dHRpdHVsb2ZhbWlsaWFyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZW1pMS10eHR0aXR1bG9mYW1pbGlhciB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 4157:
/*!******************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/event-types-form/event-types-form.page.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<section>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.EventInformationTitle\" | translate}}:</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-subtitle\" *ngIf=\"stepOneInformation.eventType === '1'\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.TitleTwo\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"subtitle\" *ngIf=\"stepOneInformation.eventType === '2'\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.TitleThree\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"subtitle\" *ngIf=\"stepOneInformation.eventType === '4'\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.TitleOne\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"emi1-txtfamiliar\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.FormInfo\" | translate}}</ion-label>\n    </ion-row>\n\n    <!-- Fomrulario -->\n    <!-- <form class=\"form-inline\" #searchForm=\"ngForm\" novalidate> -->\n\n    <form [formGroup]=\"formEventType\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelEventRelatedArea\" | translate}}</ion-label>\n                <ion-select formControlName=\"relatedAreas\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                    <ion-select-option *ngFor=\"let area of areasRelatedToTheEvent\" [value]=\"area.IdArea\">{{area.Nombre}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-col size=\"12\">\n                <ion-label class=\"ion-validator\" *ngIf=\"this.formEventType.controls.relatedAreas.hasError('required')\">\n                    {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.RequiredMedicalArea\" | translate}}\n                </ion-label>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelRelatedOfficial\" | translate}}</ion-label>\n                <ion-input maxlength=\"40\" formControlName=\"namesOfficials\"></ion-input>\n            </ion-item>\n            <ion-col size=\"12\">\n                <ion-label class=\"ion-validator\" *ngIf=\"this.formEventType.controls.namesOfficials.hasError('pattern')\">\n                    {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.RelatedOfficialFormateErr\" | translate}}\n                </ion-label>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">Fecha del evento</ion-label>\n                <ion-datetime></ion-datetime>\n                <!-- <ion-datepicker [startAt]=\"eventTypesClass.EventDate\" #pickerfrom></ion-datepicker> -->\n            </ion-item>\n            <ion-col size=\"12\">\n                <ion-label class=\"ion-validator\" *ngIf=\"this.formEventType.controls.eventdate.hasError('required')\">\n                    {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.DateEventRequired\" | translate}}\n                </ion-label>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <button (click)=\"viewMessagesInformationEvent('eventDate')\" color=\"primary\" aria-label=\"date\" class=\"iconInfo\">Boton</button>\n        </ion-row>\n\n        <div *ngIf=\"viewMessagesInformation && viewMessageInformationId == 'eventDate'\">\n            <ion-row class=\"ion-padding-top\">\n                <ion-col>\n                    <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.DateEventInfo\" | translate}}</ion-label>\n                </ion-col>\n            </ion-row>\n        </div>\n\n    </form>\n\n    <!-- Seccion solo colombia -->\n\n    <form class=\"form-inline\" #searchForm=\"ngForm\" novalidate>\n\n        <div *ngIf=\"country === 'co'\">\n\n            <ion-row>\n\n                <ion-col size=\"6\">\n                    <ion-item class=\"ion-item-form-input\">\n                        <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelEventDepartment\" | translate}}</ion-label>\n                        <ion-select [(ngModel)]=\"eventTypesClass.EventCodeDepartment\" name=\"eventDepartment\" class=\"form-control emi1-input\" ngControl=\"eventDepartments\" #eventDepartments=\"ngModel\" required id=\"eventDepartment\" (change)=\"onChangeEventDepartment(eventTypesClass.EventCodeDepartment)\"\n                            mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                            <ion-select-option *ngFor=\"let department of departments\" [value]=\"department.Code\">{{department.Name}}\n                            </ion-select-option>\n                        </ion-select>\n                        <ion-label class=\"ion-validator\" *ngIf=\"eventDepartments.invalid && (eventDepartments.dirty || eventDepartments.touched  )\" class=\"alert-email alert-danger-email\">\n                            {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.EventDepartmentRequired\" | translate}}\n                        </ion-label>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col size=\"6\">\n                    <ion-item class=\"ion-item-form-input\">\n                        <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelCity\" | translate}}</ion-label>\n                        <ion-select [(ngModel)]=\"eventTypesClass.EventCodeCity\" name=\"eventCodeCity\" class=\"form-control emi1-input\" ngControl=\"eventCodeCitys\" #eventCodeCitys=\"ngModel\" required id=\"eventCodeCity\" (change)=\"onChangeEventCodeCity(eventTypesClass.EventCodeCity)\"\n                            mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" [disabled]=\"!eventTypesClass.EventCodeDepartment\">\n                            <ion-select-option *ngFor=\"let city of cities\" [value]=\"city.Code\">{{city.Name}}</ion-select-option>\n                        </ion-select>\n                        <ion-label class=\"ion-validator\" *ngIf=\"eventCodeCitys.invalid && (eventCodeCitys.dirty || eventCodeCitys.touched  )\" class=\"alert-email alert-danger-email\">\n                            {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.CityRequired\" | translate}}\n                        </ion-label>\n                    </ion-item>\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n        <!-- Subida de archivos  -->\n        <!--SELECCIONÓ: Agradecimientos o Felicitaciones-->\n\n        <div *ngIf=\"stepOneInformation.eventType === '4' || stepOneInformation.eventType == 4\">\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelAdjuntDocuments\" | translate}}</ion-label>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte Agradecimientos o felicitaciones'\" [keyword]=\"'TANKS_AND_CONGRATULATIONS'\"></app-file-upload>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <button (click)=\"viewMessagesInformationEvent('TANKS_AND_CONGRATULATIONS')\" color=\"primary\" aria-label=\"date\" class=\"iconInfo2\"></button>\n            </ion-row>\n\n        </div>\n\n        <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'TANKS_AND_CONGRATULATIONS'\">\n            <ion-row class=\"ion-padding-top\">\n                <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.InfoDocument\" | translate}}</ion-label>\n            </ion-row>\n        </div>\n\n        <!--SELECCIONÓ: Quejas - Reclamos-->\n\n        <div *ngIf=\"stepOneInformation.eventType === '1' || stepOneInformation.eventType == 1\">\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelAdjuntDocuments\" | translate}}</ion-label>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte quejas o reclamos'\" [keyword]=\"'ACKNOWLEDGMENTS_AND_CLAIMS'\" [disabled]=\"disabledInputFile\"></app-file-upload>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.DocumentDetails\" | translate}}</ion-label>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <button class=\"btn btn btn-light selected-files-btn\" type=\"button\" style=\"height: 50px;\" (click)=\"previewFilesSelect()\" [disabled]=\"multipleFiles == ''\">{{buttonNameFile}}<span>{{multipleFiles.length}}/3</span></button>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.InfoThreeDocument\" | translate}}</ion-label>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <div *ngIf=\"!typeErrorFile && multipleFiles != '' && viewSelectedFiles\">\n                    <div *ngFor=\"let file of multipleFiles\" class=\"alert alert-info alert-selected-files\" role=\"alert\">\n                        <ion-label class=\"files-selected\">{{file.name}}</ion-label>\n                        <ion-label (click)=\"removeFileOfItemsSelected(file.name)\"><em class=\"fa fa-trash-o clear-file\"></em></ion-label>\n                    </div>\n                </div>\n            </ion-row>\n\n        </div>\n\n        <!--SELECCIONÓ: SOLICITUD DE REEMBOLSO-->\n\n        <div *ngIf=\"stepOneInformation.eventType === '2' || stepOneInformation.eventType == 2\">\n\n            <form [formGroup]=\"formEventType\">\n\n                <ion-row class=\"ion-padding-top\">\n                    <ion-item class=\"ion-item-form-input\">\n                        <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.ReasonForRefund\" | translate}}</ion-label>\n                        <ion-select formControlName=\"reasonsForReimbursement\" id=\"selReasonsForReimbursement\" [(ngModel)]=\"eventTypesClass.ReasonsForReimbursement\" (change)=\"onChangeReasonsForReimbursement(eventTypesClass.ReasonsForReimbursement)\" mode=\"ios\" ok-text=\"Aceptar\"\n                            cancel-text=\"Cancelar\">\n                            <ion-select-option *ngFor=\"let reasons of reasonsForReimbursement\" [value]=\"reasons.Code\">{{reasons.Name}}\n                            </ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-col sieze=\"12\">\n                        <ion-label class=\"ion-validator\" *ngIf=\"this.formEventType.controls.reasonsForReimbursement.hasError('required')\">\n                            {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.RefundRequestRequired\" | translate}}\n                        </ion-label>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row class=\"ion-padding-top\">\n                    <ion-label (click)=\"viewMessagesInformationEvent('ReasonsForReimbursement')\" class=\"input-group-addon information-file-icon\">\n                        <em class=\"fa fa-info\"></em>\n                    </ion-label>\n                </ion-row>\n\n                <div *ngIf=\"viewMessagesInformation && viewMessageInformationId == 'ReasonsForReimbursement'\" class=\"col-md-12\">\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-label>\n                            {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.RefundRequestInformation\" | translate}}\n                        </ion-label>\n                    </ion-row>\n                </div>\n\n            </form>\n\n        </div>\n\n        <!--TIPOS DE REEMBOLSO-->\n        <!--Seleccionó: Reembolso por fallecimiento del beneficiario-->\n\n        <div>\n\n            <div class=\"row\">\n\n                <!--Seleccionó: Reembolso por fallecimiento del beneficiario-->\n                <div *ngIf=\"eventTypesClass.ReasonsForReimbursement == '1'\">\n\n                    <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'BENEFICIARYS_DEATH'\">\n                        <ion-row>\n                            <ion-label>\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.ResponsiblePaymentInfo\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                    <ion-row>\n                        <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelBeneficiarysDeath\" | translate}}</ion-label>\n                    </ion-row>\n\n                    <ion-row>\n                        <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte acta de fallecimiento'\" [keyword]=\"'BENEFICIARYS_DEATH'\"></app-file-upload>\n                        <span (click)=\"viewMessagesInformationEvent('BENEFICIARYS_DEATH')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                    </ion-row>\n\n                    <div *ngIf=\"eventTypesClass.SendBeneficiaryDeathCertificate == ''\">\n                        <ion-row>\n                            <ion-input [(ngModel)]=\"eventTypesClass.SendBeneficiaryDeathCertificate\" #validateFileBeneficiarysDeaths=\"ngModel\" id=\"validateFileBeneficiarysDeath\" name=\"validateFileBeneficiarysDeath\" type=\"text\" required hidden=\"true\" ngControl=\"validateFileBeneficiarysDeaths\"></ion-input>\n                        </ion-row>\n                    </div>\n\n                    <div *ngIf=\"eventTypesClass.SendBeneficiaryDeathCertificate == ''\" class=\"alert-email alert-danger-email alert-file-required\">\n                        <ion-row>\n                            <ion-label>\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                    <!--Campo Cuenta: Cuenta bancaría y no bancaría-->\n                    <div *ngIf=\"eventTypesClass.BankAccountUser === true\">\n                        <ion-row>\n                            <ion-label class=\"alert alert-info\" role=\"alert\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.BankAccountInfo\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                    <!--File cuenta NO bancaría-->\n                    <div *ngIf=\"eventTypesClass.BankAccountUser === false\">\n\n                        <ion-row>\n                            <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelAdjuntBackAccount\" | translate}}</ion-label>\n                        </ion-row>\n\n                        <ion-row>\n                            <app-file-upload (fileUploaded)=\" inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte cuenta bancaría'\" [keyword]=\"'BANK_ACCOUNT'\">\n                            </app-file-upload>\n                            <span (click)=\"viewMessagesInformationEvent('BANK_ACCOUNT')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                        </ion-row>\n\n                        <ion-row>\n                            <ion-input class=\"form-control\" [(ngModel)]=\"eventTypesClass.SendFileBankAccount\" #validateFilesBankAccounts=\"ngModel\" ngControl=\"validateFilesBankAccounts\" id=\"validateFilesBankAccount\" name=\"validateFilesBankAccount\" type=\"hidden\" required hidden=\"true\"></ion-input>\n                        </ion-row>\n\n                        <div *ngIf=\"eventTypesClass.SendFileBankAccount == ''\">\n                            <ion-row>\n                                <ion-label>\n                                    {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                                </ion-label>\n                            </ion-row>\n                        </div>\n\n                    </div>\n\n                    <div *ngIf=\"eventTypesClass.BankAccountUser === false && viewMessagesInformation && viewMessageInformationId == 'BANK_ACCOUNT'\" class=\"col-md-12\">\n                        <!--Texto info cuenta no bancaría-->\n                        <ion-row>\n                            <ion-label class=\"alert alert-info\" role=\"alert\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.NonBankAccountInfo\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                </div>\n\n                <!--Seleccionó: Reembolso por fallecimiento del responsable de pago-->\n                <div *ngIf=\"eventTypesClass.ReasonsForReimbursement == '2'\">\n\n                    <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'TITULAR_DEATH'\">\n                        <ion-row>\n                            <ion-label class=\"alert alert-info\" role=\"alert\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.ResponsiblePaymentDeathInfo\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                    <ion-row>\n                        <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelTitularDeath\" | translate}}</ion-label>\n                    </ion-row>\n\n                    <ion-row>\n                        <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte acta de fallecimiento'\" [keyword]=\"'TITULAR_DEATH'\">\n                        </app-file-upload>\n                        <span (click)=\"viewMessagesInformationEvent('TITULAR_DEATH')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                    </ion-row>\n\n                    <div *ngIf=\"eventTypesClass.SendFileTitularDeathCertificate == ''\">\n                        <ion-row>\n                            <ion-input [(ngModel)]=\"eventTypesClass.SendFileTitularDeathCertificate\" #validateFileTitularDeaths=\"ngModel\" id=\"validateFileTitularDeath\" name=\"validateFileTitularDeath\" type=\"text\" required hidden=\"true\" ngControl=\"validateFileTitularDeaths\"></ion-input>\n                        </ion-row>\n                    </div>\n\n                    <div>\n                        <ion-row>\n                            <ion-label *ngIf=\"eventTypesClass.SendFileTitularDeathCertificate == ''\" class=\"alert-email alert-danger-email alert-file-required\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                    <!--Selecciona si es cónyugue o hijo-->\n                    <div *ngIf=\"country === 'co'\">\n\n                        <ion-row>\n                            <ion-item>\n                                <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelApplicant\" | translate}}\n                                </ion-label>\n                                <ion-select [(ngModel)]=\"applicant\" name=\"applicant\" class=\"form-control emi1-input\" ngControl=\"applicants\" #applicants=\"ngModel\" required id=\"applicant\" (change)=\"onChangeApplicant(applicant)\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                                    <ion-select-option value=\"01\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.ApplicantSpouse\" | translate}}</ion-select-option>\n                                    <ion-select-option value=\"02\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.ApplicantSon\" | translate}}</ion-select-option>\n                                </ion-select>\n                            </ion-item>\n                            <ion-col>\n                                <div *ngIf=\"applicants.invalid && (applicants.dirty || applicants.touched  )\" class=\"alert-email alert-danger-email\">\n                                    <!-- <div *ngIf=\"applicants.errors.required\">  -->\n                                    {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.ApplicantRequired\" | translate}}\n                                    <!--    </div> -->\n                                </div>\n                            </ion-col>\n                        </ion-row>\n\n                        <!--Seleccionó conyuge-->\n                        <div *ngIf=\"applicant == '01'\">\n\n                            <ion-row>\n                                <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelApplicantAdjunt\" | translate}}</ion-label>\n                            </ion-row>\n\n                            <ion-row>\n                                <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte registro civil de matrimonio'\" [keyword]=\"'CERTIFICATE_SPOUSE'\">\n                                </app-file-upload>\n                                <span (click)=\"viewMessagesInformationEvent('CERTIFICATE_SPOUSE')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                            </ion-row>\n\n                            <div *ngIf=\"eventTypesClass.SendFilesCivilRegistrationMarriage == ''\">\n                                <ion-row>\n                                    <ion-input [(ngModel)]=\"eventTypesClass.SendFilesCivilRegistrationMarriage\" #SendFilesCivilRegistrationMarriages=\"ngModel\" id=\"SendFilesCivilRegistrationMarriage\" name=\"SendFilesCivilRegistrationMarriage\" type=\"text\" required hidden=\"true\" ngControl=\"SendFilesCivilRegistrationMarriages\"></ion-input>\n                                </ion-row>\n                            </div>\n\n                            <div *ngIf=\"eventTypesClass.SendFilesCivilRegistrationMarriage == ''\" class=\"alert-email alert-danger-email alert-file-required\">\n                                <ion-row>\n                                    <ion-label>\n                                        {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                                    </ion-label>\n                                </ion-row>\n                            </div>\n\n                            <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'CERTIFICATE_SPOUSE'\">\n                                <ion-row>\n                                    <ion-label>\n                                        {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.InfoExpeditionDate\" | translate}}\n                                    </ion-label>\n                                </ion-row>\n                            </div>\n\n                            <!--Campo Cuenta: Cuenta bancaría y no bancaría-->\n                            <div *ngIf=\"eventTypesClass.BankAccountUser === true\">\n                                <ion-row>\n                                    <ion-label>\n                                        {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.BankAccountInfo\" | translate}}\n                                    </ion-label>\n                                </ion-row>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <!--File cuenta NO bancaría-->\n                    <div *ngIf=\"eventTypesClass.BankAccountUser === false\" class=\"col-md-12\">\n\n                        <ion-row>\n                            <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelBankAccountTwo\" | translate}}</ionlabel>\n                        </ion-row>\n\n                        <ion-row>\n                            <app-file-upload (fileUploaded)=\" inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte cuenta bancaría'\" [keyword]=\"'BANK_ACCOUNT_CERTIFICATE'\"></app-file-upload>\n                            <span (click)=\"viewMessagesInformationEvent('BANK_ACCOUNT_CERTIFICATE')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                        </ion-row>\n\n                        <ion-row>\n                            <ion-input class=\"form-control\" [(ngModel)]=\"eventTypesClass.SendFileBankAccountCertificate\" #validateFilesBankAccounts=\"ngModel\" ngControl=\"validateFilesBankAccounts\" id=\"validateFilesBankAccount\" name=\"validateFilesBankAccount\" type=\"hidden\" required\n                                hidden=\"true\"></ion-input>\n                        </ion-row>\n\n                        <div *ngIf=\"eventTypesClass.SendFileBankAccountCertificate == ''\">\n                            <ion-row>\n                                <ion-label>\n                                    {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                                </ion-label>\n                            </ion-row>\n                        </div>\n\n                    </div>\n\n                    <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'BANK_ACCOUNT_CERTIFICATE'\">\n                        <ion-row>\n                            <ion-label class=\"alert alert-info\" role=\"alert\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.InfoBankAccountTwo\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                </div>\n\n                <!--Seleccionó Hijo-->\n                <div *ngIf=\"applicant == '02'\">\n\n                    <ion-row>\n                        <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelBirthCertificateSon\" | translate}}</ion-label>\n                    </ion-row>\n\n                    <ion-row>\n                        <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte registro civil de nacimiento'\" [keyword]=\"'CERTIFICATE_BIRTH_SON'\"></app-file-upload>\n                        <span (click)=\"viewMessagesInformationEvent('CERTIFICATE_BIRTH_SON')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                    </ion-row>\n\n                    <div *ngIf=\"eventTypesClass.SendFileBirthCertificateSon == ''\">\n                        <ion-row>\n                            <ion-input [(ngModel)]=\"eventTypesClass.SendFileBirthCertificateSon\" #SendFilesCivilRegistrationMarriages=\"ngModel\" id=\"SendFilesCivilRegistrationMarriage\" name=\"SendFilesCivilRegistrationMarriage\" type=\"text\" required hidden=\"true\" ngControl=\"SendFilesCivilRegistrationMarriages\"></ion-input>\n                        </ion-row>\n                    </div>>\n\n                    <div *ngIf=\"eventTypesClass.SendFileBirthCertificateSon == ''\" class=\"alert-email alert-danger-email alert-file-required\">\n                        <ion-row>\n                            <ion-label>\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                    <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'CERTIFICATE_BIRTH_SON'\">\n                        <ion-row>\n                            <ion-label class=\"alert alert-info\" role=\"alert\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.InfoExpeditionDate\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                    <ion-row>\n                        <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelSpouseDeath\" | translate}}</ion-label>\n                    </ion-row>\n\n                    <ion-row>\n                        <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte acta de fallecimiento'\" [keyword]=\"'SPOUSE_DEATH'\"></app-file-upload>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelExtraJudgmentStatement\" | translate}}</ion-label>\n                    </ion-row>\n\n                    <ion-row>\n                        <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte la declaración extra juicio'\" [keyword]=\"'EXTRA_JUDGMENT_STATEMENT'\"></app-file-upload>\n                    </ion-row>\n\n                    <ion-row>\n                        <span (click)=\"viewMessagesInformationEvent('EXTRA_JUDGMENT_STATEMENT')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                    </ion-row>\n\n                    <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'EXTRA_JUDGMENT_STATEMENT'\">\n                        <ion-row>\n                            <ion-label class=\"alert alert-info\" role=\"alert\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.InfoExtraJudgmentStatement\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                    <!--Campo Cuenta: Cuenta bancaría y no bancaría-->\n\n                    <div *ngIf=\"eventTypesClass.BankAccountUser === true\">\n                        <ion-row>\n                            <ion-label class=\"alert alert-info\" role=\"alert\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.BankAccountInfo\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                    <!--File cuenta NO bancaría-->\n\n                    <div *ngIf=\"eventTypesClass.BankAccountUser === false\" class=\"col-md-12\">\n                        <!--File cuenta NO bancaría-->\n\n                        <ion-row>\n                            <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelBankAccountTwo\" | translate}}</ion-label>\n                        </ion-row>\n\n                        <ion-row>\n                            <app-file-upload (fileUploaded)=\" inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte cuenta bancaría'\" [keyword]=\"'BANK_ACCOUNT_CERTIFICATE'\"></app-file-upload>\n                        </ion-row>\n\n                        <ion-row>\n                            <span (click)=\"viewMessagesInformationEvent('BANK_ACCOUNT_CERTIFICATE')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                        </ion-row>\n\n                        <ion-row>\n                            <ion-input class=\"form-control\" [(ngModel)]=\"eventTypesClass.SendFileBankAccountCertificate\" #validateFilesBankAccounts=\"ngModel\" ngControl=\"validateFilesBankAccounts\" id=\"validateFilesBankAccount\" name=\"validateFilesBankAccount\" type=\"hidden\" required\n                                hidden=\"true\"></ion-input>\n                        </ion-row>\n\n                        <div *ngIf=\"eventTypesClass.SendFileBankAccountCertificate == ''\" class=\"alert-email alert-danger-email alert-file-required\">\n                            <ion-row>\n                                <ion-label>\n                                    {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                                </ion-label>\n                            </ion-row>\n                        </div>\n\n                    </div>\n\n                    <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'BANK_ACCOUNT_CERTIFICATE'\">\n                        <ion-row>\n                            <ion-label class=\"alert alert-info\" role=\"alert\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.InfoBankAccountTwo\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div *ngIf=\"country === 'uy'\">\n\n                <ion-row>\n                    <ion-label class=\"emi1-exampleInputEmail1\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelApplicantAdjunt\" | translate}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte acta de fallecimiento'\" [keyword]=\"'CERTIFICATE_SPOUSE'\">\n                    </app-file-upload>\n                </ion-row>\n\n                <div *ngIf=\"eventTypesClass.SendFilesCivilRegistrationMarriage == ''\">\n                    <ion-row>\n                        <ion-input [(ngModel)]=\"eventTypesClass.SendFilesCivilRegistrationMarriage\" #SendFilesCivilRegistrationMarriages=\"ngModel\" id=\"SendFilesCivilRegistrationMarriage\" name=\"SendFilesCivilRegistrationMarriage\" type=\"text\" required hidden=\"true\" ngControl=\"SendFilesCivilRegistrationMarriages\"></ion-input>\n                    </ion-row>\n                </div>\n\n                <div *ngIf=\"eventTypesClass.SendFilesCivilRegistrationMarriage == ''\" class=\"alert-email alert-danger-email alert-file-required\">\n                    <ion-row>\n                        <ion-label>\n                            {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                        </ion-label>\n                    </ion-row>\n                </div>\n\n                <!--Campo Cuenta: Cuenta bancaría y no bancaría-->\n\n                <div *ngIf=\"eventTypesClass.BankAccountUser === true\" class=\"col-md-12\">\n                    <ion-row>\n                        <ion-label class=\"alert alert-info\" role=\"alert\">\n                            {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.BankAccountInfo\" | translate}}\n                        </ion-label>\n                    </ion-row>\n                </div>\n\n                <!--File cuenta NO bancaría-->\n\n                <div *ngIf=\"eventTypesClass.BankAccountUser === false\" class=\"col-md-12\">\n\n                    <ion-row>\n                        <ion-label class=\"emi1-exampleInputEmail1\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelBankAccountTwo\" | translate}}</ion-label>\n                    </ion-row>\n\n                    <ion-row>\n                        <app-file-upload (fileUploaded)=\" inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte cuenta bancaría'\" [keyword]=\"'BANK_ACCOUNT_CERTIFICATE'\"></app-file-upload>\n                    </ion-row>\n\n                    <ion-row>\n                        <span (click)=\"viewMessagesInformationEvent('BANK_ACCOUNT_CERTIFICATE')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-input class=\"form-control\" [(ngModel)]=\"eventTypesClass.SendFileBankAccountCertificate\" #validateFilesBankAccounts=\"ngModel\" ngControl=\"validateFilesBankAccounts\" id=\"validateFilesBankAccount\" name=\"validateFilesBankAccount\" type=\"hidden\" required\n                            hidden=\"true\"></ion-input>\n                    </ion-row>\n\n                    <div *ngIf=\"eventTypesClass.SendFileBankAccountCertificate == ''\" class=\"alert-email alert-danger-email alert-file-required\">\n                        <ion-row>\n                            <ion-label>\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                            </ion-label>\n                        </ion-row>\n                    </div>\n\n                </div>\n\n                <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'BANK_ACCOUNT_CERTIFICATE'\">\n                    <ion-row>\n                        <ion-label class=\"alert alert-info\" role=\"alert\">\n                            {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.InfoBankAccountTwo\" | translate}}\n                        </ion-label>\n                    </ion-row>\n                </div>\n\n            </div>\n\n        </div>\n\n        <!--Seleccionó: Reembolso por facturación y cobranza-->\n        <div *ngIf=\"eventTypesClass.ReasonsForReimbursement == '3'\">\n\n            <div *ngIf=\"!typeErrorFile && viewMessagesInformation && viewMessageInformationId == 'BANK_STATEMENT_OR_REMOVABLE_PAYROLL'\">\n                <ion-row>\n                    <ion-label class=\"alert alert-info\" role=\"alert\">\n                        {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.InfoBankStatementOrRemovablePayroll\" | translate}}\n                    </ion-label>\n                </ion-row>\n            </div>\n\n            <ion-row>\n                <label class=\"emi1-exampleInputEmail1\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelBankStatementOrRemovablePayroll\" | translate}}</label>\n            </ion-row>\n\n            <ion-row>\n                <app-file-upload (fileUploaded)=\"inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte extracto bancario'\" [keyword]=\"'BANK_STATEMENT_OR_REMOVABLE_PAYROLL'\"></app-file-upload>\n            </ion-row>\n\n            <ion-row>\n                <span (click)=\"viewMessagesInformationEvent('BANK_STATEMENT_OR_REMOVABLE_PAYROLL')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n            </ion-row>\n\n            <div *ngIf=\"eventTypesClass.SendFileBankStatementOrRemovablePayroll == ''\">\n                <ion-row>\n                    <ion-input [(ngModel)]=\"eventTypesClass.SendFileBankStatementOrRemovablePayroll\" #BankStatementOrRemovablePayrolls=\"ngModel\" id=\"BankStatementOrRemovablePayroll\" name=\"BankStatementOrRemovablePayroll\" type=\"text\" required hidden=\"true\" ngControl=\"BankStatementOrRemovablePayrolls\"></ion-input>\n                </ion-row>\n            </div>\n\n            <div *ngIf=\"eventTypesClass.SendFileBankStatementOrRemovablePayroll == ''\" class=\"alert-email alert-danger-email alert-file-required\">\n                <ion-row>\n                    <iopn-label>\n                        {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                    </iopn-label>\n                </ion-row>\n            </div>\n\n            <div *ngIf=\"eventTypesClass.BankAccountUser === true\" class=\"col-md-12\">\n                <ion-row>\n                    <ion-label class=\"alert alert-info\" role=\"alert\">\n                        {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.BankAccountInfo\" | translate}}\n                    </ion-label>\n                </ion-row>\n            </div>\n\n            <div *ngIf=\"eventTypesClass.BankAccountUser === false\" class=\"col-md-12\">\n                <!--File cuenta NO bancaría-->\n\n                <ion-row>\n                    <ion-label class=\"emi1-exampleInputEmail1\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelAdjuntBackAccount\" | translate}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <app-file-upload (fileUploaded)=\" inputFileEvent($event)\" [visible]=\"true\" [allowedExtensions]=\"allowedExtensionsFileUpload\" [maxSizeMBAllowed]=\"fileSizeAllowMB\" [pleaceholder]=\"'Adjunte cuenta bancaría'\" [keyword]=\"'BANK_ACCOUNT'\"></app-file-upload>\n                </ion-row>\n\n                <ion-row>\n                    <span (click)=\"viewMessagesInformationEvent('BANK_ACCOUNT')\" class=\"input-group-addon information-file-icon\"><em class=\"fa fa-info\"></em></span>\n                </ion-row>\n\n                <div>\n                    <ion-row>\n                        <ion-input class=\"form-control\" [(ngModel)]=\"eventTypesClass.SendFileBankAccount\" #validateFilesBankAccounts=\"ngModel\" ngControl=\"validateFilesBankAccounts\" id=\"validateFilesBankAccount\" name=\"validateFilesBankAccount\" type=\"hidden\" required hidden=\"true\"></ion-input>\n                    </ion-row>\n                </div>\n\n                <div *ngIf=\"eventTypesClass.SendFileBankAccount == ''\" class=\"alert-email alert-danger-email alert-file-required\">\n                    <ion-row>\n                        <ion-label>\n                            {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AdjuntRequired\" | translate}}\n                        </ion-label>\n                    </ion-row>\n                </div>\n\n            </div>\n\n            <div *ngIf=\"eventTypesClass.BankAccountUser === false && viewMessagesInformation && viewMessageInformationId == 'BANK_ACCOUNT'\" class=\"col-md-12\">\n                <!--Texto info cuenta no bancaría-->\n                <ion-row>\n                    <ion-label class=\"alert alert-info\" role=\"alert\">\n                        {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.NonBankAccountInfo\" | translate}}\n                    </ion-label>\n                </ion-row>\n            </div>\n\n        </div>\n\n        <!-- </div>\n\n        </div> -->\n\n    </form>\n\n    <!-- Comentario -->\n\n    <br>\n\n    <form [formGroup]=\"formEventType\">\n\n        <ion-row>\n            <ion-item>\n                <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.LabelComment\" | translate}}</ion-label>\n                <textarea formControlName=\"eventComments\" [(ngModel)]=\"eventTypesClass.eventComments\" name=\"eventComments\"></textarea>\n            </ion-item>\n            <ion-col size=\"12\">\n                <ion-label class=\"ion-validator\" *ngIf=\"this.formEventType.controls.eventComments.hasError('required')\">\n                    {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.CommentRequired\" | translate}}\n                </ion-label>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label *ngIf=\"eventTypesClass.EventComment.length>0 && eventTypesClass.EventComment.length<=eventCommentsMinChar  \">\n                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.CommonValidatedMin\" | translate}}\n            </ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"container-characters-counter\" *ngIf=\"eventTypesClass.EventComment.length==0\">\n                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.MaxLengthComment\" | translate}} {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AccountCharactersInfo\" | translate}}\n            </ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"container-characters-counter\" *ngIf=\"eventTypesClass.EventComment.length!=0\">\n                {{eventCommentsMaxChar - eventTypesClass.EventComment.length}} {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AccountCharactersInfo\" | translate}}\n            </ion-label>\n        </ion-row>\n\n    </form>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col>\n            <ion-checkbox id=\"checkbox3\" type=\"checkbox\" name=\"AcceptTermsAndConditions\" [(ngModel)]=\"eventTypesClass.AcceptTermsAndConditions\" required (click)=\"eventAcceptTermsAndConditions()\">\n                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE-FORM.AcceptTemrsAndConditions\" | translate}}\n            </ion-checkbox>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n            <app-button [configuration]=\"configurationButtonSend\" [disabled]=\"formEventType.invalid  || formEventType.status == 'DISABLED' || !eventTypesClass.AcceptTermsAndConditions || eventTypesClass.EventComment.length<=eventCommentsMinChar\" (click)=\"sendDataEventType()\"></app-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"emi1-txttitulofamiliar\">Información del usuario</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"emi1-txtfamiliar\">Información del usuario para el cual se solicita crear el evento.</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{stepOneInformation.checkCustomerIsActiveInfo.FullName}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{stepOneInformation.checkCustomerIsActiveInfo.DocumentName}}: {{stepOneInformation.checkCustomerIsActiveInfo.Document}}</ion-label>\n    </ion-row>\n\n</section>";

/***/ }),

/***/ 83490:
/*!************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/options-event-types/options-event-types.page.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Agradecimientos y reembolsos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n        <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n            <ion-col size=\"6\">\n                <div class=\"selector-item\" [class.selected]=\"currentSection == 'change-option'\" (click)=\"setSection('change-option')\">\n                    <ion-label class=\"title-secondary\">Solicitar tipos de evento</ion-label>\n                </div>\n            </ion-col>\n            <ion-col size=\"6\">\n                <div class=\"selector-item d-flex ion-justify-content-center\" [class.selected]=\"currentSection == 'change-course'\" (click)=\"setSection('change-course')\">\n                    <ion-label class=\"title-secondary\">Reembolsos en curso</ion-label>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <div *ngIf=\"!tracingEventTypesItialization\">\n        <app-request-event-types></app-request-event-types>\n    </div>\n\n    <div *ngIf=\"tracingEventTypesItialization\">\n        <app-tracing-event-types [tracingEventTypesItialization]=\"tracingEventTypesItialization\"></app-tracing-event-types>\n    </div>\n\n</ion-content>";

/***/ }),

/***/ 24584:
/*!************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/request-event-types/request-event-types.page.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<section *ngIf=\"continueFormProcess === false\">\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{'PORTAL.CUSTOMER-SERVICE.GRATITUDE.Title' | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-subtitle\" [innerHTML]=\"subtitle\"></ion-label>\n    </ion-row>\n\n    <form [formGroup]=\"formRequest\">\n        <ion-row class=\"ion-padding-top\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.LabelEventType\" | translate}}</ion-label>\n                <ion-select formControlName=\"eventType\" [(ngModel)]=\"eventTypesClass.EventType\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                    <ion-select-option *ngFor=\"let eventType of eventTypesList\" [value]=\"eventType.IdTipo\">\n                        {{eventType.Nombre}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-col size=\"12\">\n                <ion-label class=\"ion-validator\" *ngIf=\"this.formRequest.controls.eventType.hasError('required')\">\n                    {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.EventTypeRequired\" | translate}}\n                </ion-label>\n            </ion-col>\n        </ion-row>\n    </form>\n\n    <div *ngIf=\"eventTypesClass.EventType\">\n\n        <form [formGroup]=\"formRequest\">\n            <ion-row class=\"ion-padding-top\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.EventQuestion\" | translate}}</ion-label>\n                    <ion-select formControlName=\"subjectOfTheEvent\" [(ngModel)]=\"eventTypesClass.SubjectOfTheEvent\" (selectionChange)=\"onChangeSubjectOfTheEvent(eventTypesClass.SubjectOfTheEvent)\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option value=\"01\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.ItHappenedToMe\" | translate}}</ion-select-option>\n                        <ion-select-option value=\"02\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.HappenedToAThird\" | translate}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <ion-label class=\"ion-validator\" *ngIf=\"this.formRequest.controls.subjectOfTheEvent.hasError('required')\">\n                        {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.SujectRequired\" | translate}}\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n        </form>\n\n    </div>\n\n    <div *ngIf=\"eventTypesClass.EventType\">\n\n        <form class=\"form-inline emi1-form\" #searchForm=\"ngForm\" novalidate>\n\n            <div *ngIf=\"enterDataOfTheThird === true\" class=\"row\">\n\n                <ion-row class=\"ion-padding-top\">\n                    <ion-label>{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.EnterDataOfThird\" | translate}}</ion-label>\n                </ion-row>\n\n                <form [formGroup]=\"formRequest\">\n\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-item class=\"ion-item-form-input\">\n                            <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.DocumentType\" | translate}}</ion-label>\n                            <ion-select formControlName=\"thirdDocumentType\" [(ngModel)]=\"eventTypesClass.ThirdDocumentType\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                                <ion-select-option *ngFor=\"let type of documentTypes\" [value]=\"type.Code\">\n                                    {{type.Name}}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-col size=\"12\">\n                            <ion-label class=\"ion-validator\" *ngIf=\"this.formRequest.controls.thirdDocumentType.hasError('required')\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.DocumentTypeRequired\" | translate}}\n                            </ion-label>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"ion-padding-top\">\n                        <ion-item class=\"ion-item-form-input\">\n                            <ion-label position=\"floating\">{{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.Document\" | translate}}</ion-label>\n                            <ion-input formControlName=\"thirdDocument\" [(ngModel)]=\"eventTypesClass.ThirdDocument\"></ion-input>\n                        </ion-item>\n                        <ion-col size=\"12\">\n                            <ion-label class=\"ion-validator\" *ngIf=\"this.formRequest.controls.thirdDocument.hasError('required')\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.DocumentRequired\" | translate}}\n                            </ion-label>\n                            <ion-label class=\"ion-validator\" *ngIf=\"this.formRequest.controls.thirdDocument.hasError('pattern')\">\n                                {{\"PORTAL.CUSTOMER-SERVICE.GRATITUDE.DocumentNumberNumeric\" | translate}}\n                            </ion-label>\n                        </ion-col>\n                    </ion-row>\n\n                </form>\n\n                <ion-row class=\"ion-padding-top\">\n                    <ion-col>\n                        <app-button [configuration]=\"configurationButtonSearch\" [disabled]=\"formRequest.invalid  || formRequest.status == 'DISABLED'\" (click)=\"searchThirdPartyStatus()\"></app-button>\n                    </ion-col>\n                </ion-row>\n\n            </div>\n\n        </form>\n\n    </div>\n\n</section>\n\n<section *ngIf=\"continueFormProcess === true\">\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"backSearchSectionConfirm()\"><em\n            class=\"fa fa-angle-down\"></em></button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <app-event-types-form [stepOneInformation]=\"stepOneInformation\" (continueFormProcess)=\"continueFormProcessInfo($event)\"></app-event-types-form>\n    </ion-row>\n\n</section>\n\n<app-loader *ngIf=\"isLoading\"></app-loader>";

/***/ }),

/***/ 71759:
/*!************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/tracing-event-types/tracing-event-types.page.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>tracing-event-types</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"emi1-txttitulofamiliar\">{{\"PORTAL.TRACING-EVENT-TYPES.Title\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"emi1-txtfamiliar\">{{\"PORTAL.TRACING-EVENT-TYPES.TitleInformation\" | translate}}</ion-label>\n    </ion-row>\n\n    <div *ngFor=\"let obj of getEventStatus\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>{{\"PORTAL.TRACING-EVENT-TYPES.VoucherNumber\" | translate}} {{obj.VoucherNumber}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label><span class=\"status-service\">{{obj.EventStatusName}}</span></ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col>\n                <ion-label>{{obj.PersonOccurredEvent}}</ion-label>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <p class=\"card-subtitle\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{\"PORTAL.TRACING-EVENT-TYPES.ReportDate\" | translate}}\n            </p>\n            <p class=\"card-text\"><i aria-hidden=\"true\"></i>{{obj.ReportDate}}</p>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <p class=\"card-subtitle\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                <span class=\"padding-small-icon\">{{\"PORTAL.TRACING-EVENT-TYPES.EventDate\" | translate}}</span>\n            </p>\n            <p class=\"card-text\"><i aria-hidden=\"true\"></i>{{obj.EventDate}}</p>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <p class=\"card-subtitle\">\n                {{\"PORTAL.TRACING-EVENT-TYPES.EventType\" | translate}}</p>\n            <p class=\"card-text\"><i aria-hidden=\"true\"></i>{{obj.EventTypeName}}</p>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <p class=\"card-subtitle\">\n                {{\"PORTAL.TRACING-EVENT-TYPES.SelectedArea\" | translate}}</p>\n            <p class=\"card-text\"><i aria-hidden=\"true\"></i>{{obj.EventRelatedAreaName}}</p>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <p class=\"card-subtitle\">\n                {{\"PORTAL.TRACING-EVENT-TYPES.Commentary\" | translate}}</p>\n            <p class=\"card-text\"><i aria-hidden=\"true\"></i>{{obj.Commentary}}</p>\n        </ion-row>\n\n    </div>\n\n    <ion-row class=\"ion-padding-top\">\n        <section class=\"col-md-12 service-history__pagination\" *ngIf=\"showPagination\">\n            <!-- <ng-container>\n                    <pagination-controls previousLabel=\"\" nextLabel=\"\" [autoHide]=\"true\" (pageChange)=\"pageChanged($event)\">\n                    </pagination-controls>\n                </ng-container> -->\n            </section>\n    </ion-row>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_customer-service_components_options-event-types_options-event-types_module_ts.js.map