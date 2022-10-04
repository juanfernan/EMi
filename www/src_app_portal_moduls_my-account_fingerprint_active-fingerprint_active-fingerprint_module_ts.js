"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_my-account_fingerprint_active-fingerprint_active-fingerprint_module_ts"],{

/***/ 77139:
/*!**************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/active-fingerprint/active-fingerprint-routing.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveFingerprintPageRoutingModule": () => (/* binding */ ActiveFingerprintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _active_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active-fingerprint.page */ 23650);




const routes = [
    {
        path: '',
        component: _active_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__.ActiveFingerprintPage
    }
];
let ActiveFingerprintPageRoutingModule = class ActiveFingerprintPageRoutingModule {
};
ActiveFingerprintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActiveFingerprintPageRoutingModule);



/***/ }),

/***/ 20310:
/*!******************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/active-fingerprint/active-fingerprint.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveFingerprintPageModule": () => (/* binding */ ActiveFingerprintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _active_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active-fingerprint-routing.module */ 77139);
/* harmony import */ var _active_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-fingerprint.page */ 23650);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);









let ActiveFingerprintPageModule = class ActiveFingerprintPageModule {
};
ActiveFingerprintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _active_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActiveFingerprintPageRoutingModule
        ],
        declarations: [
            _active_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__.ActiveFingerprintPage
        ],
        providers: [
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__.FingerprintAIO
        ]
    })
], ActiveFingerprintPageModule);



/***/ }),

/***/ 23650:
/*!****************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/active-fingerprint/active-fingerprint.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveFingerprintPage": () => (/* binding */ ActiveFingerprintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _active_fingerprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active-fingerprint.page.html?ngResource */ 56524);
/* harmony import */ var _active_fingerprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-fingerprint.page.scss?ngResource */ 16561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! capacitor-native-biometric-auth */ 95048);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);












let ActiveFingerprintPage = class ActiveFingerprintPage {
    constructor(bsModalService, router, translate) {
        this.bsModalService = bsModalService;
        this.router = router;
        this.translate = translate;
        this.activateOrDeactivateButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.configurationButtonCancel = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.getData();
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imagesRoute;
        this.translate.get('PORTAL.FINGERPRINT.CloseButton').subscribe(resp => {
            this.buttonCancelText = resp;
        });
    }
    ngOnInit() {
        this.activateOrDeactivateButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Primary;
        this.activateOrDeactivateButton.width = '250px';
        this.configurationButtonCancel.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Tertiary;
        this.configurationButtonCancel.text = this.buttonCancelText;
        this.configurationButtonCancel.width = '250px';
    }
    getData() {
        capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_5__.NativeBiometric.getCredentials({
            server: "www.example.com",
        }).then((result) => {
            this.translate.get('PORTAL.FINGERPRINT.DeactivateFinger').subscribe(resp => {
                this.activateOrDeactivateButton.text = resp;
            });
            this.email = result.username;
            this.password = result.password;
        }, (result) => {
            this.translate.get('PORTAL.FINGERPRINT.ActivateFinger').subscribe(resp => {
                this.activateOrDeactivateButton.text = resp;
            });
            this.email = result.username;
            this.password = result.password;
        });
    }
    activateOrDeactivate() {
        if (this.email != undefined) {
            this.deleteCredentials();
        }
        else {
            this.saveCredentials();
        }
        this.getData();
    }
    // Save user's credentials
    saveCredentials() {
        capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_5__.NativeBiometric.setCredentials({
            username: localStorage.getItem("userName"),
            password: localStorage.getItem("passwordUser"),
            server: "www.example.com",
        })
            .then((credentials) => {
            // Authenticate using biometrics before logging the user in
            capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_5__.NativeBiometric.verifyIdentity({
                reason: "For easy log in",
                title: "Iniciar Sesión",
                subtitle: "Falck",
                description: "",
                retries: 5,
            }).then(() => {
                this.showActivateMessageModal();
            }, () => {
                capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_5__.NativeBiometric.deleteCredentials({
                    server: "www.example.com",
                });
                this.email = undefined,
                    this.translate.get('PORTAL.FINGERPRINT.ActivateFinger').subscribe(resp => {
                        this.activateOrDeactivateButton.text = resp;
                    });
            });
        });
        this.getData();
    }
    // Delete user's credentials
    deleteCredentials() {
        this.getData();
        capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_5__.NativeBiometric.deleteCredentials({
            server: "www.example.com",
        })
            .then(() => this.showDeactivateMessageModal());
    }
    showActivateMessageModal() {
        this.getData();
        const initialState = {
            initialState: {
                iconHeader: 'alert-check.svg',
                subTitle: 'Activado',
                description: 'Inicio de sesión por huella habilitada ',
                onlyButtonConfirm: true,
                textButton: 'Aceptar',
                textButton1: '',
                textButton2: '',
                visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 1
        };
        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_6__.InformativeModalComponent, initialState);
        this.bsModalRef.content.onClose.subscribe(() => {
        });
    }
    showDeactivateMessageModal() {
        const initialState = {
            initialState: {
                iconHeader: 'alert-circle.svg',
                subTitle: 'Desactivado',
                description: 'Inicio de sesión por huella no habilitada ',
                onlyButtonConfirm: true,
                textButton: 'Aceptar',
                textButton1: '',
                textButton2: '',
                visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 1
        };
        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_6__.InformativeModalComponent, initialState);
        this.bsModalRef.content.onClose.subscribe(() => {
        });
    }
    cancel() {
        this.router.navigate(['portal/home'], { replaceUrl: true });
    }
};
ActiveFingerprintPage.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService }
];
ActiveFingerprintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-active-fingerprint',
        template: _active_fingerprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_active_fingerprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActiveFingerprintPage);



