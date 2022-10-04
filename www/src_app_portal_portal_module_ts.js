"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_portal_module_ts"],{

/***/ 33510:
/*!**************************************************!*\
  !*** ./src/app/portal/portal-rounting.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalRoutingModule": () => (/* binding */ PortalRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _portal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal.component */ 91951);





const routes = [
    {
        path: '',
        canActivate: [_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _portal_component__WEBPACK_IMPORTED_MODULE_1__.PortalComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_portal_moduls_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/home/home.module */ 35062)).then(x => x.HomePageModule)
            },
            {
                path: 'my-account/my-plans',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_portal_moduls_my-account_my-plans_my-plans_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/my-plans/my-plans.module */ 41518)).then(x => x.MyPlansPageModule)
            },
            {
                path: 'my-account/my-data',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_my-account_my-data_my-data_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/my-data/my-data.module */ 69379)).then(x => x.MyDataModule)
            },
            {
                path: 'my-account/my-invoices',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_my-account_my-invoices_my-invoices_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/my-invoices/my-invoices.module */ 78401)).then(x => x.MyInvoicesPageModule)
            },
            {
                path: 'request-service',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_service-solicitud_service-solicitud_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/service-solicitud/service-solicitud.module */ 72877)).then(x => x.ServiceSolicitudPageModule)
            },
            {
                path: 'my-account/my-afiliates',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_my-account_my-afiliates_my-afiliates_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/my-afiliates/my-afiliates.module */ 17054)).then(x => x.MyAfiliatesModule)
            },
            {
                path: 'admin',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_portal_moduls_medical-centers_models_clinics_ts-src_app_portal_moduls_medical-c5b919"), __webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_medical-centers_medical-centers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/medical-centers/medical-centers.module */ 20091)).then(x => x.MedicalCentersPageModule)
            },
            {
                path: 'admin/clinics',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_portal_moduls_medical-centers_models_clinics_ts-src_app_portal_moduls_medical-c5b919"), __webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_medical-centers_medical-centers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/medical-centers/medical-centers.module */ 20091)).then(x => x.MedicalCentersPageModule)
            },
            {
                path: 'medical-centers/map-clinics-nearby',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_portal_moduls_medical-centers_models_clinics_ts-src_app_portal_moduls_medical-c5b919"), __webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_medical-centers_medical-centers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/medical-centers/medical-centers.module */ 20091)).then(x => x.MedicalCentersPageModule)
            },
            {
                path: 'admin/clinics/coordinations',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_portal_moduls_medical-centers_models_clinics_ts-src_app_portal_moduls_medical-c5b919"), __webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_medical-centers_medical-centers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/medical-centers/medical-centers.module */ 20091)).then(x => x.MedicalCentersPageModule)
            },
            {
                path: 'myhealth/scheduledservices',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_scheduled-services_scheduled-services_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/scheduled-services/scheduled-services.module */ 75398)).then(x => x.ScheduledServicesPageModule)
            },
            {
                path: 'myhealth/expired-medical-services',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_expired-medical-services_expired-medical-services_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/expired-medical-services/expired-medical-services.module */ 90583)).then(x => x.ExpiredMedicalServicesPageModule)
            },
            {
                path: 'myhealth/service-history',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_service-history_service-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/service-history/service-history.module */ 5417)).then(m => m.ServiceHistoryPageModule)
            },
            {
                path: 'my-account/generate-certificates',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_my-account_documents-generation_documents-generation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/documents-generation/documents-generation.module */ 90319)).then(x => x.DocumentsGenerationModule)
            },
            {
                path: 'my-account/generate-certificates/red-siem',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_my-account_documents-generation_documents-generation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/documents-generation/documents-generation.module */ 90319)).then(m => m.DocumentsGenerationModule)
            },
            {
                path: 'my-account/account-configuration',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_my-account_account-configuration_account-configuration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/account-configuration/account-configuration.module */ 62857)).then(x => x.AccountConfigurationPageModule)
            },
            {
                path: 'my-account/registerChild',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_my-account_register-child_register-child_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/register-child/register-child.module */ 61517)).then(x => x.RegisterChildPageModule)
            },
            {
                path: 'service-solicitud',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_service-solicitud_service-solicitud_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/service-solicitud/service-solicitud.module */ 72877)).then(x => x.ServiceSolicitudPageModule)
            },
            {
                path: 'my-account/fingerprint',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_portal_moduls_my-account_fingerprint_active-fingerprint_active-fingerprint_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/fingerprint/active-fingerprint/active-fingerprint.module */ 20310)).then(x => x.ActiveFingerprintPageModule)
            },
            {
                path: 'my-account/info-fingerprint',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_portal_moduls_my-account_fingerprint_info-fingerprint_info-fingerprint_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/my-account/fingerprint/info-fingerprint/info-fingerprint.module */ 5240)).then(x => x.InfoFingerprintPageModule)
            },
            {
                path: 'customer-service/faqs',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_customer-service_components_faqs_faqs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/customer-service/components/faqs/faqs.module */ 85262)).then(x => x.FaqsPageModule)
            },
            {
                path: 'customer-service/optionseventtypes',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_customer-service_components_options-event-types_options-event-types_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/customer-service/components/options-event-types/options-event-types.module */ 53180)).then(x => x.OptionsEventTypesPageModule)
            },
            {
                path: 'customer-service/terms',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_customer-service_components_terms_terms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/customer-service/components/terms/terms.module */ 17765)).then(x => x.TermsPageModule)
            },
            {
                path: 'customer-service/policies',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_portal_moduls_customer-service_components_policies_policies_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/customer-service/components/policies/policies.module */ 54933)).then(x => x.PoliciesPageModule)
            },
            {
                path: 'specialists',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_portal_moduls_medical-centers_models_clinics_ts-src_app_portal_moduls_medical-c5b919"), __webpack_require__.e("common"), __webpack_require__.e("src_app_portal_moduls_specialists_specialists_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./moduls/specialists/specialists.module */ 85705)).then(x => x.SpecialistsPageModule)
            }
        ]
    }
];
let PortalRoutingModule = class PortalRoutingModule {
};
PortalRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], PortalRoutingModule);



