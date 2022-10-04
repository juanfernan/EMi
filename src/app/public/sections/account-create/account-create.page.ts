import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { EmailConfirmValidator, ValidatorCheckBox, ValidatorStartCellPhoneNumber } from 'src/app/shared/helpers/validator';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { CommonMiddService } from 'src/app/shared/services/common-midd.service';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { environment } from 'src/environments/environment';
import { User } from '../../models/entities/user';
import { StatusCodeRegister } from '../../models/enums/status-code-register';
import { DataLifeAccountVerificationRequest } from '../../models/requests/data-life-account-verification';
import { DocumentValidationRequest } from '../../models/requests/document-validation-request';
import { PreRegisterRequest } from '../../models/requests/pre-register-request';
import { SecurityQuestionRequest } from '../../models/requests/security-question-request';
import { DocumentService } from '../../services/document.service';
import { RegisterService } from '../../services/register.service';
import { SecurityQuestionService } from '../../services/security-question.service';
import { DocumentType } from 'src/app/public/models/entities/document-type';
import { TermsPage } from '../terms/terms.page';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.page.html',
  styleUrls: ['./account-create.page.scss'],
})
export class AccountCreatePage implements OnInit {
  
  configurationButton = new ButtonConfiguration();
  createForm: FormGroup;
  environment: any;
  docType: Array<DocumentType>;
  continueText: string;
  user = new User();
  answerCorrectRequired = 3;
  isLoading: boolean;

  bsModalRef?: BsModalRef;
  logoSource: string;
  tagCode: string;
  tagCodes: string;
  @Input() parentForm: string;
  imgRoute: string;

  constructor(
    private fb: FormBuilder,
    private documentService: DocumentService,
    private translate: TranslateService,
    private registerService: RegisterService,
    private urlDataService: UrlDataService,
    private router: Router,
    public modalService: BsModalService,
    private securityQuestionService: SecurityQuestionService,
    private commonMiddService: CommonMiddService
  ) {
    this.isLoading = true;
    this.environment = environment;
    this.translate.get('PUBLIC.SHARED.continue').subscribe((resp) => {
      this.continueText = resp;
    });

    this.configurationButton.buttonType = ButtonType.Primary;
    this.configurationButton.text = this.continueText;
    this.imgRoute = environment.imagesRoute;

    this.createForm = this.fb.group({
      documentType: ['', Validators.required],
      document: [{ value: '', disabled: true }, Validators.required],
      phone: ['', [Validators.required, ValidatorStartCellPhoneNumber]],
      email: ['', [Validators.required, Validators.email]],
      emailRepeat: ['', [Validators.required, EmailConfirmValidator('email')]],
      terms: ['', ValidatorCheckBox],
    });
  }

  ngOnInit() {
    this.getDocumentType();
  }

  getDocumentType() {
    this.documentService.getAll().subscribe((resp) => {
      if (resp) {
        this.docType = resp;
      }
    });
    this.isLoading = false;
  }

  complete() {
    this.isLoading = true;
    this.setUser();
    this.preRegister();
  }

  setUser() {
    this.user.TypeDocument = this.createForm.controls.documentType.value;
    this.user.IdDocument = this.createForm.controls.document.value;
    this.user.Email = this.createForm.controls.email.value;
    this.user.RepeatEmail = this.createForm.controls.emailRepeat.value;
    this.user.TermsAndConditions = this.createForm.controls.terms.value;
  }

