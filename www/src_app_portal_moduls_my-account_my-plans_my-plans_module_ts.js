"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_my-account_my-plans_my-plans_module_ts"],{

/***/ 6125:
/*!**************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-card/my-plans-card.page.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPlansCardPage": () => (/* binding */ MyPlansCardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_plans_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-plans-card.page.html?ngResource */ 33892);
/* harmony import */ var _my_plans_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-plans-card.page.scss?ngResource */ 58830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);








let MyPlansCardPage = class MyPlansCardPage {
    constructor(modalService, translate) {
        this.modalService = modalService;
        this.translate = translate;
        this.configurationButtonDetail = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.translate.get('PORTAL.MYPLANS.DetailButton').subscribe(resp => {
            this.buttonDetailText = resp;
        });
    }
    ngOnInit() {
        this.configurationButtonDetail.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Primary;
        this.configurationButtonDetail.text = this.buttonDetailText;
        this.configurationButtonDetail.width = '165px';
    }
    getTotal(beneficiario) {
        let total = 0;
        beneficiario.ProductosContratados.forEach((element) => {
            total += parseInt(element.TarifaFacturada.Importe);
        });
        return total;
    }
    getNames(beneficiario) {
        let names = '';
        names = beneficiario.Nombre1 + (beneficiario.Nombre2 ? (' ' + beneficiario.Nombre2) : '');
        names += ' ' + (beneficiario.Apellido1 + (beneficiario.Apellido2 ? (' ' + beneficiario.Apellido2) : ''));
        return names;
    }
};
MyPlansCardPage.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
MyPlansCardPage.propDecorators = {
    planList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    facturacion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    matriculaFamilia: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    onShowConsumptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
MyPlansCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-my-plans-card',
        template: _my_plans_card_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_plans_card_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyPlansCardPage);



/***/ }),

/***/ 1155:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-consumptions-modal/my-plans-consumptions-modal.page.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPlansConsumptionsModalPage": () => (/* binding */ MyPlansConsumptionsModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_plans_consumptions_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-plans-consumptions-modal.page.html?ngResource */ 60261);
/* harmony import */ var _my_plans_consumptions_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-plans-consumptions-modal.page.scss?ngResource */ 38653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);







let MyPlansConsumptionsModalPage = class MyPlansConsumptionsModalPage {
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
MyPlansConsumptionsModalPage.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalRef }
];
MyPlansConsumptionsModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-my-plans-consumptions-modal',
        template: _my_plans_consumptions_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_plans_consumptions_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyPlansConsumptionsModalPage);



/***/ }),

/***/ 39343:
/*!************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-main-info/my-plans-main-info.page.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPlansMainInfoPage": () => (/* binding */ MyPlansMainInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_plans_main_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-plans-main-info.page.html?ngResource */ 17926);
/* harmony import */ var _my_plans_main_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-plans-main-info.page.scss?ngResource */ 20601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let MyPlansMainInfoPage = class MyPlansMainInfoPage {
    constructor() { }
    ngOnInit() { }
};
MyPlansMainInfoPage.ctorParameters = () => [];
MyPlansMainInfoPage.propDecorators = {
    responsable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    lastFeeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MyPlansMainInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-my-plans-main-info',
        template: _my_plans_main_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_plans_main_info_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyPlansMainInfoPage);



/***/ }),

/***/ 14004:
/*!**********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-new-plan/my-plans-new-plan.page.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPlansNewPlanPage": () => (/* binding */ MyPlansNewPlanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_plans_new_plan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-plans-new-plan.page.html?ngResource */ 60080);
/* harmony import */ var _my_plans_new_plan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-plans-new-plan.page.scss?ngResource */ 51472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let MyPlansNewPlanPage = class MyPlansNewPlanPage {
    constructor() {
        this.lstResponsabilities = [];
        this.lstResponsabilitiesNotMine = [];
        this.user = { document: '', documentType: '', failedVenko: '' };
    }
    ngOnInit() {
    }
};
MyPlansNewPlanPage.ctorParameters = () => [];
MyPlansNewPlanPage.propDecorators = {
    generateNewPlan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    getPlanPayload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    bsModalRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    plansService: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    generateComposeInformativeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    modalService: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    router: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    obtenerVida: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    abrirEnNuevaPesatana: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    lstResponsabilities: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    lstResponsabilitiesNotMine: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MyPlansNewPlanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-my-plans-new-plan',
        template: _my_plans_new_plan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_plans_new_plan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyPlansNewPlanPage);



/***/ }),

/***/ 91230:
/*!*********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/planlist/planlist.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanlistComponent": () => (/* binding */ PlanlistComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _planlist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planlist.component.html?ngResource */ 79159);
/* harmony import */ var _planlist_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planlist.component.scss?ngResource */ 38349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);





let PlanlistComponent = class PlanlistComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() { }
    getTotal(beneficiario) {
        let total = 0;
        beneficiario.ProductosContratados.forEach((element) => {
            total += parseInt(element.TarifaFacturada.Importe);
        });
        return total;
    }
    getNames(beneficiario) {
        let names = '';
        names = beneficiario.Nombre1 + (beneficiario.Nombre2 ? (' ' + beneficiario.Nombre2) : '');
        names += ' ' + (beneficiario.Apellido1 + (beneficiario.Apellido2 ? (' ' + beneficiario.Apellido2) : ''));
        return names;
    }
};
PlanlistComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__.BsModalService }
];
PlanlistComponent.propDecorators = {
    planList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    facturacion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    matriculaFamilia: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    onShowConsumptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PlanlistComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-planlist',
        template: _planlist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_planlist_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlanlistComponent);



/***/ }),

/***/ 94117:
/*!*****************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/models/getPlansPayload.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPlansPayload": () => (/* binding */ getPlansPayload)
/* harmony export */ });
class getPlansPayload {
}


/***/ }),

/***/ 11015:
/*!******************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/my-plans-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPlansPageRoutingModule": () => (/* binding */ MyPlansPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _my_plans_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-plans.page */ 79122);





const routes = [
    {
        path: '',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _my_plans_page__WEBPACK_IMPORTED_MODULE_1__.MyPlansPage
    }
];
let MyPlansPageRoutingModule = class MyPlansPageRoutingModule {
};
MyPlansPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], MyPlansPageRoutingModule);



/***/ }),

