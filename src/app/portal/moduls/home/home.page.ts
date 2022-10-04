import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  textButton: string = "Cerrar";
  configurationButton = new ButtonConfiguration();
  solicitarButton = new ButtonConfiguration();
  serviciosButton = new ButtonConfiguration();
  environment: any;
  dataUser: any;
  middleName: string;
  imgRoute: string;
  country: string;
  loadedScriptChat = false;
  mobile: boolean;

  constructor(
    private router: Router,
  ) {
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    this.country = environment.country;

    // this.serviciosButton.buttonType = ButtonType.Secundary;
    // this.serviciosButton.text = "Servicios en Centros Médicos";
    // this.serviciosButton.fontsSize = "18px";

    // this.solicitarButton.buttonType = ButtonType.Primary;
    // this.solicitarButton.text = "Solicitar Servicio";
    // this.solicitarButton.fontsSize = "18px";

    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = this.textButton;

    this.dataUser = {
      Email: localStorage.getItem("userName"),
      middleName: localStorage.getItem("NameOne"),
      FullName: `${localStorage.getItem('NameOne') ?? ''} ${localStorage.getItem('NameTwo') ?? ''} ${localStorage.getItem('LastNameOne') ?? ''} ${localStorage.getItem('LastNameTwo') ?? ''}`
    }
    this.middleName = this.dataUser.middleName;

  }

  ngOnInit() {
    let element = document.getElementById("frameChatWolkvox");    
    element ? element.remove() : null;
    //let e = localStorage.getItem('loadedScriptChat');    
    //this.loadScriptChat()
  }

  ngOnDestroy(): void {
    this.mobile = this.getDeviceAccess();
    if (!this.mobile)
    this.hiddenChatScript();    
  }

  clickMyHealth(event: any) {
    this.router.navigate(['portal/myhealth/scheduledservices']);
  }

  clickCoordinations(event: any) {
    this.router.navigate(['portal/admin/coordinations']);
  }

  clickClinics(event: any) {
    this.router.navigate(['portal/admin/clinics']);
  }

  clicMyData(event: any) {
    this.router.navigate(['portal/my-account/my-data']);
  }

  finger(event: any){
    this.router.navigate(['portal/my-account/fingerprint'])
  }

    private getBase64(text: string | null): string {
      if (text != null) {
        return btoa(text);
      } else {
        return '';
      }
    }

  private loadScriptChat() {
    if (this.country == 'co') {
      this.mobile = this.getDeviceAccess();
      if (!this.mobile) {
        // let userName = this.getBase64(localStorage.getItem('NameOne') + " " + localStorage.getItem('LastNameOne'));
        // let cellPhone = this.getBase64(localStorage.getItem('CellPhone'));
        // let email = this.getBase64(localStorage.getItem('userName'));
        // let comment = this.getBase64("Sin comentarios.");
        // (cellPhone === "") ? cellPhone = this.getBase64("123") : "";
        // (email === "") ? email = this.getBase64("email-default") : "";
        // this.loadScriptColombia(userName, cellPhone, email, comment);
        this.loadScriptColombia("","","","");
      }
    }
    else {
      let userName = this.getBase64(localStorage.getItem('NameOne') + " " + localStorage.getItem('LastNameOne'));
      let cellPhone = this.getBase64(localStorage.getItem('CellPhone'));
      let email = this.getBase64(localStorage.getItem('userName'));
      let comment = this.getBase64("Sin comentarios.");
      (cellPhone === "") ? cellPhone = this.getBase64("123") : "";
      (email === "") ? email = this.getBase64("email-default") : "";
      this.loadScriptUruguay(userName, cellPhone, email, comment);
    }
  }

  private getDeviceAccess(): boolean {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile;
  }

  private loadScriptColombia(_name, _document, _email, _comment) {
    localStorage.setItem("loadedScriptChat", "true");
  }

  private loadScriptUruguay(_name, _document, _email, _comment) {
    let chatScript = document.createElement("script");
    chatScript.type = "text/javascript";
    chatScript.async = true;
    chatScript.src = "https://chat01.wolkvox.com/chat/?prodId=d2ItZ3J1cG8tZW1pLjcxMQ==&txt1=" + _name + "&txt2=" + _document + "&txt3=" + _email + "&txt4=" + _comment;
    let test = document.getElementById("conten2");
    test.appendChild(chatScript);
    localStorage.setItem("loadedScriptChat", "true");
  }

  private showChatScript () {
    let element =  document.getElementById("frameChatWolkvox");
    if (element)
    element.style.display = "";
   }
 
   private hiddenChatScript () {
     let element = document.getElementById("frameChatWolkvox");
     if (element)
     element.style.display = "none";
   }

}