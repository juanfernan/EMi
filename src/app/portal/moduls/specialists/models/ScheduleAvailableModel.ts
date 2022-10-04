export class ScheduleAvailableModel {

  private _specialistAgendaId: string | null;
  private _agendaStatusId: number | null;
  private _startDateFormat: string | null;
  private _startDate: Date | null;
  private _endDate: Date | null;
  private _startShortDate: string | null;
  private _startShortTime: string | null;
  private _endShortDate: string | null;
  private _endShortTime: string | null;
  private _dateSchedules: string | null;
  private _cancellationTypeId: number | null;
  private _attended: string | null;
  private _commentAttended: string | null;

  constructor() {}

  buildFromRequest(obj:any): ScheduleAvailableModel {
    if (obj) {
      this._specialistAgendaId = obj.SpecialistAgendaId;
      this._agendaStatusId = obj.AgendaStatusId;
      this._startDateFormat = obj.StartDateFormat;
      this._startDate = obj.StartDate;
      this._endDate = obj.EndDate;
      this._startShortDate = obj.StartShortDate;
      this._startShortTime = obj.StartShortTime;
      this._endShortDate = obj.EndShortDate;
      this._endShortTime = obj.EndShortTime;
      this._dateSchedules = obj.DateSchedules;
      this._cancellationTypeId = obj.CancellationTypeId;
      this._attended = obj.Attended;
      this.commentAttended = obj.CommentAttended;
    }
    return this;
  }

  get specialistAgendaId(): string | null {
    return this._specialistAgendaId;
  }

  set specialistAgendaId(value: string | null) {
    this._specialistAgendaId = value;
  }

  get agendaStatusId(): number | null {
    return this._agendaStatusId;
  }

  set agendaStatusId(value: number | null) {
    this._agendaStatusId = value;
  }

  get startDateFormat(): string | null {
    return this._startDateFormat;
  }

  set startDateFormat(value: string | null) {
    this._startDateFormat = value;
  }

  get startDate(): Date | null {
    return this._startDate;
  }

  set startDate(value: Date | null) {
    this._startDate = value;
  }

  get endDate(): Date | null {
    return this._endDate;
  }

  set endDate(value: Date | null) {
    this._endDate = value;
  }

  get startShortDate(): string | null {
    return this._startShortDate;
  }

  set startShortDate(value: string | null) {
    this._startShortDate = value;
  }

  get startShortTime(): string | null {
    return this._startShortTime;
  }

  set startShortTime(value: string | null) {
    this._startShortTime = value;
  }

  get endShortDate(): string | null {
    return this._endShortDate;
  }

  set endShortDate(value: string | null) {
    this._endShortDate = value;
  }

  get endShortTime(): string | null {
    return this._endShortTime;
  }

  set endShortTime(value: string | null) {
    this._endShortTime = value;
  }

  get dateSchedules(): string | null {
    return this._dateSchedules;
  }

  set dateSchedules(value: string | null) {
    this._dateSchedules = value;
  }

  get cancellationTypeId(): number | null {
    return this._cancellationTypeId;
  }

  set cancellationTypeId(value: number | null) {
    this._cancellationTypeId = value;
  }

  get attended(): string | null {
    return this._attended;
  }

  set attended(value: string | null) {
    this._attended = value;
  }

  get commentAttended(): string | null {
    return this._commentAttended;
  }

  set commentAttended(value: string | null) {
    this._commentAttended = value;
  }

}
