"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_service-solicitud_service-solicitud_module_ts"],{

/***/ 25454:
/*!************************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/components/card-type/card-type-service.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardTypeServicePage": () => (/* binding */ CardTypeServicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _card_type_service_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-type-service.page.html?ngResource */ 18531);
/* harmony import */ var _card_type_service_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-type-service.page.scss?ngResource */ 72448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_address_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/address-detail */ 77980);
/* harmony import */ var _models_card_phone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/card-phone */ 1589);
/* harmony import */ var _models_phone_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/phone-number */ 18461);
/* harmony import */ var _models_request_phone_numbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/request-phone-numbers */ 37988);
/* harmony import */ var _services_phone_number_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/phone-number.service */ 36759);
/* harmony import */ var _services_show_details_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/show-details.service */ 56984);
/* harmony import */ var _modal_phones_center_modal_phones_center_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modal-phones-center/modal-phones-center.component */ 65569);
















let CardTypeServicePage = class CardTypeServicePage {
    constructor(phoneNumberServices, urlDataService, showDetailsService, router, modalService) {
        this.phoneNumberServices = phoneNumberServices;
        this.urlDataService = urlDataService;
        this.showDetailsService = showDetailsService;
        this.router = router;
        this.modalService = modalService;
        this._addressDetail = new _models_address_detail__WEBPACK_IMPORTED_MODULE_5__.AddressDetail();
        this.informativeTitleModal = "Información";
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.country;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imagesRoute;
    }
    ngOnInit() {
    }
    loadService() {
        if (!this.acceptConsent) {
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
        this.phoneNumberServices.getPhonesExperienceCenter(this.requestPhoneNumber).subscribe((response) => {
            if (response) {
                response.UPhoneses.forEach((element) => {
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
        this.requestPhoneNumber = new _models_request_phone_numbers__WEBPACK_IMPORTED_MODULE_8__.RequestPhoneNumbers();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.requestPhoneNumber.Latitud = String(position.coords.latitude);
                this.requestPhoneNumber.Longitud = String(position.coords.longitude);
                this.loadPhoneExperienceCenter();
            }, error => {
                this.generateInformativeModal("Atención", "En este momento no es posible obtener tu ubicación. Verifica los permisos.");
            });
        }
        else {
            this.requestPhoneNumber.Latitud = "";
            this.requestPhoneNumber.Longitud = "";
            this.loadPhoneExperienceCenter();
        }
    }
    loadPhoneEperienceCenterByDefault() {
        let listNumberPhone = new _models_phone_number__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberModel();
        let numberPhone = new _models_card_phone__WEBPACK_IMPORTED_MODULE_6__.CardPhoneModel();
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
        const initialState = {
            initialState: {
                listPhoneNumbers: this.listNumberPhones,
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 'modal-error-no-services',
            backdrop: true,
            ignoreBackdropClick: true
        };
        return this.modalService.show(_modal_phones_center_modal_phones_center_component__WEBPACK_IMPORTED_MODULE_11__.ModalPhonesCenterComponent, initialState);
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
    videoCallPetition(_addressDetail) {
        this.showDetailsService
            .getVideoCallPetition(_addressDetail)
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                if (result.Petition.Cod == '1') {
                    this.urlDataService.UrlService = result.Petition.Return.Url;
                    this.router.navigate(['/videochat']);
                }
                else {
                    this.generateInformativeModal(this.informativeTitleModal, result.Petition.Message);
                }
            }
            else {
                this.generateInformativeModal(result.Title, result.Message);
            }
        }, error => this.ErrorRegister(error));
    }
    ErrorRegister(error) {
        this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.');
    }
    generateInformativeModal(subTitle, description) {
        const initialState = {
            initialState: {
                iconHeader: 'alert-circle.svg',
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
        return this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
};
CardTypeServicePage.ctorParameters = () => [
    { type: _services_phone_number_service__WEBPACK_IMPORTED_MODULE_9__.PhoneNumberService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__.UrlDataService },
    { type: _services_show_details_service__WEBPACK_IMPORTED_MODULE_10__.ShowDetailsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__.BsModalService }
];
CardTypeServicePage.propDecorators = {
    service: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    acceptConsent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }]
};
CardTypeServicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-card-type',
        template: _card_type_service_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_card_type_service_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardTypeServicePage);



/***/ }),

/***/ 65569:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/components/modal-phones-center/modal-phones-center.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPhonesCenterComponent": () => (/* binding */ ModalPhonesCenterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_phones_center_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-phones-center.component.html?ngResource */ 29088);
/* harmony import */ var _modal_phones_center_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-phones-center.component.scss?ngResource */ 62360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);







let ModalPhonesCenterComponent = class ModalPhonesCenterComponent {
    constructor(modalService, bsModalRef) {
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute;
    }
    ngOnInit() {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    closeModal() {
        this.bsModalRef.hide();
    }
    confirm() {
        this.onClose.next(true);
        this.onClose.complete();
        this.bsModalRef.hide();
    }
    cancel() {
        this.onClose.next(false);
        this.onClose.complete();
        this.bsModalRef.hide();
    }
};
ModalPhonesCenterComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalRef }
];
ModalPhonesCenterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modal-phones-center',
        template: _modal_phones_center_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_phones_center_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalPhonesCenterComponent);



/***/ }),

/***/ 98760:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/components/service-terms-modal/service-terms-modal.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceTermsModalComponent": () => (/* binding */ ServiceTermsModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _service_terms_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-terms-modal.component.html?ngResource */ 69403);
/* harmony import */ var _service_terms_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-terms-modal.component.scss?ngResource */ 68067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);







