"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_my-account_account-configuration_account-configuration_module_ts"],{

/***/ 83895:
/*!********************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/models/globalServiceVariables.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalServiceVariables": () => (/* binding */ GlobalServiceVariables)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let GlobalServiceVariables = class GlobalServiceVariables {
};
GlobalServiceVariables = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], GlobalServiceVariables);



/***/ }),

/***/ 23116:
/*!********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/account-configuration-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountConfigurationPageRoutingModule": () => (/* binding */ AccountConfigurationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _account_configuration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-configuration.page */ 11474);





const routes = [
    {
        path: '',
        component: _account_configuration_page__WEBPACK_IMPORTED_MODULE_1__.AccountConfigurationPage,
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard]
    },
];
let AccountConfigurationPageRoutingModule = class AccountConfigurationPageRoutingModule {
};
AccountConfigurationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AccountConfigurationPageRoutingModule);



/***/ }),

/***/ 62857:
/*!************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/account-configuration.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountConfigurationPageModule": () => (/* binding */ AccountConfigurationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-configuration-routing.module */ 23116);
/* harmony import */ var _components_change_password_change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/change-password/change-password.page */ 98868);
/* harmony import */ var _components_deactivate_user_account_deactivate_user_account_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/deactivate-user-account/deactivate-user-account.page */ 26273);
/* harmony import */ var _components_deactivation_modal_deactivation_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/deactivation-modal/deactivation-modal.page */ 52660);
/* harmony import */ var _components_edit_user_email_edit_user_email_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-user-email/edit-user-email.page */ 95749);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _medical_centers_models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../medical-centers/models/globalServiceVariables */ 83895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _account_configuration_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-configuration.page */ 11474);
/* harmony import */ var _public_sections_shared_components_password_validator_password_validator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../public/sections/shared/components/password-validator/password-validator.component */ 8069);















let AccountConfigurationPageModule = class AccountConfigurationPageModule {
};
AccountConfigurationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
            _account_configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountConfigurationPageRoutingModule
        ],
        declarations: [
            _account_configuration_page__WEBPACK_IMPORTED_MODULE_7__.AccountConfigurationPage,
            _components_change_password_change_password_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPage,
            _components_deactivate_user_account_deactivate_user_account_page__WEBPACK_IMPORTED_MODULE_2__.DeactivateUserAccountPage,
            _components_deactivation_modal_deactivation_modal_page__WEBPACK_IMPORTED_MODULE_3__.DeactivationModalPage,
            _components_edit_user_email_edit_user_email_page__WEBPACK_IMPORTED_MODULE_4__.EditUserEmailPage,
            _public_sections_shared_components_password_validator_password_validator_component__WEBPACK_IMPORTED_MODULE_8__.PasswordValidatorComponent
        ],
        providers: [
            _medical_centers_models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_6__.GlobalServiceVariables
        ]
    })
], AccountConfigurationPageModule);



/***/ }),

/***/ 11474:
/*!**********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/account-configuration.page.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountConfigurationPage": () => (/* binding */ AccountConfigurationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_configuration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-configuration.page.html?ngResource */ 28854);
/* harmony import */ var _account_configuration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-configuration.page.scss?ngResource */ 1279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AccountConfigurationPage = class AccountConfigurationPage {
    constructor() {
        this.currentSection = 'change-password';
    }
    ngOnInit() {
        this.currentSection = "change-password";
    }
    setSection(section) {
        this.currentSection = section;
    }
};
AccountConfigurationPage.ctorParameters = () => [];
AccountConfigurationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-account-configuration',
        template: _account_configuration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_configuration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountConfigurationPage);



/***/ }),

/***/ 98868:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/change-password/change-password.page.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page.html?ngResource */ 38241);
/* harmony import */ var _change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page.scss?ngResource */ 62430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_portal_moduls_scheduled_services_configs_cancelButtonConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portal/moduls/scheduled-services/configs/cancelButtonConfig */ 67407);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_helpers_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/regex */ 43274);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _configs_saveButtonConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/saveButtonConfig */ 75748);
/* harmony import */ var _models_changePassword_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/changePassword.model */ 97225);
/* harmony import */ var _services_change_password_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/change-password.service */ 36331);

















