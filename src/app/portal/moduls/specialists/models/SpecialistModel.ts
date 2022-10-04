export class SpecialistModel {

  private _id: string | null;
  private _names: string | null;
  private _cityName: string | null;
  private _clinicalName: string | null;
  private _latitude: number | null;
  private _longitude: number | null;
  private _specialites: string | null;
  private _address: string | null;
  private _consultingRoom: string | null;
  private _medicalConsultantsId: string | null;
  private _numberRegistry: number | null;
  private _specialitesId: string | null;
  private _email: string | null;
  private _portalEnable: string | null;

  constructor() {}

  public buildFromRequest(obj: any): SpecialistModel {
    if (obj) {
      this._id = obj.Id;
      this._names = obj.Names;
      this._cityName = obj.CityName;
      this._clinicalName = obj.ClinicalName;
      this._latitude = obj.Latitude;
      this._longitude = obj.Longitude;
      this._specialites = obj.Specialites;
      this._address = obj.Address;
      this._consultingRoom = obj.ConsultingRoom;
      this._medicalConsultantsId = obj.MedicalConsultantsId;
      this._numberRegistry = obj.NumberRegistry;
      this._specialitesId = obj.SpecialitesId;
      this._email = obj.Email;
      this._portalEnable = obj._portalEnable;
    }
    return this;
  }


  get id(): string | null {
    return this._id;
  }

  set id(value: string | null) {
    this._id = value;
  }

  get names(): string | null {
    return this._names;
  }

  set names(value: string | null) {
    this._names = value;
  }

  get cityName(): string | null {
    return this._cityName;
  }

  set cityName(value: string | null) {
    this._cityName = value;
  }

  get clinicalName(): string | null {
    return this._clinicalName;
  }

  set clinicalName(value: string | null) {
    this._clinicalName = value;
  }

  get latitude(): number | null {
    return this._latitude;
  }

  set latitude(value: number | null) {
    this._latitude = value;
  }

  get longitude(): number | null {
    return this._longitude;
  }

  set longitude(value: number | null) {
    this._longitude = value;
  }

  get specialites(): string | null {
    return this._specialites;
  }

  set specialites(value: string | null) {
    this._specialites = value;
  }

  get address(): string | null {
    return this._address;
  }

  set address(value: string | null) {
    this._address = value;
  }

  get consultingRoom(): string | null {
    return this._consultingRoom;
  }

  set consultingRoom(value: string | null) {
    this._consultingRoom = value;
  }

  get medicalConsultantsId(): string | null {
    return this._medicalConsultantsId;
  }

  set medicalConsultantsId(value: string | null) {
    this._medicalConsultantsId = value;
  }

  get numberRegistry(): number | null {
    return this._numberRegistry;
  }

  set numberRegistry(value: number | null) {
    this._numberRegistry = value;
  }

  get specialitesId(): string | null {
    return this._specialitesId;
  }

  set specialitesId(value: string | null) {
    this._specialitesId = value;
  }

  get email(): string | null {
    return this._email;
  }

  set email(value: string | null) {
    this._email = value;
  }

  get portalEnable(): string | null {
    return this._portalEnable;
  }

  set portalEnable(value: string | null) {
    this._portalEnable = value;
  }
}
