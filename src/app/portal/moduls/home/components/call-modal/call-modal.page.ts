import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalcallService } from 'src/app/portal/components/modal-call/services/modalcall.service';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-call-modal',
  templateUrl: './call-modal.page.html',
  styleUrls: ['./call-modal.page.scss'],
})
export class CallModalPage implements OnInit {

  translate: TranslateService;

  textButton: string = "Cerrar";
  configurationButton = new ButtonConfiguration();
  solicitarButton = new ButtonConfiguration();
  serviciosButton = new ButtonConfiguration();
  environment: any;
  dataUser: any;
  middleName: string;
  imgRoute: string;

  country: string;

  resultNumber: any;
  numbersArrayCustomerService: any[] = [];
  numbersArrayMedicalLine: any[] = [];
  numbersArraySpecialist: string[] = [];
  messageCall: string;
  titleCall: string;
  numbers: any;
  phoneNumbersArray1: any;
  phoneNumbersArray2: any;



  constructor(
    translate: TranslateService,
    private modalcallService: ModalcallService
  ) { 
    this.translate = translate;

    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    this.country = environment.country;


    this.dataUser = {
      Email: localStorage.getItem("userName"),
      middleName: localStorage.getItem("NameOne"),
      FullName: `${localStorage.getItem('NameOne') ?? ''} ${localStorage.getItem('NameTwo') ?? ''} ${localStorage.getItem('LastNameOne') ?? ''} ${localStorage.getItem('LastNameTwo') ?? ''}`
    }
    this.middleName = this.dataUser.middleName;
    this.loadNumber();

    if (this.numbers && this.country === 'co') {
      this.phoneNumbersArray1 = new Array();
      this.phoneNumbersArray2 = new Array();
      var countNumbers = this.numbers.length;
      var itemsColumns = Number(countNumbers / 2);
      for (var i = 0; i < this.numbers.length; i++) {
        if (i < itemsColumns) {
          this.phoneNumbersArray1.push(this.numbers[i]);
        } else {
          this.phoneNumbersArray2.push(this.numbers[i]);
        }
      }
    }
  }

  ngOnInit() {
    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = this.textButton;
  }

loadNumber() {
  this.numbersArrayCustomerService = new Array();
  this.numbersArrayMedicalLine = new Array();
  this.numbersArraySpecialist = new Array();
  
  this.modalcallService.getContactPhones()
    .subscribe(result => {
      if (result.StatusCode === 0) {
        this.resultNumber = result.DataList;
        for (let element of this.resultNumber) {
          if (element.Category === "1") {
            this.numbersArrayCustomerService.push(element);
          }
          if (element.Category === "2") {
            this.numbersArrayMedicalLine.push(element);
          }
          if (element.Category === "3") {
            this.numbersArraySpecialist.push(element);
          }
        }
      } 
    }, error => console.log(error));
}

callCustomerService(){
  this.translate.get('ADMIN.TitleCallCustomerService').subscribe(title => {
    this.titleCall = title;
  });
  this.translate.get('ADMIN.MsgCallCustomerService').subscribe(message => {
    this.messageCall = message;
  });
  
}

callMedicalLine(){
  this.translate.get('ADMIN.TitleCallMedicalLine').subscribe(title => {
    this.titleCall = title;
  });
  this.translate.get("ADMIN.MsgCallMedicalLine").subscribe(message => {
    this.messageCall = message;

  });
}

callSpecialist(){
  console.log("Especialista")
  this.titleCall = "Atencion medica";

  /*
      this.bsModalRef = this.generateCallModal(
    "QUIERO AFILIARME",
    "A continuación encontrarás las líneas telefónicas que tenemos a tu disposición para afiliarte.",
    this.numbersArraySpecialist);
*/

}

}