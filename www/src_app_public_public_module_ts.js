"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_public_public_module_ts"],{

/***/ 68235:
/*!****************************************************************************************!*\
  !*** ./src/app/public/components/onboarding-carousel/onboarding-carousel.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingCarouselComponent": () => (/* binding */ OnboardingCarouselComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _onboarding_carousel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-carousel.component.html?ngResource */ 88074);
/* harmony import */ var _onboarding_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding-carousel.component.scss?ngResource */ 86499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);






let OnboardingCarouselComponent = class OnboardingCarouselComponent {
    constructor(router) {
        this.router = router;
        this.slides = [];
        this.slideOpts = {
            allowTouchMove: false,
            initialSlide: 0,
            speed: 400
        };
        this.co = [
            {
                title: 'Solicita servicio médico',
                description: 'Pide atención médica en tu domicilio cuando lo necesites.',
                image: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}onboarding-1.png`,
                icon: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/icon-onboarding-1.svg`
            },
            {
                title: 'Videoconsulta',
                description: 'Haz una videoconsulta o chatea con tu médico para resolver inquietudes y solicitar la lectura de tus exámenes de laboratorio.',
                image: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}onboarding-2.png`,
                icon: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/icon-onboarding-2.svg`
            },
            {
                title: 'Accede a tu historia clínica',
                description: 'Conoce tu historial de servicios médicos con nosotros y descarga fácilmente tu historia clínica.',
                image: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}onboarding-3.png`,
                icon: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/icon-onboarding-3.svg`
            },
            {
                title: 'Emi especialistas',
                description: 'Agenda en tiempo real citas con los especialistas de nuestra red de aliados.',
                image: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}onboarding-4.png`,
                icon: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/icon-onboarding-4.svg`
            }
        ];
        this.uy = [
            {
                title: 'Solicita servicio médico',
                description: 'Pide atención médica en tu domicilio cuando lo necesites.',
                image: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}onboarding-1.png`,
                icon: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/icon-onboarding-1.svg`
            },
            {
                title: 'Videoconsulta',
                description: 'Haz una videoconsulta o chatea con tu médico para resolver inquietudes y solicitar la lectura de tus exámenes de laboratorio.',
                image: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}onboarding-2.png`,
                icon: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/icon-onboarding-2.svg`
            },
            {
                title: 'Accede a tu historia clínica',
                description: 'Conoce tu historial de servicios médicos con nosotros y descarga fácilmente tu historia clínica.',
                image: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}onboarding-3.png`,
                icon: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/icon-onboarding-3.svg`
            },
            {
                title: 'Centros Médicos ucm',
                description: 'Agenda en tiempo real citas con especialistas en nuestros Centros Médicos y Clínicas.',
                image: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}onboarding-4.png`,
                icon: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}icons/icon-onboarding-4.svg`
            }
        ];
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute;
    }
    ngOnInit() {
        this.indexSlide = 0;
        src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.country === 'co' ? this.slides = this.co : this.slides = this.uy;
    }
    moveSlide(position) {
        this.mySlide.getActiveIndex().then(index => {
            if (position > 0 && index + 1 != this.slides.length || position < 0) {
                if (position > 0) {
                    this.indexSlide = index + 1;
                    this.mySlide.slideNext();
                }
                else {
                    this.indexSlide = index - 1;
                    this.mySlide.slidePrev();
                }
            }
        });
    }
    navigate() {
        this.router.navigate(['onboarding/welcome']);
    }
};
OnboardingCarouselComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
OnboardingCarouselComponent.propDecorators = {
    mySlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['slide',] }]
};
OnboardingCarouselComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-onboarding-carousel',
        template: _onboarding_carousel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_onboarding_carousel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnboardingCarouselComponent);



/***/ }),

/***/ 20589:
/*!************************************************************************************!*\
  !*** ./src/app/public/components/onboarding-header/onboarding-header.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingHeaderComponent": () => (/* binding */ OnboardingHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _onboarding_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-header.component.html?ngResource */ 85045);
/* harmony import */ var _onboarding_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding-header.component.scss?ngResource */ 68522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);






let OnboardingHeaderComponent = class OnboardingHeaderComponent {
    constructor(router) {
        this.router = router;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute;
    }
    ngOnInit() { }
    navigate() {
        this.router.navigate(['onboarding/welcome']);
    }
};
OnboardingHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
OnboardingHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-onboarding-header',
        template: _onboarding_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_onboarding_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnboardingHeaderComponent);



/***/ }),

/***/ 22669:
/*!**************************************************!*\
  !*** ./src/app/public/models/entities/answer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Answer": () => (/* binding */ Answer)
/* harmony export */ });
class Answer {
}


/***/ }),

/***/ 92943:
/*!*******************************************************!*\
  !*** ./src/app/public/models/entities/setPassword.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetPassword": () => (/* binding */ SetPassword)
/* harmony export */ });
class SetPassword {
}


/***/ }),

/***/ 85940:
/*!****************************************************!*\
  !*** ./src/app/public/models/enums/answer-type.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswerType": () => (/* binding */ AnswerType)
/* harmony export */ });
var AnswerType;
(function (AnswerType) {
    AnswerType[AnswerType["Date"] = 1] = "Date";
    AnswerType[AnswerType["Name"] = 2] = "Name";
    AnswerType[AnswerType["Address"] = 3] = "Address";
    AnswerType[AnswerType["Phone"] = 4] = "Phone";
    AnswerType[AnswerType["Email"] = 5] = "Email";
})(AnswerType || (AnswerType = {}));


/***/ }),

/***/ 45094:
/*!*************************************************************!*\
  !*** ./src/app/public/models/enums/status-code-register.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusCodeRegister": () => (/* binding */ StatusCodeRegister)
/* harmony export */ });
var StatusCodeRegister;
(function (StatusCodeRegister) {
    StatusCodeRegister[StatusCodeRegister["InvalidEmail"] = 14] = "InvalidEmail";
    StatusCodeRegister[StatusCodeRegister["SuccessfulLoad"] = 0] = "SuccessfulLoad";
    StatusCodeRegister[StatusCodeRegister["NotAffiliated"] = 6] = "NotAffiliated";
    StatusCodeRegister[StatusCodeRegister["ExistingUser"] = 11] = "ExistingUser";
    StatusCodeRegister[StatusCodeRegister["InactiveUser"] = 7] = "InactiveUser";
})(StatusCodeRegister || (StatusCodeRegister = {}));


/***/ }),

/***/ 21453:
/*!**************************************************************************!*\
  !*** ./src/app/public/models/requests/data-life-account-verification.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataLifeAccountVerificationRequest": () => (/* binding */ DataLifeAccountVerificationRequest)
/* harmony export */ });
class DataLifeAccountVerificationRequest {
}


/***/ }),

/***/ 454:
/*!***************************************************************!*\
  !*** ./src/app/public/models/requests/new-forgot-password.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewForgotPassword": () => (/* binding */ NewForgotPassword)
/* harmony export */ });
class NewForgotPassword {
}


/***/ }),

/***/ 8923:
/*!****************************************************************!*\
  !*** ./src/app/public/models/requests/pre-register-request.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreRegisterRequest": () => (/* binding */ PreRegisterRequest)
/* harmony export */ });
class PreRegisterRequest {
}


/***/ }),

/***/ 98843:
/*!*********************************************************************!*\
  !*** ./src/app/public/models/requests/security-question-request.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityQuestionRequest": () => (/* binding */ SecurityQuestionRequest)
/* harmony export */ });
class SecurityQuestionRequest {
}


/***/ }),

/***/ 11157:
/*!****************************************************************!*\
  !*** ./src/app/public/models/requests/usefulphones-request.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFulPhonesRequest": () => (/* binding */ UserFulPhonesRequest)
/* harmony export */ });
class UserFulPhonesRequest {
}


/***/ }),

/***/ 77003:
/*!***************************************************************!*\
  !*** ./src/app/public/models/requests/verify-code-request.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyCodeRequest": () => (/* binding */ VerifyCodeRequest)
/* harmony export */ });
class VerifyCodeRequest {
}


/***/ }),

/***/ 65701:
/*!*************************************************!*\
  !*** ./src/app/public/public-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicRoutingModule": () => (/* binding */ PublicRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sections_login_ini_sesion_ini_sesion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/login/ini-sesion/ini-sesion.page */ 35952);
/* harmony import */ var _sections_onboarding_onboarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/onboarding/onboarding.page */ 90307);
/* harmony import */ var _sections_welcome_welcome_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/welcome/welcome.page */ 8254);
/* harmony import */ var _sections_password_remember_password_remember_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/password/remember-password/remember-password.page */ 38290);
/* harmony import */ var _sections_password_remember_password_code_remember_password_code_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/password/remember-password-code/remember-password-code.page */ 58649);
/* harmony import */ var _sections_password_recover_password_mail_recover_password_mail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/password/recover-password-mail/recover-password-mail.page */ 51542);
/* harmony import */ var _sections_password_recover_password_mail_phone_recover_password_mail_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/password/recover-password-mail-phone/recover-password-mail-phone.page */ 55690);
/* harmony import */ var _sections_password_recover_password_phone_recover_password_phone_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/password/recover-password-phone/recover-password-phone.page */ 96226);
/* harmony import */ var _core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _sections_account_create_account_create_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/account-create/account-create.page */ 66914);
/* harmony import */ var _sections_account_create_register_password_register_password_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/account-create/register-password/register-password.page */ 62824);
/* harmony import */ var _sections_account_create_data_complete_data_complete_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/account-create/data-complete/data-complete.page */ 46795);















const routes = [
    {
        path: '',
        canActivate: [_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_8__.HaveBeLoggedInGuard],
        component: _sections_onboarding_onboarding_page__WEBPACK_IMPORTED_MODULE_1__.OnboardingPage
    },
    {
        path: 'welcome',
        component: _sections_welcome_welcome_page__WEBPACK_IMPORTED_MODULE_2__.WelcomePage
    },
    {
        path: 'ini-sesion',
        component: _sections_login_ini_sesion_ini_sesion_page__WEBPACK_IMPORTED_MODULE_0__.IniSesionPage
    },
    {
        path: 'remember-password',
        component: _sections_password_remember_password_remember_password_page__WEBPACK_IMPORTED_MODULE_3__.RememberPasswordPage
    },
    {
        path: 'remember-password-code',
        component: _sections_password_remember_password_code_remember_password_code_page__WEBPACK_IMPORTED_MODULE_4__.RememberPasswordCodePage
    },
    {
        path: 'recover-password-mail',
        component: _sections_password_recover_password_mail_recover_password_mail_page__WEBPACK_IMPORTED_MODULE_5__.RecoverPasswordMailPage
    },
    {
        path: 'recover-password-mail-phone',
        component: _sections_password_recover_password_mail_phone_recover_password_mail_phone_page__WEBPACK_IMPORTED_MODULE_6__.RecoverPasswordMailPhonePage
    },
    {
        path: 'recover-password-phone',
        component: _sections_password_recover_password_phone_recover_password_phone_page__WEBPACK_IMPORTED_MODULE_7__.RecoverPasswordPhonePage
    },
    {
        path: 'account-create',
        component: _sections_account_create_account_create_page__WEBPACK_IMPORTED_MODULE_9__.AccountCreatePage
    },
    {
        path: 'register-password',
        component: _sections_account_create_register_password_register_password_page__WEBPACK_IMPORTED_MODULE_10__.RegisterPasswordPage
    },
    {
        path: 'data-complete',
        component: _sections_account_create_data_complete_data_complete_page__WEBPACK_IMPORTED_MODULE_11__.DataCompletePage
    },
];
let PublicRoutingModule = class PublicRoutingModule {
};
PublicRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
    })
], PublicRoutingModule);



/***/ }),

/***/ 61627:
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicModule": () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-routing.module */ 65701);
/* harmony import */ var _sections_onboarding_onboarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/onboarding/onboarding.page */ 90307);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _components_onboarding_header_onboarding_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/onboarding-header/onboarding-header.component */ 20589);
/* harmony import */ var _components_onboarding_carousel_onboarding_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/onboarding-carousel/onboarding-carousel.component */ 68235);
/* harmony import */ var _sections_welcome_welcome_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/welcome/welcome.page */ 8254);
/* harmony import */ var _sections_login_ini_sesion_ini_sesion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/login/ini-sesion/ini-sesion.page */ 35952);
/* harmony import */ var _sections_password_remember_password_remember_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/password/remember-password/remember-password.page */ 38290);
/* harmony import */ var _sections_password_remember_password_code_remember_password_code_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/password/remember-password-code/remember-password-code.page */ 58649);
/* harmony import */ var _sections_password_recover_password_mail_recover_password_mail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/password/recover-password-mail/recover-password-mail.page */ 51542);
/* harmony import */ var _sections_password_recover_password_mail_phone_recover_password_mail_phone_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/password/recover-password-mail-phone/recover-password-mail-phone.page */ 55690);
/* harmony import */ var _sections_password_recover_password_phone_recover_password_phone_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/password/recover-password-phone/recover-password-phone.page */ 96226);
/* harmony import */ var _sections_useful_phones_option_city_option_city_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/useful-phones/option-city/option-city.component */ 63851);
/* harmony import */ var _sections_useful_phones_list_phones_list_phones_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/useful-phones/list-phones/list-phones.component */ 92015);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-code-input */ 83891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sections_account_create_account_create_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/account-create/account-create.page */ 66914);
/* harmony import */ var _sections_account_create_account_verification_account_verification_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/account-create/account-verification/account-verification.page */ 59801);
/* harmony import */ var _sections_account_create_data_complete_data_complete_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sections/account-create/data-complete/data-complete.page */ 46795);
/* harmony import */ var _sections_account_create_register_password_register_password_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sections/account-create/register-password/register-password.page */ 62824);
/* harmony import */ var _sections_terms_terms_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sections/terms/terms.page */ 75040);
/* harmony import */ var _sections_account_create_account_verification_components_security_question_security_question_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sections/account-create/account-verification/components/security-question/security-question.page */ 43138);



























let PublicModule = class PublicModule {
};
PublicModule = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
        declarations: [
            _sections_onboarding_onboarding_page__WEBPACK_IMPORTED_MODULE_1__.OnboardingPage,
            _components_onboarding_carousel_onboarding_carousel_component__WEBPACK_IMPORTED_MODULE_4__.OnboardingCarouselComponent,
            _components_onboarding_header_onboarding_header_component__WEBPACK_IMPORTED_MODULE_3__.OnboardingHeaderComponent,
            _sections_welcome_welcome_page__WEBPACK_IMPORTED_MODULE_5__.WelcomePage,
            _sections_login_ini_sesion_ini_sesion_page__WEBPACK_IMPORTED_MODULE_6__.IniSesionPage,
            _sections_password_remember_password_remember_password_page__WEBPACK_IMPORTED_MODULE_7__.RememberPasswordPage,
            _sections_password_remember_password_code_remember_password_code_page__WEBPACK_IMPORTED_MODULE_8__.RememberPasswordCodePage,
            _sections_password_recover_password_mail_recover_password_mail_page__WEBPACK_IMPORTED_MODULE_9__.RecoverPasswordMailPage,
            _sections_password_recover_password_mail_phone_recover_password_mail_phone_page__WEBPACK_IMPORTED_MODULE_10__.RecoverPasswordMailPhonePage,
            _sections_password_recover_password_phone_recover_password_phone_page__WEBPACK_IMPORTED_MODULE_11__.RecoverPasswordPhonePage,
            _sections_useful_phones_option_city_option_city_component__WEBPACK_IMPORTED_MODULE_12__.OptionCityComponent,
            _sections_useful_phones_list_phones_list_phones_component__WEBPACK_IMPORTED_MODULE_13__.ListPhonesComponent,
            _sections_account_create_account_create_page__WEBPACK_IMPORTED_MODULE_14__.AccountCreatePage,
            _sections_account_create_account_verification_account_verification_page__WEBPACK_IMPORTED_MODULE_15__.AccountVerificationPage,
            _sections_account_create_data_complete_data_complete_page__WEBPACK_IMPORTED_MODULE_16__.DataCompletePage,
            _sections_account_create_register_password_register_password_page__WEBPACK_IMPORTED_MODULE_17__.RegisterPasswordPage,
            _sections_terms_terms_page__WEBPACK_IMPORTED_MODULE_18__.TermsPage,
            _sections_account_create_account_verification_components_security_question_security_question_page__WEBPACK_IMPORTED_MODULE_19__.SecurityQuestionPage
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonicModule,
            _public_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            angular_code_input__WEBPACK_IMPORTED_MODULE_25__.CodeInputModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_21__.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], PublicModule);



/***/ }),

/***/ 66914:
/*!***********************************************************************!*\
  !*** ./src/app/public/sections/account-create/account-create.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountCreatePage": () => (/* binding */ AccountCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-create.page.html?ngResource */ 90333);
/* harmony import */ var _account_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-create.page.scss?ngResource */ 81978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_services_common_midd_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/common-midd.service */ 50133);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_entities_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/entities/user */ 52939);
/* harmony import */ var _models_enums_status_code_register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/enums/status-code-register */ 45094);
/* harmony import */ var _models_requests_data_life_account_verification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/requests/data-life-account-verification */ 21453);
/* harmony import */ var _models_requests_document_validation_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/requests/document-validation-request */ 28660);
/* harmony import */ var _models_requests_pre_register_request__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../models/requests/pre-register-request */ 8923);
/* harmony import */ var _models_requests_security_question_request__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../models/requests/security-question-request */ 98843);
/* harmony import */ var _services_document_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/document.service */ 45242);
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/register.service */ 85972);
/* harmony import */ var _services_security_question_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/security-question.service */ 19643);
/* harmony import */ var _terms_terms_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../terms/terms.page */ 75040);


























