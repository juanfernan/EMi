import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { City } from 'src/app/public/models/entities/city';
import { CivilStatus } from 'src/app/public/models/entities/civil-status';
import { Departament } from 'src/app/public/models/entities/departament';
import { DocumentType } from 'src/app/public/models/entities/document-type';
import { Gender } from 'src/app/public/models/entities/gender';
import { MedicalCoverage } from 'src/app/public/models/entities/medical-coverage';
import { Neighborhood } from 'src/app/public/models/entities/neighborhood';
import { Occupation } from 'src/app/public/models/entities/occupation';
import { DocumentValidationRequest } from 'src/app/public/models/requests/document-validation-request';
import { DocumentService } from 'src/app/public/services/document.service';
import { PersonService } from 'src/app/public/services/person.service';
import { PlaceService } from 'src/app/public/services/place.service';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType, ColorType } from 'src/app/shared/enums/enumerations';
import { onlyNumber, ValidatorStartCellPhoneNumber } from 'src/app/shared/helpers/validator';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { ProgressBarModel } from 'src/app/shared/models/progress-bar-model';
import { UserLogin } from 'src/app/shared/models/user-login';
import { CommonMiddService } from 'src/app/shared/services/common-midd.service';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';
import { MyData } from './models/my-data';
import { String, StringBuilder } from 'typescript-string-operations';
import { MyDataService } from './services/my-data.services';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
//import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.page.html',
  styleUrls: ['./my-data.page.scss']
})
export class MyDataPage implements OnInit {
  progressBarModel: ProgressBarModel
  imgRoute: string;

  formPersonalData: FormGroup;
  formContactData: FormGroup;

  docType: Array<DocumentType>;
  civilStatusEntity: Array<CivilStatus>;
  occupationEntity: Array<Occupation>;
  gender: Array<Gender>;
  medicalCoverageEntity: Array<MedicalCoverage>
  departament: Array<Departament>;
  cities: Array<City>;
  neighborhoods: Array<Neighborhood>

  isLoading: boolean;
  bsModalRef?: BsModalRef;
  maxDate = new Date();
  max: Date;
  minDate = {
    year: this.maxDate.getUTCFullYear() - environment.adultAge,
    month: this.maxDate.getUTCMonth(),
    day: this.maxDate.getUTCDate()
  }
  configurationButtonSave = new ButtonConfiguration();
  configurationButtonCancel = new ButtonConfiguration();
  buttonSaveText: string;
  buttonCancelText: string;
  showPersonalData = false;

  userLogin = new UserLogin();
  registerId: any;
  myDataModel = new MyData();
  _environment: any;

  fullAPIs$ = combineLatest([
    this.personService.getGender(),
    this.documentService.getAll(),
    this.personService.getCivilStatus(),
    this.placeService.getDepartaments(),
    this.personService.getOccupations(),
    this.personService.getMedicalCoverage()
  ]).pipe(
    map((data) => {
      return {
        _gender: data[0],
        _documentType: data[1],
        _civilStatus: data[2],
        _departament: data[3],
        _occupation: data[4],
        _medicalCoverage: data[5]
      }
    })
  )
  dataCoveragePercentage: string;