let ServiceTermsModalComponent = class ServiceTermsModalComponent {
    constructor(modalService, bsModalRef) {
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.imageRoute = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}logo-modal.png`;
    }
    ngOnInit() {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    closeModal() {
        this.bsModalRef.hide();
    }
    confirm() {
        this.onClose.next(true);
        this.onClose.complete();
        this.bsModalRef.hide();
    }
    cancel() {
        this.onClose.next(false);
        this.onClose.complete();
        this.bsModalRef.hide();
    }
};
ServiceTermsModalComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalRef }
];
ServiceTermsModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-service-terms-modal',
        template: _service_terms_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_service_terms_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServiceTermsModalComponent);



/***/ }),

/***/ 77980:
/*!**************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/models/address-detail.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressDetail": () => (/* binding */ AddressDetail)
/* harmony export */ });
class AddressDetail {
    constructor() {
        this.CountryId = "";
        this.DepartmentId = "";
        this.CityId = "";
        this.typeMainRoad = "";
        this.mainRoadNumber = "";
        this.NeighborhoodId = "";
        this.Address = "";
        this.Corner = "";
        this.DoorNumber = "";
        this.IsNewAddress = true;
        this.StandardizedAddress = "";
        this.Street = "";
        this.Bis = "";
        this.Apartment = "";
        this.AddressDetails = "";
        this.Coverage = false;
        this.StandardizedAddressCoverage = "";
        this.numberGeneratingNomenclature = "";
        this.portNumber = "";
    }
}


/***/ }),

/***/ 1589:
/*!**********************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/models/card-phone.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPhoneModel": () => (/* binding */ CardPhoneModel)
/* harmony export */ });
class CardPhoneModel {
}


/***/ }),

/***/ 85999:
/*!********************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/models/pantient.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Patient": () => (/* binding */ Patient)
/* harmony export */ });
class Patient {
}


/***/ }),

/***/ 18461:
/*!************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/models/phone-number.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneNumberModel": () => (/* binding */ PhoneNumberModel)
/* harmony export */ });
class PhoneNumberModel {
}


/***/ }),

/***/ 37988:
/*!*********************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/models/request-phone-numbers.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestPhoneNumbers": () => (/* binding */ RequestPhoneNumbers)
/* harmony export */ });
class RequestPhoneNumbers {
}


/***/ }),

/***/ 32960:
/*!************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/pipes/birthday.pipe.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthdayPipe": () => (/* binding */ BirthdayPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let BirthdayPipe = class BirthdayPipe {
    transform(value) {
        // metodo realizado para recibir string como formato = "19901105" caso contrario agregar otra logica diferente.
        const _year = Number(value.substring(0, 4));
        const _mont = Number(value.substring(4, 6));
        const _day = Number(value.substring(6, 8));
        const dateNow = new Date();
        const dateBirthday = new Date(_year, _mont, _day);
        const year = dateNow.getFullYear() - dateBirthday.getFullYear();
        const month = (dateBirthday.getMonth() - 1) - dateNow.getMonth();
        if (month == 0) {
            const day = dateBirthday.getDate() - dateNow.getDate();
            if (day > 0)
                return year - 1;
            else
                return year;
        }
        else if (month > 0) {
            return year - 1;
        }
        else
            return year;
    }
};
BirthdayPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'birthday'
    })
], BirthdayPipe);



/***/ }),

/***/ 62345:
/*!*************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/service-solicitud-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceSolicitudPageRoutingModule": () => (/* binding */ ServiceSolicitudPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _service_solicitud_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-solicitud.page */ 65063);




const routes = [
    {
        path: '',
        component: _service_solicitud_page__WEBPACK_IMPORTED_MODULE_0__.ServiceSolicitudPage
    }
];
let ServiceSolicitudPageRoutingModule = class ServiceSolicitudPageRoutingModule {
};
ServiceSolicitudPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServiceSolicitudPageRoutingModule);



/***/ }),

/***/ 72877:
/*!*****************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/service-solicitud.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceSolicitudPageModule": () => (/* binding */ ServiceSolicitudPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _service_solicitud_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-solicitud-routing.module */ 62345);
/* harmony import */ var _service_solicitud_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-solicitud.page */ 65063);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _components_card_type_card_type_service_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card-type/card-type-service.page */ 25454);
/* harmony import */ var _components_modal_phones_center_modal_phones_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal-phones-center/modal-phones-center.component */ 65569);
/* harmony import */ var _pipes_birthday_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/birthday.pipe */ 32960);
/* harmony import */ var _service_solicitud_components_service_terms_modal_service_terms_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-solicitud/components/service-terms-modal/service-terms-modal.component */ 98760);












let ServiceSolicitudPageModule = class ServiceSolicitudPageModule {
};
ServiceSolicitudPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _service_solicitud_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiceSolicitudPageRoutingModule
        ],
        declarations: [
            _service_solicitud_page__WEBPACK_IMPORTED_MODULE_1__.ServiceSolicitudPage,
            _components_card_type_card_type_service_page__WEBPACK_IMPORTED_MODULE_3__.CardTypeServicePage,
            _components_modal_phones_center_modal_phones_center_component__WEBPACK_IMPORTED_MODULE_4__.ModalPhonesCenterComponent,
            _pipes_birthday_pipe__WEBPACK_IMPORTED_MODULE_5__.BirthdayPipe,
            _service_solicitud_components_service_terms_modal_service_terms_modal_component__WEBPACK_IMPORTED_MODULE_6__.ServiceTermsModalComponent
        ]
    })
], ServiceSolicitudPageModule);



/***/ }),

/***/ 65063:
/*!***************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/service-solicitud.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceSolicitudPage": () => (/* binding */ ServiceSolicitudPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _service_solicitud_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-solicitud.page.html?ngResource */ 53613);
/* harmony import */ var _service_solicitud_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-solicitud.page.scss?ngResource */ 71047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/user-login */ 20743);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _service_solicitud_components_service_terms_modal_service_terms_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service-solicitud/components/service-terms-modal/service-terms-modal.component */ 98760);
/* harmony import */ var _models_pantient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/pantient */ 85999);
/* harmony import */ var _services_plan_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/plan.service */ 12852);
/* harmony import */ var _services_portal_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/portal-common.service */ 29014);
/* harmony import */ var _services_portal_validator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/portal-validator.service */ 64995);
/* harmony import */ var _models_request_phone_numbers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/request-phone-numbers */ 37988);
/* harmony import */ var _models_address_detail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./models/address-detail */ 77980);
/* harmony import */ var _services_phone_number_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/phone-number.service */ 36759);
/* harmony import */ var _services_show_details_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/show-details.service */ 56984);
/* harmony import */ var _models_phone_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./models/phone-number */ 18461);
/* harmony import */ var _models_card_phone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./models/card-phone */ 1589);
/* harmony import */ var _components_modal_phones_center_modal_phones_center_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modal-phones-center/modal-phones-center.component */ 65569);



























let ServiceSolicitudPage = class ServiceSolicitudPage {
    constructor(commonService, modalService, translate, fb, router, planServicesService, phoneNumberServices, urlDataService, showDetailsService) {
        this.commonService = commonService;
        this.modalService = modalService;
        this.translate = translate;
        this.fb = fb;
        this.router = router;
        this.planServicesService = planServicesService;
        this.phoneNumberServices = phoneNumberServices;
        this.urlDataService = urlDataService;
        this.showDetailsService = showDetailsService;
        this.steps = [1, 2, 3];
        this.actualStep = 1;
        this.continuarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_5__.ButtonConfiguration();
        this.documentPerson = "";
        this.userLogin = new src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_6__.UserLogin();
        this.dontShowPatientNumber = true;
        this.cellPhonePatient = "";
        this.validateCellNumberError = false;
        this.validateCellPhonePatientError = false;
        this.cancelarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_5__.ButtonConfiguration();
        this._addressDetail = new _models_address_detail__WEBPACK_IMPORTED_MODULE_15__.AddressDetail();
        this.informativeTitleModal = "Información";
        this.isLoading = true;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.imagesRoute;
        this.maxLength = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.lengthCell;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.country;
        this.buttonContinuarDisabled = true;
        this.continuarButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Primary;
        this.continuarButton.text = "Continuar";
        this.form = this.fb.group({
            cellPhone: [{ value: '', disabled: !this.dontShowPatientNumber }, [src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__.ValidatorStartCellPhoneNumber]],
            cellPhonePatient: [{ value: '', disabled: !this.dontShowPatientNumber }, [src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__.ValidatorStartCellPhoneNumber]],
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
            }
            else {
                this.canNotContinue = false;
                this.buttonContinuarDisabled = true;
            }
        }
        else {
            if (this.form.controls.cellPhonePatient.value != "" && this.form.controls.cellPhonePatient.valid) {
                this.patient.CellPhone = this.form.controls.cellPhonePatient.value;
                this.canContinue = true;
                this.buttonContinuarDisabled = false;
            }
            else {
                this.canNotContinue = false;
            }
        }
    }
    //validamos si el numero de telefono ingresado es correcto
    validateCellNumber() {
        if (this.dontShowPatientNumber) {
            let isValid = this.numberIsValid(this.patient.CellPhone);
            (isValid) ? this.validateCellNumberError = false : this.validateCellNumberError = true;
            this.activateValidation();
        }
        else {
            let isValid = this.numberIsValid(this.cellPhonePatient);
            (isValid) ? this.validateCellPhonePatientError = false : this.validateCellPhonePatientError = true;
            this.activateValidation();
        }
    }
    numberIsValid(number) {
        return _services_portal_validator_service__WEBPACK_IMPORTED_MODULE_13__.PortalValidatorService.validateNumberCellPhone(number);
    }
    numberOnly(event) {
        return _services_portal_validator_service__WEBPACK_IMPORTED_MODULE_13__.PortalValidatorService.numberOnly(event);
    }
    // third step
    SetInitialCheckFalse() {
        this.checkTerminos = false;
        this.checkConsentimientos = false;
    }
    getPersons() {
        this.commonService
            .getPersons(this.userLogin).subscribe(result => {
            if (result.StatusCode === 0) {
                this.persons = result.Beneficiaries;
                this.isLoading = false;
            }
            else {
                this.generateInformativeModal(result.Title, result.Message);
            }
        }, error => this.ErrorRegister(error));
    }
    selectionPerson(persona) {
        this.patient = new _models_pantient__WEBPACK_IMPORTED_MODULE_10__.Patient();
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
    loadServices(person) {
        this.isLoading = true;
        this.planServicesService
            .getEnabledServices(person.DocumentType, person.Document, this.latitud, this.longitud)
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                this.planServices = result.EnabledServices.filter((obj) => obj.Code == "02" || obj.Code == "07" || obj.Code == "09" || obj.Code == "10");
                if (this.planServices.length > 0)
                    this.validateResponse(this.planServices);
                else {
                    const subTitle = 'Atención';
                    const description = 'No se encontraron servicios habilitados para el paciente seleccionado.';
                    this.bsModalRef = this.generateInformativeModal(subTitle, description);
                    this.bsModalRef.content.onClose.subscribe((result) => {
                        this.router.navigate(['/portal/home']);
                    });
                }
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message);
            }
            this.isLoading = false;
        }, error => this.ErrorRegister(error));
    }
    validateResponse(listService) {
        listService.forEach((service) => {
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
    ErrorRegister(error) {
        this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar su solicitud. Por favor inténtalo mas tarde.');
        this.router.navigate(['/portal/home'], { replaceUrl: true });
    }
    openTerminos() {
        this.translate.get("PORTAL.SERVICE-SOLICITUDE.Terminos").subscribe(message => {
            const initialState = {
                initialState: {
                    texto: message,
                },
                class: 'modal-dialog-centered modal-rounded',
                id: 'modal-activation',
            };
            this.bsModalRef = this.modalService.show(_service_solicitud_components_service_terms_modal_service_terms_modal_component__WEBPACK_IMPORTED_MODULE_9__.ServiceTermsModalComponent, initialState);
        });
    }
    openConsentimientos() {
        this.translate.get("PORTAL.SERVICE-SOLICITUDE.Consentimientos").subscribe(message => {
            const initialState = {
                initialState: {
                    texto: message,
                },
                class: 'modal-dialog-centered modal-rounded',
                id: 'modal-activation',
            };
            this.bsModalRef = this.modalService.show(_service_solicitud_components_service_terms_modal_service_terms_modal_component__WEBPACK_IMPORTED_MODULE_9__.ServiceTermsModalComponent, initialState);
        });
    }
    generateInformativeModal(subTitle, description) {
        const initialState = {
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
        return this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
    checkConsentimiento() {
        if (!this.checkConsentimientos) {
            const initialState = {
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
            return this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
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
        this.phoneNumberServices.getPhonesExperienceCenter(this.requestPhoneNumber).subscribe((response) => {
            if (response) {
                response.UPhoneses.forEach((element) => {
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
        this.requestPhoneNumber = new _models_request_phone_numbers__WEBPACK_IMPORTED_MODULE_14__.RequestPhoneNumbers();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.requestPhoneNumber.Latitud = String(position.coords.latitude);
                this.requestPhoneNumber.Longitud = String(position.coords.longitude);
                this.loadPhoneExperienceCenter();
            }, error => {
                this.generateInformativeModal("Atención", "En este momento no es posible obtener tu ubicación. Verifica los permisos.");
            });
        }
        else {
            this.requestPhoneNumber.Latitud = "";
            this.requestPhoneNumber.Longitud = "";
            this.loadPhoneExperienceCenter();
        }
    }
    loadPhoneEperienceCenterByDefault() {
        let listNumberPhone = new _models_phone_number__WEBPACK_IMPORTED_MODULE_18__.PhoneNumberModel();
        let numberPhone = new _models_card_phone__WEBPACK_IMPORTED_MODULE_19__.CardPhoneModel();
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
        const initialState = {
            initialState: {
                listPhoneNumbers: this.listNumberPhones,
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 'modal-error-no-services',
            backdrop: true,
            ignoreBackdropClick: true
        };
        return this.modalService.show(_components_modal_phones_center_modal_phones_center_component__WEBPACK_IMPORTED_MODULE_20__.ModalPhonesCenterComponent, initialState);
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
    videoCallPetition(_addressDetail) {
        this.showDetailsService
            .getVideoCallPetition(_addressDetail)
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                if (result.Petition.Cod == '1') {
                    this.urlDataService.UrlService = result.Petition.Return.Url;
                    this.router.navigate(['/videochat']);
                }
                else {
                    this.generateInformativeModal(this.informativeTitleModal, result.Petition.Message);
                }
            }
            else {
                this.generateInformativeModal(result.Title, result.Message);
            }
        }, error => this.ErrorRegister(error));
    }
};
ServiceSolicitudPage.ctorParameters = () => [
    { type: _services_portal_common_service__WEBPACK_IMPORTED_MODULE_12__.PortalCommonService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__.BsModalService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.Router },
    { type: _services_plan_service__WEBPACK_IMPORTED_MODULE_11__.PlanService },
    { type: _services_phone_number_service__WEBPACK_IMPORTED_MODULE_16__.PhoneNumberService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_7__.UrlDataService },
    { type: _services_show_details_service__WEBPACK_IMPORTED_MODULE_17__.ShowDetailsService }
];
ServiceSolicitudPage = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.Component)({
        selector: 'app-service-solicitud',
        template: _service_solicitud_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_service_solicitud_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServiceSolicitudPage);



/***/ }),

/***/ 36759:
/*!**********************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/services/phone-number.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneNumberService": () => (/* binding */ PhoneNumberService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PhoneNumberService = class PhoneNumberService {
    constructor(http) {
        this.http = http;
    }
    getPhonesExperienceCenter(requestPhoneNumbers) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + "DataLists/GetPhoneExperienceCenter";
        return this.http.post(url, requestPhoneNumbers);
    }
};
PhoneNumberService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PhoneNumberService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PhoneNumberService);



/***/ }),

/***/ 12852:
/*!**************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/services/plan.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanService": () => (/* binding */ PlanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PlanService = class PlanService {
    constructor(http) {
        this.http = http;
    }
    getEnabledServices(documentType, document, latitude, longitude) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Services/GetEnabledServices';
        let params = {
            DocumentType: documentType,
            Document: document,
            Code: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mapCode,
            Latitude: latitude,
            Longitude: longitude
        };
        return this.http.post(url, params);
    }
};
PlanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PlanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PlanService);



/***/ }),

/***/ 56984:
/*!**********************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/services/show-details.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowDetailsService": () => (/* binding */ ShowDetailsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let ShowDetailsService = class ShowDetailsService {
    constructor(http) {
        this.http = http;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.country;
    }
    getVideoCallPetition(_addressDetail) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'VideoCall/Petition';
        let params = {
            Type: _addressDetail.ServiceType,
            Document: _addressDetail.PatientDocument,
            DocumentType: _addressDetail.PatientDocumentType,
            Country: _addressDetail.Country,
            Department: _addressDetail.DepartmentId,
            City: _addressDetail.CityId,
            Neighborhood: _addressDetail.NeighborhoodId,
            Street: this.country === "co" ? _addressDetail.StreetSO : _addressDetail.Street,
            // NumberStreet: _addressDetail.DoorNumber,
            NumberStreet: "",
            Bis: _addressDetail.Bis,
            Apto: _addressDetail.Apartment,
            // Corner: _addressDetail.Corner,
            Corner: "",
            Reference: `${_addressDetail.Apartment} ${_addressDetail.AddressDetails}`,
            Latitude: _addressDetail.Latitude,
            longitude: _addressDetail.Longitude,
            Cellphone: _addressDetail.IsContactNumber === true ? _addressDetail.ApplicantCellPhone : _addressDetail.PatientCellPhone,
            CoverageZona: _addressDetail.Coverage
        };
        return this.http.post(url, params);
    }
};
ShowDetailsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ShowDetailsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ShowDetailsService);



/***/ }),

/***/ 72448:
/*!*************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/components/card-type/card-type-service.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = ".card {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  height: 77px;\n  width: 300px !important;\n  border-radius: 16px;\n  border: 1px solid #e2e1e1;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);\n  background: #f8f7f7;\n}\n\n.col-img {\n  margin-top: 3px;\n  margin-left: 20px;\n}\n\n.col-text-name {\n  width: 150px;\n  margin-left: 20px;\n}\n\n.col-text-name span {\n  font-family: \"Mark OT\", sans-serif;\n  font-size: 15px;\n  line-height: 21px;\n}\n\nimg {\n  height: 30px !important;\n  width: 30px !important;\n}\n\n.col-line {\n  margin-left: 25px;\n}\n\n.vertical-line {\n  width: 1px;\n  height: 65px;\n  background: #d2d1d1;\n}\n\n.col-info {\n  display: inline-grid;\n  justify-items: center;\n  align-self: self-start;\n  margin-left: 10px;\n  margin-top: 5px;\n  font-family: \"Mark OT\", sans-serif;\n}\n\n.col-info-text-header {\n  font-size: 14px;\n  line-height: 12px;\n  color: #757471;\n}\n\n.col-info-text-body-green {\n  margin-top: 10px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 16px;\n  color: #12b829;\n}\n\n.col-info-text-body-yellow {\n  margin-top: 10px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 16px;\n  color: #F68002;\n}\n\n.col-info-text-body-red {\n  margin-top: 10px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 16px;\n  color: #FF3F33;\n}\n\n@media only screen and (max-width: 360px) {\n  .card {\n    width: auto;\n  }\n  .col-line {\n    margin-left: 10px;\n  }\n  .col-text-name {\n    margin-left: 0px;\n  }\n  .col-info-text-header {\n    font-size: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtdHlwZS1zZXJ2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0VBQ047RUFDRTtJQUNJLGlCQUFBO0VBQ047RUFDRTtJQUNJLGdCQUFBO0VBQ047RUFDRTtJQUNJLGNBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImNhcmQtdHlwZS1zZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDc3cHg7XG4gICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMWUxO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIGJhY2tncm91bmQ6ICNmOGY3Zjc7XG59XG5cbi5jb2wtaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5jb2wtdGV4dC1uYW1lIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5jb2wtdGV4dC1uYW1lIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1hcmsgT1RcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbC1saW5lIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLnZlcnRpY2FsLWxpbmUge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJhY2tncm91bmQ6ICNkMmQxZDE7XG59XG5cbi5jb2wtaW5mbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1hcmsgT1RcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbC1pbmZvLXRleHQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgY29sb3I6ICM3NTc0NzE7XG59XG5cbi5jb2wtaW5mby10ZXh0LWJvZHktZ3JlZW4ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgY29sb3I6ICMxMmI4Mjk7XG59XG5cbi5jb2wtaW5mby10ZXh0LWJvZHkteWVsbG93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjRjY4MDAyO1xufVxuXG4uY29sLWluZm8tdGV4dC1ib2R5LXJlZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogI0ZGM0YzMztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgIC5jb2wtbGluZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAuY29sLXRleHQtbmFtZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuICAgIC5jb2wtaW5mby10ZXh0LWhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 62360:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/components/modal-phones-center/modal-phones-center.component.scss?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.cancel {\n  color: #a8a5a5;\n}\n.btnClose {\n  text-align-last: flex-end;\n  margin-right: 2vw;\n}\n.title {\n  font-size: 20px;\n  color: #FF1E2D;\n  line-height: 23px;\n  margin-top: -25px;\n}\n.titleIco {\n  color: #046aaf;\n  line-height: 23px;\n}\n.btn-ini {\n  height: 57px;\n  top: 215px;\n  font-family: \"Mark OT\", sans-serif;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 21px;\n  color: #FF1E2D;\n  text-transform: initial;\n  background: #ffffff;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0);\n  border-radius: 28.5px;\n  margin-top: 40px;\n  margin-bottom: 35px;\n  border: 1px solid #ffffff;\n}\n.col-md-12 {\n  border-radius: 35px;\n  margin-bottom: -8px;\n  margin-top: -10px;\n  background-color: white;\n}\n.vl {\n  border-left: 1px solid #e7e7ef;\n  height: 197px;\n  position: absolute;\n  top: -18px;\n  left: 50%;\n}\n.modal-center-align {\n  justify-content: center;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n.contenedor {\n  display: flex;\n  flex-direction: column;\n}\n.icon-close {\n  display: flex;\n  justify-content: flex-end;\n}\n.icon-call {\n  margin-top: 20px;\n}\n.list-phones {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  color: #FF1E2D;\n  font-weight: 700;\n  line-height: 23px;\n  font-size: 25px;\n}\n.phones {\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  color: #FF1E2D;\n}\n.phones span {\n  padding-bottom: 10px;\n}\n.phones a {\n  color: #039ee1 !important;\n  margin-bottom: 5px;\n}\nhr {\n  width: 100%;\n  margin: 0;\n  padding-top: 10px;\n}\n.contenedor {\n  padding: 20px;\n  height: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXBob25lcy1jZW50ZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSxjQUFBO0FBaUNKO0FBOUJBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQWlDSjtBQTlCQTtFQUdJLGVBQUE7RUFDQSxjQ1pZO0VEYVosaUJBQUE7RUFDQSxpQkFBQTtBQStCSjtBQTVCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQStCSjtBQTVCQTtFQUVJLFlBQUE7RUFFQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDaENZO0VEaUNaLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0VBQ0EscUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUEyQko7QUF4QkE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQTJCSjtBQXhCQTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUEyQko7QUF4QkE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUEyQko7QUF4QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUEyQko7QUF4QkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUEyQko7QUF4QkE7RUFDSSxnQkFBQTtBQTJCSjtBQXhCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ2xGWTtFRG1GWixnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTJCSjtBQXhCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQzVGWTtBRHVIaEI7QUF4QkE7RUFDSSxvQkFBQTtBQTJCSjtBQXhCQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUEyQko7QUF4QkE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBMkJKO0FBeEJBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUEyQkoiLCJmaWxlIjoibW9kYWwtcGhvbmVzLWNlbnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3NcIjtcbi5jYW5jZWwge1xuICAgIGNvbG9yOiAjYThhNWE1O1xufVxuXG4uYnRuQ2xvc2Uge1xuICAgIHRleHQtYWxpZ24tbGFzdDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XG59XG5cbi50aXRsZSB7XG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xufVxuXG4udGl0bGVJY28ge1xuICAgIGNvbG9yOiAjMDQ2YWFmO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuXG4uYnRuLWluaSB7XG4gICAgLy93aWR0aDogMTkwcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIC8vbGVmdDogODIzcHg7XG4gICAgdG9wOiAyMTVweDtcbiAgICBmb250LWZhbWlseTogXCJNYXJrIE9UXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjguNXB4O1xuICAgIC8vbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xufVxuXG4uY29sLW1kLTEyIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi52bCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTdlN2VmO1xuICAgIGhlaWdodDogMTk3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE4cHg7XG4gICAgbGVmdDogNTAlO1xufVxuXG4ubW9kYWwtY2VudGVyLWFsaWduIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pY29uLWNsb3NlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pY29uLWNhbGwge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5saXN0LXBob25lcyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnBob25lcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5waG9uZXMgc3BhbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5waG9uZXMgYSB7XG4gICAgY29sb3I6ICMwMzllZTEgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmhyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMjMwcHg7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 68067:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/components/service-terms-modal/service-terms-modal.component.scss?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.modal-body-scroll {\n  max-height: 500px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UtdGVybXMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE3QkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFnQ0YiLCJmaWxlIjoic2VydmljZS10ZXJtcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3NcIjtcblxuLm1vZGFsLWJvZHktc2Nyb2xsIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuIiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 71047:
/*!****************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/service-solicitud.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n/* The switch - the box around the slider */\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n.switch {\n  margin: 8px;\n  position: relative;\n  display: inline-block;\n  width: 49px;\n  height: 20px;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput:checked + .slider {\n  background-color: #2196f3;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n.mt-20 {\n  margin-top: 20px;\n}\n.mt-35 {\n  margin-top: 35px;\n}\n.mt-50 {\n  margin-top: 50px;\n}\n.new-main-title2-blue {\n  font-style: normal;\n  font-size: 15px;\n  line-height: 20px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\n.new-sub-title-blue {\n  font-style: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #66182A;\n}\n.new-subtitle-opacity {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 22px;\n  color: #000000;\n  opacity: 0.4;\n}\n.new-input {\n  background: #f3f3f3;\n  position: static;\n  width: 250px;\n  height: 48px;\n  left: 0px;\n  top: 0px;\n  box-shadow: inset 0px -1px 0px;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n  padding: 15px;\n}\n.new-parrafo-gris-principal {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #4c4c4b;\n}\nsection {\n  align-self: center;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-label {\n  pointer-events: all !important;\n}\n.terms-and-conditions {\n  padding-top: 40px;\n}\n.service-card-container {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.service-card-container img {\n  height: 20px;\n  width: 20px;\n  margin-left: 15px;\n}\n.label-check {\n  margin-left: 10px;\n  color: #FF1E2D;\n  cursor: pointer;\n  align-content: center;\n  padding: 3px;\n}\ninput {\n  padding: 3px;\n  align-self: center;\n}\nion-item {\n  border: none !important;\n}\nion-row {\n  margin-bottom: 1px !important;\n}\nion-card-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\nion-card-subtitle {\n  font-size: 12px;\n}\n.title-terms {\n  font-family: \"Mark OT\", sans-serif;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2Utc29saWNpdHVkLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTdCQSwyQ0FBQTtBQUVBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQStCSjtBQTVCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBK0JKO0FBM0JBLCtCQUFBO0FBRUE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUE2Qko7QUF6QkEsZUFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7QUEyQko7QUF4QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQTJCSjtBQXhCQTtFQUNJLHlCQUFBO0FBMkJKO0FBeEJBO0VBQ0ksMkJBQUE7QUEyQko7QUF4QkE7RUFHSSwyQkFBQTtBQTJCSjtBQXZCQSxvQkFBQTtBQUVBO0VBQ0ksbUJBQUE7QUF5Qko7QUF0QkE7RUFDSSxrQkFBQTtBQXlCSjtBQXJCQSxnQ0FBQTtBQUVBOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQXVCSjtBQW5CQSxZQUFBO0FBRUE7RUFDSSwwQkFBQTtBQXFCSjtBQWxCQTtFQUNJLGdCQUFBO0FBcUJKO0FBbEJBO0VBQ0ksZ0JBQUE7QUFxQko7QUFsQkE7RUFDSSxnQkFBQTtBQXFCSjtBQWxCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQy9HWTtBRG9JaEI7QUFsQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDckhjO0FEMElsQjtBQWxCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQXFCSjtBQWxCQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFxQko7QUFsQkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXFCSjtBQWxCQTtFQUNJLGtCQUFBO0FBcUJKO0FBbEJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQXFCSjtBQWxCQTtFQUNJLDhCQUFBO0FBcUJKO0FBbEJBO0VBQ0ksaUJBQUE7QUFxQko7QUFsQkE7RUFFSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFvQko7QUFuQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBcUJSO0FBakJBO0VBQ0ksaUJBQUE7RUFDQSxjQzFMWTtFRDJMWixlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBb0JKO0FBakJBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBb0JKO0FBakJBO0VBQ0ksdUJBQUE7QUFvQko7QUFqQkE7RUFDSSw2QkFBQTtBQW9CSjtBQWpCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDaE5ZO0FEb09oQjtBQWpCQTtFQUNJLGVBQUE7QUFvQko7QUFqQkE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7QUFvQkoiLCJmaWxlIjoic2VydmljZS1zb2xpY2l0dWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuXG46cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufVxuXG4uc3dpdGNoIHtcbiAgICBtYXJnaW46IDhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0OXB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cblxuLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG5cblxuLyogVGhlIHNsaWRlciAqL1xuXG4uc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xufVxuXG5pbnB1dDpmb2N1cysuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XG59XG5cbmlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuXG4uc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5cbi8qIEZpcmVmb3ggKi9cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5tdC0yMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm10LTM1IHtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4ubXQtNTAge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5uZXctbWFpbi10aXRsZTItYmx1ZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5uZXctc3ViLXRpdGxlLWJsdWUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG59XG5cbi5uZXctc3VidGl0bGUtb3BhY2l0eSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG9wYWNpdHk6IDAuNDtcbn1cblxuLm5ldy1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5uZXctcGFycmFmby1ncmlzLXByaW5jaXBhbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGNvbG9yOiAjNGM0YzRiO1xufVxuXG5zZWN0aW9uIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XG59XG5cbi50ZXJtcy1hbmQtY29uZGl0aW9ucyB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5zZXJ2aWNlLWNhcmQtY29udGFpbmVyIHtcbiAgICAvL21hcmdpbi10b3A6IDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxufVxuXG4ubGFiZWwtY2hlY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDNweDtcbn1cblxuaW5wdXQge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGl0bGUtdGVybXMge1xuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBPVCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 18531:
/*!*************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/components/card-type/card-type-service.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-row class=\"ion-padding-top\">\n    <div class=\"col-md-12 col-6\">\n        <div class=\"card\" (click)=\"loadService()\" style=\"cursor: pointer;\">\n            <div class=\"col-img\">\n                <img src=\"{{imgRoute}}{{service.IconApp}}\" alt=\"Servicio\" />\n            </div>\n            <div class=\"col-text-name ion-padding-top d-flex ion-justify-content-center\">\n                <span>{{service.Name}}</span>\n            </div>\n            <!-- <div class=\"col-line\" *ngIf=\"service.Code != 02\">\n                <div class=\"vertical-line\"></div>\n            </div> -->\n            <div class=\"col-line\">\n                <div class=\"vertical-line\"></div>\n            </div>\n            <div class=\"col-info\">\n                <span class=\"col-info-text-header\">{{service.Title}}</span>\n                <span [ngClass]=\"service.Color.ColorClassPortalWeb\" *ngIf=\"service.Title !== 'Espera:'\">{{service.Waiting}}</span>\n                <span [ngClass]=\"service.Color.ColorClassPortalWeb\" *ngIf=\"service.Title == 'Espera:'\">{{service.Waiting}} min</span>\n            </div>\n        </div>\n    </div>\n</ion-row>";

/***/ }),

/***/ 29088:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/components/modal-phones-center/modal-phones-center.component.html?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"contenedor\">\n    <div class=\"icon-close\">\n        <a class=\"cancel\">\n            <img src=\"{{imgRoute}}icons/cancel.svg\" alt=\"Imagen\" (click)=\"cancel()\">\n        </a>\n    </div>\n    <div class=\"list-phones\">\n        <span>Línea médica</span>\n    </div>\n    <div class=\"phones\" *ngFor=\"let uphone of listPhoneNumbers.UPhoneses, let i = index\">\n        <hr *ngIf=\"i == 0\">\n        <span>{{ uphone.CityName }}</span>\n        <a [href]=\"'tel:' + item.Tel\" *ngFor=\"let item of uphone.Phones\">{{ item.Tel }}</a>\n        <hr>\n    </div>\n</div>";

/***/ }),

/***/ 69403:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/components/service-terms-modal/service-terms-modal.component.html?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-body\">\n\n    <div class=\"container\">\n\n        <div class=\"row pt-2\">\n\n            <div class=\"d-flex column-close ion-justify-content-end\">\n                <button type=\"button\" (click)=\"closeModal()\" class=\"btn-close\" aria-label=\"Close\">\n        </button>\n            </div>\n\n        </div>\n\n        <div class=\"row pb-4\">\n\n            <div class=\"d-flex column-logo ion-justify-content-center\">\n                <img src=\"{{imageRoute}}\">\n            </div>\n\n        </div>\n\n        <div class=\"modal-body-scroll m-1\">\n            <div [innerHTML]=\"texto\"></div>\n        </div>\n\n    </div>\n\n</div>";

/***/ }),

/***/ 53613:
/*!****************************************************************************************!*\
  !*** ./src/app/portal/moduls/service-solicitud/service-solicitud.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Solicitar Servicio</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{'PORTAL.SERVICE-SOLICITUDE.titleServiceSolicitude' | translate}}</ion-label>\n    </ion-row>\n\n    <div *ngIf=\"actualStep==1\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>Te guiaremos en el proceso de seleccionar un servicio para vos o un familiar</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"title-subtitle\">¿Para quién desea solicitar el servicio?</ion-label>\n        </ion-row>\n\n        <ion-row class=\"d-flex ion-justify-content-center\">\n\n            <ion-col sizeLg>\n\n                <div *ngFor=\"let person of persons\">\n\n                    <ion-card (click)=\"selectionPerson(person);\" style=\"cursor: pointer;\">\n                        <ion-card-header>\n                            <ion-card-title>{{person.FullNames}}</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <ion-row>\n                                <ion-label>Edad : {{ person.BirthDate | birthday }} años</ion-label>\n                            </ion-row>\n                            <ion-row>\n                                <ion-label>{{person.DocumentTypeShort}} : {{person.Document}}</ion-label>\n                            </ion-row>\n                            <ion-row>\n                                <ion-label *ngIf=\"person.CellPhone\">Celular : {{person.CellPhone}}</ion-label>\n                            </ion-row>\n                            <ion-row>\n                                <ion-label *ngIf=\"person.Email\">Correo : {{person.Email}}</ion-label>\n                            </ion-row>\n                        </ion-card-content>\n                    </ion-card>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <div *ngIf=\"actualStep==2\">\n\n        <ion-row class=\"ion-padding-top\" display=\"flex\" flex-direction=\"row\" justifiy-content=\"flex-end\">\n            <ion-label (click)=\"setLastStep();\">\n                {{ \"PORTAL.NEARBY-CLINICS-DETAIL.BackToList\" | translate}}</ion-label>\n        </ion-row>\n\n        <hr/>\n\n        <div *ngIf=\"patient.IsTitular\">\n            <ion-row class=\"ion-padding-top\">\n                <ion-label class=\"new-main-title2-blue\">{{patient.FullNameTitular}}</ion-label>\n            </ion-row>\n        </div>\n\n        <div *ngIf=\"!patient.IsTitular\">\n            <ion-row class=\"ion-padding-top\">\n                <ion-label class=\"new-sub-title-blue\">Titular : {{patient.FullNameTitular}}</ion-label>\n            </ion-row>\n            <ion-row class=\"ion-padding-top\">\n                <ion-label class=\"new-main-title2-blue\">Paciente : {{patient.FullNames}}</ion-label>\n            </ion-row>\n        </div>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>¿Tu número de contacto es correcto?</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-item class=\"ion-item-form-input\">\n                <form [formGroup]=\"form\">\n                    <ion-label position=\"floating\">Celular</ion-label>\n                    <ion-input type=\"text\" formControlName=\"cellPhone\" (ngModelChange)=\"validateCellNumber()\" (keypress)=\"numberOnly($event)\" [maxlength]=\"maxLength\">\n                    </ion-input>\n                </form>\n            </ion-item>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"12\">\n                <ion-label class=\"ion-validator\" *ngIf=\"this.form.controls.cellPhone.hasError('invalidNumber')\">{{\"PORTAL.SELECT-PATIENT.invalidCellPhone\" | translate}}</ion-label>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>¿Es el mismo número para contactar al paciente?</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>No</ion-label>\n            <ion-label class=\"switch\">\n                <ion-toggle class=\"p-0\" [checked]=\"dontShowPatientNumber\" (ionChange)=\"changeSwich()\"></ion-toggle>\n            </ion-label>\n            <ion-label>Si</ion-label>\n        </ion-row>\n\n        <div *ngIf=\"!dontShowPatientNumber\" class=\"ion-padding-top\">\n            <form [formGroup]=\"form\">\n                <ion-row>\n                    <ion-col size=\"12\">\n                        <ion-item class=\"ion-item-form-input\">\n                            <ion-label position=\"floating\">Teléfono paciente</ion-label>\n                            <ion-input type=\"text\" formControlName=\"cellPhonePatient\" (ngModelChange)=\"validateCellNumber()\" (keypress)=\"numberOnly($event)\" [maxlength]=\"maxLength\"></ion-input>\n                            <ion-col size=\"12\">\n                                <ion-label class=\"ion-validator\" *ngIf=\"this.form.controls.cellPhonePatient.hasError('invalidNumber') && this.form.controls.cellPhonePatient.dirty\">{{\"PORTAL.SELECT-PATIENT.invalidCellPhone\" | translate}}</ion-label>\n                            </ion-col>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </form>\n        </div>\n\n    </div>\n\n    <div *ngIf=\"actualStep==3\">\n\n        <ion-row class=\"ion-padding-top\" display=\"flex\" flex-direction=\"row\" justifiy-content=\"flex-end\">\n            <ion-label (click)=\"setLastStep();\">\n                {{ \"PORTAL.NEARBY-CLINICS-DETAIL.BackToList\" | translate}}</ion-label>\n        </ion-row>\n\n        <hr/>\n\n        <div *ngIf=\"planServices\">\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-col size=\"12\">\n                    <ion-label>¿Cómo desea ser atendido?</ion-label>\n                </ion-col>\n            </ion-row>\n\n            <div class=\"row\" *ngIf=\"planServices\" (click)=\"checkConsentimiento();\">\n                <div class=\"row\" [ngClass]=\"{'div-disabled': !checkConsentimientos}\">\n                    <div class=\"\">\n                        <div *ngFor=\"let item of planServices\">\n                            <div class=\"\">\n                                <app-card-type [acceptConsent]=\"checkConsentimientos\" [service]=\"item\"></app-card-type>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- <ion-row class=\"ion-padding-top\" (click)=\"checkConsentimiento();\">\n                <ion-col size=\"12\">\n                    <div *ngFor=\"let item of planServices\">\n                        <div class=\"service-card-container\">\n                            <app-card-type [service]=\"item\" [disabled]=\"!(checkConsentimientos && checkTerminos)\">\n                            </app-card-type>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row> -->\n\n            <ion-row class=\"ion-padding-top\"></ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-col size=\"2\">\n                    <ion-checkbox [(ngModel)]=\"checkTerminos\"></ion-checkbox>\n                </ion-col>\n                <ion-col size=\"10\">\n                    <ion-label class=\"title-terms\" (click)=\"openTerminos()\">{{\"PORTAL.SERVICE-SOLICITUDE.CheckTerminos\" | translate}}</ion-label>\n                </ion-col>\n            </ion-row>\n\n            <!-- <ion-row class=\"ion-padding-top\">\n                <ion-col size=\"2\">\n                    <ion-checkbox [(ngModel)]=\"checkConsentimientos\"></ion-checkbox>\n                </ion-col>\n                <ion-col size=\"10\">\n                    <ion-label class=\"title-terms\" (click)=\"openConsentimientos()\">{{\"PORTAL.SERVICE-SOLICITUDE.CheckConsentimientos\" | translate}}</ion-label>\n                </ion-col>\n            </ion-row> -->\n\n        </div>\n\n    </div>\n\n    <ion-row *ngIf=\"actualStep==2\" class=\"ion-paddingt-top\">\n        <ion-col class=\"ion-padding-top\">\n            <app-button [configuration]=\"continuarButton\" (click)=\"setNextStep()\" [disabled]=\"buttonContinuarDisabled\"></app-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"actualStep==1\" class=\"ion-padding-top\">\n        <hr/>\n        <ion-label class=\"information\">Para solicitar atención médica domiciliaria, el paciente debe estar afiliado, para mayor información sobre nuestros planes haz clic aquí.</ion-label>\n    </ion-row>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_service-solicitud_service-solicitud_module_ts.js.map