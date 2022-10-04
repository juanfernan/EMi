import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { saveAs } from 'file-saver';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UserLogin } from 'src/app/shared/models/user-login';
import { environment } from 'src/environments/environment';
import { FamilyGroupDataModalPage } from './components/family-group-data-modal/family-group-data-modal.page';
import { GenerateCertificatesUserInfo } from './models/generateCertificatesUserInfo';
import { DocumentsGenerationService } from './services/documents-generation.service';

import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';
import { blob } from 'stream/consumers';

@Component({
  selector: 'app-documents-generation',
  templateUrl: './documents-generation.page.html',
  styleUrls: ['./documents-generation.page.scss'],
})

export class DocumentsGenerationPage implements OnInit {

  country: string;
  colsMd: string;
  translate: TranslateService;
  userLogin = new UserLogin();
  certificateUserInfo = new GenerateCertificatesUserInfo();
  beneficiaries: any = [];
  affiliateType: string | null;
  titularUser: boolean = false;
  p: number = 1; //Número de página
  certificates: any = [];
  familyGroups: any = [];
  peaceAndSave: boolean = false; //Pagos al día
  showPagination: boolean = false;
  familyGroupsList: boolean = false;
  selectedFamilyGroup: any = '';
  valueUsersValidateScroll: any;
  validateNumberUsers: boolean;
  hiddeListUser: boolean;
  userFullName: any;
  isLoading: boolean = false;
  imgRoute: string;
  bsModalRef: BsModalRef;

  showCertificates: boolean = false;
  beneficiarySelect: string;
  environment: any;
  
  constructor(
    translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private certificateServicesService: DocumentsGenerationService,
    private bsModalService: BsModalService,
    
    private http: HttpClient,
  ) {
    this.environment = environment;
    this.translate = translate;
    this.imgRoute = environment.imagesRoute;
    this.country = environment.country;
    translate.setDefaultLang(environment.country);
    this.affiliateType = localStorage.getItem('affiliateType');
  }

  ngOnInit() {
    this.userLogin.idReference = localStorage.getItem('registerId');
    this.userLogin.documentType = localStorage.getItem('documentType');
    this.userLogin.document = localStorage.getItem('document');
    this.affiliateType = localStorage.getItem('affiliateType');
    let nameOneTitular = localStorage.getItem('NameOne');
    let nameTwoTitular = localStorage.getItem('NameTwo');
    let lastNameOne = localStorage.getItem('LastNameOne');
    let lastNameTwo = localStorage.getItem('LastNameTwo');
    let nameTwo = localStorage.getItem('NameTwo');
    this.userLogin.nameUser = localStorage.getItem("NameOne") + " " + nameTwo + " " + lastNameOne + " " + lastNameTwo;
    this.certificateUserInfo.FullNameCertified = nameOneTitular + " " + nameTwoTitular + " " + lastNameOne + " " + lastNameTwo;
    this.certificateUserInfo.LoggedUserDocumentType = localStorage.getItem("documentType");
    this.certificateUserInfo.LoggedUserDocument = localStorage.getItem("document");

    if (this.affiliateType === '1') {
      this.getBeneficiaries();
    }
    this.certificateUserInfo.GroupCode = '';
    this.certificateUserInfo.TypeCertificate = '';
    this.familyGroupsList = true;
    this.certificateUserInfo.Document = this.userLogin.document = localStorage.getItem('document');
    this.certificateUserInfo.DocumentType = this.userLogin.documentType = localStorage.getItem('documentType');
    this.certificateUserInfo.RequestGroup = true;
    this.selectedFamilyGroup = '';
    this.certificateUserInfo.TypeCertificate = 'AFILIACION';
    this.getListCertificates().pipe(take(1)).subscribe();
    this.showCertificates = false;
  }

  goBack() {
    this.showCertificates = false;
  }

  //Extrayendo Beneficiarios
  getBeneficiaries() {
    this.isLoading = true;
    this.certificateServicesService
      .getBeneficiaries('Affiliate/GetUsersCertificate', this.userLogin)
      .subscribe(
        (result: any) => {
          if (result.Beneficiaries.length > 0) {
            this.beneficiaries = result.Beneficiaries;
            //Mostrando opción grupo familiar si el usuario es títular
            if (this.affiliateType === '1') {
              this.titularUser = true;
            }
          } else {
            this.isLoading = false;
            this.bsModalRef = this.generateInformativeModal(
              'Beneficiarios',
              'No se encontraron beneficiarios',
              true,
              true
            );
          }
        },
        (error) => this.ErrorRegister(error)
      );
  }

