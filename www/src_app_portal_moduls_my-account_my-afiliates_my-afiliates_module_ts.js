"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_my-account_my-afiliates_my-afiliates_module_ts"],{

/***/ 46639:
/*!******************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/components/afiliate-card/afiliate-card.page.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AfiliateCardPage": () => (/* binding */ AfiliateCardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _afiliate_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./afiliate-card.page.html?ngResource */ 26685);
/* harmony import */ var _afiliate_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./afiliate-card.page.scss?ngResource */ 88915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);





let AfiliateCardPage = class AfiliateCardPage {
    constructor() {
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute;
    }
    ngOnInit() {
    }
    //Get age from date of birth in a format "yyyymmdd"
    getAge(birthday) {
        var today = new Date();
        var birthDate = new Date(birthday.substring(0, 4), birthday.substring(4, 6) - 1, birthday.substring(6, 8));
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
};
AfiliateCardPage.ctorParameters = () => [];
AfiliateCardPage.propDecorators = {
    afiliate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AfiliateCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-afiliate-card',
        template: _afiliate_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_afiliate_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AfiliateCardPage);



/***/ }),

/***/ 54961:
/*!**************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/components/new-afiliate-card/new-afiliate-card.page.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAfiliateCardPage": () => (/* binding */ NewAfiliateCardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_afiliate_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-afiliate-card.page.html?ngResource */ 60961);
/* harmony import */ var _new_afiliate_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-afiliate-card.page.scss?ngResource */ 67738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NewAfiliateCardPage = class NewAfiliateCardPage {
    constructor() { }
    ngOnInit() {
    }
};
NewAfiliateCardPage.ctorParameters = () => [];
NewAfiliateCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-new-afiliate-card',
        template: _new_afiliate_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_afiliate_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewAfiliateCardPage);



/***/ }),

/***/ 50160:
/*!**************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/components/new-afiliate-form/new-afiliate-form.page.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAfiliateFormPage": () => (/* binding */ NewAfiliateFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_afiliate_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-afiliate-form.page.html?ngResource */ 41857);
/* harmony import */ var _new_afiliate_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-afiliate-form.page.scss?ngResource */ 26721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_fetch_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/fetch-info.service */ 57876);
/* harmony import */ var src_app_public_models_requests_document_validation_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/public/models/requests/document-validation-request */ 28660);
/* harmony import */ var src_app_shared_services_common_midd_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/common-midd.service */ 50133);
/* harmony import */ var _services_new_afiliate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/new-afiliate.service */ 10515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _models_afiliateModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/afiliateModel */ 7426);


















