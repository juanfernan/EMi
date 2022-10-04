"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_portal_moduls_medical-centers_medical-centers_module_ts"],{

/***/ 1685:
/*!************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/clinic-details/clinic-details.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicDetailsPage": () => (/* binding */ ClinicDetailsPage),
/* harmony export */   "RouteDirective": () => (/* binding */ RouteDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _clinic_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinic-details.page.html?ngResource */ 1108);
/* harmony import */ var _clinic_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinic-details.page.scss?ngResource */ 98122);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_clinics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/clinics */ 33694);
/* harmony import */ var _services_medical_centers_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/medical-centers-general.service */ 31146);















let RouteDirective = class RouteDirective {
    constructor(googlemapsAPI, router) {
        this.googlemapsAPI = googlemapsAPI;
        this.router = router;
        this.origin = {};
        this.destination = {};
        this.travelMode = '';
        this.sendDistance = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.sendErrorMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.arrive = { distance: "", duration: "" };
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagesRoute;
    }
    ngOnChanges() {
        if (this.travelMode != '') {
            this.howArrive();
            this.calculateDistance();
        }
    }
    howArrive() {
        const that = this;
        this.googlemapsAPI.getNativeMap().then((map) => {
            var directionsService = new google.maps.DirectionsService();
            that.directionsDisplay.setMap(map);
            directionsService.route({
                origin: { lat: this.origin.Latitud, lng: this.origin.Longitud },
                destination: { lat: this.destination.Latitude, lng: this.destination.Longitude },
                travelMode: this.travelMode
            }, function (response, status) {
                if (status === 'OK') {
                    that.directionsDisplay.setDirections(response);
                    that.sendErrorMessage.emit(false);
                }
                else {
                    that.sendErrorMessage.emit(true);
                }
            });
        }, err => {
            // TODO mostrar el error en modal
            console.log('error en como llegar: ', err);
        });
    }
    calculateDistance() {
        const that = this;
        this.googlemapsAPI.getNativeMap().then((map) => {
            var directionsService = new google.maps.DistanceMatrixService();
            directionsService.getDistanceMatrix({
                origins: [{ lat: this.origin.Latitud, lng: this.origin.Longitud }],
                destinations: [{ lat: this.destination.Latitude, lng: this.destination.Longitude }],
                travelMode: this.travelMode
            }, function (response, status) {
                if (status === 'OK') {
                    that.results = response.rows[0].elements;
                    if (that.results[0].status === "OK") {
                        that.distance = that.results[0].distance.text;
                        that.duration = that.results[0].duration.text;
                        that.arrive = { distance: that.results[0].distance.text, duration: that.results[0].duration.text };
                        that.sendDistance.emit(that.arrive);
                    }
                }
                else {
                    // TODO mostrar el error en modal
                    console.log('Error al mostrar la distancia - status: ', status);
                }
            });
        });
    }
};
RouteDirective.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_10__.GoogleMapsAPIWrapper },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
RouteDirective.propDecorators = {
    origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    destination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    travelMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    sendDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }],
    sendErrorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output }]
};
RouteDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive)({
        selector: 'route-directive'
    })
], RouteDirective);

let ClinicDetailsPage = class ClinicDetailsPage {
    constructor(medicalCentersService, route, translate, modalService, router, urlDataService, mapsAPILoader, googlemapsAPI) {
        this.medicalCentersService = medicalCentersService;
        this.route = route;
        this.modalService = modalService;
        this.router = router;
        this.urlDataService = urlDataService;
        this.mapsAPILoader = mapsAPILoader;
        this.googlemapsAPI = googlemapsAPI;
        this.isCollapsed = false;
        this.clinics = {};
        this.currentLocation = new _models_clinics__WEBPACK_IMPORTED_MODULE_7__.Clinic();
        this.travelMode = '';
        this.zoom = -10;
        this.distance = "";
        this.urlDataService.setHeaderNavPortal(['Centros Médicos', 'Detalles']);
        this.translate = translate;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.country);
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.imagesRoute;
        this.country = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.country;
        this.configurationButtonCoordinate = this.generateButton('Coordinar');
        this.configurationButtonCall = this.generateButton('Llamar');
    }
    generateButton(text) {
        let configurationButton = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_4__.ButtonConfiguration();
        configurationButton.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_3__.ButtonType.Primary;
        configurationButton.text = text;
        configurationButton.width = "140px";
        return configurationButton;
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
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.patientDirectionLatitude = Number(this.route.snapshot.paramMap.get('patientDirectionLatitude'));
            this.patientDirectionLongitude = Number(this.route.snapshot.paramMap.get('patientDirectionLongitude'));
            // Validando flujo que toma el usuario, si hay coordenadas, mostrando este nuevo flujo
            if (this.patientDirectionLongitude == '0' || this.patientDirectionLongitude == null || this.patientDirectionLongitude.length < 1 ||
                this.patientDirectionLatitude == '0' || this.patientDirectionLatitude == null || this.patientDirectionLatitude.length < 1) {
                this.validationCoordsPatient = true;
            }
            else {
                this.validationCoordsPatient = false;
            }
            try {
                this.sub = this.route.params.subscribe(params => {
                    this.code = +params['code'];
                });
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        this.getLocation(position.coords);
                    });
                }
                this.getClinics();
            }
            catch (error) {
                // TODO mostrar el error en modal
                console.log(error);
            }
        });
    }
    goBack() {
        window.history.back();
    }
    getClinics() {
        return this.medicalCentersService
            .getClinicsNearby('Coordinations/MedicalCenters').subscribe((result) => {
            this.clinics = result['MedicalCenterSchedules'];
            this.clinics.forEach((m) => {
                m.Latitude = Number(m.Latitude);
                m.Longitude = Number(m.Longitude);
            });
            //SetBounds
            let clinicInfo;
            this.clinics.forEach((m) => {
                if (Number(m.ClinicCode) === this.code) {
                    clinicInfo = m;
                }
            });
            this.mapsAPILoader.load().then(() => {
                this.latlngBounds = new window['google'].maps.LatLngBounds();
                this.latlngBounds.extend(new window['google'].maps.LatLng(this.clinics.Latitude, this.clinics.Longitude));
                this.zoom = 1;
                this.mapElement.zoom = 5;
            });
            this.clinics = clinicInfo;
        }, error => this.ErrorRegister(error));
    }
    getLocation(position) {
        this.currentLocation.Latitud = position.latitude;
        this.currentLocation.Longitud = position.longitude;
    }
    setTravelMode(mode) {
        this.travelMode = mode;
    }
    showModalErrorHowArrive(event) {
        // TODO Autorizar Distance Matrix en OP de google
        this.bsModalRef = this.generateInformativeModal('Error al mostrar la ruta', 'El modo de viaje, en tu ubicación no se encuentra disponible.', true);
    }
    showDistance(event) {
        this.distance = event.distance;
    }
    call() {
        this.bsModalRef = this.generateInformativeModal('Línea de atención', 'Comunícate a la línea de atención del centro de coordinación de centros médicos 24873333', true);
    }
    coordinate() {
        this.router.navigate(['/portal/admin/clinics/coordinations'], { replaceUrl: true });
    }
    ErrorRegister(error) {
        this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'No se pudo procesar la solicitud, por favor inténtelo más tarde.', true);
    }
};
ClinicDetailsPage.ctorParameters = () => [
    { type: _services_medical_centers_general_service__WEBPACK_IMPORTED_MODULE_8__.MedicalCentersGeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.BsModalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_5__.UrlDataService },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_10__.MapsAPILoader },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_10__.GoogleMapsAPIWrapper }
];
ClinicDetailsPage.propDecorators = {
    routeDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [RouteDirective,] }],
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_agm_core__WEBPACK_IMPORTED_MODULE_10__.AgmMap,] }]
};
ClinicDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-clinic-details',
        template: _clinic_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_clinic_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClinicDetailsPage);



/***/ }),

/***/ 5085:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/details-pending-coordinations/details-pending-coordinations.page.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPendingCoordinationsPage": () => (/* binding */ DetailsPendingCoordinationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_pending_coordinations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-pending-coordinations.page.html?ngResource */ 25749);
/* harmony import */ var _details_pending_coordinations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-pending-coordinations.page.scss?ngResource */ 97987);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _service_solicitud_services_portal_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service-solicitud/services/portal-common.service */ 29014);
/* harmony import */ var _services_details_pending_coordinations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/details-pending-coordinations.service */ 92013);











let DetailsPendingCoordinationsPage = class DetailsPendingCoordinationsPage {
    constructor(commonService, translate, detailsPendingCoordinationService, bsModalService) {
        this.commonService = commonService;
        this.detailsPendingCoordinationService = detailsPendingCoordinationService;
        this.bsModalService = bsModalService;
        this.confirmResult = null;
        this.returnToList = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.translate = translate;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.country);
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.latitude = Number(this.objDetail.detail.MedicalCenter.Latitude);
        this.longitude = Number(this.objDetail.detail.MedicalCenter.Longitude);
    }
    call() {
        const initialState = {
            initialState: {
                iconHeader: 'alert-check.svg',
                subTitle: 'Línea de atención',
                description: 'Comunícate a la línea de atención del centro de coordinación de centros médicos 24873333',
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
        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
    returnList(event) {
        this.returnToList.emit({ showlist: false, showdetail: true });
    }
    cancelCoordination() {
        this.bsModalRef = this.generateComposeInformativeModal('Confirmación', '¿Estás seguro que deseas cancelar la coordinación?', true);
        this.bsModalRef.content.onClose.subscribe((isConfirmed) => {
            this.confirmResult = isConfirmed;
            if (this.confirmResult === true) {
                this.detailsPendingCoordinationService
                    .cancelCoordination(localStorage.getItem("registerId"), this.objDetail.detail.AgendaType, this.objDetail.detail.RDACode, this.objDetail.detail.MedicalCenter.ClinicCode, this.objDetail.detail.SpecialityCode, this.objDetail.detail.YearMonthDay, this.objDetail.detail.Time, this.objDetail.detail.Document, localStorage.getItem("CellPhone"), localStorage.getItem("userName"))
                    .subscribe((result) => {
                    if (result.StatusCode === 0) {
                        const initialState = {
                            initialState: {
                                iconHeader: 'alert-check.svg',
                                subTitle: result.Title,
                                description: result.Message,
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
                        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
                    }
                    else {
                        const initialState = {
                            initialState: {
                                iconHeader: 'alert-circle.svg',
                                subTitle: result.Title,
                                description: result.Message,
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
                        this.bsModalRef = this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
                    }
                }, error => this.ReponseError(error));
            }
            else {
            }
        });
    }
    ReponseError(error) {
        //this.dialogService.removeAll();
    }
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
        return this.bsModalService.show(src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__.InformativeModalComponent, initialState);
    }
};
DetailsPendingCoordinationsPage.ctorParameters = () => [
    { type: _service_solicitud_services_portal_common_service__WEBPACK_IMPORTED_MODULE_4__.PortalCommonService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _services_details_pending_coordinations_service__WEBPACK_IMPORTED_MODULE_5__.DetailsPendingCoordinationsService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__.BsModalService }
];
DetailsPendingCoordinationsPage.propDecorators = {
    agmMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_agm_core__WEBPACK_IMPORTED_MODULE_9__.AgmMap,] }],
    objDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    returnToList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
DetailsPendingCoordinationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-details-pending-coordinations',
        template: _details_pending_coordinations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_pending_coordinations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsPendingCoordinationsPage);



/***/ }),

/***/ 45599:
/*!********************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/main-coordinations/main-coordinations.page.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainCoordinationsPage": () => (/* binding */ MainCoordinationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _main_coordinations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-coordinations.page.html?ngResource */ 95648);
/* harmony import */ var _main_coordinations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-coordinations.page.scss?ngResource */ 89648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/globalServiceVariables */ 83895);
/* harmony import */ var _new_coordination_new_coordination_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-coordination/new-coordination.page */ 69825);
/* harmony import */ var _pending_coordinations_pending_coordinations_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pending-coordinations/pending-coordinations.page */ 82641);










let MainCoordinationsPage = class MainCoordinationsPage {
    constructor(translate, route, globalServiceVariables) {
        this.route = route;
        this.globalServiceVariables = globalServiceVariables;
        this.showNewCoordinations = true;
        this.showNewCoordinationForm = false;
        this.detailCoordination = { detail: { MedicalCenter: { "Latitude": 0, "Longitude": 0 } } };
        this.newCoordinationConfirm = { PendingCoordinations: [{ MedicalCenter: { "Latitude": 0, "Longitude": 0 } }] };
        this.coordination = { SpecialityCode: 0 };
        this.showDetailPendingCoordination = true;
        this.showPendingCoordinationsList = false;
        this.reloadCoordinations = false;
        this.reloadNewCoordination = false;
        this.translate = translate;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.country);
    }
    ngOnInit() {
        localStorage.setItem("urlItemMenu", null);
        this.globalServiceVariables.pageTitle = "Solicitar servicio de coordinaciones en centros médicos";
    }
    ngAfterViewInit() {
        let chatData = this.route.snapshot.data;
        // let scriptChatLoaded = localStorage.getItem("scriptChatLoaded");
        // if(scriptChatLoaded === "true"){
    }
    //Para mostrar el detalle de la coordinación.
    showPendingCoordinationDetail(event) {
        this.detailCoordination = event;
        this.showPendingCoordinationsList = true;
        this.showDetailPendingCoordination = false;
    }
    //Para retornar a la lista de coordinaciones pendientes desde el detalle.
    returnPendingCoordinations(event) {
        this.showPendingCoordinationsList = event.showlist;
        this.showDetailPendingCoordination = event.showdetail;
        this.showNewCoordinations = false;
    }
    //Para retornar a la lista de coordinaciones pendientes desde nueva coordinación.
    returnList() {
        //$("#pendingCoordinationsTab").click();
    }
    NewCoordinations() {
        this.newCoordinationOneComponent.loadData();
        this.newCoordinationOneComponent.VisibleOne();
    }
    ShowNewCoordinations() {
        this.showNewCoordinations = true;
    }
    PendingCoordinations() {
        this.pendingCoordinationsComponent.LoadPending();
    }
    reloadPendingCoordinations(event) {
        this.reloadCoordinations = event;
    }
    reloadNewCoordinations(event) {
        this.reloadNewCoordination = event;
    }
};
MainCoordinationsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_3__.GlobalServiceVariables }
];
MainCoordinationsPage.propDecorators = {
    newCoordinationOneComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_new_coordination_new_coordination_page__WEBPACK_IMPORTED_MODULE_4__.NewCoordinationPage,] }],
    pendingCoordinationsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_pending_coordinations_pending_coordinations_page__WEBPACK_IMPORTED_MODULE_5__.PendingCoordinationsPage,] }]
};
MainCoordinationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-main-coordinations',
        template: _main_coordinations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_coordinations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainCoordinationsPage);



