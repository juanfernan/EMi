import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/public/services/login.service';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ActivatedRoute, Router } from '@angular/router';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { SentryHandelError } from 'src/app/shared/services/sentry.handelerror';
import { AvailableResult, BiometryType, Credentials, NativeBiometric } from 'capacitor-native-biometric-auth';

@Component({
  selector: 'app-ini-sesion',
  templateUrl: './ini-sesion.page.html',
  styleUrls: ['./ini-sesion.page.scss'],
})

export class IniSesionPage implements OnInit {

  profileSnapshot: string | null;
  ingresarButton = new ButtonConfiguration();
  loginForm: FormGroup;
  environment: any;
  continueText: string;
  bsModalRef: BsModalRef;
  profile: string;
  isLoading: boolean;
  imgRoute: string;
  email: string ;
  password: string ;
  passwordUser: string

  constructor(
    private bsModalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private translate: TranslateService,
    private sentry: SentryHandelError
  ) {
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
    this.translate.get('PUBLIC.SHARED.continue').subscribe(resp => {
      this.continueText = resp;
    });;
    this.ingresarButton.buttonType = ButtonType.Primary;
    this.ingresarButton.text = this.continueText;
    this.ingresarButton.fontsSize = "20px";
    this.ingresarButton.width = "250px";
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

   }

  ionViewWillEnter(){
    this.getData();
   }

  ngOnInit(): void {
    this.profileSnapshot = localStorage.getItem('profile');
    this.loadParamsSetProfile();
  }

  getData(){
    console.log("getData")
    NativeBiometric.getCredentials({
      server: "www.example.com",
    }).then(
      (result: Credentials) => {
        this.email = result.username
        this.passwordUser = localStorage.getItem('passwordUser')
        this.check()    
      },
        (result: Credentials) => {
          this.email = result.username
          this.password = result.password
    })
  }

  check(){
    NativeBiometric.isAvailable().then(
      (result: AvailableResult) => {
        const isAvailable = result.isAvailable;
        console.log("isAvailable", isAvailable)
        const isFingerPrint = result.biometryType == BiometryType.FINGERPRINT;
        console.log("isFingerPrint", isFingerPrint)
        const isFaceAuth = result.biometryType == BiometryType.FACE_AUTHENTICATION;
        console.log("isFaceAuth", isFaceAuth)
        const isIrisAuth = result.biometryType == BiometryType.IRIS_AUTHENTICATION;
        console.log("isIrisAuth", isIrisAuth)
        const isTouchId = result.biometryType == BiometryType.TOUCH_ID;
        console.log("isTouchId", isTouchId)
        const isFaceId = result.biometryType == BiometryType.FACE_ID;
        console.log("isFaceId", isFaceId)
        if (isAvailable) {
          // Get user's credentials
          NativeBiometric.getCredentials({
            server: "www.example.com",
          }).then((credentials: Credentials) => { 
            // Authenticate using biometrics before logging the user in
            NativeBiometric.verifyIdentity({
              reason: "For easy log in",
              title: "Iniciar Sesión",
              subtitle: "Falck",
              description: "",
              retries: 5,
            }).then(
              () => {
                // Authentication successful
                localStorage.setItem("passwordUser", credentials.password);
                this.passwordUser = credentials.password
                this.clickLoginFingerPrint();
              },
              (error) => { console.log( 'error', error)
                // Failed to authenticate
              }
            );
          });
        }
      },
      (error) => { console.log("ERROR",error)
        // Couldn't check availability
      }
    )
  }

  loadParamsSetProfile() {
    if (this.route.snapshot.queryParams['profile']) {
      (this.route.snapshot.queryParams['profile']) ? this.profile = this.route.snapshot.queryParams['profile'] : this.profile = "customers";
      if (this.profile !== "customers" &&
        this.profile !== "specialists" &&
        this.profile !== "administrator") {
        this.profile = "customers";
      }
      this.setLocalStorageProfile();
    }
  }

  setLocalStorageProfile() {
    localStorage.setItem('profile', this.profile);
  }

  navigatoToWelcome() {
    this.router.navigate(['/onboarding']);
  }

  clickLoginFingerPrint(){
    this.isLoading = true;
    this.loginService.getLogin(this.email, this.passwordUser).subscribe(resp => {
      this.CompleteLogin(resp);
      this.isLoading = false;
    },
    error => {
      this.sentry.handleError(error);
      this.loginForm.reset();
      this.isLoading = false;
      this.showErrorNotificationModal(error.error.error_description);
    });
  };

  clickLogin() {
    if (this.loginForm.invalid) {
      return;
    }else{
      this.isLoading = true;
      localStorage.setItem("passwordUser", this.loginForm.controls.password.value);
      this.loginService.getLogin(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(resp => {
        this.CompleteLogin(resp);
        this.isLoading = false;
      },
        error => {
          this.sentry.handleError(error);
          this.loginForm.reset();
          this.isLoading = false;
          this.showErrorNotificationModal(error.error.error_description);
        });
    }
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
    this.bsModalRef = this.bsModalService.show(InformativeModalComponent, initialState);
    this.bsModalRef.content.onClose.subscribe(() => {
      this.router.navigate(['/onboarding/ini-sesion']);
    });
  }

  private CompleteLogin(response: any) {
    if (response.UserMidd == "True" && response.ChangedPassword == "False") {
    } else {
      localStorage.setItem("token", response.access_token);
      localStorage.setItem("userName", response.UserName);
      localStorage.setItem("NameOne", response.NameOne);
      localStorage.setItem("NameTwo", response.NameTwo);
      localStorage.setItem("LastNameOne", response.LastNameOne);
      localStorage.setItem("LastNameTwo", response.LastNameTwo);
      localStorage.setItem("registerId", response.IdReference);
      localStorage.setItem("documentType", response.DocumentType);
      localStorage.setItem("documentTypeName", response.DocumentTypeName);
      localStorage.setItem("document", response.Document);
      localStorage.removeItem('affiliateType');
      localStorage.setItem("affiliateType", response.AffiliateType);
      localStorage.setItem("roleType", response.RoleType);
      localStorage.setItem("CellPhone", response.CellPhone);
      localStorage.setItem("expires", response[".expires"]);
      localStorage.setItem("nameItemMenu", "Inicio");
      localStorage.setItem("urlItemMenu", "/admin/home");
      localStorage.setItem("iconItemMenu", "fa fa-home");
      this.loginForm.reset();
      this.router.navigate(['portal/my-account/info-fingerprint']);
    }
  }

}