  //Extrayendo Certificados
  getListCertificates() {
    this.isLoading = true;
    const simpleObservable = new Observable((observer) => {
      this.certificateServicesService
        .getListCertificates(this.certificateUserInfo)
        .subscribe(
          (result: any) => {
            if (result.length > 0) {
              this.showPagination = true;
            }
            if (result.StatusCode === 0) {
              this.certificates = result.certificates;
              this.familyGroups = result.groups;
              this.peaceAndSave = result.peaceSafe;
              observer.next(true);
              observer.complete();
              this.isLoading = false;
            } else {
              this.showPagination = false;
              this.bsModalRef = this.generateInformativeModal(
                'Certificados',
                'No se encontraron certificados',
                true,
                true
              );
            }
          },
          (error) => this.ErrorRegister(error)
        );
    });
    return simpleObservable;
  }

  ModalPayNone() {
    this.bsModalRef = this.generateInformativeModal(
      'Para poder continuar con el proceso, debes normalizar tu situación de pago.',
      'Si deseas puedes pagar haciendo click en Aceptar, o chatea con uno de nuestros representantes de Servicio al Cliente.',
      true,
      false
    );
    this.bsModalRef.content.onClose.subscribe((accept: boolean) => {
      accept ? this.router.navigate(['portal/my-account/my-invoices']) : null;
    });
  }

  openModalGenerateCertificate(valueCertificateCode: any) {
    let dataCertificates = JSON.stringify(this.certificates);
    this.router.navigate(['portal/my-account/generate-certificates/red-siem'], { queryParams: { certificates: JSON.stringify(this.certificates), certificateCode: valueCertificateCode, patientDocument: this.certificateUserInfo.Document, patientDocumentType: this.certificateUserInfo.DocumentType,
      requestGroup: this.certificateUserInfo.RequestGroup, groupCode: this.certificateUserInfo.GroupCode, fullName: this.certificateUserInfo.Name, fullNameCertified: this.certificateUserInfo.FullNameCertified } });

  }

  //Selección de Usuario
  onChangeBeneficiary(value: any) {
    this.showCertificates = true;
    if (value != null && value != '' && value != 'familyGroup') {
      //Carga del servicio al seleccionar un beneficiario/familiar
      this.familyGroupsList = false;
      this.certificateUserInfo.Document = value;
      this.certificateUserInfo.DocumentType = this.beneficiaries.filter(
        (n: any) => n.Document == value
      )[0].DocumentType;
      this.certificateUserInfo.Name = this.beneficiaries.filter(
        (n: any) => n.Document == value
      )[0].FullNames;
      //Tipo de usuario logueado, o listado
      if (value == localStorage.getItem('document')) {
        this.certificateUserInfo.LoginUser = true;
      } else {
        this.certificateUserInfo.LoginUser = false;
      }
      this.userFullName = this.beneficiaries.filter(
        (n: any) => n.Document == value
      )[0].FullNames;
      this.beneficiarySelect = this.userFullName;
      this.certificateUserInfo.RequestGroup = false;
      this.selectedFamilyGroup = '';
      this.getListCertificates().subscribe();
    }
    if (value == 'familyGroup') {
      //Carga del servicio al seleccionar grupo familiar
      this.familyGroupsList = true;
      this.certificateUserInfo.Document = this.userLogin.document =
        localStorage.getItem('document');
      this.certificateUserInfo.DocumentType = this.userLogin.documentType =
        localStorage.getItem('documentType');
      this.certificateUserInfo.RequestGroup = true;
      this.selectedFamilyGroup = '';
      this.certificateUserInfo.TypeCertificate = 'AFILIACION';
      this.getListCertificates().subscribe((res) => {
        if (res) {
          this.certificates = null;
        }
      });
    }
    if (value == '') {
      this.selectedFamilyGroup = '';
      this.certificates = [];
      this.familyGroupsList = false;
    }
  }

  //Selección de mi usuario
  onChangeMyUser(event: any) {
    const value = event.target.value;
    this.certificateUserInfo.LoginUser = true;
    if (value != null && value != '') {
      this.certificateUserInfo.Document = value;
      this.certificateUserInfo.DocumentType = this.userLogin.documentType;
      this.certificateUserInfo.RequestGroup = false;
      this.getListCertificates().subscribe();
    }
  }