let AccountCreatePage = class AccountCreatePage {
    constructor(fb, documentService, translate, registerService, urlDataService, router, modalService, securityQuestionService, commonMiddService) {
        this.fb = fb;
        this.documentService = documentService;
        this.translate = translate;
        this.registerService = registerService;
        this.urlDataService = urlDataService;
        this.router = router;
        this.modalService = modalService;
        this.securityQuestionService = securityQuestionService;
        this.commonMiddService = commonMiddService;
        this.configurationButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_5__.ButtonConfiguration();
        this.user = new _models_entities_user__WEBPACK_IMPORTED_MODULE_9__.User();
        this.answerCorrectRequired = 3;
        this.isLoading = true;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment;
        this.translate.get('PUBLIC.SHARED.continue').subscribe((resp) => {
            this.continueText = resp;
        });
        this.configurationButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Primary;
        this.configurationButton.text = this.continueText;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.imagesRoute;
        this.createForm = this.fb.group({
            documentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required],
            document: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__.ValidatorStartCellPhoneNumber]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.email]],
            emailRepeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, (0,src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__.EmailConfirmValidator)('email')]],
            terms: ['', src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_4__.ValidatorCheckBox],
        });
    }
    ngOnInit() {
        this.getDocumentType();
    }
    getDocumentType() {
        this.documentService.getAll().subscribe((resp) => {
            if (resp) {
                this.docType = resp;
            }
        });
        this.isLoading = false;
    }
    complete() {
        this.isLoading = true;
        this.setUser();
        this.preRegister();
    }
    setUser() {
        this.user.TypeDocument = this.createForm.controls.documentType.value;
        this.user.IdDocument = this.createForm.controls.document.value;
        this.user.Email = this.createForm.controls.email.value;
        this.user.RepeatEmail = this.createForm.controls.emailRepeat.value;
        this.user.TermsAndConditions = this.createForm.controls.terms.value;
    }
    preRegister() {
        let preRegister = new _models_requests_pre_register_request__WEBPACK_IMPORTED_MODULE_13__.PreRegisterRequest();
        preRegister.DocumentType = this.user.TypeDocument;
        preRegister.Document = this.user.IdDocument;
        preRegister.Email = this.user.Email;
        preRegister.ConfirmEmail = this.user.RepeatEmail;
        preRegister.TermsAndConditions = this.user.TermsAndConditions;
        this.registerService.preRegister(preRegister).subscribe((resp) => {
            //Flujo es afiliado pero no coincide el correo.
            if (resp.StatusCode === _models_enums_status_code_register__WEBPACK_IMPORTED_MODULE_10__.StatusCodeRegister.InvalidEmail) {
                //14
                let userCopy;
                this.urlDataService.User = Object.assign(this.user, userCopy);
                this.associateEmail(resp);
                this.validateAccountVerification().subscribe((resp) => {
                    resp
                        ? this.goToAccountVerification(this.answerCorrectRequired)
                        : this.router.navigate(['/welcome/data-complete']);
                });
            }
            else if (resp.StatusCode === _models_enums_status_code_register__WEBPACK_IMPORTED_MODULE_10__.StatusCodeRegister.ExistingUser) {
                //11
                this.isLoading = false;
                this.showErrorExistingUser(resp.Message);
            }
            else if (resp.StatusCode === _models_enums_status_code_register__WEBPACK_IMPORTED_MODULE_10__.StatusCodeRegister.InactiveUser) {
                //7
                this.isLoading = false;
                this.showErrorInactiveUser(resp.Message);
            }
            else if (resp.StatusCode === _models_enums_status_code_register__WEBPACK_IMPORTED_MODULE_10__.StatusCodeRegister.SuccessfulLoad) {
                //0
                this.user.UpdateEmail = 'false';
                this.user.Affiliate = resp.UserNames.Afiliate;
                this.user.DataLoaded = resp.UserNames.DataLoaded;
                this.user.FailedVenko = resp.UserNames.CanModifyNames;
                //Encuentra datos PLS o Registraduria(col)
                if (resp.UserNames.DataLoaded === true) {
                    this.user.NameOne = resp.UserNames.FirstName;
                    this.user.NameTwo = resp.UserNames.SecondName;
                    this.user.LastNameOne = resp.UserNames.FirstSurname;
                    this.user.LastNameTwo = resp.UserNames.SecondSurname;
                    this.user.CellPhone = this.createForm.controls.phone.value;
                    //this.router.navigate(['/completeRegisterCreate'], { queryParams: this.user, skipLocationChange: false });
                    let userCopy;
                    this.urlDataService.User = Object.assign(this.user, userCopy);
                    this.validateAccountVerification().subscribe((resp) => {
                        resp
                            ? this.goToAccountVerification(this.answerCorrectRequired)
                            : this.router.navigate(['/welcome/data-complete']);
                    });
                }
                else {
                    this.user.CellPhone = this.createForm.controls.phone.value;
                    let userCopy;
                    this.urlDataService.User = Object.assign(this.user, userCopy);
                    this.validateAccountVerification().subscribe((resp) => {
                        resp
                            ? this.goToAccountVerification(this.answerCorrectRequired)
                            : this.router.navigate(['/welcome/data-complete']);
                    });
                }
            }
            else {
                this.isLoading = false;
                this.showErrorNotificationModal(resp.Message);
            }
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
            id: 1,
        };
        this.bsModalRef = this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
    showErrorExistingUser(msg) {
        const initialState = {
            initialState: {
                iconHeader: 'alert-circle.svg',
                subTitle: 'Hubo un problema',
                description: msg,
                onlyButtonConfirm: true,
                textButton: 'Recordar',
                textButton1: '',
                textButton2: '',
                visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 1,
        };
        this.bsModalRef = this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
        this.bsModalRef.content.onClose.subscribe(() => {
            this.router.navigate(['/welcome/remember-password']);
        });
    }
    showErrorInactiveUser(msg) {
        const customMessage = 'Hemos detectado que ese correo ya esta en uso para una cuenta inactiva. ' +
            msg;
        const initialState = {
            initialState: {
                iconHeader: 'alert-circle.svg',
                subTitle: 'Usuario Inactivo',
                description: customMessage,
                onlyButtonConfirm: true,
                textButton: 'Aceptar',
                textButton1: '',
                textButton2: '',
                visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            id: 1,
        };
        this.bsModalRef = this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
        this.bsModalRef.content.onClose.subscribe(() => {
            this.router.navigate(['/welcome/ini-sesion']);
        });
    }
    associateEmail(resp) {
        this.user.DataLoaded = resp.UserNames.DataLoaded;
        this.user.Affiliate = resp.UserNames.Afiliate;
        this.user.NameOne = resp.UserNames.FirstName;
        this.user.NameTwo = resp.UserNames.SecondName;
        this.user.LastNameOne = resp.UserNames.FirstSurname;
        this.user.LastNameTwo = resp.UserNames.SecondSurname;
        this.user.FailedVenko = resp.UserNames.CanModifyNames;
        //Deberá redirigir a una pagina para asociar el correo. Envia sms para validación.
        //this.router.navigate(['/registerCellPhoneCreate'], { queryParams: this.user, skipLocationChange: false });
    }
    validateAccountVerification() {
        let request = new _models_requests_data_life_account_verification__WEBPACK_IMPORTED_MODULE_11__.DataLifeAccountVerificationRequest();
        request.Document = this.user.IdDocument;
        request.DocumentType = this.user.TypeDocument;
        request.Email = this.user.Email;
        request.PhoneNumber = this.createForm.controls.phone.value;
        return new rxjs__WEBPACK_IMPORTED_MODULE_20__.Observable((obj) => {
            this.registerService.getAccountVerification(request).subscribe((resp) => {
                obj.next(resp.RequiredAccountVerification);
            }, (err) => obj.next(false));
        });
    }
    goToAccountVerification(answerCorrectRequired) {
        let respuestas = 0;
        let request = new _models_requests_security_question_request__WEBPACK_IMPORTED_MODULE_14__.SecurityQuestionRequest();
        request.DocumentType = this.user.TypeDocument;
        request.Document = this.user.IdDocument;
        this.securityQuestionService.getSecurityQuestion(request).subscribe((resp) => {
            this.isLoading = false;
            if (resp) {
                resp.SQuestions.forEach((item) => {
                    if (item.Answer !== '')
                        respuestas++;
                });
                if (respuestas >= answerCorrectRequired) {
                    //si requestAnswerQuestion == 0 dejo que avance, de lo contrario sale mensaje.
                    if (answerCorrectRequired === 0) {
                        this.navigateToDataComplete();
                    }
                    else {
                        let squestion;
                        this.urlDataService.SecurityQuestions = Object.assign(resp.SQuestions, squestion);
                        this.navigateToAccountVerification();
                    }
                }
                else {
                    this.navigateToDataComplete();
                }
            }
        }, (error) => {
            this.isLoading = false;
            if (error) {
            }
        });
    }
    navigateToAccountVerification() {
        this.router.navigate(['/welcome/account-verification']);
    }
    navigateToDataComplete() {
        this.router.navigate(['/welcome/data-complete']);
    }
    onlyNumber(event) {
        return this.onlyNumber(event);
    }
    clickTerms(tagCode) {
        if (tagCode === 'terms') {
            this.tagCodes = this.parentForm === 'specialists' ? 'TYCE' : 'TYCC';
        }
        else {
            let roleType = localStorage.getItem('roleType');
            this.tagCodes = roleType != '2' ? 'PPC' : 'PPE';
        }
        const initialState = {
            initialState: {
                document: this.tagCodes,
            },
            class: 'modal-dialog-centered modal-rounded-term',
            id: 2,
        };
        this.bsModalRef = this.modalService.show(_terms_terms_page__WEBPACK_IMPORTED_MODULE_18__.TermsPage, initialState);
    }
    validateDocument() {
        if (this.createForm.controls.document.value != '') {
            let request = new _models_requests_document_validation_request__WEBPACK_IMPORTED_MODULE_12__.DocumentValidationRequest();
            request.DocumentType = this.createForm.controls.documentType.value;
            request.Document = this.createForm.controls.document.value;
            this.commonMiddService.validateDocument(request).subscribe((resp) => {
                if (resp.StatusCode != 0) {
                    this.showErrorNotificationModal(resp.Message);
                    this.createForm.controls.document.setValue('');
                }
            });
        }
    }
    enabledInputDocument() {
        this.createForm.controls['document'].enable();
        this.createForm.controls.document.value != '' ? this.validateDocument() : '';
    }
};
AccountCreatePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder },
    { type: _services_document_service__WEBPACK_IMPORTED_MODULE_15__.DocumentService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateService },
    { type: _services_register_service__WEBPACK_IMPORTED_MODULE_16__.RegisterService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_7__.UrlDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__.BsModalService },
    { type: _services_security_question_service__WEBPACK_IMPORTED_MODULE_17__.SecurityQuestionService },
    { type: src_app_shared_services_common_midd_service__WEBPACK_IMPORTED_MODULE_6__.CommonMiddService }
];
AccountCreatePage.propDecorators = {
    parentForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.Input }]
};
AccountCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
        selector: 'app-account-create',
        template: _account_create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountCreatePage);

function TermsComponent(TermsComponent, initialState) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 59801:
/*!**************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/account-verification/account-verification.page.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountVerificationPage": () => (/* binding */ AccountVerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-verification.page.html?ngResource */ 98194);
/* harmony import */ var _account_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-verification.page.scss?ngResource */ 71239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_public_services_security_question_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/public/services/security-question.service */ 19643);













let AccountVerificationPage = class AccountVerificationPage {
    constructor(securityQuestionService, translate, bsModalService, urlDataService, router) {
        this.securityQuestionService = securityQuestionService;
        this.translate = translate;
        this.bsModalService = bsModalService;
        this.urlDataService = urlDataService;
        this.router = router;
        this.configurationButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        this.currentElement = 0;
        this.answerCorrectRequired = 3;
        this.waitingAnswer = true;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagesRoute;
        this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
            this.continueText = resp;
        });
        ;
        this.configurationButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Primary;
        this.configurationButton.text = this.continueText;
    }
    ngOnInit() {
        this.loadQuestions();
    }
    loadQuestions() {
        if (this.urlDataService.SecurityQuestions) {
            this.urlDataService.SecurityQuestions.forEach((element) => {
                element.Answer = element.Answer.toUpperCase();
            });
            this.securityQuestions = this.urlDataService.SecurityQuestions.filter((q) => q.Answer !== "");
        }
        else {
            this.showMissingQuestionsError();
        }
    }
    // loadQuestions() {
    //   let request = new SecurityQuestionRequest();
    //   request.Document = "38944826";
    //   request.DocumentType = "1";
    //   this.securityQuestionService.getSecurityQuestion(request)
    //     .subscribe(data => {
    //       if (data) {
    //         data.SQuestions.forEach(element => {
    //           element.Answer = element.Answer.toUpperCase();
    //         });
    //         this.securityQuestions = data;
    //       }
    //     });
    // }
    answerSelected(event) {
        this.securityQuestions
            .filter((x) => x.Question === event.Question)
            .map((y) => {
            y.CorrectValidationAnswer = event.CorrectValidationAnswer;
            y.FalseAnswers = event.FalseAnswers;
            y.SelectedAnswer = event.SelectedAnswer;
        });
        this.waitingAnswer = false;
    }
    complete() {
        var _a, _b;
        this.currentElement++;
        if (!((_a = this.securityQuestions[this.currentElement]) === null || _a === void 0 ? void 0 : _a.SelectedAnswer) || ((_b = this.securityQuestions[this.currentElement]) === null || _b === void 0 ? void 0 : _b.SelectedAnswer) == "")
            this.waitingAnswer = true;
        if (this.currentElement == this.securityQuestions.length) {
            this.showCorrectOrIncorrectAnswerModal(this.correctAnswer());
        }
    }
    showCorrectOrIncorrectAnswerModal(correct) {
        const initialState = {
            initialState: {
                iconHeader: correct ? 'alert-check.svg' : 'alert-circle.svg',
                subTitle: correct ? 'Respuestas correctas' : 'Respuestas incorrectas',
                description: correct ? 'Puede continuar con el proceso de registro' : 'Por favor, póngase en contacto con un asistente de servicio al cliente para continuar con el registro',
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
        if (correct) {
            this.bsModalRef.content.onClose.subscribe(() => {
                this.router.navigate(['/welcome/data-complete']);
            });
        }
        else {
            this.bsModalRef.content.onClose.subscribe(() => {
                this.router.navigate(['/welcome/ini-sesion']);
            });
        }
    }
    showMissingQuestionsError() {
        const initialState = {
            initialState: {
                iconHeader: 'alert-circle.svg',
                subTitle: 'Hubo un problema',
                description: 'Por favor, póngase en contacto con un asistente de servicio al cliente para continuar con el registro',
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
        this.bsModalRef.content.onClose.subscribe(() => {
            this.router.navigate(['/welcome']);
        });
    }
    correctAnswer() {
        let i = 0;
        this.securityQuestions.forEach((element) => {
            if (element.SelectedAnswer === element.Answer)
                i++;
        });
        if (i >= this.answerCorrectRequired)
            return true;
        else
            return false;
    }
    goToPreviousQuestion() {
        this.waitingAnswer = false;
        this.currentElement--;
    }
};
AccountVerificationPage.ctorParameters = () => [
    { type: src_app_public_services_security_question_service__WEBPACK_IMPORTED_MODULE_7__.SecurityQuestionService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_5__.UrlDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
AccountVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-account-verification',
        template: _account_verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountVerificationPage);



/***/ }),

/***/ 43138:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/account-verification/components/security-question/security-question.page.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityQuestionPage": () => (/* binding */ SecurityQuestionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _security_question_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security-question.page.html?ngResource */ 3707);
/* harmony import */ var _security_question_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security-question.page.scss?ngResource */ 17292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_public_services_fake_answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/services/fake-answer.service */ 6743);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);






let SecurityQuestionPage = class SecurityQuestionPage {
    constructor(fakeAnswerService) {
        this.fakeAnswerService = fakeAnswerService;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imagesRoute;
    }
    ngOnInit() {
        this.generateAnswer();
    }
    generateAnswer() {
        this.securityQuestions = new Array();
        if (this.securityQuestion.SelectedAnswer === "" || !this.securityQuestion.SelectedAnswer) {
            this.securityQuestion.FalseAnswers = this.fakeAnswerService.GetAnswerById(4, this.securityQuestion.AnswerType, this.securityQuestion.Answer);
            this.securityQuestion.SelectedAnswer = "";
            this.securityQuestion.CorrectValidationAnswer = false;
        }
    }
    onClickAnswer() {
        this.onClick.emit(this.securityQuestion);
    }
};
SecurityQuestionPage.ctorParameters = () => [
    { type: src_app_public_services_fake_answer_service__WEBPACK_IMPORTED_MODULE_2__.FakeAnswerService }
];
SecurityQuestionPage.propDecorators = {
    securityQuestion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
SecurityQuestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-security-question',
        template: _security_question_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_security_question_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SecurityQuestionPage);



/***/ }),

/***/ 46795:
/*!************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/data-complete/data-complete.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataCompletePage": () => (/* binding */ DataCompletePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _data_complete_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-complete.page.html?ngResource */ 99304);
/* harmony import */ var _data_complete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-complete.page.scss?ngResource */ 57956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_public_services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/services/person.service */ 87224);
/* harmony import */ var src_app_public_services_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/public/services/place.service */ 97523);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);














let DataCompletePage = class DataCompletePage {
    constructor(fb, personService, placeService, translate, urlDataService, router) {
        this.fb = fb;
        this.personService = personService;
        this.placeService = placeService;
        this.translate = translate;
        this.urlDataService = urlDataService;
        this.router = router;
        this.configurationButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_6__.ButtonConfiguration();
        this.maxDate = new Date();
        this.minDate = {
            year: this.maxDate.getUTCFullYear() - src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.adultAge,
            month: this.maxDate.getUTCMonth(),
            day: this.maxDate.getUTCDate()
        };
        this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
            this.continueText = resp;
        });
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment;
        this.max = new Date(this.minDate.year, this.minDate.month, this.minDate.day);
        this.configurationButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__.ButtonType.Primary;
        this.configurationButton.text = this.continueText;
        this.loadUser();
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.imagesRoute;
        this.form = this.fb.group({
            firstName: [{ value: '', disabled: !this.user.FailedVenko }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[a-zA-Z \-\']+')]],
            secondName: [{ value: '', disabled: !this.user.FailedVenko }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[a-zA-Z \-\']+')],
            firstLastName: [{ value: '', disabled: !this.user.FailedVenko }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[a-zA-Z \-\']+')]],
            secondLastName: [{ value: '', disabled: !this.user.FailedVenko }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[a-zA-Z \-\']+')],
            departament: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            cellPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_5__.ValidatorStartCellPhoneNumber]],
            phone: ['', src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_5__.ValidatorStartPhoneNumber],
        });
    }
    ngOnInit() {
        this.getGender();
        this.getDepartament();
        this.loadUser();
        this.setInitialFormUserValue();
    }
    onlyNumber(event) {
        return this.onlyNumber(event);
    }
    getGender() {
        this.personService.getGender().subscribe(resp => {
            if (resp) {
                this.gender = resp;
            }
        });
    }
    getDepartament() {
        this.placeService.getDepartaments().subscribe(resp => {
            if (resp) {
                this.departament = resp;
            }
        });
    }
    getCities(codeDepartment) {
        this.placeService.getCities(codeDepartment).subscribe(resp => {
            if (resp) {
                this.cities = resp;
            }
        });
    }
    loadUser() {
        this.user = this.urlDataService.User;
        if (!this.user)
            this.router.navigate(['welcome'], { replaceUrl: true });
    }
    onChangeDepartment() {
        this.getCities(this.form.controls.departament.value);
    }
    complete() {
        this.setUserValue();
        this.goToRegisterPassword();
    }
    setInitialFormUserValue() {
        (this.user.NameOne) ? this.form.controls.firstName.setValue(this.user.NameOne) : '';
        (this.user.NameTwo) ? this.form.controls.secondName.setValue(this.user.NameTwo) : '';
        (this.user.LastNameOne) ? this.form.controls.firstLastName.setValue(this.user.LastNameOne) : '';
        (this.user.LastNameTwo) ? this.form.controls.secondLastName.setValue(this.user.LastNameTwo) : '';
        (this.user.Department) ? this.form.controls.departament.setValue(this.user.Department) : '';
        (this.user.City) ? this.form.controls.city.setValue(this.user.City) : '';
        (this.user.Gender) ? this.form.controls.gender.setValue(this.user.Gender) : '';
        (this.user.CellPhone) ? this.form.controls.cellPhone.setValue(this.user.CellPhone) : '';
        (this.user.PhoneNumber) ? this.form.controls.phone.setValue(this.user.PhoneNumber) : '';
    }
    setUserValue() {
        this.user.NameOne = this.form.controls.firstName.value;
        this.user.NameTwo = this.form.controls.secondName.value;
        this.user.LastNameOne = this.form.controls.firstLastName.value;
        this.user.LastNameTwo = this.form.controls.secondLastName.value;
        this.user.Department = this.form.controls.departament.value;
        this.user.City = this.form.controls.city.value;
        this.user.Gender = this.form.controls.gender.value;
        this.user.CellPhone = this.form.controls.cellPhone.value;
        this.user.PhoneNumber = this.form.controls.phone.value;
        this.user.Birthdate = this.form.controls.date.value;
    }
    goToRegisterPassword() {
        this.urlDataService.User = this.user;
        this.router.navigate(['/welcome/register-password']);
    }
};
DataCompletePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_public_services_person_service__WEBPACK_IMPORTED_MODULE_2__.PersonService },
    { type: src_app_public_services_place_service__WEBPACK_IMPORTED_MODULE_3__.PlaceService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_7__.UrlDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
DataCompletePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-data-complete',
        template: _data_complete_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_data_complete_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DataCompletePage);



