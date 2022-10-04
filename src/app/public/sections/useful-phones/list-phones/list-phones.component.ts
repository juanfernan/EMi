import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DescriptionPhones } from 'src/app/public/models/entities/descriptionPhones';
import { UsefulPhonesServices } from 'src/app/public/services/useful-phones.services';
import { environment } from 'src/environments/environment';
import { OptionCityComponent } from '../option-city/option-city.component';


@Component({
  selector: 'app-list-phones',
  templateUrl: './list-phones.component.html',
  styleUrls: ['./list-phones.component.scss']
})
export class ListPhonesComponent implements OnInit {
  listPhones: any;
  imgRoute: string;
  enviroment: any;
  modalRef: BsModalRef;

  list: any;
  SacNumber: any;
  LMED: any;
  PBX: any;
  descriptionPhones: DescriptionPhones[];

  constructor(
    private bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private usefulPhoneServices: UsefulPhonesServices
    ) {
      this.enviroment = environment;
      this.imgRoute = environment.imagesRoute;

  }
  ngOnInit(): void {
    this.descriptionPhones = [
      {
        title: 'Servicio al Cliente',
        img: `${environment.imagesRoute}icons/serviceclient.svg`,
        numbers: this.SacNumber
      },
      {
        title: 'Linea Médica',
        img: `${environment.imagesRoute}icons/linemedicina.svg`,
        numbers: this.LMED
      },
      {
        title: 'Quiero Afiliarme',
        img: `${environment.imagesRoute}icons/pbx.svg`,
        numbers: this.PBX
      }
    ]

  }

  volver() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
        ]
      },
      class: 'modal-dialog-centered modal-rounded'

    }
    this.modalRef = this.modalService.show(OptionCityComponent, initialState);

  }

  closeModal() {
    this.bsModalRef.hide();
  }

}
