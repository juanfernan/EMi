import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { ResponseComponentModel } from '../../../service-solicitud/models/select-patient-response';
import { ConsultantCityModel } from '../../models/ConsultantCityModel';
import { SpecialistModel } from '../../models/SpecialistModel';
import { SpecialtyModel } from '../../models/SpecialtyModel';
import { SpecialistService } from '../../services/specialist.service';
import { AgendaMapModalPage } from '../agenda-map-modal/agenda-map-modal.page';

export class OptionsSelectedInStepThree {
  public specialty: SpecialtyModel | null;
  public specialist: SpecialistModel | null;
  public consultantCity: ConsultantCityModel | null;
  public specialistTableSelected: SpecialistModel | null;

  constructor(
    specialty: SpecialtyModel | null,
    specialist: SpecialistModel | null,
    consultantCity: ConsultantCityModel | null,
    specialistTableSelected: SpecialistModel | null) {
    this.specialty = specialty;
    this.specialist = specialist;
    this.consultantCity = consultantCity;
    this.specialistTableSelected = specialistTableSelected;
  }
}

@Component({
  selector: 'app-agenda-step-three',
  templateUrl: './agenda-step-three.page.html',
  styleUrls: ['./agenda-step-three.page.scss'],
})
export class AgendaStepThreePage implements OnInit {

  @Input("specialtySelected") specialtySelected: SpecialtyModel | null;
  @Input("specialistSelected") specialistSelected: SpecialistModel | null;
  @Input("consultantCitySelected") consultantCitySelected: ConsultantCityModel | null;
  @Input("specialistTableSelected") specialistTableSelected: SpecialistModel | null;
  @Output("OptionsSelectedInStepThree") optionsSelectedInStepThreeEmitter: EventEmitter<OptionsSelectedInStepThree> =
    new EventEmitter<OptionsSelectedInStepThree>();
  @Output() response: EventEmitter<ResponseComponentModel> = new EventEmitter<ResponseComponentModel>();

  public isLoading: boolean = false;
  public readonly positionIcon = environment.imagesRoute + 'icons/location.png';
  public readonly actualPositionIcon = environment.imagesRoute + 'icons/actual-position.svg';
  public lists: {
    specialisties: SpecialtyModel[],
    specialists: SpecialistModel[],
    consultantCities: ConsultantCityModel[],
  }

  public table: {
    columns: string[],
    //TO DO ver tabla
    //datasource: MatTableDataSource<any>
    //selection: SelectionModel<any>;
  }

  public filterForm: FormGroup;
  especilistaRow: any;

  constructor(
    private specialitsService: SpecialistService,
    private bsModalService: BsModalService
  ) {
    this.lists = {
      specialisties: [],
      specialists: [],
      consultantCities: [],
    }
    this.table = {/*   columns: ['checkbox', 'name', 'location'], */
      columns: ['checkbox', 'name', 'location'],
      //TO DO ver tabla
      //datasource: new MatTableDataSource<SpecialistModel>([]),
      //selection: new SelectionModel<SpecialistModel>(false, []),
    }
    this.filterForm = new FormGroup({
      specialtyCode: new FormControl(null),
      specialistId: new FormControl(null),
      locationCode: new FormControl(null),
    });
  }

  async ngOnInit(): Promise<void> {

    await Promise.all([
      this.loadAllSpecialits(),
      this.loadAllSpecialties(),
      this.loadAllConsultantCities(),
    ]);

    if (this.specialtySelected) {
      this.filterForm.get('specialtyCode')?.setValue(this.specialtySelected.code);
    }

    if (this.specialistSelected) {
      this.filterForm.get('specialistId')?.setValue(this.specialistSelected.id);
    }

    if (this.consultantCitySelected) {
      this.filterForm.get('locationCode')?.setValue(this.consultantCitySelected.code);
    }

    if (this.filterForm.get('specialtyCode')?.value && this.specialistTableSelected) {
      this.reloadTableSpecialist();
      // TO DO
      //const specialistOptional = this.table.datasource.data.find(specialist => specialist.id === this.specialistTableSelected?.id);
      // if (specialistOptional) {
      //   this.table.selection.toggle(specialistOptional);
      // }
    }

  }

  private emitChanges(): void {
    let specialty: SpecialtyModel | undefined | null = null;
    let specialist: SpecialistModel | undefined | null = null;
    let consultantCityModel: ConsultantCityModel | undefined | null = null;
    let specialistTableSelected: SpecialistModel | undefined | null = null;

    if (this.filterForm.get('specialtyCode')?.value) {
      specialty = this.lists.specialisties.find(specialty => specialty.code === this.filterForm.get('specialtyCode')?.value);
    }

    if (this.filterForm.get('specialistId')?.value) {
      specialist = this.lists.specialists.find(specialist => specialist.id === this.filterForm.get('specialistId')?.value);
    }
    if (this.filterForm.get('locationCode')?.value) {
      consultantCityModel = this.lists.consultantCities.find(specialty => specialty.code === this.filterForm.get('locationCode')?.value);
    }
    // TO DO
    // if (this.table.selection.selected.length > 0) {
    //   specialistTableSelected = this.table.selection.selected[0];
    //   specialist = this.table.selection.selected[0];
    // }

    if (specialist) {
      let resp = new ResponseComponentModel();
      resp.ComponentReadyForNextStep = true;
      resp.Component = "3";
      resp.Messaje = "";
      this.response.emit(resp);
    }

    const optionsSelectedInStepThree: OptionsSelectedInStepThree = new OptionsSelectedInStepThree(
      specialty ? specialty : null,
      specialist ? specialist : null,
      consultantCityModel ? consultantCityModel : null,
      specialistTableSelected ? specialistTableSelected : null
    )
    this.optionsSelectedInStepThreeEmitter.emit(optionsSelectedInStepThree);

  }