/***/ }),

/***/ 69825:
/*!****************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/new-coordination/new-coordination.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewCoordinationPage": () => (/* binding */ NewCoordinationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_coordination_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-coordination.page.html?ngResource */ 33257);
/* harmony import */ var _new_coordination_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-coordination.page.scss?ngResource */ 65207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/user-login */ 20743);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _service_solicitud_services_portal_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service-solicitud/services/portal-common.service */ 29014);
/* harmony import */ var _models_ConfirmCoordination_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/ConfirmCoordination.model */ 84351);
/* harmony import */ var _models_paymentForm_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/paymentForm.model */ 73307);
/* harmony import */ var _services_details_pending_coordinations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/details-pending-coordinations.service */ 92013);
/* harmony import */ var _services_new_coordinations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/new-coordinations.service */ 86451);
/* harmony import */ var _shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var _configs_button_configurations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../configs/button-configurations */ 65538);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ 93333);
















let NewCoordinationPage = class NewCoordinationPage {
    constructor(commonService, translate, newCoordinationsService, bsModalService, detailsPendingCoordinationService) {
        this.commonService = commonService;
        this.newCoordinationsService = newCoordinationsService;
        this.bsModalService = bsModalService;
        this.detailsPendingCoordinationService = detailsPendingCoordinationService;
        this.servicesTypes = [];
        this.familyMembers = [];
        this.coordination = new _models_ConfirmCoordination_model__WEBPACK_IMPORTED_MODULE_5__.ConfirmCoordination();
        this.hiddenLabelSchedule = true;
        this.disabledButton = true;
        this.servicesTypesRequired = false;
        this.hiddenStepOne = false;
        this.hiddenStepTwo = true;
        this.hiddenStepThree = true;
        this.continueButtonConfig = _configs_button_configurations__WEBPACK_IMPORTED_MODULE_10__.continueButtonConfigExport;
        this.payButtonConfig = _configs_button_configurations__WEBPACK_IMPORTED_MODULE_10__.PayButtonConfigExport;
        this.payCoordinationButtonConfig = _configs_button_configurations__WEBPACK_IMPORTED_MODULE_10__.PayCoordinationButtonConfigExport;
        this.hiddenRecommendations = true;
        this.hiddenButtons = false;
        this.paymentForm = new _models_paymentForm_model__WEBPACK_IMPORTED_MODULE_6__.PaymentForm();
        this.paymentMethodDebitInvoiceCode = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.paymentMethodDebitInvoiceCode;
        this.userLogin = new src_app_shared_models_user_login__WEBPACK_IMPORTED_MODULE_2__.UserLogin();
        this.reloadNewCoordination = false;
        this.returnToList = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.tokenCreated = false;
        this.whoDisabled = true;
        this.disableMedicalCenter = false;
        this.isLoading = false;
        this.translate = translate;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imagesRoute;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.country);
        //Aquí se configuran los scripts de pago.
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api_siemprepago && src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ig_payment) {
            // PWCheckout.
            this.load_scripts([src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.api_siemprepago, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ig_payment], () => {
            });
        }
    }
    getCardImage(card) {
        if (card) {
            return `${this.imgRoute}${card.replace('-icon', '.jpg').replace('pay ', '')}`;
        }
        else {
            return `${this.imgRoute}tarjetadef.jpg`;
        }
    }
    ngOnInit() {
        this.loadData();
        this.VisibleOne();
    }
    getParam(param) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'), sParameterName, i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == param) {
                return sParameterName[1];
            }
        }
        return null;
    }
    loadData() {
        this.cleanFields();
        this.registerId = localStorage.getItem("registerId");
        this.coordination.IdReference = this.registerId;
        this.coordination.UserEmail = localStorage.getItem("userName");
        this.coordination.Token = "1234567890";
        this.hiddenRecommendations = true;
        this.hiddenButtons = false;
        this.userLogin.documentType = localStorage.getItem("documentType");
        this.userLogin.document = localStorage.getItem("document");
        this.userLogin.idReference = this.registerId;
        this.initializeObject();
        this.getPersons();
    }
    VisibleOne() {
        //$(window).scrollTop(0);
        this.hiddenStepOne = false;
        this.hiddenStepTwo = true;
        this.hiddenStepThree = true;
    }
    VisibleTwo() {
        //$(window).scrollTop(0);
        this.hiddenStepOne = true;
        this.hiddenStepTwo = false;
        this.hiddenStepThree = true;
        if (Number(this.coordination.Price) > 0) {
            this.hiddenPayment = false;
        }
        else {
            this.hiddenPayment = true;
        }
    }
    VisibleThree() {
        localStorage.setItem('tokenCreated', 'false');
        //$(window).scrollTop(0);
        this.hiddenStepOne = true;
        this.hiddenStepTwo = true;
        this.hiddenStepThree = false;
        this.coordination.Installments = "";
        this.getPaymentMethods();
    }
    initializeObject() {
        this.coordination.Number = "";
        this.coordination.ServicesType = "";
        this.coordination.SpecialityCode = "";
        this.coordination.ClinicCode = "";
        this.coordination.DocumentType = "";
        this.coordination.Number = "";
        this.coordination.Phone = "";
        this.coordination.Email = "";
    }
    getPersons() {
        this.isLoading = true;
        this.commonService
            .getPersons(this.userLogin)
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                this.persons = result.Beneficiaries;
                let document = this.getParam('document') ? atob(this.getParam('document')) : "";
                if (document !== "" && result.Beneficiaries != null && result.Beneficiaries.length > 0) {
                    this.coordinationData(document);
                    this.whoDisabled = true;
                }
                else {
                    this.whoDisabled = false;
                }
                this.getServicesTypes();
            }
            else {
                this.isLoading = false;
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true);
            }
            this.isLoading = false;
        }, (error) => {
            this.ErrorRegister(error);
            this.isLoading = false;
        });
    }
    coordinationData(documento) {
        let selectedPerson = this.persons.filter((obj) => obj.Document === documento);
        this.coordination.DocumentType = selectedPerson[0].DocumentType;
        this.coordination.Number = documento;
        this.coordination.Phone = (selectedPerson[0].CellPhone === null || selectedPerson[0].CellPhone === '') ? "090000000" : selectedPerson[0].CellPhone;
        this.coordination.Email = (selectedPerson[0].Email === null || selectedPerson[0].Email === '') ? "test@hotmail.com" : selectedPerson[0].Email;
        this.coordination.FullNames = selectedPerson[0].FullNames;
    }
    onChangeSelectPerson(documentEvent) {
        this.coordinationData(documentEvent.target.value);
    }
    getServicesTypes() {
        this.isLoading = true;
        this.newCoordinationsService
            .getServicesTypes('DataLists/GetServiceTypes')
            .subscribe((result) => {
            this.servicesTypes = result.DataList;
            this.reloadNewCoordination = false;
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
    }
    onChangeFamily(document) {
        this.familyMembers.forEach((element) => {
            if (element.Document === document) {
                this.coordination.DocumentType = element.DocumentType;
                this.coordination.Phone = element.Phone;
                this.coordination.Email = element.Email;
                this.coordination.FullNames = element.FullNames;
            }
        });
    }
    getSpecialties(serviceTypeId) {
        this.isLoading = true;
        this.newCoordinationsService
            .getSpecialties(serviceTypeId)
            .subscribe((result) => {
            this.specialties = result['MedicalSpecialites'];
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
    }
    onChangeSpeciality(codeEvent) {
        const code = codeEvent.target.value;
        if (code != null && code != "") {
            let specialtySelected = this.specialties.filter((obj) => obj.Code === code);
            this.coordination.SpecialityName = specialtySelected[0].Description;
            this.cleanDependenciesSpeciality();
            this.getMedicalCenterSchedules(specialtySelected[0]);
        }
        else {
            this.cleanDependenciesSpeciality();
        }
    }
    cleanDependenciesSpeciality() {
        this.coordination.ClinicCode = "";
        this.schedules = [];
        this.schedules1 = [];
        this.schedules2 = [];
        this.schedules3 = [];
        this.hiddenLabelSchedule = true;
        this.disabledButton = true;
        this.medicalCenterSchedules = [];
    }
    onChangeServicesTypes(serviceTypeIdEvent) {
        const serviceTypeId = serviceTypeIdEvent.target.value;
        if (serviceTypeId != null && serviceTypeId != "") {
            if (Number(serviceTypeId) >= 0) {
                this.servicesTypesRequired = false;
            }
            this.servicesTypes.forEach((element) => {
                if (element.Code === serviceTypeId) {
                    this.coordination.ServicesTypeName = element.Name;
                }
            });
            // Limpiar campos dependientes y volver a consultar
            this.cleanDependenciesServicesTypes();
            this.getSpecialties(serviceTypeId);
        }
        else {
            this.servicesTypesRequired = true;
            this.disabledButton = true;
            // Limpiar campos dependientes
            this.cleanDependenciesServicesTypes();
        }
    }
    cleanDependenciesServicesTypes() {
        this.schedules = [];
        this.schedules1 = [];
        this.schedules2 = [];
        this.schedules3 = [];
        this.medicalCenterSchedules = [];
        this.specialties = [];
        this.hiddenLabelSchedule = true;
        this.coordination.ClinicCode = "";
        this.coordination.SpecialityCode = "";
    }
    preConfirmCoordination() {
        this.isLoading = true;
        this.coordination.Phone = "090000000";
        this.newCoordinationsService
            .preConfirmCoordination(this.coordination)
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                this.preConfirm = result.PreConfirm;
                this.coordination.Price = this.preConfirm.Price;
                this.coordination.ClinicAddress = this.preConfirm.ClinicAddress;
                this.coordination.PatientCode = this.preConfirm.PatientCode;
                this.coordination.ProductCode = this.preConfirm.ProductCode;
                this.VisibleTwo();
                // Cargar mapa
                this.latitude = Number(this.preConfirm.Latitude);
                this.longitude = Number(this.preConfirm.Longitude);
                // this.agmMap.triggerResize();
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true);
            }
            localStorage.setItem('tokenCreated', 'false');
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
    }
    confirmCoordination() {
        this.isLoading = true;
        this.newCoordinationsService
            .confirmCoordination(this.coordination)
            .subscribe((result) => {
            if (result.StatusCode === 0) {
                this.isLoading = false;
                this.coordination.Recommendations = result.Recommendations === "" ? "No se encontraron recomendaciones." : result.Recommendations;
                this.hiddenRecommendations = false;
                this.hiddenButtons = true;
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false);
            }
            else {
                this.hiddenRecommendations = true;
                this.hiddenButtons = false;
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true);
            }
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
    }
    cleanFields() {
        this.coordination.ClinicAddress = "";
        this.coordination.ClinicCode = "";
        this.coordination.ClinicName = "";
        this.coordination.Date = "";
        this.coordination.Installments = "";
        this.coordination.LocalCode = "";
        this.coordination.PaymentMethodCode = "";
        this.coordination.PaymentMethodName = "";
        this.coordination.Price = "";
        this.coordination.ProductCode = "";
        this.coordination.Recommendations = "";
        this.coordination.ServicesType = "";
        this.coordination.ServicesTypeName = "";
        this.coordination.SpecialityCode = "";
        this.coordination.SpecialityName = "";
        this.coordination.Time = "";
        this.coordination.TrxToken = "";
        this.coordination.YearMonthDay = "";
        this.schedules = [];
        this.schedules1 = [];
        this.schedules2 = [];
        this.schedules3 = [];
        this.hiddenLabelSchedule = true;
        this.disabledButton = true;
        this.servicesTypesRequired = true;
    }
    getMedicalCenterSchedules(specialtySelected) {
        this.isLoading = true;
        this.newCoordinationsService
            .getMedicalCenterSchedules('Coordinations/MedicalCenterSchedules', specialtySelected.Code)
            .subscribe((resultResponse) => {
            const result = resultResponse['MedicalCenterSchedules'];
            if (result.length > 0) {
                this.disableMedicalCenter = false;
                this.medicalCenterSchedules = result;
            }
            else {
                if (specialtySelected.Type !== "3") {
                    this.disableMedicalCenter = true;
                    this.bsModalRef = this.generateInformativeModal('Coordinación', "La especialidad que estás solicitando no tiene agenda  disponible en las próximas 72 h hábiles. Por favor, inténtalo de nuevo a la brevedad o comunícate al 2487 3333 de 9 a 19 horas", true);
                }
            }
            this.isLoading = false;
            this.validateSpecialty(specialtySelected);
        }, (error) => this.ErrorRegister(error));
    }
    validateSpecialty(specialtySelected) {
        if (specialtySelected.Type === "1") {
            this.disabledButton = false;
        }
        else if (specialtySelected.Type === "2") {
            this.bsModalRef = this.generateInformativeModal('Coordinación', specialtySelected.Message, true);
            this.disabledButton = false;
        }
        else if (specialtySelected.Type === "3") {
            this.bsModalRef = this.generateInformativeModal('Coordinación', specialtySelected.Message, true);
            this.disabledButton = true;
        }
        this.specialtytTypeThreeDenied = specialtySelected.Type;
    }
    selectedSchedule(clinicCodeEvent) {
        const clinicCode = clinicCodeEvent.target.value;
        if (clinicCode != null && clinicCode != "") {
            this.medicalCenterSchedules.forEach((element) => {
                if (element.ClinicCode === clinicCode) {
                    this.schedules = new Array();
                    this.schedules1 = new Array();
                    this.schedules2 = new Array();
                    this.schedules3 = new Array();
                    this.schedules = element.MedicalCenterSchedules;
                    var countsSchedules = this.schedules.length;
                    var itemscolums = Number(countsSchedules / 3);
                    for (var i = 0; i < this.schedules.length; i++) {
                        if (i < itemscolums) {
                            this.schedules1.push(this.schedules[i]);
                        }
                        else if (i < (itemscolums * 2)) {
                            this.schedules2.push(this.schedules[i]);
                        }
                        else {
                            this.schedules3.push(this.schedules[i]);
                        }
                    }
                    this.coordination.ClinicName = element.ClinicName;
                    this.coordination.RDACode = element.RDACode;
                    this.coordination.LocalCode = element.LocalCode;
                    this.hiddenLabelSchedule = false;
                    this.disabledButton = true;
                }
            });
        }
        else {
            this.schedules = [];
            this.schedules1 = [];
            this.schedules2 = [];
            this.schedules3 = [];
            this.hiddenLabelSchedule = true;
            this.disabledButton = true;
        }
    }
    selectSchedule(yearMonthDay, time, date) {
        this.disabledButton = false;
        this.coordination.YearMonthDay = yearMonthDay;
        this.coordination.Time = time;
        this.coordination.Date = date;
    }
    //Logica detalle
    call() {
        this.bsModalRef = this.generateInformativeModal('Línea de atención', "Comunícate a la línea de atención del centro de coordinación de centros médicos 24873333", false);
    }
    returnNewCoordination() {
        if (this.hiddenButtons) { //Ya confirmó
            this.hiddenRecommendations = true;
            this.hiddenButtons = false;
            this.cleanFields();
        }
        this.VisibleOne();
    }
    cancelCoordination() {
        this.bsModalRef = this.generateInformativeModal('Confirmación', "¿Estás seguro de cancelar la coordinación?", false, false);
        this.bsModalRef.content.onClose.subscribe((accepted) => {
            if (accepted) {
                this.confirmResult = accepted;
                if (this.confirmResult === true) {
                    this.detailsPendingCoordinationService
                        .cancelCoordination(localStorage.getItem("registerId"), this.coordination.ServicesType, this.coordination.RDACode, this.coordination.ClinicCode, this.coordination.SpecialityCode, this.coordination.YearMonthDay, this.coordination.Time, this.coordination.Number, localStorage.getItem("CellPhone"), localStorage.getItem("userName")).subscribe((response) => {
                        if (response.StatusCode === 0) {
                            if (!response.Tittle || !response.Message) {
                                this.generateInformativeModal('Confirmación', "La coordinación ha sido cancelada", false);
                            }
                            else {
                                this.generateInformativeModal(response.Tittle, response.Message, false);
                            }
                        }
                        else {
                            if (!response.Tittle || !response.Message) {
                                this.generateInformativeModal('Error', "Ocurrió un error al cancelar la coordinación", true);
                            }
                            else {
                                this.generateInformativeModal(response.Tittle, response.Message, true);
                            }
                        }
                    });
                }
            }
        });
    }
    returnList() {
        this.returnToList.emit();
    }
    //Termina logica detalle
    getPaymentMethods() {
        this.isLoading = true;
        this.newCoordinationsService
            .getPaymentMethods(this.coordination)
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                if (result.CoordinationPaymentMethods.length > 0) {
                    this.coordinationPaymentMethods = result.CoordinationPaymentMethods
                        .filter((obj) => obj.ExternalMethod === false);
                    this.franchisesPayment = result.CoordinationPaymentMethods
                        .filter((obj) => obj.ExternalMethod === true);
                }
                else {
                    this.coordinationPaymentMethods = [];
                    this.franchisesPayment = [];
                }
            }
            else {
                if (!result.Tittle || !result.Message) {
                    this.bsModalRef = this.generateInformativeModal('Error', "Ocurrió un error al obtener los métodos de pago", true);
                }
                else {
                    this.bsModalRef = this.generateInformativeModal(result.Tittle, result.Message, true);
                }
            }
            this.isLoading = false;
        }, (error) => this.ErrorRegister(error));
    }
    OnTokenCreated() {
        localStorage.setItem('tokenCreated', 'true');
    }
    /**
     * Método que inicializa el pago.
     *
     * @memberof NewCoordinationComponent
     */
    goToPayCoordination() {
        this.setProperties();
        PWCheckout.Bind("tokenCreated", this.OnTokenCreated);
        this.listenReadyToPay();
        const myDiv = document.getElementById('PWToken');
        var trxToken = myDiv.value;
        PWCheckout.OpenIframeNormal();
    }
    /**
     * Método que está pendiente cuando se establezca token para realizar pago.
     *
     * @memberof NewCoordinationComponent
     */
    listenReadyToPay() {
        this.intervalValidateCoordinationPay = setInterval(() => {
            var value = localStorage.getItem("tokenCreated");
            if (value === "true") {
                let paymentMethod = {
                    PaymentMethodCode: "ONLINE",
                    PaymentMethodName: "ONLINE"
                };
                const myDiv = document.getElementById('PWToken');
                var trxToken = myDiv.value;
                this.coordination.TrxToken = trxToken;
                this.payCoordination(paymentMethod);
                this.intervalValidateCoordinationPay = null;
            }
        }, 1000);
    }
    payCoordination(paymentMethods) {
        localStorage.setItem('tokenCreated', 'false');
        this.coordination.PaymentMethodCode = paymentMethods.PaymentMethodCode;
        this.coordination.PaymentMethodName = paymentMethods.PaymentMethodName;
        if (this.coordination.PaymentMethodCode != this.paymentMethodDebitInvoiceCode) {
            // A los diferentes de débito en factura
            this.coordination.Installments = "1";
        }
        if (this.coordination.Installments === "") {
            this.bsModalRef = this.generateInformativeModal('Validación de información', "Seleccione el número de cuotas.", true);
            return;
        }
        this.isLoading = true;
        this.newCoordinationsService
            .payCoordination(this.coordination)
            .subscribe((result) => {
            this.isLoading = false;
            if (result.StatusCode === 0) {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, false);
                this.coordination.Recommendations = result.Recommendations === "" ? "No se encontraron recomendaciones." : result.Recommendations;
                this.VisibleTwo();
                this.hiddenRecommendations = false;
                this.hiddenButtons = true;
            }
            else {
                this.bsModalRef = this.generateInformativeModal(result.Title, result.Message, true);
            }
            localStorage.setItem('tokenCreated', 'false');
        }, (error) => this.ErrorRegister(error));
    }
    setProperties() {
        this.paymentForm.form_id = "formCoordinationId";
        this.paymentForm.amount = this.coordination.Price;
        this.paymentForm.email = this.coordination.UserEmail;
        SetProperties(this.paymentForm);
    }
    getBankCardInformation() {
        this.newCoordinationsService
            .getBankCardInformation()
            .subscribe((resultData) => {
            const result = resultData["CardInformationList"];
            this.franchisesPayment = result;
        }, (error) => this.ErrorRegister(error));
    }
    ErrorRegister(error) {
        localStorage.setItem('tokenCreated', 'false');
        this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.', true);
        this.isLoading = false;
    }
    // RECURSIVE LOAD SCRIPTS
    load_scripts(urls, final_callback, index = 0) {
        const that = this;
        if (typeof urls[index + 1] === "undefined") {
            this.load_script(urls[index], final_callback);
        }
        else {
            this.load_script(urls[index], function () {
                that.load_scripts(urls, final_callback, index + 1);
            });
        }
    }
    // LOAD SCRIPT
    load_script(url, callback) {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.onload = function () { callback(); };
        script.src = url;
        document.head.appendChild(script);
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
        return this.bsModalService.show(_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_9__.InformativeModalComponent, initialState);
    }
};
NewCoordinationPage.ctorParameters = () => [
    { type: _service_solicitud_services_portal_common_service__WEBPACK_IMPORTED_MODULE_4__.PortalCommonService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _services_new_coordinations_service__WEBPACK_IMPORTED_MODULE_8__.NewCoordinationsService },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__.BsModalService },
    { type: _services_details_pending_coordinations_service__WEBPACK_IMPORTED_MODULE_7__.DetailsPendingCoordinationsService }
];
NewCoordinationPage.propDecorators = {
    agmMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_agm_core__WEBPACK_IMPORTED_MODULE_14__.AgmMap,] }],
    newCoordinationClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    reloadNewCoordination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    coordinationDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    returnToList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }]
};
NewCoordinationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-new-coordination',
        template: _new_coordination_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewEncapsulation.None,
        styles: [_new_coordination_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewCoordinationPage);



