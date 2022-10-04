import { GoogleMapsAPIWrapper } from '@agm/core';
import { Component, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { InformativeModalComponent } from 'src/app/shared/components/informative-modal/informative-modal.component';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { DateUtils } from 'src/app/shared/utils/DateUtils';
import { environment } from 'src/environments/environment';
import { PortalValidatorService } from '../service-solicitud/services/portal-validator.service';
import { ScreenShow } from './components/agenda-step-five/agenda-step-five.page';
import { OptionsSelectedInStepFour } from './components/agenda-step-four/agenda-step-four.page';
import { OptionsSelectedInStepOne } from './components/agenda-step-one/agenda-step-one.page';
import { OptionsSelectedInStepThree } from './components/agenda-step-three/agenda-step-three.page';
import { OptionsSelectedInStepTwo } from './components/agenda-step-two/agenda-step-two.page';
import { BeneficiaryModel } from './models/BeneficiaryModel';
import { ConsultantCityModel } from './models/ConsultantCityModel';
import { ConsultationTypeModel } from './models/ConsultationTypeModel';
import { DayAvailableModel } from './models/DayAvailableModel';
import { ScheduleAvailableModel } from './models/ScheduleAvailableModel';
import { SpecialistModel } from './models/SpecialistModel';
import { SpecialtyModel } from './models/SpecialtyModel';
import { SpecialistService } from './services/specialist.service';

export enum SectionStep {
  NONE = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5
}

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.page.html',
  styleUrls: ['./specialists.page.scss'],
  providers: [GoogleMapsAPIWrapper]
})

export class SpecialistsPage implements OnInit {

  readyComponent1: ResponseComponentModel;
  readyComponent2: ResponseComponentModel;
  readyComponent3: ResponseComponentModel;
  readyComponent4: ResponseComponentModel;
  readyComponent5: ResponseComponentModel;
  buttonContinuarDisabled: boolean = true;

  imgRoute = environment.imagesRoute;
  configurationButtonNext = new ButtonConfiguration();
  configurationButtonConfirmAppointment = new ButtonConfiguration();
  configurationFinalizedAppointment = new ButtonConfiguration();
  
  public isLoading: boolean = false;
  public sections: {
    steps: {
      actual: SectionStep,
      list: number[],
    },
    stepFive: {
      screenShow: ScreenShow,
    }
  }
  public selections: {
    documentType: string | null,
    document: string | null,
    optionSelectedInStepOne: OptionsSelectedInStepOne | null,
    optionSelectedInStepTwo: OptionsSelectedInStepTwo | null,
    optionsSelectedInStepThree: OptionsSelectedInStepThree | null,
    optionsSelectedInStepFour: OptionsSelectedInStepFour | null,
  }
  router: any;

  constructor
  (
    private specialitsService: SpecialistService,
    private bsModalService: BsModalService,
    private translate: TranslateService,
  ) {
    this.configurationButtonNext.buttonType = ButtonType.Primary;
    this.configurationButtonNext.text = "Continuar";

    this.configurationButtonConfirmAppointment.buttonType = ButtonType.Primary;
    this.configurationButtonConfirmAppointment.text = "Confirmar Turno ";

    this.configurationFinalizedAppointment.buttonType = ButtonType.Primary;
    this.configurationFinalizedAppointment.text = "Finalizar";

    this.sections = {
      steps: {
        actual: SectionStep.NONE,
        list: [
          SectionStep.ONE,
          SectionStep.TWO,
          SectionStep.THREE,
          SectionStep.FOUR,
          SectionStep.FIVE
        ]
      },
      stepFive: {
        screenShow: 0
      }
    }
    this.selections = {
      documentType: null,
      document: null,
      optionSelectedInStepOne: null,
      optionSelectedInStepTwo: null,
      optionsSelectedInStepThree: null,
      optionsSelectedInStepFour: null,
    }
  }

  ngOnInit(): void {
    this.loadFirstData();
    this.readyComponent2 = new ResponseComponentModel();
  }

  // Modals ------------------------------------------------------------------------------------------------------------
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