/***/ }),

/***/ 62824:
/*!********************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/register-password/register-password.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPasswordPage": () => (/* binding */ RegisterPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-password.page.html?ngResource */ 66798);
/* harmony import */ var _register_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-password.page.scss?ngResource */ 70251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_public_services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/services/register.service */ 85972);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_helpers_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/regex */ 43274);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 92340);
















let RegisterPasswordPage = class RegisterPasswordPage {
    constructor(bsModalService, fb, translate, registerService, urlDataService, router) {
        this.bsModalService = bsModalService;
        this.fb = fb;
        this.translate = translate;
        this.registerService = registerService;
        this.urlDataService = urlDataService;
        this.router = router;
        this.configurationButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_7__.ButtonConfiguration();
        this.regex = src_app_shared_helpers_regex__WEBPACK_IMPORTED_MODULE_5__.Regex;
        this.hide = true;
        this.hideC = true;
        this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
            this.continueText = resp;
        });
        ;
        this.configurationButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__.ButtonType.Primary;
        this.configurationButton.text = this.continueText;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.imagesRoute;
        this.formPassword = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(this.regex.min1Number),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(this.regex.specialCharacter),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(this.regex.upperCaseCharacter)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, (0,src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_6__.EmailEqualsValidator)('password')]]
        });
    }
    ngOnInit() {
        this.loadUser();
    }
    loadUser() {
        this.user = this.urlDataService.User;
        if (!this.user)
            this.router.navigate(['welcome'], { replaceUrl: true });
    }
    showErroResponse(msg) {
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
        this.bsModalRef.content.onClose.subscribe(() => {
            this.router.navigate(['/welcome/ini-sesion']);
        });
    }
    showSuccessResponse(msg) {
        const initialState = {
            initialState: {
                iconHeader: 'alert-check.svg',
                subTitle: 'Registro exitoso',
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
        this.bsModalRef.content.onClose.subscribe(() => {
            this.router.navigate(['/welcome/ini-sesion']);
        });
    }
    saveUser() {
        this.user.Password = this.formPassword.controls.password.value;
        this.user.ConfirmPassword = this.formPassword.controls.passwordConfirm.value;
        this.registerService.saveUser(this.user).subscribe(resp => {
            if (resp.StatusCore == 0) {
                this.showSuccessResponse(resp.Message);
            }
            else {
                this.showErroResponse(resp.Message);
            }
        });
    }
};
RegisterPasswordPage.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.BsModalService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: src_app_public_services_register_service__WEBPACK_IMPORTED_MODULE_2__.RegisterService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_8__.UrlDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router }
];
RegisterPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-register-password',
        template: _register_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPasswordPage);



/***/ }),

/***/ 35952:
/*!*********************************************************************!*\
  !*** ./src/app/public/sections/login/ini-sesion/ini-sesion.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IniSesionPage": () => (/* binding */ IniSesionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ini_sesion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ini-sesion.page.html?ngResource */ 11527);
/* harmony import */ var _ini_sesion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ini-sesion.page.scss?ngResource */ 51550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_public_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/services/login.service */ 83147);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_services_sentry_handelerror__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/sentry.handelerror */ 67533);
/* harmony import */ var capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! capacitor-native-biometric-auth */ 95048);















let IniSesionPage = class IniSesionPage {
    constructor(bsModalService, route, router, fb, loginService, translate, sentry) {
        this.bsModalService = bsModalService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.loginService = loginService;
        this.translate = translate;
        this.sentry = sentry;
        this.ingresarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imagesRoute;
        this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
            this.continueText = resp;
        });
        ;
        this.ingresarButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__.ButtonType.Primary;
        this.ingresarButton.text = this.continueText;
        this.ingresarButton.fontsSize = "20px";
        this.ingresarButton.width = "250px";
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
        });
    }
    ionViewWillEnter() {
        this.getData();
    }
    ngOnInit() {
        this.profileSnapshot = localStorage.getItem('profile');
        this.loadParamsSetProfile();
    }
    getData() {
        console.log("getData");
        capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__.NativeBiometric.getCredentials({
            server: "www.example.com",
        }).then((result) => {
            this.email = result.username;
            this.passwordUser = localStorage.getItem('passwordUser');
            this.check();
        }, (result) => {
            this.email = result.username;
            this.password = result.password;
        });
    }
    check() {
        capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__.NativeBiometric.isAvailable().then((result) => {
            const isAvailable = result.isAvailable;
            console.log("isAvailable", isAvailable);
            const isFingerPrint = result.biometryType == capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__.BiometryType.FINGERPRINT;
            console.log("isFingerPrint", isFingerPrint);
            const isFaceAuth = result.biometryType == capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__.BiometryType.FACE_AUTHENTICATION;
            console.log("isFaceAuth", isFaceAuth);
            const isIrisAuth = result.biometryType == capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__.BiometryType.IRIS_AUTHENTICATION;
            console.log("isIrisAuth", isIrisAuth);
            const isTouchId = result.biometryType == capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__.BiometryType.TOUCH_ID;
            console.log("isTouchId", isTouchId);
            const isFaceId = result.biometryType == capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__.BiometryType.FACE_ID;
            console.log("isFaceId", isFaceId);
            if (isAvailable) {
                // Get user's credentials
                capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__.NativeBiometric.getCredentials({
                    server: "www.example.com",
                }).then((credentials) => {
                    // Authenticate using biometrics before logging the user in
                    capacitor_native_biometric_auth__WEBPACK_IMPORTED_MODULE_8__.NativeBiometric.verifyIdentity({
                        reason: "For easy log in",
                        title: "Iniciar Sesión",
                        subtitle: "Falck",
                        description: "",
                        retries: 5,
                    }).then(() => {
                        // Authentication successful
                        localStorage.setItem("passwordUser", credentials.password);
                        this.passwordUser = credentials.password;
                        this.clickLoginFingerPrint();
                    }, (error) => {
                        console.log('error', error);
                        // Failed to authenticate
                    });
                });
            }
        }, (error) => {
            console.log("ERROR", error);
            // Couldn't check availability
        });
    }
    loadParamsSetProfile() {
        if (this.route.snapshot.queryParams['profile']) {
            (this.route.snapshot.queryParams['profile']) ? this.profile = this.route.snapshot.queryParams['profile'] : this.profile = "customers";
            if (this.profile !== "customers" &&
                this.profile !== "specialists" &&
                this.profile !== "administrator") {
                this.profile = "customers";
            }
            this.setLocalStorageProfile();
        }
    }
    setLocalStorageProfile() {
        localStorage.setItem('profile', this.profile);
    }
    navigatoToWelcome() {
        this.router.navigate(['/onboarding']);
    }
    clickLoginFingerPrint() {
        this.isLoading = true;
        this.loginService.getLogin(this.email, this.passwordUser).subscribe(resp => {
            this.CompleteLogin(resp);
            this.isLoading = false;
        }, error => {
            this.sentry.handleError(error);
            this.loginForm.reset();
            this.isLoading = false;
            this.showErrorNotificationModal(error.error.error_description);
        });
    }
    ;
    clickLogin() {
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.isLoading = true;
            localStorage.setItem("passwordUser", this.loginForm.controls.password.value);
            this.loginService.getLogin(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(resp => {
                this.CompleteLogin(resp);
                this.isLoading = false;
            }, error => {
                this.sentry.handleError(error);
                this.loginForm.reset();
                this.isLoading = false;
                this.showErrorNotificationModal(error.error.error_description);
            });
        }
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
        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_6__.InformativeModalComponent, initialState);
        this.bsModalRef.content.onClose.subscribe(() => {
            this.router.navigate(['/onboarding/ini-sesion']);
        });
    }
    CompleteLogin(response) {
        if (response.UserMidd == "True" && response.ChangedPassword == "False") {
        }
        else {
            localStorage.setItem("token", response.access_token);
            localStorage.setItem("userName", response.UserName);
            localStorage.setItem("NameOne", response.NameOne);
            localStorage.setItem("NameTwo", response.NameTwo);
            localStorage.setItem("LastNameOne", response.LastNameOne);
            localStorage.setItem("LastNameTwo", response.LastNameTwo);
            localStorage.setItem("registerId", response.IdReference);
            localStorage.setItem("documentType", response.DocumentType);
            localStorage.setItem("documentTypeName", response.DocumentTypeName);
            localStorage.setItem("document", response.Document);
            localStorage.removeItem('affiliateType');
            localStorage.setItem("affiliateType", response.AffiliateType);
            localStorage.setItem("roleType", response.RoleType);
            localStorage.setItem("CellPhone", response.CellPhone);
            localStorage.setItem("expires", response[".expires"]);
            localStorage.setItem("nameItemMenu", "Inicio");
            localStorage.setItem("urlItemMenu", "/admin/home");
            localStorage.setItem("iconItemMenu", "fa fa-home");
            this.loginForm.reset();
            this.router.navigate(['portal/my-account/info-fingerprint']);
        }
    }
};
IniSesionPage.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_public_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: src_app_shared_services_sentry_handelerror__WEBPACK_IMPORTED_MODULE_7__.SentryHandelError }
];
IniSesionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-ini-sesion',
        template: _ini_sesion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ini_sesion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IniSesionPage);



/***/ }),

/***/ 90307:
/*!***************************************************************!*\
  !*** ./src/app/public/sections/onboarding/onboarding.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPage": () => (/* binding */ OnboardingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding.page.html?ngResource */ 44735);
/* harmony import */ var _onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page.scss?ngResource */ 34450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);






let OnboardingPage = class OnboardingPage {
    constructor() {
        var _a, _b, _c, _d;
        this.solicitarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.serviciosButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.solicitarButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Secundary;
        this.solicitarButton.text = "Solicitar Servicio";
        this.solicitarButton.fontsSize = "18px";
        this.solicitarButton.width = "290px";
        this.serviciosButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Primary;
        this.serviciosButton.text = "Servicios en Centros Médicos";
        this.serviciosButton.fontsSize = "18px";
        this.serviciosButton.width = "290px";
        this.dataUser = {
            Email: localStorage.getItem("userName"),
            middleName: localStorage.getItem("NameOne"),
            FullName: `${(_a = localStorage.getItem('NameOne')) !== null && _a !== void 0 ? _a : ''} ${(_b = localStorage.getItem('NameTwo')) !== null && _b !== void 0 ? _b : ''} ${(_c = localStorage.getItem('LastNameOne')) !== null && _c !== void 0 ? _c : ''} ${(_d = localStorage.getItem('LastNameTwo')) !== null && _d !== void 0 ? _d : ''}`
        };
        this.middleName = this.dataUser.middleName;
    }
    ngOnInit() {
    }
};
OnboardingPage.ctorParameters = () => [];
OnboardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-onboarding',
        template: _onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnboardingPage);



/***/ }),

/***/ 55690:
/*!**********************************************************************************************************!*\
  !*** ./src/app/public/sections/password/recover-password-mail-phone/recover-password-mail-phone.page.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverPasswordMailPhonePage": () => (/* binding */ RecoverPasswordMailPhonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recover_password_mail_phone_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recover-password-mail-phone.page.html?ngResource */ 32336);
/* harmony import */ var _recover_password_mail_phone_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recover-password-mail-phone.page.scss?ngResource */ 92225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);








let RecoverPasswordMailPhonePage = class RecoverPasswordMailPhonePage {
    constructor(translate) {
        this.translate = translate;
        this.smsBtn = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_2__.ButtonConfiguration();
        this.mailBtn = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_2__.ButtonConfiguration();
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imagesRoute;
        this.translate.get('PUBLIC.PASSWORD.sendEmail').subscribe(resp => {
            this.sendMail = resp;
        });
        this.translate.get('PUBLIC.PASSWORD.sendSms').subscribe(resp => {
            this.sendSms = resp;
        });
    }
    ngOnInit() {
        this.smsBtn.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Tertiary;
        this.smsBtn.text = this.sendSms;
        this.smsBtn.imageName = "cel-icon.svg";
        this.mailBtn.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Tertiary;
        this.mailBtn.text = this.sendMail;
        this.mailBtn.imageName = "mail-icon.svg";
    }
};
RecoverPasswordMailPhonePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
RecoverPasswordMailPhonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-recover-password-mail-phone',
        template: _recover_password_mail_phone_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recover_password_mail_phone_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecoverPasswordMailPhonePage);



/***/ }),

/***/ 51542:
/*!**********************************************************************************************!*\
  !*** ./src/app/public/sections/password/recover-password-mail/recover-password-mail.page.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverPasswordMailPage": () => (/* binding */ RecoverPasswordMailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recover_password_mail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recover-password-mail.page.html?ngResource */ 10207);
/* harmony import */ var _recover_password_mail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recover-password-mail.page.scss?ngResource */ 60453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_app_public_services_new_forgot_password_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/public/services/new-forgot-password.service */ 87842);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_public_models_requests_new_forgot_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/public/models/requests/new-forgot-password */ 454);
/* harmony import */ var src_app_shared_services_sentry_handelerror__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/sentry.handelerror */ 67533);
















let RecoverPasswordMailPage = class RecoverPasswordMailPage {
    constructor(fb, translate, forgotPassServices, router, modalInfo, sentry, urlDataService) {
        this.fb = fb;
        this.translate = translate;
        this.forgotPassServices = forgotPassServices;
        this.router = router;
        this.modalInfo = modalInfo;
        this.sentry = sentry;
        this.urlDataService = urlDataService;
        this.continuarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_2__.ButtonConfiguration();
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imagesRoute;
        this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
            this.continueText = resp;
        });
        ;
        this.continuarButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__.ButtonType.Primary;
        this.continuarButton.text = this.continueText;
        this.emailForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
        });
    }
    ngOnInit() {
    }
    forgotPassword() {
        var _a;
        if (this.emailForm.invalid) {
            return;
        }
        else {
            let user = new src_app_public_models_requests_new_forgot_password__WEBPACK_IMPORTED_MODULE_8__.NewForgotPassword();
            this.isLoading = true;
            user.User = (_a = this.emailForm.get('email')) === null || _a === void 0 ? void 0 : _a.value;
            this.forgotPassServices.sendCodeForgotPassword(user).subscribe(resp => {
                this.responsePassword = resp;
                this.isLoading = false;
                if (this.responsePassword.StatusCode == 0) {
                    this.urlDataService.NewForgotPasswor = user;
                    const initialState = {
                        initialState: {
                            iconHeader: 'alert-circle.svg',
                            subTitle: this.responsePassword.Title,
                            description: this.responsePassword.Message,
                            onlyButtonConfirm: true,
                            textButton: 'Aceptar',
                            textButton1: '',
                            textButton2: '',
                            visibleButtonClose: false,
                        },
                        class: 'modal-dialog-centered modal-rounded',
                        backdrop: true,
                        ignoreBackdropClick: true
                    };
                    this.bsModalRef = this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_5__.InformativeModalComponent, initialState);
                    this.bsModalRef.content.onClose.subscribe((resp) => {
                        if (resp) {
                            this.router.navigate(['/onboarding/remember-password-code']);
                        }
                    });
                }
                else {
                    const initialState = {
                        initialState: {
                            iconHeader: 'alert-circle.svg',
                            subTitle: this.responsePassword.Title,
                            description: this.responsePassword.Message,
                            onlyButtonConfirm: true,
                            textButton: 'Aceptar',
                            textButton1: '',
                            textButton2: '',
                            visibleButtonClose: false,
                        },
                        class: 'modal-dialog-centered modal-rounded',
                        backdrop: true,
                        ignoreBackdropClick: true
                    };
                    this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_5__.InformativeModalComponent, initialState);
                }
            }, error => {
                this.sentry.handleError(error);
            });
        }
    }
};
RecoverPasswordMailPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: src_app_public_services_new_forgot_password_service__WEBPACK_IMPORTED_MODULE_7__.NewForgotPasswordService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__.BsModalService },
    { type: src_app_shared_services_sentry_handelerror__WEBPACK_IMPORTED_MODULE_9__.SentryHandelError },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_6__.UrlDataService }
];
RecoverPasswordMailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-recover-password-mail',
        template: _recover_password_mail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recover_password_mail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecoverPasswordMailPage);



/***/ }),

/***/ 96226:
/*!************************************************************************************************!*\
  !*** ./src/app/public/sections/password/recover-password-phone/recover-password-phone.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverPasswordPhonePage": () => (/* binding */ RecoverPasswordPhonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recover_password_phone_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recover-password-phone.page.html?ngResource */ 93580);
/* harmony import */ var _recover_password_phone_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recover-password-phone.page.scss?ngResource */ 34912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_public_models_requests_new_forgot_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/models/requests/new-forgot-password */ 454);
/* harmony import */ var src_app_public_services_new_forgot_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/public/services/new-forgot-password.service */ 87842);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_services_sentry_handelerror__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/sentry.handelerror */ 67533);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 92340);

















let RecoverPasswordPhonePage = class RecoverPasswordPhonePage {
    constructor(fb, translate, forgotPassServices, urlDataService, router, modalInfo, sentry) {
        this.fb = fb;
        this.translate = translate;
        this.forgotPassServices = forgotPassServices;
        this.urlDataService = urlDataService;
        this.router = router;
        this.modalInfo = modalInfo;
        this.sentry = sentry;
        this.continuarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_7__.ButtonConfiguration();
        this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
            this.continueText = resp;
        });
        ;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.imagesRoute;
        this.continuarButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__.ButtonType.Primary;
        this.continuarButton.text = this.continueText;
        this.phoneForm = this.fb.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_6__.ValidatorStartCellPhoneNumber]],
        });
    }
    ngOnInit() {
    }
    onlyNumber(event) {
        return (0,src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_6__.onlyNumber)(event);
    }
    forgotPassword() {
        var _a;
        if (this.phoneForm.invalid) {
            return;
        }
        else {
            let user = new src_app_public_models_requests_new_forgot_password__WEBPACK_IMPORTED_MODULE_2__.NewForgotPassword();
            this.isLoading = true;
            user.User = (_a = this.phoneForm.get('phone')) === null || _a === void 0 ? void 0 : _a.value;
            this.forgotPassServices.sendCodeForgotPassword(user).subscribe(resp => {
                this.responsePassword = resp;
                this.isLoading = false;
                if (this.responsePassword.StatusCode == 0) {
                    this.urlDataService.NewForgotPasswor = user;
                    this.urlDataService.NewForgotPasswor = user;
                    const initialState = {
                        initialState: {
                            iconHeader: 'alert-circle.svg',
                            subTitle: this.responsePassword.Title,
                            description: this.responsePassword.Message,
                            onlyButtonConfirm: true,
                            textButton: 'Aceptar',
                            textButton1: '',
                            textButton2: '',
                            visibleButtonClose: false,
                        },
                        class: 'modal-dialog-centered modal-rounded'
                    };
                    this.bsModalRef = this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
                    this.bsModalRef.content.onClose.subscribe((resp) => {
                        if (resp) {
                            this.router.navigate(['/onboarding/remember-password-code']);
                        }
                    });
                }
                else {
                    const initialState = {
                        initialState: {
                            iconHeader: 'alert-circle.svg',
                            subTitle: this.responsePassword.Title,
                            description: this.responsePassword.Message,
                            onlyButtonConfirm: true,
                            textButton: 'Aceptar',
                            textButton1: '',
                            textButton2: '',
                            visibleButtonClose: false,
                        },
                        class: 'modal-dialog-centered modal-rounded'
                    };
                    this.bsModalRef = this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
                }
            }, error => {
                this.sentry.handleError(error);
            });
        }
    }
};
RecoverPasswordPhonePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: src_app_public_services_new_forgot_password_service__WEBPACK_IMPORTED_MODULE_3__.NewForgotPasswordService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_9__.UrlDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.BsModalService },
    { type: src_app_shared_services_sentry_handelerror__WEBPACK_IMPORTED_MODULE_8__.SentryHandelError }
];
RecoverPasswordPhonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-recover-password-phone',
        template: _recover_password_phone_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recover_password_phone_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecoverPasswordPhonePage);