/***/ }),

/***/ 82641:
/*!**************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/pending-coordinations/pending-coordinations.page.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingCoordinationsPage": () => (/* binding */ PendingCoordinationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pending_coordinations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending-coordinations.page.html?ngResource */ 44281);
/* harmony import */ var _pending_coordinations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pending-coordinations.page.scss?ngResource */ 73657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _services_pending_coordinations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pending-coordinations.service */ 16281);







let PendingCoordinationsPage = class PendingCoordinationsPage {
    constructor(pendingCoordinationsService, translate) {
        this.pendingCoordinationsService = pendingCoordinationsService;
        this.sendCoordinationDetail = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.translate = translate;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imagesRoute;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.country);
    }
    ngOnInit() {
        this.LoadPending();
    }
    LoadPending() {
        this.registerId = localStorage.getItem("registerId");
        this.getPendingCoordinations(this.registerId);
    }
    getPendingCoordinations(id) {
        this.pendingCoordinationsService.getPendingCoordinationsList(id)
            .subscribe((result) => {
            /* coordinations mock
            const testCoordinations = [{
              Names: "Juan Perez",
              SpecialityName: "Cardiología",
              Date: "01/01/2019",
              Price: "99999",
              AgendaName: "Consulta",
              MedicalCenter: {
                ClinicName: "Clinica de la salud",
                Address: "Calle falsa 123",
                Latitude: "-34.914343",
                Longitude: "-56.155703"
              },
            }, {
              Names: "Juan Perez",
              SpecialityName: "Cardiología",
              Date: "01/01/2019",
              Price: "99999",
              AgendaName: "Consulta",
              MedicalCenter: {
                ClinicName: "Clinica de la salud",
                Address: "Calle falsa 123",
                Latitude: "-34.914343",
                Longitude: "-56.155703"
              },
            }, {
              Names: "Juan Perez",
              SpecialityName: "Cardiología",
              Date: "01/01/2019",
              Price: "99999",
              AgendaName: "Consulta",
              MedicalCenter: {
                ClinicName: "Clinica de la salud",
                Address: "Calle falsa 123",
                Latitude: "-34.914343",
                Longitude: "-56.155703"
              },
            },]
            this.coordinationsPending = testCoordinations;*/
            this.coordinationsPending = result.PendingCoordinations;
        }, (error) => this.ErrorLoad(error));
    }
    sendDetail(event, coordination) {
        this.sendCoordinationDetail.emit({ detail: coordination });
    }
    ErrorLoad(error) {
        // TODO mostrar el error en un modal
        console.log(error);
    }
};
PendingCoordinationsPage.ctorParameters = () => [
    { type: _services_pending_coordinations_service__WEBPACK_IMPORTED_MODULE_3__.PendingCoordinationsService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
PendingCoordinationsPage.propDecorators = {
    sendCoordinationDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
PendingCoordinationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pending-coordinations',
        template: _pending_coordinations_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pending_coordinations_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PendingCoordinationsPage);



/***/ }),

/***/ 65538:
/*!********************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/configs/button-configurations.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayButtonConfigExport": () => (/* binding */ PayButtonConfigExport),
/* harmony export */   "PayCoordinationButtonConfigExport": () => (/* binding */ PayCoordinationButtonConfigExport),
/* harmony export */   "continueButtonConfigExport": () => (/* binding */ continueButtonConfigExport)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/enumerations */ 61881);
/* harmony import */ var src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/button-configuration */ 20444);


const continueButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
continueButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Primary;
continueButtonConfig.text = 'Continuar';
continueButtonConfig.width = "140px";
const continueButtonConfigExport = continueButtonConfig;
const PayButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
PayButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Primary;
PayButtonConfig.text = 'Pagar';
PayButtonConfig.width = "140px";
const PayButtonConfigExport = PayButtonConfig;
const PayCoordinationButtonConfig = new src_app_shared_models_button_configuration__WEBPACK_IMPORTED_MODULE_1__.ButtonConfiguration();
PayCoordinationButtonConfig.buttonType = src_app_shared_enums_enumerations__WEBPACK_IMPORTED_MODULE_0__.ButtonType.Primary;
PayCoordinationButtonConfig.text = 'Pagar Coordinación';
PayCoordinationButtonConfig.width = "200px";
const PayCoordinationButtonConfigExport = PayCoordinationButtonConfig;