let ChangePasswordPage = class ChangePasswordPage {
    constructor(translate, changePasswordService, router, route, fb, bsModalService) {
        this.changePasswordService = changePasswordService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.bsModalService = bsModalService;
        this.changePasswordModel = new _models_changePassword_model__WEBPACK_IMPORTED_MODULE_9__.ChangePassword();
        this.confirmResult = false;
        this.regex = src_app_shared_helpers_regex__WEBPACK_IMPORTED_MODULE_5__.Regex;
        this.saveButtonConfig = _configs_saveButtonConfig__WEBPACK_IMPORTED_MODULE_8__.saveButtonConfigExport;
        this.cancelButtonConfig = src_app_portal_moduls_scheduled_services_configs_cancelButtonConfig__WEBPACK_IMPORTED_MODULE_2__.cancelButtonConfigExport;
        this.isLoading = false;
        this.saveButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__.ButtonType.Primary;
        this.cancelButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__.ButtonType.Secundary;
        this.saveButtonConfig.text = "Guardar";
        this.cancelButtonConfig.text = "Cancelar";
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.imagesRoute;
        this.minlengthPassword = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.lengthPassword;
        this.translate = translate;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.country);
        this.passwordForm = this.fb.group({
            previousPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.regex.min1Number), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.regex.specialCharacter), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.regex.upperCaseCharacter)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, (0,src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_6__.EmailEqualsValidator)('newPassword')]],
        });
    }
    ngOnInit() {
        this.userName = localStorage.getItem("userName");
        this.roleType = localStorage.getItem("roleType");
        this.changePasswordModel.userName = this.userName;
    }
    changePassword() {
        this.bsModalRef = this.generateInformativeModal('Confirmación', '¿Estás seguro que deseas cambiar tu contraseña?', true, false);
        this.bsModalRef.content.onClose
            .subscribe((isConfirmed) => {
            this.confirmResult = isConfirmed;
            if (this.confirmResult === true) {
                this.isLoading = true;
                this.changePasswordModel.confirmPassword = this.passwordForm.controls.confirmPassword.value;
                this.changePasswordModel.oldPassword = this.passwordForm.controls.previousPassword.value;
                this.changePasswordModel.newPassword = this.passwordForm.controls.newPassword.value;
                this.changePasswordService.changePasssword(this.changePasswordModel)
                    .subscribe((result) => {
                    this.isLoading = false;
                    if (result.StatusCode === 0) {
                        this.changePasswordModel = new _models_changePassword_model__WEBPACK_IMPORTED_MODULE_9__.ChangePassword();
                        this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false, true);
                        this.bsModalRef.content.onClose.subscribe((res) => {
                            localStorage.clear();
                            this.router.navigate(['/login'], { replaceUrl: true });
                        });
                    }
                    else {
                        this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, true);
                    }
                }, error => this.ErrorRegister(error));
            }
        });
    }
    cancel() {
        this.roleType === "2" ? this.router.navigate(['/specialists/agenda']) : this.router.navigate(['/portal/home']);
    }
    ErrorRegister(error) {
        this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true, true);
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
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_3__.InformativeModalComponent, initialState);
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _services_change_password_service__WEBPACK_IMPORTED_MODULE_10__.ChangePasswordService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.BsModalService }
];
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-change-password',
        template: _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePasswordPage);



/***/ }),

/***/ 26273:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/deactivate-user-account/deactivate-user-account.page.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeactivateUserAccountPage": () => (/* binding */ DeactivateUserAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deactivate_user_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deactivate-user-account.page.html?ngResource */ 66998);
/* harmony import */ var _deactivate_user_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deactivate-user-account.page.scss?ngResource */ 49020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_portal_moduls_medical_centers_models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portal/moduls/medical-centers/models/globalServiceVariables */ 83895);
/* harmony import */ var src_app_portal_moduls_scheduled_services_configs_cancelButtonConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/portal/moduls/scheduled-services/configs/cancelButtonConfig */ 67407);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _configs_acceptButtonConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/acceptButtonConfig */ 57783);
/* harmony import */ var _models_deactivateUserAccount_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/deactivateUserAccount.model */ 4639);
/* harmony import */ var _services_deactivate_user_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/deactivate-user-account.service */ 17717);
/* harmony import */ var _deactivation_modal_deactivation_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../deactivation-modal/deactivation-modal.page */ 52660);















