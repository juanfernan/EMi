import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';

import { Credentials, NativeBiometric } from 'capacitor-native-biometric-auth';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-active-fingerprint',
  templateUrl: './active-fingerprint.page.html',
  styleUrls: ['./active-fingerprint.page.scss'],
})
export class ActiveFingerprintPage implements OnInit {

  imgRoute: string;
  activateOrDeactivateButton = new ButtonConfiguration();
  configurationButtonCancel = new ButtonConfiguration();
  activateOrDeactivateButtonText: string;
  buttonCancelText: string ;
  email:string;
  password: string ;
  bsModalRef: BsModalRef;
  

  constructor(
    private bsModalService: BsModalService,
    private router: Router,
    private translate: TranslateService, 
  ) {
    this.getData()
    this.imgRoute = environment.imagesRoute;
    this.translate.get('PORTAL.FINGERPRINT.CloseButton').subscribe(resp => {
    this.buttonCancelText = resp;
    });
  }

  ngOnInit() {
    this.activateOrDeactivateButton.buttonType = ButtonType.Primary;
    this.activateOrDeactivateButton.width = '250px'
    this.configurationButtonCancel.buttonType = ButtonType.Tertiary;
    this.configurationButtonCancel.text = this.buttonCancelText;
    this.configurationButtonCancel.width = '250px'
  }
  
  getData(){
    NativeBiometric.getCredentials({
      server: "www.example.com",
    }).then(
      (result: Credentials) => {
        this.translate.get('PORTAL.FINGERPRINT.DeactivateFinger').subscribe(resp => {
          this.activateOrDeactivateButton.text = resp;
          });
        this.email = result.username
        this.password = result.password
      },
        (result: Credentials) => {
          this.translate.get('PORTAL.FINGERPRINT.ActivateFinger').subscribe(resp => {
            this.activateOrDeactivateButton.text = resp;
            });
        this.email = result.username
        this.password = result.password
    })
  }


  activateOrDeactivate(){
        if (this.email != undefined ) {
          this.deleteCredentials();
        } 
        else{
          this.saveCredentials();
        } 
          this.getData()
  }

  // Save user's credentials
  saveCredentials(){
    NativeBiometric.setCredentials({
      username: localStorage.getItem("userName"),
      password: localStorage.getItem("passwordUser"),
      server: "www.example.com",
    })
      .then((credentials: Credentials) => {
            // Authenticate using biometrics before logging the user in
            NativeBiometric.verifyIdentity({
              reason: "For easy log in",
              title: "Iniciar Sesión",
              subtitle: "Falck",
              description: "",
              retries: 5,
            }).then(
            ()=> {this.showActivateMessageModal()
            },
            () => {
              NativeBiometric.deleteCredentials({
                server: "www.example.com",
              })
              this.email = undefined,
              this.translate.get('PORTAL.FINGERPRINT.ActivateFinger').subscribe(resp => {
                this.activateOrDeactivateButton.text = resp;
                });
                
              }
            );
      })
      this.getData()
  }  
  
  
  // Delete user's credentials
  deleteCredentials(){
    this.getData()
    NativeBiometric.deleteCredentials({
      server: "www.example.com",
    })
      .then(()=>this.showDeactivateMessageModal())
  }

  showActivateMessageModal() {
    this.getData()
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-check.svg',
        subTitle: 'Activado',
        description: 'Inicio de sesión por huella habilitada ',
        onlyButtonConfirm: true,
        textButton: 'Aceptar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 1
    }
    this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
    this.bsModalRef.content.onClose.subscribe(() => {
    });
  }

  showDeactivateMessageModal() {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: 'Desactivado',
        description: 'Inicio de sesión por huella no habilitada ',
        onlyButtonConfirm: true,
        textButton: 'Aceptar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 1
    }
    this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
    this.bsModalRef.content.onClose.subscribe(() => {
    });
  }

   cancel() {
    this.router.navigate(['portal/home'], { replaceUrl: true });
  }


}