/***/ }),

/***/ 989:
/*!*********************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/medical-centers-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalCentersPageRoutingModule": () => (/* binding */ MedicalCentersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/have-be-logged-in.guard */ 78065);
/* harmony import */ var _components_clinic_details_clinic_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/clinic-details/clinic-details.page */ 1685);
/* harmony import */ var _components_main_coordinations_main_coordinations_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-coordinations/main-coordinations.page */ 45599);
/* harmony import */ var _medical_centers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medical-centers.page */ 58824);







const routes = [
    {
        path: '',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _medical_centers_page__WEBPACK_IMPORTED_MODULE_3__.MedicalCentersPage
    },
    {
        //Clinicas detalle, adicciona las coordenadas en su detalle
        path: 'details/:code/:patientDirectionLatitude/:patientDirectionLongitude',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _components_clinic_details_clinic_details_page__WEBPACK_IMPORTED_MODULE_1__.ClinicDetailsPage,
        pathMatch: 'full'
    },
    {
        //Clinicas detalle, flujo habitual
        path: 'details/:code',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _components_clinic_details_clinic_details_page__WEBPACK_IMPORTED_MODULE_1__.ClinicDetailsPage,
        pathMatch: 'full'
    },
    {
        path: 'coordinations',
        canActivate: [src_app_core_guard_have_be_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.HaveBeLoggedInGuard],
        component: _components_main_coordinations_main_coordinations_page__WEBPACK_IMPORTED_MODULE_2__.MainCoordinationsPage,
        pathMatch: 'full'
    },
];
let MedicalCentersPageRoutingModule = class MedicalCentersPageRoutingModule {
};
MedicalCentersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], MedicalCentersPageRoutingModule);



/***/ }),

/***/ 20091:
/*!*************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/medical-centers.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapsConfig": () => (/* binding */ GoogleMapsConfig),
/* harmony export */   "MedicalCentersPageModule": () => (/* binding */ MedicalCentersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _medical_centers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medical-centers-routing.module */ 989);
/* harmony import */ var _medical_centers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-centers.page */ 58824);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/globalServiceVariables */ 83895);
/* harmony import */ var _components_clinic_details_clinic_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/clinic-details/clinic-details.page */ 1685);
/* harmony import */ var _components_details_pending_coordinations_details_pending_coordinations_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details-pending-coordinations/details-pending-coordinations.page */ 5085);
/* harmony import */ var _components_main_coordinations_main_coordinations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-coordinations/main-coordinations.page */ 45599);
/* harmony import */ var _components_new_coordination_new_coordination_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-coordination/new-coordination.page */ 69825);
/* harmony import */ var _components_pending_coordinations_pending_coordinations_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pending-coordinations/pending-coordinations.page */ 82641);
/* harmony import */ var _pipes_array_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/array-sort.pipe */ 69897);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 92340);

















let GoogleMapsConfig = class GoogleMapsConfig {
    constructor() {
        this.apiKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.apiKeyMaps;
    }
};
GoogleMapsConfig.ctorParameters = () => [];
GoogleMapsConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()
], GoogleMapsConfig);

let MedicalCentersPageModule = class MedicalCentersPageModule {
};
MedicalCentersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule,
            _medical_centers_routing_module__WEBPACK_IMPORTED_MODULE_0__.MedicalCentersPageRoutingModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_16__.AgmCoreModule.forRoot({
                apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.apiKeyMaps, libraries: ["places"]
            }),
        ],
        declarations: [
            _medical_centers_page__WEBPACK_IMPORTED_MODULE_1__.MedicalCentersPage,
            _components_clinic_details_clinic_details_page__WEBPACK_IMPORTED_MODULE_4__.ClinicDetailsPage,
            _components_details_pending_coordinations_details_pending_coordinations_page__WEBPACK_IMPORTED_MODULE_5__.DetailsPendingCoordinationsPage,
            _components_main_coordinations_main_coordinations_page__WEBPACK_IMPORTED_MODULE_6__.MainCoordinationsPage,
            _components_new_coordination_new_coordination_page__WEBPACK_IMPORTED_MODULE_7__.NewCoordinationPage,
            _pipes_array_sort_pipe__WEBPACK_IMPORTED_MODULE_9__.ArraySortPipe,
            _components_pending_coordinations_pending_coordinations_page__WEBPACK_IMPORTED_MODULE_8__.PendingCoordinationsPage
        ],
        providers: [
            _agm_core__WEBPACK_IMPORTED_MODULE_16__.GoogleMapsAPIWrapper,
            _models_globalServiceVariables__WEBPACK_IMPORTED_MODULE_3__.GlobalServiceVariables,
            {
                provide: _agm_core__WEBPACK_IMPORTED_MODULE_16__.LAZY_MAPS_API_CONFIG, useClass: GoogleMapsConfig
            },
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_12__.CUSTOM_ELEMENTS_SCHEMA]
    })
], MedicalCentersPageModule);



/***/ }),

/***/ 58824:
/*!***********************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/medical-centers.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalCentersPage": () => (/* binding */ MedicalCentersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _medical_centers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medical-centers.page.html?ngResource */ 3512);
/* harmony import */ var _medical_centers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-centers.page.scss?ngResource */ 6747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var src_app_shared_components_informative_modal_informative_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/informative-modal/informative-modal.component */ 21275);
/* harmony import */ var src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/url-data-service */ 2029);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models_clinics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/clinics */ 33694);
/* harmony import */ var _services_medical_centers_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/medical-centers-general.service */ 31146);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ 93333);













let MedicalCentersPage = class MedicalCentersPage {
    constructor(medicalCentersService, translate, router, route, modalService, urlDataService, googlemapsAPI, mapsAPILoader) {
        this.medicalCentersService = medicalCentersService;
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.urlDataService = urlDataService;
        this.googlemapsAPI = googlemapsAPI;
        this.mapsAPILoader = mapsAPILoader;
        this.currentLocation = new _models_clinics__WEBPACK_IMPORTED_MODULE_5__.Clinic();
        this.urlDataService.setHeaderNavPortal(['Centros Médicos']);
        this.translate = translate;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment;
        this.imgRoute = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imagesRoute;
        translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.country);
    }
    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.getLocation(position.coords);
            });
        }
        this.getClinics();
        this.validateCoordsPatiend();
    }
    ngAfterViewInit() {
    }
    validateCoordsPatiend() {
        let patientDirectionLatitude = this.route.snapshot.paramMap.get('patientDirectionLatitude');
        if (patientDirectionLatitude === 'NaN' && this.validationCoordsPatient == false) {
            this.validateNewFlowNoCoords = true;
            this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'No se pudo obtener las distancias de los centros médicos, no se encontraron coordenadas del paciente, por favor espere o comuniquese con soporte.', true);
        }
    }
    getClinics() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.medicalCentersService
                .getClinicsNearby('Coordinations/MedicalCenters')
                .subscribe((result) => {
                this.clinics = result['MedicalCenterSchedules'];
                //  AAE - Cálculo de distancias en kilómetros y pocicionamiento de centros médicos según cercanía.
                this.clinics.forEach((medicalCenter) => {
                    medicalCenter.Latitude = Number(medicalCenter.Latitude);
                    medicalCenter.Longitude = Number(medicalCenter.Longitude);
                    this.medicalCentersLatitude = medicalCenter.Latitude;
                    this.medicalCenterLongitude = medicalCenter.Longitude;
                    // Obteniendo el parametro extraído por url router, coordenadas del paciente, y convirtiendolo en number para poder usar ubicación en el mapa
                    this.patientDirectionLatitude = Number(this.route.snapshot.paramMap.get('patientDirectionLatitude'));
                    this.patientDirectionLongitude = Number(this.route.snapshot.paramMap.get('patientDirectionLongitude'));
                    this.PatientAddressLatitude = this.patientDirectionLatitude;
                    this.PatientAddressLongitude = this.patientDirectionLongitude;
                    // Validando flujo que toma el usuario, si hay coordenadas, mostrando este nuevo flujo
                    if (this.PatientAddressLongitude == '0' || this.PatientAddressLongitude == null || this.PatientAddressLongitude.length < 1 ||
                        this.PatientAddressLatitude == '0' || this.PatientAddressLatitude == null || this.PatientAddressLatitude.length < 1) {
                        this.validationCoordsPatient = true;
                    }
                    else {
                        this.validationCoordsPatient = false;
                    }
                    // Lenado y inicialización de la función
                    let latitudeOnePatientDirection = this.PatientAddressLatitude;
                    let lengthOnePatientDirection = this.PatientAddressLongitude;
                    let latitudeTwoMedicalCenter = this.medicalCentersLatitude;
                    let lengthTwoMedicalCenter = this.medicalCenterLongitude;
                    let rad = function (x) { return x * Math.PI / 180; };
                    let LandRadioKilometers = 6378.137; // Radio de la tierra en km
                    let distanceLatitude = rad(latitudeTwoMedicalCenter - latitudeOnePatientDirection);
                    let distanceLength = rad(lengthTwoMedicalCenter - lengthOnePatientDirection);
                    let LandAndUbications = Math.sin(distanceLatitude / 2) * Math.sin(distanceLatitude / 2) + Math.cos(rad(latitudeOnePatientDirection)) * Math.cos(rad(latitudeTwoMedicalCenter)) * Math.sin(distanceLength / 2) * Math.sin(distanceLength / 2);
                    let squareRoot = 2 * Math.atan2(Math.sqrt(LandAndUbications), Math.sqrt(1 - LandAndUbications));
                    let distance = (LandRadioKilometers * squareRoot);
                    medicalCenter.MedicalCenterDistance = distance;
                });
                // Conversion
                this.clinics.forEach((m) => {
                    m.Latitude = Number(m.Latitude);
                    m.Longitude = Number(m.Longitude);
                });
                // Se crea el cuadro de mapa
                this.setBounds();
            }, error => this.ErrorRegister(error));
        });
    }
    setBounds() {
        this.mapsAPILoader.load().then(() => {
            this.latlngBounds = new google.maps.LatLngBounds();
            this.clinics.forEach((marker) => {
                this.latlngBounds.extend(new google.maps.LatLng(marker.Latitude, marker.Longitude));
            });
        });
    }
    getLocation(position) {
        this.currentLocation.Latitud = position.latitude;
        this.currentLocation.Longitud = position.longitude;
    }
    clinicDetail(clinic) {
        if (this.PatientAddressLongitude == 0) {
            //Si es el flujo normal, enviar el parametro habitual
            this.router.navigate(['portal/admin/clinics/details', clinic.ClinicCode]);
        }
        else {
            //Si es el flujo de clinicas por distancia, enviando parametros para validaciones en el detalle.
            this.router.navigate(['portal/admin/clinics/details', clinic.ClinicCode, this.PatientAddressLatitude, this.PatientAddressLongitude]);
        }
    }
    onMouseOver(infoWindow, gm) {
        if (gm.lastOpen != null) {
            gm.lastOpen.close();
        }
        gm.lastOpen = infoWindow;
        infoWindow.open();
    }
    ErrorRegister(error) {
        this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'No se pudo procesar la solicitud, por favor inténtelo más tarde.', true);
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
};
MedicalCentersPage.ctorParameters = () => [
    { type: _services_medical_centers_general_service__WEBPACK_IMPORTED_MODULE_6__.MedicalCentersGeneralService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.BsModalService },
    { type: src_app_shared_services_url_data_service__WEBPACK_IMPORTED_MODULE_3__.UrlDataService },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_11__.GoogleMapsAPIWrapper },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_11__.MapsAPILoader }
];
MedicalCentersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-medical-centers',
        template: _medical_centers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_agm_core__WEBPACK_IMPORTED_MODULE_11__.GoogleMapsAPIWrapper],
        styles: [_medical_centers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MedicalCentersPage);



/***/ }),

/***/ 69897:
/*!************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/pipes/array-sort.pipe.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArraySortPipe": () => (/* binding */ ArraySortPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let ArraySortPipe = class ArraySortPipe {
    transform(array, field) {
        if (!Array.isArray(array)) {
            return [];
        }
        array.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
};
ArraySortPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'sort'
    })
], ArraySortPipe);



/***/ }),

/***/ 92013:
/*!*************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/services/details-pending-coordinations.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPendingCoordinationsService": () => (/* binding */ DetailsPendingCoordinationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let DetailsPendingCoordinationsService = class DetailsPendingCoordinationsService {
    constructor(http) {
        this.http = http;
    }
    cancelCoordination(registerId, agendaType, RDACode, clinicCode, specialityCode, day, hour, document, phone, userEmail) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Coordinations/CancelCoordination';
        let params = {
            "IdReference": registerId,
            "AgendaType": agendaType,
            "RDACode": RDACode,
            "ClinicCode": clinicCode,
            "SpecialityCode": specialityCode,
            "YearMonthDay": day,
            "Time": hour,
            "Document": document,
            "Phone": phone,
            "UserEmail": userEmail
        };
        return this.http
            .post(url, params);
    }
};
DetailsPendingCoordinationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DetailsPendingCoordinationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DetailsPendingCoordinationsService);



/***/ }),

