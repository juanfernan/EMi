"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_home_home_module_ts"],{

/***/ 50881:
/*!****************************************************************************!*\
  !*** ./src/app/portal/components/modal-call/services/modalcall.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalcallService": () => (/* binding */ ModalcallService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let ModalcallService = class ModalcallService {
    constructor(http) {
        this.http = http;
    }
    getContactPhones() {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/DataLists/GetContactPhones`, null);
    }
};
ModalcallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ModalcallService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ModalcallService);



/***/ }),

/***/ 91122:
/*!*****************************************************************************!*\
  !*** ./src/app/portal/moduls/home/components/call-modal/call-modal.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallModalPage": () => (/* binding */ CallModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _call_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call-modal.page.html?ngResource */ 92116);
/* harmony import */ var _call_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-modal.page.scss?ngResource */ 33525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_portal_components_modal_call_services_modalcall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portal/components/modal-call/services/modalcall.service */ 50881);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);









let CallModalPage = class CallModalPage {
    constructor(translate, modalcallService) {
        var _a, _b, _c, _d;
        this.modalcallService = modalcallService;
        this.textButton = "Cerrar";
        this.configurationButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.solicitarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.serviciosButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.numbersArrayCustomerService = [];
        this.numbersArrayMedicalLine = [];
        this.numbersArraySpecialist = [];
        this.translate = translate;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagesRoute;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.country;
        this.dataUser = {
            Email: localStorage.getItem("userName"),
            middleName: localStorage.getItem("NameOne"),
            FullName: `${(_a = localStorage.getItem('NameOne')) !== null && _a !== void 0 ? _a : ''} ${(_b = localStorage.getItem('NameTwo')) !== null && _b !== void 0 ? _b : ''} ${(_c = localStorage.getItem('LastNameOne')) !== null && _c !== void 0 ? _c : ''} ${(_d = localStorage.getItem('LastNameTwo')) !== null && _d !== void 0 ? _d : ''}`
        };
        this.middleName = this.dataUser.middleName;
        this.loadNumber();
        if (this.numbers && this.country === 'co') {
            this.phoneNumbersArray1 = new Array();
            this.phoneNumbersArray2 = new Array();
            var countNumbers = this.numbers.length;
            var itemsColumns = Number(countNumbers / 2);
            for (var i = 0; i < this.numbers.length; i++) {
                if (i < itemsColumns) {
                    this.phoneNumbersArray1.push(this.numbers[i]);
                }
                else {
                    this.phoneNumbersArray2.push(this.numbers[i]);
                }
            }
        }
    }
    ngOnInit() {
        this.configurationButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Primary;
        this.configurationButton.text = this.textButton;
    }
    loadNumber() {
        this.numbersArrayCustomerService = new Array();
        this.numbersArrayMedicalLine = new Array();
        this.numbersArraySpecialist = new Array();
        this.modalcallService.getContactPhones()
            .subscribe(result => {
            if (result.StatusCode === 0) {
                this.resultNumber = result.DataList;
                for (let element of this.resultNumber) {
                    if (element.Category === "1") {
                        this.numbersArrayCustomerService.push(element);
                    }
                    if (element.Category === "2") {
                        this.numbersArrayMedicalLine.push(element);
                    }
                    if (element.Category === "3") {
                        this.numbersArraySpecialist.push(element);
                    }
                }
            }
        }, error => console.log(error));
    }
    callCustomerService() {
        this.translate.get('ADMIN.TitleCallCustomerService').subscribe(title => {
            this.titleCall = title;
        });
        this.translate.get('ADMIN.MsgCallCustomerService').subscribe(message => {
            this.messageCall = message;
        });
    }
    callMedicalLine() {
        this.translate.get('ADMIN.TitleCallMedicalLine').subscribe(title => {
            this.titleCall = title;
        });
        this.translate.get("ADMIN.MsgCallMedicalLine").subscribe(message => {
            this.messageCall = message;
        });
    }
    callSpecialist() {
        console.log("Especialista");
        this.titleCall = "Atencion medica";
        /*
            this.bsModalRef = this.generateCallModal(
          "QUIERO AFILIARME",
          "A continuación encontrarás las líneas telefónicas que tenemos a tu disposición para afiliarte.",
          this.numbersArraySpecialist);
      */
    }
};
CallModalPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: src_app_portal_components_modal_call_services_modalcall_service__WEBPACK_IMPORTED_MODULE_2__.ModalcallService }
];
CallModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-call-modal',
        template: _call_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_call_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CallModalPage);



/***/ }),

/***/ 7073:
/*!***********************************************************!*\
  !*** ./src/app/portal/moduls/home/home-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 13634);





const routes = [
    {
        path: '',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 35062:
/*!***************************************************!*\
  !*** ./src/app/portal/moduls/home/home.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 7073);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 13634);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _components_call_modal_call_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/call-modal/call-modal.page */ 91122);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, _components_call_modal_call_modal_page__WEBPACK_IMPORTED_MODULE_3__.CallModalPage]
    })
], HomePageModule);



/***/ }),

/***/ 13634:
/*!*************************************************!*\
  !*** ./src/app/portal/moduls/home/home.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 79308);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 15206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);








let HomePage = class HomePage {
    constructor(router) {
        var _a, _b, _c, _d;
        this.router = router;
        this.textButton = "Cerrar";
        this.configurationButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.solicitarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.serviciosButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.loadedScriptChat = false;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.country;
        // this.serviciosButton.buttonType = ButtonType.Secundary;
        // this.serviciosButton.text = "Servicios en Centros Médicos";
        // this.serviciosButton.fontsSize = "18px";
        // this.solicitarButton.buttonType = ButtonType.Primary;
        // this.solicitarButton.text = "Solicitar Servicio";
        // this.solicitarButton.fontsSize = "18px";
        this.configurationButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Primary;
        this.configurationButton.text = this.textButton;
        this.dataUser = {
            Email: localStorage.getItem("userName"),
            middleName: localStorage.getItem("NameOne"),
            FullName: `${(_a = localStorage.getItem('NameOne')) !== null && _a !== void 0 ? _a : ''} ${(_b = localStorage.getItem('NameTwo')) !== null && _b !== void 0 ? _b : ''} ${(_c = localStorage.getItem('LastNameOne')) !== null && _c !== void 0 ? _c : ''} ${(_d = localStorage.getItem('LastNameTwo')) !== null && _d !== void 0 ? _d : ''}`
        };
        this.middleName = this.dataUser.middleName;
    }
    ngOnInit() {
        let element = document.getElementById("frameChatWolkvox");
        element ? element.remove() : null;
        //let e = localStorage.getItem('loadedScriptChat');    
        //this.loadScriptChat()
    }
    ngOnDestroy() {
        this.mobile = this.getDeviceAccess();
        if (!this.mobile)
            this.hiddenChatScript();
    }
    clickMyHealth(event) {
        this.router.navigate(['portal/myhealth/scheduledservices']);
    }
    clickCoordinations(event) {
        this.router.navigate(['portal/admin/coordinations']);
    }
    clickClinics(event) {
        this.router.navigate(['portal/admin/clinics']);
    }
    clicMyData(event) {
        this.router.navigate(['portal/my-account/my-data']);
    }
    finger(event) {
        this.router.navigate(['portal/my-account/fingerprint']);
    }
    getBase64(text) {
        if (text != null) {
            return btoa(text);
        }
        else {
            return '';
        }
    }
    loadScriptChat() {
        if (this.country == 'co') {
            this.mobile = this.getDeviceAccess();
            if (!this.mobile) {
                // let userName = this.getBase64(localStorage.getItem('NameOne') + " " + localStorage.getItem('LastNameOne'));
                // let cellPhone = this.getBase64(localStorage.getItem('CellPhone'));
                // let email = this.getBase64(localStorage.getItem('userName'));
                // let comment = this.getBase64("Sin comentarios.");
                // (cellPhone === "") ? cellPhone = this.getBase64("123") : "";
                // (email === "") ? email = this.getBase64("email-default") : "";
                // this.loadScriptColombia(userName, cellPhone, email, comment);
                this.loadScriptColombia("", "", "", "");
            }
        }
        else {
            let userName = this.getBase64(localStorage.getItem('NameOne') + " " + localStorage.getItem('LastNameOne'));
            let cellPhone = this.getBase64(localStorage.getItem('CellPhone'));
            let email = this.getBase64(localStorage.getItem('userName'));
            let comment = this.getBase64("Sin comentarios.");
            (cellPhone === "") ? cellPhone = this.getBase64("123") : "";
            (email === "") ? email = this.getBase64("email-default") : "";
            this.loadScriptUruguay(userName, cellPhone, email, comment);
        }
    }
    getDeviceAccess() {
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return isMobile;
    }
    loadScriptColombia(_name, _document, _email, _comment) {
        localStorage.setItem("loadedScriptChat", "true");
    }
    loadScriptUruguay(_name, _document, _email, _comment) {
        let chatScript = document.createElement("script");
        chatScript.type = "text/javascript";
        chatScript.async = true;
        chatScript.src = "https://chat01.wolkvox.com/chat/?prodId=d2ItZ3J1cG8tZW1pLjcxMQ==&txt1=" + _name + "&txt2=" + _document + "&txt3=" + _email + "&txt4=" + _comment;
        let test = document.getElementById("conten2");
        test.appendChild(chatScript);
        localStorage.setItem("loadedScriptChat", "true");
    }
    showChatScript() {
        let element = document.getElementById("frameChatWolkvox");
        if (element)
            element.style.display = "";
    }
    hiddenChatScript() {
        let element = document.getElementById("frameChatWolkvox");
        if (element)
            element.style.display = "none";
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 33525:
/*!******************************************************************************************!*\
  !*** ./src/app/portal/moduls/home/components/call-modal/call-modal.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  --background: none;\n  background-image: url(\"/assets/uy/images/bg_home.jpg\");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nion-card {\n  min-height: 150px;\n  min-width: 150px;\n  text-align: center;\n  font-size: 12px;\n}\nion-grid {\n  --ion-grid-padding: 0px;\n}\nion-grid ion-row {\n  padding: 0px;\n}\nion-grid ion-col {\n  padding: 0px;\n}\nion-grid .col-top-left {\n  padding-right: 8px;\n  padding-bottom: 8px;\n}\nion-grid .col-top-right {\n  padding-left: 8px;\n  padding-bottom: 8px;\n}\nion-grid .col-bottom-left {\n  padding-right: 8px;\n  padding-top: 8px;\n}\nion-grid .col-bottom-right {\n  padding-left: 8px;\n  padding-top: 8px;\n}\n.call-icon {\n  color: #FF1E2D;\n  font-size: 20px;\n}\np {\n  font-size: 14px;\n  padding: 0px 20px;\n}\n.row {\n  padding: 0 10px 10px;\n}\n.btn {\n  font-size: 10px !important;\n  background-color: #eee !important;\n  border: none !important;\n  font-size: 10px !important;\n  border-radius: 10px !important;\n  color: #333 !important;\n  text-transform: uppercase !important;\n  margin: 10px 0 !important;\n  font-weight: 700 !important;\n  padding: 8px !important;\n  cursor: pointer !important;\n}\n.subTitle {\n  text-align: center;\n  align-self: center;\n  padding: 0px 20px;\n  color: #FF1E2D;\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: bold;\n}\n.description {\n  margin-top: 13px;\n}\n.subTitle2 {\n  text-align: center;\n  align-self: center;\n  color: #FF1E2D;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: bold;\n}\nion-modal {\n  --height: 300px;\n  --width: 300px;\n  --border-radius: 20px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\nion-modal::part(backdrop) {\n  background: rgb(209, 213, 219);\n  opacity: 1;\n}\n.modal-content {\n  background: white;\n}\n.modal-elements {\n  padding: 20% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGwtbW9kYWwucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBN0JBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQWdDSjtBQTdCQTtFQUNJLGtCQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFnQ0o7QUE3QkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBZ0NKO0FBN0JBO0VBQ0ksdUJBQUE7QUFnQ0o7QUEvQkk7RUFDSSxZQUFBO0FBaUNSO0FBL0JJO0VBQ0ksWUFBQTtBQWlDUjtBQS9CSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFpQ1I7QUEvQkk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBaUNSO0FBL0JJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWlDUjtBQS9CSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFpQ1I7QUE3QkE7RUFDSSxjQy9DWTtFRGdEWixlQUFBO0FBZ0NKO0FBN0JBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBZ0NKO0FBN0JBO0VBRUksb0JBQUE7QUErQko7QUE1QkU7RUFDRSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBK0JKO0FBM0JFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NoRlk7RURpRlosZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUE4Qko7QUEzQkU7RUFDRSxnQkFBQTtBQThCSjtBQTNCRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQzdGWTtFRDhGWixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQThCSjtBQTFCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnRkFBQTtBQTZCSjtBQXpCRTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtBQTRCSjtBQXpCRTtFQUNFLGlCQUFBO0FBNEJKO0FBekJFO0VBQ0UsZUFBQTtBQTRCSiIsImZpbGUiOiJjYWxsLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcblxuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3V5L2ltYWdlcy9iZ19ob21lLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xuICAgIGlvbi1yb3cge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5jb2wtdG9wLWxlZnQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC5jb2wtdG9wLXJpZ2h0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC5jb2wtYm90dG9tLWxlZnQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxuICAgIC5jb2wtYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxufVxuXG4uY2FsbC1pY29ue1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxuICBcbi5yb3dcbiAge1xuICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4O1xuICB9XG4gIFxuICAuYnRuIHtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweCFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzMzMhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNzAwIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA4cHghaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgXG4gIH1cbiAgXG4gIC5zdWJUaXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIH1cblxuICAuc3ViVGl0bGUyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBmb250LXNpemU6IDE0cHggO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbiAgaW9uLW1vZGFsIHtcbiAgICAtLWhlaWdodDogMzAwcHg7XG4gICAgLS13aWR0aDogMzAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC0tYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpO1xuXG4gIH1cbiAgXG4gIGlvbi1tb2RhbDo6cGFydChiYWNrZHJvcCkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjA5LCAyMTMsIDIxOSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50e1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIFxuICAubW9kYWwtZWxlbWVudHN7XG4gICAgcGFkZGluZzogMjAlIDUlO1xuICB9XG4iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 15206:
/*!**************************************************************!*\
  !*** ./src/app/portal/moduls/home/home.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-header ion-toolbar:first-of-type {\n  padding-top: 0px !important;\n}\nion-grid {\n  padding: 0;\n}\nion-content {\n  width: 100%;\n}\n.title-user {\n  font-size: 15px;\n  color: #eee;\n}\n.img-tool {\n  height: 30px;\n  width: 50px;\n}\n.img-logo {\n  height: 50px;\n}\n.slide {\n  height: 50%;\n  margin-bottom: 30px;\n}\n.background-solid-color {\n  background-color: #66182A;\n  height: 70%;\n  width: 100%;\n}\n.texts {\n  padding-top: 22px;\n  padding-bottom: 82px;\n  text-align: left;\n  width: 80%;\n}\n.subtitle {\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n.title {\n  font-size: 20px;\n  line-height: 30px;\n  font-weight: 800;\n  color: #FFFFFF;\n}\n.paragraph {\n  font-size: 16px;\n  line-height: 26px;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n.picture-row {\n  justify-content: center;\n  margin-top: -60px;\n}\nion-footer {\n  margin-bottom: 10px;\n}\n.footer-md::before {\n  background-image: none;\n}\nion-card {\n  height: 120px;\n  text-align: center;\n  font-size: 14px;\n  margin: 2px 2px;\n  background-color: #FFFFFF;\n}\n.cards {\n  margin: 0 16px;\n}\n.card-row {\n  justify-content: center;\n}\n.card-icon {\n  font-size: 34px;\n  padding-top: 4px;\n}\np {\n  font-size: 14px;\n}\nion-card-title {\n  color: #66182A;\n  font-size: 14px;\n  padding-top: 13px;\n}\n.btn {\n  font-size: 10px !important;\n  background-color: #eee !important;\n  border: none !important;\n  font-size: 10px !important;\n  border-radius: 10px !important;\n  color: #333 !important;\n  text-transform: uppercase !important;\n  margin: 10px 0 !important;\n  font-weight: 700 !important;\n  padding: 8px !important;\n  cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQWlDSjtBQTlCQTtFQUNJLDJCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksVUFBQTtBQWlDSjtBQTlCQTtFQUNJLFdBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQWlDSjtBQTlCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBaUNKO0FBOUJBO0VBQ0ksWUFBQTtBQWlDSjtBQTlCQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQWlDSjtBQTlCQTtFQUNJLHlCQ25DYztFRG9DZCxXQUFBO0VBQ0EsV0FBQTtBQWlDSjtBQTlCQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpQ0o7QUE5QkE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksbUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxzQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQUFBO0FBaUNKO0FBOUJBO0VBQ0ksdUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0FBaUNKO0FBN0JBO0VBQ0ksY0M1R2M7RUQ2R2QsZUFBQTtFQUNBLGlCQUFBO0FBZ0NKO0FBN0JBO0VBQ0ksMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQWdDSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUtdXNlciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjZWVlO1xufVxuXG4uaW1nLXRvb2wge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLmltZy1sb2dvIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5zbGlkZSB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJhY2tncm91bmQtc29saWQtY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0cyB7XG4gICAgcGFkZGluZy10b3A6IDIycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDgycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogODAlO1xufVxuXG4uc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjRkZGRkZGXG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICNGRkZGRkZcbn1cblxuLnBhcmFncmFwaCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICNGRkZGRkZcbn1cblxuLnBpY3R1cmUtcm93IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvb3Rlci1tZDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG5pb24tY2FyZCB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMnB4IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGXG59XG5cbi5jYXJkcyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi5jYXJkLXJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcbn1cblxuLmJ0biB7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZSFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHghaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzMzIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwcHggMCFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogOHB4IWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 92116:
/*!******************************************************************************************!*\
  !*** ./src/app/portal/moduls/home/components/call-modal/call-modal.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-popover ion-popover trigger=\"click-trigger\" triggerAction=\"click\">\n  <ng-template>\n      <h4 class=\"subTitle\">{{\"PORTAL.HOME.CALL.Subtitle\" | translate}}</h4>\n      <p class=\"text-center description\">\n        {{\"PORTAL.HOME.CALL.Description\" | translate}}\n      </p>\n      <div class=\"container\">\n          <div class=\"row\">\n              <button type=\"button\"  class=\"btn btn-light btn-sm btn-block\" id=\"open-modal-customer-service\" (click)=\"callCustomerService()\">\n                {{\"PORTAL.HOME.CALL.CustomService\" | translate}}\n              </button>\n\n              <ion-modal #modal trigger=\"open-modal-customer-service\" >\n                  <ng-template >\n                      <ion-content class=\"modal-content ion-text-center\" >\n                          <div class=\"modal-elements \">\n                              <span class=\"subTitle\" >{{ titleCall }}</span>\n                              <p class=\"description\">{{ messageCall }}</p>\n                              <div *ngFor=\"let phoneNumbers of numbersArrayCustomerService\">\n                                  <p class=\"subTitle2\">{{phoneNumbers.Code}}</p>\n                                  <a [href]=\"phoneNumbers.Code\" class=\"subTitle2\"></a>\n                               </div>\n                              <app-button color=\"light\" (click)=\"modal.dismiss()\" [configuration]=\"configurationButton\"></app-button>\n                          </div>\n                      </ion-content>\n                  </ng-template>\n              </ion-modal>\n\n              \n              <button type=\"button\" class=\"btn btn-light btn-sm btn-block\" id=\"open-modal-medical-line\" (click)=\"callMedicalLine()\">\n                {{\"PORTAL.HOME.CALL.MedicalLine\" | translate}}\n              </button>\n\n              <ion-modal #modalMedicalLine trigger=\"open-modal-medical-line\" >\n                  <ng-template>\n                      <ion-content class=\"modal-content ion-text-center\">\n                          <div class=\"modal-elements\">\n                              <span class=\"subTitle\" >{{ titleCall }}</span>\n                              <p class=\"description\">{{ messageCall }}</p>\n                              <div *ngFor=\"let phoneNumbers of numbersArrayMedicalLine\">\n                                  <p class=\"subTitle2\">{{phoneNumbers.Code}}</p>\n                              </div>\n                              <app-button color=\"light\" (click)=\"modalMedicalLine.dismiss()\" [configuration]=\"configurationButton\"></app-button>\n                          </div>\n                      </ion-content>\n                  </ng-template>\n              </ion-modal>\n\n              <button *ngIf=\"country === 'co'\" type=\"button\" class=\"btn btn-light btn-sm\" (click)=\"callSpecialist()\">\n                {{\"PORTAL.HOME.CALL.Specialist\" | translate}}\n              </button>\n          </div>\n      </div>\n  </ng-template>\n</ion-popover>\n";

/***/ }),

/***/ 79308:
/*!**************************************************************!*\
  !*** ./src/app/portal/moduls/home/home.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <ion-img class=\"img-logo\" src=\"{{imgRoute}}LogoFalck.png\"></ion-img>\n        </ion-title>\n        <ion-buttons slot=\"end\" id=\"click-trigger\">\n            <ion-row>\n                <ion-col size=\"4\">\n                    <ion-img class=\"img-tool\" src=\"{{imgRoute}}IconNewChat.png\"></ion-img>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-img class=\"img-tool\" src=\"{{imgRoute}}phone.png\"></ion-img>\n                </ion-col>\n            </ion-row>\n        </ion-buttons>\n        <app-call-modal></app-call-modal>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n        <div class=\"slide\">\n            <!-- <div class=\"position-absolute top-0 start-50 translate-middle-x\">\n                <ion-row class=\"ion-padding-top\">\n                    <ion-col>\n                        <ion-label class=\"title-user\">Hola {{dataUser.middleName}}, bienvenido</ion-label>\n                    </ion-col>\n                </ion-row>\n            </div> -->\n\n            <ion-row class=\"d-flex ion-justify-content-center background-solid-color\">\n                <ion-col size=\"10\" class=\"texts\">\n                    <ion-label class=\"title-user\">Hola {{dataUser.middleName}}, bienvenido</ion-label>\n                    <p></p>\n                    <!-- <p class=\"subtitle\"> {{\"PORTAL.HOME.subtitle\" | translate}} </p> -->\n                    <p class=\"title\"> {{\"PORTAL.HOME.title\" | translate}} </p>\n                    <p class=\"paragraph\"> {{\"PORTAL.HOME.info\" | translate}}</p>\n                </ion-col>\n            </ion-row>\n\n            <ion-row size=\"12\" class=\"picture-row\">\n                <ion-col size=\"9\">\n                    <ion-img src=\"{{imgRoute}}home-picture.svg\"></ion-img>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n\n    <ion-footer>\n        <ion-row class=\"ion-justify-content-center cards\">\n            <ion-col size=\"5\" class=\"col-top-left\">\n                <ion-card (click)=\"clickMyHealth($event);\">\n                    <ion-card-header>\n                        <ion-row class=\"card-row\">\n                            <ion-icon class=\"card-icon\" src=\"{{imgRoute}}clock.svg\"></ion-icon>\n                        </ion-row>\n                        <ion-card-title>{{\"PORTAL.HOME.HOME-CARD1.Title\" | translate}}</ion-card-title>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n            <ion-col size=\"5\" class=\"col-top-right\">\n                <ion-card (click)=\"clickCoordinations($event);\">\n                    <ion-card-header>\n                        <ion-row class=\"card-row\">\n                            <ion-icon class=\"card-icon\" src=\"{{imgRoute}}cordinaciones-medicas.svg\"></ion-icon>\n                        </ion-row>\n                        <ion-card-title>{{\"PORTAL.HOME.HOME-CARD2.Title\" | translate}}</ion-card-title>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center cards\">\n            <ion-col size=\"5\" class=\"col-bottom-left\">\n                <ion-card (click)=\"clickClinics($event);\">\n                    <ion-card-header>\n                        <ion-row class=\"card-row\">\n                            <ion-icon class=\"card-icon\" src=\"{{imgRoute}}centros-medicos.svg\"></ion-icon>\n                        </ion-row>\n                        <ion-card-title>{{\"PORTAL.HOME.HOME-CARD3.Title\" | translate}}</ion-card-title>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n            <ion-col size=\"5\" class=\"col-bottom-right\">\n                <ion-card (click)=\"clicMyData($event);\">\n                    <ion-card-header>\n                        <ion-row class=\"card-row\">\n                            <ion-icon class=\"card-icon\" src=\"{{imgRoute}}mi-cuenta.svg\"></ion-icon>\n                        </ion-row>\n                        <ion-card-title>{{\"PORTAL.HOME.HOME-CARD4.Title\" | translate}}</ion-card-title>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-footer>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_home_home_module_ts.js.map