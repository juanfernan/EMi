import { Component, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  solicitarButton = new ButtonConfiguration();
  serviciosButton = new ButtonConfiguration();
  dataUser: any;
  middleName: string;

  constructor(

  ) {
    this.solicitarButton.buttonType = ButtonType.Secundary;
    this.solicitarButton.text = "Solicitar Servicio";
    this.solicitarButton.fontsSize = "18px";
    this.solicitarButton.width = "290px";

    this.serviciosButton.buttonType = ButtonType.Primary;
    this.serviciosButton.text = "Servicios en Centros Médicos";
    this.serviciosButton.fontsSize = "18px";
    this.serviciosButton.width = "290px";

    this.dataUser = {
      Email: localStorage.getItem("userName"),
      middleName: localStorage.getItem("NameOne"),
      FullName: `${localStorage.getItem('NameOne') ?? ''} ${localStorage.getItem('NameTwo') ?? ''} ${localStorage.getItem('LastNameOne') ?? ''} ${localStorage.getItem('LastNameTwo') ?? ''}`
    }
    this.middleName = this.dataUser.middleName;

   }

  ngOnInit() {
  }

}