/***/ 31146:
/*!*******************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/services/medical-centers-general.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalCentersGeneralService": () => (/* binding */ MedicalCentersGeneralService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let MedicalCentersGeneralService = class MedicalCentersGeneralService {
    constructor(http) {
        this.http = http;
    }
    getClinicsNearby(payload) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + '/Coordinations/MedicalCenters', payload);
    }
};
MedicalCentersGeneralService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
MedicalCentersGeneralService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], MedicalCentersGeneralService);



/***/ }),

/***/ 86451:
/*!*************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/services/new-coordinations.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewCoordinationsService": () => (/* binding */ NewCoordinationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let NewCoordinationsService = class NewCoordinationsService {
    constructor(http) {
        this.http = http;
    }
    preConfirmCoordination(coordination) {
        let params = {
            IdReference: coordination.IdReference,
            Token: coordination.Token,
            RDACode: coordination.RDACode,
            LocalCode: coordination.LocalCode,
            ClinicCode: coordination.ClinicCode,
            SpecialityCode: coordination.SpecialityCode,
            DocumentType: coordination.DocumentType,
            Number: coordination.Number,
            Phone: coordination.Phone
        };
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Coordinations/PreConfirmCoordination', params);
    }
    getServicesTypes(url) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + url, null);
    }
    getSpecialties(serviceType) {
        let url = 'DataLists/GetMedicalSpecialites';
        let params = {
            ServiceType: serviceType
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + url, params);
    }
    confirmCoordination(coordination) {
        let params = {
            IdReference: coordination.IdReference,
            Token: coordination.Token,
            RDACode: coordination.RDACode,
            LocalCode: coordination.LocalCode,
            ClinicCode: coordination.ClinicCode,
            SpecialityCode: coordination.SpecialityCode,
            Phone: coordination.Phone,
            Email: coordination.Email,
            YearMonthDay: coordination.YearMonthDay,
            Time: coordination.Time,
            PatientCode: coordination.PatientCode,
            ProductCode: coordination.ProductCode,
            UserEmail: coordination.UserEmail,
            PaymentMethodName: "",
            AgendaType: coordination.ServicesType,
            PatientName: coordination.FullNames
        };
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Coordinations/ConfirmCoordination', params);
    }
    getMedicalCenterSchedules(url, specialityCode) {
        let params = {
            SpecialityCode: specialityCode
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + url, params);
    }
    getPaymentMethods(coordination) {
        let params = {
            IdReference: coordination.IdReference,
            RDACode: coordination.RDACode,
            LocalCode: coordination.LocalCode,
            ClinicCode: coordination.ClinicCode,
            SpecialityCode: coordination.SpecialityCode,
            DocumentType: coordination.DocumentType,
            Number: coordination.Number,
            YearMonthDay: coordination.YearMonthDay,
            Time: coordination.Time,
            PatientCode: coordination.PatientCode,
            ProductCode: coordination.ProductCode,
            Price: coordination.Price != "" ? Number(coordination.Price) : ""
        };
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Coordinations/GetPaymentMethods', params);
    }
    payCoordination(coordination) {
        let params = {
            IdReference: coordination.IdReference,
            Token: coordination.Token,
            TrxToken: coordination.TrxToken,
            RDACode: coordination.RDACode,
            LocalCode: coordination.LocalCode,
            ClinicCode: coordination.ClinicCode,
            SpecialityCode: coordination.SpecialityCode,
            DocumentType: coordination.DocumentType,
            Number: coordination.Number,
            PatientCode: coordination.PatientCode,
            ProductCode: coordination.ProductCode,
            YearMonthDay: coordination.YearMonthDay,
            Time: coordination.Time,
            Phone: coordination.Phone,
            UserEmail: coordination.UserEmail,
            Email: coordination.Email,
            PaymentMethodCode: coordination.PaymentMethodCode,
            PaymentMethodName: coordination.PaymentMethodName,
            Price: coordination.Price != "" ? Number(coordination.Price) : "",
            Installments: Number(coordination.Installments),
            AgendaType: coordination.ServicesType,
            PatientName: coordination.FullNames
        };
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Coordinations/Pay', params);
    }
    getBankCardInformation() {
        let params = {
            Code: "6A69C947-80FC-4A13-A562-689DF981CDE7"
        };
        return this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'DataLists/GetBankCardInformation', params);
    }
};
NewCoordinationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NewCoordinationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NewCoordinationsService);



/***/ }),

/***/ 16281:
/*!*****************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/services/pending-coordinations.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingCoordinationsService": () => (/* binding */ PendingCoordinationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PendingCoordinationsService = class PendingCoordinationsService {
    constructor(http) {
        this.http = http;
    }
    getPendingCoordinationsList(registerId) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL + 'Coordinations/PendingCoordinations';
        let params = {
            "IdReference": registerId
        };
        return this.http
            .post(url, params);
    }
};
PendingCoordinationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PendingCoordinationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PendingCoordinationsService);



/***/ }),