  constructor(
    private router: Router,
    private urlDataService: UrlDataService,
    private fb: FormBuilder,
    private personService: PersonService,
    private documentService: DocumentService,
    private commonMiddService: CommonMiddService,
    public modalService: BsModalService,
    private translate: TranslateService,
    private placeService: PlaceService,
    private myDataService: MyDataService
  ) {
    this._environment = environment;
    this.imgRoute = environment.imagesRoute;
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

  ngOnInit(): void {
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
    },
      error => this.showErrorNotificationModal(error.message))
    this.setUserLogin()
  }

  setButtonConfiguration() {
    this.configurationButtonSave.buttonType = ButtonType.Primary;
    this.configurationButtonSave.text = this.buttonSaveText;

    this.configurationButtonCancel.buttonType = ButtonType.Tertiary;
    this.configurationButtonCancel.text = this.buttonCancelText;
  }

  setUserLogin() {
    this.registerId = localStorage.getItem("registerId");
    this.userLogin.documentType = localStorage.getItem("documentType");
    this.userLogin.document = localStorage.getItem("document");
  }

  setFormPersonalData() {
    this.formPersonalData = this.fb.group({
      firstName: [{ value: '', disabled: true }, [Validators.pattern('^[a-zA-Z \-\']+')]],
      secondName: [{ value: '', disabled: true }, Validators.pattern('^[a-zA-Z \-\']+')],
      firstLastName: [{ value: '', disabled: true }, [Validators.pattern('^[a-zA-Z \-\']+')]],
      secondLastName: [{ value: '', disabled: true }, Validators.pattern('^[a-zA-Z \-\']+')],
      documentType: [{ value: '', disabled: true }, Validators.required],
      document: [{ value: '', disabled: true }, Validators.required],
      gender: [{ value: '', disabled: true }],
      date: [{ value: '', disabled: true }],
      civilStatus: [{ value: '', disabled: true }],
      occupation: [{ value: '', disabled: true }],
      medicalCoverage: [{ value: '', disabled: true }],
      stratum: [{ value: '', disabled: true }]
    })
  }

  setFormContactData() {
    this.formContactData = this.fb.group({
      country: [{ value: '', disabled: true }, Validators.required],
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
      cellPhoneNumber: [{ value: '', disabled: true }, [Validators.required, ValidatorStartCellPhoneNumber]],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      address: [{ value: '', disabled: true }]
    })
  }

  onChangeDepartment() {
    this.getCities(this.formContactData.controls.departament.value);
  }

  onChangeCity() {
    this.getNeighborhoods(this.formContactData.controls.city.value);
  }

  getCities(codeDepartment: string) {
    this.placeService.getCities(codeDepartment).subscribe(resp => {
      if (resp) {
        this.cities = resp;
      }
    },
      error => {
        this.showErrorNotificationModal(error.message);
      })
  }

  getNeighborhoods(cityCode: string) {
    this.personService
      .getNeighborhoods(cityCode)
      .subscribe(
        result => {
          this.neighborhoods = result;
        },
        error => {
          this.showErrorNotificationModal(error.message);
        })
  }

  getAffiliate(update: boolean, title: string, message: string) {
    this.myDataService
      .getAffiliate(this.userLogin)
      .subscribe(
        result => {
          this.loadObject(result);
          if (update) {
            this.showNotificationModal(title, message);
          }
        },
        error => this.showErrorNotificationModal(error));
  }

  loadObject(result: any) {
    if (result.StatusCode === 0) {
      this.myDataModel.Country = environment.countryName;
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
      this.myDataModel.Corner = result.Life.Corner;//Campo3;
      this.myDataModel.DoorNumber = result.Life.DoorNumber;//campo4;
      this.myDataModel.Apartment = result.Life.Apartment;
      this.myDataModel.Nomenclature = "";
      this.myDataModel.NumberNomenclature = "";

      if (this.myDataModel.Street != "") {
        let res = this.myDataModel.Street.split(" ");
        if (res.length > 0) {
          this.myDataModel.Nomenclature = res[0];//Campo1
          this.myDataModel.NumberNomenclature = res[1]//Campo2;

          if (this.myDataModel.Corner == '' && this.myDataModel.DoorNumber == '') {//Direcciones nuevas
            let street = this.myDataModel.Street.split(" ");
            // this.address = result.Life.Street;
            this.myDataModel.Nomenclature = street[0];//Campo1
            this.myDataModel.NumberNomenclature = street[1]//Campo2;
            this.myDataModel.Corner = street[2]
            let addressFormatOrder = "";
            if (street[3]) {
              this.myDataModel.DoorNumber = street[3]
              addressFormatOrder = "{0} {1} # {2} - {3}";
            }
            if (street[3] && street[4]) {
              this.myDataModel.DoorNumber = street[3] + " " + street[4]
              addressFormatOrder = "{0} {1} # {2} {3} - {4}";
            }
            if (street[3] && street[4] && street[5]) {
              this.myDataModel.DoorNumber = street[3] + " " + street[4] + " " + street[5]
              addressFormatOrder = "{0} {1} # {2} {3} {4} - {5}";
            }

            this.formContactData.controls.address.setValue(String.Format(addressFormatOrder,
              this.myDataModel.Nomenclature,
              this.myDataModel.NumberNomenclature,
              this.myDataModel.Corner,
              street[3],
              street[4],
              street[5]
            ));
          } else { //Direcciones antiguas.
            this.formContactData.controls.address.setValue(String.Format("{0} {1} # {2} - {3}",
              this.myDataModel.Nomenclature,
              this.myDataModel.NumberNomenclature,
              this.myDataModel.Corner,
              this.myDataModel.DoorNumber));
          }
        }
      }
      this.setValues();
    }
  }

  setValues() {
    const fullAPIs$ = combineLatest([
      this.placeService.getCities(this.myDataModel.Department),
      this.personService.getNeighborhoods(this.myDataModel.City)
    ]).
      pipe(
        map((data) => {
          return {
            _city: data[0],
            _neighborhoods: data[1]
          }
        })
      ).subscribe(resp => {
        this.cities = resp._city;
        this.neighborhoods = resp._neighborhoods;
        this.formContactData.controls.city.setValue(this.myDataModel.City);
        this.formContactData.controls.neighborhood.setValue(this.myDataModel.Neighborhood);
      },
        error => {
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

  setProgressBar(value: number) {
    this.progressBarModel = new ProgressBarModel();
    this.progressBarModel.radius = 20;
    this.progressBarModel.space = -5;
    this.progressBarModel.percent = value;
    this.progressBarModel.outerStrokeWidth = 5;
    this.progressBarModel.imageSrc = this.imgRoute + 'icons/avatar-icon.svg';
    this.progressBarModel.imageHeight = 30;
    this.progressBarModel.imageWidth = 30;
    this.progressBarModel.showImage = true;
    this.progressBarModel.showBackground = false;
    this.progressBarModel.colorType = ColorType.Primary;
    this.progressBarModel.innerStrokeColor = '#DDDDDD';
  }

  enabledInputDocument() {
    this.formPersonalData.controls['document'].enable();
    this.formPersonalData.controls.document.value != '' ? this.validateDocument() : '';
  }

  validateDocument() {
    if (this.formPersonalData.controls.document.value != '') {
      let request = new DocumentValidationRequest();
      request.DocumentType = this.formPersonalData.controls.documentType.value;
      request.Document = this.formPersonalData.controls.document.value;

      this.commonMiddService.validateDocument(request)
        .subscribe(
          resp => {
            if (resp.StatusCode != 0) {
              this.showErrorNotificationModal(resp.Message);
              this.formPersonalData.controls.document.setValue('');
            }
          },
          error => {
            this.showErrorNotificationModal(error.message);
          })
    }
  }

  showNotificationModal(subtitle: string, msg: string) {
    const initialState: ModalOptions = {
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
    }
    this.bsModalRef = this.modalService.show(InformativeModalComponent, initialState);
  }

  showErrorNotificationModal(msg: string) {
    const initialState: ModalOptions = {
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
    }
    this.bsModalRef = this.modalService.show(InformativeModalComponent, initialState);
  }

  onlyNumber(event: any): boolean {
    return onlyNumber(event);
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
      .subscribe(
        result => {
          this.isLoading = false;
          if (result.StatusCode === 0) {
            this.disabledFields();
            //se consulta el afiliado para refrescar progressbar y se muestra mensaje de éxito.
            this.getAffiliate(true, result.Title, result.Message);
          } else {
            this.showErrorNotificationModal(result.Message)
          }
        },
        error => this.showErrorNotificationModal(error.Message));
  }

  cancel() {
    this.router.navigate(['portal/home'], { replaceUrl: true });
  }

  mapperMyDataEntity() {
    this.myDataModel = new MyData();
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
    } else {
      tPer.style.backgroundColor = "white";
      tCon.style.backgroundColor = "gainsboro";
    }
  }

}
