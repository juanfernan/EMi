export class User {
    TypeDocument: string;
    IdDocument: string;
    Email: string;
    RepeatEmail: string;
    TermsAndConditions: boolean;
    NameOne: string;
    NameTwo: string;
    LastNameOne: string;
    LastNameTwo: string;
    Department: string;
    City: string;
    Gender: string;
    Birthdate: string;
    CellPhone: string;
    PhoneNumber: string;
    Password: string;
    ConfirmPassword: string;
    UpdateEmail: string;
    Affiliate: boolean;
    DataLoaded: boolean;
    FailedVenko: any;
    constructor(model: any = null) {
        if (model) {
            this.TypeDocument = model.TypeDocument;
            this.IdDocument = model.IdDocument;
            this.Email = model.Email;
            this.RepeatEmail = model.RepeatEmail;
            this.TermsAndConditions = model.TermsAndConditions;
            this.NameOne = model.NameOne;
            this.NameTwo = model.NameTwo;
            this.LastNameOne = model.LastNameOne;
            this.LastNameTwo = model.LastNameTwo;
            this.Gender = model.Gender;
            this.Birthdate = model.Birthdate;
            this.CellPhone = model.CellPhone;
            this.PhoneNumber = model.PhoneNumber;
            this.Password = model.Password;
            this.ConfirmPassword = model.ConfirmPassword;
            this.UpdateEmail = model.UpdateEmail;
            this.Affiliate = model.Affiliate;
            this.DataLoaded = model.DataLoaded;
            this.FailedVenko = model.FailedVenko;
        }
    }
}