"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_my-account_my-data_my-data_module_ts"],{

/***/ 26824:
/*!********************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-data/models/my-data.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyData": () => (/* binding */ MyData)
/* harmony export */ });
class MyData {
    constructor(model = null) {
        if (model) {
            this.DocumentType = model.DocumentType;
            this.Document = model.Document;
            this.FirstName = model.FirstName;
            this.SecondName = model.SecondName;
            this.FirstSurname = model.FirstSurname;
            this.SecondSurname = model.SecondSurname;
            this.Email = model.Email;
            this.BirthDate = model.BirthDate;
            this.Gender = model.Gender;
            this.Apartment = model.Apartment;
            this.AddressDetails = model.AddressDetails;
            this.HomePhoneNumber = model.HomePhoneNumber;
            this.OfficePhoneNumber = model.OfficePhoneNumber;
            this.CellPhoneNumber = model.CellPhoneNumber;
            this.MedicalCoverage = model.MedicalCoverage;
            this.Childrens = model.Childrens;
            this.Occupation = model.Occupation;
            this.MaritalStatus = model.MaritalStatus;
            this.Stratum = model.Stratum;
            this.Department = model.Department;
            this.City = model.City;
            this.Street = model.Street;
            this.DoorNumber = model.DoorNumber;
            this.Country = model.Country;
            this.Bis = model.Bis;
            this.Corner = model.Corner;
            this.Nomenclature = model.Nomenclature;
            this.NumberNomenclature = model.NumberNomenclature;
            this.DataCoveragePercentage = model.DataCoveragePercentage;
        }
    }
}


/***/ }),

/***/ 4288:
/*!****************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-data/my-data-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountRoutingModule": () => (/* binding */ MyAccountRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _my_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-data.page */ 7016);





const routes = [
    {
        path: '',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _my_data_page__WEBPACK_IMPORTED_MODULE_1__.MyDataPage
    }
];
let MyAccountRoutingModule = class MyAccountRoutingModule {
};
MyAccountRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], MyAccountRoutingModule);



/***/ }),

/***/ 69379:
/*!********************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-data/my-data.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDataModule": () => (/* binding */ MyDataModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _my_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-data-routing.module */ 4288);
/* harmony import */ var _my_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-data.page */ 7016);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);







let MyDataModule = class MyDataModule {
};
MyDataModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _my_data_page__WEBPACK_IMPORTED_MODULE_1__.MyDataPage
        ],
        imports: [
            _my_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyAccountRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ]
    })
], MyDataModule);



/***/ }),

/***/ 7016:
/*!******************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-data/my-data.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDataPage": () => (/* binding */ MyDataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-data.page.html?ngResource */ 76319);
/* harmony import */ var _my_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-data.page.scss?ngResource */ 21924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_public_models_requests_document_validation_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/public/models/requests/document-validation-request */ 28660);
/* harmony import */ var src_app_public_services_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/public/services/document.service */ 45242);
/* harmony import */ var src_app_public_services_person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/public/services/person.service */ 87224);
/* harmony import */ var src_app_public_services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/public/services/place.service */ 97523);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/helpers/validator */ 95097);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_models_progress_bar_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/models/progress-bar-model */ 35534);
/* harmony import */ var src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/models/user-login */ 20743);
/* harmony import */ var src_app_shared_services_common_midd_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/common-midd.service */ 50133);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_my_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./models/my-data */ 26824);
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! typescript-string-operations */ 49565);
/* harmony import */ var _services_my_data_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/my-data.services */ 79814);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 52816);

























//import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';

