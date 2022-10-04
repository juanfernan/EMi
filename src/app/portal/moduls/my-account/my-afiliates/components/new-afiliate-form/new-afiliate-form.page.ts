import { Component, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { ValidatorStartCellPhoneNumber, onlyNumber } from 'src/app/shared/helpers/validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchInfoService } from '../../../services/fetch-info.service';
import { DocumentValidationRequest } from 'src/app/public/models/requests/document-validation-request';
import { CommonMiddService } from 'src/app/shared/services/common-midd.service';
import { NewAfiliateService } from '../../services/new-afiliate.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { TranslateService } from '@ngx-translate/core';
import AfiliateModel from '../../models/afiliateModel';

@Component({
  selector: 'app-new-afiliate-form',
  templateUrl: './new-afiliate-form.page.html',
  styleUrls: ['./new-afiliate-form.page.scss']
})

export class NewAfiliateFormPage implements OnInit {
  searchAfiliateButton = new ButtonConfiguration();
  sendNewAfiliateButton = new ButtonConfiguration();
  cancelButton = new ButtonConfiguration();
  formSearchPersonData: FormGroup;
  formNewAfiliateData: FormGroup;
  enableNewAfiliateForm: boolean = false;
  documentTypes: any;
  idReference: string | null;
  bsModalRef: BsModalRef;

  constructor (
    private fb: FormBuilder,
    private commonMidService: CommonMiddService,
    private newAfiliateService: NewAfiliateService,
    private router: Router,
    private modalService: BsModalService,
    private fetchInfoService: FetchInfoService,
    private urlDataService: UrlDataService,
    private translate: TranslateService
  ) {
    this.urlDataService.setShowHeaderPortal(true);
    this.urlDataService.setHeaderNavPortal(['Mi cuenta', 'Mis afiliados', 'Nuevo afiliado']);

    //Configuration Buttons [Buscar]
    this.searchAfiliateButton.text = "Buscar";
    this.searchAfiliateButton.buttonType = ButtonType.Primary;

    //Configuration Buttons [Enviar]
    this.sendNewAfiliateButton.text = "Guardar";
    this.sendNewAfiliateButton.buttonType = ButtonType.Primary;

    //Configuration Buttons [Cancelar]
    this.cancelButton.text = "Cancelar";
    this.cancelButton.buttonType = ButtonType.Tertiary;

    //Form Search Person Data
    this.idReference = localStorage.getItem("registerId");

    //Configuracion Form
    this.formSearchPersonData = this.fb.group({
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
    })

    this.formNewAfiliateData = this.fb.group({
      firstName: ['', [Validators.required]],
      secondName: ['', []],
      firstLastname: ['', [Validators.required]],
      secondLastname: ['', []],
      email: ['', [Validators.email]],
      cellPhone: ['', [Validators.required, ValidatorStartCellPhoneNumber]],
    })
    
    this.formSearchPersonData.controls['documentNumber'].disable();
  }

  ngOnInit(): void {
    this.getDocumentsTypes();
  }

  searchAfiliate() {
    const payload = {
      'DocumentType': this.formSearchPersonData.controls.documentType.value,
      'Document': this.formSearchPersonData.controls.documentNumber.value
    }

    this.fetchInfoService.searchFamilyMember(payload).subscribe((resp: any) => {
      this.enableNewAfiliateForm = true;
      if (resp.StatusCode == 0) {
        this.formNewAfiliateData.controls.firstName.setValue(resp.Member.Names.split(' ')[0]);
        this.formNewAfiliateData.controls.secondName.setValue(resp.Member.Names.split(' ')[1] ? resp.Member.Names.split(' ')[1] : '');
        this.formNewAfiliateData.controls.firstLastname.setValue(resp.Member.Surnames.split(' ')[0]);
        this.formNewAfiliateData.controls.secondLastname.setValue(resp.Member.Surnames.split(' ')[1] ? resp.Member.Surnames.split(' ')[1] : '');
        this.formNewAfiliateData.controls.email.setValue(resp.Member.Email ? resp.Member.Email : '');
        this.formNewAfiliateData.controls.cellPhone.setValue(resp.Member.Phone);
      }
    })
  }

  getDocumentsTypes() {
    this.fetchInfoService.getAllDocumentTypes().subscribe((resp: any) => {
      this.documentTypes = resp;
    })
  };

  enabledInputDocument() {
    this.formSearchPersonData.controls['documentNumber'].enable();
    this.formSearchPersonData.controls.documentNumber.value != '' ? this.validateDocument() : '';
  }

  validateDocument() {
    if (this.formSearchPersonData.controls.documentNumber.value != '') {
      let request = new DocumentValidationRequest();
      request.DocumentType = this.formSearchPersonData.controls.documentType.value;
      request.Document = this.formSearchPersonData.controls.documentNumber.value;
      this.commonMidService.validateDocument(request)
        .subscribe(
          resp => {
            if (resp.StatusCode != 0) {
              this.bsModalRef = this.generateInformativeModal('Hubo un error al validar el documento', 'El documento que ingresaste no existe en nuestra base de datos, por favor verifique que el documento sea correcto.', true);
              this.formSearchPersonData.controls.documentNumber.setValue('');
            }
          });
    }
  }

  onlyNumber(event: any): boolean {
    return onlyNumber(event);
  }

  postNewAfiliate() {
    const payload = new AfiliateModel(
      this.idReference,
      this.formSearchPersonData.controls.documentType.value,
      this.formSearchPersonData.controls.documentNumber.value,
      this.formNewAfiliateData.controls.firstName.value.concat(this.formNewAfiliateData.controls.secondName.value ? (' ' + this.formNewAfiliateData.controls.secondName.value) : ''),
      this.formNewAfiliateData.controls.firstLastname.value.concat(this.formNewAfiliateData.controls.secondLastname.value ? (' ' + this.formNewAfiliateData.controls.secondLastname.value) : ''),
      this.formNewAfiliateData.controls.cellPhone.value,
      this.formNewAfiliateData.controls.email.value
    );

    this.newAfiliateService.uploadNewAfiliate(payload).subscribe((resp: any) => {
      if (resp.StatusCode == 0) {
        this.bsModalRef = this.generateInformativeModal('Listo', 'Se ha guardado el afiliado exitosamente', false);
        this.bsModalRef.content.onClose.subscribe(() => {
          this.router.navigate(['/portal/my-account/my-afiliates/']);
        });
      } else {
        this.bsModalRef = this.generateInformativeModal('Ah ocurrido un error', 'Por favor, controle que los datos hayan sido cargados correctamente, si el problema persiste, contacte a nuestros servicios de servicoi al cliente.', true);
        this.formNewAfiliateData.reset()
      }
    })
  }

  cancel() {
    this.router.navigate(['/portal/my-account/my-afiliates/'], { replaceUrl: true });
  }

  generateInformativeModal(subTitle: string, description: string, isError: boolean) {
    const initialState: ModalOptions = {
      initialState: {
        iconHeader: isError ? 'alert-circle.svg' : 'alert-check.svg',
        subTitle: subTitle,
        description: description,
        onlyButtonConfirm: true,
        textButton: 'Continuar',
        textButton1: '',
        textButton2: '',
        visibleButtonClose: false,
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: true
    };
    return this.modalService.show(InformativeModalComponent, initialState);
  }
}
