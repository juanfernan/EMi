"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_customer-service_components_faqs_faqs_module_ts"],{

/***/ 42417:
/*!***************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/faqs/faqs-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageRoutingModule": () => (/* binding */ FaqsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.page */ 86010);




const routes = [
    {
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_0__.FaqsPage
    }
];
let FaqsPageRoutingModule = class FaqsPageRoutingModule {
};
FaqsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqsPageRoutingModule);



/***/ }),

/***/ 85262:
/*!*******************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/faqs/faqs.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageModule": () => (/* binding */ FaqsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs-routing.module */ 42417);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page */ 86010);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let FaqsPageModule = class FaqsPageModule {
};
FaqsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqsPageRoutingModule
        ],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_1__.FaqsPage]
    })
], FaqsPageModule);



/***/ }),

/***/ 86010:
/*!*****************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/faqs/faqs.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPage": () => (/* binding */ FaqsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _faqs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.page.html?ngResource */ 48330);
/* harmony import */ var _faqs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page.scss?ngResource */ 91119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var _services_faqs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/faqs.service */ 44407);
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typescript-string-operations */ 49565);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











let FaqsPage = class FaqsPage {
    constructor(faqsService, router, route, urlDataService, bsModalService, translate) {
        this.faqsService = faqsService;
        this.router = router;
        this.route = route;
        this.urlDataService = urlDataService;
        this.bsModalService = bsModalService;
        this.viewSearch = false;
        this.showdetail = false;
        this.translate = translate;
        this.urlDataService.setHeaderNavPortal(['Servicios al Cliente', 'Preguntas Frecuentes']);
    }
    ngOnInit() {
        this.getCategoriesFaqs();
        this.GetAllFaqs();
    }
    subcategoryId(id) {
        //this.router.navigate(['/customerservice/faqsdetail', 'subcategory', id]);
        this.showdetail = true;
        this.GetFaqs('subcategory', id);
    }
    faq(id) {
        //  this.router.navigate(['/customerservice/faqsdetail', 'faq', id]);
        this.showdetail = true;
        this.GetFaqs('faq', id);
    }
    GetFaqs(type, id) {
        if (type == "subcategory") {
            this.faqsService
                .getFaqsBySubcategory(id)
                .subscribe(value => {
                this.faqs = value.Faqs;
                this.category = this.faqs[0].CategoryName;
                this.subcategory = this.faqs[0].SubCategoryName;
            }, error => {
                this.showErrorNotificationModal(error.message);
            });
        }
        else if (type == "faq") {
            this.faqsService
                .getFaqsById(id)
                .subscribe(value => {
                this.faqs = value.Faqs;
                this.category = this.faqs[0].CategoryName;
                this.subcategory = this.faqs[0].SubCategoryName;
            }, error => {
                this.showErrorNotificationModal(error.message);
            });
        }
    }
    backList() {
        this.showdetail = false;
        this.getCategoriesFaqs();
        this.GetAllFaqs();
    }
    inputSearchFaqs() {
        if (typescript_string_operations__WEBPACK_IMPORTED_MODULE_5__.String.IsNullOrWhiteSpace(this.search)) {
            this.HideSearchFaqs();
        }
        else {
            this.GetSearchFaqs();
        }
    }
    HideSearchFaqs() {
        this.search = '';
        this.viewSearch = false;
    }
    GetSearchFaqs() {
        this.viewSearch = true;
    }
    GetAllFaqs() {
        this.faqsService
            .GetAllFaqs()
            .subscribe(value => {
            this.searchFaqs = value.FaqsResponse;
        }, error => {
            // TODO falta informar el error
        });
    }
    getCategoriesFaqs() {
        this.faqsService
            .CategoriesFaqs()
            .subscribe(value => {
            this.categoriesFaqs = value.CategoriesFaqs;
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
};
FaqsPage.ctorParameters = () => [
    { type: _services_faqs_service__WEBPACK_IMPORTED_MODULE_4__.FaqsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__.UrlDataService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService }
];
FaqsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-faqs',
        template: _faqs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_faqs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaqsPage);



/***/ }),

