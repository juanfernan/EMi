import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { City } from 'src/app/public/models/entities/city';
import { Departament } from 'src/app/public/models/entities/departament';
import { Gender } from 'src/app/public/models/entities/gender';
import { User } from 'src/app/public/models/entities/user';
import { PersonService } from 'src/app/public/services/person.service';
import { PlaceService } from 'src/app/public/services/place.service';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ValidatorStartCellPhoneNumber, ValidatorStartPhoneNumber } from 'src/app/shared/helpers/validator';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data-complete',
  templateUrl: './data-complete.page.html',
  styleUrls: ['./data-complete.page.scss'],
})
export class DataCompletePage implements OnInit {

  configurationButton = new ButtonConfiguration();
  form: FormGroup;
  environment: any;
  gender: Array<Gender>;
  departament: Array<Departament>;
  cities: Array<City>;
  maxDate = new Date();
  max: Date;
  minDate = {
    year: this.maxDate.getUTCFullYear() - environment.adultAge,
    month: this.maxDate.getUTCMonth(),
    day: this.maxDate.getUTCDate()
  }
  continueText: string;
  user: User;
  imgRoute: string;
  
  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private placeService: PlaceService,
    private translate: TranslateService,
    private urlDataService: UrlDataService,
    private router: Router
  ) { 
    this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
      this.continueText = resp;
    });

    this.environment = environment;
    this.max = new Date(this.minDate.year, this.minDate.month, this.minDate.day);
    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = this.continueText;
    this.loadUser();

    this.imgRoute = environment.imagesRoute;

    this.form = this.fb.group({
      firstName: [{ value: '', disabled: !this.user.FailedVenko }, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      secondName: [{ value: '', disabled: !this.user.FailedVenko }, Validators.pattern('^[a-zA-Z \-\']+')],
      firstLastName: [{ value: '', disabled: !this.user.FailedVenko }, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      secondLastName: [{ value: '', disabled: !this.user.FailedVenko }, Validators.pattern('^[a-zA-Z \-\']+')],
      departament: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      cellPhone: ['', [Validators.required, ValidatorStartCellPhoneNumber]],
      phone: ['', ValidatorStartPhoneNumber],
    })
  }

  ngOnInit() {
    this.getGender();
    this.getDepartament();
    this.loadUser();
    this.setInitialFormUserValue();
  }

  onlyNumber(event: any): boolean {
    return this.onlyNumber(event);
  }

  getGender() {
    this.personService.getGender().subscribe(resp => {
      if (resp) {
        this.gender = resp;
      }
    })
  }

  getDepartament() {
    this.placeService.getDepartaments().subscribe(resp => {
      if (resp) {
        this.departament = resp;
      }
    })
  }

  getCities(codeDepartment: string) {
    this.placeService.getCities(codeDepartment).subscribe(resp => {
      if (resp) {
        this.cities = resp;
      }
    })
  }

  loadUser() {
    this.user = this.urlDataService.User;
    if (!this.user) this.router.navigate(['welcome'], { replaceUrl: true });
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

}
