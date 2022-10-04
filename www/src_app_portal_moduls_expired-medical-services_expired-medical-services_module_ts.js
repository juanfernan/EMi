"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_expired-medical-services_expired-medical-services_module_ts"],{

/***/ 55377:
/*!*********************************************************************************************!*\
  !*** ./src/app/portal/moduls/expired-medical-services/configs/filterRestoreButtonConfig.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "restoreButtonConfigExport": () => (/* binding */ restoreButtonConfigExport)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);


const restoreButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
restoreButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Primary;
restoreButtonConfig.text = 'Restaurar filtros';
restoreButtonConfig.width = "180px";
const restoreButtonConfigExport = restoreButtonConfig;


/***/ }),

/***/ 79052:
/*!***************************************************************************************************!*\
  !*** ./src/app/portal/moduls/expired-medical-services/expired-medical-services-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiredMedicalServicesPageRoutingModule": () => (/* binding */ ExpiredMedicalServicesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _expired_medical_services_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expired-medical-services.page */ 43995);





const routes = [
    {
        path: '',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _expired_medical_services_page__WEBPACK_IMPORTED_MODULE_1__.ExpiredMedicalServicesPage
    }
];
let ExpiredMedicalServicesPageRoutingModule = class ExpiredMedicalServicesPageRoutingModule {
};
ExpiredMedicalServicesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ExpiredMedicalServicesPageRoutingModule);



/***/ }),

/***/ 90583:
/*!*******************************************************************************************!*\
  !*** ./src/app/portal/moduls/expired-medical-services/expired-medical-services.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiredMedicalServicesPageModule": () => (/* binding */ ExpiredMedicalServicesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _expired_medical_services_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expired-medical-services-routing.module */ 79052);
/* harmony import */ var _expired_medical_services_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expired-medical-services.page */ 43995);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ExpiredMedicalServicesPageModule = class ExpiredMedicalServicesPageModule {
};
ExpiredMedicalServicesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _expired_medical_services_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpiredMedicalServicesPageRoutingModule
        ],
        declarations: [_expired_medical_services_page__WEBPACK_IMPORTED_MODULE_1__.ExpiredMedicalServicesPage]
    })
], ExpiredMedicalServicesPageModule);



/***/ }),

/***/ 43995:
/*!*****************************************************************************************!*\
  !*** ./src/app/portal/moduls/expired-medical-services/expired-medical-services.page.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiredMedicalServicesPage": () => (/* binding */ ExpiredMedicalServicesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _expired_medical_services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expired-medical-services.page.html?ngResource */ 13044);
/* harmony import */ var _expired_medical_services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expired-medical-services.page.scss?ngResource */ 98055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/user-login */ 20743);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _configs_filterRestoreButtonConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs/filterRestoreButtonConfig */ 55377);
/* harmony import */ var _services_expired_medical_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/expired-medical-services.service */ 39263);