/***/ }),

/***/ 58649:
/*!************************************************************************************************!*\
  !*** ./src/app/public/sections/password/remember-password-code/remember-password-code.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RememberPasswordCodePage": () => (/* binding */ RememberPasswordCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _remember_password_code_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remember-password-code.page.html?ngResource */ 8598);
/* harmony import */ var _remember_password_code_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remember-password-code.page.scss?ngResource */ 42242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_public_models_requests_verify_code_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/models/requests/verify-code-request */ 77003);
/* harmony import */ var src_app_public_services_new_forgot_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/public/services/new-forgot-password.service */ 87842);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);















let RememberPasswordCodePage = class RememberPasswordCodePage {
    constructor(fb, translate, forgotServices, urlDataService, modalInfo, router) {
        this.fb = fb;
        this.translate = translate;
        this.forgotServices = forgotServices;
        this.urlDataService = urlDataService;
        this.modalInfo = modalInfo;
        this.router = router;
        this.continuarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_6__.ButtonConfiguration();
        this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
            this.continueText = resp;
        });
        ;
        this.continuarButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__.ButtonType.Primary;
        this.continuarButton.text = this.continueText;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.imagesRoute;
        this.codeForm = this.fb.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        });
        this.codeIncomplete = true;
    }
    ngOnInit() {
        this.user = this.urlDataService.NewForgotPasswor.User;
        this.codeForm.reset();
    }
    onCodeChanged(code) {
        this.code = code;
        code.length == 4 ? (this.codeIncomplete = false, this.onCodeCompleted()) : (this.codeIncomplete = true);
    }
    onCodeCompleted() {
        if (this.codeForm.invalid) {
            return;
        }
        else {
            let verifyCodeRequest = new src_app_public_models_requests_verify_code_request__WEBPACK_IMPORTED_MODULE_2__.VerifyCodeRequest();
            verifyCodeRequest.Code = this.code;
            verifyCodeRequest.user = this.user;
            this.isLoading = true;
            this.forgotServices.verifyCode(verifyCodeRequest).subscribe((resp) => {
                this.isLoading = false;
                if (resp.StatusCode == 0) {
                    this.urlDataService.CodeValidator = verifyCodeRequest.Code;
                    this.router.navigate(['/onboarding/remember-password']);
                }
                else if (resp.StatusCode == 9) {
                    const initialState = {
                        initialState: {
                            iconHeader: 'alert-circle.svg',
                            subTitle: resp.Title,
                            description: 'El código ingresado es incorrecto',
                            onlyButtonConfirm: true,
                            textButton: 'Aceptar',
                            textButton1: '',
                            textButton2: '',
                            visibleButtonClose: false,
                        },
                        class: 'modal-dialog-centered modal-rounded',
                        backdrop: true,
                        ignoreBackdropClick: true
                    };
                    this.bsModalRef = this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
                }
                else {
                    const initialState = {
                        initialState: {
                            iconHeader: 'alert-circle.svg',
                            subTitle: resp.Title,
                            description: resp.Message,
                            onlyButtonConfirm: true,
                            textButton: 'Aceptar',
                            textButton1: '',
                            textButton2: '',
                            visibleButtonClose: false,
                        },
                        class: 'modal-dialog-centered modal-rounded',
                        backdrop: true,
                        ignoreBackdropClick: true
                    };
                    this.bsModalRef = this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
                    this.bsModalRef.content.onClose.subscribe((resp) => {
                        if (resp) {
                            this.router.navigate(['/onboarding/ini-session']);
                        }
                    });
                }
            });
        }
    }
};
RememberPasswordCodePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: src_app_public_services_new_forgot_password_service__WEBPACK_IMPORTED_MODULE_3__.NewForgotPasswordService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_7__.UrlDataService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.BsModalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router }
];
RememberPasswordCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-remember-password-code',
        template: _remember_password_code_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_remember_password_code_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RememberPasswordCodePage);



/***/ }),

/***/ 38290:
/*!**************************************************************************************!*\
  !*** ./src/app/public/sections/password/remember-password/remember-password.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RememberPasswordPage": () => (/* binding */ RememberPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _remember_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remember-password.page.html?ngResource */ 29699);
/* harmony import */ var _remember_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remember-password.page.scss?ngResource */ 50598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_public_models_entities_setPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/models/entities/setPassword */ 92943);
/* harmony import */ var src_app_public_services_new_forgot_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/public/services/new-forgot-password.service */ 87842);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_helpers_regex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/regex */ 43274);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 92340);

















let RememberPasswordPage = class RememberPasswordPage {
    constructor(fb, translate, passwordService, modalInfo, router, urlDataService) {
        this.fb = fb;
        this.translate = translate;
        this.passwordService = passwordService;
        this.modalInfo = modalInfo;
        this.router = router;
        this.urlDataService = urlDataService;
        this.continuarButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_8__.ButtonConfiguration();
        this.regex = src_app_shared_helpers_regex__WEBPACK_IMPORTED_MODULE_6__.Regex;
        this.hide = true;
        this.hideC = true;
        this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
            this.continueText = resp;
        });
        ;
        this.continuarButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_5__.ButtonType.Primary;
        this.continuarButton.text = this.continueText;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.imagesRoute;
        this.passForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.regex.min1Number), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.regex.specialCharacter), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern(this.regex.upperCaseCharacter)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, (0,src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_7__.EmailEqualsValidator)('password')]]
        });
    }
    ngOnInit() {
        !this.urlDataService.NewForgotPasswor ? this.router.navigate(['/onboarding']) : this.setRequest();
    }
    setRequest() {
        this.setPassword = new src_app_public_models_entities_setPassword__WEBPACK_IMPORTED_MODULE_2__.SetPassword();
        this.setPassword.Email = this.urlDataService.NewForgotPasswor.User;
        this.setPassword.Code = this.urlDataService.CodeValidator;
    }
    complete() {
        var _a, _b;
        if (this.passForm.invalid) {
            return;
        }
        else {
            this.setPassword.NewPassword = (_a = this.passForm.get('password')) === null || _a === void 0 ? void 0 : _a.value;
            this.setPassword.ConfirmPassword = (_b = this.passForm.get('passwordConfirm')) === null || _b === void 0 ? void 0 : _b.value;
            this.isLoading = true;
            this.passwordService.setPassword(this.setPassword).subscribe((resp) => {
                this.isLoading = false;
                if (resp.StatusCode == 24) {
                    const initialState = {
                        initialState: {
                            iconHeader: 'alert-circle.svg',
                            subTitle: resp.Title,
                            description: resp.Message,
                            onlyButtonConfirm: true,
                            textButton: 'Aceptar',
                            textButton1: '',
                            textButton2: '',
                            visibleButtonClose: false,
                        },
                        class: 'modal-dialog-centered modal-rounded',
                        backdrop: true,
                        ignoreBackdropClick: true
                    };
                    this.bsModalRef = this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
                    this.bsModalRef.content.onClose.subscribe((resp) => {
                        if (resp) {
                            this.router.navigate(['/onboarding/ini-sesion']);
                        }
                    });
                }
                else if (resp.StatusCode == 18 || resp.StatusCode == 46) {
                    const initialState = {
                        initialState: {
                            iconHeader: 'alert-circle.svg',
                            subTitle: resp.Title,
                            description: resp.Message,
                            onlyButtonConfirm: false,
                            textButton: '',
                            textButton1: 'Cancelar',
                            textButton2: 'Enviar Correo',
                            visibleButtonClose: false,
                        },
                        class: 'modal-dialog-centered modal-rounded',
                        backdrop: true,
                        ignoreBackdropClick: true
                    };
                    this.bsModalRef = this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
                    this.bsModalRef.content.onClose.subscribe((resp) => {
                        if (resp) {
                            let profile = localStorage.getItem('profile') === "customers" ? '1' : localStorage.getItem('profile') === "doctor" ? '4' : '2';
                            this.passwordService.activationMail(this.setPassword.NewPassword, profile).subscribe(resp => {
                                this.callModal(resp);
                            });
                        }
                    });
                }
                else {
                    const initialState = {
                        initialState: {
                            iconHeader: 'alert-circle.svg',
                            subTitle: resp.Title,
                            description: resp.Message,
                            onlyButtonConfirm: true,
                            textButton: 'Aceptar',
                            textButton1: '',
                            textButton2: '',
                            visibleButtonClose: false,
                        },
                        class: 'modal-dialog-centered modal-rounded',
                        backdrop: true,
                        ignoreBackdropClick: true
                    };
                    this.bsModalRef = this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
                    this.bsModalRef.content.onClose.subscribe((resp) => {
                        if (resp) {
                            this.router.navigate(['/onboarding']);
                        }
                    });
                }
            });
        }
    }
    callModal(resp) {
        const initialState = {
            initialState: {
                iconHeader: 'alert-circle.svg',
                subTitle: resp.Title,
                description: resp.Message,
                onlyButtonConfirm: true,
                textButton: 'Aceptar',
                textButton1: '',
                textButton2: '',
                visibleButtonClose: false,
            },
            class: 'modal-dialog-centered modal-rounded',
            backdrop: true,
            ignoreBackdropClick: true
        };
        this.bsModalRef = this.modalInfo.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_4__.InformativeModalComponent, initialState);
    }
};
RememberPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: src_app_public_services_new_forgot_password_service__WEBPACK_IMPORTED_MODULE_3__.NewForgotPasswordService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__.BsModalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_9__.UrlDataService }
];
RememberPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-remember-password',
        template: _remember_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_remember_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RememberPasswordPage);



/***/ }),

/***/ 75040:
/*!*****************************************************!*\
  !*** ./src/app/public/sections/terms/terms.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsPage": () => (/* binding */ TermsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _terms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.page.html?ngResource */ 55923);
/* harmony import */ var _terms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms.page.scss?ngResource */ 62314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _services_terms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/terms.service */ 4229);







let TermsPage = class TermsPage {
    constructor(bsModalRef, modalService, termsService) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.termsService = termsService;
        this.imagesRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute;
        this.isLoading = true;
    }
    ngOnInit() {
        this.isLoading = true;
        this.tagCode = this.parentForm === "specialists" ? "TYCE" : "TYCC";
        let roleType = localStorage.getItem("roleType");
        this.tagCodes = roleType != "2" ? "PPC" : "PPE";
        this.imageSource = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute}logo-modal.png`;
        this.loadContent(this.document);
    }
    loadContent(tagCode) {
        this.termsService.getLegalContent(tagCode).subscribe(message => {
            this.isLoading = false;
            if (message.StatusCode === 0) {
                this.texto = message.LegalContent.Content;
            }
        });
    }
    closeModal() {
        this.bsModalRef.hide();
    }
};
TermsPage.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalRef },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService },
    { type: _services_terms_service__WEBPACK_IMPORTED_MODULE_3__.TermsService }
];
TermsPage.propDecorators = {
    parentForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
TermsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-terms',
        template: _terms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_terms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsPage);



/***/ }),

/***/ 92015:
/*!************************************************************************************!*\
  !*** ./src/app/public/sections/useful-phones/list-phones/list-phones.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPhonesComponent": () => (/* binding */ ListPhonesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _list_phones_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-phones.component.html?ngResource */ 50734);
/* harmony import */ var _list_phones_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-phones.component.scss?ngResource */ 8312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_public_services_useful_phones_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/services/useful-phones.services */ 38168);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _option_city_option_city_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../option-city/option-city.component */ 63851);








let ListPhonesComponent = class ListPhonesComponent {
    constructor(bsModalRef, modalService, usefulPhoneServices) {
        this.bsModalRef = bsModalRef;
        this.modalService = modalService;
        this.usefulPhoneServices = usefulPhoneServices;
        this.enviroment = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imagesRoute;
    }
    ngOnInit() {
        this.descriptionPhones = [
            {
                title: 'Servicio al Cliente',
                img: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imagesRoute}icons/serviceclient.svg`,
                numbers: this.SacNumber
            },
            {
                title: 'Linea Médica',
                img: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imagesRoute}icons/linemedicina.svg`,
                numbers: this.LMED
            },
            {
                title: 'Quiero Afiliarme',
                img: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imagesRoute}icons/pbx.svg`,
                numbers: this.PBX
            }
        ];
    }
    volver() {
        const initialState = {
            initialState: {
                list: []
            },
            class: 'modal-dialog-centered modal-rounded'
        };
        this.modalRef = this.modalService.show(_option_city_option_city_component__WEBPACK_IMPORTED_MODULE_4__.OptionCityComponent, initialState);
    }
    closeModal() {
        this.bsModalRef.hide();
    }
};
ListPhonesComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalRef },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService },
    { type: src_app_public_services_useful_phones_services__WEBPACK_IMPORTED_MODULE_2__.UsefulPhonesServices }
];
ListPhonesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-list-phones',
        template: _list_phones_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_phones_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListPhonesComponent);



/***/ }),

/***/ 63851:
/*!************************************************************************************!*\
  !*** ./src/app/public/sections/useful-phones/option-city/option-city.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionCityComponent": () => (/* binding */ OptionCityComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _option_city_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option-city.component.html?ngResource */ 11208);
/* harmony import */ var _option_city_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option-city.component.scss?ngResource */ 32013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_public_models_requests_usefulphones_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/models/requests/usefulphones-request */ 11157);
/* harmony import */ var src_app_public_services_useful_phones_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/public/services/useful-phones.services */ 38168);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _list_phones_list_phones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../list-phones/list-phones.component */ 92015);













let OptionCityComponent = class OptionCityComponent {
    constructor(modalService, bsModalRef, translate, usefulPhoneServices, fb) {
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.translate = translate;
        this.usefulPhoneServices = usefulPhoneServices;
        this.fb = fb;
        this.inputLocationButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_5__.ButtonConfiguration();
        this.location = new src_app_public_models_requests_usefulphones_request__WEBPACK_IMPORTED_MODULE_2__.UserFulPhonesRequest();
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false);
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagesRoute;
        this.translate.get('PUBLIC.SHARED.accept').subscribe(resp => {
            this.acceptText = resp;
            this.form = this.fb.group({
                city: ['']
            });
        });
    }
    ngOnInit() {
        this.inputLocationButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_4__.ButtonType.Primary;
        this.inputLocationButton.width = "130px";
        this.inputLocationButton.text = this.acceptText;
        this.getPhones();
    }
    getPhones() {
        let usefulphonesRequest = new src_app_public_models_requests_usefulphones_request__WEBPACK_IMPORTED_MODULE_2__.UserFulPhonesRequest();
        usefulphonesRequest = this.location;
        this.loading = true;
        this.usefulPhoneServices.getPhones(usefulphonesRequest).subscribe(data => {
            var _a;
            this.listPhones = data;
            this.loading = false;
            (_a = this.form.get('city')) === null || _a === void 0 ? void 0 : _a.setValue(this.listPhones.UPhoneses[0].CityCode);
        });
    }
    getNumbersPhones() {
        const phones = this.listPhones.UPhoneses.filter((phones) => {
            return phones.CityCode == this.form.value.city;
        });
        const SacNumber = phones[0].Phones.filter((sac) => {
            return sac.Id == "SAC";
        });
        const LMED = phones[0].Phones.filter((LMED) => {
            return LMED.Id == "LMED";
        });
        const PBX = phones[0].Phones.filter((PBX) => {
            return PBX.Id == "PBX";
        });
        const initialState = {
            initialState: {
                list: phones[0],
                SacNumber,
                LMED,
                PBX
            },
            class: 'modal-dialog-centered modal-rounded modal-lg',
        };
        this.bsModalRef = this.modalService.show(_list_phones_list_phones_component__WEBPACK_IMPORTED_MODULE_7__.ListPhonesComponent, initialState);
    }
    closeModalAndOpen(openModal) {
        this.bsModalRef.hide();
        (openModal) ? this.getNumbersPhones() : '';
    }
};
OptionCityComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalRef },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: src_app_public_services_useful_phones_services__WEBPACK_IMPORTED_MODULE_3__.UsefulPhonesServices },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
OptionCityComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-option-city',
        template: _option_city_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_option_city_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OptionCityComponent);



/***/ }),

/***/ 8254:
/*!*********************************************************!*\
  !*** ./src/app/public/sections/welcome/welcome.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page.html?ngResource */ 77681);
/* harmony import */ var _welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss?ngResource */ 80856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _useful_phones_option_city_option_city_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useful-phones/option-city/option-city.component */ 63851);











let WelcomePage = class WelcomePage {
    constructor(router, route, translate, modalService) {
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.modalService = modalService;
        this.loginButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.usefulPhonesButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_3__.ButtonConfiguration();
        this.translate.get('PUBLIC.WELCOME.enterWithUserName').subscribe(resp => {
            this.enterWithUserNameText = resp;
        });
        this.translate.get('PUBLIC.WELCOME.useFulPhones').subscribe(resp => {
            this.useFulPhonesText = resp;
        });
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imagesRoute;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.country;
    }
    ngOnInit() {
        this.loginButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Primary;
        this.loginButton.text = this.enterWithUserNameText;
        this.loginButton.width = '300px';
        this.usefulPhonesButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_2__.ButtonType.Secundary;
        this.usefulPhonesButton.text = this.useFulPhonesText;
        this.usefulPhonesButton.width = '300px';
    }
    clickUsefulPhones() {
        const initialState = {
            initialState: {},
            class: 'modal-dialog-centered modal-rounded',
            id: 1
        };
        this.bsModalRef = this.modalService.show(_useful_phones_option_city_option_city_component__WEBPACK_IMPORTED_MODULE_5__.OptionCityComponent, initialState);
    }
    clickLogin() {
        this.router.navigate(['/onboarding/ini-sesion']);
    }
};
WelcomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__.BsModalService }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-welcome',
        template: _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePage);



/***/ }),

/***/ 6743:
/*!********************************************************!*\
  !*** ./src/app/public/services/fake-answer.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnswerEmiAddressList": () => (/* binding */ AnswerEmiAddressList),
/* harmony export */   "AnswerEmiNamesList": () => (/* binding */ AnswerEmiNamesList),
/* harmony export */   "AnswerUcmAddressList": () => (/* binding */ AnswerUcmAddressList),
/* harmony export */   "AnswerUcmNamesList": () => (/* binding */ AnswerUcmNamesList),
/* harmony export */   "EmiAddressList": () => (/* binding */ EmiAddressList),
/* harmony export */   "EmiNamesList": () => (/* binding */ EmiNamesList),
/* harmony export */   "FakeAnswerService": () => (/* binding */ FakeAnswerService),
/* harmony export */   "UcmAddressList": () => (/* binding */ UcmAddressList),
/* harmony export */   "UcmNamesList": () => (/* binding */ UcmNamesList)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_entities_answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/entities/answer */ 22669);
/* harmony import */ var _models_enums_answer_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/enums/answer-type */ 85940);





