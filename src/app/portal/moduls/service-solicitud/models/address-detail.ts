export class AddressDetail {
  Id: string;
  ServiceType: string;
  AppliantDocumentType: string;
  AppliantDocument: string;
  PatientDocumentType: string;
  PatientDocumentTypeShort: string;
  PatientDocument: string;
  PatientCellPhone: string;
  PatientPhone: string;
  PatientEmail: string;
  PatientFullNames: string;
  ApplicantCellPhone: string;
  AppliantName: string;
  Country: string;
  CountryId: string;
  DisabledCountry: boolean;
  Department: string;
  DepartmentId: string;
  DisabledDepartment: boolean;
  City: string;
  CityId: string;
  DisabledCity: boolean;
  Neighborhood: string;
  NeighborhoodId: string;
  DisabledNeighborhood: boolean;
  Address: string;

  DisabledTypeMainRoad: boolean;
  typeMainRoad: string;

  mainRoadNumber: string;
  DisabledMainRoadNumber: boolean;

  numberGeneratingNomenclature: string;
  DisabledNumberGeneratingNomenclature: boolean;

  portNumber: string;
  DisabledPortNumber: boolean;

  Street: string;
  DisabledStreet: boolean;
  DoorNumber: string;
  DisabledDoorNumber: boolean;
  Bis: string;
  DisabledBis: boolean;
  Apartment: string;
  DisabledApartment: boolean;
  Corner: string;
  DisabledCorner: boolean;
  AddressDetails: string;
  DisabledAddressDetails: boolean;
  IsContactNumber: boolean;
  Inside: string;
  Latitude: number | null;
  Longitude: number | null;
  StandardizedAddress: string;
  StandardizedAddressCoverage: string;
  IsNewAddress: boolean;
  StandardizedMessage: any;
  Coverage: boolean;
  StreetSO: string;

  public constructor() {
    this.CountryId = "";
    this.DepartmentId = "";
    this.CityId = "";
    this.typeMainRoad = "";
    this.mainRoadNumber = "";
    this.NeighborhoodId = "";
    this.Address = "";
    this.Corner = "";
    this.DoorNumber = "";
    this.IsNewAddress = true;
    this.StandardizedAddress = "";
    this.Street = "";
    this.Bis = "";
    this.Apartment = "";
    this.AddressDetails = "";
    this.Coverage = false;
    this.StandardizedAddressCoverage = "";
    this.numberGeneratingNomenclature = "";
    this.portNumber = "";

  }
}
