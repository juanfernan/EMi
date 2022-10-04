"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_my-account_register-child_register-child_module_ts"],{

/***/ 26870:
/*!**********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/components/selected-child/selected-child.page.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectedChildPage": () => (/* binding */ SelectedChildPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _selected_child_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selected-child.page.html?ngResource */ 860);
/* harmony import */ var _selected_child_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selected-child.page.scss?ngResource */ 41087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var _configs_add_afiliate_nutton_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/add-afiliate-nutton-config */ 31897);
/* harmony import */ var _services_selected_child_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/selected-child.service */ 91597);
/* harmony import */ var src_app_portal_moduls_service_solicitud_services_portal_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/portal/moduls/service-solicitud/services/portal-common.service */ 29014);











let SelectedChildPage = class SelectedChildPage {
    constructor(translate, commonService, route, selectedChildService, bsModalService) {
        this.commonService = commonService;
        this.route = route;
        this.selectedChildService = selectedChildService;
        this.bsModalService = bsModalService;
        this.myChildren = [];
        this.idDocument = '';
        this.childChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.legendChild = '';
        this.addAfiliateButtonConfig = _configs_add_afiliate_nutton_config__WEBPACK_IMPORTED_MODULE_3__.addAfiliateButtonConfigExport;
        this.isLoading = false;
        this.translate = translate;
    }
    ngOnInit() {
        this.registerId = localStorage.getItem("registerId");
        this.getchildren();
        this.translate.get('PORTAL.REGISTER-CHILD.Subtitle').subscribe(message => {
            this.legendChild = message;
        });
    }
    getchildren() {
        this.isLoading = true;
        this.selectedChildService
            .getYoungerEighteen(this.registerId)
            .subscribe((result) => {
            this.myChildren = result.Members;
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
    }
    ErrorRegister(error) {
        this.isLoading = false;
        const initialState = {
            initialState: {
                iconHeader: 'alert-circle.svg',
                subTitle: 'Inconvenientes con el portal',
                description: 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.',
                onlyButtonConfirm: true,
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
        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
    onChildChange(event) {
        var filteredchild = this.myChildren.find(function (el) {
            return el.Document === event;
        });
        this.childChange.emit(filteredchild);
    }
};
SelectedChildPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: src_app_portal_moduls_service_solicitud_services_portal_common_service__WEBPACK_IMPORTED_MODULE_5__.PortalCommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_selected_child_service__WEBPACK_IMPORTED_MODULE_4__.SelectedChildService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalService }
];
SelectedChildPage.propDecorators = {
    childChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
SelectedChildPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-selected-child',
        template: _selected_child_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_selected_child_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectedChildPage);



/***/ }),

/***/ 31897:
/*!***********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/configs/add-afiliate-nutton-config.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAfiliateButtonConfigExport": () => (/* binding */ addAfiliateButtonConfigExport)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);


const addAfiliateButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
addAfiliateButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Primary;
addAfiliateButtonConfig.text = 'Agregar familiar';
addAfiliateButtonConfig.width = "240px";
const addAfiliateButtonConfigExport = addAfiliateButtonConfig;


/***/ }),

/***/ 44374:
/*!***************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/configs/send-button-config.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendButtonConfigExport": () => (/* binding */ sendButtonConfigExport)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);


const sendButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
sendButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Primary;
sendButtonConfig.text = 'Enviar';
sendButtonConfig.width = "120px";
const sendButtonConfigExport = sendButtonConfig;


/***/ }),

/***/ 1073:
/*!******************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/register-child-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterChildPageRoutingModule": () => (/* binding */ RegisterChildPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _register_child_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-child.page */ 24008);





const routes = [
    {
        path: '',
        component: _register_child_page__WEBPACK_IMPORTED_MODULE_1__.RegisterChildPage,
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
    },
    // {
    //   path: 'selected-child',
    //   loadChildren: () => import('./register-child.module').then( m => m.RegisterChildPageModule)
    // }
];
let RegisterChildPageRoutingModule = class RegisterChildPageRoutingModule {
};
RegisterChildPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], RegisterChildPageRoutingModule);