let NewAfiliateFormPage = class NewAfiliateFormPage {
    constructor(fb, commonMidService, newAfiliateService, router, modalService, fetchInfoService, urlDataService, translate) {
        this.fb = fb;
        this.commonMidService = commonMidService;
        this.newAfiliateService = newAfiliateService;
        this.router = router;
        this.modalService = modalService;
        this.fetchInfoService = fetchInfoService;
        this.urlDataService = urlDataService;
        this.translate = translate;
        this.searchAfiliateButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.sendNewAfiliateButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.cancelButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.enableNewAfiliateForm = false;
        this.urlDataService.setShowHeaderPortal(true);
        this.urlDataService.setHeaderNavPortal(['Mi cuenta', 'Mis afiliados', 'Nuevo afiliado']);
        //Configuration Buttons [Buscar]
        this.searchAfiliateButton.text = "Buscar";
        this.searchAfiliateButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Primary;
        //Configuration Buttons [Enviar]
        this.sendNewAfiliateButton.text = "Guardar";
        this.sendNewAfiliateButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Primary;
        //Configuration Buttons [Cancelar]
        this.cancelButton.text = "Cancelar";
        this.cancelButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Tertiary;
        //Form Search Person Data
        this.idReference = localStorage.getItem("registerId");
        //Configuracion Form
        this.formSearchPersonData = this.fb.group({
            documentType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            documentNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        });
        this.formNewAfiliateData = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            secondName: ['', []],
            firstLastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            secondLastname: ['', []],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email]],
            cellPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__.ValidatorStartCellPhoneNumber]],
        });
        this.formSearchPersonData.controls['documentNumber'].disable();
    }
    ngOnInit() {
        this.getDocumentsTypes();
    }
    searchAfiliate() {
        const payload = {
            'DocumentType': this.formSearchPersonData.controls.documentType.value,
            'Document': this.formSearchPersonData.controls.documentNumber.value
        };
        this.fetchInfoService.searchFamilyMember(payload).subscribe((resp) => {
            this.enableNewAfiliateForm = true;
            if (resp.StatusCode == 0) {
                this.formNewAfiliateData.controls.firstName.setValue(resp.Member.Names.split(' ')[0]);
                this.formNewAfiliateData.controls.secondName.setValue(resp.Member.Names.split(' ')[1] ? resp.Member.Names.split(' ')[1] : '');
                this.formNewAfiliateData.controls.firstLastname.setValue(resp.Member.Surnames.split(' ')[0]);
                this.formNewAfiliateData.controls.secondLastname.setValue(resp.Member.Surnames.split(' ')[1] ? resp.Member.Surnames.split(' ')[1] : '');
                this.formNewAfiliateData.controls.email.setValue(resp.Member.Email ? resp.Member.Email : '');
                this.formNewAfiliateData.controls.cellPhone.setValue(resp.Member.Phone);
            }
        });
    }
    getDocumentsTypes() {
        this.fetchInfoService.getAllDocumentTypes().subscribe((resp) => {
            this.documentTypes = resp;
        });
    }
    ;
    enabledInputDocument() {
        this.formSearchPersonData.controls['documentNumber'].enable();
        this.formSearchPersonData.controls.documentNumber.value != '' ? this.validateDocument() : '';
    }
    validateDocument() {
        if (this.formSearchPersonData.controls.documentNumber.value != '') {
            let request = new src_app_public_models_requests_document_validation_request__WEBPACK_IMPORTED_MODULE_6__.DocumentValidationRequest();
            request.DocumentType = this.formSearchPersonData.controls.documentType.value;
            request.Document = this.formSearchPersonData.controls.documentNumber.value;
            this.commonMidService.validateDocument(request)
                .subscribe(resp => {
                if (resp.StatusCode != 0) {
                    this.bsModalRef = this.generateInformativeModal('Hubo un error al validar el documento', 'El documento que ingresaste no existe en nuestra base de datos, por favor verifique que el documento sea correcto.', true);
                    this.formSearchPersonData.controls.documentNumber.setValue('');
                }
            });
        }
    }
    onlyNumber(event) {
        return (0,src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__.onlyNumber)(event);
    }
    postNewAfiliate() {
        const payload = new _models_afiliateModel__WEBPACK_IMPORTED_MODULE_11__["default"](this.idReference, this.formSearchPersonData.controls.documentType.value, this.formSearchPersonData.controls.documentNumber.value, this.formNewAfiliateData.controls.firstName.value.concat(this.formNewAfiliateData.controls.secondName.value ? (' ' + this.formNewAfiliateData.controls.secondName.value) : ''), this.formNewAfiliateData.controls.firstLastname.value.concat(this.formNewAfiliateData.controls.secondLastname.value ? (' ' + this.formNewAfiliateData.controls.secondLastname.value) : ''), this.formNewAfiliateData.controls.cellPhone.value, this.formNewAfiliateData.controls.email.value);
        this.newAfiliateService.uploadNewAfiliate(payload).subscribe((resp) => {
            if (resp.StatusCode == 0) {
                this.bsModalRef = this.generateInformativeModal('Listo', 'Se ha guardado el afiliado exitosamente', false);
                this.bsModalRef.content.onClose.subscribe(() => {
                    this.router.navigate(['/portal/my-account/my-afiliates/']);
                });
            }
            else {
                this.bsModalRef = this.generateInformativeModal('Ah ocurrido un error', 'Por favor, controle que los datos hayan sido cargados correctamente, si el problema persiste, contacte a nuestros servicios de servicoi al cliente.', true);
                this.formNewAfiliateData.reset();
            }
        });
    }
    cancel() {
        this.router.navigate(['/portal/my-account/my-afiliates/'], { replaceUrl: true });
    }
    generateInformativeModal(subTitle, description, isError) {
        const initialState = {
            initialState: {
                iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
                subTitle: subTitle,
                description: description,
                onlyButtonConfirm: true,
                textButton: 'Continuar',
                textButton1: '',
                textButton2: '',
                visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 'modal-error-no-services',
            backdrop: true,
            ignoreBackdropClick: true
        };
        return this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_9__.InformativeModalComponent, initialState);
    }
};
NewAfiliateFormPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: src_app_shared_services_common_midd_service__WEBPACK_IMPORTED_MODULE_7__.CommonMiddService },
    { type: _services_new_afiliate_service__WEBPACK_IMPORTED_MODULE_8__.NewAfiliateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.BsModalService },
    { type: _services_fetch_info_service__WEBPACK_IMPORTED_MODULE_5__.FetchInfoService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_10__.UrlDataService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService }
];
NewAfiliateFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-new-afiliate-form',
        template: _new_afiliate_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_afiliate_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewAfiliateFormPage);