let DeactivateUserAccountPage = class DeactivateUserAccountPage {
    constructor(bsModalService, deactivateUserAccountService, globalServiceVariables, router) {
        this.bsModalService = bsModalService;
        this.deactivateUserAccountService = deactivateUserAccountService;
        this.globalServiceVariables = globalServiceVariables;
        this.router = router;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.country;
        this.questionsDeactivateAccount = [];
        this.deactivateUsersAccountModel = new _models_deactivateUserAccount_model__WEBPACK_IMPORTED_MODULE_8__.deactivateUserAccountModel();
        this.cancelButtonConfig = src_app_portal_moduls_scheduled_services_configs_cancelButtonConfig__WEBPACK_IMPORTED_MODULE_3__.cancelButtonConfigExport;
        this.acceptButtonConfig = _configs_acceptButtonConfig__WEBPACK_IMPORTED_MODULE_7__.acceptButtonConfigExport;
        this.isLoading = false;
        this.acceptButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__.ButtonType.Primary;
        this.cancelButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__.ButtonType.Secundary;
        this.acceptButtonConfig.text = "Guardar";
        this.cancelButtonConfig.text = "Cancelar";
    }
    ngOnInit() {
        this.listQuestionsDeactivateAccount();
        this.deactivateUsersAccountModel.UserAccount = localStorage.getItem("userName");
    }
    acceptUserDeactivateModal() {
        let nameCompanyCountry;
        if (this.country === 'co') {
            nameCompanyCountry = " emi.";
        }
        else {
            nameCompanyCountry = " ucm.";
        }
        this.bsModalRef = this.bsModalService.show(_deactivation_modal_deactivation_modal_page__WEBPACK_IMPORTED_MODULE_10__.DeactivationModalPage, {
            initialState: {
                title: "Con esta acción sólo estás inactivando tu cuenta de acceso al portal para clientes de",
                nameCompanyCountry: nameCompanyCountry,
                message: "Sin embargo, seguirás teniendo acceso a todos los servicios contratados con nosotros. ",
                messageQuestion: "¿Estás seguro de que deseas inactivar tu usuario de acceso al portal? Cuéntanos por qué:",
                messageSpan: "Es obligatorio que respondas esta pregunta para desactivar tu cuenta.",
                questionsDeactivateAccount: this.questionsDeactivateAccount,
                cancelButton: "Cancelar",
                acceptButton: "Aceptar",
                imageUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.checkImage
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 'modal-error-no-services',
            backdrop: true,
            ignoreBackdropClick: false
        });
        this.bsModalRef.content.onClose.subscribe((result) => {
            if (result) {
                this.deactivateUsersAccountModel.Code = this.globalServiceVariables.deactivateUserCode;
                this.deactivateUsersAccountModel.Comment = "";
                if (this.deactivateUsersAccountModel.Code === "3") {
                    this.deactivateUsersAccountModel.Comment = this.globalServiceVariables.deactivateUserComment;
                }
                this.DeactivateUserAccount();
            }
        });
    }
    listQuestionsDeactivateAccount() {
        this.isLoading = true;
        this.deactivateUserAccountService.GetDeactivationType()
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                this.questionsDeactivateAccount = result.DataList;
            }
            else {
                this.generateInformativeModal(result.Title, result.Message, true, true);
            }
        }, (error) => this.ErrorRegister(error));
    }
    DeactivateUserAccount() {
        this.isLoading = true;
        this.deactivateUserAccountService.GetDeactivateUserAccount(this.deactivateUsersAccountModel)
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
            else {
                this.isLoading = false;
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, true);
            }
        }, error => this.ErrorRegister(error));
    }
    ErrorRegister(error) {
        this.isLoading = false;
        this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor, inténtalo más tarde.', true, true);
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
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
    }
};
DeactivateUserAccountPage.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.BsModalService },
    { type: _services_deactivate_user_account_service__WEBPACK_IMPORTED_MODULE_9__.DeactivateUserAccountService },
    { type: src_app_portal_moduls_medical_centers_models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_2__.GlobalServiceVariables },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router }
];
DeactivateUserAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-deactivate-user-account',
        template: _deactivate_user_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_deactivate_user_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeactivateUserAccountPage);



/***/ }),

/***/ 52660:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/deactivation-modal/deactivation-modal.page.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeactivationModalPage": () => (/* binding */ DeactivationModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deactivation_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deactivation-modal.page.html?ngResource */ 68761);
/* harmony import */ var _deactivation_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deactivation-modal.page.scss?ngResource */ 18646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_app_portal_moduls_medical_centers_models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portal/moduls/medical-centers/models/globalServiceVariables */ 83895);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);










let DeactivationModalPage = class DeactivationModalPage {
    constructor(modalService, bsModalRef, globalServiceVariables) {
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.globalServiceVariables = globalServiceVariables;
        this.configurationButton1 = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.configurationButton2 = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.selectOtherMotive = false;
        this.validationButtonGo = false;
        this.alternateReason = '';
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imagesRoute;
    }
    ngOnInit() {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.configurationButton1.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Tertiary;
        this.configurationButton1.text = this.cancelButton;
        this.configurationButton1.width = "150px";
        this.configurationButton2.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Primary;
        this.configurationButton2.text = this.acceptButton;
        this.configurationButton2.width = "150px";
    }
    closeModal() {
        this.onClose.next(false);
        this.onClose.complete();
        this.bsModalRef.hide();
    }
    confirm() {
        if (this.selectOtherMotive) {
            this.globalServiceVariables.deactivateUserCode = '3';
            this.globalServiceVariables.deactivateUserComment = this.alternateReason;
        }
        this.onClose.next(true);
        this.onClose.complete();
        this.bsModalRef.hide();
    }
    cancel() {
        this.onClose.next(false);
        this.onClose.complete();
        this.bsModalRef.hide();
    }
    onSelectedPastDeactivateQuestion(eventFull) {
        const event = eventFull.value;
        this.globalServiceVariables.deactivateUserCode = event;
        if (event == '3') {
            this.selectOtherMotive = true;
        }
        else {
            this.selectOtherMotive = false;
        }
        if (event === '' || event === "null" || event === '3') {
            this.validationButtonGo = false;
        }
        else {
            this.validationButtonGo = true;
        }
    }
};
DeactivationModalPage.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalRef },
    { type: src_app_portal_moduls_medical_centers_models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_2__.GlobalServiceVariables }
];
DeactivationModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-deactivation-modal',
        template: _deactivation_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_deactivation_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DeactivationModalPage);



/***/ }),

/***/ 95749:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/edit-user-email/edit-user-email.page.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserEmailPage": () => (/* binding */ EditUserEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_user_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user-email.page.html?ngResource */ 85258);
/* harmony import */ var _edit_user_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user-email.page.scss?ngResource */ 77562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_portal_moduls_scheduled_services_configs_cancelButtonConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portal/moduls/scheduled-services/configs/cancelButtonConfig */ 67407);
/* harmony import */ var src_app_public_models_entities_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/public/models/entities/user */ 52939);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var _configs_saveButtonConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configs/saveButtonConfig */ 75748);
/* harmony import */ var _models_edit_user_email_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/edit-user-email.model */ 96757);
/* harmony import */ var _services_edit_user_email_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/edit-user-email.service */ 33819);















