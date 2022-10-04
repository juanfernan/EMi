export class SpecialtyModel {
  private _code: string | null;
  private _name: string | null;
  private _description: string | null;

  constructor() {}

  public buildFromRequest(obj: any): SpecialtyModel {
    if (obj) {
      this._code = obj.Code;
      this._name = obj.Name;
      this._description = obj.Description;
    }
    return this;
  }

  get code(): string | null {
    return this._code;
  }

  set code(value: string | null) {
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