/***/ }),

/***/ 7426:
/*!*******************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/models/afiliateModel.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AfiliateModel)
/* harmony export */ });
class AfiliateModel {
    constructor(idReference, documentType, document, names, surnames, phone, email) {
        this.IdReference = idReference;
        this.DocumentType = documentType;
        this.Document = document;
        this.Names = names;
        this.Surnames = surnames;
        this.Phone = phone;
        this.Email = email;
    }
}


/***/ }),

/***/ 37784:
/*!**********************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/models/getBeneficiaries.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBeneficiariesPayload": () => (/* binding */ getBeneficiariesPayload)
/* harmony export */ });
class getBeneficiariesPayload {
}


/***/ }),

/***/ 17054:
/*!******************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/my-afiliates.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAfiliatesModule": () => (/* binding */ MyAfiliatesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_afiliate_card_afiliate_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/afiliate-card/afiliate-card.page */ 46639);
/* harmony import */ var _my_afiliates_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-afiliates.page */ 44003);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _components_new_afiliate_form_new_afiliate_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-afiliate-form/new-afiliate-form.page */ 50160);
/* harmony import */ var _components_new_afiliate_card_new_afiliate_card_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/new-afiliate-card/new-afiliate-card.page */ 54961);
/* harmony import */ var _my_afiliates_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-afiliates.routing.module */ 79606);










let MyAfiliatesModule = class MyAfiliatesModule {
};
MyAfiliatesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _components_afiliate_card_afiliate_card_page__WEBPACK_IMPORTED_MODULE_0__.AfiliateCardPage,
            _components_new_afiliate_form_new_afiliate_form_page__WEBPACK_IMPORTED_MODULE_3__.NewAfiliateFormPage,
            _components_new_afiliate_card_new_afiliate_card_page__WEBPACK_IMPORTED_MODULE_4__.NewAfiliateCardPage,
            _my_afiliates_page__WEBPACK_IMPORTED_MODULE_1__.MyAfiliatesPage
        ],
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _my_afiliates_routing_module__WEBPACK_IMPORTED_MODULE_5__.MyAfiliatesRoutingModule
        ]
    })
], MyAfiliatesModule);



/***/ }),

/***/ 44003:
/*!****************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/my-afiliates.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAfiliatesPage": () => (/* binding */ MyAfiliatesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_afiliates_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-afiliates.page.html?ngResource */ 43424);
/* harmony import */ var _my_afiliates_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-afiliates.page.scss?ngResource */ 26421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var _models_getBeneficiaries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/getBeneficiaries */ 37784);
/* harmony import */ var _services_fetch_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/fetch-info.service */ 57876);








let MyAfiliatesPage = class MyAfiliatesPage {
    constructor(urlDataService, fetchInfoService, router) {
        this.urlDataService = urlDataService;
        this.fetchInfoService = fetchInfoService;
        this.router = router;
        this.afiliates = new Array();
        this.isLoading = true;
        this.urlDataService.setShowHeaderPortal(true);
        this.urlDataService.setHeaderNavPortal(['Mi cuenta', 'Mis afiliados']);
        let payload = new _models_getBeneficiaries__WEBPACK_IMPORTED_MODULE_3__.getBeneficiariesPayload();
        payload.Document = localStorage.getItem("document");
        payload.DocumentType = localStorage.getItem("documentType");
        this.fetchInfoService.getBeneficiaries(payload).subscribe((resp) => {
            if (resp.StatusCode == 0) {
                this.isLoading = false;
                this.afiliates = resp.Beneficiaries;
                this.groupByThree();
            }
            else {
                //manejo de error
            }
        });
    }
    groupByThree() {
        let result = [];
        let subArray = [];
        for (let i = 0; i < this.afiliates.length; i++) {
            if (((i + 1) % 3) != 0) {
                subArray.push(this.afiliates[i]);
            }
            else {
                subArray.push(this.afiliates[i]);
                result.push(subArray);
                subArray = [];
            }
        }
        if (subArray.length > 0) {
            result.push(subArray);
        }
        this.groupsOfThreeAfiliates = result;
    }
    newAfiliate() {
        this.router.navigate(['/portal/my-account/my-afiliates/new-afiliate']);
    }
    ngOnInit() {
    }
};
MyAfiliatesPage.ctorParameters = () => [
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_2__.UrlDataService },
    { type: _services_fetch_info_service__WEBPACK_IMPORTED_MODULE_4__.FetchInfoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
MyAfiliatesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-my-afiliates',
        template: _my_afiliates_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_afiliates_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyAfiliatesPage);