let EditUserEmailPage = class EditUserEmailPage {
    constructor(editUsersEmails, fb, bsModalService, router) {
        this.editUsersEmails = editUsersEmails;
        this.fb = fb;
        this.bsModalService = bsModalService;
        this.router = router;
        this.user = new src_app_public_models_entities_user__WEBPACK_IMPORTED_MODULE_3__.User();
        this.authenticationEmailLogin = "";
        this.changeEmailModel = new _models_edit_user_email_model__WEBPACK_IMPORTED_MODULE_8__.editUserEmail();
        this.isLoading = false;
        this.cancelButtonConfig = src_app_portal_moduls_scheduled_services_configs_cancelButtonConfig__WEBPACK_IMPORTED_MODULE_2__.cancelButtonConfigExport;
        this.saveButtonConfig = _configs_saveButtonConfig__WEBPACK_IMPORTED_MODULE_7__.saveButtonConfigExport;
        this.saveButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__.ButtonType.Primary;
        this.cancelButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__.ButtonType.Secundary;
        this.saveButtonConfig.text = "Guardar";
        this.cancelButtonConfig.text = "Cancelar";
        this.emailForm = this.fb.group({
            oldEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            newEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
            confirmEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, (0,src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_6__.EmailEqualsValidator)('newEmail')]],
        });
    }
    ngOnInit() {
        this.roleType = localStorage.getItem("roleType");
        this.changeEmailModel.userName = localStorage.getItem("userName");
    }
    inputAuthenticationEmailLogin() {
        if (this.emailForm.controls.oldEmail.value.toLowerCase() == localStorage.getItem("userName").toLowerCase()) {
            return true;
        }
        return false;
    }
    confirmMailChange() {
        this.bsModalRef = this.generateInformativeModal('¿Estás seguro de que deseas cambiar tu correo electrónico?', 'Ten presente que al aceptar, tu sesión se cerrará automáticamente para que ingreses con el nuevo usuario.', true, false);
        this.bsModalRef.content.onClose.subscribe((isConfirmed) => {
            if (isConfirmed) {
                if (this.inputAuthenticationEmailLogin()) {
                    this.EditUserEmail();
                }
                else {
                    this.equalAuthenticationMailModal();
                }
                //Invocar servicio de change email
            }
            else {
                //Limpiando campos
                this.authenticationEmailLogin = '';
                this.user = new src_app_public_models_entities_user__WEBPACK_IMPORTED_MODULE_3__.User();
                this.isLoading = false;
                //this.dialogService.removeAll();
                // $('.close').click();
            }
        });
    }
    equalAuthenticationMailModal() {
        this.bsModalRef = this.generateInformativeModal("Validación de información", "El correo electrónico actual no es válido.", true, true);
    }
    EditUserEmail() {
        this.isLoading = true;
        this.changeEmailModel.confirmEmail = this.emailForm.controls.confirmEmail.value;
        this.changeEmailModel.oldEmail = this.emailForm.controls.oldEmail.value;
        this.changeEmailModel.newEmail = this.emailForm.controls.newEmail.value;
        this.editUsersEmails
            .ChangeEmail(this.changeEmailModel)
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 87) {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false, true);
                this.bsModalRef.content.onClose.subscribe((isConfirmed) => {
                    localStorage.clear();
                    this.router.navigate(['/onboarding/ini-sesion']);
                });
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true, true);
            }
        }, error => this.ErrorRegister(error));
    }
    ErrorRegister(error) {
        this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true, true);
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
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
    }
};
EditUserEmailPage.ctorParameters = () => [
    { type: _services_edit_user_email_service__WEBPACK_IMPORTED_MODULE_9__.EditUserEmailService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.BsModalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router }
];
EditUserEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-edit-user-email',
        template: _edit_user_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_user_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditUserEmailPage);



/***/ }),

/***/ 57783:
/*!**********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/configs/acceptButtonConfig.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "acceptButtonConfigExport": () => (/* binding */ acceptButtonConfigExport)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);


const acceptButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
acceptButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Primary;
acceptButtonConfig.text = 'ACEPTAR';
acceptButtonConfig.width = "140px";
const acceptButtonConfigExport = acceptButtonConfig;


/***/ }),

/***/ 75748:
/*!********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/configs/saveButtonConfig.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveButtonConfigExport": () => (/* binding */ saveButtonConfigExport)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);


const saveButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
saveButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Primary;
saveButtonConfig.text = 'GUARDAR';
saveButtonConfig.width = "140px";
const saveButtonConfigExport = saveButtonConfig;


/***/ }),

/***/ 97225:
/*!***********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/models/changePassword.model.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePassword": () => (/* binding */ ChangePassword)
/* harmony export */ });
class ChangePassword {
    constructor(model = null) {
        if (model) {
            this.oldPassword = model.oldPassword;
            this.newPassword = model.newPassword;
            this.userName = model.userName;
            this.confirmPassword = model.confirmPassword;
        }
    }
}


/***/ }),

/***/ 4639:
/*!******************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/models/deactivateUserAccount.model.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deactivateUserAccountModel": () => (/* binding */ deactivateUserAccountModel)
/* harmony export */ });
class deactivateUserAccountModel {
}


/***/ }),

