import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateUtils } from 'src/app/shared/utils/DateUtils';
import { ResponseComponentModel } from '../../../service-solicitud/models/select-patient-response';
import { DayAvailableModel } from '../../models/DayAvailableModel';
import { ScheduleAvailableModel } from '../../models/ScheduleAvailableModel';
import { SpecialistModel } from '../../models/SpecialistModel';
import { SpecialistService } from '../../services/specialist.service';
import { formatDate } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

export class OptionsSelectedInStepFour {
  public availableDay: DayAvailableModel | null;
  public schedule: ScheduleAvailableModel | null;
  constructor(availableDay: DayAvailableModel | null, schedule: ScheduleAvailableModel | null) {
    this.availableDay = availableDay;
    this.schedule = schedule;
  }
}

@Component({
  selector: 'app-agenda-step-four',
  templateUrl: './agenda-step-four.page.html',
  styleUrls: ['./agenda-step-four.page.scss'],
})
export class AgendaStepFourPage implements OnInit {

  @Input("specialist") specialist: SpecialistModel | null;
  @Input("availableDaySelected") availableDaySelected: DayAvailableModel | null;
  @Input("scheduleSelected") scheduleSelected: ScheduleAvailableModel | null;
  @Output("optionsSelectedInStepFour") optionsSelectedInStepFourEmitter: EventEmitter<OptionsSelectedInStepFour> = new EventEmitter<OptionsSelectedInStepFour>();

  @Output() response: EventEmitter<ResponseComponentModel> = new EventEmitter<ResponseComponentModel>();

  listaDias: string;
  pruebaEvent: any;
  listaName: String [];
  fechaForm: FormGroup;
  fechaSel: string;

  public isLoading: boolean = false;
  public lists: {
    availableName: string[],
    availableDay: number[],
    availableDays: DayAvailableModel[],
    schedulesAvailable: ScheduleAvailableModel[],
    schedulesAvailableMorning: ScheduleAvailableModel[],
    schedulesAvailableAfternoon: ScheduleAvailableModel[],
  }
  public calendar: {
    isReady: boolean,
    dateSelected: Date | null,
    scheduleSelected: string | null,
  }

  constructor(
    private specialitsService: SpecialistService
  ) {
    this.lists = {
      availableName: [],
      availableDay: [],
      availableDays: [],
      schedulesAvailable: [],
      schedulesAvailableMorning: [],
      schedulesAvailableAfternoon: [],
    }
    this.calendar = {
      isReady: false,
      dateSelected: null,
      scheduleSelected: null,
    }
    this.fechaForm = new FormGroup({
      selectFecha: new FormControl(null)
    });
  }

  async ngOnInit(): Promise<void> {
    await this.loadAvailableDays();
    this.initCalendarFilterAsync();
    if (this.availableDaySelected) {
      if (this.availableDayInList(this.availableDaySelected)) {
        this.calendar.dateSelected = this.availableDaySelected.code;
        if (this.scheduleSelected) {
          await this.selectDateCalendar();
          if (this.scheduleAvailableInList(this.scheduleSelected)) {
            this.calendar.scheduleSelected = this.scheduleSelected.specialistAgendaId;
          } else {
            // El horario seleccionado ya no se encuentra disponible.
          }
        }
      } else {
        // La fecha seleccionada ya no se encuentra disponible.
      }
    }
  }

  // Load lists
  private async loadAvailableDays(): Promise<void> {
    if (!this.specialist || !this.specialist.id) {
      return;
    }
    this.isLoading = true;
    try {
      const response = await this.specialitsService.getAvailableDays(this.specialist.medicalConsultantsId).toPromise();
      if (response && response.DataList) {
        response.DataList.forEach((avariableDay: any) => {        
          this.lists.availableDays.push(new DayAvailableModel().buildFromRequest(avariableDay));
         
          //this.lists.availableName.push(avariableDay.Name, avariableDay.Code);
          //console.log(this.lists.availableName);

          //const dia = new String(avariableDay.Code);
          //const valorDia = dia.slice(dia.length - 2);
          //this.lists.availableDay.push(parseInt(valorDia));
          //this.listaName.push(avariableDay.Name);
          //console.log(avariableDay);
        });
          // console.log(this.lists.availableDays);
          // console.log(this.lists.availableName);
          // console.log(this.lists.availableDays);
          // this.listaDias = this.lists.availableDay.join();
          // console.log("new " + this.listaDias)
      }
    } catch (error) {
      // TODO mostrar el error en un modal
      console.log("error = ", error);
    } finally {
      this.isLoading = false;
    }
  }