/***/ 41518:
/*!**********************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/my-plans.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPlansPageModule": () => (/* binding */ MyPlansPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _my_plans_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-plans-routing.module */ 11015);
/* harmony import */ var _my_plans_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-plans.page */ 79122);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _components_my_plans_new_plan_my_plans_new_plan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-plans-new-plan/my-plans-new-plan.page */ 14004);
/* harmony import */ var _components_my_plans_card_my_plans_card_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-plans-card/my-plans-card.page */ 6125);
/* harmony import */ var _components_my_plans_main_info_my_plans_main_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/my-plans-main-info/my-plans-main-info.page */ 39343);
/* harmony import */ var _components_my_plans_consumptions_modal_my_plans_consumptions_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/my-plans-consumptions-modal/my-plans-consumptions-modal.page */ 1155);
/* harmony import */ var _components_planlist_planlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/planlist/planlist.component */ 91230);













let MyPlansPageModule = class MyPlansPageModule {
};
MyPlansPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _my_plans_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyPlansPageRoutingModule
        ],
        declarations: [
            _my_plans_page__WEBPACK_IMPORTED_MODULE_1__.MyPlansPage,
            _components_my_plans_card_my_plans_card_page__WEBPACK_IMPORTED_MODULE_4__.MyPlansCardPage,
            _components_my_plans_main_info_my_plans_main_info_page__WEBPACK_IMPORTED_MODULE_5__.MyPlansMainInfoPage,
            _components_my_plans_new_plan_my_plans_new_plan_page__WEBPACK_IMPORTED_MODULE_3__.MyPlansNewPlanPage,
            _components_my_plans_consumptions_modal_my_plans_consumptions_modal_page__WEBPACK_IMPORTED_MODULE_6__.MyPlansConsumptionsModalPage,
            _components_planlist_planlist_component__WEBPACK_IMPORTED_MODULE_7__.PlanlistComponent
        ]
    })
], MyPlansPageModule);



/***/ }),

/***/ 79122:
/*!********************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/my-plans.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPlansPage": () => (/* binding */ MyPlansPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_plans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-plans.page.html?ngResource */ 41054);
/* harmony import */ var _my_plans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-plans.page.scss?ngResource */ 76118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _components_my_plans_consumptions_modal_my_plans_consumptions_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/my-plans-consumptions-modal/my-plans-consumptions-modal.page */ 1155);
/* harmony import */ var _models_getPlansPayload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/getPlansPayload */ 94117);
/* harmony import */ var _services_my_plans_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/my-plans.service.service */ 76782);