/***/ 96757:
/*!************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/models/edit-user-email.model.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editUserEmail": () => (/* binding */ editUserEmail)
/* harmony export */ });
class editUserEmail {
}


/***/ }),

/***/ 36331:
/*!****************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/services/change-password.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordService": () => (/* binding */ ChangePasswordService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let ChangePasswordService = class ChangePasswordService {
    constructor(http) {
        this.http = http;
    }
    changePasssword(paramsPassword) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Registration/ChangePassword';
        let params = {
            OldPassword: paramsPassword.oldPassword,
            NewPassword: paramsPassword.newPassword,
            UserName: paramsPassword.userName
        };
        return this.http.post(url, params);
    }
};
ChangePasswordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ChangePasswordService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ChangePasswordService);



/***/ }),

/***/ 17717:
/*!************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/services/deactivate-user-account.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeactivateUserAccountService": () => (/* binding */ DeactivateUserAccountService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let DeactivateUserAccountService = class DeactivateUserAccountService {
    constructor(http) {
        this.http = http;
    }
    //Dropdown: preguntas de desactivación de cuenta.
    GetDeactivationType() {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'DataLists/GetDeactivationType';
        return this.http.get(url);
    }
    //Desactivación de la cuenta
    GetDeactivateUserAccount(DeactivateUserAccountModel) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Account/DeactivateUserAccount';
        let params = {
            UserAccount: DeactivateUserAccountModel.UserAccount,
            SelectedOption: {
                code: DeactivateUserAccountModel.Code,
                comment: DeactivateUserAccountModel.Comment
            }
        };
        return this.http.post(url, params);
    }
};
DeactivateUserAccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DeactivateUserAccountService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DeactivateUserAccountService);



/***/ }),

/***/ 33819:
/*!****************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/services/edit-user-email.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserEmailService": () => (/* binding */ EditUserEmailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let EditUserEmailService = class EditUserEmailService {
    constructor(http) {
        this.http = http;
    }
    //Change email
    ChangeEmail(editUserEmailParams) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Account/ChangeEmail';
        let params = {
            userName: editUserEmailParams.userName,
            oldEmail: editUserEmailParams.oldEmail,
            newEmail: editUserEmailParams.newEmail,
            confirmEmail: editUserEmailParams.confirmEmail
        };
        return this.http.post(url, params);
    }
};
EditUserEmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
EditUserEmailService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], EditUserEmailService);



/***/ }),

/***/ 8069:
/*!******************************************************************************************************!*\
  !*** ./src/app/public/sections/shared/components/password-validator/password-validator.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordValidatorComponent": () => (/* binding */ PasswordValidatorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _password_validator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-validator.component.html?ngResource */ 90506);
/* harmony import */ var _password_validator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-validator.component.scss?ngResource */ 66549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);





let PasswordValidatorComponent = class PasswordValidatorComponent {
    constructor() {
        this.imgCheckOK = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/check-ok.svg`;
        this.imgCheckKO = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/check-ko.svg`;
        this.img = this.imgCheckKO;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.textValidation) {
            this.validatePassword(changes.textValidation.currentValue);
        }
    }
    validatePassword(value) {
        if (this.textValidation || this.textValidation == "") {
            if (this.textValidation.match(this.regex))
                this.img = this.imgCheckOK;
            else
                this.img = this.imgCheckKO;
        }
        else {
            this.img = this.imgCheckKO;
        }
    }
};
PasswordValidatorComponent.ctorParameters = () => [];
PasswordValidatorComponent.propDecorators = {
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    regex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    textValidation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PasswordValidatorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-password-validator',
        template: _password_validator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_password_validator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasswordValidatorComponent);



/***/ }),