let FakeAnswerService = class FakeAnswerService {
    GetAnswerById(size, id, trueAnswer) {
        switch (id) {
            case (_models_enums_answer_type__WEBPACK_IMPORTED_MODULE_2__.AnswerType.Date):
                return this.GenerateDateRandom(size, trueAnswer);
            case (_models_enums_answer_type__WEBPACK_IMPORTED_MODULE_2__.AnswerType.Name):
                return this.GenerateListRandom(size, this.returnNameList(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.country), trueAnswer);
            case (_models_enums_answer_type__WEBPACK_IMPORTED_MODULE_2__.AnswerType.Address):
                return this.GenerateListRandom(size, this.returnAdressList(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.country), trueAnswer);
            case (_models_enums_answer_type__WEBPACK_IMPORTED_MODULE_2__.AnswerType.Email):
                return this.GenerateEmailRandom(size, trueAnswer);
            case (_models_enums_answer_type__WEBPACK_IMPORTED_MODULE_2__.AnswerType.Phone):
                return this.GeneratePhoneRandom(size, trueAnswer);
        }
    }
    GenerateDateRandom(size, trueAnswer) {
        let response = new Array();
        for (var i = 0; i < size; i++) {
            let fecha = this.ConverterStringToDate(trueAnswer);
            let answer = new _models_entities_answer__WEBPACK_IMPORTED_MODULE_1__.Answer();
            if ((i % 2) == 0) {
                if (i == 0)
                    fecha.setDate(fecha.getDate() + 1 * 2);
                else
                    fecha.setDate(fecha.getDate() + i * 2);
            }
            else {
                if (i == 0)
                    fecha.setDate(fecha.getDate() - (1 * 2));
                else
                    fecha.setDate(fecha.getDate() - (i * 2));
            }
            answer.GroupName = null;
            answer.Answer = this.ConverterDateToString(fecha);
            response.push(answer);
        }
        //agregamos la Answer verdadera como parte del listado de Answers falsas
        let _answer = new _models_entities_answer__WEBPACK_IMPORTED_MODULE_1__.Answer();
        _answer.Answer = trueAnswer;
        _answer.GroupName = null;
        const indexRand = this.Between(0, size);
        response.splice(indexRand, 0, _answer);
        //retornamos el listado completo
        return response;
    }
    GenerateListRandom(size, lista, trueAnswer) {
        let response = new Array();
        for (var i = 0; i < size; i++) {
            const ind = this.Between(0, lista.length - 1);
            let answer = new _models_entities_answer__WEBPACK_IMPORTED_MODULE_1__.Answer();
            if (lista[ind].Answer !== trueAnswer) {
                if (response.length > 0) {
                    let a = response.find(x => x.Answer == lista[ind].Answer);
                    if (!a) {
                        answer.Answer = lista[ind].Answer;
                        answer.GroupName = null;
                        response.push(answer);
                        var index = lista.findIndex(x => x.Answer == lista[ind].Answer);
                        if (index > 1)
                            lista.splice(index, 1);
                    }
                    else {
                        i--;
                    }
                }
                else {
                    answer.Answer = lista[ind].Answer;
                    answer.GroupName = null;
                    response.push(answer);
                    var index = lista.findIndex(x => x.Answer == lista[ind].Answer);
                    if (index > 1)
                        lista.splice(index, 1);
                }
            }
            else
                i--;
        }
        //agregamos la Answer verdadera como parte del listado de Answers falsas
        let _answer = new _models_entities_answer__WEBPACK_IMPORTED_MODULE_1__.Answer();
        _answer.Answer = trueAnswer;
        _answer.GroupName = null;
        const indexRand = this.Between(0, size);
        response.splice(indexRand, 0, _answer);
        //retornamos el listado completo
        return response;
    }
    GenerateEmailRandom(size, trueAnswer) {
        let response = new Array();
        let email = trueAnswer.split('@');
        if (email.length > 0) {
            for (var i = 0; i < size; i++) {
                let emailAux;
                let answer = new _models_entities_answer__WEBPACK_IMPORTED_MODULE_1__.Answer();
                if ((i % 2) == 0) {
                    if (i == 0)
                        emailAux = email[0] + (1 * 2).toString();
                    else
                        emailAux = email[0] + (i * 2).toString();
                }
                else {
                    if (i == 0)
                        emailAux = email[0] + "0" + (1 * 2).toString();
                    else
                        emailAux = email[0] + "0" + (i * 2).toString();
                }
                answer.Answer = emailAux + "@" + email[1];
                response.push(answer);
            }
        }
        //agregamos la Answer verdadera como parte del listado de Answers falsas
        let _answer = new _models_entities_answer__WEBPACK_IMPORTED_MODULE_1__.Answer();
        _answer.Answer = trueAnswer;
        _answer.GroupName = null;
        const indexRand = this.Between(0, size);
        response.splice(indexRand, 0, _answer);
        //retornamos el listado completo
        return response;
    }
    GeneratePhoneRandom(size, trueAnswer) {
        let response = new Array();
        let phoneNumber = Number(trueAnswer);
        const firstCharacter = trueAnswer.charAt(0);
        for (var i = 0; i < size; i++) {
            let number;
            let answer = new _models_entities_answer__WEBPACK_IMPORTED_MODULE_1__.Answer();
            if ((i % 2) == 0) {
                if (i == 0)
                    number = phoneNumber + (1 * 2);
                else
                    number = phoneNumber + (i * 2);
            }
            else {
                if (i == 0)
                    number = phoneNumber - (1 * 2);
                else
                    number = phoneNumber - (i * 2);
            }
            answer.Answer = number.toString();
            if (firstCharacter === "0")
                answer.Answer = firstCharacter + answer.Answer;
            response.push(answer);
        }
        //agregamos la Answer verdadera como parte del listado de Answers falsas
        let _answer = new _models_entities_answer__WEBPACK_IMPORTED_MODULE_1__.Answer();
        _answer.Answer = trueAnswer;
        _answer.GroupName = null;
        const indexRand = this.Between(0, size);
        response.splice(indexRand, 0, _answer);
        //retornamos el listado completo
        return response;
    }
    Between(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //convierte de 30/01/2020 a "2020-01-30"
    ConverterDateToFormat(stringFecha) {
        let dia = stringFecha.substr(0, 2);
        let mes = stringFecha.substr(3, 2);
        let año = stringFecha.substr(6, 4);
        const date = año + "-" + mes + "-" + dia;
        return date;
    }
    ConverterStringToDate(stringFecha) {
        stringFecha = this.ConverterDateToFormat(stringFecha);
        let date = new Date(stringFecha);
        date.setDate(date.getDate() + 1);
        return date;
    }
    ConverterDateToString(date) {
        let response = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        return response;
    }
    returnNameList(country) {
        if (country === 'co') {
            return this.ReturnEmiNameList();
        }
        else {
            return this.ReturnUcmNameList();
        }
    }
    returnAdressList(country) {
        if (country === 'co') {
            return this.ReturnEmiAddressList();
        }
        else {
            return this.ReturnUcmAddressList();
        }
    }
    ReturnEmiNameList() {
        const list = new AnswerEmiNamesList();
        return list.answerNameList;
    }
    ReturnUcmNameList() {
        const list = new AnswerUcmNamesList();
        return list.answerNameList;
    }
    ReturnEmiAddressList() {
        const list = new AnswerEmiAddressList();
        return list.answerAddressList;
    }
    ReturnUcmAddressList() {
        const list = new AnswerUcmAddressList();
        return list.answerAddressList;
    }
};
FakeAnswerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FakeAnswerService);

class EmiNamesList {
    constructor() {
        this.nameList =
            [
                "Juana Chafrat",
                "Romina Sosa",
                "Esteban Sosa",
                "Pablo Ramirez",
                "Carlos Ramirez",
                "Guistavo Ramirez",
                "Martin Sosa",
                "Jorge Chafrat",
                "Isabel Chafrat",
                "Aruel Sosa"
            ];
    }
}
class AnswerEmiNamesList {
    constructor() {
        this.nameList = new EmiNamesList();
        this.answerNameList = new Array();
        this.nameList.nameList.forEach(element => {
            element = element.toUpperCase();
            this.answerNameList.push({
                Answer: element,
                GroupName: null,
                IsSelected: false
            });
        });
    }
}
class UcmNamesList {
    constructor() {
        this.nameList =
            [
                "Juana Chafrat",
                "Romina Sosa",
                "Esteban Sosa",
                "Pablo Ramirez",
                "Carlos Ramirez",
                "Guistavo Ramirez",
                "Martin Sosa",
                "Jorge Chafrat",
                "Isabel Chafrat",
                "Aruel Sosa"
            ];
    }
}
class AnswerUcmNamesList {
    constructor() {
        this.nameList = new UcmNamesList();
        this.answerNameList = new Array();
        this.nameList.nameList.forEach(element => {
            element = element.toUpperCase();
            this.answerNameList.push({
                Answer: element,
                GroupName: null,
                IsSelected: false
            });
        });
    }
}
class EmiAddressList {
    constructor() {
        this.addressList = [
            "Calle 27 d sur # 27 c 51",
            "Diagonal 40 # 41 61",
            "KR 23 # 35 - 48",
            "CALLE 35 # 33-09",
            "Carrera 53 # 70 - 86",
            "AC 13 # 21 - 91",
            "avenida carrera 19 # 127 d -55",
            "Avenida el dorado # 68D - 35",
            "TRANSVERSAL 78 I BIS # 41 A 16 SUR",
            "AV 6 A # 20 NORTE - 20",
        ];
    }
}
class AnswerEmiAddressList {
    constructor() {
        this.addressList = new EmiAddressList();
        this.answerAddressList = new Array();
        this.addressList.addressList.forEach(element => {
            element = element.toUpperCase();
            this.answerAddressList.push({
                Answer: element,
                GroupName: null,
                IsSelected: false
            });
        });
    }
}
class UcmAddressList {
    constructor() {
        this.addressList = [
            "Calle Libertad 2738, Montevideo",
            "11600 Montevideo",
            "Avda. Tomás Giribaldi 2290 Montevideo 11300",
            "c/ Justino Muniz 772",
            "c/ Santísima Trinidad, 59",
            "Avda. 18 de Julio, 708",
            "c/ Dr. Fosalba, 524.",
            "c/ Leandro Gómez 1192",
            "c/ Treinta y Tres 1317",
            "c/ Francisco Araúcho 1186",
        ];
    }
}
class AnswerUcmAddressList {
    constructor() {
        this.addressList = new UcmAddressList();
        this.answerAddressList = new Array();
        this.addressList.addressList.forEach(element => {
            element = element.toUpperCase();
            this.answerAddressList.push({
                Answer: element,
                GroupName: null,
                IsSelected: false
            });
        });
    }
}


/***/ }),

/***/ 83147:
/*!**************************************************!*\
  !*** ./src/app/public/services/login.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    getLogin(email, password) {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('UserName', email);
        urlSearchParams.append('Password', password);
        urlSearchParams.append('grant_type', 'password');
        let body = urlSearchParams.toString();
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Login/Login`, body);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 87842:
/*!****************************************************************!*\
  !*** ./src/app/public/services/new-forgot-password.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewForgotPasswordService": () => (/* binding */ NewForgotPasswordService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let NewForgotPasswordService = class NewForgotPasswordService {
    constructor(http) {
        this.http = http;
    }
    sendCodeForgotPassword(forgotPassword) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Login/NewForgotPassword`, forgotPassword);
    }
    verifyCode(codeUser) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Login/VerifyCodeForgortPassword`, codeUser);
    }
    setPassword(password) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Login/SetPassword`, password);
    }
    activationMail(user, profile) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Profile': profile
        });
        let params = {
            User: user
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Registration/SendActivationEmail`, params, { headers: this.headers });
    }
};
NewForgotPasswordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NewForgotPasswordService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NewForgotPasswordService);



/***/ }),

/***/ 85972:
/*!*****************************************************!*\
  !*** ./src/app/public/services/register.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
    }
    preRegister(preRegisterRequest) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Registration/PreRegister`, preRegisterRequest);
    }
    getAccountVerification(dataLifeAccountVerificationRequest) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Affiliate/GetDataLifeAccountVerification`, dataLifeAccountVerificationRequest);
    }
    saveUser(user) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Registration/Register`, user);
    }
    cancelRegister(user) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Registration/CancelPreRegister`, user);
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RegisterService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RegisterService);



/***/ }),

/***/ 19643:
/*!**************************************************************!*\
  !*** ./src/app/public/services/security-question.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityQuestionService": () => (/* binding */ SecurityQuestionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let SecurityQuestionService = class SecurityQuestionService {
    constructor(http) {
        this.http = http;
    }
    getSecurityQuestion(requesSecurityQuestion) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Affiliate/GetSecurityQuestions`, requesSecurityQuestion);
    }
};
SecurityQuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SecurityQuestionService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SecurityQuestionService);



/***/ }),

/***/ 38168:
/*!***********************************************************!*\
  !*** ./src/app/public/services/useful-phones.services.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsefulPhonesServices": () => (/* binding */ UsefulPhonesServices)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let UsefulPhonesServices = class UsefulPhonesServices {
    constructor(http) {
        this.http = http;
    }
    getPhones(usePhonesRequest) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}DataLists/GetUsefulPhones`, usePhonesRequest);
    }
};
UsefulPhonesServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UsefulPhonesServices = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UsefulPhonesServices);



/***/ }),

/***/ 83891:
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-code-input/__ivy_ngcc__/fesm2015/angular-code-input.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeInputComponent": () => (/* binding */ CodeInputComponent),
/* harmony export */   "CodeInputModule": () => (/* binding */ CodeInputModule),
/* harmony export */   "ɵa": () => (/* binding */ CodeInputComponentConfigToken)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);





const _c0 = ["input"];

function CodeInputComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "input", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeInputComponent_span_0_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onClick($event));
    })("paste", function CodeInputComponent_span_0_Template_input_paste_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const i_r2 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onPaste($event, i_r2));
    })("input", function CodeInputComponent_span_0_Template_input_input_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const i_r2 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onInput($event, i_r2));
    })("keydown", function CodeInputComponent_span_0_Template_input_keydown_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const i_r2 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onKeydown($event, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("code-hidden", ctx_r0.isCodeHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.inputType)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocapitalize", ctx_r0.autocapitalize);
  }
}

const CodeInputComponentConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CodeInputComponentConfig');
const defaultComponentConfig = {
  codeLength: 4,
  inputType: 'tel',
  initialFocusField: undefined,
  isCharsCode: false,
  isCodeHidden: false,
  isPrevFocusableAfterClearing: true,
  isFocusingOnLastByClickIfFilled: false,
  code: undefined,
  disabled: false,
  autocapitalize: undefined
};
var InputState;

(function (InputState) {
  InputState[InputState["ready"] = 0] = "ready";
  InputState[InputState["reset"] = 1] = "reset";
})(InputState || (InputState = {}));

class CodeInputComponent {
  constructor(config) {
    /** @deprecated Use isCharsCode prop instead. */
    this.isNonDigitsCode = false;
    this.codeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.codeCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.placeholders = [];
    this.inputs = [];
    this.inputsStates = [];
    this.state = {
      isFocusingAfterAppearingCompleted: false,
      isInitialFocusFieldEnabled: false
    };
    Object.assign(this, defaultComponentConfig);

    if (!config) {
      return;
    } // filtering for only valid config props


    for (const prop in config) {
      if (!config.hasOwnProperty(prop)) {
        continue;
      }

      if (!defaultComponentConfig.hasOwnProperty(prop)) {
        continue;
      } // @ts-ignore


      this[prop] = config[prop];
    }
  }
  /**
   * Life cycle
   */


  ngOnInit() {
    // defining the state
    this.state.isInitialFocusFieldEnabled = !this.isEmpty(this.initialFocusField); // initiating the code

    this.onCodeLengthChanges();
  }

  ngAfterViewInit() {
    // initiation of the inputs
    this.inputsListSubscription = this.inputsList.changes.subscribe(this.onInputsListChanges.bind(this));
    this.onInputsListChanges(this.inputsList);
  }

  ngAfterViewChecked() {
    this.focusOnInputAfterAppearing();
  }

  ngOnChanges(changes) {
    if (changes.code) {
      this.onInputCodeChanges();
    }

    if (changes.codeLength) {
      this.onCodeLengthChanges();
    }
  }

  ngOnDestroy() {
    if (this.inputsListSubscription) {
      this.inputsListSubscription.unsubscribe();
    }
  }
  /**
   * Methods
   */


  reset(isChangesEmitting = false) {
    // resetting the code to its initial value or to an empty value
    this.onInputCodeChanges();

    if (this.state.isInitialFocusFieldEnabled) {
      // tslint:disable-next-line:no-non-null-assertion
      this.focusOnField(this.initialFocusField);
    }

    if (isChangesEmitting) {
      this.emitChanges();
    }
  }

  focusOnField(index) {
    if (index >= this._codeLength) {
      throw new Error('The index of the focusing input box should be less than the codeLength.');
    }

    this.inputs[index].focus();
  }

  onClick(e) {
    // handle click events only if the the prop is enabled
    if (!this.isFocusingOnLastByClickIfFilled) {
      return;
    }

    const target = e.target;
    const last = this.inputs[this._codeLength - 1]; // already focused

    if (target === last) {
      return;
    } // check filling


    const isFilled = this.getCurrentFilledCode().length >= this._codeLength;

    if (!isFilled) {
      return;
    } // focusing on the last input if is filled


    setTimeout(() => last.focus());
  }

  onInput(e, i) {
    const target = e.target;
    const value = e.data || target.value;

    if (this.isEmpty(value)) {
      return;
    } // only digits are allowed if isCharsCode flag is absent/false


    if (!this.canInputValue(value)) {
      e.preventDefault();
      e.stopPropagation();
      this.setInputValue(target, null);
      this.setStateForInput(target, InputState.reset);
      return;
    }

    const values = value.toString().trim().split('');

    for (let j = 0; j < values.length; j++) {
      const index = j + i;

      if (index > this._codeLength - 1) {
        break;
      }

      this.setInputValue(this.inputs[index], values[j]);
    }

    this.emitChanges();
    const next = i + values.length;

    if (next > this._codeLength - 1) {
      target.blur();
      return;
    }

    this.inputs[next].focus();
  }

  onPaste(e, i) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.clipboardData ? e.clipboardData.getData('text').trim() : undefined;

    if (this.isEmpty(data)) {
      return;
    } // Convert paste text into iterable
    // tslint:disable-next-line:no-non-null-assertion


    const values = data.split('');
    let valIndex = 0;

    for (let j = i; j < this.inputs.length; j++) {
      // The values end is reached. Loop exit
      if (valIndex === values.length) {
        break;
      }

      const input = this.inputs[j];
      const val = values[valIndex]; // Cancel the loop when a value cannot be used

      if (!this.canInputValue(val)) {
        this.setInputValue(input, null);
        this.setStateForInput(input, InputState.reset);
        return;
      }

      this.setInputValue(input, val.toString());
      valIndex++;
    }