let MyDataPage = class MyDataPage {
    constructor(router, urlDataService, fb, personService, documentService, commonMiddService, modalService, translate, placeService, myDataService) {
        this.router = router;
        this.urlDataService = urlDataService;
        this.fb = fb;
        this.personService = personService;
        this.documentService = documentService;
        this.commonMiddService = commonMiddService;
        this.modalService = modalService;
        this.translate = translate;
        this.placeService = placeService;
        this.myDataService = myDataService;
        this.maxDate = new Date();
        this.minDate = {
            year: this.maxDate.getUTCFullYear() - src_environments_environment__WEBPACK_IMPORTED_MODULE_14__.environment.adultAge,
            month: this.maxDate.getUTCMonth(),
            day: this.maxDate.getUTCDate()
        };
        this.configurationButtonSave = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_9__.ButtonConfiguration();
        this.configurationButtonCancel = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_9__.ButtonConfiguration();
        this.showPersonalData = false;
        this.userLogin = new src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_11__.UserLogin();
        this.myDataModel = new _models_my_data__WEBPACK_IMPORTED_MODULE_15__.MyData();
        this.fullAPIs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([
            this.personService.getGender(),
            this.documentService.getAll(),
            this.personService.getCivilStatus(),
            this.placeService.getDepartaments(),
            this.personService.getOccupations(),
            this.personService.getMedicalCoverage()
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)((data) => {
            return {
                _gender: data[0],
                _documentType: data[1],
                _civilStatus: data[2],
                _departament: data[3],
                _occupation: data[4],
                _medicalCoverage: data[5]
            };
        }));
        this._environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__.environment.imagesRoute;
        this.urlDataService.setHeaderNavPortal(['Mi cuenta', 'Mis datos']);
        this.urlDataService.setShowHeaderPortal(true);
        this.translate.get('PORTAL.MYDATA.save').subscribe(resp => {
            this.buttonSaveText = resp;
        });
        this.translate.get('PORTAL.MYDATA.cancel').subscribe(resp => {
            this.buttonCancelText = resp;
        });
        this.setButtonConfiguration();
        this.setFormPersonalData();
        this.setFormContactData();
    }
    ngOnInit() {
        this.isLoading = true;
        this.fullAPIs$.subscribe(data => {
            this.gender = data._gender;
            this.docType = data._documentType;
            this.civilStatusEntity = data._civilStatus;
            this.departament = data._departament;
            this.occupationEntity = data._occupation;
            this.medicalCoverageEntity = data._medicalCoverage;
            this.getAffiliate(false, "", "");
            this.changeTab();
            this.isLoading = false;
        }, error => this.showErrorNotificationModal(error.message));
        this.setUserLogin();
    }
    setButtonConfiguration() {
        this.configurationButtonSave.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_7__.ButtonType.Primary;
        this.configurationButtonSave.text = this.buttonSaveText;
        this.configurationButtonCancel.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_7__.ButtonType.Tertiary;
        this.configurationButtonCancel.text = this.buttonCancelText;
    }
    setUserLogin() {
        this.registerId = localStorage.getItem("registerId");
        this.userLogin.documentType = localStorage.getItem("documentType");
        this.userLogin.document = localStorage.getItem("document");
    }
    setFormPersonalData() {
        this.formPersonalData = this.fb.group({
            firstName: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('^[a-zA-Z \-\']+')]],
            secondName: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('^[a-zA-Z \-\']+')],
            firstLastName: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('^[a-zA-Z \-\']+')]],
            secondLastName: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.pattern('^[a-zA-Z \-\']+')],
            documentType: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
            document: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
            gender: [{ value: '', disabled: true }],
            date: [{ value: '', disabled: true }],
            civilStatus: [{ value: '', disabled: true }],
            occupation: [{ value: '', disabled: true }],
            medicalCoverage: [{ value: '', disabled: true }],
            stratum: [{ value: '', disabled: true }]
        });
    }
    setFormContactData() {
        this.formContactData = this.fb.group({
            country: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
            departament: [{ value: '', disabled: true }],
            city: [{ value: '', disabled: true }],
            neighborhood: [{ value: '', disabled: true }],
            street: [{ value: '', disabled: true }],
            doorNumber: [{ value: '', disabled: true }],
            doorBis: [{ value: '', disabled: true }],
            apartamentNumber: [{ value: '', disabled: true }],
            addressDetails: [{ value: '', disabled: true }],
            officePhoneNumber: [{ value: '', disabled: true }],
            homePhoneNumber: [{ value: '', disabled: true }],
            cellPhoneNumber: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_8__.ValidatorStartCellPhoneNumber]],
            email: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.email]],
            address: [{ value: '', disabled: true }]
        });
    }
    onChangeDepartment() {
        this.getCities(this.formContactData.controls.departament.value);
    }
    onChangeCity() {
        this.getNeighborhoods(this.formContactData.controls.city.value);
    }
    getCities(codeDepartment) {
        this.placeService.getCities(codeDepartment).subscribe(resp => {
            if (resp) {
                this.cities = resp;
            }
        }, error => {
            this.showErrorNotificationModal(error.message);
        });
    }
    getNeighborhoods(cityCode) {
        this.personService
            .getNeighborhoods(cityCode)
            .subscribe(result => {
            this.neighborhoods = result;
        }, error => {
            this.showErrorNotificationModal(error.message);
        });
    }
    getAffiliate(update, title, message) {
        this.myDataService
            .getAffiliate(this.userLogin)
            .subscribe(result => {
            this.loadObject(result);
            if (update) {
                this.showNotificationModal(title, message);
            }
        }, error => this.showErrorNotificationModal(error));
    }
    loadObject(result) {
        if (result.StatusCode === 0) {
            this.myDataModel.Country = src_environments_environment__WEBPACK_IMPORTED_MODULE_14__.environment.countryName;
            this.myDataModel.FirstName = result.Life.FirstName;
            this.myDataModel.SecondName = result.Life.SecondName;
            this.myDataModel.FirstSurname = result.Life.FirstSurname;
            this.myDataModel.SecondSurname = result.Life.SecondSurname;
            this.myDataModel.DocumentType = result.Life.DocumentType;
            this.myDataModel.Document = result.Life.Document;
            this.myDataModel.Gender = result.Life.Gender;
            this.myDataModel.BirthDate = result.Life.BirthDate;
            this.myDataModel.MaritalStatus = result.Life.MaritalStatus;
            this.myDataModel.Childrens = result.Life.Childrens;
            this.myDataModel.Occupation = result.Life.Occupation;
            this.myDataModel.Stratum = result.Life.Stratum;
            this.myDataModel.MedicalCoverage = result.Life.MedicalCoverage;
            this.myDataModel.CellPhoneNumber = result.Life.CellPhoneNumber;
            this.myDataModel.HomePhoneNumber = result.Life.HomePhoneNumber;
            this.myDataModel.OfficePhoneNumber = result.Life.OfficePhoneNumber;
            this.myDataModel.Email = result.Life.Email;
            this.myDataModel.AddressDetails = result.Life.AddressDetails;
            this.myDataModel.Street = result.Life.Street;
            this.myDataModel.City = result.Life.City;
            this.myDataModel.Bis = result.Life.Bis;
            this.myDataModel.DataCoveragePercentage = result.Life.DataCoveragePercentage;
            this.myDataModel.Department = result.Life.Department;
            this.myDataModel.Neighborhood = result.Life.Neighborhood;
            this.myDataModel.Corner = result.Life.Corner; //Campo3;
            this.myDataModel.DoorNumber = result.Life.DoorNumber; //campo4;
            this.myDataModel.Apartment = result.Life.Apartment;
            this.myDataModel.Nomenclature = "";
            this.myDataModel.NumberNomenclature = "";
            if (this.myDataModel.Street != "") {
                let res = this.myDataModel.Street.split(" ");
                if (res.length > 0) {
                    this.myDataModel.Nomenclature = res[0]; //Campo1
                    this.myDataModel.NumberNomenclature = res[1]; //Campo2;
                    if (this.myDataModel.Corner == '' && this.myDataModel.DoorNumber == '') { //Direcciones nuevas
                        let street = this.myDataModel.Street.split(" ");
                        // this.address = result.Life.Street;
                        this.myDataModel.Nomenclature = street[0]; //Campo1
                        this.myDataModel.NumberNomenclature = street[1]; //Campo2;
                        this.myDataModel.Corner = street[2];
                        let addressFormatOrder = "";
                        if (street[3]) {
                            this.myDataModel.DoorNumber = street[3];
                            addressFormatOrder = "{0} {1} # {2} - {3}";
                        }
                        if (street[3] && street[4]) {
                            this.myDataModel.DoorNumber = street[3] + " " + street[4];
                            addressFormatOrder = "{0} {1} # {2} {3} - {4}";
                        }
                        if (street[3] && street[4] && street[5]) {
                            this.myDataModel.DoorNumber = street[3] + " " + street[4] + " " + street[5];
                            addressFormatOrder = "{0} {1} # {2} {3} {4} - {5}";
                        }
                        this.formContactData.controls.address.setValue(typescript_string_operations__WEBPACK_IMPORTED_MODULE_16__.String.Format(addressFormatOrder, this.myDataModel.Nomenclature, this.myDataModel.NumberNomenclature, this.myDataModel.Corner, street[3], street[4], street[5]));
                    }
                    else { //Direcciones antiguas.
                        this.formContactData.controls.address.setValue(typescript_string_operations__WEBPACK_IMPORTED_MODULE_16__.String.Format("{0} {1} # {2} - {3}", this.myDataModel.Nomenclature, this.myDataModel.NumberNomenclature, this.myDataModel.Corner, this.myDataModel.DoorNumber));
                    }
                }
            }
            this.setValues();
        }
    }
    setValues() {
        const fullAPIs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([
            this.placeService.getCities(this.myDataModel.Department),
            this.personService.getNeighborhoods(this.myDataModel.City)
        ]).
            pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)((data) => {
            return {
                _city: data[0],
                _neighborhoods: data[1]
            };
        })).subscribe(resp => {
            this.cities = resp._city;
            this.neighborhoods = resp._neighborhoods;
            this.formContactData.controls.city.setValue(this.myDataModel.City);
            this.formContactData.controls.neighborhood.setValue(this.myDataModel.Neighborhood);
        }, error => {
            this.showErrorNotificationModal(error.message);
        });
        this.dataCoveragePercentage = this.myDataModel.DataCoveragePercentage;
        this.setProgressBar(Number(this.myDataModel.DataCoveragePercentage));
        this.formPersonalData.controls.firstName.setValue(this.myDataModel.FirstName);
        this.formPersonalData.controls.secondName.setValue(this.myDataModel.SecondName);
        this.formPersonalData.controls.firstLastName.setValue(this.myDataModel.FirstSurname);
        this.formPersonalData.controls.secondLastName.setValue(this.myDataModel.SecondSurname);
        this.formPersonalData.controls.documentType.setValue(this.myDataModel.DocumentType);
        this.formPersonalData.controls.document.setValue(this.myDataModel.Document);
        this.formPersonalData.controls.gender.setValue(this.myDataModel.Gender.toString());
        this.formPersonalData.controls.date.setValue(this.myDataModel.BirthDate);
        this.formPersonalData.controls.civilStatus.setValue(this.myDataModel.MaritalStatus);
        this.formPersonalData.controls.occupation.setValue(this.myDataModel.Occupation);
        this.formPersonalData.controls.medicalCoverage.setValue(this.myDataModel.MedicalCoverage);
        this.formPersonalData.controls.stratum.setValue(this.myDataModel.Stratum);
        this.formContactData.controls.country.setValue(this.myDataModel.Country);
        this.formContactData.controls.departament.setValue(this.myDataModel.Department);
        this.formContactData.controls.street.setValue(this.myDataModel.Street);
        this.formContactData.controls.doorNumber.setValue(this.myDataModel.DoorNumber);
        this.formContactData.controls.doorBis.setValue(this.myDataModel.Bis);
        this.formContactData.controls.apartamentNumber.setValue(this.myDataModel.Apartment);
        this.formContactData.controls.addressDetails.setValue(this.myDataModel.AddressDetails);
        this.formContactData.controls.officePhoneNumber.setValue(this.myDataModel.OfficePhoneNumber);
        this.formContactData.controls.homePhoneNumber.setValue(this.myDataModel.HomePhoneNumber);
        this.formContactData.controls.cellPhoneNumber.setValue(this.myDataModel.CellPhoneNumber);
        this.formContactData.controls.email.setValue(this.myDataModel.Email);
    }
    setProgressBar(value) {
        this.progressBarModel = new src_app_shared_models_progress_bar_model__WEBPACK_IMPORTED_MODULE_10__.ProgressBarModel();
        this.progressBarModel.radius = 20;
        this.progressBarModel.space = -5;
        this.progressBarModel.percent = value;
        this.progressBarModel.outerStrokeWidth = 5;
        this.progressBarModel.imageSrc = this.imgRoute + 'icons/avatar-icon.svg';
        this.progressBarModel.imageHeight = 30;
        this.progressBarModel.imageWidth = 30;
        this.progressBarModel.showImage = true;
        this.progressBarModel.showBackground = false;
        this.progressBarModel.colorType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_7__.ColorType.Primary;
        this.progressBarModel.innerStrokeColor = '#DDDDDD';
    }
    enabledInputDocument() {
        this.formPersonalData.controls['document'].enable();
        this.formPersonalData.controls.document.value != '' ? this.validateDocument() : '';
    }
    validateDocument() {
        if (this.formPersonalData.controls.document.value != '') {
            let request = new src_app_public_models_requests_document_validation_request__WEBPACK_IMPORTED_MODULE_2__.DocumentValidationRequest();
            request.DocumentType = this.formPersonalData.controls.documentType.value;
            request.Document = this.formPersonalData.controls.document.value;
            this.commonMiddService.validateDocument(request)
                .subscribe(resp => {
                if (resp.StatusCode != 0) {
                    this.showErrorNotificationModal(resp.Message);
                    this.formPersonalData.controls.document.setValue('');
                }
            }, error => {
                this.showErrorNotificationModal(error.message);
            });
        }
    }
    showNotificationModal(subtitle, msg) {
        const initialState = {
            initialState: {
                iconHeader: 'alert-check.svg',
                subTitle: subtitle,
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
        this.bsModalRef = this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_6__.InformativeModalComponent, initialState);
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
        this.bsModalRef = this.modalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_6__.InformativeModalComponent, initialState);
    }
    onlyNumber(event) {
        return (0,src_app_shared_helpers_validator__WEBPACK_IMPORTED_MODULE_8__.onlyNumber)(event);
    }
    enabledFields() {
        this.formPersonalData.controls['gender'].enable();
        this.formPersonalData.controls['civilStatus'].enable();
        this.formPersonalData.controls['occupation'].enable();
        this.formPersonalData.controls['medicalCoverage'].enable();
        this.formPersonalData.controls['stratum'].enable();
        this.formContactData.controls['homePhoneNumber'].enable();
        this.formContactData.controls['officePhoneNumber'].enable();
        this.formContactData.controls['cellPhoneNumber'].enable();
    }
    disabledFields() {
        this.formPersonalData.controls['gender'].disable();
        this.formPersonalData.controls['civilStatus'].disable();
        this.formPersonalData.controls['occupation'].disable();
        this.formPersonalData.controls['medicalCoverage'].disable();
        this.formContactData.controls['homePhoneNumber'].disable();
        this.formContactData.controls['officePhoneNumber'].disable();
        this.formContactData.controls['cellPhoneNumber'].disable();
    }
    update() {
        this.isLoading = true;
        this.mapperMyDataEntity();
        this.myDataService
            .update(this.myDataModel)
            .subscribe(result => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                this.disabledFields();
                //se consulta el afiliado para refrescar progressbar y se muestra mensaje de éxito.
                this.getAffiliate(true, result.Title, result.Message);
            }
            else {
                this.showErrorNotificationModal(result.Message);
            }
        }, error => this.showErrorNotificationModal(error.Message));
    }
    cancel() {
        this.router.navigate(['portal/home'], { replaceUrl: true });
    }
    mapperMyDataEntity() {
        this.myDataModel = new _models_my_data__WEBPACK_IMPORTED_MODULE_15__.MyData();
        this.myDataModel.DocumentType = this.formPersonalData.controls.documentType.value;
        this.myDataModel.Document = this.formPersonalData.controls.document.value;
        this.myDataModel.FirstName = this.formPersonalData.controls.firstName.value;
        this.myDataModel.SecondName = this.formPersonalData.controls.secondName.value;
        this.myDataModel.FirstSurname = this.formPersonalData.controls.firstLastName.value;
        this.myDataModel.SecondSurname = this.formPersonalData.controls.secondLastName.value;
        this.myDataModel.Email = this.formContactData.controls.email.value;
        this.myDataModel.BirthDate = this.formPersonalData.controls.date.value;
        this.myDataModel.Gender = this.formPersonalData.controls.gender.value;
        this.myDataModel.Apartment = this.formContactData.controls.apartamentNumber.value;
        this.myDataModel.AddressDetails = this.formContactData.controls.addressDetails.value;
        this.myDataModel.HomePhoneNumber = this.formContactData.controls.homePhoneNumber.value;
        this.myDataModel.OfficePhoneNumber = this.formContactData.controls.officePhoneNumber.value;
        this.myDataModel.CellPhoneNumber = this.formContactData.controls.cellPhoneNumber.value;
        this.myDataModel.MedicalCoverage = this.formPersonalData.controls.medicalCoverage.value;
        this.myDataModel.Occupation = this.formPersonalData.controls.occupation.value;
        this.myDataModel.MaritalStatus = this.formPersonalData.controls.civilStatus.value;
        this.myDataModel.Department = this.formContactData.controls.departament.value;
        this.myDataModel.City = this.formContactData.controls.city.value;
        this.myDataModel.Street = this.formContactData.controls.street.value;
        this.myDataModel.DoorNumber = this.formContactData.controls.doorNumber.value;
        this.myDataModel.Neighborhood = this.formContactData.controls.neighborhood.value;
        this.myDataModel.Country = this.formContactData.controls.country.value;
        this.myDataModel.Bis = this.formContactData.controls.doorBis.value;
        this.myDataModel.Stratum = this.formPersonalData.controls.stratum.value;
    }
    changeTab() {
        this.showPersonalData ? this.showPersonalData = false : this.showPersonalData = true;
        var tPer = document.getElementById("tabPersonal");
        var tCon = document.getElementById("tabContacto");
        if (this.showPersonalData) {
            tPer.style.backgroundColor = "gainsboro";
            tCon.style.backgroundColor = "white";
        }
        else {
            tPer.style.backgroundColor = "white";
            tCon.style.backgroundColor = "gainsboro";
        }
    }
};
MyDataPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_13__.UrlDataService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder },
    { type: src_app_public_services_person_service__WEBPACK_IMPORTED_MODULE_4__.PersonService },
    { type: src_app_public_services_document_service__WEBPACK_IMPORTED_MODULE_3__.DocumentService },
    { type: src_app_shared_services_common_midd_service__WEBPACK_IMPORTED_MODULE_12__.CommonMiddService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_22__.BsModalService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService },
    { type: src_app_public_services_place_service__WEBPACK_IMPORTED_MODULE_5__.PlaceService },
    { type: _services_my_data_services__WEBPACK_IMPORTED_MODULE_17__.MyDataService }
];
MyDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Component)({
        selector: 'app-my-data',
        template: _my_data_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_data_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyDataPage);



/***/ }),