let ExpiredMedicalServicesPage = class ExpiredMedicalServicesPage {
    constructor(expiredMedicalServicesService, router, translate, bsModalService) {
        this.expiredMedicalServicesService = expiredMedicalServicesService;
        this.router = router;
        this.bsModalService = bsModalService;
        this.userLogin = new src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_3__.UserLogin();
        this.toShowFilterPatient = true;
        this.p = 1;
        this.hiddenResult = true;
        this.disabledStateFilter = true;
        this.showPagination = false;
        this.isLoading = false;
        this.restoreButtonConfig = _configs_filterRestoreButtonConfig__WEBPACK_IMPORTED_MODULE_5__.restoreButtonConfigExport;
        this.translate = translate;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.country);
        this.affiliateType = localStorage.getItem("affiliateType");
        this.userLogin.documentType = localStorage.getItem("documentType");
        this.userLogin.document = localStorage.getItem("document");
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imagesRoute;
    }
    ngOnInit() {
        this.resetForm();
        this.validateAffiliateType();
    }
    resetForm() {
        this.patient = '';
        this.status = '';
        this.hiddenResult = true;
        this.disabledStateFilter = true;
    }
    pageChanged(event) {
        this.p = event;
        //$(window).scrollTop(0);
    }
    validateAffiliateType() {
        //AfiliateTypes: 1: Responsable de pago, 2: Beneficiario
        if (this.affiliateType == '1') {
            this.toShowFilterPatient = true;
            this.getBeneficiaries();
        }
        else if (this.affiliateType == '2') {
            this.toShowFilterPatient = false;
            this.getExpiredProducts(this.userLogin.documentType, this.userLogin.document);
        }
    }
    getBeneficiaries() {
        this.isLoading = true;
        this.expiredMedicalServicesService
            .getBeneficiaries(this.userLogin)
            .subscribe((result) => {
            this.isLoading = false;
            if (result.Beneficiaries.length > 0) {
                this.resultBeneficiaries = result.Beneficiaries;
            }
            else {
                this.bsModalRef = this.generateInformativeModal('Beneficiarios', 'No se encontraron beneficiarios', true, true);
                this.bsModalRef.content.onClose.subscribe((result) => {
                    this.router.navigate(['/portal/home'], { replaceUrl: true });
                });
            }
        }, (error) => this.ErrorRegister(error));
    }
    filterBy(type, eventFull) {
        const event = eventFull.target.value;
        if (event) {
            if (type == 'patient') {
                this.status = '';
                let beneficiary = this.resultBeneficiaries.filter((result) => result.Document == event)[0];
                this.getExpiredProducts(beneficiary.DocumentType, beneficiary.Document);
            }
            else {
                this.expiredProductsFilter = this.expiredProducts.filter((product) => product.Status == event);
            }
        }
    }
    getExpiredProducts(DocumentType, Document) {
        this.isLoading = true;
        this.expiredMedicalServicesService
            .getExpiredProducts(DocumentType, Document)
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                if (result.ExpiredProducts.Products) {
                    this.expiredProducts = result.ExpiredProducts.Products;
                    this.expiredProductsFilter = this.expiredProducts;
                    this.showPagination = true;
                    this.hiddenResult = true;
                    this.disabledStateFilter = false;
                }
                else {
                    this.expiredProducts = [];
                    this.expiredProductsFilter = [];
                    this.showPagination = false;
                    this.hiddenResult = false;
                    this.disabledStateFilter = true;
                }
            }
            else {
                this.showPagination = false;
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, true);
            }
        }, (error) => this.ErrorRegister(error));
    }
    restoreData() {
        this.resetForm();
        if (this.affiliateType == '1') {
            this.expiredProductsFilter = [];
        }
        else if (this.affiliateType == '2') {
            this.expiredProductsFilter = this.expiredProducts;
        }
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
            ignoreBackdropClick: true
        };
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
    coordinateEvent(event, Document, CellPhone, Email) {
        let document = btoa(Document);
        let cellPhone = btoa(CellPhone);
        let email = btoa(Email);
        var paramsUrl = { document: document, cellPhone: cellPhone, email: email };
        if (event == "1") {
            this.router.navigate(['/portal/admin/coordinations'], { queryParams: paramsUrl });
        }
        else {
            this.bsModalRef = this.generateInformativeModal('Información', 'Concurre al Centro Médico de tu preferencia en el horario estipulado. O comunícate con nuestro chat de Servicio al Cliente', false, true);
            /* TODO integrar la apertura del chat en este modal
            this.dialogService.addDialog(ModalComponent, {
              title: 'Información',
              message: `Concurre al Centro Médico de tu preferencia en el horario estipulado. O comunícate con nuestro chat de Servicio al Cliente`,
              openChatCustomerServiceMsg: "aquí.",
              imageUrl: this.config.info.checkImage,
              buttonConfirmText: "Cerrar"
            }, { closeByClickingOutside: true });*/
        }
    }
    ErrorRegister(error) {
        this.isLoading = false;
        this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true, true);
        /* TODO
        agregar Sentry */
    }
};
ExpiredMedicalServicesPage.ctorParameters = () => [
    { type: _services_expired_medical_services_service__WEBPACK_IMPORTED_MODULE_6__.ExpiredMedicalServicesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalService }
];
ExpiredMedicalServicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-expired-medical-services',
        template: _expired_medical_services_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_expired_medical_services_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExpiredMedicalServicesPage);



/***/ }),

/***/ 39263:
/*!*****************************************************************************************************!*\
  !*** ./src/app/portal/moduls/expired-medical-services/services/expired-medical-services.service.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpiredMedicalServicesService": () => (/* binding */ ExpiredMedicalServicesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let ExpiredMedicalServicesService = class ExpiredMedicalServicesService {
    constructor(http) {
        this.http = http;
    }
    getExpiredProducts(documentType, document) {
        let params = {
            DocumentType: documentType,
            Document: document,
            Type: 1 //Todos los resultados.
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'expiredmedicalservices/GetExpiredProducts', params);
    }
    getBeneficiaries(payload) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Affiliate/GetBeneficiaries', payload);
    }
};
ExpiredMedicalServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ExpiredMedicalServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ExpiredMedicalServicesService);



/***/ }),