    this.inputs[i].blur();
    this.emitChanges();
  }

  onKeydown(e, i) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
      const target = e.target;
      const isTargetEmpty = this.isEmpty(target.value);
      const prev = i - 1; // processing only the backspace and delete key events

      const isBackspaceKey = yield this.isBackspaceKey(e);
      const isDeleteKey = this.isDeleteKey(e);

      if (!isBackspaceKey && !isDeleteKey) {
        return;
      }

      e.preventDefault();
      this.setInputValue(target, null);

      if (!isTargetEmpty) {
        this.emitChanges();
      } // preventing to focusing on the previous field if it does not exist or the delete key has been pressed


      if (prev < 0 || isDeleteKey) {
        return;
      }

      if (isTargetEmpty || this.isPrevFocusableAfterClearing) {
        this.inputs[prev].focus();
      }
    });
  }

  onInputCodeChanges() {
    if (!this.inputs.length) {
      return;
    }

    if (this.isEmpty(this.code)) {
      this.inputs.forEach(input => {
        this.setInputValue(input, null);
      });
      return;
    } // tslint:disable-next-line:no-non-null-assertion


    const chars = this.code.toString().trim().split(''); // checking if all the values are correct

    let isAllCharsAreAllowed = true;

    for (const char of chars) {
      if (!this.canInputValue(char)) {
        isAllCharsAreAllowed = false;
        break;
      }
    }

    this.inputs.forEach((input, index) => {
      const value = isAllCharsAreAllowed ? chars[index] : null;
      this.setInputValue(input, value);
    });
  }

  onCodeLengthChanges() {
    if (!this.codeLength) {
      return;
    }

    this._codeLength = this.codeLength;

    if (this._codeLength > this.placeholders.length) {
      const numbers = Array(this._codeLength - this.placeholders.length).fill(1);
      this.placeholders.splice(this.placeholders.length - 1, 0, ...numbers);
    } else if (this._codeLength < this.placeholders.length) {
      this.placeholders.splice(this._codeLength);
    }
  }

  onInputsListChanges(list) {
    if (list.length > this.inputs.length) {
      const inputsToAdd = list.filter((item, index) => index > this.inputs.length - 1);
      this.inputs.splice(this.inputs.length, 0, ...inputsToAdd.map(item => item.nativeElement));
      const states = Array(inputsToAdd.length).fill(InputState.ready);
      this.inputsStates.splice(this.inputsStates.length, 0, ...states);
    } else if (list.length < this.inputs.length) {
      this.inputs.splice(list.length);
      this.inputsStates.splice(list.length);
    } // filling the inputs after changing of their count


    this.onInputCodeChanges();
  }

  focusOnInputAfterAppearing() {
    if (!this.state.isInitialFocusFieldEnabled) {
      return;
    }

    if (this.state.isFocusingAfterAppearingCompleted) {
      return;
    } // tslint:disable-next-line:no-non-null-assertion


    this.focusOnField(this.initialFocusField); // tslint:disable-next-line:no-non-null-assertion

    this.state.isFocusingAfterAppearingCompleted = document.activeElement === this.inputs[this.initialFocusField];
  }

  emitChanges() {
    setTimeout(() => this.emitCode(), 50);
  }

  emitCode() {
    const code = this.getCurrentFilledCode();
    this.codeChanged.emit(code);

    if (code.length >= this._codeLength) {
      this.codeCompleted.emit(code);
    }
  }

  getCurrentFilledCode() {
    let code = '';

    for (const input of this.inputs) {
      if (!this.isEmpty(input.value)) {
        code += input.value;
      }
    }

    return code;
  }

  isBackspaceKey(e) {
    const isBackspace = e.key && e.key.toLowerCase() === 'backspace' || e.keyCode && e.keyCode === 8;

    if (isBackspace) {
      return Promise.resolve(true);
    } // process only key with placeholder keycode on android devices


    if (!e.keyCode || e.keyCode !== 229) {
      return Promise.resolve(false);
    }

    return new Promise(resolve => {
      setTimeout(() => {
        const input = e.target;
        const isReset = this.getStateForInput(input) === InputState.reset;

        if (isReset) {
          this.setStateForInput(input, InputState.ready);
        } // if backspace key pressed the caret will have position 0 (for single value field)


        resolve(input.selectionStart === 0 && !isReset);
      });
    });
  }

  isDeleteKey(e) {
    return e.key && e.key.toLowerCase() === 'delete' || e.keyCode && e.keyCode === 46;
  }

  setInputValue(input, value) {
    const isEmpty = this.isEmpty(value);
    const valueClassCSS = 'has-value';
    const emptyClassCSS = 'empty';

    if (isEmpty) {
      input.value = '';
      input.classList.remove(valueClassCSS); // tslint:disable-next-line:no-non-null-assertion

      input.parentElement.classList.add(emptyClassCSS);
    } else {
      input.value = value;
      input.classList.add(valueClassCSS); // tslint:disable-next-line:no-non-null-assertion

      input.parentElement.classList.remove(emptyClassCSS);
    }
  }

  canInputValue(value) {
    if (this.isEmpty(value)) {
      return false;
    }

    const isDigitsValue = /^[0-9]+$/.test(value.toString());
    return isDigitsValue || this.isCharsCode || this.isNonDigitsCode;
  }

  setStateForInput(input, state) {
    const index = this.inputs.indexOf(input);

    if (index < 0) {
      return;
    }

    this.inputsStates[index] = state;
  }

  getStateForInput(input) {
    const index = this.inputs.indexOf(input);
    return this.inputsStates[index];
  }

  isEmpty(value) {
    return value === null || value === undefined || !value.toString().length;
  }

}

CodeInputComponent.ɵfac = function CodeInputComponent_Factory(t) {
  return new (t || CodeInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CodeInputComponentConfigToken, 8));
};

CodeInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CodeInputComponent,
  selectors: [["code-input"]],
  viewQuery: function CodeInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputsList = _t);
    }
  },
  inputs: {
    isNonDigitsCode: "isNonDigitsCode",
    codeLength: "codeLength",
    inputType: "inputType",
    initialFocusField: "initialFocusField",
    isCharsCode: "isCharsCode",
    isCodeHidden: "isCodeHidden",
    isPrevFocusableAfterClearing: "isPrevFocusableAfterClearing",
    isFocusingOnLastByClickIfFilled: "isFocusingOnLastByClickIfFilled",
    code: "code",
    disabled: "disabled",
    autocapitalize: "autocapitalize"
  },
  outputs: {
    codeChanged: "codeChanged",
    codeCompleted: "codeCompleted"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "code-hidden", 4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "type", "disabled", "click", "paste", "input", "keydown"], ["input", ""]],
  template: function CodeInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CodeInputComponent_span_0_Template, 3, 5, "span", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.placeholders);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
  styles: ["[_nghost-%COMP%]{--text-security-type:disc;--item-spacing:4px;--item-height:4.375em;--item-border:1px solid #ddd;--item-border-bottom:1px solid #ddd;--item-border-has-value:1px solid #ddd;--item-border-bottom-has-value:1px solid #ddd;--item-border-focused:1px solid #ddd;--item-border-bottom-focused:1px solid #ddd;--item-shadow-focused:0px 1px 5px #ddd;--item-border-radius:5px;--item-background:transparent;--color:#171516;display:flex;transform:translateZ(0);font-size:inherit;color:var(--color)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{display:block;flex:1;padding-right:var(--item-spacing)}[_nghost-%COMP%]   span[_ngcontent-%COMP%]:first-child{padding-left:var(--item-spacing)}[_nghost-%COMP%]   span.code-hidden[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-security:var(--text-security-type);-webkit-text-security:var(--text-security-type);-moz-text-security:var(--text-security-type)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:var(--item-height);color:inherit;background:var(--item-background);text-align:center;font-size:inherit;border:var(--item-border);border-bottom:var(--item-border-bottom);border-radius:var(--item-border-radius);-webkit-appearance:none;transform:translateZ(0);-webkit-transform:translateZ(0);outline:none}[_nghost-%COMP%]   input.has-value[_ngcontent-%COMP%]{border:var(--item-border-has-value);border-bottom:var(--item-border-bottom-has-value)}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus{border:var(--item-border-focused);border-bottom:var(--item-border-bottom-focused);box-shadow:var(--item-shadow-focused)}"]
});
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */

CodeInputComponent.ctorParameters = () => [{
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [CodeInputComponentConfigToken]
  }]
}];
/** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */


CodeInputComponent.propDecorators = {
  inputsList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
    args: ['input']
  }],
  codeLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  inputType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  initialFocusField: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  isNonDigitsCode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  isCharsCode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  isCodeHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  isPrevFocusableAfterClearing: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  isFocusingOnLastByClickIfFilled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  code: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  autocapitalize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  codeChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  codeCompleted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'code-input',
      template: "<span *ngFor=\"let holder of placeholders; index as i\"\n      [class.code-hidden]=\"isCodeHidden\">\n  <input #input\n         (click)=\"onClick($event)\"\n         (paste)=\"onPaste($event, i)\"\n         (input)=\"onInput($event, i)\"\n         (keydown)=\"onKeydown($event, i)\"\n         [type]=\"inputType\"\n         [disabled]=\"disabled\"\n         [attr.autocapitalize]=\"autocapitalize\"\n         autocomplete=\"one-time-code\"/>\n</span>\n",
      styles: [":host{--text-security-type:disc;--item-spacing:4px;--item-height:4.375em;--item-border:1px solid #ddd;--item-border-bottom:1px solid #ddd;--item-border-has-value:1px solid #ddd;--item-border-bottom-has-value:1px solid #ddd;--item-border-focused:1px solid #ddd;--item-border-bottom-focused:1px solid #ddd;--item-shadow-focused:0px 1px 5px #ddd;--item-border-radius:5px;--item-background:transparent;--color:#171516;display:flex;transform:translateZ(0);font-size:inherit;color:var(--color)}:host span{display:block;flex:1;padding-right:var(--item-spacing)}:host span:first-child{padding-left:var(--item-spacing)}:host span.code-hidden input{text-security:var(--text-security-type);-webkit-text-security:var(--text-security-type);-moz-text-security:var(--text-security-type)}:host input{width:100%;height:var(--item-height);color:inherit;background:var(--item-background);text-align:center;font-size:inherit;border:var(--item-border);border-bottom:var(--item-border-bottom);border-radius:var(--item-border-radius);-webkit-appearance:none;transform:translateZ(0);-webkit-transform:translateZ(0);outline:none}:host input.has-value{border:var(--item-border-has-value);border-bottom:var(--item-border-bottom-has-value)}:host input:focus{border:var(--item-border-focused);border-bottom:var(--item-border-bottom-focused);box-shadow:var(--item-shadow-focused)}"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [CodeInputComponentConfigToken]
      }]
    }];
  }, {
    isNonDigitsCode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    codeChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    codeCompleted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    inputsList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: ['input']
    }],
    codeLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    initialFocusField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isCharsCode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isCodeHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isPrevFocusableAfterClearing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isFocusingOnLastByClickIfFilled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    code: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autocapitalize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class CodeInputModule {
  static forRoot(config) {
    return {
      ngModule: CodeInputModule,
      providers: [{
        provide: CodeInputComponentConfigToken,
        useValue: config
      }]
    };
  }

}

CodeInputModule.ɵfac = function CodeInputModule_Factory(t) {
  return new (t || CodeInputModule)();
};

CodeInputModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CodeInputModule
});
CodeInputModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [CodeInputComponent],
      exports: [CodeInputComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CodeInputModule, {
    declarations: function () {
      return [CodeInputComponent];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
    },
    exports: function () {
      return [CodeInputComponent];
    }
  });
})();
/*
 * Public API Surface of code-input
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 86499:
/*!*****************************************************************************************************!*\
  !*** ./src/app/public/components/onboarding-carousel/onboarding-carousel.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  width: 95%;\n  height: 85%;\n}\nion-slides {\n  height: 95%;\n}\nion-icon {\n  color: #FF1E2D;\n}\n.img-arrow {\n  color: #FF1E2D;\n}\n.ion-image {\n  height: 300px;\n  margin-bottom: 40px;\n  color: #FF1E2D;\n}\n.ion-icon-img {\n  margin-right: 15px;\n}\n.ion-title {\n  color: #FF1E2D;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 28px;\n  display: flex;\n  align-items: flex-start;\n  text-align: flex-start;\n}\n.ion-img-container {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.ion-description {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 150%;\n  color: #4c4c4b;\n}\n.swiper-slide {\n  align-items: start;\n}\n.ion-last-next {\n  color: #66182A;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  text-decoration-line: underline;\n}\n.ion-last-next-dir {\n  color: #66182A;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  text-decoration-line: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmctY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQWlDSjtBQTlCQTtFQUNJLFdBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQ1RZO0FEMENoQjtBQTlCQTtFQUNJLGNDYlk7QUQ4Q2hCO0FBOUJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0NuQlk7QURvRGhCO0FBOUJBO0VBQ0ksa0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQzNCWTtFRDRCWixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQzNDYTtBRDRFakI7QUE5QkE7RUFDSSxrQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGNDdkRjO0VEd0RkLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQy9EYztFRGdFZCxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBaUNKIiwiZmlsZSI6Im9uYm9hcmRpbmctY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzcyc7XG5pb24tY29udGVudCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDg1JTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA5NSU7XG59XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5pbWctYXJyb3cge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLmlvbi1pbWFnZSB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLmlvbi1pY29uLWltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtYWxpZ246IGZsZXgtc3RhcnQ7XG59XG5cbi5pb24taW1nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5pb24tZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICBjb2xvcjogJHByaW5jaXBhbC1ncmF5O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5pb24tbGFzdC1uZXh0IHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbn1cblxuLmlvbi1sYXN0LW5leHQtZGlyIHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 68522:
/*!*************************************************************************************************!*\
  !*** ./src/app/public/components/onboarding-header/onboarding-header.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  height: 15%;\n}\nimg {\n  height: 50px;\n  color: #FF1E2D;\n}\n.ion-omitir {\n  text-decoration-line: underline;\n  font-size: 16px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\n.logo-chico {\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmctaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksV0FBQTtBQWlDSjtBQTlCQTtFQUNJLFlBQUE7RUFDQSxjQ0xZO0FEc0NoQjtBQTlCQTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NaWTtBRDZDaEI7QUE5QkE7RUFDSSxZQUFBO0FBaUNKIiwiZmlsZSI6Im9uYm9hcmRpbmctaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbmlvbi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDE1JTtcbn1cblxuaW1nIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufVxuXG4uaW9uLW9taXRpciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufVxuXG4ubG9nby1jaGljbyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 81978:
/*!************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/account-create.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-label {\n  pointer-events: all !important;\n}\nion-row {\n  margin-bottom: 1px !important;\n}\n.label-terms {\n  color: #696F79;\n  line-height: 20px;\n}\n.link {\n  color: #ff1e2d;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtY3JlYXRlLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSjtBQTlCQTtFQUNJLDhCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksNkJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQ2JTO0VEY1QsaUJBQUE7QUFpQ0oiLCJmaWxlIjoiYWNjb3VudC1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuaW9uLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBPVCcsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xufVxuXG5pb24tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXRlcm1zIHtcbiAgICBjb2xvcjogIzY5NkY3OTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmxpbmsge1xuICAgIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 71239:
/*!***************************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/account-verification/account-verification.page.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.back-label {\n  color: #66182A;\n  font-size: 16px;\n  line-height: 18, 75px;\n  font-weight: 500;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLGNDQ2M7RURBZCxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFpQ0oiLCJmaWxlIjoiYWNjb3VudC12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuLmJhY2stbGFiZWwge1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTgsIDc1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 17292:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/account-verification/components/security-question/security-question.page.scss?ngResource ***!
  \*****************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.form-check-label {\n  font-size: 16px;\n  color: #4c4c4b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyaXR5LXF1ZXN0aW9uLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSxjQ0lhO0FENkJqQiIsImZpbGUiOiJzZWN1cml0eS1xdWVzdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzcyc7XG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAkcHJpbmNpcGFsLWdyYXk7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 57956:
/*!*************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/data-complete/data-complete.page.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 20px;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-row {\n  margin-bottom: 1px !important;\n}\nion-label {\n  pointer-events: all !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtY29tcGxldGUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFpQ0o7QUE5QkE7RUFDSSw2QkFBQTtBQWlDSjtBQTlCQTtFQUNJLDhCQUFBO0FBaUNKIiwiZmlsZSI6ImRhdGEtY29tcGxldGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 70251:
/*!*********************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/register-password/register-password.page.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 20px;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-row {\n  margin-bottom: 1px !important;\n}\nion-label {\n  pointer-events: all !important;\n}\nion-icon {\n  color: #FF1E2D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0ksNkJBQUE7QUFpQ0o7QUE5QkE7RUFDSSw4QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGNDbkJZO0FEb0RoQiIsImZpbGUiOiJyZWdpc3Rlci1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzcyc7XG46cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDFweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 51550:
/*!**********************************************************************************!*\
  !*** ./src/app/public/sections/login/ini-sesion/ini-sesion.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.ion-omitir {\n  text-decoration-line: underline;\n  font-size: 16px;\n  font-weight: bold;\n  color: #4c4c4b;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-row {\n  margin-bottom: 15px !important;\n}\na {\n  color: #FF1E2D;\n  font-weight: bold;\n}\n.logo-chico {\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaS1zZXNpb24ucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ0VhO0FEK0JqQjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFpQ0o7QUE5QkE7RUFDSSw4QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGNDakJZO0VEa0JaLGlCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksWUFBQTtBQWlDSiIsImZpbGUiOiJpbmktc2VzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzcyc7XG4uaW9uLW9taXRpciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICRwcmluY2lwYWwtZ3JheVxufVxuXG5pb24tY29udGVudCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuYSB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nby1jaGljbyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 34450:
/*!****************************************************************************!*\
  !*** ./src/app/public/sections/onboarding/onboarding.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQUNKIiwiZmlsZSI6Im9uYm9hcmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn0iXX0= */";

/***/ }),

/***/ 92225:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/public/sections/password/recover-password-mail-phone/recover-password-mail-phone.page.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-row {\n  margin-bottom: 15px !important;\n}\na {\n  color: #FF1E2D;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY292ZXItcGFzc3dvcmQtbWFpbC1waG9uZS5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0ksOEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQ1ZZO0VEV1osaUJBQUE7QUFpQ0oiLCJmaWxlIjoicmVjb3Zlci1wYXNzd29yZC1tYWlsLXBob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzcyc7XG5pb24tY29udGVudCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuYSB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 60453:
/*!***********************************************************************************************************!*\
  !*** ./src/app/public/sections/password/recover-password-mail/recover-password-mail.page.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-row {\n  margin-bottom: 15px !important;\n}\na {\n  color: #FF1E2D;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY292ZXItcGFzc3dvcmQtbWFpbC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0ksOEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQ1ZZO0VEV1osaUJBQUE7QUFpQ0oiLCJmaWxlIjoicmVjb3Zlci1wYXNzd29yZC1tYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzcyc7XG5pb24tY29udGVudCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuYSB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 34912:
/*!*************************************************************************************************************!*\
  !*** ./src/app/public/sections/password/recover-password-phone/recover-password-phone.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-row {\n  margin-bottom: 15px !important;\n}\na {\n  color: #FF1E2D;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY292ZXItcGFzc3dvcmQtcGhvbmUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSjtBQTlCQTtFQUNJLDhCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksY0NWWTtFRFdaLGlCQUFBO0FBaUNKIiwiZmlsZSI6InJlY292ZXItcGFzc3dvcmQtcGhvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbmlvbi1jb250ZW50IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxuaW9uLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 42242:
/*!*************************************************************************************************************!*\
  !*** ./src/app/public/sections/password/remember-password-code/remember-password-code.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n.subtitle-opacity {\n  line-height: 25px;\n}\nion-row {\n  margin-bottom: 15px !important;\n}\na {\n  color: #FF1E2D;\n  font-weight: bold;\n}\ncode-input {\n  --item-spacing: 10px;\n  --item-height: 3em;\n  --item-border: none;\n  --item-border-bottom: 2px solid #dddddd;\n  --item-border-has-value: none;\n  --item-border-bottom-has-value: 2px solid #006AB2;\n  --item-border-focused: none;\n  --item-border-bottom-focused: 2px solid #006AB2;\n  --item-shadow-focused: none;\n  --item-border-radius: 0px;\n}\n.input-number {\n  font-size: 25px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbWVtYmVyLXBhc3N3b3JkLWNvZGUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSjtBQTlCQTtFQUNJLGlCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksOEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQ2RZO0VEZVosaUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsaURBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQWlDSiIsImZpbGUiOiJyZW1lbWJlci1wYXNzd29yZC1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzcyc7XG5pb24tY29udGVudCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbi5zdWJ0aXRsZS1vcGFjaXR5IHtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuaW9uLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmNvZGUtaW5wdXQge1xuICAgIC0taXRlbS1zcGFjaW5nOiAxMHB4O1xuICAgIC0taXRlbS1oZWlnaHQ6IDNlbTtcbiAgICAtLWl0ZW0tYm9yZGVyOiBub25lO1xuICAgIC0taXRlbS1ib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZGRkZDtcbiAgICAtLWl0ZW0tYm9yZGVyLWhhcy12YWx1ZTogbm9uZTtcbiAgICAtLWl0ZW0tYm9yZGVyLWJvdHRvbS1oYXMtdmFsdWU6IDJweCBzb2xpZCAjMDA2QUIyO1xuICAgIC0taXRlbS1ib3JkZXItZm9jdXNlZDogbm9uZTtcbiAgICAtLWl0ZW0tYm9yZGVyLWJvdHRvbS1mb2N1c2VkOiAycHggc29saWQgIzAwNkFCMjtcbiAgICAtLWl0ZW0tc2hhZG93LWZvY3VzZWQ6IG5vbmU7XG4gICAgLS1pdGVtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmlucHV0LW51bWJlciB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 50598:
/*!***************************************************************************************************!*\
  !*** ./src/app/public/sections/password/remember-password/remember-password.page.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-row {\n  margin-bottom: 15px !important;\n}\na {\n  color: #FF1E2D;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbWVtYmVyLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFpQ0o7QUE5QkE7RUFDSSw4QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGNDVlk7RURXWixpQkFBQTtBQWlDSiIsImZpbGUiOiJyZW1lbWJlci1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 62314:
/*!******************************************************************!*\
  !*** ./src/app/public/sections/terms/terms.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".modal-body-scroll {\n  max-height: 320px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InRlcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5LXNjcm9sbCB7XG4gICAgbWF4LWhlaWdodDogMzIwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */";

/***/ }),