/***/ 79814:
/*!*******************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-data/services/my-data.services.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDataService": () => (/* binding */ MyDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_shared_services_sentry_handelerror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/sentry.handelerror */ 67533);
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typescript-string-operations */ 49565);






let MyDataService = class MyDataService {
    constructor(http, sentry) {
        this.http = http;
        this.sentry = sentry;
    }
    getAffiliate(userLogin) {
        let params = {
            DocumentType: userLogin.documentType,
            Document: userLogin.document
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Affiliate/GetAffiliate`, params);
    }
    update(user) {
        let params = {
            DocumentType: user.DocumentType,
            Document: user.Document,
            Email: user.Email,
            Gender: user.Gender,
            Department: user.Department,
            City: user.City,
            Neighborhood: user.Neighborhood,
            OfficePhoneNumber: user.OfficePhoneNumber,
            HomePhoneNumber: user.HomePhoneNumber,
            CellPhoneNumber: user.CellPhoneNumber,
            MedicalCoverage: user.MedicalCoverage,
            Childrens: !typescript_string_operations__WEBPACK_IMPORTED_MODULE_2__.String.IsNullOrWhiteSpace(user.Childrens) ? user.Childrens : "0",
            Occupation: user.Occupation,
            MaritalStatus: user.MaritalStatus,
            Stratum: user.Stratum
        };
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}Affiliate/UpdateAffiliate`, params);
    }
};
MyDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: src_app_shared_services_sentry_handelerror__WEBPACK_IMPORTED_MODULE_1__.SentryHandelError }
];
MyDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], MyDataService);



