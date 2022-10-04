import { DateFormat, DateUtils } from "src/app/shared/utils/DateUtils";

export class DayAvailableModel {

  private _code: Date | null;
  private _name: string | null;
  private _description: string | null;

  constructor() {}

  public buildFromRequest(obj: any): DayAvailableModel {
    if (obj) {
      this._code = DateUtils.getDate(obj.Code, DateFormat.yyyymmdd_separatedbyMiddleDash);
      this._name = obj.Name;
      this._description = obj.Description;
    }
    return this;
  }

  get code(): Date | null {
    return this._code;
  }

  set code(value: Date | null) {
    this._code = value;
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

}