  preRegister() {
    let preRegister = new PreRegisterRequest();
    preRegister.DocumentType = this.user.TypeDocument;
    preRegister.Document = this.user.IdDocument;
    preRegister.Email = this.user.Email;
    preRegister.ConfirmEmail = this.user.RepeatEmail;
    preRegister.TermsAndConditions = this.user.TermsAndConditions;

    this.registerService.preRegister(preRegister).subscribe((resp) => {
      //Flujo es afiliado pero no coincide el correo.
      if (resp.StatusCode === StatusCodeRegister.InvalidEmail) {
        //14
        let userCopy;
        this.urlDataService.User = Object.assign(this.user, userCopy);
        this.associateEmail(resp);

        this.validateAccountVerification().subscribe((resp) => {
          resp
            ? this.goToAccountVerification(this.answerCorrectRequired)
            : this.router.navigate(['/welcome/data-complete']);
        });
      } else if (resp.StatusCode === StatusCodeRegister.ExistingUser) {
        //11
        this.isLoading = false;
        this.showErrorExistingUser(resp.Message);
      } else if (resp.StatusCode === StatusCodeRegister.InactiveUser) {
        //7
        this.isLoading = false;
        this.showErrorInactiveUser(resp.Message);
      } else if (resp.StatusCode === StatusCodeRegister.SuccessfulLoad) {
        //0
        this.user.UpdateEmail = 'false';
        this.user.Affiliate = resp.UserNames.Afiliate;
        this.user.DataLoaded = resp.UserNames.DataLoaded;
        this.user.FailedVenko = resp.UserNames.CanModifyNames;
        //Encuentra datos PLS o Registraduria(col)
        if (resp.UserNames.DataLoaded === true) {
          this.user.NameOne = resp.UserNames.FirstName;
          this.user.NameTwo = resp.UserNames.SecondName;
          this.user.LastNameOne = resp.UserNames.FirstSurname;
          this.user.LastNameTwo = resp.UserNames.SecondSurname;
          this.user.CellPhone = this.createForm.controls.phone.value;
          //this.router.navigate(['/completeRegisterCreate'], { queryParams: this.user, skipLocationChange: false });

          let userCopy;
          this.urlDataService.User = Object.assign(this.user, userCopy);
          this.validateAccountVerification().subscribe((resp) => {
            resp
              ? this.goToAccountVerification(this.answerCorrectRequired)
              : this.router.navigate(['/welcome/data-complete']);
          });
        } else {
          this.user.CellPhone = this.createForm.controls.phone.value;

          let userCopy;
          this.urlDataService.User = Object.assign(this.user, userCopy);
          this.validateAccountVerification().subscribe((resp) => {
            resp
              ? this.goToAccountVerification(this.answerCorrectRequired)
              : this.router.navigate(['/welcome/data-complete']);
          });
        }
      } else {
        this.isLoading = false;
        this.showErrorNotificationModal(resp.Message);
      }
    });
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
      id: 1,
    };
    this.bsModalRef = this.modalService.show(InformativeModalComponent,initialState);
  }

  showErrorExistingUser(msg: string) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: 'Hubo un problema',
        description: msg,
        onlyButtonConfirm: true,
        textButton: 'Recordar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 1,
    };
    this.bsModalRef = this.modalService.show(
      InformativeModalComponent,
      initialState
    );
    this.bsModalRef.content.onClose.subscribe(() => {
      this.router.navigate(['/welcome/remember-password']);
    });
  }

  showErrorInactiveUser(msg: string) {
    const customMessage =
      'Hemos detectado que ese correo ya esta en uso para una cuenta inactiva. ' +
      msg;
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: 'alert-circle.svg',
        subTitle: 'Usuario Inactivo',
        description: customMessage,
        onlyButtonConfirm: true,
        textButton: 'Aceptar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 1,
    };
    this.bsModalRef = this.modalService.show(
      InformativeModalComponent,
      initialState
    );
    this.bsModalRef.content.onClose.subscribe(() => {
      this.router.navigate(['/welcome/ini-sesion']);
    });
  }

  associateEmail(resp: any) {
    this.user.DataLoaded = resp.UserNames.DataLoaded;
    this.user.Affiliate = resp.UserNames.Afiliate;
    this.user.NameOne = resp.UserNames.FirstName;
    this.user.NameTwo = resp.UserNames.SecondName;
    this.user.LastNameOne = resp.UserNames.FirstSurname;
    this.user.LastNameTwo = resp.UserNames.SecondSurname;
    this.user.FailedVenko = resp.UserNames.CanModifyNames;

    //Deberá redirigir a una pagina para asociar el correo. Envia sms para validación.
    //this.router.navigate(['/registerCellPhoneCreate'], { queryParams: this.user, skipLocationChange: false });
  }

  validateAccountVerification(): Observable<boolean> {
    let request = new DataLifeAccountVerificationRequest();
    request.Document = this.user.IdDocument;
    request.DocumentType = this.user.TypeDocument;
    request.Email = this.user.Email;
    request.PhoneNumber = this.createForm.controls.phone.value;

    return new Observable((obj) => {
      this.registerService.getAccountVerification(request).subscribe(
        (resp) => {
          obj.next(resp.RequiredAccountVerification);
        },
        (err) => obj.next(false)
      );
    });
  }

  goToAccountVerification(answerCorrectRequired: number) {
    let respuestas = 0;
    let request = new SecurityQuestionRequest();
    request.DocumentType = this.user.TypeDocument;
    request.Document = this.user.IdDocument;

    this.securityQuestionService.getSecurityQuestion(request).subscribe(
      (resp) => {
        this.isLoading = false;
        if (resp) {
          resp.SQuestions.forEach((item) => {
            if (item.Answer !== '') respuestas++;
          });
          if (respuestas >= answerCorrectRequired) {
            //si requestAnswerQuestion == 0 dejo que avance, de lo contrario sale mensaje.
            if (answerCorrectRequired === 0) {
              this.navigateToDataComplete();
            } else {
              let squestion;
              this.urlDataService.SecurityQuestions = Object.assign(
                resp.SQuestions,
                squestion
              );
              this.navigateToAccountVerification();
            }
          } else {
            this.navigateToDataComplete();
          }
        }
      },
      (error) => {
        this.isLoading = false;
        if (error) {
        }
      }
    );
  }

  navigateToAccountVerification() {
    this.router.navigate(['/welcome/account-verification']);
  }

  navigateToDataComplete() {
    this.router.navigate(['/welcome/data-complete']);
  }

  onlyNumber(event: any): boolean {
    return this.onlyNumber(event);
  }

  clickTerms(tagCode: string) {
    if (tagCode === 'terms') {
      this.tagCodes = this.parentForm === 'specialists' ? 'TYCE' : 'TYCC';
    } else {
      let roleType = localStorage.getItem('roleType');
      this.tagCodes = roleType != '2' ? 'PPC' : 'PPE';
    }

    const initialState: ModalOptions = {
      initialState: {
        document: this.tagCodes,
      },
      class: 'modal-dialog-centered modal-rounded-term',
      id: 2,
    };
    this.bsModalRef = this.modalService.show(TermsPage, initialState);
  }

  validateDocument() {
    if (this.createForm.controls.document.value != '') {
      let request = new DocumentValidationRequest();
      request.DocumentType = this.createForm.controls.documentType.value;
      request.Document = this.createForm.controls.document.value;

      this.commonMiddService.validateDocument(request).subscribe((resp) => {
        if (resp.StatusCode != 0) {
          this.showErrorNotificationModal(resp.Message);
          this.createForm.controls.document.setValue('');
        }
      });
    }
  }

  enabledInputDocument() {
    this.createForm.controls['document'].enable();
    this.createForm.controls.document.value != '' ? this.validateDocument() : '';
  }

}
function TermsComponent(TermsComponent: any, initialState: ModalOptions<Record<string, unknown>>): BsModalRef<any> {
  throw new Error('Function not implemented.');
}

