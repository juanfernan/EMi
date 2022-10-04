import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ListPhoneModel } from 'src/app/public/models/entities/list-phone-model';
import { UserFulPhonesRequest } from 'src/app/public/models/requests/usefulphones-request';
import { UsefulPhonesServices } from 'src/app/public/services/useful-phones.services';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';
import { ListPhonesComponent } from '../list-phones/list-phones.component';

@Component({
  selector: 'app-option-city',
  templateUrl: './option-city.component.html',
  styleUrls: ['./option-city.component.scss']
})

export class OptionCityComponent implements OnInit {

  inputLocationButton = new ButtonConfiguration();
  acceptText: string;
  listPhones: ListPhoneModel;
  form: FormGroup
  location = new UserFulPhonesRequest();
  imgRoute: string;
  environment: any;
  loading: boolean;
  disableSelect = new FormControl(false);

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private translate: TranslateService,
    private usefulPhoneServices: UsefulPhonesServices,
    private fb: FormBuilder
    ) {
      this.environment = environment;
      this.imgRoute = environment.imagesRoute;
      this.translate.get('PUBLIC.SHARED.accept').subscribe(resp => {
      this.acceptText = resp;
      this.form = this.fb.group({
        city: ['']
      })
    });
  }

  ngOnInit(): void {
    this.inputLocationButton.buttonType = ButtonType.Primary;
    this.inputLocationButton.width = "130px";
    this.inputLocationButton.text = this.acceptText;
    this.getPhones();
  }

  getPhones() {
    let usefulphonesRequest = new UserFulPhonesRequest();
    usefulphonesRequest = this.location;
    this.loading = true;
    this.usefulPhoneServices.getPhones(usefulphonesRequest).subscribe(
      data => {
        this.listPhones = data;
        this.loading = false;
        this.form.get('city')?.setValue(this.listPhones.UPhoneses[0].CityCode);
      }
    )
  }

  getNumbersPhones() {
    const phones = this.listPhones.UPhoneses.filter((phones: any) => {
      return phones.CityCode == this.form.value.city
    });

    const SacNumber = phones[0].Phones.filter(
      (sac) => {
        return sac.Id == "SAC"
      }
    );

    const LMED = phones[0].Phones.filter(
      (LMED) => {
        return LMED.Id == "LMED"
      }
    );

    const PBX = phones[0].Phones.filter(
      (PBX) => {
        return PBX.Id == "PBX"
      }
    );

    const initialState: ModalOptions = {
      initialState: {
        list: phones[0],
        SacNumber,
        LMED,
        PBX
      },
      class: 'modal-dialog-centered modal-rounded modal-lg',
    }
    this.bsModalRef = this.modalService.show(ListPhonesComponent, initialState)
  }

  closeModalAndOpen(openModal: boolean) {
    this.bsModalRef.hide();
    (openModal) ? this.getNumbersPhones() : '';
  }
}