  // Load first data ---------------------------------------------------------------------------------------------------
  private loadFirstData(): void {
    this.selections.documentType = localStorage.getItem("documentType");
    this.selections.document = localStorage.getItem("document");
    if (this.selections.documentType && this.selections.document) {
      this.sections.steps.actual = SectionStep.ONE;
    }
  }

  // controls for changing sections ------------------------------------------------------------------------------------
  public clickButtonPrevius(sectionStep: SectionStep): void {
    if (!this.canChangeToPreviusStep(sectionStep)) {
      return;
    }
    this.sections.steps.actual = sectionStep - 1;
  }

  public clickButtonNext(sectionStep: SectionStep): void {
    if (!this.canChangeToNextStep(sectionStep)) {
      return;
    }
    this.sections.steps.actual = sectionStep + 1;
  }

  public showButtonPrevius(sectionStep: SectionStep): boolean {
    switch (sectionStep) {
      case SectionStep.ONE:
        return false;
      case SectionStep.TWO:
      case SectionStep.THREE:
      default:
        return true;
    }
  }

  public showButtonNext(sectionStep: SectionStep): boolean {
    switch (sectionStep) {
      case SectionStep.FIVE:
        return false;
      case SectionStep.ONE:
      case SectionStep.TWO:
      case SectionStep.THREE:
      case SectionStep.FOUR:
      default:
        return true;
    }
  }

  public showButtonConfirm(sectionStep: SectionStep): boolean {
    if (this.sections.stepFive.screenShow == 0) {
      switch (sectionStep) {
        case SectionStep.FIVE:
          return true;
        default:
          return false;
      }
    } else {
      return false;
    }
  }

  public showButtonFinalize(sectionStep: SectionStep): boolean {
    switch (sectionStep) {
      case SectionStep.FIVE:
        return true;
      default:
        return false;
    }
  }

  public canChangeToNextStep(sectionStep: SectionStep): boolean {
    this.buttonContinuarDisabled = true
    switch (sectionStep) {
      case SectionStep.ONE: return this.canChangeStepOneToTwo();
      case SectionStep.TWO: return this.canChangeStepTwoToThree();
      case SectionStep.THREE: return this.canChangeStepThreeToFour();
      case SectionStep.FOUR: return this.canChangeStepFourToFive();
      default:
        return false;
    }
  }

  public canChangeToPreviusStep(sectionStep: SectionStep): boolean {
    return true;
  }

  // Validatos to change steps -----------------------------------------------------------------------------------------
  private canChangeStepOneToTwo(): boolean {
    if (!this.selections.optionSelectedInStepOne) {
      // Paso 1 sin realizar
      this.generateInformativeModal('Validación', 'Debe seleccionar un paciente.', true, true)
      return false;
    }
    if (!this.selections.optionSelectedInStepOne.beneficiary) {
      // Beneficiario no seleccionado
      this.generateInformativeModal('Validación', 'Debe seleccionar un paciente.', true, true)
      return false;
    }
    if (
      !this.selections.optionSelectedInStepOne.checkConfirmNumberContact &&
      (!this.selections.optionSelectedInStepOne.numberContactSecondary ||
        this.selections.optionSelectedInStepOne.numberContactSecondary.trim().length == 0)) {
      // Se habilito el uso de un telefono secundario pero no se ingreso el mismo
      this.generateInformativeModal('Validación', 'Complete el campo Teléfono Paciente.', true, true)
      return false;
    }
    return true;
  }

  private canChangeStepTwoToThree(): boolean {
    return true;
  }

  private canChangeStepThreeToFour(): boolean {
    return true;
  }

  private canChangeStepFourToFive(): boolean {
    return true;
  }

  // Functions form step one -------------------------------------------------------------------------------------------
  public changeOptionSelectedInStepOne(optionsSelectedInStepOne: OptionsSelectedInStepOne): void {
    this.selections.optionSelectedInStepOne = optionsSelectedInStepOne;
  }

  // Functions form step two -------------------------------------------------------------------------------------------
  public changeOptionSelectedInStepTwo(optionsSelectedInStepTwo: OptionsSelectedInStepTwo): void {
    this.selections.optionSelectedInStepTwo = optionsSelectedInStepTwo;
  }

  // Functions form step three -----------------------------------------------------------------------------------------
  public changeOptionSelectedInStepThree(optionsSelectedInStepThree: OptionsSelectedInStepThree): void {
    this.selections.optionsSelectedInStepThree = optionsSelectedInStepThree;
  }