/***/ 1279:
/*!***********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/account-configuration.page.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-label {\n  pointer-events: all !important;\n}\n.title-secondary {\n  font-size: small;\n}\n.selector-item {\n  display: flex;\n  font-size: medium;\n  text-align: center;\n  border-bottom: 2px solid #FF1E2D;\n  color: #FF1E2D;\n  cursor: pointer;\n  justify-content: center;\n  padding: 2px;\n}\n.selected {\n  font-weight: bold;\n  border-bottom: 4px solid #FF1E2D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtY29uZmlndXJhdGlvbi5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSjtBQTlCQTtFQUNJLDhCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZ0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0N2Qlk7RUR3QlosZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQWlDSjtBQTlCQTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7QUFpQ0oiLCJmaWxlIjoiYWNjb3VudC1jb25maWd1cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS1zZWNvbmRhcnkge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5zZWxlY3Rvci1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 62430:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/change-password/change-password.page.scss?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-label {\n  pointer-events: all !important;\n}\n.title-secondary {\n  font-size: small;\n}\n.change-password_title-container {\n  color: #4d4d4d;\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 20px;\n}\n.change-password__subtitle-container {\n  color: #4d4d4d;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.change-password__button-container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 30px;\n}\n.change-password__notifications-container {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSw4QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGdCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFpQ0oiLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbmlvbi1sYWJlbCB7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtc2Vjb25kYXJ5IHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uY2hhbmdlLXBhc3N3b3JkX3RpdGxlLWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jaGFuZ2UtcGFzc3dvcmRfX3N1YnRpdGxlLWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICM0ZDRkNGQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2hhbmdlLXBhc3N3b3JkX19idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNoYW5nZS1wYXNzd29yZF9fbm90aWZpY2F0aW9ucy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 49020:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/deactivate-user-account/deactivate-user-account.page.scss?ngResource ***!
  \************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-label {\n  pointer-events: all !important;\n}\nsection {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n.title-secondary {\n  font-size: small;\n}\n.deactivate-account_title-container {\n  color: #4d4d4d;\n  font-weight: bold;\n}\n.deactivate-account__subtitle-container {\n  color: #4d4d4d;\n}\n.deactivate-account__button-container {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWN0aXZhdGUtdXNlci1hY2NvdW50LnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLDhCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSjtBQTlCQTtFQUNJLGdCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksY0FBQTtBQWlDSjtBQTlCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQWlDSiIsImZpbGUiOiJkZWFjdGl2YXRlLXVzZXItYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzcyc7XG5pb24tbGFiZWwge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcbn1cblxuc2VjdGlvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbi50aXRsZS1zZWNvbmRhcnkge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5kZWFjdGl2YXRlLWFjY291bnRfdGl0bGUtY29udGFpbmVyIHtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRlYWN0aXZhdGUtYWNjb3VudF9fc3VidGl0bGUtY29udGFpbmVyIHtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbn1cblxuLmRlYWN0aXZhdGUtYWNjb3VudF9fYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 18646:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/deactivation-modal/deactivation-modal.page.scss?ngResource ***!
  \**************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.cancel {\n  color: #a8a5a5;\n  pointer-events: auto;\n}\n.col-md-12 {\n  border-radius: 35px;\n  margin-bottom: -8px;\n  margin-top: -10px;\n  background-color: white;\n}\n.modal-center-align {\n  justify-content: center;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n.contenedor {\n  display: flex;\n  flex-direction: column;\n}\n.icon-close {\n  display: flex;\n  justify-content: flex-end;\n  height: 20px;\n}\n.icon-header {\n  margin: auto;\n  padding-bottom: 25px;\n}\n.subTitle {\n  text-align: center;\n  align-self: center;\n  color: #00456b;\n  font-family: Mark OT;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 23px;\n}\n.buttons {\n  pointer-events: auto;\n  align-self: center;\n}\n.modal-content {\n  width: 70% !important;\n}\n.description {\n  margin-top: 30px;\n  font-size: 16px;\n  padding-bottom: 25px;\n  text-align: center;\n  color: #000000;\n}\n.twoButtons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.size-two-button {\n  width: 130px !important;\n  font-size: 14px !important;\n}\n.one-button {\n  background: white;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 150%;\n  color: #000000;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWN0aXZhdGlvbi1tb2RhbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQWlDSjtBQTlCQTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFpQ0o7QUE5QkE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWlDSjtBQTlCQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxxQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBaUNKO0FBOUJBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQWlDSjtBQTlCQTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQWlDSiIsImZpbGUiOiJkZWFjdGl2YXRpb24tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuLmNhbmNlbCB7XG4gICAgY29sb3I6ICNhOGE1YTU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5jb2wtbWQtMTIge1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsLWNlbnRlci1hbGlnbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuXG4uY29udGVuZWRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaWNvbi1jbG9zZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmljb24taGVhZGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbi5zdWJUaXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwNDU2YjtcbiAgICBmb250LWZhbWlseTogTWFyayBPVDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5idXR0b25zIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udHdvQnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5zaXplLXR3by1idXR0b24ge1xuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ub25lLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 77562:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/edit-user-email/edit-user-email.page.scss?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "section {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n\n.change-email_title-container {\n  color: #4d4d4d;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.change-email__subtitle-container {\n  color: #4d4d4d;\n}\n\n.change-email__button-container {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXVzZXItZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbi5jaGFuZ2UtZW1haWxfdGl0bGUtY29udGFpbmVyIHtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaGFuZ2UtZW1haWxfX3N1YnRpdGxlLWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICM0ZDRkNGQ7XG59XG5cbi5jaGFuZ2UtZW1haWxfX2J1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */";

/***/ }),

/***/ 66549:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/public/sections/shared/components/password-validator/password-validator.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "span {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLXZhbGlkYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJwYXNzd29yZC12YWxpZGF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59Il19 */";

/***/ }),

/***/ 28854:
/*!***********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/account-configuration.page.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Configuración de cuenta</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"4\">\n                <div class=\"selector-item\" [class.selected]=\"currentSection == 'change-password'\" (click)=\"setSection('change-password')\">\n                    <ion-label class=\"title-secondary\">Editar Contraseña</ion-label>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div class=\"selector-item\" [class.selected]=\"currentSection == 'change-email'\" (click)=\"setSection('change-email')\">\n                    <ion-label class=\"title-secondary\">Editar correo electrónico</ion-label>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\">\n                <div class=\"selector-item\" [class.selected]=\"currentSection == 'deactivate-account'\" (click)=\"setSection('deactivate-account')\">\n                    <ion-label class=\"title-secondary\">Desactivar cuenta</ion-label>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-row>\n\n        <app-change-password *ngIf=\"currentSection == 'change-password'\"></app-change-password>\n        <app-edit-user-email *ngIf=\"currentSection == 'change-email'\"></app-edit-user-email>\n        <app-deactivate-user-account *ngIf=\"currentSection == 'deactivate-account'\"></app-deactivate-user-account>\n\n    </ion-row>\n\n</ion-content>";

/***/ }),

