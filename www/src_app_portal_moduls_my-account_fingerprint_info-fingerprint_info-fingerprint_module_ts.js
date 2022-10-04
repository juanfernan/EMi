"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_my-account_fingerprint_info-fingerprint_info-fingerprint_module_ts"],{

/***/ 53309:
/*!**********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/info-fingerprint/info-fingerprint-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoFingerprintPageRoutingModule": () => (/* binding */ InfoFingerprintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _info_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-fingerprint.page */ 14841);




const routes = [
    {
        path: '',
        component: _info_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__.InfoFingerprintPage
    }
];
let InfoFingerprintPageRoutingModule = class InfoFingerprintPageRoutingModule {
};
InfoFingerprintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InfoFingerprintPageRoutingModule);



/***/ }),

/***/ 5240:
/*!**************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/info-fingerprint/info-fingerprint.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoFingerprintPageModule": () => (/* binding */ InfoFingerprintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _info_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-fingerprint-routing.module */ 53309);
/* harmony import */ var _info_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-fingerprint.page */ 14841);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let InfoFingerprintPageModule = class InfoFingerprintPageModule {
};
InfoFingerprintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _info_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__.InfoFingerprintPageRoutingModule
        ],
        declarations: [_info_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__.InfoFingerprintPage]
    })
], InfoFingerprintPageModule);



/***/ }),

/***/ 14841:
/*!************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/info-fingerprint/info-fingerprint.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoFingerprintPage": () => (/* binding */ InfoFingerprintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _info_fingerprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-fingerprint.page.html?ngResource */ 36859);
/* harmony import */ var _info_fingerprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-fingerprint.page.scss?ngResource */ 82931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);










let InfoFingerprintPage = class InfoFingerprintPage {
    constructor(router, platform, translate) {
        this.router = router;
        this.platform = platform;
        this.translate = translate;
        this.configurationButtonAccept = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imagesRoute;
        this.translate.get('PORTAL.FINGERPRINT.AcceptButton').subscribe(resp => {
            this.buttonAcceptText = resp;
        });
    }
    ngOnInit() {
        this.configurationButtonAccept.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Primary;
        this.configurationButtonAccept.text = "Aceptar";
        this.configurationButtonAccept.width = '250px';
    }
    back() {
        this.router.navigate(['portal/home']);
    }
};
InfoFingerprintPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
InfoFingerprintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-info-fingerprint',
        template: _info_fingerprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_info_fingerprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InfoFingerprintPage);



/***/ }),

/***/ 82931:
/*!*************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/info-fingerprint/info-fingerprint.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.container-fingerprint {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.logoProperties {\n  width: 120px;\n  margin-bottom: 40px;\n}\n.iconProperties {\n  width: 110px;\n  margin-bottom: 30px;\n}\n.tittle-fingerprint {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 35px;\n  color: #FF1E2D;\n}\n.subtittle-fingerprint {\n  margin: 0 40px 10px;\n  text-align: center;\n}\n.asociateinfo-fingerprint {\n  margin: 0 30px 30px;\n  text-align: center;\n}\n.padding-header {\n  padding: 45px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tZmluZ2VycHJpbnQucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBN0JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFnQ0o7QUE3QkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFnQ0o7QUE3QkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFnQ0o7QUE3QkE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDcEJZO0FEb0RoQjtBQTVCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUErQko7QUE1QkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBK0JKO0FBNUJBO0VBQ0ksZUFBQTtBQStCSiIsImZpbGUiOiJpbmZvLWZpbmdlcnByaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzcyc7XG5cbi5jb250YWluZXItZmluZ2VycHJpbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ29Qcm9wZXJ0aWVzIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmljb25Qcm9wZXJ0aWVzIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRpdHRsZS1maW5nZXJwcmludCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuXG4uc3VidGl0dGxlLWZpbmdlcnByaW50IHtcbiAgICBtYXJnaW46IDAgNDBweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFzb2NpYXRlaW5mby1maW5nZXJwcmludCB7XG4gICAgbWFyZ2luOiAwIDMwcHggMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYWRkaW5nLWhlYWRlciB7XG4gICAgcGFkZGluZzogNDVweCAwO1xufVxuXG5cbiIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 36859:
/*!*************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/info-fingerprint/info-fingerprint.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid class=\"padding-header container-fingerprint\">\n\n  <ion-row>\n      <ion-col class=\"ion-content-center\" size=\"12\">\n          <img class=\"logoProperties\" src=\"{{imgRoute}}logo-emi-1.svg\">\n      </ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col class=\"ion-content-center\" size=\"12\">\n          <img class=\"iconProperties\" src=\"{{imgRoute}}icons/icon-onboarding-2.svg\">\n      </ion-col>\n  </ion-row>\n\n  <ion-row >\n      <ion-col class=\"ion-content-center fingerprint\" size=\"12\">\n          <span class=\"tittle-fingerprint\">{{'PORTAL.FINGERPRINT.Title' | translate}}</span>\n      </ion-col>\n  </ion-row>\n\n  <ion-row >\n      <ion-col class=\"ion-content-center fingerprint\" size=\"12\">\n          <span class=\"subtittle-fingerprint\">{{'PORTAL.FINGERPRINT.Subtitle' | translate}}</span>\n      </ion-col>\n  </ion-row>\n\n  <ion-row >\n      <ion-col class=\"ion-content-center fingerprint\" size=\"12\">\n          <span class=\"asociateinfo-fingerprint\">{{'PORTAL.FINGERPRINT.AsociateInfo' | translate}}</span>\n      </ion-col>\n  </ion-row>\n\n  \n  <ion-row >\n      <ion-col class=\"ion-content-center fingerprint\" size=\"12\">\n          <app-button [configuration]=\"configurationButtonAccept\" (click)=\"back()\"></app-button>\n      </ion-col>\n  </ion-row>\n \n\n</ion-grid>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_my-account_fingerprint_info-fingerprint_info-fingerprint_module_ts.js.map