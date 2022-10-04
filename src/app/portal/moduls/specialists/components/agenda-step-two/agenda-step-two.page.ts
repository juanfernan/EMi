import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseComponentModel } from '../../../service-solicitud/models/select-patient-response';
import { ConsultationTypeModel } from '../../models/ConsultationTypeModel';
import { SpecialistService } from '../../services/specialist.service';

export class OptionsSelectedInStepTwo {
  public consultationType: ConsultationTypeModel | null;
  public validateOption:boolean=false;

  constructor(
    appointmentType: ConsultationTypeModel | null) {
    this.consultationType = appointmentType;
  }
}

@Component({
  selector: 'app-agenda-step-two',
  templateUrl: './agenda-step-two.page.html',
  styleUrls: ['./agenda-step-two.page.scss'],
})
export class AgendaStepTwoPage implements OnInit {

  @Output() response: EventEmitter<ResponseComponentModel> = new EventEmitter<ResponseComponentModel>();
  @Input("consultationTypeSelected") consultationTypeSelected: ConsultationTypeModel | null;
  @Output("optionsSelected") optionsSelectedInStepTwoEventEmitter = new EventEmitter<OptionsSelectedInStepTwo>()
  
  public isLoading: boolean = false;
  public readonly avatarIcon = environment.imagesRoute + 'icons/avatar-icon.svg';
  imagesRoute: string = environment.imagesRoute;

  public lists: {
    consultationTypes: ConsultationTypeModel[]
  }

  public selected: {
    consultationType: ConsultationTypeModel | null
  }

  constructor(
    private specialistService: SpecialistService
  ) {
    this.lists = {
      consultationTypes: [],
    }
    this.selected = {
      consultationType: null,
    }
   // this.emitChanges();
  }

  async ngOnInit(): Promise<void> {
    await this.loadConsultationTypes();
    if (this.consultationTypeSelected) {
      this.selected.consultationType = this.consultationTypeSelected;
    }
  }

  // Load list ---------------------------------------------------------------------------------------------------------
  private async loadConsultationTypes(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await this.specialistService.getConsultationType().toPromise();
      if (response && response.ConsultationType) {
        response.ConsultationType.forEach((consultationType: any) => {
          this.lists.consultationTypes.push(new ConsultationTypeModel().buildFromRequest(consultationType));
        });
      }
    } catch (error) {
      /// TODO mostrar error en un modal
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  public isConsultationTypeModelSelected(consultationTypeModel: ConsultationTypeModel): boolean {
    if (this.selected.consultationType &&
      this.selected.consultationType?.consultationTypeId === consultationTypeModel.consultationTypeId)
      return true;
    return false;
  }

  public clickConsultationTypeModel(consultationTypeModel: ConsultationTypeModel): void {
    this.selected.consultationType = consultationTypeModel;
      this.emitChanges();
  }

  public emitChanges(): void {
    const tmp: OptionsSelectedInStepTwo = new OptionsSelectedInStepTwo(
      this.selected.consultationType
    );
    this.optionsSelectedInStepTwoEventEmitter.emit(tmp);
    let resp = new ResponseComponentModel();
    resp.ComponentReadyForNextStep = true;
    resp.Component = "2";
    resp.Messaje = "";
    this.response.emit(resp);
  }

}