/***/ }),

/***/ 16561:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/active-fingerprint/active-fingerprint.page.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.container-fingerprint {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.logoProperties {\n  width: 120px;\n  margin-bottom: 40px;\n}\n.iconProperties {\n  width: 110px;\n  margin-bottom: 30px;\n}\n.subtittle-fingerprint {\n  margin: 0 40px 35px;\n  text-align: center;\n}\n.padding-header {\n  padding: 45px 0;\n}\n.tittle-fingerprint {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 35px;\n  color: #FF1E2D;\n}\n.btn-active-fingerprint {\n  width: 250px;\n  height: 40px;\n  border: 1px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 25px;\n  font-weight: 500;\n  line-height: 14px;\n  margin: 0 auto;\n  background-color: #FF1E2D;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZS1maW5nZXJwcmludC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE3QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQWdDSjtBQTdCQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQWdDSjtBQTdCQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQWdDSjtBQTdCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFnQ0o7QUE1QkE7RUFDSSxlQUFBO0FBK0JKO0FBNUJBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQzlCWTtBRDZEaEI7QUE1QkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkM1Q1k7RUQ2Q1osWUFBQTtBQStCSiIsImZpbGUiOiJhY3RpdmUtZmluZ2VycHJpbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcblxuLmNvbnRhaW5lci1maW5nZXJwcmludCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nb1Byb3BlcnRpZXMge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uaWNvblByb3BlcnRpZXMge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc3VidGl0dGxlLWZpbmdlcnByaW50IHtcbiAgICBtYXJnaW46IDAgNDBweCAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4ucGFkZGluZy1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDQ1cHggMDtcbn1cblxuLnRpdHRsZS1maW5nZXJwcmludCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLmJ0bi1hY3RpdmUtZmluZ2VycHJpbnR7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 56524:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/fingerprint/active-fingerprint/active-fingerprint.page.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid class=\"padding-header container-fingerprint\">\n\n  <ion-row>\n      <ion-col class=\"ion-content-center\" size=\"12\">\n          <img class=\"logoProperties\" src=\"{{imgRoute}}logo-emi-1.svg\">\n      </ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col class=\"ion-content-center\" size=\"12\">\n          <img class=\"iconProperties\" src=\"{{imgRoute}}icons/Cerrar-sesion.svg\">\n      </ion-col>\n  </ion-row>\n\n  <ion-row >\n      <ion-col class=\"ion-content-center fingerprint\" size=\"12\">\n          <span class=\"tittle-fingerprint\">{{'PORTAL.FINGERPRINT.Title' | translate}}</span>\n      </ion-col>\n  </ion-row>\n\n  <ion-row >\n      <ion-col class=\"ion-content-center fingerprint\" size=\"12\">\n          <span class=\"subtittle-fingerprint\">{{'PORTAL.FINGERPRINT.Subtitle' | translate}}</span>\n      </ion-col>\n  </ion-row>\n\n  <ion-row >\n      <ion-col class=\"ion-content-center fingerprint\" size=\"12\">\n          <app-button [configuration]=\"activateOrDeactivateButton\" (click)=\"activateOrDeactivate()\"></app-button>\n      </ion-col>\n  </ion-row>\n\n  <ion-row >\n      <ion-col class=\"ion-content-center fingerprint\" size=\"12\">\n          <app-button [configuration]=\"configurationButtonCancel\" (click)=\"cancel()\"></app-button>\n      </ion-col>\n  </ion-row>\n \n\n</ion-grid>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_my-account_fingerprint_active-fingerprint_active-fingerprint_module_ts.js.map