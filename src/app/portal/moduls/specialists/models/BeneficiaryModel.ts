import { DateFormat, DateUtils } from "src/app/shared/utils/DateUtils";

export class BeneficiaryModel {

  private _birthDate: Date | null;
  private _cellPhone: string | null;
  private _document: string | null;
  private _documentType: string | null;
  private _documentTypeShort: string | null;
  private _email: string | null;
  private _fullNameTitular: string | null;
  private _fullNames: string | null;
  private _isTitular: boolean | null;
  private _life: string | null;

  constructor() {}

  public buildFromRequest(obj: any): BeneficiaryModel {
    this._birthDate = obj.BirthDate ? DateUtils.getDate(obj.BirthDate, DateFormat.yyyymmdd) : null;
    this._cellPhone = obj.CellPhone ? obj.CellPhone : null;
    this._document = obj.Document ? obj.Document : null;
    this.documentType = obj.DocumentType ? obj.DocumentType : null;
    this._documentTypeShort = obj.DocumentTypeShort ? obj.DocumentTypeShort : null;
    this._email = obj.Email ? obj.Email : null;
    this._fullNameTitular = obj.FullNameTitular ? obj.FullNameTitular : null;
    this._fullNames = obj.FullNames ? obj.FullNames : null;
    this._isTitular = obj.IsTitular ? obj.IsTitular : null;
    this._life = obj.Life ? obj.Life : null;
    return this;
  }

  get birthDate(): Date | null {
    return this._birthDate;
  }

  set birthDate(value: Date | null) {
    this._birthDate = value;
  }

  get cellPhone(): string | null {
    return this._cellPhone;
  }

  set cellPhone(value: string | null) {
    this._cellPhone = value;
  }

  get document(): string | null {
    return this._document;
  }

  set document(value: string | null) {
    this._document = value;
  }

  get documentType(): string | null {
    return this._documentType;
  }

  set documentType(value: string | null) {
    this._documentType = value;
  }

  get documentTypeShort(): string | null {
    return this._documentTypeShort;
  }

  set documentTypeShort(value: string | null) {
    this._documentTypeShort = value;
  }

  get email(): string | null {
    return this._email;
  }

  set email(value: string | null) {
    this._email = value;
  }

  get fullNameTitular(): string | null {
    return this._fullNameTitular;
  }

  set fullNameTitular(value: string | null) {
    this._fullNameTitular = value;
  }

  get fullNames(): string | null {
    return this._fullNames;
  }

  set fullNames(value: string | null) {
    this._fullNames = value;
  }

  get isTitular(): boolean | null {
    return this._isTitular;
  }

  set isTitular(value: boolean | null) {
    this._isTitular = value;
  }

  get life(): string | null {
    return this._life;
  }

  set life(value: string | null) {
    this._life = value;
  }

}
