export class MyData {
    public DocumentType: string;
    public Document: string;
    public FirstName: string;
    public SecondName: string;
    public FirstSurname: string;
    public SecondSurname: string;
    public Email: string;
    public BirthDate: string;
    public Gender: string;
    public Apartment: string;
    public AddressDetails: string;
    public HomePhoneNumber: string;
    public OfficePhoneNumber: string;
    public CellPhoneNumber: string;
    public MedicalCoverage: string;
    public Childrens: string;
    public Occupation: string;
    public MaritalStatus: string;
    public Stratum: string;
    public Department : string;
    public City : string;
    public Street : string;
    public DoorNumber : string;
    public Neighborhood : string;
    public Country : string;
    public Bis: string;
    public Corner : string;
    public Nomenclature : string;
    public NumberNomenclature : string;
    public DataCoveragePercentage: string;

    constructor(model: any = null){
        if(model){
            this.DocumentType = model.DocumentType;
            this.Document = model.Document;
            this.FirstName = model.FirstName;
            this.SecondName = model.SecondName;
            this.FirstSurname = model.FirstSurname;
            this.SecondSurname = model.SecondSurname;
            this.Email = model.Email;
            this.BirthDate = model.BirthDate;
            this.Gender = model.Gender;
            this.Apartment = model.Apartment;
            this.AddressDetails = model.AddressDetails;
            this.HomePhoneNumber = model.HomePhoneNumber;
            this.OfficePhoneNumber = model.OfficePhoneNumber;
            this.CellPhoneNumber = model.CellPhoneNumber;
            this.MedicalCoverage = model.MedicalCoverage;
            this.Childrens = model.Childrens;
            this.Occupation = model.Occupation;
            this.MaritalStatus = model.MaritalStatus;
            this.Stratum = model.Stratum;
            this.Department = model.Department;
            this.City = model.City;
            this.Street = model.Street;
            this.DoorNumber = model.DoorNumber;
            this.Country = model.Country;
            this.Bis = model.Bis;
            this.Corner = model.Corner;
            this.Nomenclature = model.Nomenclature;
            this.NumberNomenclature = model.NumberNomenclature;
            this.DataCoveragePercentage = model.DataCoveragePercentage;
        }
    }
}