/***/ 98122:
/*!*************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/clinic-details/clinic-details.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nagm-map {\n  display: inline-block;\n  width: 100%;\n  height: 75vh;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-card-content {\n  width: 100%;\n}\nion-item {\n  border: none !important;\n}\nion-row {\n  margin-bottom: 1px !important;\n}\n.ion-label-title {\n  font-size: 15px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\n.ion-label-subtitle {\n  font-size: 13px;\n}\n.ubication {\n  margin: 0px;\n  padding: 0px;\n}\n.available-services {\n  padding-top: 20px;\n}\n.available-services .available-services {\n  padding-top: 20px;\n}\n.available-services .available-services .available-services-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\nion-icon {\n  color: #FF1E2D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaW5pYy1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQztFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFpQ0w7QUE5QkM7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBaUNMO0FBOUJDO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWlDTDtBQTlCQztFQUNJLFdBQUE7QUFpQ0w7QUE5QkM7RUFDSSx1QkFBQTtBQWlDTDtBQTlCQztFQUNJLDZCQUFBO0FBaUNMO0FBOUJDO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0MvQlc7QURnRWhCO0FBOUJDO0VBQ0ksZUFBQTtBQWlDTDtBQTdCQztFQUNJLFdBQUE7RUFDQSxZQUFBO0FBZ0NMO0FBN0JDO0VBQ0ksaUJBQUE7QUFnQ0w7QUEvQks7RUFDSSxpQkFBQTtBQWlDVDtBQWhDUztFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNDbkRHO0FEcUZoQjtBQTdCQztFQUNJLGNDekRXO0FEeUZoQiIsImZpbGUiOiJjbGluaWMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuIDpyb290IHtcbiAgICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiB9XG4gXG4gYWdtLW1hcCB7XG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGhlaWdodDogNzV2aDtcbiB9XG4gXG4gaW9uLWNvbnRlbnQge1xuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgIGhlaWdodDogOTAlO1xuICAgICB3aWR0aDogODUlO1xuIH1cbiBcbiBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgd2lkdGg6IDEwMCU7XG4gfVxuIFxuIGlvbi1pdGVtIHtcbiAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gfVxuIFxuIGlvbi1yb3cge1xuICAgICBtYXJnaW4tYm90dG9tOiAxcHggIWltcG9ydGFudDtcbiB9XG4gXG4gLmlvbi1sYWJlbC10aXRsZSB7XG4gICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiB9XG4gXG4gLmlvbi1sYWJlbC1zdWJ0aXRsZSB7XG4gICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gfVxuIFxuIC51YmljYXRpb24ge1xuICAgICBtYXJnaW46IDBweDtcbiAgICAgcGFkZGluZzogMHB4O1xuIH1cbiBcbiAuYXZhaWxhYmxlLXNlcnZpY2VzIHtcbiAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgIC5hdmFpbGFibGUtc2VydmljZXMge1xuICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAuYXZhaWxhYmxlLXNlcnZpY2VzLXRpdGxlIHtcbiAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgfVxuICAgICB9XG4gfVxuIFxuIGlvbi1pY29uIHtcbiAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuIH0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 97987:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/details-pending-coordinations/details-pending-coordinations.page.scss?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nagm-map {\n  display: inline-block;\n  width: 100%;\n  height: 75vh;\n}\n.details-pending-coordinations__container {\n  padding: 0px;\n  margin: 0px;\n}\n.details-pending-coordinations__data-container {\n  margin: 0px;\n}\n.details-pending-coordinations__data-container button {\n  align-items: center;\n  background-color: white;\n  margin: 10px;\n  display: flex;\n  justify-content: center;\n  text-justify: center;\n  width: 100%;\n}\n.details-pending-coordinations__data-container .fa {\n  padding-right: 10px;\n}\n.details-pending-coordinations__data-title {\n  text-align: center;\n  font-weight: bold;\n}\n.details-pending-coordinations__data-container-inner {\n  padding: 10px;\n}\n.details-pending-coordinations__name {\n  margin-top: 30px;\n  color: #FF1E2D;\n  margin-bottom: 0px;\n  line-height: 15px;\n}\n.details-pending-coordinations__speciality-name {\n  margin-top: 0px;\n  line-height: 15px;\n}\n.details-pending-coordinations__bottom-recomendation {\n  text-align: center;\n}\nagm-map {\n  width: 100%;\n  height: 75vh;\n  margin: 0px;\n  padding: 0px;\n}\n@media screen and (max-width: 768px) {\n  .details-pending-coordinations__name,\n.details-pending-coordinations__speciality-name {\n    text-align: center;\n  }\n}\nion-icon {\n  color: #FF1E2D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtcGVuZGluZy1jb29yZGluYXRpb25zLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsbUVBQUE7QUFZQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBRFRKO0FDWUE7RUFDSSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBRFRKO0FDWUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQTlCQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWlDSjtBQTlCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBaUNKO0FBOUJBO0VBQ0ksV0FBQTtBQWlDSjtBQWhDSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBa0NSO0FBaENJO0VBQ0ksbUJBQUE7QUFrQ1I7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksYUFBQTtBQWlDSjtBQTlCQTtFQUNJLGdCQUFBO0VBQ0EsY0NoRFk7RURpRFosa0JBQUE7RUFDQSxpQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWlDSjtBQTlCQTtFQUNJOztJQUVJLGtCQUFBO0VBaUNOO0FBQ0Y7QUE5QkE7RUFDSSxjQzdFWTtBRDZHaEIiLCJmaWxlIjoiZGV0YWlscy1wZW5kaW5nLWNvb3JkaW5hdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5hZ20tbWFwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3NXZoO1xufVxuXG4uZGV0YWlscy1wZW5kaW5nLWNvb3JkaW5hdGlvbnNfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4uZGV0YWlscy1wZW5kaW5nLWNvb3JkaW5hdGlvbnNfX2RhdGEtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBidXR0b24ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuZmEge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cblxuLmRldGFpbHMtcGVuZGluZy1jb29yZGluYXRpb25zX19kYXRhLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXRhaWxzLXBlbmRpbmctY29vcmRpbmF0aW9uc19fZGF0YS1jb250YWluZXItaW5uZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kZXRhaWxzLXBlbmRpbmctY29vcmRpbmF0aW9uc19fbmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4uZGV0YWlscy1wZW5kaW5nLWNvb3JkaW5hdGlvbnNfX3NwZWNpYWxpdHktbmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4uZGV0YWlscy1wZW5kaW5nLWNvb3JkaW5hdGlvbnNfX2JvdHRvbS1yZWNvbWVuZGF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmFnbS1tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzV2aDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmRldGFpbHMtcGVuZGluZy1jb29yZGluYXRpb25zX19uYW1lLFxuICAgIC5kZXRhaWxzLXBlbmRpbmctY29vcmRpbmF0aW9uc19fc3BlY2lhbGl0eS1uYW1lIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuaW9uLWljb24ge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 89648:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/main-coordinations/main-coordinations.page.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nion-content {\n  font-family: \"Mark OT\", sans-serif;\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\n.main-coordinations__container {\n  background-color: #f2f2f2;\n}\n.pending-coordinations-container {\n  background-color: #f2f2f2;\n  height: 79vh;\n}\n.main-coordinations__section-selector {\n  display: flex;\n  font-size: medium;\n  font-weight: bold;\n  width: 100%;\n  border-bottom: 1px solid lightgray;\n  background-color: white;\n  text-align: center;\n}\n.main-coordinations__section-selector span {\n  padding: 10px;\n}\n.main-coordinations__selected-section {\n  border-bottom: 3px solid #FF1E2D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tY29vcmRpbmF0aW9ucy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0kseUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0VBSUEsa0JBQUE7QUE4Qko7QUFqQ0k7RUFDSSxhQUFBO0FBbUNSO0FBOUJBO0VBQ0ksZ0NBQUE7QUFpQ0oiLCJmaWxlIjoibWFpbi1jb29yZGluYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ01hcmsgT1QnLCBzYW5zLXNlcmlmO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG4ubWFpbi1jb29yZGluYXRpb25zX19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5wZW5kaW5nLWNvb3JkaW5hdGlvbnMtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIGhlaWdodDogNzl2aDtcbn1cblxuLm1haW4tY29vcmRpbmF0aW9uc19fc2VjdGlvbi1zZWxlY3RvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHNwYW4ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluLWNvb3JkaW5hdGlvbnNfX3NlbGVjdGVkLXNlY3Rpb24ge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 65207:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/new-coordination/new-coordination.page.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n.sc-ion-alert-ios-h {\n  --max-width: 85% !important;\n  --width: 85% !important;\n  font-size: 13px !important;\n}\n.container {\n  font-size: smaller !important;\n}\n.container-time {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\nagm-map {\n  display: inline-block;\n  width: 100%;\n  height: 75vh;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-item {\n  border: none !important;\n}\nion-row {\n  margin-bottom: 1px !important;\n}\n.text-title {\n  font-size: 14px;\n  color: #00466c;\n}\n.text-subtitle {\n  font-size: 12px !important;\n}\n.ion-label-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\n.ion-label-subtitle {\n  font-size: 12px;\n}\n.ion-item-form-input {\n  border: 1px solid #F3F3F3 !important;\n  --background: #F3F3F3 !important;\n  width: 100% !important;\n}\n.new-coordinations__section-title {\n  padding-left: 12px;\n  padding-top: 10px;\n  font-weight: bold;\n  color: #FF1E2D;\n}\n.new__coordination__continue-button {\n  margin-right: 20px;\n}\n.check-box {\n  background-color: #f2f2f2;\n  padding: 20px;\n  border-bottom: 1px solid #cac9c9;\n  display: flex;\n  justify-content: center;\n  font-weight: bold;\n}\n.new-coordinations__form__error {\n  color: red;\n  font-size: small;\n  padding-left: 12px;\n}\n.new-coordinations__schedule-selector {\n  margin-top: 20px;\n  overflow-y: scroll;\n  height: 45vh;\n}\n.new-coordinations__submit-btn {\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n}\n.new-coordinations__detail__container {\n  padding-right: 0px;\n}\n.new-coordinations__detail__back-button {\n  width: 100%;\n  background-color: white;\n}\n.new-coordinations__detail__title-clinc {\n  padding: 10px;\n  padding-bottom: 0px;\n}\n.new-coordinations__detail__clinic-card {\n  text-align: start;\n  display: flex;\n  padding: 10px;\n}\n.new-coordinations__detail__fullname {\n  font-size: medium;\n  font-weight: bold;\n  color: #FF1E2D;\n  width: 100%;\n}\n.mat-typography p {\n  margin-bottom: 0px;\n}\n.mat-typography h1 {\n  font-weight: bold;\n}\n.new-coordinations__detail__speciality-name {\n  margin-top: 0px;\n  padding-top: 0px;\n  width: 100%;\n  color: #8c8c8c;\n  align-items: flex-start;\n  align-content: flex-start;\n}\n.new-coordinations__detail__detail-data {\n  text-align: start;\n  padding-bottom: 5px;\n}\n.new-coordinations__payment-detail-buttons-container {\n  display: flex;\n  justify-content: center;\n}\n.new-coordination__pagos__franchises-container {\n  background-color: white;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n.new-coordination__pagos__franchises-container figure {\n  justify-content: center;\n  display: flex;\n  font-size: 25px;\n  align-items: center;\n  align-content: center;\n  border: 6px solid #ddd;\n  background: #FF1E2D;\n  border-radius: 50%;\n  width: 56px;\n  align-self: center;\n  height: 55px;\n}\n.new-coordination__pagos__franchises-container .new-coordination__pagos__online-pay-icon-container {\n  justify-content: center;\n  padding-left: 20px;\n  color: white;\n  padding-top: 6px;\n}\n.new-coordination__pagos__franchises-container .new-coordination__pagos__franchises-payment-title {\n  color: #FF1E2D;\n  font-weight: bold;\n  padding-top: 15px;\n}\n.new-coordination__pagos__franchises-container .new-coordination__pagos__franchises-pay-button-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 20px;\n}\nion-icon {\n  color: #FF1E2D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1jb29yZGluYXRpb24ucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtRUFBQTtBQVlBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FEVEo7QUNZQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FBOUJBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQWlDSjtBQTlCQTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQWlDSjtBQTlCQTtFQUNJLDZCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWlDSjtBQTlCQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0ksdUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSw2QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBaUNKO0FBOUJBO0VBQ0ksMEJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3BEWTtBRHFGaEI7QUE5QkE7RUFDSSxlQUFBO0FBaUNKO0FBOUJBO0VBQ0ksb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NyRVk7QURzR2hCO0FBOUJBO0VBQ0ksa0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWlDSjtBQTlCQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtBQWlDSjtBQTlCQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtBQWlDSjtBQTlCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQWlDSjtBQTlCQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFpQ0o7QUE5QkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0M5SFk7RUQrSFosV0FBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksaUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBaUNKO0FBOUJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBaUNKO0FBaENJO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQ3hLUTtFRHlLUixrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFrQ1I7QUFoQ0k7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBa0NSO0FBaENJO0VBQ0ksY0NyTFE7RURzTFIsaUJBQUE7RUFDQSxpQkFBQTtBQWtDUjtBQWhDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBa0NSO0FBOUJBO0VBQ0ksY0NsTVk7QURtT2hCIiwiZmlsZSI6Im5ldy1jb29yZGluYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gICAgLS1tYXgtd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICAgIC0td2lkdGg6IDg1JSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IHNtYWxsZXIgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lci10aW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYWdtLW1hcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzV2aDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDFweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDA0NjZjO1xufVxuXG4udGV4dC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tbGFiZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5pb24tbGFiZWwtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmlvbi1pdGVtLWZvcm0taW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGM0YzRjMgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICNGM0YzRjMgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubmV3LWNvb3JkaW5hdGlvbnNfX3NlY3Rpb24tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5uZXdfX2Nvb3JkaW5hdGlvbl9fY29udGludWUtYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jaGVjay1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NhYzljOTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmV3LWNvb3JkaW5hdGlvbnNfX2Zvcm1fX2Vycm9yIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuXG4ubmV3LWNvb3JkaW5hdGlvbnNfX3NjaGVkdWxlLXNlbGVjdG9yIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDQ1dmg7XG59XG5cbi5uZXctY29vcmRpbmF0aW9uc19fc3VibWl0LWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ubmV3LWNvb3JkaW5hdGlvbnNfX2RldGFpbF9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5uZXctY29vcmRpbmF0aW9uc19fZGV0YWlsX19iYWNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5uZXctY29vcmRpbmF0aW9uc19fZGV0YWlsX190aXRsZS1jbGluYyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4ubmV3LWNvb3JkaW5hdGlvbnNfX2RldGFpbF9fY2xpbmljLWNhcmQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLm5ldy1jb29yZGluYXRpb25zX19kZXRhaWxfX2Z1bGxuYW1lIHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtdHlwb2dyYXBoeSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tYXQtdHlwb2dyYXBoeSBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uZXctY29vcmRpbmF0aW9uc19fZGV0YWlsX19zcGVjaWFsaXR5LW5hbWUge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5uZXctY29vcmRpbmF0aW9uc19fZGV0YWlsX19kZXRhaWwtZGF0YSB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLm5ldy1jb29yZGluYXRpb25zX19wYXltZW50LWRldGFpbC1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5ldy1jb29yZGluYXRpb25fX3BhZ29zX19mcmFuY2hpc2VzLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmaWd1cmUge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogNnB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICB9XG4gICAgLm5ldy1jb29yZGluYXRpb25fX3BhZ29zX19vbmxpbmUtcGF5LWljb24tY29udGFpbmVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIH1cbiAgICAubmV3LWNvb3JkaW5hdGlvbl9fcGFnb3NfX2ZyYW5jaGlzZXMtcGF5bWVudC10aXRsZSB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cbiAgICAubmV3LWNvb3JkaW5hdGlvbl9fcGFnb3NfX2ZyYW5jaGlzZXMtcGF5LWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxufVxuXG5pb24taWNvbiB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 73657:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/pending-coordinations/pending-coordinations.page.scss?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n.pending-coordinations__list-container {\n  height: 100%;\n  padding: 10px;\n}\n.pending-coordinations__title {\n  padding: 10px;\n}\n.pending-coordinations__list-card {\n  margin: 10px;\n  background-color: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n  /* 5px rounded corners */\n  padding: 10px;\n}\n.pending-coordinations__list-card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n.pending-coordinations__coordination-name {\n  color: #FF1E2D;\n  margin-bottom: 0px;\n}\n.pending-coordinations__coordination-date {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  width: 100%;\n}\n.pending-coordinations__right-arrow {\n  padding-left: 10px;\n  padding-right: 10px;\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmRpbmctY29vcmRpbmF0aW9ucy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBaUNKO0FBOUJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0FBaUNKO0FBOUJBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FBaUNKO0FBOUJBO0VBQ0ksMkNBQUE7RUFDQSxlQUFBO0FBaUNKO0FBOUJBO0VBQ0ksY0M3Qlk7RUQ4Qlosa0JBQUE7QUFpQ0o7QUE5QkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFpQ0oiLCJmaWxlIjoicGVuZGluZy1jb29yZGluYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzLXZhcmlhYmxlcy5zY3NzJztcbjpyb290IHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbi5wZW5kaW5nLWNvb3JkaW5hdGlvbnNfX2xpc3QtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnBlbmRpbmctY29vcmRpbmF0aW9uc19fdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wZW5kaW5nLWNvb3JkaW5hdGlvbnNfX2xpc3QtY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvKiA1cHggcm91bmRlZCBjb3JuZXJzICovXG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnBlbmRpbmctY29vcmRpbmF0aW9uc19fbGlzdC1jYXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBlbmRpbmctY29vcmRpbmF0aW9uc19fY29vcmRpbmF0aW9uLW5hbWUge1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5wZW5kaW5nLWNvb3JkaW5hdGlvbnNfX2Nvb3JkaW5hdGlvbi1kYXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wZW5kaW5nLWNvb3JkaW5hdGlvbnNfX3JpZ2h0LWFycm93IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn0iLCIvKiBJTklDSU8gUGFyYSBtb2RpZmljYXIgbG9zIGNvbG9yZXMgcHJpbmNpcGFsZXMgZGUgbGEgYXBsaWNhY2nDs24gKi9cblxuJHByaW1hcnktY29sb3I6ICNGRjFFMkQ7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjYxODJBO1xuJHNlY29uZGFyeS1jb2xvci1kYXJrLWJsdWU6ICMxMjFBNDQ7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstZ3JleTogIzQxNTU2NTtcbiR0ZXJuYXJ5LWNvbG9yOiAjRkZFNjAwO1xuJHByaW5jaXBhbC1ncmF5OiAjNGM0YzRiO1xuJGxpbmUtZ3JheTogI2U3ZTdlZjtcbiRsaW5rLWNvbG9yOiAjZmYxZTJkO1xuJGNvbG9yLW1lbnU6ICNmZmZmZmY7XG4kY29sb3ItaWNvbi1tZW51OiAjMDA5Y2RmO1xuLmJ1dHRvbi1wZXJzb25hbGl6YWRvIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmNvbG9yLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGRjFFMkQgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXNlY29uZGFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYxODJBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYnV0dG9uLXRlcm5hcnkge1xuICAgIC0tYmFja2dyb3VuZDogJHRlcm5hcnktY29sb3I7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbn0iXX0= */";

/***/ }),

/***/ 6747:
/*!************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/medical-centers.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n/* INICIO Para modificar los colores principales de la aplicación */\n.button-personalizado {\n  --border-width: 1px;\n  text-transform: none;\n  font-style: normal;\n}\n.color-button-primary {\n  --background: #FF1E2D !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $primary-color !important;\n}\n.color-button-secondary {\n  --background: #66182A !important;\n  --color: #fff !important;\n  --border: 1px solid !important;\n  --border-color: $secondary-color !important;\n}\n.color-button-ternary {\n  --background: $ternary-color;\n  --color: #fff;\n  --border: 1px solid !important;\n  --border-color: var(--ion-color-secondary);\n}\nbutton:disabled {\n  opacity: 0.4;\n}\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\nagm-map {\n  display: inline-block;\n  width: 100%;\n  height: 75vh;\n}\n.img-location {\n  align-self: center;\n  width: 25px;\n  height: 30px;\n}\nion-content {\n  align-self: center;\n  height: 90%;\n  width: 85%;\n}\nion-item {\n  border: none !important;\n}\nion-row {\n  margin-bottom: 1px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtY2VudGVycy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLG1FQUFBO0FBWUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QURUSjtBQ1lBO0VBQ0ksZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QURUSjtBQ1lBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUE5QkE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBaUNKO0FBOUJBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWlDSjtBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQ0o7QUE5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBaUNKO0FBOUJBO0VBQ0ksdUJBQUE7QUFpQ0o7QUE5QkE7RUFDSSw2QkFBQTtBQWlDSiIsImZpbGUiOiJtZWRpY2FsLWNlbnRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzLnNjc3MnO1xuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuYWdtLW1hcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzV2aDtcbn1cblxuLmltZy1sb2NhdGlvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogODUlO1xufVxuXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDFweCAhaW1wb3J0YW50O1xufSIsIi8qIElOSUNJTyBQYXJhIG1vZGlmaWNhciBsb3MgY29sb3JlcyBwcmluY2lwYWxlcyBkZSBsYSBhcGxpY2FjacOzbiAqL1xuXG4kcHJpbWFyeS1jb2xvcjogI0ZGMUUyRDtcbiRzZWNvbmRhcnktY29sb3I6ICM2NjE4MkE7XG4kc2Vjb25kYXJ5LWNvbG9yLWRhcmstYmx1ZTogIzEyMUE0NDtcbiRzZWNvbmRhcnktY29sb3ItZGFyay1ncmV5OiAjNDE1NTY1O1xuJHRlcm5hcnktY29sb3I6ICNGRkU2MDA7XG4kcHJpbmNpcGFsLWdyYXk6ICM0YzRjNGI7XG4kbGluZS1ncmF5OiAjZTdlN2VmO1xuJGxpbmstY29sb3I6ICNmZjFlMmQ7XG4kY29sb3ItbWVudTogI2ZmZmZmZjtcbiRjb2xvci1pY29uLW1lbnU6ICMwMDljZGY7XG4uYnV0dG9uLXBlcnNvbmFsaXphZG8ge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29sb3ItYnV0dG9uLXByaW1hcnkge1xuICAgIC0tYmFja2dyb3VuZDogI0ZGMUUyRCAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tc2Vjb25kYXJ5IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2NjE4MkEgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1idXR0b24tdGVybmFyeSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAkdGVybmFyeS1jb2xvcjtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xufSJdfQ== */";

/***/ }),