/***/ }),

/***/ 35534:
/*!*****************************************************!*\
  !*** ./src/app/shared/models/progress-bar-model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarModel": () => (/* binding */ ProgressBarModel)
/* harmony export */ });
class ProgressBarModel {
}


/***/ }),

/***/ 21924:
/*!*******************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-data/my-data.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n:root ion-select {\n  font-size: medium;\n}\n:root ion-select-option {\n  font-size: medium;\n}\n.sc-ion-alert-ios-h {\n  --max-width: 85% !important;\n  --width: 85% !important;\n  font-size: medium !important;\n}\n.title-percentage {\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n  color: #000000;\n}\n.subtitle-percentage {\n  font-style: normal;\n  font-weight: 800;\n  line-height: 20px;\n  color: #000000;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n  font-family: \"Mark OT\", sans-serif;\n}\nion-item {\n  border: none !important;\n}\nion-row {\n  margin-bottom: 5px !important;\n}\na {\n  color: #FF1E2D;\n  font-weight: bold;\n}\nion-label {\n  pointer-events: all !important;\n}\n.title-secondary {\n  font-size: small;\n}\n#tabPersonal,\n#tabContacto {\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid gainsboro;\n}\n.tabPorcentaje {\n  display: flex;\n  justify-content: center;\n}\n.tabLeyendaPorcentaje {\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid gainsboro;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWRhdGEucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQWlDSjtBQWhDSTtFQUNJLGlCQUFBO0FBa0NSO0FBaENJO0VBQ0ksaUJBQUE7QUFrQ1I7QUE5QkE7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBaUNKO0FBOUJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQWlDSjtBQTlCQTtFQUNJLHVCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksNkJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxjQzlDWTtFRCtDWixpQkFBQTtBQWlDSjtBQTlCQTtFQUNJLDhCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksZ0JBQUE7QUFpQ0o7QUE5QkE7O0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtBQWlDSiIsImZpbGUiOiJteS1kYXRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2Nzc1wiO1xuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgfVxuICAgIGlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgfVxufVxuXG4uc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgICAtLW1heC13aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgLS13aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiBtZWRpdW0gIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLXBlcmNlbnRhZ2Uge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3VidGl0bGUtcGVyY2VudGFnZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBmb250LWZhbWlseTogJ01hcmsgT1QnLCBzYW5zLXNlcmlmO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtc2Vjb25kYXJ5IHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4jdGFiUGVyc29uYWwsXG4jdGFiQ29udGFjdG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdhaW5zYm9ybztcbn1cblxuLnRhYlBvcmNlbnRhamUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWJMZXllbmRhUG9yY2VudGFqZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ2FpbnNib3JvO1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 76319:
/*!*******************************************************************************!*\
  !*** ./src/app/portal/moduls/my-account/my-data/my-data.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-title>Mis datos</ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row>\n        <ion-col size=\"6\" id=\"tabPersonal\">\n            <ion-label class=\"title-secondary\" (click)=\"changeTab();\">Datos personales</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" id=\"tabContacto\">\n            <ion-label class=\"title-secondary\" (click)=\"changeTab();\">Datos de contacto</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n        <ion-item>\n            <app-progress-bar [progressBarModel]=\"progressBarModel\" *ngIf=\"progressBarModel\"></app-progress-bar>\n        </ion-item>\n    </ion-row> -->\n\n    <ion-row>\n        <ion-col size=\"6\" class=\"tabPorcentaje\">\n            <span class=\"subtitle-percentage\">{{dataCoveragePercentage}}% completado</span>\n        </ion-col>\n        <ion-col size=\"6\" class=\"tabPorcentaje\">\n            <ion-label class=\"title-secondary\" (click)=\"enabledFields();\">Actualizar</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col size=\"12\" class=\"tabLeyendaPorcentaje\">\n            <ion-label class=\"subtitle-percentage\">Completa tus datos hasta llegar al 100%</ion-label>\n        </ion-col>\n    </ion-row>\n\n    <div *ngIf=\"showPersonalData\">\n\n        <form [formGroup]=\"formPersonalData\">\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.firstName' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"firstName\" formControlName=\"firstName\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.firstName.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.firstName.hasError('pattern')\">\n                        {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.secondName' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"secondName\" formControlName=\"secondName\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.secondName.hasError('pattern')\">\n                        {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.firstLastName' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"firstLastName\" formControlName=\"firstLastName\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.firstLastName.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.firstLastName.hasError('pattern')\">\n                        {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.secondLastName' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"secondLastName\" formControlName=\"secondLastName\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.secondLastName.hasError('pattern')\">\n                        {{'PUBLIC.SHARED.noSpecialCharacter' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.documentType' | translate}}</ion-label>\n                    <ion-select id=\"documentType\" formControlName=\"documentType\" (ionChange)=\"enabledInputDocument()\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of docType\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.documentType.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.documentNumber' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"document\" formControlName=\"document\" (ionBlur)=\"validateDocument()\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.document.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.gender' | translate}}</ion-label>\n                    <ion-select id=\"gender\" formControlName=\"gender\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of gender\">\n                            {{item.Name}}\n                        </ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.gender.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.birthday' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"date\" formControlName=\"date\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formPersonalData.controls.date.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.civilStatus' | translate}}</ion-label>\n                    <ion-select id=\"civilStatus\" formControlName=\"civilStatus\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of civilStatusEntity\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.occupation' | translate}}</ion-label>\n                    <ion-select id=\"occupation\" formControlName=\"occupation\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of occupationEntity\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.medicalCoverage' | translate}}</ion-label>\n                    <ion-select id=\"medicalCoverage\" formControlName=\"medicalCoverage\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of medicalCoverageEntity\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-row>\n\n            <ion-row *ngIf=\"_environment.country == 'co'\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.stratum' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"stratum\" formControlName=\"stratum\"></ion-input>\n                </ion-item>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"configurationButtonCancel\" (click)=\"cancel()\"></app-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"configurationButtonSave\" [disabled]=\"formPersonalData.invalid || formPersonalData.status == 'DISABLED'\" (click)=\"update()\"></app-button>\n                </ion-col>\n            </ion-row>\n\n        </form>\n\n    </div>\n\n    <!-- Uruguay -->\n\n    <div *ngIf=\"!showPersonalData && _environment.country=='uy'\">\n\n        <form [formGroup]=\"formContactData\">\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.country' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"country\" formControlName=\"country\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.country.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.departament' | translate}}</ion-label>\n                    <ion-select id=\"departament\" formControlName=\"departament\" (ionChange)=\"onChangeDepartment()\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of departament\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.departament.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.locality' | translate}}</ion-label>\n                    <ion-select id=\"city\" formControlName=\"city\" (ionChange)=\"onChangeCity()\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of cities\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.city.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.neighborhood' | translate}}</ion-label>\n                    <ion-select id=\"neighborhood\" formControlName=\"neighborhood\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Code}}\" *ngFor=\"let item of neighborhoods\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.neighborhood.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.street' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"street\" formControlName=\"street\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.street.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.doorNumber' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"doorNumber\" formControlName=\"doorNumber\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.doorNumber.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.bis' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"doorBis\" formControlName=\"doorBis\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.doorBis.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.apartamentNumber' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"apartamentNumber\" formControlName=\"apartamentNumber\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.apartamentNumber.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.addressDetails' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"addressDetails\" formControlName=\"addressDetails\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.apartamentNumber.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}</span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.homePhoneNumber' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"homePhoneNumber\" formControlName=\"homePhoneNumber\" [maxlength]=\"_environment.lengthPhone\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.homePhoneNumber.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.officePhoneNumber' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"officePhoneNumber\" formControlName=\"officePhoneNumber\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.officePhoneNumber.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.cellPhone' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"cellPhoneNumber\" formControlName=\"cellPhoneNumber\" [maxlength]=\"_environment.lengthCell\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.cellPhoneNumber.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"!this.formContactData.controls.cellPhoneNumber.hasError('required') && this.formContactData.controls.cellPhoneNumber.hasError('invalidNumber')\">\n                        {{'PUBLIC.SHARED.startNumber' | translate}} {{_environment.startNumberCell}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.email' | translate}}</ion-label>\n                    <ion-input type=\"email\" id=\"email\" formControlName=\"email\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.email.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"configurationButtonCancel\" (click)=\"cancel()\"></app-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <app-button [configuration]=\"configurationButtonSave\" [disabled]=\"formContactData.invalid  || formContactData.status == 'DISABLED'\" (click)=\"update()\">\n                    </app-button>\n                </ion-col>\n            </ion-row>\n\n        </form>\n\n    </div>\n\n    <!-- Colombia -->\n\n    <div *ngIf=\"!showPersonalData && _environment.country=='co'\">\n\n        <form [formGroup]=\"formContactData\">\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.country' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"country\" formControlName=\"country\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.country.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.departament' | translate}}</ion-label>\n                    <ion-select id=\"departament\" formControlName=\"departament\" (ionChange)=\"onChangeDepartment()\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Name}}\" *ngFor=\"let item of departament\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.departament.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.localidad' | translate}}</ion-label>\n                    <ion-select id=\"city\" formControlName=\"city\" (ionChange)=\"onChangeCity()\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Name}}\" *ngFor=\"let item of cities\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.city.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.neighborhood' | translate}}</ion-label>\n                    <ion-select id=\"neighborhood\" formControlName=\"neighborhood\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\" mode=\"ios\">\n                        <ion-select-option value=\"{{item.Name}}\" *ngFor=\"let item of neighborhoods\">\n                            {{item.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.neighborhood.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.address' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"address\" formControlName=\"address\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.street.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.apartamentNumber' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"apartamentNumber\" formControlName=\"apartamentNumber\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.apartamentNumber.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.addressDetails' | translate}}</ion-label>\n                    <ion-input type=\"text\" id=\"addressDetails\" formControlName=\"addressDetails\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.addressDetails.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.homePhoneNumber' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"homePhoneNumber\" formControlName=\"homePhoneNumber\" [maxlength]=\"_environment.lengthPhone\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.homePhoneNumber.hasError('required')\">\n                        {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                    </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.officePhoneNumber' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"officePhoneNumber\" formControlName=\"officePhoneNumber\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.officePhoneNumber.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PUBLIC.REGISTRATION.cellPhone' | translate}}</ion-label>\n                    <ion-input type=\"number\" id=\"cellPhoneNumber\" formControlName=\"cellPhoneNumber\" [maxlength]=\"_environment.lengthCell\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.cellPhoneNumber.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                </span>\n                </ion-col>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"!this.formContactData.controls.cellPhoneNumber.hasError('required') && this.formContactData.controls.cellPhoneNumber.hasError('invalidNumber')\">\n                    {{'PUBLIC.SHARED.startNumber' | translate}} {{_environment.startNumberCell}}\n                </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label position=\"floating\">{{'PORTAL.MYDATA.email' | translate}}</ion-label>\n                    <ion-input type=\"email\" id=\"email\" formControlName=\"email\"></ion-input>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <span class=\"ion-validator\" *ngIf=\"this.formContactData.controls.email.hasError('required')\">\n                    {{'PUBLIC.SHARED.obligatotyField' | translate}}\n                </span>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-col>\n                    <app-button [configuration]=\"configurationButtonCancel\" (click)=\"cancel()\"></app-button>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-padding-top\">\n                <ion-col>\n                    <app-button [configuration]=\"configurationButtonSave\" [disabled]=\"formContactData.invalid  || formContactData.status == 'DISABLED'\" (click)=\"update()\"></app-button>\n                </ion-col>\n            </ion-row>\n\n        </form>\n\n    </div>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_my-account_my-data_my-data_module_ts.js.map