let MyPlansPage = class MyPlansPage {
    constructor(urlDataService, modalService, router, plansService) {
        this.urlDataService = urlDataService;
        this.modalService = modalService;
        this.router = router;
        this.plansService = plansService;
        this.userData = {};
        this.userPlans = [];
        this.isLoading = false;
        this.urlShopOnlineWithParametes = '';
        this.user = { document: '', documentType: '', failedVenko: '' };
        this.lstResponsabilities = [];
        this.lstResponsabilitiesNotMine = [];
        //------ Métodos necesarios para la redirección al portal ventas ---- ///
        this.obtenerVida = (lst) => {
            return lst && lst.length > 0 ? lst[0].MatriculaFamilia : 0;
        };
        this.soyBeneficiario = (familias) => {
            if (familias && familias.length > 0) {
                for (let familia of familias) {
                    for (let beneficiario of familia.Beneficiarios) {
                        if (beneficiario.Documento === this.user.document) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        this.abrirEnNuevaPesatana = (vida) => {
            // Se contruye el objeto que te llevará a portal ventas
            let parametroPortalVentas;
            let ben = this.soyBeneficiario(this.lstResponsabilities);
            ben = ben ? ben : this.soyBeneficiario(this.lstResponsabilitiesNotMine);
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.country === 'co') {
                parametroPortalVentas = `${vida}${this.user.documentType}${this.user.document}|${vida.length}${Number(ben)}|${this.user.failedVenko}`;
            }
            else {
                parametroPortalVentas = `${vida}${this.user.documentType}${this.user.document}|${vida.length}${Number(ben)}`;
            }
            this.urlShopOnlineWithParametes = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.shopOnline}ShopOnline/affiliate/${btoa(parametroPortalVentas)}`;
            setTimeout(() => {
                window.open(this.urlShopOnlineWithParametes, '_blank');
            }, 100);
        };
        this.urlDataService.setHeaderNavPortal(['Mi cuenta', 'Mis planes']);
    }
    ngOnInit() {
        //se obtienen los datos del usuario
        this.user.documentType = localStorage.getItem("documentType");
        this.user.document = localStorage.getItem("document");
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.country === 'co') {
            this.user.failedVenko = localStorage.getItem('failedVenko');
        }
        //se obtienen los planes del usuario
        const payload = this.getPlanPayload();
        this.isLoading = true;
        this.plansService.getPlans(payload).subscribe((resp) => {
            if (resp.StatusCode == 0) {
                this.isLoading = false;
                this.userPlans = resp.ContractedPlans.Familias;
                this.lstResponsabilities = resp.ContractedPlans.Familias.filter((f) => { return f.TipoConsulta === 'RP'; });
                this.lstResponsabilitiesNotMine = resp.ContractedPlans.Familias.filter((f) => { return f.TipoConsulta !== 'RP'; });
            }
            else {
                this.isLoading = false;
                this.bsModalRef = this.generateInformativeModal('Ocurrió un error al obtener tus planes', 'Hubo un error al cargar tus planes, porfavor intenta de nuevo en unos momentos', true);
                this.bsModalRef.content.onClose.subscribe((accept) => {
                    this.router.navigate(['portal/home'], { replaceUrl: true });
                });
            }
        });
    }
    getNames(beneficiario) {
        let names = '';
        names = beneficiario.Nombre1 + (beneficiario.Nombre2 ? (' ' + beneficiario.Nombre2) : '');
        names += ' ' + (beneficiario.Apellido1 + (beneficiario.Apellido2 ? (' ' + beneficiario.Apellido2) : ''));
        return names;
    }
    getPlanPayload() {
        let payload = new _models_getPlansPayload__WEBPACK_IMPORTED_MODULE_6__.getPlansPayload();
        payload.Document = localStorage.getItem("document");
        payload.DocumentType = localStorage.getItem("documentType");
        return payload;
    }
    generateNewPlan() {
        const payload = this.getPlanPayload();
        this.isLoading = true;
        if (this.lstResponsabilities && this.lstResponsabilities.length > 0) {
            this.plansService.checkDebt(payload).subscribe((response) => {
                if (response.HasDebt) {
                    this.isLoading = false;
                    this.bsModalRef = this.generateComposeInformativeModal('Para poder continuar con el proceso, debes normalizar tu situación de pago.', 'Si deseas puedes pagar haciendo click en Aceptar, o chatea con uno de nuestros representantes de Servicio al Cliente.', true);
                    this.bsModalRef.content.onClose.subscribe((accept) => {
                        accept ? this.router.navigate(['portal/my-account/my-invoices']) : this.router.navigate(['portal/my-account/my-plans']);
                    });
                }
                else {
                    this.isLoading = false;
                    let vida = this.obtenerVida(this.lstResponsabilities);
                    this.abrirEnNuevaPesatana(vida);
                    //Continuar con el nuevo plan
                }
            });
        }
        else {
            let vida = this.obtenerVida(this.lstResponsabilitiesNotMine);
            this.abrirEnNuevaPesatana(vida);
            this.isLoading = false;
        }
    }
    //------ Métodos necesarios para el manejo de modales ---- ///
    generateComposeInformativeModal(subTitle, description, isError) {
        const initialState = {
            initialState: {
                iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
                subTitle: subTitle,
                description: description,
                onlyButtonConfirm: false,
                textButton: '',
                textButton1: 'Cancelar',
                textButton2: 'Aceptar',
                visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 'modal-error-no-services',
            backdrop: true,
            ignoreBackdropClick: true
        };
        return this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
    generateInformativeModal(subTitle, description, isError) {
        const initialState = {
            initialState: {
                iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
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
    showConsumptionsModal(consumptions) {
        const initialState = {
            initialState: {
                consumptions: consumptions
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 'modal-error-no-services',
            backdrop: true,
            ignoreBackdropClick: false
        };
        this.bsModalRef = this.modalService.show(_components_my_plans_consumptions_modal_my_plans_consumptions_modal_page__WEBPACK_IMPORTED_MODULE_5__.MyPlansConsumptionsModalPage, initialState);
    }
};
MyPlansPage.ctorParameters = () => [
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__.UrlDataService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__.BsModalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_my_plans_service_service__WEBPACK_IMPORTED_MODULE_7__.MyPlansServices }
];
MyPlansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-my-plans',
        template: _my_plans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_plans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyPlansPage);



/***/ }),

/***/ 76782:
/*!****************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/services/my-plans.service.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPlansServices": () => (/* binding */ MyPlansServices)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let MyPlansServices = class MyPlansServices {
    constructor(http) {
        this.http = http;
    }
    getPlans(payload) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}PaymentGateway/GetContractedPlans`, payload);
    }
    checkDebt(payload) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/Affiliate/HasDebt`, payload);
    }
};
MyPlansServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
MyPlansServices = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], MyPlansServices);



/***/ }),

/***/ 58830:
/*!***************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-card/my-plans-card.page.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.plans-card-container {\n  width: 90%;\n  margin: auto;\n  opacity: 90%;\n  font-weight: 500;\n  padding: 0px 10px;\n}\n.header-row {\n  padding: 15px 10px;\n  align-items: center;\n  border-bottom: 3px solid #FF1E2D;\n}\n.plans-card-header-separator {\n  margin: 0px;\n}\n.plans-row {\n  padding: 10px;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n.plans-card-action-button {\n  padding-left: 0px;\n  color: #FF1E2D;\n}\n.plans-card-plan-separator {\n  margin: 0px;\n}\n.last-row {\n  border-bottom: none;\n}\n.plans-row-mobile-indicator {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBsYW5zLWNhcmQucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQWlDSjtBQTlCQTtFQUNJLFdBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQWlDSjtBQTlCQTtFQUNJLGlCQUFBO0VBQ0EsY0N6Qlk7QUQwRGhCO0FBOUJBO0VBQ0ksV0FBQTtBQWlDSjtBQTlCQTtFQUNJLG1CQUFBO0FBaUNKO0FBOUJBO0VBQ0ksYUFBQTtBQWlDSiIsImZpbGUiOiJteS1wbGFucy1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbi5wbGFucy1jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3BhY2l0eTogOTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5oZWFkZXItcm93IHtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHByaW1hcnktY29sb3I7XG59XG5cbi5wbGFucy1jYXJkLWhlYWRlci1zZXBhcmF0b3Ige1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ucGxhbnMtcm93IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5wbGFucy1jYXJkLWFjdGlvbi1idXR0b24ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLnBsYW5zLWNhcmQtcGxhbi1zZXBhcmF0b3Ige1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ubGFzdC1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5wbGFucy1yb3ctbW9iaWxlLWluZGljYXRvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbi8vICAgICAuaGVhZGVyLXJvdyB7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICB9XG4vLyAgICAgLnBsYW5zLXJvdyB7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjNGM0YzQ7XG4vLyAgICAgfVxuLy8gICAgIC5tb2JpbGUtaGlkZSB7XG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgfVxuLy8gICAgIC5wbGFucy1yb3ctbW9iaWxlLWluZGljYXRvciB7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4vLyAgICAgfVxuLy8gfSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 38653:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-consumptions-modal/my-plans-consumptions-modal.page.scss?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.modal-rounded .modal-content {\n  border-radius: 20px !important;\n  height: 300px !important;\n  border: none !important;\n  margin: 0 20px;\n  justify-content: center;\n}\n.cancel {\n  color: #a8a5a5;\n  pointer-events: auto;\n}\n.col-md-12 {\n  border-radius: 35px;\n  margin-bottom: -8px;\n  margin-top: -10px;\n  background-color: white;\n  min-height: 150px;\n  align-items: center;\n}\n.modal-center-align {\n  justify-content: center;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n.contenedor {\n  display: flex;\n  flex-direction: column;\n}\n.title-row {\n  justify-content: center;\n}\n.title {\n  color: #66182A;\n  font-size: 20px;\n  font-weight: 30px;\n}\n.icon-close {\n  display: flex;\n  justify-content: flex-end;\n  height: 20px;\n}\n.icon-header {\n  margin: auto;\n  padding-bottom: 25px;\n}\n.modal-content {\n  width: 90% !important;\n}\n.consumptions-container-categories {\n  border-bottom: 1px solid #000;\n  color: #FF1E2D;\n  padding-bottom: 10px;\n  font-weight: 600;\n}\n.consumptions-container-consumptions {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBsYW5zLWNvbnN1bXB0aW9ucy1tb2RhbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE3Qkk7RUFDSSw4QkFBQTtFQUVBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUErQlI7QUEzQkE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUE4Qko7QUEzQkE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUE4Qko7QUEzQkE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE4Qko7QUEzQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUE4Qko7QUEzQkE7RUFDSSx1QkFBQTtBQThCSjtBQTNCQTtFQUNJLGNDdkNjO0VEd0NkLGVBQUE7RUFDQSxpQkFBQTtBQThCSjtBQTNCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUE4Qko7QUEzQkE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUE4Qko7QUEzQkE7RUFDSSxxQkFBQTtBQThCSjtBQTNCQTtFQUNJLDZCQUFBO0VBQ0EsY0M5RFk7RUQrRFosb0JBQUE7RUFDQSxnQkFBQTtBQThCSjtBQTNCQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUE4QkoiLCJmaWxlIjoibXktcGxhbnMtY29uc3VtcHRpb25zLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbi5tb2RhbC1yb3VuZGVkIHtcbiAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgLy93aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuLmNhbmNlbCB7XG4gICAgY29sb3I6ICNhOGE1YTU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5jb2wtbWQtMTIge1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwtY2VudGVyLWFsaWduIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50aXRsZS1yb3d7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aXRsZXtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwcHg7XG59XG5cbi5pY29uLWNsb3NlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uaWNvbi1oZWFkZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbn1cblxuLmNvbnN1bXB0aW9ucy1jb250YWluZXItY2F0ZWdvcmllcyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb25zdW1wdGlvbnMtY29udGFpbmVyLWNvbnN1bXB0aW9ucyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 20601:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-main-info/my-plans-main-info.page.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-icon {\n  font-size: 24px;\n  color: #FF1E2D;\n}\n.plans-main-info-container {\n  width: 85%;\n  font-weight: 700;\n  padding: 15px 20px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.plans-main-info-main-row {\n  align-items: center;\n}\n.icon-col {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0px;\n}\n.svg-report {\n  fill: #FF1E2D;\n  padding-right: 5px;\n  width: 28px;\n  height: 30px;\n}\n.svg-people {\n  width: 42px;\n  height: 52;\n  fill: #FF1E2D;\n}\n.svg-paper {\n  width: 30px;\n  padding-right: 5px;\n  height: 32px;\n  stroke: #FF1E2D;\n}\n@media screen and (max-width: 768px) {\n  .my-plans-main-info-info-container {\n    border-bottom: 1px solid #FF1E2D;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBsYW5zLW1haW4taW5mby5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsY0NEWTtBRGtDaEI7QUE5QkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQWlDSjtBQTlCQTtFQUNJLG1CQUFBO0FBaUNKO0FBOUJBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWlDSjtBQTlCQTtFQUNJLGFDeEJZO0VEeUJaLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQ0o7QUE5QkE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFDakNZO0FEa0VoQjtBQTlCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQ3hDWTtBRHlFaEI7QUE5QkE7RUFDSTtJQUNJLGdDQUFBO0lBQ0EsbUJBQUE7RUFpQ047QUFDRiIsImZpbGUiOiJteS1wbGFucy1tYWluLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzc1wiO1xuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3Jcbn1cblxuLnBsYW5zLW1haW4taW5mby1jb250YWluZXIge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBsYW5zLW1haW4taW5mby1tYWluLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb24tY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uc3ZnLXJlcG9ydCB7XG4gICAgZmlsbDogJHByaW1hcnktY29sb3I7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLnN2Zy1wZW9wbGUge1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNTI7XG4gICAgZmlsbDogJHByaW1hcnktY29sb3I7XG59XG5cbi5zdmctcGFwZXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgc3Ryb2tlOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubXktcGxhbnMtbWFpbi1pbmZvLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 51472:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-new-plan/my-plans-new-plan.page.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.new-plan-card-container {\n  width: 90%;\n  margin: auto;\n  margin-top: 22px;\n}\n.new-plan-card {\n  width: 300px;\n  border-radius: 2px;\n  border-color: gray;\n  border-width: 0.3px;\n  padding: 18px;\n}\n.new-plan-card-icon {\n  fill: #FF1E2D;\n}\n.new-plan-card-label {\n  font-size: medium;\n  font-weight: 500;\n  color: #66182A;\n  opacity: 90%;\n}\nion-card-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\nion-icon {\n  color: #FF1E2D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBsYW5zLW5ldy1wbGFuLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQWlDSjtBQTlCQTtFQUNJLGFDZFk7QUQrQ2hCO0FBOUJBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbkJjO0VEb0JkLFlBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQzNCWTtBRDREaEI7QUE5QkE7RUFDSSxjQy9CWTtBRGdFaEIiLCJmaWxlIjoibXktcGxhbnMtbmV3LXBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuLm5ldy1wbGFuLWNhcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4ubmV3LXBsYW4tY2FyZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjNweDtcbiAgICBwYWRkaW5nOiAxOHB4O1xufVxuXG4ubmV3LXBsYW4tY2FyZC1pY29uIHtcbiAgICBmaWxsOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLm5ldy1wbGFuLWNhcmQtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgb3BhY2l0eTogOTAlO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuaW9uLWljb24ge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 38349:
/*!**********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/planlist/planlist.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.plans-card-container {\n  width: 85%;\n  margin: auto;\n  opacity: 90%;\n  font-weight: 500;\n  padding: 0px 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.header-row {\n  padding: 15px 10px;\n  align-items: center;\n  border-bottom: 3px solid #FF1E2D;\n}\n.plans-card-header-separator {\n  margin: 0px;\n}\n.plans-row {\n  padding: 10px;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n.plans-card-action-button {\n  padding-left: 0px;\n  color: #FF1E2D;\n}\n.plans-card-plan-separator {\n  margin: 0px;\n}\n.last-row {\n  border-bottom: none;\n}\n.plans-row-mobile-indicator {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .header-row {\n    text-align: center;\n  }\n  .plans-row {\n    text-align: center;\n    border-bottom: 2px solid #c4c4c4;\n  }\n  .mobile-hide {\n    display: none;\n  }\n  .plans-row-mobile-indicator {\n    font-weight: bold;\n    display: block;\n    color: #FF1E2D;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5saXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FBaUNKO0FBOUJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBaUNKO0FBOUJBO0VBQ0ksV0FBQTtBQWlDSjtBQTlCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBaUNKO0FBOUJBO0VBQ0ksaUJBQUE7RUFDQSxjQzFCWTtBRDJEaEI7QUE5QkE7RUFDSSxXQUFBO0FBaUNKO0FBOUJBO0VBQ0ksbUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0FBaUNKO0FBOUJBO0VBQ0k7SUFDSSxrQkFBQTtFQWlDTjtFQS9CRTtJQUNJLGtCQUFBO0lBQ0EsZ0NBQUE7RUFpQ047RUEvQkU7SUFDSSxhQUFBO0VBaUNOO0VBL0JFO0lBQ0ksaUJBQUE7SUFDQSxjQUFBO0lBQ0EsY0N2RFE7RUR3RmQ7QUFDRiIsImZpbGUiOiJwbGFubGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3NcIjtcbi5wbGFucy1jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3BhY2l0eTogOTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uaGVhZGVyLXJvdyB7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xufVxuXG4ucGxhbnMtY2FyZC1oZWFkZXItc2VwYXJhdG9yIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnBsYW5zLXJvdyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4ucGxhbnMtY2FyZC1hY3Rpb24tYnV0dG9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5wbGFucy1jYXJkLXBsYW4tc2VwYXJhdG9yIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmxhc3Qtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ucGxhbnMtcm93LW1vYmlsZS1pbmRpY2F0b3Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmhlYWRlci1yb3cge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5wbGFucy1yb3cge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYzRjNGM0O1xuICAgIH1cbiAgICAubW9iaWxlLWhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAucGxhbnMtcm93LW1vYmlsZS1pbmRpY2F0b3Ige1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICB9XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 76118:
/*!*********************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/my-plans.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n  font-family: \"Mark OT\", sans-serif;\n}\nion-item {\n  border: none !important;\n}\nion-row {\n  margin-bottom: 5px !important;\n}\n.modal-rounded-term .modal-content {\n  border-radius: 20px !important;\n  height: 500px;\n  border: none !important;\n  margin: 0 20px;\n  justify-content: center;\n}\n.new-plan-card {\n  border-radius: 2px;\n  border-style: dashed;\n  border-color: gray;\n  border-width: 0.3px;\n  padding: 18px;\n  width: 85%;\n  margin: auto;\n  margin-top: 22px;\n}\n.new-plan-card-icon {\n  fill: #FF1E2D;\n}\n.new-plan-card-label {\n  font-size: medium;\n  font-weight: 400;\n  color: #66182A;\n  opacity: 90%;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n.my-plans-main-container {\n  background-color: #f0f0f0;\n  height: 100%;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBsYW5zLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7QUFpQ0o7QUE5QkE7RUFDSSx1QkFBQTtBQWlDSjtBQTlCQTtFQUNJLDZCQUFBO0FBaUNKO0FBN0JJO0VBQ0ksOEJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUErQlI7QUEzQkE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBOEJKO0FBM0JBO0VBQ0ksYUMxQ1k7QUR3RWhCO0FBM0JBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDL0NjO0VEZ0RkLFlBQUE7QUE4Qko7QUEzQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBOEJKO0FBM0JBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE4QkoiLCJmaWxlIjoibXktcGxhbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzc1wiO1xuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBPVCcsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1yb3VuZGVkLXRlcm0ge1xuICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAvL3dpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuLm5ldy1wbGFuLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICBib3JkZXItY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjNweDtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG59XG5cbi5uZXctcGxhbi1jYXJkLWljb24ge1xuICAgIGZpbGw6ICRwcmltYXJ5LWNvbG9yO1xufVxuXG4ubmV3LXBsYW4tY2FyZC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICBvcGFjaXR5OiA5MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuLm15LXBsYW5zLW1haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 33892:
/*!***************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-card/my-plans-card.page.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-row *ngFor=\"let plan of planList let first = first; let last = last\" class=\"row plans-row\" [class.last-row]=\"last\">\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>{{getNames(plan)}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-label>Matricula : {{matriculaFamilia}}</ion-label>\n            </ion-row>\n            <ion-row>\n                <ion-label>Modalidad de pago : {{facturacion}}</ion-label>\n            </ion-row>\n            <ion-row>\n                <ion-label>Total : {{getTotal(plan) | currency}}</ion-label>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-row >\n        <ion-col class=\"ion-content-left \" size=\"12\">\n            <app-button [configuration]=\"configurationButtonDetail\" (click)=\"onShowConsumptions(plan.ProductosContratados)\"></app-button>\n        </ion-col>\n    </ion-row>\n\n</ion-row>";

/***/ }),

/***/ 60261:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-consumptions-modal/my-plans-consumptions-modal.page.html?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-dialog modal-md modal-center-align\">\n    <div class=\"modal-body modal-check col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"contenedor\">\n                    <div class=\"icon-close cursor-pointer\" (click)=\"closeModal()\">\n                        <a class=\"cancel\">\n                            <img src=\"{{imgRoute}}icons/cancel.svg\" alt=\"Imagen\">\n                        </a>\n                    </div>\n                    <ion-row class=\"title-row\">\n                        <ion-label class=\"title\">Detalle de consumos</ion-label>\n                    </ion-row>\n                    <hr/>\n                    <!--Aca van los consumos-->\n                    <div class=\"consumptions-container container ion-padding-top\">\n                        <ion-row>\n                            <ion-col size=\"8\" >Descripción</ion-col>\n                            <ion-col size=\"4\">Monto</ion-col>\n                        </ion-row>\n                        <ion-row *ngFor=\"let item of consumptions\">\n                            <ion-col size=\"8\">{{item.NombrePlan}}</ion-col>\n                            <ion-col size=\"4\">{{item.TarifaFacturada.Importe | currency}}</ion-col>\n                        </ion-row>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";

/***/ }),

/***/ 17926:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-main-info/my-plans-main-info.page.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\n\n    <ion-card-header>\n        <ion-card-title></ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n        <ion-row>\n            <ion-col size=\"2\" class=\"d-flex ion-justify-content-center\">\n                <svg class=\"svg-report\" viewBox=\"0 0 32 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                              <path\n                                d=\"M20.847 30.4639H5.86057C4.45388 30.4639 3.30566 29.3207 3.30566 27.909V5.5958C3.30566 4.18911 4.44891 3.04089 5.86057 3.04089H16.8457C17.1638 3.04089 17.4272 3.29937 17.4272 3.62246C17.4272 3.94555 17.1638 4.20402 16.8457 4.20402H5.86057C5.09509 4.20402 4.46879 4.83032 4.46879 5.5958V27.914C4.46879 28.6794 5.09509 29.3057 5.86057 29.3057H20.847C21.6125 29.3057 22.2388 28.6794 22.2388 27.914V17.3762C22.2388 17.0581 22.4973 16.7946 22.8204 16.7946C23.1435 16.7946 23.4019 17.0531 23.4019 17.3762V27.914C23.4019 29.3207 22.2587 30.4639 20.847 30.4639Z\" />\n                              <path\n                                d=\"M14.1121 10.3725H8.29641C7.97829 10.3725 7.71484 10.1141 7.71484 9.79098C7.71484 9.46788 7.97332 9.20941 8.29641 9.20941H14.1121C14.4302 9.20941 14.6936 9.46788 14.6936 9.79098C14.6936 10.1141 14.4351 10.3725 14.1121 10.3725Z\" />\n                              <path\n                                d=\"M15.2951 14.707H8.29641C7.97829 14.707 7.71484 14.4485 7.71484 14.1254C7.71484 13.8023 7.97332 13.5438 8.29641 13.5438H15.3C15.6182 13.5438 15.8816 13.8023 15.8816 14.1254C15.8816 14.4485 15.6182 14.707 15.2951 14.707Z\" />\n                              <path\n                                d=\"M18.2277 19.0463H8.29641C7.97829 19.0463 7.71484 18.7878 7.71484 18.4647C7.71484 18.1417 7.97332 17.8832 8.29641 17.8832H18.2277C18.5459 17.8832 18.8093 18.1417 18.8093 18.4647C18.8093 18.7878 18.5459 19.0463 18.2277 19.0463Z\" />\n                              <path\n                                d=\"M18.2277 23.3857H8.29641C7.97829 23.3857 7.71484 23.1272 7.71484 22.8041C7.71484 22.481 7.97332 22.2225 8.29641 22.2225H18.2277C18.5459 22.2225 18.8093 22.481 18.8093 22.8041C18.8093 23.1272 18.5459 23.3857 18.2277 23.3857Z\" />\n                              <path\n                                d=\"M22.0805 15.8453C18.5612 15.8453 15.7031 12.9822 15.7031 9.46793C15.7031 5.95369 18.5612 3.08563 22.0805 3.08563C25.5997 3.08563 28.4578 5.94872 28.4578 9.46296C28.4578 12.9772 25.5997 15.8453 22.0805 15.8453ZM22.0805 4.24379C19.2025 4.24379 16.8613 6.58496 16.8613 9.46296C16.8613 12.341 19.2025 14.6821 22.0805 14.6821C24.9585 14.6821 27.2996 12.341 27.2996 9.46296C27.2996 6.58496 24.9585 4.24379 22.0805 4.24379Z\" />\n                              <path\n                                d=\"M21.255 12.4205C20.9767 12.4205 20.6983 12.336 20.4647 12.157C20.415 12.1223 20.3702 12.0825 20.3255 12.0378L18.8492 10.5615C18.6206 10.3328 18.6206 9.96997 18.8492 9.74132C19.0779 9.51267 19.4407 9.51267 19.6694 9.74132L21.1457 11.2176C21.1506 11.2226 21.1556 11.2275 21.1606 11.2325C21.2302 11.2872 21.3296 11.2723 21.3842 11.2027L24.2424 7.39518C24.4362 7.13671 24.7991 7.087 25.0526 7.28085C25.311 7.47471 25.3608 7.83756 25.1669 8.09107L22.3088 11.8986C22.0503 12.2415 21.6527 12.4205 21.255 12.4205Z\" />\n                            </svg>\n            </ion-col>\n            <ion-col size=\"10\">\n                <ion-row>\n                    <ion-label class=\"title-sub-primary\">Plan actual</ion-label>\n                </ion-row>\n                <ion-row>\n                    <ion-label>Falk Plus</ion-label>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"2\" class=\"d-flex ion-justify-content-center\">\n                <svg class=\"svg-people\" viewBox=\"0 0 59 59\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                              <g clip-path=\"url(#clip0_6244_26210)\">\n                                <path class=\"afiliate-card-user-icon-color\"\n                                  d=\"M37.2379 31.6427C37.2206 31.215 37.1637 30.7899 37.0679 30.3727C37.0073 30.0321 36.9169 29.6975 36.7979 29.3727C36.6391 28.9587 36.4554 28.5546 36.2479 28.1627C35.8272 27.3617 35.2608 26.6462 34.5779 26.0527C34.13 25.6614 33.6364 25.3256 33.1079 25.0527L32.8979 24.9327H32.8479L32.7179 24.8627L32.0379 24.5827L31.8479 24.5127L31.4879 24.3827C31.3568 24.3433 31.2232 24.3132 31.0879 24.2927H30.9679C29.8584 24.0429 28.7073 24.0429 27.5979 24.2927H27.4679L27.0779 24.3827L26.7179 24.5127L26.5179 24.5827L25.8379 24.8627L25.7179 24.9327H25.6579C25.5891 24.969 25.5223 25.0091 25.4579 25.0527C24.1152 25.7484 23.0164 26.8368 22.3079 28.1727C22.1003 28.5646 21.9166 28.9687 21.7579 29.3827C21.6421 29.7078 21.5551 30.0424 21.4979 30.3827C21.4008 30.7969 21.3373 31.2183 21.3079 31.6427C21.3079 33.4527 21.3079 35.2527 21.3079 37.0627C21.3052 37.1703 21.3242 37.2773 21.3638 37.3774C21.4034 37.4774 21.4628 37.5684 21.5385 37.645C21.6141 37.7215 21.7044 37.7821 21.8039 37.8229C21.9035 37.8638 22.0103 37.8841 22.1179 37.8827H24.8279C24.9579 37.8827 25.0179 37.9327 25.0179 38.0627C25.0179 38.5827 25.1079 39.0627 25.1479 39.6227C25.1879 40.1827 25.2179 40.4227 25.2479 40.8327C25.2479 40.9927 25.2479 41.1527 25.2479 41.3127L25.3079 41.6427C25.3079 41.9727 25.3079 42.3027 25.3879 42.6427C25.3879 42.7927 25.3879 42.9227 25.3879 43.0727C25.3879 43.2227 25.3879 43.4227 25.3879 43.6027C25.3879 43.7827 25.3879 43.7627 25.3879 43.8527C25.3879 43.9427 25.3879 44.0027 25.3879 44.0827C25.3879 44.7027 25.4879 45.3127 25.5179 45.9327C25.5338 46.064 25.5782 46.1903 25.6479 46.3027V46.3627C25.6879 46.4276 25.7402 46.4839 25.802 46.5285C25.8638 46.5732 25.9337 46.6052 26.0079 46.6227C26.0079 46.6227 26.0079 46.6227 26.0079 46.6727H32.3079L32.3579 46.6227C32.5039 46.5849 32.6295 46.4916 32.7079 46.3627V46.3027C32.7789 46.1917 32.8202 46.0643 32.8279 45.9327C32.8279 45.3127 32.9179 44.7027 32.9579 44.0827C32.9623 44.0061 32.9623 43.9293 32.9579 43.8527V43.6027C32.9579 43.4227 32.9579 43.2427 32.9579 43.0727V42.6427L33.0479 41.6427C33.0479 41.5427 33.0479 41.4427 33.0479 41.3427C33.0479 41.2427 33.0479 41.0227 33.0479 40.8627C33.0479 40.4527 33.1179 40.0527 33.1479 39.6527C33.1779 39.2527 33.2379 38.6527 33.2779 38.0927C33.2779 37.9627 33.3379 37.9127 33.4679 37.9127H36.1879C36.295 37.9142 36.4014 37.8938 36.5004 37.8528C36.5994 37.8119 36.6891 37.7512 36.7639 37.6745C36.8387 37.5978 36.8972 37.5066 36.9357 37.4066C36.9742 37.3066 36.9919 37.1998 36.9879 37.0927C37.2379 35.2627 37.3079 33.4627 37.2379 31.6427ZM35.8279 36.3027C35.8279 36.4027 35.8279 36.4527 35.6879 36.4427H32.8379C32.7684 36.445 32.7002 36.4621 32.6379 36.4927C32.4995 36.5516 32.3809 36.6488 32.2959 36.7728C32.2109 36.8968 32.163 37.0425 32.1579 37.1927C32.1579 37.4327 32.1579 37.6827 32.1579 37.9327C31.9679 39.9327 31.8179 41.9327 31.6679 43.8827V44.3427C31.6679 44.5527 31.6679 44.7627 31.6679 44.9827C31.6699 45.0073 31.6661 45.0321 31.657 45.055C31.6478 45.0779 31.6335 45.0984 31.6151 45.1149C31.5967 45.1314 31.5747 45.1433 31.5509 45.1499C31.5271 45.1565 31.5021 45.1574 31.4779 45.1527C30.0979 45.1527 28.7179 45.1527 27.3379 45.1527C27.2079 45.1527 27.1679 45.0927 27.1579 44.9827L27.0979 44.3327C27.0979 44.1827 27.0979 44.0327 27.0979 43.8827C26.9379 41.8827 26.7879 39.8827 26.5979 37.9327V37.8827C26.5979 37.6427 26.5979 37.3927 26.5979 37.1527C26.5928 37.0025 26.5449 36.8568 26.4599 36.7328C26.3748 36.6088 26.2562 36.5116 26.1179 36.4527C26.0558 36.4211 25.9875 36.404 25.9179 36.4027H25.6379C24.7179 36.4027 23.7779 36.3327 22.8679 36.4027C22.7679 36.4027 22.7379 36.4027 22.7379 36.2627V32.4227C22.7379 32.4227 22.8179 31.5727 22.8579 31.1127C22.8642 30.9533 22.891 30.7953 22.9379 30.6427C23.0679 30.2227 23.1979 29.7927 23.3579 29.3927C23.9398 28.0881 24.9372 27.0127 26.1944 26.3344C27.4516 25.656 28.8979 25.4128 30.3079 25.6427C31.8311 25.9081 33.2139 26.6968 34.2179 27.8727C34.6396 28.3305 34.978 28.8584 35.2179 29.4327C35.3741 29.8292 35.5109 30.233 35.6279 30.6427C35.6714 30.7957 35.6949 30.9537 35.6979 31.1127C35.6979 31.5727 35.8279 34.3027 35.8279 35.2327C35.8279 35.6427 35.8179 35.9527 35.8279 36.3127V36.3027Z\" />\n                                <path class=\"afiliate-card-user-icon-color\"\n                                  d=\"M34.8878 16.4027C34.8088 15.9424 34.6675 15.495 34.4678 15.0727C34.2392 14.5547 33.936 14.0729 33.5678 13.6427C33.0893 13.0944 32.5128 12.64 31.8678 12.3027C31.4876 12.11 31.0889 11.9559 30.6778 11.8427C30.4074 11.7783 30.1336 11.7282 29.8578 11.6927C29.8251 11.7017 29.7906 11.7017 29.7578 11.6927H28.6978C28.6978 11.6927 28.6978 11.7427 28.6278 11.7427C28.3678 11.7927 28.0978 11.8227 27.8478 11.8827C27.5971 11.9199 27.3497 11.9768 27.1078 12.0527C26.6814 12.2234 26.2755 12.4414 25.8978 12.7027C25.3126 13.111 24.8104 13.6269 24.4178 14.2227C24.0684 14.7146 23.8141 15.2674 23.6678 15.8527C23.5657 16.2165 23.4922 16.5876 23.4478 16.9627C23.423 17.3457 23.423 17.7298 23.4478 18.1127C23.4808 18.5249 23.5648 18.9313 23.6978 19.3227C23.8644 19.8275 24.0964 20.3082 24.3878 20.7527C24.7466 21.2812 25.193 21.7446 25.7078 22.1227C26.304 22.5816 26.9831 22.9211 27.7078 23.1227C28.1664 23.2406 28.6352 23.3143 29.1078 23.3427C29.2505 23.3621 29.3952 23.3621 29.5378 23.3427C29.8735 23.3199 30.2075 23.2765 30.5378 23.2127C30.9453 23.1141 31.3435 22.9803 31.7278 22.8127C32.6038 22.3906 33.3612 21.7576 33.9319 20.9704C34.5027 20.1832 34.869 19.2665 34.9978 18.3027C35.0695 17.6678 35.0323 17.0252 34.8878 16.4027ZM29.2078 21.8427C28.339 21.8487 27.4881 21.5961 26.7632 21.1171C26.0383 20.6381 25.4723 19.9544 25.1371 19.1528C24.8019 18.3513 24.7126 17.4681 24.8806 16.6157C25.0487 15.7633 25.4665 14.9801 26.0808 14.3657C26.6952 13.7514 27.4784 13.3336 28.3308 13.1656C29.1832 12.9975 30.0663 13.0868 30.8679 13.422C31.6694 13.7572 32.3532 14.3233 32.8322 15.0481C33.3112 15.773 33.5638 16.6239 33.5578 17.4927C33.5552 18.6456 33.096 19.7505 32.2808 20.5657C31.4656 21.381 30.3607 21.8401 29.2078 21.8427Z\" />\n                              </g>\n                              <defs>\n                                <clipPath id=\"clip0_6244_26210\">\n                                  <rect width=\"15.94\" height=\"34.99\" fill=\"white\" transform=\"translate(21.3081 11.6428)\" />\n                                </clipPath>\n                              </defs>\n                            </svg>\n            </ion-col>\n            <ion-col size=\"10\">\n                <ion-row>\n                    <ion-label class=\"title-sub-primary\">Responsable pago</ion-label>\n                </ion-row>\n                <ion-row>\n                    <ion-label>{{responsable}}</ion-label>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"2\" class=\"d-flex ion-justify-content-center\">\n                <svg class=\"svg-paper\" width=\"33\" height=\"33\" viewBox=\"0 0 33 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                          <path\n                            d=\"M8.19434 5.99805C8.19434 5.38766 8.68929 4.89271 9.29968 4.89271H20.5718C20.9034 4.89148 21.2202 5.02412 21.4523 5.26116L25.041 8.95301C25.2646 9.18268 25.3898 9.49218 25.3886 9.81273V25.8943C25.3886 26.5047 24.8937 26.9996 24.2833 26.9996H9.29968C8.68929 26.9996 8.19434 26.5047 8.19434 25.8943V5.99805Z\"\n                            stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                        </svg>\n            </ion-col>\n            <ion-col size=\"10\">\n                <ion-row>\n                    <ion-label class=\"title-sub-primary\">Última factura</ion-label>\n                </ion-row>\n                <ion-row>\n                    <ion-label>{{lastFeeDate}}</ion-label>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n\n    </ion-card-content>\n\n</ion-card>";

/***/ }),

/***/ 60080:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/my-plans-new-plan/my-plans-new-plan.page.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <div class=\"new-plan-card-container d-flex ion-justify-content-center\">\n    <ion-row class=\"ion-padding-top new-plan-card cursor-pointer\" (click)=\"generateNewPlan()\">\n        <ion-item>\n            <ion-label> Contratar para nuevo beneficiario</ion-label>\n        </ion-item>\n    </ion-row>\n</div> -->\n\n<ion-row>\n    <ion-col size=\"12\">\n        <ion-card>\n            <ion-card-header>\n                <ion-row (click)=\"generateNewPlan()\">\n                    <ion-col size=\"2\">\n                        <ion-icon name=\"person-add-outline\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"10\">\n                        <ion-card-title>Contratar para nuevo beneficiario</ion-card-title>\n                    </ion-col>\n                </ion-row>\n            </ion-card-header>\n        </ion-card>\n    </ion-col>\n</ion-row>";

/***/ }),

/***/ 79159:
/*!**********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/components/planlist/planlist.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <div class=\"container plans-card-container\">\n\n    <ion-row>\n        <div class=\"col-md-3 col-sm-12\">\n            <span>Beneficiarios</span>\n        </div>\n        <div class=\"col-3 mobile-hide\">\n            <span>Matricula</span>\n        </div>\n        <div class=\"col-2 mobile-hide\">\n            <span>Modalidad de pago</span>\n        </div>\n        <div class=\"col-2 mobile-hide\">\n            <span>Total</span>\n        </div>\n        <div class=\"col-2 mobile-hide\">\n            <span>Acción</span>\n        </div>\n    </ion-row>\n\n    <ion-row *ngFor=\"let plan of planList let first = first; let last = last\" class=\"row plans-row\" [class.last-row]=\"last\">\n        <div class=\"col-md-3 col-sm-12\">\n            <span class=\"plans-row-mobile-indicator\">Nombre:</span>\n            <span>{{getNames(plan)}}</span>\n        </div>\n        <div class=\"col-md-3 col-sm-12\">\n            <span class=\"plans-row-mobile-indicator\">Matricula:</span>\n            <span>{{matriculaFamilia}}</span>\n        </div>\n        <div class=\"col-md-2 col-sm-12\">\n            <span class=\"plans-row-mobile-indicator\">Modalidad de pago:</span>\n            <span>{{facturacion}}</span>\n        </div>\n        <div class=\"col-md-2 col-sm-12\">\n            <span class=\"plans-row-mobile-indicator\">Total:</span>\n            <span>{{getTotal(plan) | currency}}</span>\n        </div>\n\n        <ion-row>\n            <ion-col sizeMd>\n                <ion-button size=\"small\" color=\"light\" class=\"plans-card-action-button\" (click)=\"onShowConsumptions(plan.ProductosContratados)\">\n                    Ver Consumos\n                </ion-button>\n            </ion-col>\n        </ion-row>\n\n    </ion-row>\n\n</div> -->";

/***/ }),

/***/ 41054:
/*!*********************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-plans/my-plans.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Mis Planes</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div *ngFor=\"let plans of userPlans\">\n        <app-my-plans-main-info [responsable]=\"getNames(plans)\" [lastFeeDate]=\"plans['Facturacion']['DescripcionFactura']\">\n        </app-my-plans-main-info>\n        <app-my-plans-card [planList]=\"plans['Beneficiarios']\" [facturacion]=\"plans['TipoFacturacion']\" [matriculaFamilia]=\"plans['MatriculaFamilia']\" [onShowConsumptions]=\"showConsumptionsModal\"></app-my-plans-card>\n    </div>\n\n    <app-my-plans-new-plan [user]=\"user\" [lstResponsabilities]=\"lstResponsabilities\" [lstResponsabilitiesNotMine]=\"lstResponsabilitiesNotMine\" [obtenerVida]=\"obtenerVida\" [abrirEnNuevaPesatana]=\"abrirEnNuevaPesatana\" [generateNewPlan]=\"generateNewPlan\" [getPlanPayload]=\"getPlanPayload\"\n        [plansService]=\"plansService\" [isLoading]=\"isLoading\" bsModalRef=\"bsModalRef\" [generateComposeInformativeModal]=\"generateComposeInformativeModal\" [modalService]=\"modalService\" [router]=\"router\">\n    </app-my-plans-new-plan>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_my-account_my-plans_my-plans_module_ts.js.map