/***/ }),

/***/ 61517:
/*!**********************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/register-child.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterChildPageModule": () => (/* binding */ RegisterChildPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _register_child_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-child-routing.module */ 1073);
/* harmony import */ var _register_child_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-child.page */ 24008);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.module */ 44466);
/* harmony import */ var _components_selected_child_selected_child_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/selected-child/selected-child.page */ 26870);









let RegisterChildPageModule = class RegisterChildPageModule {
};
RegisterChildPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _register_child_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterChildPageRoutingModule
        ],
        declarations: [
            _register_child_page__WEBPACK_IMPORTED_MODULE_1__.RegisterChildPage,
            _components_selected_child_selected_child_page__WEBPACK_IMPORTED_MODULE_3__.SelectedChildPage
        ]
    })
], RegisterChildPageModule);



/***/ }),

/***/ 24008:
/*!********************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/register-child.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterChildPage": () => (/* binding */ RegisterChildPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_child_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-child.page.html?ngResource */ 87662);
/* harmony import */ var _register_child_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-child.page.scss?ngResource */ 89800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var _configs_send_button_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configs/send-button-config */ 44374);
/* harmony import */ var _services_register_child_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/register-child.service */ 35986);









let RegisterChildPage = class RegisterChildPage {
    constructor(translate, registerChildService, bsModalService) {
        this.registerChildService = registerChildService;
        this.bsModalService = bsModalService;
        this.idDocument = '';
        this.legendChild = '';
        this.fileDocumentC = '';
        this.fileRegisterC = '';
        this.fileDocumentBase = '';
        this.fileRegisterBase = '';
        this.acceptExt = ".png, .jpg, .jpeg, .pdf";
        this.allowExt = ['jpg', 'jpeg', 'png', 'pdf'];
        this.extDocument = '';
        this.extRegister = '';
        this.sizeAllow = 2;
        this.loading = false;
        this.completedInfo = false;
        this.sendButtonConfig = _configs_send_button_config__WEBPACK_IMPORTED_MODULE_3__.sendButtonConfigExport;
        this.translate = translate;
    }
    ngOnInit() {
        this.fileDocumentC = '';
        this.fileRegisterC = '';
        this.translate.get('PORTAL.REGISTER-CHILD.SubitileAtachment').subscribe(message => {
            this.legendChild = message;
        });
    }
    onFileChangedDocument(event) {
        const file = event.target.files[0];
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            if (!this.validateFileExt(file.name)) {
                this.erraseDataDocument();
                this.showDialog('Por favor Revisar', 'Formato no permitido', true);
                return;
            }
            else if (!this.validateSizeFile(file, this.sizeAllow)) {
                this.erraseDataRegisterC();
                this.showDialog('Por favor Revisar', 'Tamaño excede el límite de ' + this.sizeAllow + ' MB', true);
                return;
            }
            else {
                //Filtro 1, Remover tíldes
                var cleanFileName = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                //Filtro 2, Solo numeros, letras, Caracter: -_.
                cleanFileName = cleanFileName.replace(/[^0-9a-zA-Z-_.]+/g, "");
                this.fileDocumentC = cleanFileName;
                this.extDocument = this.fileDocumentC.substring(this.fileDocumentC.lastIndexOf('.') + 1);
                let reader = new FileReader();
                reader.readAsBinaryString(file);
                var self = this;
                reader.onload = function () {
                    self.fileDocumentBase = btoa(reader.result);
                };
                reader.onerror = function (error) {
                };
            }
        }
    }
    erraseDataDocument() {
        this.fileDocumentBase = '';
        this.fileDocumentC = '';
        this.extDocument = '';
    }
    onFileChangedRegister(event) {
        const file = event.target.files[0];
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            if (!this.validateFileExt(file.name)) {
                this.erraseDataRegisterC();
                this.showDialog('Por favor Revisar', 'Formato no permitido', true);
                return;
            }
            else if (!this.validateSizeFile(file, this.sizeAllow)) {
                this.erraseDataRegisterC();
                this.showDialog('Por favor Revisar', 'Tamaño excede el límite de ' + this.sizeAllow + ' MB', true);
                return;
            }
            else {
                //Filtro 1, Remover tíldes
                var cleanFileName = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                //Filtro 2, Solo numeros, letras, Caracter: -_.
                cleanFileName = cleanFileName.replace(/[^0-9a-zA-Z-_.]+/g, "");
                this.fileRegisterC = cleanFileName;
                this.extRegister = this.fileRegisterC.substring(this.fileRegisterC.lastIndexOf('.') + 1);
                let reader = new FileReader();
                reader.readAsBinaryString(file);
                var self = this;
                reader.onload = function () {
                    self.fileRegisterBase = btoa(reader.result);
                };
                reader.onerror = function (error) {
                };
            }
        }
    }
    erraseDataRegisterC() {
        this.fileRegisterC = '';
        this.fileRegisterBase = '';
        this.extRegister = '';
    }
    showDialog(title, message, imagenStatus) {
        this.generateInformativeModal(title, message, imagenStatus, true);
    }
    getBase64(file, assingVar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () { });
    }
    /**
     * @se Valida la extensión del archivo
     * @param name
     */
    validateFileExt(name) {
        var ext = name.substring(name.lastIndexOf('.') + 1);
        //Halla si algun elemento de las extensiones permitidas cumple con la extensión del archivo.
        var even = function (element) {
            return element == ext.toLowerCase();
        };
        if (this.allowExt.some(even)) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @see Se valida el tamaño del archivo
     * @param file
     * @param sizeAllow
     */
    validateSizeFile(file, sizeAllow) {
        var fileSize = file.size / 1024 / 1024; // in MB
        if (fileSize > sizeAllow) {
            return false;
        }
        else {
            return true;
        }
    }
    getChild(dataChildComing) {
        this.dataChild = dataChildComing;
    }
    send() {
        if (!this.fileDocumentC || !this.fileRegisterC || !this.dataChild) {
            return;
        }
        else {
            this.validateBeforeSend();
            /* TODO incluir nuevo modal del loader
            this.dialogService.addDialog(ModalLoadComponent, {
            }, { closeByClickingOutside: false }); */
            let fullNameResponsible = localStorage.getItem("NameOne")
                + (localStorage.getItem("NameTwo") === "" ? "" : (" " + localStorage.getItem("NameTwo")))
                + (localStorage.getItem("LastNameOne") === "" ? "" : (" " + localStorage.getItem("LastNameOne")))
                + (localStorage.getItem("LastNameTwo") === "" ? "" : (" " + localStorage.getItem("LastNameTwo")));
            let params = {
                "StringMinorDocument": this.fileDocumentBase,
                "StringCivilRegistration": this.fileRegisterBase,
                "DocumentType": localStorage.getItem("documentType"),
                "Document": localStorage.getItem("document"),
                "MinorDocumentType": this.dataChild.DocumentType,
                "MinorDocument": this.dataChild.Document,
                "MinorFullName": this.dataChild.FullNames,
                "ResponsibleFullName": fullNameResponsible,
                "ExtentionDocument": this.extDocument.toUpperCase(),
                "ExtentionCivilRegistration": this.extRegister.toUpperCase(),
                "MailResponsible": localStorage.getItem("userName")
            };
            this.loading = true;
            this.registerChildService.sendDocuments(params)
                .subscribe((result) => {
                this.loading = false;
                this.resetForm();
                if (result.StatusCode == 0) {
                    this.showDialog('Tu solicitud fue recibida', 'Tu solicitud ha sido registrada exitosamente bajo el radicado N°:' + result.NumFnc + '. En un plazo máximo de dos (2) días hábiles daremos respuesta a tu requerimiento a través del correo ' + localStorage.getItem("userName"), false);
                    this.erraseDataDocument();
                    this.erraseDataRegisterC();
                }
                else {
                    this.loading = false;
                    this.showDialog('Se presentó el siguiente problema', result.Message, true);
                }
            }, (error) => {
                this.loading = false;
                this.showDialog('Error en el sistema', 'Por favor intentalo más tarde', true);
            });
        }
    }
    resetForm() {
        /* Nueva logica para resetear formulario
        let documentC = $('#documentC');
        documentC.wrap('<form>').closest('form').get(0).reset();
        documentC.unwrap();
        let registerC = $('#registerC');
        registerC.wrap('<form>').closest('form').get(0).reset();
        registerC.unwrap();
        */
        this.fileDocumentC = "";
        this.fileRegisterC = "";
    }
    validateBeforeSend() {
        if (this.validateDataIsSet(this.fileDocumentBase)
            && this.validateDataIsSet(this.fileRegisterBase)
            && typeof this.dataChild !== 'undefined') {
            this.completedInfo = true;
        }
        else {
            this.completedInfo = false;
        }
    }
    validateDataIsSet(data) {
        return (data.length != 0 || data.trim());
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
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
};
RegisterChildPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _services_register_child_service__WEBPACK_IMPORTED_MODULE_4__.RegisterChildService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__.BsModalService }
];
RegisterChildPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register-child',
        template: _register_child_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_child_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterChildPage);