/***/ 38241:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/change-password/change-password.page.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<section>\n\n    <form [formGroup]=\"passwordForm\" class=\"change-password-container container\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"title-primary\">{{\"PORTAL.CHANGE-PASSWORD.HederTitle\" | translate}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"title-subtitle\">Ingresa los siguientes campos para cambiar tu contraseña.</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{\"PORTAL.CHANGE-PASSWORD.OldPassword\" | translate}}</ion-label>\n                <ion-input type=\"password\" ngControl=\"oldPassword\" autocomplete=\"off\" formControlName=\"previousPassword\" name=\"oldPassword\" id=\"oldPassword\" placeholder=\"Escribe tu contraseña\" required></ion-input>\n            </ion-item>\n            <ion-col size=\"12\">\n                <ion-label class=\"ion-validator\" *ngIf=\"passwordForm.hasError('required', 'oldPassword')\">\n                    {{\"PORTAL.CHANGE-PASSWORD.OldPasswordRequired\" | translate}}</ion-label>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{\"PORTAL.CHANGE-PASSWORD.NewPassword\" | translate}}</ion-label>\n                <ion-input type=\"password\" [minlength]=\"minlengthPassword\" autocomplete=\"off\" ngControl=\"newPassword\" name=\"newPassword\" id=\"newPassword\" validateEqual=\"confirmPassword\" reverse=\"true\" formControlName=\"newPassword\" placeholder=\"Escribe una nueva contraseña\"\n                    required></ion-input>\n            </ion-item>\n            <ion-label class=\"ion-validator\" *ngIf=\"!passwordForm.hasError('required', 'newPassword') && passwordForm.hasError('touched', 'newPassword')\">\n                {{\"PORTAL.CHANGE-PASSWORD.NewPasswordRequired\" | translate}}\n            </ion-label>\n        </ion-row>\n\n        <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{\"PORTAL.CHANGE-PASSWORD.ConfirmPassword\" | translate}}</ion-label>\n                <ion-input type=\"password\" autocomplete=\"off\" formControlName=\"confirmPassword\" name=\"confirmPassword\" validateEqual=\"newPassword\" id=\"confirmPassword\" placeholder=\"Confirma tu nueva contraseña\"></ion-input>\n            </ion-item>\n            <ion-label class=\"ion-validator\" *ngIf=\"passwordForm.hasError('required', 'confirmPassword')\">\n                {{'PUBLIC.SHARED.obligatotyField' | translate}}\n            </ion-label>\n        </ion-row>\n\n        <ion-row>\n            <ion-label class=\"ion-validator\" *ngIf=\"!passwordForm.hasError('required', 'confirmPassword') && passwordForm.hasError('invalidEqualsEmail', 'confirmPassword')\">\n                {{'PUBLIC.SHARED.equalPassword' | translate}}\n            </ion-label>\n        </ion-row>\n\n        <ion-row class=\"row change-password__notifications-container\">\n            <app-password-validator [description]=\"'Mínimo 8 caracteres.'\" [regex]=\"regex.min8Characters\" [textValidation]=\"this.passwordForm.controls.newPassword.value\"></app-password-validator>\n            <app-password-validator [description]=\"'Incluye al menos un carácter en máyuscula.'\" [regex]=\"regex.upperCaseCharacter\" [textValidation]=\"this.passwordForm.controls.newPassword.value\"></app-password-validator>\n            <app-password-validator [description]=\"'Incluye al menos un número.'\" [regex]=\"regex.min1Number\" [textValidation]=\"this.passwordForm.controls.newPassword.value\"></app-password-validator>\n            <app-password-validator [description]=\"'Incluye un carácter especial.'\" [regex]=\"regex.specialCharacter\" [textValidation]=\"this.passwordForm.controls.newPassword.value\"></app-password-validator>\n        </ion-row>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"cancelButtonConfig\" (click)=\"cancel()\"></app-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"saveButtonConfig\" (click)=\"changePassword()\" [disabled]=\"!passwordForm.valid\"></app-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </form>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</section>";

/***/ }),

/***/ 66998:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/deactivate-user-account/deactivate-user-account.page.html?ngResource ***!
  \************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<section>\n\n    <ion-row class=\"row deactivate-account_title-container ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.DEACTIVATE-USER-ACCOUNT.HederTitle\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"row deactivate-account__subtitle-container ion-padding-top\">\n        <ion-label>{{\"PORTAL.DEACTIVATE-USER-ACCOUNT.QuestionInfo\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"row deactivate-account__subtitle-container ion-padding-top\">\n        <ion-label>{{\"PORTAL.DEACTIVATE-USER-ACCOUNT.TextInfo\" | translate}}</ion-label>\n    </ion-row>\n\n    <hr />\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"6\">\n                <app-button [configuration]=\"cancelButtonConfig\" [routerLink]=\"['/portal/home']\"></app-button>\n            </ion-col>\n            <ion-col size=\"6\">\n                <app-button [configuration]=\"acceptButtonConfig\" (click)=\"acceptUserDeactivateModal()\"></app-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</section>";

/***/ }),