/***/ 8312:
/*!*************************************************************************************************!*\
  !*** ./src/app/public/sections/useful-phones/list-phones/list-phones.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.text-description {\n  /* body 2 */\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 23px;\n}\n.cambiar {\n  /* link */\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  text-decoration-line: underline;\n  color: #66182A;\n}\n.text-terminos {\n  display: inline;\n  margin: 0;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 19px;\n  cursor: pointer;\n  padding: 0;\n  vertical-align: text-bottom;\n}\n.number-tel {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 23px;\n  color: #FF1E2D;\n  text-decoration: none;\n}\n.number-tel:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcGhvbmVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0NiYztBRDhDbEI7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDbENZO0VEbUNaLHFCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksMEJBQUE7QUFpQ0oiLCJmaWxlIjoibGlzdC1waG9uZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzXCI7XG4udGV4dC1kZXNjcmlwdGlvbiB7XG4gICAgLyogYm9keSAyICovXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuXG4uY2FtYmlhciB7XG4gICAgLyogbGluayAqL1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbn1cblxuLnRleHQtdGVybWlub3Mge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuLm51bWJlci10ZWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm51bWJlci10ZWw6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 32013:
/*!*************************************************************************************************!*\
  !*** ./src/app/public/sections/useful-phones/option-city/option-city.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.text-city {\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 150%;\n}\n.cancel-button {\n  opacity: 0.4;\n  align-self: center;\n  margin-right: 26px;\n  font-size: 18px;\n}\n.text-cen {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.spacing-buttons {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.select-style {\n  border: none;\n  border-bottom: 1px solid #040404;\n  height: 51px;\n  background-color: #f5f5f5;\n  border-radius: 4px 4px 0px 0px;\n}\n.modal-rounded .modal-content {\n  height: 297px;\n  border-radius: 9px;\n  border: none !important;\n  margin: 0 27px;\n}\n.text-description {\n  /* body 2 */\n  font-family: Mark OT;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 23px;\n}\n.cambiar {\n  /* link */\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  text-decoration-line: underline;\n  color: #66182A;\n}\n.text-terminos {\n  display: inline;\n  margin: 0;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 19px;\n  cursor: pointer;\n  padding: 0;\n  vertical-align: text-bottom;\n}\n.number-tel {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 23px;\n  color: #FF1E2D;\n  text-decoration: none;\n}\n.number-tel:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi1jaXR5LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWlDSjtBQTlCQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FBaUNKO0FBN0JJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBZ0NSO0FBNUJBO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQStCSjtBQTVCQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQ3REYztBRHFGbEI7QUE1QkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBK0JKO0FBNUJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDM0VZO0VENEVaLHFCQUFBO0FBK0JKO0FBNUJBO0VBQ0ksMEJBQUE7QUErQkoiLCJmaWxlIjoib3B0aW9uLWNpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzXCI7XG4udGV4dC1jaXR5IHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbn1cblxuLmNhbmNlbC1idXR0b24ge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRleHQtY2VuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNwYWNpbmctYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc2VsZWN0LXN0eWxlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNDA0MDQ7XG4gICAgaGVpZ2h0OiA1MXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xufVxuXG4ubW9kYWwtcm91bmRlZCB7XG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDI5N3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgMjdweDtcbiAgICB9XG59XG5cbi50ZXh0LWRlc2NyaXB0aW9uIHtcbiAgICAvKiBib2R5IDIgKi9cbiAgICBmb250LWZhbWlseTogTWFyayBPVDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG5cbi5jYW1iaWFyIHtcbiAgICAvKiBsaW5rICovXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xufVxuXG4udGV4dC10ZXJtaW5vcyB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG4ubnVtYmVyLXRlbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubnVtYmVyLXRlbDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59IiwiLyogSU5JQ0lPIFBhcmEgbW9kaWZpY2FyIGxvcyBjb2xvcmVzIHByaW5jaXBhbGVzIGRlIGxhIGFwbGljYWNpw7NuICovXG5cbiRwcmltYXJ5LWNvbG9yOiAjRkYxRTJEO1xuJHNlY29uZGFyeS1jb2xvcjogIzY2MTgyQTtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ibHVlOiAjMTIxQTQ0O1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWdyZXk6ICM0MTU1NjU7XG4kdGVybmFyeS1jb2xvcjogI0ZGRTYwMDtcbiRwcmluY2lwYWwtZ3JheTogIzRjNGM0YjtcbiRsaW5lLWdyYXk6ICNlN2U3ZWY7XG4kbGluay1jb2xvcjogI2ZmMWUyZDtcbiRjb2xvci1tZW51OiAjZmZmZmZmO1xuJGNvbG9yLWljb24tbWVudTogIzAwOWNkZjtcbi5idXR0b24tcGVyc29uYWxpemFkbyB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb2xvci1idXR0b24tcHJpbWFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkYxRTJEICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1zZWNvbmRhcnkge1xuICAgIC0tYmFja2dyb3VuZDogIzY2MTgyQSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJ1dHRvbi10ZXJuYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICR0ZXJuYXJ5LWNvbG9yO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59Il19 */";

/***/ }),

/***/ 80856:
/*!**********************************************************************!*\
  !*** ./src/app/public/sections/welcome/welcome.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n.container-welcome {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.imgProperties {\n  width: 180px;\n}\n.welcome {\n  flex-direction: column;\n}\n.padding-header {\n  padding: 45px 0;\n}\n.title-container {\n  margin: 0;\n}\n.ion-register {\n  color: #66182A;\n  font-weight: bold;\n  font-size: medium;\n  line-height: 19px;\n  text-decoration-line: underline;\n}\n.title-welcome {\n  font-weight: bold;\n  font-size: x-large;\n  line-height: 35px;\n  color: #FF1E2D;\n}\n.ion-text-footer {\n  text-align: center;\n  font-size: small;\n  font-weight: normal;\n  color: gray;\n  font-style: italic;\n}\n.border-divider {\n  position: relative;\n}\n.border-divider:after {\n  content: \"\";\n  background: #E7E7EF;\n  position: absolute;\n  top: 0;\n  left: 20px;\n  text-align: center;\n  height: 1px;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxZQUFBO0FBaUNKO0FBOUJBO0VBQ0ksc0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0FBaUNKO0FBOUJBO0VBQ0ksU0FBQTtBQWlDSjtBQTlCQTtFQUNJLGNDckJjO0VEc0JkLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NqQ1k7QURrRWhCO0FBOUJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksa0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDSiIsImZpbGUiOiJ3ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbi5jb250YWluZXItd2VsY29tZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmltZ1Byb3BlcnRpZXMge1xuICAgIHdpZHRoOiAxODBweDtcbn1cblxuLndlbGNvbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wYWRkaW5nLWhlYWRlciB7XG4gICAgcGFkZGluZzogNDVweCAwO1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5pb24tcmVnaXN0ZXIge1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG5cbi50aXRsZS13ZWxjb21lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufVxuXG4uaW9uLXRleHQtZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmJvcmRlci1kaXZpZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ib3JkZXItZGl2aWRlcjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kOiAjRTdFN0VGO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDg1JTtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 88074:
/*!*****************************************************************************************************!*\
  !*** ./src/app/public/components/onboarding-carousel/onboarding-carousel.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" #slide>\n        <ion-slide *ngFor=\"let item of slides\">\n            <div class=\"container\">\n                <img class=\"ion-image\" src=\"{{item.image}}\">\n                <div class=\"ion-img-container\">\n                    <img class=\"icon-img\" src=\"{{item.icon}}\">\n                    <span class=\"ion-title\">{{item.title}}</span>\n                </div>\n                <span class=\"ion-description\">{{item.description}}</span>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col class=\"ion-align-items-center ion-flex\">\n                <div *ngIf=\"indexSlide!=0\">\n                    <ion-row>\n                        <ion-col>\n                            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n                        </ion-col>\n                        <ion-col>\n                            <span class=\"ion-last-next-dir\" (click)=\"moveSlide(-1)\">{{'PUBLIC.WELCOME.last' | translate}}</span>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </ion-col>\n            <ion-col class=\"ion-align-items-center ion-justify-content-end ion-flex\">\n                <ion-row>\n                    <ion-col>\n                        <span class=\"ion-last-next-dir\" (click)=\"moveSlide(1)\" *ngIf=\"indexSlide != slides.length -1\">{{'PUBLIC.WELCOME.next' | translate}}</span>\n                        <span class=\"ion-last-next-dir\" (click)=\"navigate()\" *ngIf=\"indexSlide == slides.length -1\">{{'PUBLIC.WELCOME.finish' | translate}}</span>\n                    </ion-col>\n                    <ion-col>\n                        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>";

/***/ }),

/***/ 85045:
/*!*************************************************************************************************!*\
  !*** ./src/app/public/components/onboarding-header/onboarding-header.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"6\">\n                <img class=\"logo-chico\" src=\"{{imgRoute}}LogoFalck.svg\">\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-end\">\n                <span class=\"ion-omitir\" (click)=\"navigate()\">{{'PUBLIC.WELCOME.omitir' | translate}}</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ }),

/***/ 90333:
/*!************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/account-create.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <ion-label class=\"title-primary\">{{'PUBLIC.REGISTRATION.accountCreateTitle' | translate}}</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <ion-label class=\"subtitle-opacity\">{{'PUBLIC.REGISTRATION.accountCreateSubtitle' | translate}}</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <form [formGroup]=\"createForm\">\n\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.type' | translate}}</ion-label>\n                    <ion-select position=\"floating\" formControlName=\"documentType\" (ionChange)=\"enabledInputDocument()\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of docType\">{{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.number' | translate}}</ion-label>\n                    <ion-input formControlName=\"document\" type=\"number\" (ionBlur)=\"validateDocument();\" [maxlength]=10></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.createForm.controls.document.hasError('required') && this.createForm.controls.document.touched\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                </ion-col>\n            </ion-col>\n\n        </ion-row>\n\n        <!-- <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.number' | translate}}</ion-label>\n                <ion-input formControlName=\"document\" type=\"number\" (ionBlur)=\"validateDocument();\" [maxlength]=10></ion-input>\n            </ion-item>\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.createForm.controls.document.hasError('required') && this.createForm.controls.document.touched\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n            </ion-col>\n        </ion-row> -->\n\n        <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.cellPhone' | translate}}</ion-label>\n                <ion-input formControlName=\"phone\" [maxlength]=\"environment.lengthCell\" type=\"number\"></ion-input>\n            </ion-item>\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.createForm.controls.phone.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                </span>\n                <span class=\"ion-validator\" *ngIf=\"!this.createForm.controls.phone.hasError('required') && this.createForm.controls.phone.hasError('invalidNumber')\">\n                    {{'PUBLIC.SHARED.startNumber' | translate}} {{environment.startNumberCell}}\n                </span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{'PUBLIC.SHARED.correo' | translate}}</ion-label>\n                <ion-input formControlName=\"email\" id=\"email\" type=\"email\"></ion-input>\n            </ion-item>\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.createForm.controls.email.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                <span class=\"ion-validator\" *ngIf=\"!this.createForm.controls.email.hasError('required') && this.createForm.controls.email.hasError('email')\">\n                    {{'PUBLIC.SHARED.validCorreo' | translate}}</span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{'PUBLIC.SHARED.repeatCorreo' | translate}}</ion-label>\n                <ion-input formControlName=\"emailRepeat\" id=\"emailRepeat\" type=\"email\"></ion-input>\n            </ion-item>\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.createForm.controls.emailRepeat.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                <span class=\"ion-validator\" *ngIf=\"!this.createForm.controls.emailRepeat.hasError('required') && this.createForm.controls.emailRepeat.hasError('email')\">\n                    {{'PUBLIC.SHARED.validCorreo' | translate}}</span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"1\">\n                <ion-checkbox formControlName=\"terms\" id=\"chkTermsPolicies\"> </ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n                <span class=\"label-terms\">Acepto los </span>\n                <a class=\"label-terms link cursor-pointer\" (click)=\"clickTerms('terms');\"> términos de uso </a>\n                <span class=\"label-terms\"> y </span>\n                <a class=\"label-terms link cursor-pointer\" (click)=\"clickTerms('policies');\">políticas de tratamiento de datos personales.</a>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n            <ion-col>\n                <app-button [configuration]=\"configurationButton\" (click)=\"complete()\" [disabled]=\"createForm.invalid\"></app-button>\n            </ion-col>\n        </ion-row>\n\n        <app-loader *ngIf=\"isLoading\"></app-loader>\n\n    </form>\n\n</ion-content>";

/***/ }),

/***/ 98194:
/*!***************************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/account-verification/account-verification.page.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n\n    <div *ngIf=\"securityQuestions\">\n\n        <ion-row>\n\n            <ion-item class=\"d-flex align-items-center\">\n                <ion-img src=\"{{imgRoute}}icon-atras.svg\" (click)=\"goToPreviousQuestion()\" [hidden]=\"currentElement == 0\"></ion-img>\n                <ion-label (click)=\"goToPreviousQuestion()\" [hidden]=\"currentElement == 0\">{{'PUBLIC.SHARED.back' | translate}}</ion-label>\n            </ion-item>\n\n            <ion-item>\n                <div *ngFor=\"let item of securityQuestions, let i= index; let last= last\">\n                    <app-step [index]=\"i + 1\" [isLast]=\"i + 1  == securityQuestions.length\" [hasFocus]=\"currentElement == i ? true : false\"></app-step>\n                </div>\n            </ion-item>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-label class=\"title-primary\">{{'PUBLIC.REGISTRATION.accountVerificationTitle' | translate}}</ion-label>\n        </ion-row>\n\n        <ion-item>\n            <div *ngFor=\"let item of securityQuestions, let i= index; let last= last\">\n                <app-security-question [securityQuestion]=\"item\" (click)=\"answerSelected($event)\" *ngIf=\"i === currentElement\"></app-security-question>\n            </div>\n        </ion-item>\n\n        <ion-row>\n            <app-button [configuration]=\"configurationButton\" [disabled]=\"waitingAnswer\" (onClick)=\"complete()\">\n            </app-button>\n        </ion-row>\n\n    </div>\n\n</ion-content>";

/***/ }),

/***/ 3707:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/account-verification/components/security-question/security-question.page.html?ngResource ***!
  \*****************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{securityQuestion.Question}}</ion-label>\n    </ion-row>\n\n    <ion-row>\n\n        <div *ngFor=\"let item of securityQuestion.FalseAnswers\">\n            <ion-item>\n                <ion-checkbox name=\"flexRadioDefault\" [value]=\"item.Answer\" [(ngModel)]=\"securityQuestion.SelectedAnswer\" (change)=\"onClickAnswer()\"></ion-checkbox>\n                <ion-label>{{item.Answer}}</ion-label>\n            </ion-item>\n        </div>\n\n    </ion-row>\n\n</ion-content>";

/***/ }),

/***/ 99304:
/*!*************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/data-complete/data-complete.page.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <ion-label class=\"title-primary\">{{'PUBLIC.REGISTRATION.dataCompleteTitle' | translate}}</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <ion-label class=\"subtitle-opacity\">{{'PUBLIC.REGISTRATION.dataCompleteSubTitle' | translate}}</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"ion-padding-top\">\n\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.firstName' | translate}}</ion-label>\n                    <ion-input formControlName=\"firstName\"></ion-input>\n                    <span class=\"ion-validator\" *ngIf=\"this.form.controls.firstName.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                    <span class=\"ion-validator\" *ngIf=\"this.form.controls.firstName.hasError('pattern')\">\n                        {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}</span>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.secondName' | translate}}</ion-label>\n                    <ion-input formControlName=\"secondName\"></ion-input>\n                    <span *ngIf=\"this.form.controls.secondName.hasError('pattern')\">\n                            {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}</span>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.firstLastName' | translate}}</ion-label>\n                    <ion-input formControlName=\"firstLastName\"></ion-input>\n                    <span *ngIf=\"this.form.controls.firstLastName.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                    <span *ngIf=\"this.form.controls.firstLastName.hasError('pattern')\">\n                        {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}</span>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.secondLastName' | translate}}</ion-label>\n                    <ion-input formControlName=\"secondLastName\"></ion-input>\n                    <span *ngIf=\"this.form.controls.secondLastName.hasError('pattern')\">\n                      {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}</span>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.departament' | translate}}</ion-label>\n                    <ion-select formControlName=\"departament\" (ionChange)=\"onChangeDepartment()\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of departament\">{{item.Name}}</ion-select-option>\n                    </ion-select>\n\n                    <span *ngIf=\"this.form.controls.departament.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.city' | translate}}</ion-label>\n                    <ion-select formControlName=\"city\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of cities\">{{item.Name}}</ion-select-option>\n                    </ion-select>\n                    <span *ngIf=\"this.form.controls.city.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.gener' | translate}}</ion-label>\n                    <ion-select formControlName=\"gender\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of gender\">{{item.Name}}</ion-select-option>\n                    </ion-select>\n                    <span *ngIf=\"this.form.controls.gender.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.dateBirthDay' | translate}}</ion-label>\n                    <ion-datetime formControlName=\"date\" [max]=\"max\"></ion-datetime>\n                    <span *ngIf=\"this.form.controls.date.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.cellPhoneNumber' | translate}}</ion-label>\n                    <ion-input formControlName=\"cellPhone\" [maxlength]=\"environment.lengthCell\" (keypress)=\"onlyNumber($event)\" type=\"number\"></ion-input>\n                    <span *ngIf=\"this.form.controls.cellPhone.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                    <span *ngIf=\"!this.form.controls.cellPhone.hasError('required') && this.form.controls.cellPhone.hasError('invalidNumber')\">\n                        {{'PUBLIC.SHARED.startNumber' | translate}} {{environment.startNumberCell}}</span>\n                </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-item>\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.phoneNumber' | translate}}</ion-label>\n                    <ion-input formControlName=\"phone\" [maxlength]=\"environment.lengthPhone\" (keypress)=\"onlyNumber($event)\"></ion-input>\n                    <span *ngIf=\"this.form.controls.phone.hasError('invalidPhoneNumber')\">\n                        {{'PUBLIC.SHARED.startNumber' | translate}} {{environment.startNumberPhone}}</span>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col>\n            <app-button [configuration]=\"configurationButton\" (onClick)=\"complete()\" [disabled]=\"form.invalid\"></app-button>\n        </ion-col>\n    </ion-row>\n\n</ion-content>";

/***/ }),

