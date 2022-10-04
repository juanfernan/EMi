export default class AfiliateModel {
    public IdReference: string | null;
    public DocumentType: string;
    public Document: string;
    public Names: string;
    public Surnames: string;
    public Phone: string;
    public Email: string;
  
    constructor(
      idReference: string | null,
      documentType: string,
      document: string,
      names: string,
      surnames: string,
      phone: string,
      email: string,
    ) {
      this.IdReference = idReference;
      this.DocumentType = documentType;
      this.Document = document;
      this.Names = names;
      this.Surnames = surnames;
      this.Phone = phone;
      this.Email = email;
    }
  }  