/***/ 68761:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/deactivation-modal/deactivation-modal.page.html?ngResource ***!
  \**************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-body modal-check col-md-12\">\n\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n\n            <div class=\"contenedor\">\n\n                <div class=\"icon-close cursor-pointer\">\n                    <a class=\"cancel\" (click)=\"closeModal()\">\n                        <img src=\"{{imgRoute}}icons/cancel.svg\" alt=\"Imagen\">\n                    </a>\n                </div>\n\n                <div class=\"icon-header\">\n                    <img src=\"{{imgRoute}}icons/alert-check.svg\" alt=\"icon-header\" />\n                </div>\n\n                <div class=\"subTitle\">\n                    <span class=\"title-modal\"><strong>{{title}}</strong> <strong><em>{{nameCompanyCountry}}</em></strong></span>\n                </div>\n\n                <div class=\"description row\">\n                    <p class=\"title-modal\"><strong>{{messageQuestion}}</strong></p>\n                    <p class=\"span-modal\"><span>{{messageSpan}}</span></p>\n                </div>\n\n                <ion-item>\n                    <ion-label value=\"\" disabled>(*) Selecciona una razón</ion-label>\n                    <ion-select id=\"deactivatedQuestion\" name=\"deactivatedQuestion\" (ionChange)=\"onSelectedPastDeactivateQuestion($event)\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option *ngFor=\"let QuestionsDeactivate of questionsDeactivateAccount\" [value]=\"QuestionsDeactivate.DeactivationTypeId\">{{QuestionsDeactivate.Name}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n\n                <ion-row *ngIf=\"selectOtherMotive\">\n                    <ion-label>Motivo</ion-label>\n                    <ion-input [(ngModel)]=\"alternateReason\"></ion-input>\n                </ion-row>\n\n                <ion-row class=\"ion-padding-top buttons\">\n                    <ion-col size=\"6\">\n                        <app-button [configuration]=\"configurationButton1\" (click)=\"cancel()\"></app-button>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <app-button [configuration]=\"configurationButton2\" (click)=\"confirm()\" [disabled]=\"!validationButtonGo\">\n                        </app-button>\n                    </ion-col>\n                </ion-row>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>";

/***/ }),

/***/ 85258:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/account-configuration/components/edit-user-email/edit-user-email.page.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<section>\n\n    <form [formGroup]=\"emailForm\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"title-primary\">{{\"PORTAL.EDIT-USER-EMAIL.HederTitle\" | translate}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>Ten presente que, al modificar tu correo electrónico, modificarás automáticamente el usuario con el que accedes hoy al portal.</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>\n                {{\"PORTAL.EDIT-USER-EMAIL.MessageInfo\" | translate}}\n            </ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">Email Actual</ion-label>\n                <ion-input type=\"text\" ngControl=\"oldEmail\" autocomplete=\"off\" formControlName=\"oldEmail\" name=\"oldEmail\" id=\"oldEmail\" placeholder=\"Escribe tu email\" required></ion-input>\n                <ion-col size=\"12\">\n                    <ion-label class=\"ion-validator\">{{'PUBLIC.SHARED.obligatotyField' | translate}}</ion-label>\n                </ion-col>\n            </ion-item>\n        </ion-row>\n\n        <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">Nuevo Email</ion-label>\n                <ion-input type=\"text\" autocomplete=\"off\" ngControl=\"newEmail\" name=\"newEmail\" id=\"newEmail\" validateEqual=\"confirmEmail\" reverse=\"true\" formControlName=\"newEmail\" placeholder=\"Escribe una nuevo Email\" required></ion-input>\n                <ion-col size=\"12\">\n                    <ion-label class=\"ion-validator\">{{'PUBLIC.SHARED.validCorreo' | translate}}</ion-label>\n                </ion-col>\n            </ion-item>\n        </ion-row>\n\n        <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">Confirmar nuevo Email</ion-label>\n                <ion-input type=\"text\" autocomplete=\"off\" formControlName=\"confirmEmail\" required name=\"confirmEmail\" validateEqual=\"newEmail\" id=\"confirmEmail\" placeholder=\"Confirma tu nuevo Email\"></ion-input>\n                <ion-col size=\"12\">\n                    <ion-label *ngIf=\"this.emailForm.controls.confirmEmail.hasError('required')\">\n                        {{'PUBLIC.SHARED.validCorreo' | translate}}\n                    </ion-label>\n                    <ion-label *ngIf=\"!this.emailForm.controls.confirmEmail.hasError('required') && this.emailForm.controls.confirmEmail.hasError('invalidEqualsEmail')\">\n                        Los correos deben coincidir\n                    </ion-label>\n                </ion-col>\n            </ion-item>\n        </ion-row>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"cancelButtonConfig\" [routerLink]=\"['/portal/home']\"></app-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"saveButtonConfig\" (click)=\"confirmMailChange()\" [disabled]=\"!emailForm.valid\"></app-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <app-loader *ngIf=\"isLoading\"></app-loader>\n\n    </form>\n\n</section>";

/***/ }),

/***/ 90506:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/public/sections/shared/components/password-validator/password-validator.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"d-flex pb-3\">\n    <img src=\"{{this.img}}\" alt=\"\">\n    <span class=\"ps-3\">{{description}}</span>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_my-account_account-configuration_account-configuration_module_ts.js.map