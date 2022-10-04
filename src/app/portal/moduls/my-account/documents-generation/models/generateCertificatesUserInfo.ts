export class GenerateCertificatesUserInfo {
    LoggedUserDocumentType: string | null;
    LoggedUserDocument: string | null;
    //Datos del seleccionado.
    Document: string | null;
    DocumentType: string | null;
    RequestGroup: boolean;
    TypeCertificate: string;
    GroupCode: string;
    CertificateCode: string;
    FileName: string;
    //Datos títular
    Name: string;
    Surnames: string;
    Mail: string | null;
    LoginUser: boolean;
    FullNameCertified: string;
    //Red Siem y Covertura de viajes data
    countryCode: string;
    CodeCity: any = [];
    DateStart: string;
    DateEnd: string;
    NameCountry: string;
    //Pagos
    CertifiedYear: string;
  }
  