/***/ 98055:
/*!******************************************************************************************************!*\
  !*** ./src/app/portal/moduls/expired-medical-services/expired-medical-services.page.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n:root ion-select {\n  font-size: smaller;\n}\n:root ion-select-option {\n  font-size: smaller;\n}\n.sc-ion-alert-ios-h {\n  --max-width: 85% !important;\n  --width: 85% !important;\n  font-size: 13px !important;\n}\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-item {\n  border: none !important;\n}\nion-card-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\n.ion-card-subtitle {\n  font-size: 12px;\n}\n.text-title {\n  font-size: 12px;\n  color: #00466c;\n}\n.text-subtitle {\n  font-size: 12px;\n}\n.img-location {\n  align-self: center;\n  width: 25px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGlyZWQtbWVkaWNhbC1zZXJ2aWNlcy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBaUNKO0FBaENJO0VBQ0ksa0JBQUE7QUFrQ1I7QUFoQ0k7RUFDSSxrQkFBQTtBQWtDUjtBQTlCQTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSjtBQTlCQTtFQUNJLHVCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0M5Qlk7QUQrRGhCO0FBOUJBO0VBQ0ksZUFBQTtBQWlDSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZUFBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQ0oiLCJmaWxlIjoiZXhwaXJlZC1tZWRpY2FsLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICB9XG4gICAgaW9uLXNlbGVjdC1vcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgfVxufVxuXG4uc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgICAtLW1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgLS13aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ01hcmsgT1QnLCBzYW5zLXNlcmlmO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufVxuXG4uaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzAwNDY2Yztcbn1cblxuLnRleHQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmltZy1sb2NhdGlvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMzBweDtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 13044:
/*!******************************************************************************************************!*\
  !*** ./src/app/portal/moduls/expired-medical-services/expired-medical-services.page.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Servicios con vencimiento</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.EXPIRED-MEDICAL-SERVICES.TitleFilterSection\" | translate}}</ion-label>\n    </ion-row>\n\n    <form #registerForm=\"ngForm\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{\"PORTAL.EXPIRED-MEDICAL-SERVICES.LabelPatient\" | translate}}</ion-label>\n                <ion-select (ionChange)=\"filterBy('patient', $event)\" [(ngModel)]=\"patient\" #Patient=\"ngModel\" name=\"Patient\" id=\"Patient\" required mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                    <ion-select-option *ngFor=\"let beneficiaries of resultBeneficiaries\" [value]=\"beneficiaries.Document\">\n                        {{beneficiaries.FullNames}}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{\"PORTAL.EXPIRED-MEDICAL-SERVICES.LabelStatus\" | translate}}</ion-label>\n                <ion-select (ionChange)=\"filterBy('state', $event)\" [(ngModel)]=\"status\" #Status=\"ngModel\" name=\"Status\" id=\"Status\" [disabled]=\"toShowFilterPatient && disabledStateFilter\" mode=\"ios\" disabled ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                    <ion-select-option value=\"3\">{{\"PORTAL.EXPIRED-MEDICAL-SERVICES.CurrentStatuOption\" | translate}}</ion-select-option>\n                    <ion-select-option value=\"2\">{{\"PORTAL.EXPIRED-MEDICAL-SERVICES.ExpiredStatusOption\" | translate}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n            <ion-col>\n                <app-button [configuration]=\"restoreButtonConfig\" [disabled]=\"!patient && !status\" (click)=\"restoreData()\"></app-button>\n            </ion-col>\n        </ion-row>\n\n    </form>\n\n    <div [hidden]=\"hiddenResult\">\n        <ion-row>\n            <p>\n                <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> {{\"PORTAL.EXPIRED-MEDICAL-SERVICES.FailedResult\" | translate}}\n                <span><a (click)=\"restoreData()\">{{\"PORTAL.EXPIRED-MEDICAL-SERVICES.CloseButton\" | translate}}</a></span>\n            </p>\n        </ion-row>\n    </div>\n\n    <div *ngFor=\"let product of expiredProductsFilter\" class=\"ion-padding-top\">\n\n        <ion-card>\n            <ion-card-header>\n                <ion-card-title>{{product.DescProduct}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n\n                <ion-row>\n                    <ion-label class=\"text-title\">{{\"PORTAL.EXPIRED-MEDICAL-SERVICES.DescriptionCard\" | translate}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <ion-label>{{product.FullName}}<br><span>{{product.DescDocument}}</span>{{product.Document}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <ion-label class=\"text-title\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{\"PORTAL.EXPIRED-MEDICAL-SERVICES.StartDateCard\" | translate}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <ion-label class=\"text-subtitle\">{{product.DateAccomplished}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <ion-label class=\"text-title\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{\"PORTAL.EXPIRED-MEDICAL-SERVICES.EndDateCard\" | translate}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <ion-label class=\"text-subtitle\"><i aria-hidden=\"true\"> </i>{{product.DateAccomplished}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <ion-label class=\"text-title\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> {{\"PORTAL.EXPIRED-MEDICAL-SERVICES.StateCard\" | translate}}</ion-label>\n                </ion-row>\n\n                <ion-row>\n                    <ion-label [ngStyle]=\"{'color': product.DescStatus === 'Vencido' ? 'red' : '','font-weight': product.DescStatus === 'Vencido' ? 'bold' : '' }\" class=\"card-text\">\n                        <i aria-hidden=\"true\"></i>{{product.DescStatus}}\n                    </ion-label>\n                </ion-row>\n\n                <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n                    <div>\n                        <a class=\"btn btn-primary\" (click)=\"coordinateEvent(product.Coordinate, product.Document, product.CellPhone, product.Email)\">\n                            {{\"PORTAL.EXPIRED-MEDICAL-SERVICES.CoordinateButton\" | translate}}\n                        </a>\n                    </div>\n                    <form id=\"formFacturasUy\">\n                        <input type=\"hidden\" name=\"PWToken\" id=\"PWToken\" />\n                    </form>\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_expired-medical-services_expired-medical-services_module_ts.js.map