import { AgmMap, GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { Component, Directive, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Clinic } from '../../../medical-centers/models/clinics';
import { OptionsSelectedInStepFour } from '../agenda-step-four/agenda-step-four.page';
import { OptionsSelectedInStepOne } from '../agenda-step-one/agenda-step-one.page';
import { OptionsSelectedInStepThree } from '../agenda-step-three/agenda-step-three.page';
import { OptionsSelectedInStepTwo } from '../agenda-step-two/agenda-step-two.page';
import * as moment from 'moment';
import { DateUtils } from 'src/app/shared/utils/DateUtils';

export enum ScreenShow {
  CONFIRM = 0,
  FINALIZED = 1
}

@Directive({
  selector: 'route-directive'
})

export class RouteDirective {

  @Input() origin: any = {};
  @Input() destination: any = {};
  @Input() travelMode: any = '';
  @Output() sendDistance = new EventEmitter();
  @Output() sendErrorMessage = new EventEmitter();

  results: any;
  distance: string;
  duration: string;
  private arrive = { distance: "", duration: "" };
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });

  constructor(
    private googlemapsAPI: GoogleMapsAPIWrapper,
    private router: Router,
  ) {

  }

  ngOnChanges() {
    if (this.travelMode != '') {
      this.howArrive();
      this.calculateDistance();
    }
  }

  public howArrive() {
    const that = this;
    this.googlemapsAPI.getNativeMap().then((map) => {
      var directionsService = new google.maps.DirectionsService();
      /* Clear previous route */
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
      // TODO mostrar el error en un modal
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
          // TODO mostrar el error en un modal
          console.log('Error al mostrar la distancia - status: ', status);
        }
      });
    });
  }
}

@Component({
  selector: 'app-agenda-step-five',
  templateUrl: './agenda-step-five.page.html',
  styleUrls: ['./agenda-step-five.page.scss'],
  providers: [GoogleMapsAPIWrapper]
})
export class AgendaStepFivePage implements OnInit {

  @ViewChild(RouteDirective) routeDirective: RouteDirective;
  @ViewChild(AgmMap) mapElement: AgmMap;

  @Input("screenShow") screenShow: ScreenShow;
  @Input("optionSelectedInStepOne") optionSelectedInStepOne: OptionsSelectedInStepOne | null;
  @Input("optionSelectedInStepTwo") optionSelectedInStepTwo: OptionsSelectedInStepTwo | null;
  @Input("optionsSelectedInStepThree") optionsSelectedInStepThree: OptionsSelectedInStepThree | null;
  @Input("optionsSelectedInStepFour") optionsSelectedInStepFour: OptionsSelectedInStepFour | null;
  
  public isLoading: boolean = false;
  imagesRoute: string = environment.imagesRoute;
  patientDirectionLatitude: any;
  patientDirectionLongitude: any;
  validationCoordsPatient: boolean;
  code: number;
  travelMode: string = '';
  private sub: any;

  currentLocation = new Clinic();
  clinicLocation = new Clinic();

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private googlemapsAPI: GoogleMapsAPIWrapper,
    private route: ActivatedRoute
    ) {

  }

  async ngOnInit() {
    this.getClinicLocation();
    this.patientDirectionLatitude = Number(this.route.snapshot.paramMap.get('patientDirectionLatitude'));
    this.patientDirectionLongitude = Number(this.route.snapshot.paramMap.get('patientDirectionLongitude'));
    //Validando flujo que toma el usuario, si hay coordenadas, mostrando este nuevo flujo
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
      // this.getClinics();
    } catch (error) {
      // TODO mostrar el error en un modal
      console.log(error);
    }

  }

  showModalErrorHowArrive(event: any): void {
    // TODO Autorizar Distance Matrix en OP de google
    /*
    this.bsModalRef = this.generateInformativeModal('Error al mostrar la ruta', 'El modo de viaje, en tu ubicación no se encuentra disponible.', true);
    */
  }

  public getSpecialtyName(): string | null {
    if (this.optionsSelectedInStepThree && this.optionsSelectedInStepThree.specialty) {
      return this.optionsSelectedInStepThree.specialty.name;
    }
    return null;
  }

  /* Position user */
  getLocation(position: any) {
    this.currentLocation.Latitud = position.latitude;
    this.currentLocation.Longitud = position.longitude;
  }

  /* Position Cliic */
  getClinicLocation() {
    let lat:any = this.optionsSelectedInStepThree!.specialist?.latitude;
    let lon:any = this.optionsSelectedInStepThree!.specialist?.longitude;
    this.clinicLocation.Latitud = lat;
    this.clinicLocation.Longitud = lon;
  }

  public getClinicalName(): string | null {
    if (this.optionsSelectedInStepThree && this.optionsSelectedInStepThree.specialist) {
      return this.optionsSelectedInStepThree.specialist.clinicalName;
    }
    return null;
  }

  public getClinicalAddres(): string | null {
    if (this.optionsSelectedInStepThree && this.optionsSelectedInStepThree.specialist) {
      return this.optionsSelectedInStepThree.specialist.address;
    }
    return null;
  }

  public getClinicalCity(): string | null {
    if (this.optionsSelectedInStepThree && this.optionsSelectedInStepThree.specialist) {
      return this.optionsSelectedInStepThree.specialist.cityName;
    }
    return null;
  }

  public getSpecialistName(): string | null {
    if (this.optionsSelectedInStepThree && this.optionsSelectedInStepThree.specialist) {
      return this.optionsSelectedInStepThree.specialist.names;
    }
    return null;
  }

  public getAvailableDayDescription(): string | null {
    if (this.optionsSelectedInStepFour && this.optionsSelectedInStepFour.availableDay) {
      // TO DO revizar moment.js
      moment.locale('es');
      return moment((this.optionsSelectedInStepFour.availableDay.code)).format('dddd DD [de] MMMM [de] YYYY');
      //  return moment(this.optionsSelectedInStepFour.availableDay.code).format("DD/MM/YYYY");
    }
    return null;
  }

  public getAvailableDay(): string | null {
    if (this.optionsSelectedInStepFour && this.optionsSelectedInStepFour.availableDay) {
      return moment(this.optionsSelectedInStepFour.availableDay.code).format("DD/MM/YYYY");
    }
    return null;
  }

  public getShortTime(): string | null {
    if (this.optionsSelectedInStepFour && this.optionsSelectedInStepFour.schedule) {
      return this.optionsSelectedInStepFour.schedule.startShortTime;
    }
    return null;
  }

}