/***/ 66798:
/*!*********************************************************************************************************!*\
  !*** ./src/app/public/sections/account-create/register-password/register-password.page.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{'PUBLIC.REGISTRATION.registerPasswordTitle' | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"subtitle-opacity\">{{'PUBLIC.REGISTRATION.registerPasswordSubTitle' | translate}}</ion-label>\n    </ion-row>\n\n    <form [formGroup]=\"formPassword\" class=\"ion-padding-top\">\n\n        <ion-row>\n\n            <ion-col size=\"12\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PUBLIC.SHARED.password' | translate}}</ion-label>\n                    <ion-input [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" type=\"password\"></ion-input>\n                    <span (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                    <ion-icon>{{hide ? 'visibility_off' : 'visibility'}}</ion-icon></span>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.formPassword.controls.password.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                </span>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PUBLIC.SHARED.repeatPassword' | translate}}</ion-label>\n                    <ion-input [type]=\"hideC ? 'password' : 'text'\" formControlName=\"passwordConfirm\" type=\"password\"></ion-input>\n                    <span (click)=\"hideC = !hideC\" [attr.aria-label]=\"'HideC password'\" [attr.aria-pressed]=\"hideC\">\n                    <ion-icon>{{hideC ? 'visibility_off' : 'visibility'}}</ion-icon></span>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.formPassword.controls.passwordConfirm.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                <span class=\"ion-validator\" *ngIf=\"!this.formPassword.controls.passwordConfirm.hasError('required') && this.formPassword.controls.passwordConfirm.hasError('invalidEqualsEmail')\">\n                    {{'PUBLIC.SHARED.equalPassword' | translate}}</span>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <app-password-validator [description]=\"'Mínimo 8 caracteres.'\" [regex]=\"regex.min8Characters\" [textValidation]=\"this.formPassword.controls.password.value\"></app-password-validator>\n            <app-password-validator [description]=\"'Incluye al menos un carácter en máyuscula.'\" [regex]=\"regex.upperCaseCharacter\" [textValidation]=\"this.formPassword.controls.password.value\"></app-password-validator>\n            <app-password-validator [description]=\"'Incluye al menos un número.'\" [regex]=\"regex.min1Number\" [textValidation]=\"this.formPassword.controls.password.value\"></app-password-validator>\n            <app-password-validator [description]=\"'Incluye un carácter especial.'\" [regex]=\"regex.specialCharacter\" [textValidation]=\"this.formPassword.controls.password.value\"></app-password-validator>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n            <app-button [configuration]=\"configurationButton\" (click)=\"saveUser()\" [disabled]=\"formPassword.invalid\"></app-button>\n        </ion-row>\n\n    </form>\n\n</ion-content>";

/***/ }),

/***/ 11527:
/*!**********************************************************************************!*\
  !*** ./src/app/public/sections/login/ini-sesion/ini-sesion.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img class=\"logo-chico\" src=\"{{imgRoute}}LogoFalck.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <span class=\"title-primary\">{{'PUBLIC.LOGIN.welcomeAgain' | translate}}</span>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <span class=\"subtitle-opacity\">{{'PUBLIC.LOGIN.welcomeAgainSubtitle' | translate}}</span>\n        </ion-col>\n    </ion-row>\n\n    <form [formGroup]=\"loginForm\">\n\n        <ion-row>\n            <ion-col size=\"12\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\"> {{'PUBLIC.SHARED.correo' | translate}}</ion-label>\n                    <ion-input formControlName=\"email\" id=\"email\" type=\"email\"></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.loginForm.controls.email.hasError('required') && this.loginForm.controls.email.touched\">{{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"!this.loginForm.controls.email.hasError('required') && this.loginForm.controls.email.hasError('email')\">{{'PUBLIC.SHARED.validCorreo' | translate}}</span>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\"> {{'PUBLIC.SHARED.password' | translate}}</ion-label>\n                    <ion-input formControlName=\"password\" id=\"password\" type=\"password\"></ion-input>\n                </ion-item>\n                <span class=\"ion-validator\" *ngIf=\"this.loginForm.controls.password.hasError('required') && this.loginForm.controls.password.touched\">{{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.loginForm.controls.password.hasError('required') && this.loginForm.controls.password.touched\">{{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"ion-no-padding\">\n            <ion-col size=\"12\">\n                <a routerLink='/onboarding/recover-password-mail-phone' routerLinkActive=\"active\">\n                    {{'PUBLIC.PASSWORD.rememberPasswordTitle' | translate}}\n                </a>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"12\" class=\"d-flex ion-justify-content-center\">\n                <app-button [configuration]=\"ingresarButton\" (click)=\"clickLogin()\" [disabled]=\"this.loginForm.invalid\" id=\"ingresarButton\"></app-button>\n            </ion-col>\n        </ion-row>\n\n    </form>\n\n    <ion-row class=\"ion-no-padding\">\n        <ion-col size=\"12\" class=\"ion-justify-content-center\">\n            {{'PUBLIC.WELCOME.youDontHaveAccount' | translate}}\n            <a routerLink='/onboarding/account-create' routerLinkActive=\"active\">\n                {{'PUBLIC.WELCOME.signUp' | translate}}\n            </a>\n        </ion-col>\n    </ion-row>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n</ion-content>";

/***/ }),

/***/ 44735:
/*!****************************************************************************!*\
  !*** ./src/app/public/sections/onboarding/onboarding.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\n    <app-onboarding-header></app-onboarding-header>\n    <app-onboarding-carousel></app-onboarding-carousel>\n</ion-content>";

/***/ }),

/***/ 32336:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/public/sections/password/recover-password-mail-phone/recover-password-mail-phone.page.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row class=\"ion-padding-top\">\n        <span class=\"title-primary\">{{'PUBLIC.PASSWORD.rememberPasswordTitle' | translate}}</span>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <span class=\"subtitle-opacity\">{{'PUBLIC.PASSWORD.rememberMsj' | translate}}</span>\n    </ion-row>\n\n    <ion-row class=\"pt-2\">\n        <span class=\"subtitle-opacity text-description\">{{'PUBLIC.PASSWORD.choose' | translate}}</span>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n        <ion-col>\n            <app-button routerLink=\"/onboarding/recover-password-mail\" [configuration]=\"mailBtn\" id=\"mailBtn\"></app-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n        <ion-col>\n            <app-button routerLink=\"/onboarding/recover-password-phone\" [configuration]=\"smsBtn\" id=\"smsBtn\"></app-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <a class=\"color-secundary\" routerLink='/onboarding/ini-sesion' routerLinkActive=\"active\">{{'PUBLIC.SHARED.session' | translate}}</a>\n    </ion-row>\n\n</ion-content>";

/***/ }),

/***/ 10207:
/*!***********************************************************************************************************!*\
  !*** ./src/app/public/sections/password/recover-password-mail/recover-password-mail.page.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row class=\"ion-padding-top\">\n        <span class=\"title-primary\">{{'PUBLIC.PASSWORD.rememberPasswordTitle' | translate}}</span>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <span class=\"subtitle-opacity\">{{'PUBLIC.PASSWORD.rememberPasswordSubtitle' | translate}}</span>\n    </ion-row>\n\n    <ion-row>\n        <span class=\"subtitle-opacity text-description\">Ingrese a continuación su correo electrónico para que podamos validarte.</span>\n    </ion-row>\n\n    <form [formGroup]=\"emailForm\">\n\n        <ion-row class=\"ion-padding-top ion-justify-content-center\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{'PUBLIC.SHARED.correo' | translate}}</ion-label>\n                <ion-input type=\"email\" formControlName=\"email\" id=\"email\"></ion-input>\n            </ion-item>\n        </ion-row>\n\n    </form>\n\n    <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n        <ion-col>\n            <app-button [configuration]=\"continuarButton\" [disabled]=\"this.emailForm.invalid\" (click)=\"forgotPassword()\" id=\"continuarButton\"></app-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <a class=\"color-secundary\" routerLink='/onboarding/ini-sesion' routerLinkActive=\"active\">{{'PUBLIC.SHARED.session' | translate}}</a>\n    </ion-row>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ }),

/***/ 93580:
/*!*************************************************************************************************************!*\
  !*** ./src/app/public/sections/password/recover-password-phone/recover-password-phone.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row class=\"ion-padding-top\">\n        <span class=\"title-primary\">{{'PUBLIC.PASSWORD.rememberPasswordTitle' | translate}}</span>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <span class=\"subtitle-opacity\">{{'PUBLIC.PASSWORD.rememberPasswordSubtitle' | translate}}</span>\n    </ion-row>\n\n    <ion-row>\n        <span class=\"subtitle-opacity text-description\">Ingrese a continuación su teléfono para que podamos validarte.</span>\n    </ion-row>\n\n    <form [formGroup]=\"phoneForm\">\n\n        <ion-row class=\"ion-padding-top ion-justify-content-center\">\n            <ion-item class=\"ion-item-form-input\">\n                <ion-label position=\"floating\">{{'PUBLIC.SHARED.phone' | translate}}</ion-label>\n                <ion-input type=\"number\" formControlName=\"phone\" id=\"phone\" required></ion-input>\n            </ion-item>\n        </ion-row>\n\n    </form>\n\n    <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n        <ion.col>\n            <app-button [configuration]=\"continuarButton\" [disabled]=\"phoneForm.invalid\" (click)=\"forgotPassword()\" id=\"continuarButton\"></app-button>\n        </ion.col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <a class=\"color-secundary\" routerLink='/onboarding/ini-sesion' routerLinkActive=\"active\">{{'PUBLIC.SHARED.session' | translate}}</a>\n    </ion-row>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ }),

/***/ 8598:
/*!*************************************************************************************************************!*\
  !*** ./src/app/public/sections/password/remember-password-code/remember-password-code.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row class=\"ion-padding-top\">\n        <span class=\"title-primary\">{{'PUBLIC.PASSWORD.rememberPasswordTitle' | translate}}</span>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <span class=\"subtitle-opacity\">{{'PUBLIC.PASSWORD.code' | translate}}</span>\n    </ion-row>\n\n    <form [formGroup]=\"codeForm\" keyup.enter=\"onCodeCompleted()\">\n\n        <ion-row class=\"ion-padding-top\">\n\n            <ion-col size=\"12\">\n                <code-input id=\"code\" [isCodeHidden]=\"false\" [codeLength]=\"4\" (codeChanged)=\"onCodeChanged($event)\" class=\"input-number\">\n                </code-input>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n            <ion-col>\n                <app-button [configuration]=\"continuarButton\" [disabled]=\"codeIncomplete\" (click)=\"onCodeCompleted()\" id=\"continuarButton\"></app-button>\n            </ion-col>\n        </ion-row>\n\n    </form>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ }),

/***/ 29699:
/*!***************************************************************************************************!*\
  !*** ./src/app/public/sections/password/remember-password/remember-password.page.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n                <img src=\"{{imgRoute}}logo-emi-1.svg\">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <span class=\"title-primary\">{{'PUBLIC.PASSWORD.rememberPasswordTitle' | translate}}</span>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"12\">\n            <span class=\"subtitle-opacity\">{{'PUBLIC.PASSWORD.rememberPasswordSubtitle' | translate}}</span>\n        </ion-col>\n    </ion-row>\n\n    <form [formGroup]=\"passForm\">\n\n        <ion-row>\n\n            <ion-col size=\"12\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\"> {{'PUBLIC.SHARED.password' | translate}}</ion-label>\n                    <ion-input formControlName=\"password\" id=\"password\"></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.passForm.controls.password.hasError('required') && this.passForm.controls.password.touched\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                </span>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\"> {{'PUBLIC.SHARED.passwordConfirm' | translate}}</ion-label>\n                    <ion-input formControlName=\"passwordConfirm\" id=\"passwordConfirm\"></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n                <span class=\"ion-validator\" *ngIf=\"this.passForm.controls.password.hasError('required') && this.passForm.controls.password.touched\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                </span>\n                <span class=\"ion-validator\" *ngIf=\"!this.passForm.controls.passwordConfirm.hasError('required') && this.passForm.controls.passwordConfirm.hasError('invalidEqualsEmail') && this.passForm.controls.password.touched\">\n                    {{'PUBLIC.SHARED.equalPassword' | translate}}\n                </span>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-col size=\"12\">\n                <app-password-validator [description]=\"'Mínimo 8 caracteres.'\" [regex]=\"regex.min8Characters\" [textValidation]=\"this.passForm.controls.password.value\"></app-password-validator>\n                <app-password-validator [description]=\"'Incluye al menos un carácter en máyuscula.'\" [regex]=\"regex.upperCaseCharacter\" [textValidation]=\"this.passForm.controls.password.value\"></app-password-validator>\n                <app-password-validator [description]=\"'Incluye al menos un número.'\" [regex]=\"regex.min1Number\" [textValidation]=\"this.passForm.controls.password.value\"></app-password-validator>\n                <app-password-validator [description]=\"'Incluye un carácter especial.'\" [regex]=\"regex.specialCharacter\" [textValidation]=\"this.passForm.controls.password.value\"></app-password-validator>\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n            <ion-col size=\"12\">\n                <app-button [configuration]=\"continuarButton\" (click)=\"complete()\" id=\"continuarButton\"></app-button>\n            </ion-col>\n        </ion-row>\n\n    </form>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ }),

/***/ 55923:
/*!******************************************************************!*\
  !*** ./src/app/public/sections/terms/terms.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-body\" *ngIf=\"!isLoading\">\n\n    <div class=\"container\">\n\n        <div class=\"row pt-2\">\n            <div class=\"d-flex column-close justify-content-end\">\n                <button type=\"button\" (click)=\"closeModal()\" class=\"btn-close\" aria-label=\"Close\">\n            </button>\n            </div>\n        </div>\n\n        <div class=\"row pb-4\">\n            <div class=\"d-flex column-logo justify-content-center\">\n                <img src=\"{{imageSource}}\">\n            </div>\n        </div>\n\n        <div class=\"modal-body-scroll m-1\">\n            <div [innerHTML]=\"texto\"></div>\n        </div>\n\n    </div>\n\n</div>\n\n<app-loader *ngIf=\"isLoading\"></app-loader>";

/***/ }),

/***/ 50734:
/*!*************************************************************************************************!*\
  !*** ./src/app/public/sections/useful-phones/list-phones/list-phones.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-body\">\n\n    <ion-row class=\"d-flex justify-content-between mb-4\">\n        <ion-col size=\"8\">\n            <img class=\"img-fluid mr-4\" src=\"{{imgRoute}}icons/location.png\" alt=\"location\">\n            <span class=\"mx-2 mb-4 fs-6 color-primary\">Estas en: {{ list.CityName }} , {{ 'PUBLIC.SHARED.country' | translate}} </span>\n            <div class=\"d-inline-block ml-2\">\n                <span (click)=\"closeModal(); volver()\" class=\"cambiar m-0 cursor-pointer\"> {{ 'PUBLIC.SHARED.change' | translate }} </span>\n            </div>\n        </ion-col>\n        <ion-col size=\"2\">\n            <button type=\"button\" (click)=\"closeModal()\" class=\"btn-close mb-4 close justify-content-end\" aria-label=\"Close\">\n              <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\n            </button>\n        </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"d-md-flex justify-content-around center\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <div *ngFor=\"let item of descriptionPhones; let i=index\" class=\" text-center pb-4\">\n                    <div class=\"img text-center\">\n                        <img [src]=\"item.img\" alt=\"service-client\" style=\"width: 35px;\">\n                    </div>\n                    <div class=\"phoneNumber\">\n                        <ion-label class=\"color-primary text-description \">\n                            {{item.title}}\n                        </ion-label>\n                        <div *ngFor=\"let tel of item.numbers\" class=\"mb-2\">\n                            <a [href]=\"'tel:' + tel.Tel\" class=\"number-tel\">{{tel.Tel}}</a>\n                            <br>\n                        </div>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</div>";

/***/ }),

/***/ 11208:
/*!*************************************************************************************************!*\
  !*** ./src/app/public/sections/useful-phones/option-city/option-city.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"modal-body\">\n\n    <ion-grid class=\"text-center mt-4\" fixed>\n        <ion-row>\n            <ion-col size=\"12\">\n                <img class=\"img-fluid mr-4\" src=\"{{imgRoute}}icons/location.png\" alt=\"location\">\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-row class=\"ion-content-center text-cen\">\n        <ion-col size=\"12\">\n            <ion-label class=\"text-center text-city color-primary\">{{ 'PUBLIC.USEFUL-PHONES.inputCity' | translate}}</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col size=\"12\">\n            <form [formGroup]=\"form\">\n                <ion-select formControlName=\"city\" appearance=\"fill\" mode=\"ios\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                    <ion-select-option value=\"{{item.CityCode}}\" *ngFor=\"let item of listPhones?.UPhoneses; let i = index\"> {{item.CityName}}</ion-select-option>\n                </ion-select>\n            </form>\n        </ion-col>\n\n        <ion-col class=\"ion-content-center spacing-buttons\" size=\"12\">\n            <span (click)=\"closeModalAndOpen(false)\" class=\"btn mr-4 cancel-button\">{{ 'PUBLIC.SHARED.cancel' | translate}}</span>\n            <app-button [configuration]=\"inputLocationButton\" (click)=\"closeModalAndOpen(true)\"></app-button>\n        </ion-col>\n    </ion-row>\n\n</div>";

/***/ }),

/***/ 77681:
/*!**********************************************************************!*\
  !*** ./src/app/public/sections/welcome/welcome.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid class=\"padding-header container-welcome\">\n\n    <ion-row class=\"d-flex ion-justify-content-center\">\n        <img class=\"imgProperties\" src=\"{{imgRoute}}LogoFalck.svg\">\n    </ion-row>\n\n    <ion-row class=\"title-container\">\n        <ion-col class=\"ion-content-center welcome\" size=\"12\">\n            <span style=\"margin-bottom: 42px;\" class=\"title-welcome\">{{'PUBLIC.WELCOME.welcome' | translate}}</span>\n            <app-button [configuration]=\"loginButton\" (click)=\"clickLogin()\"></app-button>\n            <hr>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n        <ion-col size=\"12\" class=\"d-flex ion-justify-content-center\">\n            <ion-label>{{'PUBLIC.WELCOME.youDontHaveAccount' | translate}}</ion-label>\n            <span><a routerLink='/onboarding/account-create' routerLinkActive=\"active\"> {{'PUBLIC.WELCOME.signUp' | translate}}</a></span>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col class=\"ion-content-center\" size=\"12\">\n            <app-button [configuration]=\"usefulPhonesButton\" (click)=\"clickUsefulPhones()\"></app-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-content-center ion-footer-welcome\">\n        <ion-col size=\"12\">\n            <p class=\"ion-text-footer\">{{'PUBLIC.WELCOME.termsAccept' | translate}}</p>\n        </ion-col>\n    </ion-row>\n\n</ion-grid>";

/***/ })

}]);
//# sourceMappingURL=src_app_public_public_module_ts.js.map