/***/ }),

/***/ 35986:
/*!********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/services/register-child.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterChildService": () => (/* binding */ RegisterChildService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let RegisterChildService = class RegisterChildService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        /* */
    }
    sendDocuments(params) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Family/GetRegistrationResponsible';
        return this.http.post(url, params);
    }
};
RegisterChildService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RegisterChildService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RegisterChildService);



/***/ }),

/***/ 91597:
/*!********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/services/selected-child.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectedChildService": () => (/* binding */ SelectedChildService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let SelectedChildService = class SelectedChildService {
    constructor(http) {
        this.http = http;
    }
    getYoungerEighteen(idReference) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Family/GetYoungMembers';
        //Params
        let params = {
            IdReference: idReference
        };
        return this.http.post(url, params);
    }
};
SelectedChildService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SelectedChildService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SelectedChildService);



/***/ }),

/***/ 41087:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/components/selected-child/selected-child.page.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n\nion-item {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGVkLWNoaWxkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0oiLCJmaWxlIjoic2VsZWN0ZWQtY2hpbGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5zZWxlY3RlZC1jaGlsZC1jb250YWluZXIge1xuLy8gICAgIG1hcmdpbjogMHB4O1xuLy8gICAgIHBhZGRpbmc6IDBweDtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4vLyAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbi8vIH1cbi8vIC5zZWxlY3RlZC1jaGlsZF9fdGl0bGUge1xuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbi8vICAgICBmb250LXNpemU6IDI0cHg7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4vLyAgICAgY29sb3I6ICM0ZDRkNGQ7XG4vLyB9XG4vLyAuc2VsZWN0ZWQtY2hpbGRfX3N1YnRpdGxlIHtcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuLy8gICAgIGNvbG9yOiAjNGQ0ZDRkO1xuLy8gfVxuLy8gLmNoaWxkLXNlbGVjdG9yIHtcbi8vICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuLy8gICAgIHdpZHRoOiA1MDBweDtcbi8vIH1cbi8vIC5zZWxlY3RlZC1jaGlsZF9fYnV0dG9uLWNvbnRhaW5lciB7XG4vLyAgICAgbWFyZ2luLXRvcDogMzVweDtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4vLyAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbi8vIH0iXX0= */";

/***/ }),

