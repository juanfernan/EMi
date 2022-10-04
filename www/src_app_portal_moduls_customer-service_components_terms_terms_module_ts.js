"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_customer-service_components_terms_terms_module_ts"],{

/***/ 72577:
/*!*****************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/terms/terms-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsPageRoutingModule": () => (/* binding */ TermsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.page */ 2371);




const routes = [
    {
        path: '',
        component: _terms_page__WEBPACK_IMPORTED_MODULE_0__.TermsPage
    }
];
let TermsPageRoutingModule = class TermsPageRoutingModule {
};
TermsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsPageRoutingModule);



/***/ }),

/***/ 17765:
/*!*********************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/terms/terms.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsPageModule": () => (/* binding */ TermsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _terms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-routing.module */ 72577);
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms.page */ 2371);







let TermsPageModule = class TermsPageModule {
};
TermsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _terms_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsPageRoutingModule
        ],
        declarations: [_terms_page__WEBPACK_IMPORTED_MODULE_1__.TermsPage]
    })
], TermsPageModule);



/***/ }),

/***/ 2371:
/*!*******************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/terms/terms.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsPage": () => (/* binding */ TermsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _terms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.page.html?ngResource */ 3651);
/* harmony import */ var _terms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms.page.scss?ngResource */ 10565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_public_services_terms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/services/terms.service */ 4229);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);








let TermsPage = class TermsPage {
    constructor(urlDataService, bsModalService, termsService) {
        this.urlDataService = urlDataService;
        this.bsModalService = bsModalService;
        this.termsService = termsService;
        this.urlDataService.setHeaderNavPortal(['Servicios al Cliente', 'Términos y condiciones de uso']);
    }
    ngOnInit() {
        let roleType = localStorage.getItem("roleType");
        this.tagCode = roleType != "2" ? "TYCC" : "TYCE";
        this.getTerms();
    }
    getTerms() {
        this.termsService
            .getLegalContent(this.tagCode)
            .subscribe(result => {
            this.htmlString = result.LegalContent.Content;
        }, error => {
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
        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_3__.InformativeModalComponent, initialState);
    }
};
TermsPage.ctorParameters = () => [
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_4__.UrlDataService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService },
    { type: src_app_public_services_terms_service__WEBPACK_IMPORTED_MODULE_2__.TermsService }
];
TermsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-terms',
        template: _terms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_terms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsPage);



/***/ }),

/***/ 10565:
/*!********************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/terms/terms.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n\nion-item {\n  border: none !important;\n}\n\n.body-content-term {\n  padding: 60px 115px 60px 115px;\n  background-color: #f0f0f0;\n}\n\n@media only screen and (max-width: 768px) {\n  .body-content-term {\n    padding: 20px 10px 20px 10px;\n  }\n  .breadcrumb > .active {\n    padding-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksNEJBQUE7RUFDTjtFQUNFO0lBQ0ksaUJBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InRlcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ01hcmsgT1QnLCBzYW5zLXNlcmlmO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ib2R5LWNvbnRlbnQtdGVybSB7XG4gICAgcGFkZGluZzogNjBweCAxMTVweCA2MHB4IDExNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuYm9keS1jb250ZW50LXRlcm0ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xuICAgIH1cbiAgICAuYnJlYWRjcnVtYj4uYWN0aXZlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 3651:
/*!********************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/terms/terms.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Términos y condiciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"emi-emiterminos ion-padding-top\">\n        <div data-spy=\"scroll\">\n            <div class=\"body-content-term\">\n                <div [innerHTML]=\"htmlString\"></div>\n            </div>\n        </div>\n    </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_customer-service_components_terms_terms_module_ts.js.map