  // Load list from backend --------------------------------------------------------------------------------------------
  private async loadAllSpecialties(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await this.specialitsService.getFilterSpecialties().toPromise();
      if (response && response.DataList) {
        response.DataList.forEach((specialty: any) => {
          this.lists.specialisties.push(new SpecialtyModel().buildFromRequest(specialty));
        });
      }
    } catch (error) {
      // TODO mostrar el error en un mensaje
    } finally {
      this.isLoading = false;
    }
  }

  private async loadAllSpecialits(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await this.specialitsService.getFilterSpecialits().toPromise();
      if (response && response.Specialists) {
        response.Specialists.forEach((specialist: any) => {
          this.lists.specialists.push(new SpecialistModel().buildFromRequest(specialist));
        });
      }
    } catch (error) {
      // TODO mostrar el error en un modal
      console.log("error = ", error);
    } finally {
      this.isLoading = false;
    }
  }

  private async loadAllConsultantCities(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await this.specialitsService.getConsultantCities().toPromise();
      if (response && response.consultantCitiesResponses) {
        response.consultantCitiesResponses.forEach((consultantCity: any) => {
          this.lists.consultantCities.push(new ConsultantCityModel().buildFromRequest(consultantCity));
        });
      }
    } catch (error) {
      // TODO mostrar el error en un modal
      console.log("error = ", error);
    } finally {
      this.isLoading = false;
    }
  }

  // Filters inputs ----------------------------------------------------------------------------------------------------
  public changeInputSpecialty(): void {
    this.filterForm.get('specialistId')?.setValue(null);
    this.filterForm.get('locationCode')?.setValue(null);
    this.reloadTableSpecialist();
    // this.emitChanges();
  }

  public changeInputSpecialist(): void {
    this.filterForm.get('locationCode')?.setValue(null);
    this.reloadTableSpecialist();
  }

  public changeInputLocation(): void {
    this.reloadTableSpecialist();
  }

  public showSpecialist(specialist: SpecialistModel): boolean {
    if (this.filterForm.get('specialtyCode')?.value === specialist.specialitesId) {
      return true;
    }
    return false;
  }

  public showLocation(consultantCity: ConsultantCityModel) {
    if (this.filterForm.get('specialtyCode')?.value) {
      // If not select one specialist then show all cities
      if (!this.filterForm.get('specialistId')?.value) {
        return true;
      }
      // If select one specialist the find specialist by id
      const specialist: SpecialistModel | undefined = this.lists.specialists.find(
        specialist => specialist.id === this.filterForm.get('specialistId')?.value);

      if (specialist?.cityName &&
        consultantCity.name &&
        specialist?.cityName?.toLowerCase() == consultantCity.name?.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  // Table methods -----------------------------------------------------------------------------------------------------
  private reloadTableSpecialist(): void {
    if (this.filterForm.get('specialtyCode')?.value) {
      // TO DO
      //this.table.datasource.data = this.getDataForTableSpecialists();
    }
    this.emitChanges();
  }

  private getDataForTableSpecialists(): SpecialistModel[] {
    if (this.filterForm.get('specialtyCode')?.value &&
      this.filterForm.get('specialistId')?.value &&
      this.filterForm.get('locationCode')?.value) {
      const consultantCityOptional: ConsultantCityModel | undefined = this.lists.consultantCities.find(
        consultantCity => consultantCity.code === this.filterForm.get('locationCode')?.value
      );
      return this.lists.specialists.filter(
        specialist =>
          specialist.specialitesId === this.filterForm.get('specialtyCode')?.value &&
          specialist.id === this.filterForm.get('specialistId')?.value &&
          specialist.cityName?.toLowerCase() === consultantCityOptional?.name?.toLowerCase());
    }
    if (this.filterForm.get('specialtyCode')?.value &&
      this.filterForm.get('specialistId')?.value) {
      return this.lists.specialists.filter(
        specialist =>
          specialist.specialitesId === this.filterForm.get('specialtyCode')?.value &&
          specialist.id === this.filterForm.get('specialistId')?.value);
    }
    if (this.filterForm.get('specialtyCode')?.value &&
      this.filterForm.get('locationCode')?.value) {
      const consultantCityOptional: ConsultantCityModel | undefined = this.lists.consultantCities.find(
        consultantCity => consultantCity.code === this.filterForm.get('locationCode')?.value
      );
      return this.lists.specialists.filter(
        specialist =>
          specialist.specialitesId === this.filterForm.get('specialtyCode')?.value &&
          specialist.cityName?.toLowerCase() === consultantCityOptional?.name?.toLowerCase());
    }
    if (this.filterForm.get('specialtyCode')?.value) {
      return this.lists.specialists.filter(
        specialist => specialist.specialitesId === this.filterForm.get('specialtyCode')?.value);
    }
    return [];
  }

  generateMapModal(
    specialist: SpecialistModel
  ): BsModalRef {
    const initialState: ModalOptions = {
      initialState: {
        subTitle: 'Ubicación',
        description: `${specialist.clinicalName} (${specialist.address}, ${specialist.cityName})`,
        textButton: 'Aceptar',
        latitud: specialist.latitude,
        longitud: specialist.longitude,
        textMark: specialist.clinicalName
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 'modal-error-no-services',
      backdrop: true,
      ignoreBackdropClick: true
    };
    return this.bsModalService.show(AgendaMapModalPage, initialState);
  }

  public clickSelectSpecialistInTable(row: any): void {
    // TO DO ver tabla
    //this.table.selection.toggle(row);
    this.emitChanges();
  }

}
