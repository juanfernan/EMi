import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';
import { AddressDetail } from '../../models/address-detail';
import { CardPhoneModel } from '../../models/card-phone';
import { PhoneNumberModel } from '../../models/phone-number';
import { PhonesNumbersModel } from '../../models/phone-numbers';
import { RequestPhoneNumbers } from '../../models/request-phone-numbers';
import { PhoneNumberService } from '../../services/phone-number.service';
import { ShowDetailsService } from '../../services/show-details.service';
import { ModalPhonesCenterComponent } from '../modal-phones-center/modal-phones-center.component';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type-service.page.html',
  styleUrls: ['./card-type-service.page.scss'],
})
export class CardTypeServicePage implements OnInit {

  @Input() service;
  @Input() acceptConsent: boolean;
  imgRoute: string;
  country: string;
  environment: any;
  requestPhoneNumber: RequestPhoneNumbers;
  listNumberPhones: PhonesNumbersModel;
  _addressDetail = new AddressDetail();
  informativeTitleModal: string = "Información";
  bsModalRef: BsModalRef;

  constructor(
    private phoneNumberServices: PhoneNumberService,
    private urlDataService: UrlDataService,
    private showDetailsService: ShowDetailsService,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.environment = environment;
    this.country = environment.country;
    this.imgRoute = environment.imagesRoute;
   }

  ngOnInit() {

  }

  loadService() {
    if (!this.acceptConsent) {
      switch (this.service.Code) {
        case "02":
        case "07":
        case "09":
        case "10":
          this.loadVideoCall();
          break;
      }
    }
  }

  loadPhoneExperienceCenter() {
    this.phoneNumberServices.getPhonesExperienceCenter(this.requestPhoneNumber).subscribe((response: any) => {
      if (response) {
        response.UPhoneses.forEach((element: any) => {
          this.listNumberPhones = response;
        });
        if (this.listNumberPhones.UPhoneses.length == 0) {
          this.loadPhoneEperienceCenterByDefault();
          this.loadModalPhoneNumbers();
        }
        else {
          this.loadModalPhoneNumbers();
        }
      }

    });
  }

  getUserLocation() {
    this.requestPhoneNumber = new RequestPhoneNumbers();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.requestPhoneNumber.Latitud = String(position.coords.latitude);
        this.requestPhoneNumber.Longitud = String(position.coords.longitude);
        this.loadPhoneExperienceCenter();
      }, error => {
        this.generateInformativeModal("Atención", "En este momento no es posible obtener tu ubicación. Verifica los permisos.");
      });
    } else {
      this.requestPhoneNumber.Latitud = "";
      this.requestPhoneNumber.Longitud = "";
      this.loadPhoneExperienceCenter();
    }
  }

  loadPhoneEperienceCenterByDefault() {
    let listNumberPhone = new PhoneNumberModel();
    let numberPhone = new CardPhoneModel();

    if (this.country == 'co') {
      listNumberPhone.CityName = "Montevideo";
      listNumberPhone.Phones = [];
      numberPhone.Tel = "147";
      listNumberPhone.Phones.push(numberPhone);
    }
    else {
      listNumberPhone.CityName = "Medellín";
      listNumberPhone.Phones = [];
      numberPhone.Tel = "6044441330";
      listNumberPhone.Phones.push(numberPhone);
    }

    this.listNumberPhones.UPhoneses.push(listNumberPhone);
  }

  loadModalPhoneNumbers() {
    const initialState: ModalOptions = {
      initialState: {
        listPhoneNumbers: this.listNumberPhones,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: true
    };
    return this.modalService.show(ModalPhonesCenterComponent, initialState);
  }

  loadVideoCall() {
    this._addressDetail.ServiceType = this.service.ServiceType;
    this._addressDetail.PatientDocumentType = this.urlDataService.SelectedPerson.DocumentType;
    this._addressDetail.PatientDocument = this.urlDataService.SelectedPerson.Document;
    this._addressDetail.Country = "";
    this._addressDetail.DepartmentId = "";
    this._addressDetail.CityId = "";
    this._addressDetail.NeighborhoodId = "008";
    this._addressDetail.Street = "";
    this._addressDetail.Bis = "";
    this._addressDetail.Apartment = "";
    this._addressDetail.AddressDetails = "";
    this._addressDetail.Latitude = null;
    this._addressDetail.Longitude = null;
    this._addressDetail.PatientCellPhone = this.urlDataService.SelectedPerson.CellPhone;
    this._addressDetail.Coverage = true;
    this.videoCallPetition(this._addressDetail);
  }

  videoCallPetition(_addressDetail: any) {
    this.showDetailsService
      .getVideoCallPetition(_addressDetail)
      .subscribe(
        (result) => {
          if (result.StatusCode === 0) {
            if (result.Petition.Cod == '1') {
              this.urlDataService.UrlService = result.Petition.Return.Url;
              this.router.navigate(['/videochat']);
            } else {
              this.generateInformativeModal(this.informativeTitleModal, result.Petition.Message);
            }
          } else {
            this.generateInformativeModal(result.Title, result.Message);
          }
        },
        error => this.ErrorRegister(error));
  }

  private ErrorRegister(error: any) {
    this.generateInformativeModal('Inconvenientes con el portal', 'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.');
  }

  generateInformativeModal(subTitle: string, description: string) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: true,
        textButton: 'Continuar',
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