/***/ 1108:
/*!*************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/clinic-details/clinic-details.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Clínica - Detalle</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <ion-row style=\"text-align: end;\">\n        <ion-label (click)=\"goBack()\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n            {{ \"PORTAL.NEARBY-CLINICS-DETAIL.BackToList\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{ clinics.ClinicName }}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"ion-label-subtitle\">{{clinics.Address}}</ion-label>\n    </ion-row>\n\n    <div *ngIf=\"validationCoordsPatient == false\">\n        <hr/>\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"ion-label-subtitle\">{{\"PORTAL.NEARBY-CLINICS.AdultMedicalConsultation\" | translate}}</ion-label>\n            <ion-label class=\"ion-label-subtitle\">{{\"PORTAL.NEARBY-CLINICS.EstimatedTimeOfAttention\" | translate}}</ion-label>\n            <ion-label class=\"ion-label-subtitle\">{{ clinics.AdultTime }}</ion-label>\n        </ion-row>\n    </div>\n\n    <div *ngIf=\"validationCoordsPatient == false\">\n        <hr/>\n        <ion-row class=\"ion-padding-top\">\n            <p class=\"ion-label-subtitle\">{{\"PORTAL.NEARBY-CLINICS.PediatricMedicalConsultation\" | translate}}</p>\n            <p class=\"ion-label-subtitle\">{{\"PORTAL.NEARBY-CLINICS.EstimatedTimeOfAttention\" | translate}}</p>\n            <p class=\"ion-label-subtitle\">{{ clinics.PediatricTime }}</p>\n        </ion-row>\n    </div>\n\n    <ion-row class=\"ion-padding-top\">\n        <hr/>\n        <p class=\"ion-label-subtitle\">{{\"PORTAL.NEARBY-CLINICS.HoursOfOperation\" | translate}}</p>\n        <p class=\"ion-label-subtitle\">{{ clinics.Schedule}}</p>\n    </ion-row>\n\n    <div *ngIf=\"distance !== ''\">\n        <hr/>\n        <ion-row>\n            <ion-label class=\"ion-label-subtitle\">Distancia : {{clinics.MedicalCenterDistance | number : '1.2-2'}} km</ion-label>\n        </ion-row>\n    </div>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-label>Como llegar</ion-label>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col size=\"4\">\n                    <a (click)=\"setTravelMode('DRIVING')\">\n                        <ion-icon size=\"large\" name=\"car-outline\"></ion-icon>\n                    </a>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <a (click)=\"setTravelMode('TRANSIT')\">\n                        <ion-icon size=\"large\" name=\"bus-outline\"></ion-icon>\n                    </a>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <a (click)=\"setTravelMode('WALKING')\" class=\"\">\n                        <ion-icon size=\"large\" name=\"walk-outline\"></ion-icon>\n                    </a>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-row class=\"ion-padding-top ion-justify-content-center\">\n        <ion-col size=\"6\">\n            <div *ngIf=\"validationCoordsPatient == true\">\n                <app-button [configuration]=\"configurationButtonCall\" (click)=\"call()\"></app-button>\n            </div>\n            <div *ngIf=\"validationCoordsPatient == false\">\n                <app-button [configuration]=\"configurationButtonCall\" (click)=\"call()\"></app-button>\n            </div>\n        </ion-col>\n        <ion-col size=\"6\">\n            <div *ngIf=\"validationCoordsPatient == true\">\n                <app-button [configuration]=\"configurationButtonCoordinate\" (click)=\"coordinate()\"></app-button>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <p>{{\"PORTAL.NEARBY-CLINICS-DETAIL.TitleAvailableServices\" | translate}}</p>\n        <div *ngFor=\"let servicio of clinics.Services\">\n            <p class=\"ion-label-subtitle\">{{servicio}}</p>\n        </div>\n    </ion-row>\n\n    <ion-row>\n\n        <agm-map [latitude]=\"clinics.Latitude\" [longitude]=\"clinics.Longitude\" [zoom]=\"17\">\n            <!--Mostrando la ubicación de la persona-->\n            <agm-marker [latitude]=\"currentLocation.Latitud\" [longitude]=\"currentLocation.Longitud\" [iconUrl]=\"imgRoute +'gps.png'\">\n                <agm-info-window>\n                    <strong>{{\"PORTAL.NEARBY-CLINICS.YourLocationMsg\" | translate}}</strong>\n                </agm-info-window>\n            </agm-marker>\n            <!--Mostrando ubicación del centro médico en el mapa-->\n            <agm-marker [latitude]=\"clinics.Latitude\" [longitude]=\"clinics.Longitude\" [iconUrl]=\" imgRoute + 'icon-emi5.png'\">\n                <agm-info-window>\n                    <strong>{{clinics.ClinicName}}</strong>\n                </agm-info-window>\n            </agm-marker>\n            <route-directive (sendErrorMessage)=\"showModalErrorHowArrive($event)\" (sendDistance)=\"showDistance($event)\" [origin]=\"currentLocation\" [destination]=\"clinics\" [travelMode]=\"travelMode\"></route-directive>\n            <!--Mostrando ubicación del paciente seleccionado en el nuevo flujo (Mapa)-->\n            <agm-marker *ngIf=\"validationCoordsPatient == false\" [latitude]=\"patientDirectionLatitude\" [longitude]=\"patientDirectionLongitude\" [iconUrl]=\"'./assets/uy/images/icons/location.png'\">\n                <agm-info-window>\n                    <strong>{{\"PORTAL.NEARBY-CLINICS.SelectPatientLocation\" | translate}}</strong>\n                </agm-info-window>\n            </agm-marker>\n        </agm-map>\n\n    </ion-row>\n\n</ion-content>";

/***/ }),

/***/ 25749:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/details-pending-coordinations/details-pending-coordinations.page.html?ngResource ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Coord. Pendientes</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row style=\"text-align: end;\">\n        <ion-label (click)=\"returnList($event)\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n            {{ \"PORTAL.NEARBY-CLINICS-DETAIL.BackToList\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label class=\"title-primary\">{{\"PORTAL.DETAILS-PENDING-COORDINATION.Title\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{objDetail.detail?.Names}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{objDetail.detail?.SpecialityName}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{objDetail.detail?.MedicalCenter?.ClinicName}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{objDetail.detail?.MedicalCenter?.Address}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{objDetail.detail?.Date}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-label>{{objDetail.detail?.Price}}</ion-label>\n    </ion-row>\n\n    <ion-row *ngIf=\"objDetail.detail?.Recommendations\">\n        <ion-label>{{\"PORTAL.DETAILS-PENDING-COORDINATION.Recommendations\" | translate}}</ion-label>\n    </ion-row>\n\n    <ion-row *ngIf=\"objDetail.detail?.Recommendations\">\n        <ion-label>{{objDetail.detail?.Recommendations}}</ion-label>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-col size=\"6\">\n            <ion-button (click)=\"call()\">{{\"PORTAL.DETAILS-PENDING-COORDINATION.TitleButtonCall\" | translate}}</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n            <ion-button (click)=\"cancelCoordination()\">{{\"PORTAL.DETAILS-PENDING-COORDINATION.TitleButtonCancelCoordination\" | translate}}</ion-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-padding-top\">\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"'./assets/uy/images/icon-emi5.png'\">\n            </agm-marker>\n        </agm-map>\n    </ion-row>\n\n</ion-content>";

/***/ }),

/***/ 95648:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/main-coordinations/main-coordinations.page.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Coordinaciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-top\">\n\n    <div class=\"main-coordinations__container\">\n        <div class=\"main-coordinations__section-selector\">\n            <span [class.main-coordinations__selected-section]=\"showNewCoordinations\" (click)=\"ShowNewCoordinations()\" id=\"newCoordinationsTab\">{{\"PORTAL.COORDINATION-MAIN.TitleTabNewCoordination\" |\n            translate}}</span>\n            <span (click)=\"returnPendingCoordinations({ showlist: false, showdetail: true })\" [class.main-coordinations__selected-section]=\"!showNewCoordinations\" id=\"pendingCoordinationsTab\">{{\"PORTAL.COORDINATION-MAIN.TitleTabConfirmedCoordinations\" | translate}}</span>\n        </div>\n        <div class=\"pending-coordinations-container\" *ngIf=\"!showNewCoordinations\">\n            <app-pending-coordinations (sendCoordinationDetail)=\"showPendingCoordinationDetail($event)\" [hidden]=\"showPendingCoordinationsList\"></app-pending-coordinations>\n            <app-details-pending-coordinations (returnToList)=\"returnPendingCoordinations($event)\" [objDetail]=\"detailCoordination\" [hidden]=\"showDetailPendingCoordination\"></app-details-pending-coordinations>\n        </div>\n        <app-new-coordination *ngIf=\"showNewCoordinations\" (returnToList)=\"returnList()\"></app-new-coordination>\n    </div>\n\n</ion-content>";

/***/ }),