  // Functions form step four ------------------------------------------------------------------------------------------
  public changeOptionSelectedInStepFour(optionsSelectedInStepFour: OptionsSelectedInStepFour): void {
    this.selections.optionsSelectedInStepFour = optionsSelectedInStepFour;
  }

  // Confirm appointment -----------------------------------------------------------------------------------------------
  public clickConfirmAppointment() {
    this.isLoading = true;
    let consultationTypeId: any = this.selections.optionSelectedInStepTwo!.consultationType?.consultationTypeId;
    let specialitesId: any = this.selections.optionsSelectedInStepThree!.specialist?.specialitesId;
    let document: any = this.selections.optionSelectedInStepOne!.beneficiary?.document;
    let documentType: any = this.selections.optionSelectedInStepOne!.beneficiary?.documentType;
    let documentTypeShort: any = this.selections.optionSelectedInStepOne!.beneficiary?.documentTypeShort;
    let fullNameTitular: any = this.selections.optionSelectedInStepOne!.beneficiary?.fullNameTitular;
    let specialistAgendaId: any = this.selections.optionsSelectedInStepFour!.schedule?.specialistAgendaId;

    let nameOneTitular: any = localStorage.getItem("NameOne");
    let nameTwoTitular: any = localStorage.getItem("NameTwo");
    let lastNameOne: any = localStorage.getItem("LastNameOne");
    let lastNameTwo: any = localStorage.getItem("LastNameTwo");
    let applicantDocumentType: any = localStorage.getItem("documentType");
    let documentTypeName: any = localStorage.getItem("documentTypeName");
    let applicantDocument: any = localStorage.getItem("document");
    let applicantCellPhone: any = localStorage.getItem("CellPhone");
    let applicantMail: any = localStorage.getItem("userName");

    /*     {AssignAppointment: true, StatusCode: 0, Message: 'El proceso ha sido exitoso', Type: 3, Title: 'Proceso exitoso'} */
    this.specialitsService.assignAppointment(
      consultationTypeId,
      specialitesId,
      document,
      documentType,
      documentTypeShort,
      fullNameTitular,
      specialistAgendaId,
      1,
      nameOneTitular,
      nameTwoTitular,
      lastNameOne,
      lastNameTwo,
      applicantDocumentType,
      documentTypeName,
      applicantDocument,
      applicantCellPhone,
      applicantMail
    ).subscribe(
        (result: any) => {
          if (result.StatusCode === 0) {
            this.sections.stepFive.screenShow = 1;
            this.isLoading = false;        
          } else {
            this.isLoading = false;
            this.generateInformativeModal(result.Title, result.Message, true, true)
          }
        },
        (error: any) => {
          this.errorRegister(error);
          this.isLoading = false;
        });
}

  // Finalized appointment ---------------------------------------------------------------------------------------------
  public clickFinalizedAppointment() {
   // this.sections.stepFive.screenShow = 0;
   this.router.navigate(['/admin/home']);
  }

  valueResponse(response: any) {
    switch (response.Component) {
      case "1":
        (response.ComponentReadyForNextStep) ? this.buttonContinuarDisabled = false : this.buttonContinuarDisabled = true;
        this.readyComponent1 = response;
        break;
      case "2":
        (response.ComponentReadyForNextStep) ? this.buttonContinuarDisabled = false : this.buttonContinuarDisabled = true;
        this.readyComponent2 = response;
        break;
      case "3":
        (response.ComponentReadyForNextStep) ? this.buttonContinuarDisabled = false : this.buttonContinuarDisabled = true;
        this.readyComponent3 = response;
        break;
      case "4":
        (response.ComponentReadyForNextStep) ? this.buttonContinuarDisabled = false : this.buttonContinuarDisabled = true;
        this.readyComponent4 = response;
        break;
      case "5":
        (response.ComponentReadyForNextStep) ? this.buttonContinuarDisabled = false : this.buttonContinuarDisabled = true;
        this.readyComponent5 = response;
        break;
    }
  }

}

class ResponseComponentModel {
  Component: string;
  ComponentReadyForNextStep: boolean;
  Messaje: string;
}