/***/ 89800:
/*!*********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/register-child.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n  font-family: \"Mark OT\", sans-serif;\n}\n\nion-item {\n  border: none !important;\n}\n\nion-row {\n  margin-bottom: 1px !important;\n}\n\n.ion-label-inner {\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWNoaWxkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLWNoaWxkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBmb250LWZhbWlseTogJ01hcmsgT1QnLCBzYW5zLXNlcmlmO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDFweCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWxhYmVsLWlubmVyIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4vLyAucmVnaXN0ZXItY2hpbGQtY29udGFpbmVyIHtcbi8vICAgICBwYWRkaW5nOiA0MHB4O1xuLy8gfVxuLy8gLnJlZ2lzdGVyLWNoaWxkX19pbnB1dC1yb3cge1xuLy8gICAgIG1hcmdpbi10b3A6IDM1cHg7XG4vLyB9XG4vLyAucmVnaXN0ZXItY2hpbGRfX2RvY3VtZW50LWxhYmVsIHtcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuLy8gICAgIGNvbG9yOiAjNGQ0ZDRkO1xuLy8gfVxuLy8gLnNlbGVjdGVkLWNoaWxkLWVsZW1lbnQge1xuLy8gICAgIHBhZGRpbmc6IDBweDtcbi8vIH1cbi8vIC5yZWdpc3Rlci1jaGlsZF9fZG9jdW1lbnQtaW5wdXQge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbi8vIH1cbi8vIC5yZWdpc3Rlci1jaGlsZF9fZm9ybS1pbmZvIHtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyB9XG4vLyAucmVnaXN0ZXItY2hpbGRfX2J1dHRvbi1jb250YWluZXIge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbi8vIH0iXX0= */";