/***/ }),

/***/ 79606:
/*!**************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/my-afiliates.routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAfiliatesRoutingModule": () => (/* binding */ MyAfiliatesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _my_afiliates_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-afiliates.page */ 44003);
/* harmony import */ var _components_new_afiliate_form_new_afiliate_form_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/new-afiliate-form/new-afiliate-form.page */ 50160);






const routes = [
    {
        path: '',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _my_afiliates_page__WEBPACK_IMPORTED_MODULE_1__.MyAfiliatesPage
    },
    {
        path: 'new-afiliate',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _components_new_afiliate_form_new_afiliate_form_page__WEBPACK_IMPORTED_MODULE_2__.NewAfiliateFormPage
    }
];
let MyAfiliatesRoutingModule = class MyAfiliatesRoutingModule {
};
MyAfiliatesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], MyAfiliatesRoutingModule);



/***/ }),

/***/ 10515:
/*!****************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/services/new-afiliate.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAfiliateService": () => (/* binding */ NewAfiliateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let NewAfiliateService = class NewAfiliateService {
    constructor(http) {
        this.http = http;
    }
    uploadNewAfiliate(payload) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Family/AddMember`, payload);
    }
};
NewAfiliateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NewAfiliateService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NewAfiliateService);



/***/ }),

/***/ 57876:
/*!*************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/services/fetch-info.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchInfoService": () => (/* binding */ FetchInfoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);





let FetchInfoService = class FetchInfoService {
    constructor(http) {
        this.http = http;
    }
    getBeneficiaries(payload) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Affiliate/GetBeneficiaries', payload);
    }
    getAllDocumentTypes() {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}DataLists/GetDocumentTypesRegister`, null)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response.DataList));
    }
    searchFamilyMember(payload) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Family/SearchMember`, payload);
    }
};
FetchInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FetchInfoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FetchInfoService);



/***/ }),

/***/ 88915:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/components/afiliate-card/afiliate-card.page.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-item {\n  border: none !important;\n}\nion-row {\n  margin-bottom: 10px !important;\n}\nion-card-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\nion-card-subtitle {\n  font-size: 12px;\n}\nion-label {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmaWxpYXRlLWNhcmQucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0ksdUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSw4QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDakJZO0FEa0RoQjtBQTlCQTtFQUNJLGVBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0FBaUNKIiwiZmlsZSI6ImFmaWxpYXRlLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzXCI7XG5pb24tY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIE9UJywgc2Fucy1zZXJpZjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICA7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 67738:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/components/new-afiliate-card/new-afiliate-card.page.scss?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-card-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\nion-icon {\n  color: #FF1E2D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1hZmlsaWF0ZS1jYXJkLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDVFk7QUQwQ2hCO0FBOUJBO0VBQ0ksY0NiWTtBRDhDaEIiLCJmaWxlIjoibmV3LWFmaWxpYXRlLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzXCI7XG5pb24tY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIE9UJywgc2Fucy1zZXJpZjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 26721:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/components/new-afiliate-form/new-afiliate-form.page.scss?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-row {\n  margin-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1hZmlsaWF0ZS1mb3JtLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSjtBQTlCQTtFQUNJLDhCQUFBO0FBaUNKIiwiZmlsZSI6Im5ldy1hZmlsaWF0ZS1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzc1wiO1xuaW9uLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBPVCcsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 26421:
/*!*****************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/my-afiliates.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-row {\n  margin-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFmaWxpYXRlcy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0ksOEJBQUE7QUFpQ0oiLCJmaWxlIjoibXktYWZpbGlhdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzc1wiO1xuaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 26685:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/components/afiliate-card/afiliate-card.page.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\n    <ion-card-header>\n        <ion-card-title>{{afiliate.FullNames}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-row>\n            <ion-label>Edad: {{getAge(afiliate.BirthDate)}} años</ion-label>\n        </ion-row>\n        <ion-row>\n            <ion-label>{{afiliate.DocumentTypeShort}} : {{afiliate.Document}}</ion-label>\n        </ion-row>\n        <ion-row>\n            <ion-label *ngIf=\"afiliate.CellPhone\">Celular : {{afiliate.CellPhone}}</ion-label>\n        </ion-row>\n        <ion-row>\n            <ion-label *ngIf=\"afiliate.Email\">Correo : {{afiliate.Email}}</ion-label>\n        </ion-row>\n    </ion-card-content>\n</ion-card>";

/***/ }),

/***/ 60961:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/components/new-afiliate-card/new-afiliate-card.page.html?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-row>\n    <ion-col size=\"12\">\n        <ion-card>\n            <ion-card-header>\n                <ion-row>\n                    <ion-col size=\"2\">\n                        <ion-icon name=\"person-add-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"10\">\n                        <ion-card-title>Agregar afiliado</ion-card-title>\n                    </ion-col>\n                </ion-row>\n            </ion-card-header>\n        </ion-card>\n    </ion-col>\n</ion-row>";

/***/ }),

/***/ 41857:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/components/new-afiliate-form/new-afiliate-form.page.html?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Nuevo Afiliado</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row>\n        <ion-col size=\"12\">\n            <ion-label class=\"title-primary\">Datos del afiliado</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <ion-label class=\"title-subtitle\">Ingresa los datos de tu familiar para ingresar la búsqueda en nuestra base de datos. Recuerda que esto no genera costos de afiliación.</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <form [formGroup]=\"formSearchPersonData\">\n\n        <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{'PORTAL.MYDATA.documentType' | translate}}</ion-label>\n                <ion-select id=\"documentType\" formControlName=\"documentType\" (ionChange)=\"enabledInputDocument()\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                    <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of documentTypes\">\n                        {{item.Name}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.formSearchPersonData.controls.documentType.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                </span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{'PORTAL.MYDATA.documentNumber' | translate}}</ion-label>\n                <ion-input type=\"number\" id=\"documentNumber\" formControlName=\"documentNumber\" (ionBlur)=\"validateDocument()\"></ion-input>\n            </ion-item>\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.formSearchPersonData.controls.documentNumber.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                </span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <app-button [configuration]=\"searchAfiliateButton\" [disabled]='formSearchPersonData.invalid' (click)=\"searchAfiliate()\"></app-button>\n            </ion-col>\n        </ion-row>\n\n    </form>\n\n    <div class=\"row\" *ngIf=\"enableNewAfiliateForm\">\n\n        <hr />\n\n        <form [formGroup]=\"formNewAfiliateData\">\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.firstName' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"firstName\" formControlName=\"firstName\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formNewAfiliateData.controls.firstName.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                    <span class=\"ion-validator\" *ngIf=\"this.formNewAfiliateData.controls.firstName.hasError('pattern')\">\n                        {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}</span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.secondName' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"secondName\" formControlName=\"secondName\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formNewAfiliateData.controls.secondName.hasError('pattern')\">\n            {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}</span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.firstLastName' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"firstLastname\" formControlName=\"firstLastname\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formNewAfiliateData.controls.firstLastname.hasError('required')\">\n            {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                    <span class=\"ion-validator\" *ngIf=\"this.formNewAfiliateData.controls.firstLastname.hasError('pattern')\">\n            {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}</span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.secondLastName' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"secondLastname\" formControlName=\"secondLastname\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formNewAfiliateData.controls.secondLastname.hasError('pattern')\">\n            {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}</span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.cellPhone' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"cellPhone\" formControlName=\"cellPhone\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formNewAfiliateData.controls.cellPhone.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.email' | translate}}</ion-label>\n                    <ion-input type=\"email\" id=\"email\" formControlName=\"email\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formNewAfiliateData.controls.email.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n        </form>\n\n    </div>\n\n    <div *ngIf=\"enableNewAfiliateForm\">\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"cancelButton\" (click)=\"cancel()\"></app-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"sendNewAfiliateButton\" [disabled]=\"formNewAfiliateData.invalid\" (click)=\"postNewAfiliate()\"></app-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </div>\n\n</ion-content>";

/***/ }),

/***/ 43424:
/*!*****************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-afiliates/my-afiliates.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Mis Afiliados</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row>\n        <ion-col size=\"12\">\n            <app-afiliate-card *ngFor=\"let person of afiliates\" [afiliate]=\"person\"></app-afiliate-card>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col size=\"12\">\n            <app-new-afiliate-card (click)=\"newAfiliate()\"></app-new-afiliate-card>\n        </ion-col>\n    </ion-row>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_my-account_my-afiliates_my-afiliates_module_ts.js.map