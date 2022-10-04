import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { DateUtils } from 'src/app/shared/utils/DateUtils';
import { environment } from 'src/environments/environment';
import { ResponseComponentModel } from '../../../service-solicitud/models/select-patient-response';
import { PortalValidatorService } from '../../../service-solicitud/services/portal-validator.service';
import { BeneficiaryModel } from '../../models/BeneficiaryModel';
import { SpecialistService } from '../../services/specialist.service';

export class OptionsSelectedInStepOne {
  public beneficiary: BeneficiaryModel;
  public numberContactSecondary: string;
  public checkConfirmNumberContact: boolean;

  constructor(
    beneficiary: BeneficiaryModel, 
    numberContactSecondary: string, 
    checkConfirmNumberContact: boolean
    ) {
    this.beneficiary = beneficiary;
    this.numberContactSecondary = numberContactSecondary;
    this.checkConfirmNumberContact = checkConfirmNumberContact;
  }
}

@Component({
  selector: 'app-agenda-step-one',
  templateUrl: './agenda-step-one.page.html',
  styleUrls: ['./agenda-step-one.page.scss'],
})
export class AgendaStepOnePage implements OnInit {

  @Input("documentType") documentType: string | null;
  @Input("document") document: string | null;
  @Input("default") beneficiaryDefault: OptionsSelectedInStepOne | null;
  @Output("optionsSelected") optionsSelectedInStepOneEventEmitter = new EventEmitter<OptionsSelectedInStepOne>();
  @Output() response: EventEmitter<ResponseComponentModel> = new EventEmitter<ResponseComponentModel>();

  public readonly avatarIcon = environment.imagesRoute + 'icons/avatar-icon.svg';
  public isLoading: boolean = false;
  validateCellNumberError = false;
  actualStep: number;

  public beneficiaryConfig: {
    form: FormGroup,
  }

  public lists: {
    beneficiaries: BeneficiaryModel[]
  }

  constructor(
    private specialitsService: SpecialistService,
    private bsModalService: BsModalService
  ) {
    this.beneficiaryConfig = {
      form: new FormGroup({
        beneficiary: new FormControl(null, [Validators.required]),
        numberContactPrimary: new FormControl(null, [Validators.required]),
        checkConfirmNumberContact: new FormControl(false, [Validators.required]),
        numberContactSecondary: new FormControl(null, [Validators.required])
      }),
    }
    this.lists = {
      beneficiaries: [],
    }
  }

  async ngOnInit(): Promise<void> {
    this.actualStep = 1;
    if (this.documentType && this.document) {
      await this.loadAllBeneficiaries(this.documentType, this.document);

      if (this.beneficiaryDefault) {
        this.beneficiaryConfig.form.get('beneficiary')?.setValue(this.beneficiaryDefault?.beneficiary);
        this.beneficiaryConfig.form.get('numberContactPrimary')?.setValue(this.beneficiaryDefault?.beneficiary.cellPhone);
        this.beneficiaryConfig.form.get('numberContactPrimary')?.disable();
        this.beneficiaryConfig.form.get('checkConfirmNumberContact')?.setValue(this.beneficiaryDefault?.checkConfirmNumberContact);
        this.beneficiaryConfig.form.get('numberContactSecondary')?.setValue(this.beneficiaryDefault?.numberContactSecondary);
      }
    }
  }

  goBack(){
    this.actualStep = 1;
  }

  private errorRegister(error: any) {
    this.generateInformativeModal(
      'Inconvenientes con el portal',
      'En este momento no podemos procesar tu solicitud. Por favor inténtalo mas tarde.',
      true,
      true
    )
  }

  private generateInformativeModal(
    subTitle: string,
    description: string,
    isError: boolean,
    onlyButtonConfirm: boolean = true
  ): BsModalRef {
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
      ignoreBackdropClick: true
    };
    return this.bsModalService.show(InformativeModalComponent, initialState);
  }

  // Load lists --------------------------------------------------------------------------------------------------------
  private async loadAllBeneficiaries(documentType: string, document: string): Promise<void> {
    this.isLoading = true;
    try {
      const response = await this.specialitsService.getPersons(documentType, document).toPromise();
      if (response.Beneficiaries && response.Beneficiaries.length > 0) {
        response.Beneficiaries.forEach((beneficiary: any) => {
          this.lists.beneficiaries.push(new BeneficiaryModel().buildFromRequest(beneficiary));
        });
      }
    } catch (error) {
      this.errorRegister(error)
    } finally {
      this.isLoading = false;
    }
  }

  public getFullNameFromBeneficiary(beneficiary: BeneficiaryModel): string | null {
    if (beneficiary && beneficiary.fullNames) {
      return beneficiary.fullNames;
    }
    return null;
  }

  public getAgeFromBeneficiary(beneficiary: BeneficiaryModel): number | null {
    if (beneficiary && beneficiary.birthDate) {
      return DateUtils.getAgeFromDate(beneficiary.birthDate)
    }
    return null;
  }

  public clickChangeBeneficiary(beneficiarySelected: BeneficiaryModel): void {
    this.beneficiaryConfig.form.get('beneficiary')?.setValue(beneficiarySelected);
    this.beneficiaryConfig.form.get('numberContactPrimary')?.setValue(beneficiarySelected.cellPhone);
    this.beneficiaryConfig.form.get('numberContactPrimary')?.disable();
    this.beneficiaryConfig.form.get('checkConfirmNumberContact')?.setValue(true);
    this.beneficiaryConfig.form.get('numberContactSecondary')?.setValue(null);
    this.actualStep = 2;
    this.emitChanges();
  }

  public isclickChangeBeneficiary(beneficiarySelected: BeneficiaryModel): boolean {
    if (this.beneficiaryConfig.form.get('beneficiary')?.value.document == beneficiarySelected.document) {
      return true;
    }
    return false;
  }

  public changeNumberContact(): void {
    this.emitChanges();
  }

  public changeCheckConfirmNumberContact(): void {
    this.emitChanges();
  }

  numberOnly(event: any): boolean {
    return PortalValidatorService.numberOnly(event);
  }

  public emitChanges(): void {
    const tmp: OptionsSelectedInStepOne = new OptionsSelectedInStepOne(
      this.beneficiaryConfig.form.get('beneficiary')?.value,
      this.beneficiaryConfig.form.get('numberContactSecondary')?.value,
      this.beneficiaryConfig.form.get('checkConfirmNumberContact')?.value,
    );
    this.optionsSelectedInStepOneEventEmitter.emit(tmp);
    let resp = new ResponseComponentModel();
    resp.ComponentReadyForNextStep = true;
    resp.Component = "1";
    resp.Messaje = "";
    this.response.emit(resp);
  }

}