  private async loadScheduleAvailables(): Promise<void> {
    if (!this.specialist?.id || !this.calendar.dateSelected) {
      return;
    }
    this.isLoading = true;
    this.lists.schedulesAvailable = [];
    try {
      const response = await this.specialitsService.getSchedulesAvailable(this.specialist.medicalConsultantsId!, this.calendar.dateSelected).toPromise();
      if (response && response.SpecialistAgenda) {
        response.SpecialistAgenda.forEach((scheduleAvailable: any) => {
          this.lists.schedulesAvailable.push(new ScheduleAvailableModel().buildFromRequest(scheduleAvailable));
        });
      }
    } catch (error) {
      // TODO mostrar el error en un modal
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  // Calendar methods --------
  private availableDayInList(availableDaySearch: DayAvailableModel): boolean {
    const optionalDate = this.lists.availableDays.find(availableDay =>
      DateUtils.comparteYearMonthDay(availableDay.code, availableDaySearch.code)
    );
    if (optionalDate) {
      return true;
    }
    return false;
  }

  private scheduleAvailableInList(scheduleAvailableSearch: ScheduleAvailableModel): boolean {
    const optionalScheduleAvailable: ScheduleAvailableModel | undefined = this.lists.schedulesAvailable.find(scheduleAvailable =>
      scheduleAvailable.specialistAgendaId === scheduleAvailableSearch.specialistAgendaId
    );
    if (optionalScheduleAvailable) {
      return true;
    }
    return false;
  }

  private initCalendarFilterAsync() {
    // this.calendar.dateFilter = (date: Date): boolean => {
    //   return this.dateCalendarFilter(date);
    // };
    this.calendar.isReady = true;
  }

  public dateCalendarFilter(date: Date): boolean {
    const avariableDayOptional = this.lists.availableDays.find(avariableDay =>
      avariableDay.code?.getFullYear() == date.getFullYear() &&
      avariableDay.code?.getMonth() == date.getMonth() &&
      avariableDay.code?.getDate() == date.getDate()
    );
    if (avariableDayOptional) {
      return true;
    }
    return false;
  }

  public async selectDateCalendar(): Promise<void> {
    let valor = this.fechaForm.get('selectFecha').value;
    console.log("valor " + valor);
    // let fecha = valor.slice(valor.length - 10);
    //console.log("valor = " + fecha);
    // const date1 = new Date(fecha);
    // console.log(date1);
    // const format1 = "YYYY-MM-DD";
    // const dia = moment(date1).format(format1);
    // this.calendar.dateSelected = new Date(dia);
    // console.log(this.calendar.dateSelected);
    this.lists.schedulesAvailableMorning = [];
    this.lists.schedulesAvailableAfternoon = [];
    this.calendar.dateSelected = new Date(valor);
    console.log("calendar " + this.calendar.dateSelected);
    await this.loadScheduleAvailables();
    this.processScheduleAvailables();
  }

  private processScheduleAvailables() {
    this.isLoading = true;
    this.lists.schedulesAvailableMorning = [];
    this.lists.schedulesAvailableAfternoon = [];

    this.lists.schedulesAvailable.forEach(scheduleAvailable => {
      if (scheduleAvailable.startShortTime?.includes("AM")) {
        this.lists.schedulesAvailableMorning.push(scheduleAvailable);
      } else {
        this.lists.schedulesAvailableAfternoon.push(scheduleAvailable);
      }
    });
    this.isLoading = false;
  }

  public scheduleSelect(): void {
    this.emitChanges();
  }

  private emitChanges(): void {
    const optionalDate: DayAvailableModel | undefined = this.lists.availableDays.find(availableDay =>
      availableDay.code &&
      this.calendar.dateSelected &&
      DateUtils.comparteYearMonthDay(availableDay.code, this.calendar.dateSelected)
    );
    console.log("1 const " + optionalDate);

    const optionalScheduleAvailable: ScheduleAvailableModel | undefined = this.lists.schedulesAvailable.find(
      scheduleAvailable => scheduleAvailable.specialistAgendaId === this.calendar.scheduleSelected
    );
    console.log("2 " + optionalScheduleAvailable);

    this.optionsSelectedInStepFourEmitter.emit(
      new OptionsSelectedInStepFour(
        optionalDate ? optionalDate : null,
        optionalScheduleAvailable ? optionalScheduleAvailable : null
      )
    );
    

    let resp = new ResponseComponentModel();
    resp.ComponentReadyForNextStep = true;
    resp.Component = "4";
    resp.Messaje = "";
    this.response.emit(resp);

  }

}