/***/ 44407:
/*!*****************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/faqs/services/faqs.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsService": () => (/* binding */ FaqsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let FaqsService = class FaqsService {
    constructor(http) {
        this.http = http;
    }
    CategoriesFaqs() {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/Contents/GetCategoriesFaqs`, null);
    }
    GetAllFaqs() {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/Contents/GetAllFaqs`, null);
    }
    getFaqsById(FaqsId) {
        let params = {
            "FaqsId": FaqsId,
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/Contents/GetFaqsById?FaqsId=` + FaqsId, null);
    }
    getFaqsBySubcategory(subcategoriesFaqsId) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/Contents/GetFaqsBySubcategory?subcategoriesFaqsId=` + subcategoriesFaqsId, null);
    }
};
FaqsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
FaqsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FaqsService);



/***/ }),

/***/ 91119:
/*!******************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/faqs/faqs.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-item {\n  border: none !important;\n}\nion-card-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\n.ion-card-subtitle {\n  font-size: 12px;\n}\n.text-title {\n  font-size: 12px;\n  color: #00466c;\n}\n.text-subtitle {\n  font-size: 12px;\n}\n.img-location {\n  align-self: center;\n  width: 25px;\n  height: 30px;\n}\n.row {\n  margin: 5px;\n}\n.cardfqas {\n  border: 1px solid #d3d3d3;\n  background-color: white;\n  transition: 0.3s;\n  border-radius: 10px;\n  line-height: 32px;\n}\n.emi-cardsfaq .itemorientacion h4 {\n  color: #66182A;\n  font-size: 18px;\n}\n.emi-cardsfaq .ulsubfaqs li {\n  list-style: none;\n}\n.emi-cardsfaq .ulsubfaqs li:before {\n  content: \"\\f111\";\n  color: #66182A;\n  font-family: \"FontAwesome\";\n  font-size: 8px;\n}\n#custom-search-input {\n  border: solid 1px rgb(204, 204, 204);\n  border-radius: 5px;\n  background-color: #fff;\n  position: relative;\n}\n#custom-search-input input {\n  border: 0;\n  box-shadow: none;\n}\n#custom-search-input .emi-btn-faqsearlup,\n#custom-search-input .emi-btn-faqsearcls {\n  margin: 0px;\n  background: none;\n  box-shadow: none;\n  border: 0;\n  color: #666666;\n  padding: 0 8px 0 10px;\n}\n#custom-search-input .emi-btn-faqsearcls {\n  color: white;\n  background-color: #2278b1;\n  height: 50px;\n  margin-right: 1px;\n}\n.emi-preguntasconten .inpsearch .btn-faqsear {\n  border-radius: 0 5px 5px 0px;\n}\n.emi-preguntasconten .inpsearch .btn-faqsear .emi-btn-faqsear {\n  margin: 0px;\n  background: none;\n  box-shadow: none;\n  border: 0;\n  color: white;\n  padding: 0 28px;\n  font-weight: 300;\n  background-color: #66182A;\n  height: 50px;\n}\n.emi-preguntasconten .inpsearch .emi-faq-input {\n  height: 50px;\n}\n#custom-search-input button:hover {\n  border: 0;\n  box-shadow: none;\n  border-left: solid 1px #ccc;\n}\n#custom-search-input .glyphicon-search {\n  font-size: 15px;\n}\n#custom-search-input .glyphicon-remove {\n  font-size: 15px;\n  padding: 7px;\n}\n.input-lg {\n  font-size: 16px;\n}\n.btnsearch {\n  background-color: rgb(0, 158, 224) !important;\n  margin-top: -21px !important;\n  min-height: 55px !important;\n  margin-bottom: -21px !important;\n  color: white !important;\n  font-size: 14px;\n}\n.divsearch {\n  background-color: #ebebeb;\n  padding: 15px;\n}\n.paddingCardsSearch {\n  margin-top: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n  width: inherit !important;\n}\n.titlesearch {\n  font-weight: 400;\n  padding: 35px 0 10px 0;\n  color: #555 !important;\n}\n.descsearch {\n  font-weight: bold;\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n.inpsearch {\n  margin-bottom: 25px;\n}\n.paddingCardsSearchdesc {\n  margin-top: 20px;\n  margin-left: 30px;\n  margin-right: 30px;\n  margin-bottom: 20px;\n}\n.rowcardfaqs {\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n.cardfqa {\n  padding: 16px;\n}\n.itemssub {\n  overflow-y: scroll;\n  height: 100%;\n}\n.itemsubcategory a:hover {\n  text-decoration: underline;\n}\n.asub {\n  font-weight: inherit !important;\n}\n.ulsubfaqs {\n  display: block;\n  list-style-type: disc;\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 16px;\n}\n.divsearchfloat {\n  background: white;\n  border: solid 1px #cccccc;\n  border-radius: 0px 0 5px 5px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n  height: 400px;\n  padding: 12px;\n  top: 5px;\n  overflow-y: scroll;\n}\n.divsearchfloat::-webkit-scrollbar {\n  width: 10px;\n}\n.divsearchfloat::-webkit-scrollbar-track {\n  background: #f2f2f2;\n}\n.divsearchfloat::-webkit-scrollbar-thumb {\n  background: rgba(221, 221, 221, 0.76);\n  border-radius: 4px;\n}\n.emi-preguntasconten .emi-ayudacont {\n  border-bottom: 1px solid lightgray;\n  float: left;\n  margin: 5px;\n  padding-bottom: 5px;\n  width: 99%;\n}\n.emi-preguntasconten .emi-ayuda {\n  border: none;\n  border-radius: 10px;\n  background: #fff;\n  position: relative;\n  display: block;\n  float: left;\n  width: 100%;\n  padding: 10px;\n}\n/* .container {\n  background-color: #f0f0f0 !important;\n} */\n.emi-preguntasconten .emi-ayuda:hover {\n  background-color: #f2f2f2 !important;\n  cursor: pointer;\n}\n.emi-preguntasconten2 .emi-ayuda2 {\n  border: none;\n  border-radius: 10px;\n  background: #fff;\n  position: relative;\n  display: block;\n  float: left;\n  width: 100%;\n  padding: 10px;\n}\n.searchcategory {\n  font-weight: bold;\n  font-size: 16px;\n}\n.emi-ayuda .searchsubcategory {\n  color: #66182A;\n  font-weight: 700;\n  margin: 0px 0 12px 0;\n  padding: 0;\n}\n.searchquestion {\n  font-weight: inherit !important;\n}\n.emi-preguntasconten2 {\n  float: left;\n  width: 100%;\n  height: 100vh;\n  margin-bottom: 50px;\n}\n.emi-cardsfaq .cardfqas .itemorientacion p {\n  width: 100%;\n}\n.emi-cardsfaq .cardfqas .itemorientacion .ulsubfaqs {\n  padding: 10px;\n}\n.back {\n  background-color: #F0F0F0 !important;\n}\n.colmfaqs {\n  margin-top: 30px;\n  height: 100vh;\n}\n.faqsCategory {\n  font-weight: bold;\n  color: rgb(117, 117, 117);\n}\n.faqsSubCategory {\n  color: #66182A;\n  font-weight: 700;\n  margin-top: 10px !important;\n  margin-bottom: 30px;\n}\n.fqaQuestion {\n  margin-bottom: 15px;\n}\n.faqsAnswer {\n  padding-left: 0px;\n  max-width: 50%;\n  margin-bottom: 40px;\n}\n@media only screen and (max-width: 768px) {\n  .faqsAnswer {\n    max-width: 100%;\n  }\n}\n.emi-resultadopreguntas {\n  margin-bottom: 50px;\n  float: left;\n  width: 100%;\n}\n.personaliti {\n  width: 100%;\n  text-align: left;\n  border: none;\n  background-color: white;\n  color: #66182A;\n  padding: 25px;\n  border-radius: 0px;\n  border-top: 1px solid #e2e2e2;\n  border-left: 1px solid #e2e2e2;\n  font-size: 15px;\n}\n.btn-default:hover {\n  color: #fff;\n  background-color: #039ee1 !important;\n  border-color: #c1c1c1;\n}\n.icon-text {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcXMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSjtBQTlCQTtFQUNJLHVCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NsQlk7QURtRGhCO0FBOUJBO0VBQ0ksZUFBQTtBQWlDSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZUFBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQ0o7QUE3QkE7RUFDSSxXQUFBO0FBZ0NKO0FBN0JBO0VBS0kseUJBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTJCSjtBQXhCQTtFQUNJLGNDMURjO0VEMkRkLGVBQUE7QUEyQko7QUF4QkE7RUFDSSxnQkFBQTtBQTJCSjtBQXhCQTtFQUNJLGdCQUFBO0VBQ0EsY0NwRWM7RURxRWQsMEJBQUE7RUFDQSxjQUFBO0FBMkJKO0FBeEJBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUEyQko7QUF4QkE7RUFDSSxT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bUJBQUE7QUF1Qko7QUFwQkE7RUFDSSxtQkFBQTtBQXVCSjtBQXBCQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBdUJKO0FBcEJBO0VBQ0k7SUFDSSxlQUFBO0VBdUJOO0FBQ0Y7QUFwQkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBc0JKO0FBbkJBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0MxV2M7RUQyV2QsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFzQko7QUFuQkE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQXNCSjtBQW5CQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQXNCSiIsImZpbGUiOiJmYXFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ01hcmsgT1QnLCBzYW5zLXNlcmlmO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufVxuXG4uaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzAwNDY2Yztcbn1cblxuLnRleHQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmltZy1sb2NhdGlvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuJE1vZGFsLWJnOiAjZjJmMmYyO1xuLnJvdyB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi5jYXJkZnFhcyB7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAvLyBtYXJnaW46IDMwcHg7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gcGFkZGluZzogMTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5lbWktY2FyZHNmYXEgLml0ZW1vcmllbnRhY2lvbiBoNCB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgZm9udC1zaXplOiAxOHB4XG59XG5cbi5lbWktY2FyZHNmYXEgLnVsc3ViZmFxcyBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmVtaS1jYXJkc2ZhcSAudWxzdWJmYXFzIGxpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGYxMTFcIjtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDIwNCwgMjA0LCAyMDQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2N1c3RvbS1zZWFyY2gtaW5wdXQgaW5wdXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCAuZW1pLWJ0bi1mYXFzZWFybHVwLFxuI2N1c3RvbS1zZWFyY2gtaW5wdXQgLmVtaS1idG4tZmFxc2VhcmNscyB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBwYWRkaW5nOiAwIDhweCAwIDEwcHg7XG59XG5cbiNjdXN0b20tc2VhcmNoLWlucHV0IC5lbWktYnRuLWZhcXNlYXJjbHMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI3OGIxO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLmVtaS1wcmVndW50YXNjb250ZW4gLmlucHNlYXJjaCAuYnRuLWZhcXNlYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwcHg7XG59XG5cbi5lbWktcHJlZ3VudGFzY29udGVuIC5pbnBzZWFyY2ggLmJ0bi1mYXFzZWFyIC5lbWktYnRuLWZhcXNlYXIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMjhweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZW1pLXByZWd1bnRhc2NvbnRlbiAuaW5wc2VhcmNoIC5lbWktZmFxLWlucHV0IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbiNjdXN0b20tc2VhcmNoLWlucHV0IGJ1dHRvbjpob3ZlciB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjY2NjO1xufVxuXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCAuZ2x5cGhpY29uLXNlYXJjaCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCAuZ2x5cGhpY29uLXJlbW92ZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDdweDtcbn1cblxuLmlucHV0LWxnIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5idG5zZWFyY2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNTgsIDIyNCkgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMjFweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMjFweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdnNlYXJjaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucGFkZGluZ0NhcmRzU2VhcmNoIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGVzZWFyY2gge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMzVweCAwIDEwcHggMDtcbiAgICBjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3NlYXJjaCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pbnBzZWFyY2gge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5wYWRkaW5nQ2FyZHNTZWFyY2hkZXNjIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucm93Y2FyZGZhcXMge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkZnFhIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uaXRlbXNzdWIge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pdGVtc3ViY2F0ZWdvcnkgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5hc3ViIHtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4udWxzdWJmYXFzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gICAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAxZW07XG4gICAgLXdlYmtpdC1tYXJnaW4tYWZ0ZXI6IDFlbTtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogMHB4O1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogMHB4O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMTZweDtcbn1cblxuLmRpdnNlYXJjaGZsb2F0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwIDVweCA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICB0b3A6IDVweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5kaXZzZWFyY2hmbG9hdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG4uZGl2c2VhcmNoZmxvYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkTW9kYWwtYmc7XG59XG5cbi5kaXZzZWFyY2hmbG9hdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC43Nik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZW1pLXByZWd1bnRhc2NvbnRlbiAuZW1pLWF5dWRhY29udCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHdpZHRoOiA5OSU7XG59XG5cbi5lbWktcHJlZ3VudGFzY29udGVuIC5lbWktYXl1ZGEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cblxuLyogLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjAgIWltcG9ydGFudDtcbn0gKi9cblxuLmVtaS1wcmVndW50YXNjb250ZW4gLmVtaS1heXVkYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVtaS1wcmVndW50YXNjb250ZW4yIC5lbWktYXl1ZGEyIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWFyY2hjYXRlZ29yeSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZW1pLWF5dWRhIC5zZWFyY2hzdWJjYXRlZ29yeSB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDBweCAwIDEycHggMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uc2VhcmNocXVlc3Rpb24ge1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbi5lbWktcHJlZ3VudGFzY29udGVuMiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uZW1pLWNhcmRzZmFxIC5jYXJkZnFhcyAuaXRlbW9yaWVudGFjaW9uIHAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1pLWNhcmRzZmFxIC5jYXJkZnFhcyAuaXRlbW9yaWVudGFjaW9uIC51bHN1YmZhcXMge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8vZGV0YWlsXG4uYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMCAhaW1wb3J0YW50O1xufVxuXG4uY29sbWZhcXMge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmZhcXNDYXRlZ29yeSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcbn1cblxuLmZhcXNTdWJDYXRlZ29yeSB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZxYVF1ZXN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZmFxc0Fuc3dlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5mYXFzQW5zd2VyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmVtaS1yZXN1bHRhZG9wcmVndW50YXMge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wZXJzb25hbGl0aSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJ0bi1kZWZhdWx0OmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM5ZWUxICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzFjMWMxO1xufVxuXG4uaWNvbi10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 48330:
/*!******************************************************************************************!*\
  !*** ./src/app/portal/moduls/customer-service/components/faqs/faqs.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Preguntas frecuentes</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Detail -->\n    <div id=\"conten2\" class=\"wrap2 col-md-12\" [hidden]=\"!showdetail\">\n        <div class=\"row back\">\n\n            <button (click)=\"backList()\" type=\"button\" class=\"btn btn-default btn-lg personaliti icon-text\">\n                {{'PORTAL.CUSTOMER-SERVICE.FAQS.ButtonBack' | translate}}\n            </button>\n\n            <div class=\"col-md-12 colmfaqs\">\n                <div class=\"col-md-12\">\n                    <div class=\"emi-titulo\">\n                        <h5 class=\"faqsCategory\">\n                            {{category}}\n                        </h5>\n                        <h3 class=\"faqsSubCategory\">{{subcategory}} </h3>\n                    </div>\n                    <div *ngFor=\"let faq of faqs\">\n                        <div class=\"emi-resultadopreguntas\">\n                            <h4 class=\"fqaQuestion\">{{faq.Question}}</h4>\n                            <div class=\"faqsAnswer\">\n                                <div [innerHTML]=\"faq.Answer\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <!-- Principal -->\n\n    <section class=\"emi-preguntasconten\" [hidden]=\"showdetail\">\n\n        <article class=\"divsearch\">\n\n            <h4 class=\"titlesearch\">{{'PORTAL.CUSTOMER-SERVICE.FAQS.TitleSearch' | translate}}</h4>\n            <div id=\"custom-search-input\" class=\"inpsearch\">\n                <form role=\"form\" #Form=\"ngForm\">\n                    <div class=\"input-group col-md-12\">\n                        <span class=\"input-group-btn\">\n\n                            <button class=\"btn btn-info btn-lg emi-btn-faqsearlup\" type=\"button\">\n                                <i class=\"glyphicon glyphicon-search\"></i>\n                            </button>\n\n                        </span>\n                        <input required (input)=\"inputSearchFaqs()\" (focus)=\"GetSearchFaqs()\" [(ngModel)]=\"search\" id=\"search\" name=\"search\" type=\"text\" class=\"form-control input-lg emi-faq-input\" placeholder=\"Escribe aquí tu búsqueda\" />\n\n                        <span class=\"input-group-btn btn-faqsear\">\n\n                            <button (click)=\"HideSearchFaqs()\" *ngIf=\"viewSearch\"\n                                class=\"btn btn-info btn-lg emi-btn-faqsearcls\" type=\"button\">\n\n                                <mat-icon class=\"icon-text\">delete</mat-icon>\n                            </button>\n                            <button (focus)=\"GetSearchFaqs()\" class=\"btn btn-info btn-lg emi-btn-faqsear\" type=\"button\">\n                                {{'PORTAL.CUSTOMER-SERVICE.FAQS.ButtonSearch' | translate}}\n                            </button>\n\n                        </span>\n                    </div>\n                </form>\n            </div>\n\n            <div class=\"divsearchfloat\" *ngIf=\"viewSearch\">\n                <div class=\"emi-ayudacont\" *ngFor=\"let search of searchFaqs | filter : search\">\n                    <div class=\"emi-ayuda faqssearch\" (click)=\"faq(search.FaqsId)\">\n                        <div class=\"\">\n                            <label class=\"searchcategory\">{{search.CategoryName}}</label>\n                            <h3 class=\"searchsubcategory\">{{search.SubCategoryName}}</h3>\n                            <label class=\"searchquestion\">{{search.Question}}</label>\n                            <label class=\"searchquestion\">{{search.AnswerText | slice:0:300}}...</label>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"(searchFaqs  | filter: search ).length === 0\" class=\"itemorientacion faqssearch\">\n                    <div class=\"col-md-12\">\n                        <div class=\"row cardfqa\">\n                            <label class=\"searchcategory\">{{'PORTAL.CUSTOMER-SERVICE.FAQS.NoResult' | translate}}</label>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </article>\n    </section>\n\n    <div class=\"container\" [hidden]=\"showdetail\">\n\n        <article class=\"paddingCardsSearchdesc\">\n            <h4 class=\"descsearch\">\n                {{'PORTAL.CUSTOMER-SERVICE.FAQS.DescSearch' | translate}}\n            </h4>\n        </article>\n\n        <div class=\"emi-cardsfaq row\">\n\n            <div *ngFor=\"let category of categoriesFaqs\" class=\"col-lg-4 col-md-4 col-xs-1 cardfqas\">\n\n                <div class=\"itemorientacion\">\n                    <h4>{{category.Name}}</h4>\n                    <p>{{category.Description}}</p>\n                    <div class=\"itemssub\">\n                        <div>\n                            <ul class=\"ulsubfaqs\">\n                                <li *ngFor=\"let sub of category.SubcategoriesFaqs\" (click)=\"subcategoryId(sub.SubcategoriesFaqsId)\" class=\"itemsubcategory\">\n                                    <a class=\"asub\">{{sub.Name}}</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_customer-service_components_faqs_faqs_module_ts.js.map