/***/ }),

/***/ 860:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/components/selected-child/selected-child.page.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.REGISTER-CHILD.Title\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-secondary-black\" [innerHTML]=\"legendChild\"></ion-label>\n    </ion-row>\n\n    <!-- <ion-row class=\"ion-padding-top\">\n        <ion-label>{{\"PORTAL.REGISTER-CHILD.RequiredYounger\" | translate}}</ion-label>\n    </ion-row> -->\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-item class=\"ion-item-form-input\">\n            <ion-label position=\"floating\">{{\"PORTAL.REGISTER-CHILD.RequiredYounger\" | translate}}</ion-label>\n            <ion-select mode=\"ios\" [(ngModel)]=\"idDocument\" #idDocumentM=\"ngModel\" class=\"\" name=\"idDocument\" id=\"idDocument\" (ngModelChange)=\"onChildChange($event)\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" required>\n                <ion-select-option *ngFor=\"let children of myChildren\" [value]=\"children.Document\">{{children.FullNames}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n        <ion-col>\n            <app-button [configuration]=\"addAfiliateButtonConfig\" [routerLink]=\"['/portal/my-account/my-afiliates/new-afiliate']\"></app-button>\n        </ion-col>\n    </ion-row>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</div>";

/***/ }),

/***/ 87662:
/*!*********************************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/register-child/register-child.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Registrar Menor</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class=\"ion-padding-top\">\n        <app-selected-child (childChange)='getChild($event)'></app-selected-child>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{\"PORTAL.REGISTER-CHILD.labelDocument\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <div (click)=\"fileDocument.click()\" id=\"divFileDocument\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{'PORTAL.REGISTER-CHILD.placeHolderfile' | translate}}\" [(ngModel)]=\"fileDocumentC\" [disabled]=\"true\" id=\"fileDocument\" name=\"fileDocument\" required />\n        </div>\n        <input id=\"documentC\" style=\"display: none\" [accept]=\"acceptExt\" type=\"file\" (ionChange)=\"onFileChangedDocument($event)\" #fileDocument required>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{\"PORTAL.REGISTER-CHILD.labelRegister\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <div (click)=\"fileRegister.click()\" id=\"divFileRegister\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"{{'PORTAL.REGISTER-CHILD.placeHolderfile' | translate}}\" [(ngModel)]=\"fileRegisterC\" id=\"fileRegister\" name=\"fileRegister\" required />\n        </div>\n        <input id=\"registerC\" style=\"display: none\" [accept]=\"acceptExt\" type=\"file\" (change)=\"onFileChangedRegister($event)\" #fileRegister required>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"ion-label-inner\" [innerHTML]=\"legendChild\"></ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n        <ion-col>\n            <app-button [configuration]=\"sendButtonConfig\" (click)=\"send()\" [disabled]=\"!fileDocumentC || !fileRegisterC || !dataChild\">></app-button>\n            <!-- <ion-button (click)=\"send()\" [disabled]=\"true\">BTN IONIC</ion-button> -->\n        </ion-col>\n    </ion-row>\n\n    <app-loader *ngIf=\"loading\"></app-loader>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_my-account_register-child_register-child_module_ts.js.map