  onChangeGroups(event: any) {
    const value = event;
    if (value.length > 0) {
      let valueUsers = this.familyGroups.filter(
        (obj: any) => obj.groupCode === value
      );
      valueUsers.forEach((element: any) => {
        this.valueUsersValidateScroll = element.User.length;
        if (element.User.length > 5) {
          this.validateNumberUsers = true;
        } else {
          this.validateNumberUsers = false;
        }
        if (element.User.length > 0) {
          this.hiddeListUser = false;
        } else {
          this.hiddeListUser = true;
        }
      });

      let groupName = this.familyGroups.filter(
        (obj: any) => obj.groupCode === value
      )[0].groupName;
      this.selectedFamilyGroup = groupName;
      //Cargar servicio al seleccionar grupo
      this.certificateUserInfo.Document = this.userLogin.document =
        localStorage.getItem('document');
      this.certificateUserInfo.DocumentType = this.userLogin.documentType =
        localStorage.getItem('documentType');
      this.certificateUserInfo.RequestGroup = true;
      this.certificateUserInfo.GroupCode = value;
      this.getListCertificates().subscribe((res) => {
        if (res) {
          this.modalFamilyGroups(valueUsers, groupName);
        }
      });
    }
  }

  modalFamilyGroups(valueUsers: any, groupName: any) {
    this.bsModalRef = this.bsModalService.show(FamilyGroupDataModalPage, {
      initialState: {
        valueUsers: valueUsers,
        groupName: groupName,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: false,
    });
  }



eventDownloadPdf(value: any) {
  //Filtrando parametros de certificado selecto en descarga (los demás son los de carga habitual).
  this.certificateUserInfo.CertificateCode = value;
  this.certificateUserInfo.TypeCertificate = this.certificates.filter(
    (obj: any) => obj.CertificateCode === value
  )[0].TypeCertificate;
  this.certificateUserInfo.FileName = this.certificates.filter(
    (obj: any) => obj.CertificateCode === value
  )[0].FileName;
  let fileName = this.certificateUserInfo.FileName
  this.isLoading = true;
  this.certificateServicesService
    .getDownloadCertAffiliatedPayments(this.certificateUserInfo)
    .subscribe(
      (result: any) => {
        this.isLoading = false;
        if (result.StatusCode === 0) {
          let pdfCode = result.Download.BitCertificate;
          fetch('data:application/pdf;base64,' + pdfCode)
            .then(function (resp) {
              return resp.blob();
            }).then(function(blob){
              let reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onloadend = async function () {
                let base64data = reader.result;
                try {
                  const result = await Filesystem.writeFile({
                      path: fileName + '.pdf',
                      data: <string>base64data,
                      directory: Directory.Data,
                  });
                     let fileOpener: FileOpener = new FileOpener();
                  fileOpener.open(result.uri, blob.type)
                      .then(() => console.log('File is opened'))
                      .catch(e => console.log('Error opening file', e));
                  saveAs(blob, fileName)
                } catch (e) {
                  // TODO mostrar el error en un modal
                  console.error('Unable to write file', e);
                }
            }
          });

        } else {
          this.bsModalRef = this.generateInformativeModal(
            result.Title,
            result.Message,
            true,
            true
          );
        }
      },
      (error) => this.ErrorRegister(error)
    );
}


  eventSendEmail(value: any) {
    let mailTitular = localStorage.getItem('userName');
    //Parametros del títular.
    this.certificateUserInfo.Mail = mailTitular;
    this.certificateUserInfo.CertificateCode = value;
    this.certificateUserInfo.TypeCertificate = this.certificates.filter(
      (obj: any) => obj.CertificateCode === value
    )[0].TypeCertificate;
    this.certificateUserInfo.FileName = this.certificates.filter(
      (obj: any) => obj.CertificateCode === value
    )[0].FileName;
    this.isLoading = true;
    this.certificateServicesService
      .getSendCertAffiliatedPayments(this.certificateUserInfo)
      .subscribe(
        (result: any) => {
          this.isLoading = false;
          if (result.StatusCode === 0) {
            this.bsModalRef = this.generateInformativeModal(
              result.Title,
              'Hemos enviado al correo electrónico' +
                ' ' +
                mailTitular +
                ' ' +
                'el certificado seleccionado',
              false,
              true
            );
          } else {
            this.bsModalRef = this.generateInformativeModal(
              result.Title,
              result.Message,
              true,
              true
            );
          }
        },
        (error) => this.ErrorRegister(error)
      );
  }

  private ErrorRegister(error: any) {
    this.bsModalRef = this.generateInformativeModal(
      'Inconvenientes con el portal',
      'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.',
      true,
      true
    );
  }

  generateInformativeModal(
    subTitle: string,
    description: string,
    isError: boolean,
    onlyButtonConfirm: boolean = true
  ) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: onlyButtonConfirm,
        textButton: 'Aceptar',
        textButton1: 'Cancelar',
        textButton2: 'Aceptar',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: true,
    };
    return this.bsModalService.show(InformativeModalComponent, initialState);
  }
}
