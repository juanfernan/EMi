import { AgmMap, GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { Component, Directive, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';
import { Clinic } from '../../models/clinics';
import { MedicalCentersGeneralService } from '../../services/medical-centers-general.service';

@Directive({
  selector: 'route-directive'
})
export class RouteDirective {

  @Input() origin: any = {};
  @Input() destination: any = {};
  @Input() travelMode: any = '';
  @Output() sendDistance = new EventEmitter();
  @Output() sendErrorMessage = new EventEmitter();

  imgRoute: string;
  results: any;
  distance: string;
  duration: string;
  private arrive = { distance: "", duration: "" };
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  environment: any;

  constructor(
    private googlemapsAPI: GoogleMapsAPIWrapper,
    private router: Router,
  ) {
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
   }

  ngOnChanges() {
    if (this.travelMode != '') {
      this.howArrive();
      this.calculateDistance();
    }
  }

  private howArrive() {
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
        } else {
          that.sendErrorMessage.emit(true);
        }
      });
    }, err => {
      // TODO mostrar el error en modal
      console.log('error en como llegar: ', err);
    });
  }

  private calculateDistance() {
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
        } else {
          // TODO mostrar el error en modal
          console.log('Error al mostrar la distancia - status: ', status);
        }
      });
    });
  }
}

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.page.html',
  styleUrls: ['./clinic-details.page.scss'],
})
export class ClinicDetailsPage implements OnInit {

  @ViewChild(RouteDirective) routeDirective: RouteDirective;
  @ViewChild(AgmMap) mapElement: AgmMap;

  isCollapsed = false;
  clinics: any = {};
  latlngBounds: any;
  currentLocation = new Clinic();
  code: number;
  travelMode: string = '';
  private sub: any;
  imgRoute: string
  environment: any;
  zoom: number = -10;
  distance: string = "";
  translate: TranslateService;
  country: string;
  patientDirectionLatitude: any;
  patientDirectionLongitude: any;
  validationCoordsPatient: boolean;
  configurationButtonCall: ButtonConfiguration;
  configurationButtonCoordinate: ButtonConfiguration;
  bsModalRef: BsModalRef;

  constructor(
    private medicalCentersService: MedicalCentersGeneralService, 
    private route: ActivatedRoute,
    translate: TranslateService,
    private modalService: BsModalService,
    private router: Router, 
    private urlDataService: UrlDataService,
    private mapsAPILoader: MapsAPILoader,
    private googlemapsAPI: GoogleMapsAPIWrapper
  ) {
    this.urlDataService.setHeaderNavPortal(['Centros Médicos', 'Detalles']);
    this.translate = translate;
    translate.setDefaultLang(environment.country);
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    this.country = environment.country;
    this.configurationButtonCoordinate = this.generateButton('Coordinar');
    this.configurationButtonCall = this.generateButton('Llamar');
   }

  generateButton(text: string) {
    let configurationButton = new ButtonConfiguration();
    configurationButton.buttonType = ButtonType.Primary;
    configurationButton.text = text;
    configurationButton.width = "140px";
    return configurationButton;
  }

  generateInformativeModal(subTitle: string, description: string, isError: boolean) {
    const initialState: ModalOptions = {
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
    return this.modalService.show(InformativeModalComponent, initialState);
  }

  async ngOnInit() {
    this.patientDirectionLatitude = Number(this.route.snapshot.paramMap.get('patientDirectionLatitude'));
    this.patientDirectionLongitude = Number(this.route.snapshot.paramMap.get('patientDirectionLongitude'));
    // Validando flujo que toma el usuario, si hay coordenadas, mostrando este nuevo flujo
    if (this.patientDirectionLongitude == '0' || this.patientDirectionLongitude == null || this.patientDirectionLongitude.length < 1 ||
      this.patientDirectionLatitude == '0' || this.patientDirectionLatitude == null || this.patientDirectionLatitude.length < 1) {
      this.validationCoordsPatient = true;
    } else {
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
    } catch (error) {
      // TODO mostrar el error en modal
      console.log(error);
    }
  }

  goBack(): void {
    window.history.back();
  }

  getClinics() {
    return this.medicalCentersService
      .getClinicsNearby('Coordinations/MedicalCenters').subscribe((result: any) => {
        this.clinics = result['MedicalCenterSchedules'];
        this.clinics.forEach((m: any) => {
          m.Latitude = Number(m.Latitude);
          m.Longitude = Number(m.Longitude);
        });
        //SetBounds
        let clinicInfo: any;
        this.clinics.forEach((m: any) => {
          if (Number(m.ClinicCode) === this.code) {
            clinicInfo = m;
          }
        });
        this.mapsAPILoader.load().then(() => {
          this.latlngBounds = new window['google'].maps.LatLngBounds();
          this.latlngBounds.extend(new window['google'].maps.LatLng(this.clinics.Latitude, this.clinics.Longitude))
          this.zoom = 1;
          this.mapElement.zoom = 5;
        });
        this.clinics = clinicInfo;
      },
        error => this.ErrorRegister(error));
  }

  getLocation(position: any) {
    this.currentLocation.Latitud = position.latitude;
    this.currentLocation.Longitud = position.longitude;
  }

  setTravelMode(mode: string): void {
    this.travelMode = mode;
  }

  showModalErrorHowArrive(event: any): void {
    // TODO Autorizar Distance Matrix en OP de google
    this.bsModalRef = this.generateInformativeModal('Error al mostrar la ruta', 'El modo de viaje, en tu ubicación no se encuentra disponible.', true);
  }

  showDistance(event: any): void {
    this.distance = event.distance;
  }

  call() {
    this.bsModalRef = this.generateInformativeModal('Línea de atención', 'Comunícate a la línea de atención del centro de coordinación de centros médicos 24873333', true);
  }

  coordinate() {
    this.router.navigate(['/portal/admin/clinics/coordinations'], { replaceUrl: true })
  }

  private ErrorRegister(error: any) {
    this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'No se pudo procesar la solicitud, por favor inténtelo más tarde.', true);
  }

}
