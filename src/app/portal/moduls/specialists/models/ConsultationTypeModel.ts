export class ConsultationTypeModel {

  private _consultationTypeId: number | null;
  private _name: string | null;
  private _description: string | null;
  private _status: boolean

  constructor() {}

  public buildFromRequest(obj: any): ConsultationTypeModel {
    if (obj) {
      this._consultationTypeId = obj.ConsultationTypeId;
      this._name = obj.Name;
      this._description = obj.Description;
      this._status = obj.Status;
    }
    return this;
  }


  get consultationTypeId(): number | null  {
    return this._consultationTypeId;
  }

  set consultationTypeId(value: number | null) {
    this._consultationTypeId = value;
  }

  get name(): string | null {
    return this._name;
  }

  set name(value: string | null) {
    this._name = value;
  }

  get description(): string | null {
    return this._description;
  }

  set description(value: string | null) {
    this._description = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }
}