/***/ 33257:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/new-coordination/new-coordination.page.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n\n    <div [hidden]=\"hiddenStepOne\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"title-primary\">{{\"PORTAL.NEW-COORDINATION.Title\" | translate}}</ion-label>\n        </ion-row>\n\n        <form #coordinationForm=\"ngForm\" (ngSubmit)=\"preConfirmCoordination()\">\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-label class=\"title-secondary\">{{\"PORTAL.NEW-COORDINATION.ForWhomItIs\" | translate}}</ion-label>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label class=\"ion-label-subtitle\" position=\"floating\">{{\"PORTAL.EXPIRED-MEDICAL-SERVICES.LabelPatient\" | translate}}</ion-label>\n                    <ion-select mode=\"ios\" [(ngModel)]=\"coordination.Number\" name=\"IdDocument\" [disabled]=\"whoDisabled\" id=\"IdDocument\" #Number=\"ngModel\" required (ionChange)=\"onChangeSelectPerson($event)\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option [selected]=\"coordination.Number === o.Document ? true : null\" *ngFor=\"let o of persons\" [value]=\"o.Document\">{{o.FullNames}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label class=\"ion-label-subtitle\" position=\"floating\">{{\"PORTAL.NEW-COORDINATION.ServicesType\" | translate}}</ion-label>\n                    <ion-select mode=\"ios\" [(ngModel)]=\"coordination.ServicesType\" #ServicesType=\"ngModel\" name=\"ServicesType\" [required]=\"servicesTypesRequired\" (ionChange)=\"onChangeServicesTypes($event)\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option *ngFor=\"let o of servicesTypes\" [value]=\"o.Code\">{{o.Name}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <div *ngIf=\"ServicesType.invalid && (ServicesType.dirty || ServicesType.touched)\" class=\"new-coordinations__form__error\">\n                        <ion-label *ngIf=\"ServicesType.errors?.required\">\n                            {{\"PORTAL.NEW-COORDINATION.ServicesTypeRequired\" | translate}}\n                        </ion-label>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label class=\"ion-label-subtitle\" position=\"floating\">{{\"PORTAL.NEW-COORDINATION.Speciality\" | translate}}</ion-label>\n                    <ion-select mode=\"ios\" [(ngModel)]=\"coordination.SpecialityCode\" #SpecialityCode=\"ngModel\" name=\"SpecialityCode\" required id=\"SpecialityCode\" (ionChange)=\"onChangeSpeciality($event)\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option *ngFor=\"let o of specialties\" [value]=\"o.Code\">{{o.Description}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <div *ngIf=\"SpecialityCode.invalid && (SpecialityCode.dirty || SpecialityCode.touched)\" class=\"new-coordinations__form__error\">\n                        <ion-label *ngIf=\"SpecialityCode.errors?.required\">\n                            {{\"PORTAL.NEW-COORDINATION.SpecialityRequired\" | translate}}\n                        </ion-label>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"specialtytTypeThreeDenied !== '3' && disableMedicalCenter === false\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label class=\"ion-label-subtitle\" position=\"floating\">{{\"PORTAL.NEW-COORDINATION.MedicalCenter\" | translate}}</ion-label>\n                    <ion-select mode=\"ios\" [(ngModel)]=\"coordination.ClinicCode\" #ClinicCode=\"ngModel\" name=\"ClinicCode\" required id=\"ClinicCode\" (ionChange)=\"selectedSchedule($event)\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option *ngFor=\"let o of medicalCenterSchedules\" [value]=\"o.ClinicCode\">{{o.ClinicName}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-col size=\"12\">\n                    <div *ngIf=\"ClinicCode.invalid && (ClinicCode.dirty || ClinicCode.touched)\" class=\"new-coordinations__form__error\">\n                        <ion-label *ngIf=\"ClinicCode?.errors?.required\">\n                            {{\"PORTAL.NEW-COORDINATION.MedicalCenterRequired\" | translate}}\n                        </ion-label>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"specialtytTypeThreeDenied === '3' && disableMedicalCenter === false\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label class=\"ion-label-subtitle\" position=\"floating\">{{\"PORTAL.NEW-COORDINATION.MedicalCenter\" | translate}}</ion-label>\n                    <ion-select mode=\"ios\" disabled ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option>{{\"PORTAL.NEW-COORDINATION.StatusDenietService\" | translate}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-row>\n\n            <ion-row *ngIf=\"disableMedicalCenter === true\">\n                <ion-item class=\"ion-item-form-input\">\n                    <ion-label class=\"ion-label-subtitle\" position=\"floating\">{{\"PORTAL.NEW-COORDINATION.MedicalCenter\" | translate}}</ion-label>\n                    <ion-select mode=\"ios\" disabled ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                        <ion-select-option>{{\"PORTAL.NEW-COORDINATION.StatusDenietService\" | translate}}</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-row>\n\n            <ion-row [hidden]=\"hiddenLabelSchedule\" class=\"ion-padding-top\">\n                <ion-label>{{\"PORTAL.NEW-COORDINATION.TitleSelectTime\" | translate}}</ion-label>\n            </ion-row>\n\n            <div class=\"container-time d-flex ion-justify-content-center\">\n\n                <ion-list>\n                    <ion-radio-group id=\"grupo1\">\n                        <div *ngFor=\"let o of schedules1\">\n                            <ion-item>\n                                <ion-label class=\"text-subtitle\"> {{o.Date}} </ion-label>\n                                <ion-radio slot=\"start\" [value]=\"o.date\" (click)=\"selectSchedule(o.YearMonthDay,o.Time,o.Date)\"></ion-radio>\n                            </ion-item>\n                        </div>\n                        <div *ngFor=\"let o of schedules2\">\n                            <ion-item>\n                                <ion-label class=\"text-subtitle\"> {{o.Date}} </ion-label>\n                                <ion-radio slot=\"start\" [value]=\"o.date\" (click)=\"selectSchedule(o.YearMonthDay,o.Time,o.Date)\"></ion-radio>\n                            </ion-item>\n                        </div>\n                        <div *ngFor=\"let o of schedules3\">\n                            <ion-item>\n                                <ion-label class=\"text-subtitle\"> {{o.Date}} </ion-label>\n                                <ion-radio slot=\"start\" [value]=\"o.date\" (click)=\"selectSchedule(o.YearMonthDay,o.Time,o.Date)\"></ion-radio>\n                            </ion-item>\n                        </div>\n                    </ion-radio-group>\n                </ion-list>\n\n                <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n                    <ion-col>\n                        <app-button class=\"new__coordination__continue-button\" [configuration]=\"continueButtonConfig\" (click)=\"preConfirmCoordination()\" [disabled]=\"!coordinationForm.form.valid || disabledButton\"></app-button>\n                    </ion-col>\n                </ion-row>\n\n            </div>\n\n        </form>\n\n    </div>\n\n    <!--Detalle-->\n    <div [hidden]=\"hiddenStepTwo\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"ion-label-subtitle\" (click)=\"returnNewCoordination()\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n                {{\"PORTAL.DETAILS-NEW-COORDINATION.Return\" | translate}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"title-primary\">{{\"PORTAL.NEW-COORDINATION.Title\" | translate}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"title-subtitle\">{{\"PORTAL.DETAILS-NEW-COORDINATION.Title\" | translate}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"ion-label-title\">- {{coordination?.FullNames}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>- {{coordination?.SpecialityName}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>- {{coordination?.ServicesTypeName}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"ion-label-title\">- {{coordination?.ClinicName}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>- {{coordination.ClinicAddress}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>- {{coordination?.Date}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label>- {{coordination?.Price}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <div [hidden]=\"hiddenButtons\">\n                <div [hidden]=\"hiddenPayment\">\n                    <app-button [configuration]=\"payCoordinationButtonConfig\" (click)=\"VisibleThree()\" [disabled]=\"disabledButton\"></app-button>\n                </div>\n                <div [hidden]=\"!hiddenPayment\">\n                    <ion-button (click)=\"confirmCoordination()\">\n                        {{\"PORTAL.NEW-COORDINATION.TitleButtonConfirmCoordination\" | translate}}\n                    </ion-button>\n                </div>\n            </div>\n        </ion-row>\n\n        <div [hidden]=\"hiddenRecommendations\">\n            <ion-row class=\"ion-padding-top\">\n                <ion-label>{{\"PORTAL.DETAILS-NEW-COORDINATION.Recommendations\" | translate}}</ion-label>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-label>{{coordination?.Recommendations}}</ion-label>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-col size=\"6\">\n                    <button (click)=\"call()\">\n                    {{\"PORTAL.DETAILS-NEW-COORDINATION.TitleButtonCall\" | translate}}\n                </button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <button (click)=\"cancelCoordination()\">\n                    {{\"PORTAL.DETAILS-NEW-COORDINATION.TitleButtonCancelCoordination\" | translate}}\n                </button>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-label>{{\"PORTAL.DETAILS-NEW-COORDINATION.Recommendation\" | translate}}</ion-label>\n            </ion-row>\n        </div>\n\n        <ion-row class=\"ion-padding-top\">\n            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\n                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"'./assets/uy/images/icon-emi5.png'\">\n                </agm-marker>\n            </agm-map>\n        </ion-row>\n\n    </div>\n    <!--Termina Detalle-->\n\n    <!--Pago-->\n    <div [hidden]=\"hiddenStepThree\">\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"title-primary\">{{\"PORTAL.NEW-COORDINATION.TitleSelectPayment\" | translate}}</ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding-top\">\n            <ion-label class=\"title-subtitle\">{{\"PORTAL.NEW-COORDINATION.DescriptionSelectPayment\" | translate}}</ion-label>\n        </ion-row>\n\n        <form id=\"formCoordinationId\" class=\"emi-formservicio\">\n\n            <ion-input type=\"hidden\" name=\"PWToken\" id=\"PWToken\"></ion-input>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-label>Pago en línea</ion-label>\n            </ion-row>\n\n            <ion-row class=\"ion-padding-top\">\n                <div *ngFor=\"let slide of franchisesPayment; let i = index\">\n                    <ion-item>\n                        <ion-thumbnail>\n                            <img [src]=\"getCardImage(slide.IconWeb)\" />\n                        </ion-thumbnail>\n                    </ion-item>\n                </div>\n            </ion-row>\n\n            <hr/>\n\n            <ion-row class=\"ion-padding-top\">\n                <ion-col>\n                    <app-button [configuration]=\"payButtonConfig\" (click)=\"goToPayCoordination()\" id=\"buttonPayCoordinationId\" [disabled]=\"disabledButton\"></app-button>\n                </ion-col>\n            </ion-row>\n\n            <div class=\"ion-padding-top\" *ngFor=\"let obj of coordinationPaymentMethods\">\n\n                <i class=\"{{obj.IconWeb}}\"></i>\n\n                <ion-row class=\"ion-padding-top\">\n                    <ion-label>{{obj.PaymentMethodName}}</ion-label>\n                </ion-row>\n\n                <ion-row class=\"ion-padding-top\">\n                    <ion-label>{{obj.PaymentMethodDescription}}</ion-label>\n                </ion-row>\n\n                <ion-row class=\"ion-padding-top\">\n                    <ion-item *ngIf=\"obj.PaymentMethodCode === paymentMethodDebitInvoiceCode\">\n                        <ion-label>{{\"PORTAL.NEW-COORDINATION.NumberOfInstallments\" | translate}}</ion-label>\n                        <ion-select mode=\"ios\" [(ngModel)]=\"coordination.Installments\" name=\"Installments\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n                            <ion-select-option *ngFor=\"let o of obj.Installments\" [value]=\"o\">\n                                {{o}}\n                            </ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-row>\n\n                <ion-row class=\"ion-padding-top d-flex ion-justify-content-center\">\n                    <ion-button (click)=\"payCoordination(obj)\">\n                        {{\"PORTAL.NEW-COORDINATION.TitleButtonpay\" | translate}}\n                    </ion-button>\n                </ion-row>\n\n            </div>\n\n        </form>\n\n    </div>\n\n    <app-loader *ngIf=\"isLoading\"></app-loader>\n\n</div>";

/***/ }),

/***/ 44281:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/components/pending-coordinations/pending-coordinations.page.html?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-row class=\"row pending-coordinations__title\">\n    <ion-label class=\"title-primary\">{{\"PORTAL.PENDING-COORDINATIONS.Title\" | translate}}</ion-label>\n</ion-row>\n\n<ion-row *ngFor=\"let coordination of coordinationsPending\" (click)=\"sendDetail($event, coordination)\">\n\n    <ion-card>\n        <ion-row>\n            <ion-col size=\"2\" style=\"text-align:center; align-self:center;\">\n                <img class=\"img-location\" src=\"{{imgRoute}}user_patient.png\" alt=\"Ubicación del centro médico\">\n            </ion-col>\n            <ion-col size=\"10\">\n                <ion-card-header>\n                    <ion-card-title>{{coordination.Names}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-label class=\"ion-card-subtitle ion-padding-top\">{{coordination.SpecialityName}}</ion-label>\n                    <ion-label class=\"ion-card-subtitle ion-padding-top\">{{coordination.MedicalCenter.ClinicName}}</ion-label>\n                    <ion-label class=\"ion-card-subtitle ion-padding-top\">{{coordination.MedicalCenter.Address}}</ion-label>\n                    <ion-label class=\"ion-card-subtitle ion-padding-top\">{{coordination.Date}}</ion-label>\n                </ion-card-content>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n</ion-row>";

/***/ }),

/***/ 3512:
/*!************************************************************************************!*\
  !*** ./src/app/portal/moduls/medical-centers/medical-centers.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Centros Médicos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row class=\"ion-padding-top\">\n        <ion-item lines=\"none\" *ngIf=\"validationCoordsPatient == true\" class=\"title-clinic\">\n            <ion-label class=\"title-primary\">{{\"PORTAL.NEARBY-CLINICS.Description\" | translate}}</ion-label>\n        </ion-item>\n    </ion-row>\n\n    <div *ngFor=\"let clinic of clinics | sort:'MedicalCenterDistance'\" style=\"text-align: start;\" (click)=\"clinicDetail(clinic)\">\n\n        <ion-card>\n            <ion-row>\n                <ion-col size=\"2\" style=\"text-align:center; align-self:center;\">\n                    <!-- <img class=\"img-location\" src=\"{{imgRoute}}icon-emi5.png\" alt=\"Ubicación del centro médico\"> -->\n                    <ion-icon name=\"location-outline\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"10\">\n                    <ion-card-header>\n                        <ion-card-title>{{clinic.ClinicName}}</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        <ion-label class=\"ion-card-subtitle\">{{clinic.Address}}</ion-label>\n                        <br>\n                        <ion-label class=\"ion-card-subtitle\">Distancia : {{clinic.MedicalCenterDistance | number : '1.2-2'}} km</ion-label>\n                        <br>\n                        <!-- <img src=\"{{imagesRoute}}/icon-emi5.png\" alt=\"Ubicación del centro médico\"> -->\n                        <div *ngIf=\"validationCoordsPatient == false\">\n                            <hr/>\n                            <ion-label class=\"ion-card-subtitle\">{{\"PORTAL.NEARBY-CLINICS.AdultMedicalConsultation\" | translate}}</ion-label>\n                            <br>\n                            <ion-label class=\"ion-card-subtitle\">{{\"PORTAL.NEARBY-CLINICS.EstimatedTimeOfAttention\" | translate}}</ion-label>\n                            <br>\n                            <ion-label class=\"ion-card-subtitle\">{{clinic.AdultTime}}</ion-label>\n                        </div>\n                        <div *ngIf=\"validationCoordsPatient == false\">\n                            <hr/>\n                            <ion-label class=\"ion-card-subtitle\">{{\"PORTAL.NEARBY-CLINICS.PediatricMedicalConsultation\" | translate}}</ion-label>\n                            <br>\n                            <ion-label class=\"ion-card-subtitle\">{{\"PORTAL.NEARBY-CLINICS.EstimatedTimeOfAttention\" | translate}}</ion-label>\n                            <br>\n                            <ion-label class=\"ion-card-subtitle\">{{clinic.PediatricTime}}</ion-label>\n                        </div>\n                    </ion-card-content>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n\n    </div>\n\n    <ion-row class=\"ion-padding-top\">\n\n        <agm-map #gm [fitBounds]=\"latlngBounds\" class=\"map-nearby\">\n            <!--Mostrando la ubicación de la persona-->\n            <agm-marker [latitude]=\"currentLocation.Latitud\" [longitude]=\"currentLocation.Longitud\" [iconUrl]=\"imgRoute + 'gps.png'\">\n                <agm-info-window>\n                    <strong>{{\"NEARBY-CLINICS.YourLocationMsg\" | translate}}</strong>\n                </agm-info-window>\n            </agm-marker>\n            <!--Mostrando ubicación del centro médico en el mapa-->\n            <agm-marker *ngFor=\"let marker of clinics\" (mouseOver)=\"onMouseOver(infoWindow,gm)\" [latitude]=\"marker.Latitude\" [longitude]=\"marker.Longitude\" [iconUrl]=\"'./assets/uy/images/icon-emi5.png'\">\n                <agm-info-window #infoWindow>\n                    <strong class=\"strongInfowindow\" (click)=\"clinicDetail(marker)\">{{marker.ClinicName}}</strong>\n                </agm-info-window>\n            </agm-marker>\n            <!--Mostrando ubicación del paciente seleccionado en el nuevo flujo (Mapa)-->\n            <agm-marker *ngIf=\"validationCoordsPatient == false\" [latitude]=\"PatientAddressLatitude\" [longitude]=\"PatientAddressLongitude\" [iconUrl]=\"'./assets/images-uy/icon-ubication-patient.png'\">\n                <agm-info-window>\n                    <strong>{{\"NEARBY-CLINICS.SelectPatientLocation\" | translate}}</strong>\n                </agm-info-window>\n            </agm-marker>\n        </agm-map>\n\n    </ion-row>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_portal_moduls_medical-centers_medical-centers_module_ts.js.map