/***/ }),

/***/ 91951:
/*!********************************************!*\
  !*** ./src/app/portal/portal.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalComponent": () => (/* binding */ PortalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _portal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal.component.html?ngResource */ 63994);
/* harmony import */ var _portal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal.component.scss?ngResource */ 80512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/url-data-service */ 2029);






let PortalComponent = class PortalComponent {
    constructor(urlDataServices) {
        this.urlDataServices = urlDataServices;
        this.urlDataServices.showHeader.subscribe(resp => this.showHeader = resp);
        this.screenWidth = window.innerWidth;
        window.onresize = () => {
            this.screenWidth = window.innerWidth;
        };
        this.icon = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/hambur-icon.svg`;
    }
    ngOnInit() {
    }
};
PortalComponent.ctorParameters = () => [
    { type: _shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__.UrlDataService }
];
PortalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-portal',
        template: _portal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_portal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PortalComponent);



/***/ }),

/***/ 6455:
/*!*****************************************!*\
  !*** ./src/app/portal/portal.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalModule": () => (/* binding */ PortalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _portal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal.component */ 91951);
/* harmony import */ var _portal_rounting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal-rounting.module */ 33510);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);







let PortalModule = class PortalModule {
};
PortalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _portal_component__WEBPACK_IMPORTED_MODULE_1__.PortalComponent,
        ],
        imports: [
            _portal_rounting_module__WEBPACK_IMPORTED_MODULE_2__.PortalRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule
        ]
    })
], PortalModule);



/***/ }),

/***/ 80512:
/*!*********************************************************!*\
  !*** ./src/app/portal/portal.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0YWwuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 63994:
/*!*********************************************************!*\
  !*** ./src/app/portal/portal.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<app-menu class=\"ion-menu-container\"></app-menu>\n<router-outlet></router-outlet>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_portal_module_ts.js.map