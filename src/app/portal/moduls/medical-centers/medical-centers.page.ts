import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';
import { Clinic } from './models/clinics';
import { MedicalCentersGeneralService } from './services/medical-centers-general.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-medical-centers',
  templateUrl: './medical-centers.page.html',
  styleUrls: ['./medical-centers.page.scss'],
  providers: [GoogleMapsAPIWrapper]
})
export class MedicalCentersPage implements OnInit {

  clinics: any;
  latlngBounds: any;
  currentLocation = new Clinic();
  imgRoute: string;
  environment: any;
  medicalCentersLatitude: any;
  medicalCenterLongitude: any;
  PatientAddressLatitude: any;
  PatientAddressLongitude: any;
  medicalCenterclinicCode: any;
  patientDirectionLongitude: any;
  patientDirectionLatitude: any;
  validationCoordsPatient: boolean;
  validateNewFlowNoCoords: boolean;
  bsModalRef: BsModalRef;

  constructor(
    private medicalCentersService: MedicalCentersGeneralService, 
    private translate: TranslateService,
    private router: Router, 
    private route: ActivatedRoute,
    private modalService: BsModalService, 
    private urlDataService: UrlDataService,
    private googlemapsAPI: GoogleMapsAPIWrapper,
    private mapsAPILoader: MapsAPILoader
  ) {
    this.urlDataService.setHeaderNavPortal(['Centros Médicos']);
    this.translate = translate;
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    translate.setDefaultLang(environment.country);
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
    let patientDirectionLatitude: any = this.route.snapshot.paramMap.get('patientDirectionLatitude');
    if (patientDirectionLatitude === 'NaN' && this.validationCoordsPatient == false) {
      this.validateNewFlowNoCoords = true;
      this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'No se pudo obtener las distancias de los centros médicos, no se encontraron coordenadas del paciente, por favor espere o comuniquese con soporte.', true);
    }
  }

  async getClinics() {
    return await this.medicalCentersService
      .getClinicsNearby('Coordinations/MedicalCenters')
      .subscribe((result: any) => {
        this.clinics = result['MedicalCenterSchedules'];
        //  AAE - Cálculo de distancias en kilómetros y pocicionamiento de centros médicos según cercanía.
        this.clinics.forEach((medicalCenter: any) => {
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
          } else {
            this.validationCoordsPatient = false;
          }
          // Lenado y inicialización de la función
          let latitudeOnePatientDirection: any = this.PatientAddressLatitude;
          let lengthOnePatientDirection: any = this.PatientAddressLongitude;
          let latitudeTwoMedicalCenter: any = this.medicalCentersLatitude;
          let lengthTwoMedicalCenter: any = this.medicalCenterLongitude;
          let rad = function (x: number) { return x * Math.PI / 180; }
          let LandRadioKilometers = 6378.137; // Radio de la tierra en km
          let distanceLatitude = rad(latitudeTwoMedicalCenter - latitudeOnePatientDirection);
          let distanceLength = rad(lengthTwoMedicalCenter - lengthOnePatientDirection);
          let LandAndUbications = Math.sin(distanceLatitude / 2) * Math.sin(distanceLatitude / 2) + Math.cos(rad(latitudeOnePatientDirection)) * Math.cos(rad(latitudeTwoMedicalCenter)) * Math.sin(distanceLength / 2) * Math.sin(distanceLength / 2);
          let squareRoot = 2 * Math.atan2(Math.sqrt(LandAndUbications), Math.sqrt(1 - LandAndUbications));
          let distance = (LandRadioKilometers * squareRoot);
          medicalCenter.MedicalCenterDistance = distance;
        });

        // Conversion
        this.clinics.forEach((m: any) => {
          m.Latitude = Number(m.Latitude);
          m.Longitude = Number(m.Longitude);
        });

        // Se crea el cuadro de mapa
        this.setBounds();
      },
        error => this.ErrorRegister(error));
  }

  private setBounds(): void {
    this.mapsAPILoader.load().then(() => {
      this.latlngBounds = new google.maps.LatLngBounds();
      this.clinics.forEach((marker: any) => {
        this.latlngBounds.extend(new google.maps.LatLng(marker.Latitude, marker.Longitude))
      });
    });
  }

  private getLocation(position: any) {
    this.currentLocation.Latitud = position.latitude;
    this.currentLocation.Longitud = position.longitude;
  }

  clinicDetail(clinic: any): void {
    if (this.PatientAddressLongitude == 0) {
      //Si es el flujo normal, enviar el parametro habitual
      this.router.navigate(['portal/admin/clinics/details', clinic.ClinicCode]);
    } else {
      //Si es el flujo de clinicas por distancia, enviando parametros para validaciones en el detalle.
      this.router.navigate(['portal/admin/clinics/details', clinic.ClinicCode, this.PatientAddressLatitude, this.PatientAddressLongitude]);
    }
  }

  onMouseOver(infoWindow: any, gm: any) {
    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }

  private ErrorRegister(error: any) {
    this.bsModalRef = this.generateInformativeModal('Inconvenientes con el portal', 'No se pudo procesar la solicitud, por favor inténtelo más tarde.', true);
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

}
