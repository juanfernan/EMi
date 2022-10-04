import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/shared/models/user-login';
import { environment } from 'src/environments/environment';
import { GenerateCertificatesUserInfo } from '../models/generateCertificatesUserInfo';

@Injectable({
  providedIn: 'root'
})
export class DocumentsGenerationService {

  constructor(
      private http: HttpClient,
  ) {
  }

  //GetBeneficiaries
  getBeneficiaries(url: string, userLogin: UserLogin) {
    let params = {
      DocumentType: userLogin.documentType,
      Document: userLogin.document,
      IdReference: userLogin.idReference
    }
    return this.http.post(environment.API_URL + url, params)
  }

  //Certificados
  getListCertificates(generateCertificatesUserInfo: GenerateCertificatesUserInfo) {
    let url = environment.API_URL + 'Affiliate/GetCertificates';
    let params = {
      LoggedUserDocumentType: generateCertificatesUserInfo.LoggedUserDocumentType,
      LoggedUserDocument: generateCertificatesUserInfo.LoggedUserDocument,
      DocumentType: generateCertificatesUserInfo.DocumentType,
      Document: generateCertificatesUserInfo.Document,
      TypeCertificate: generateCertificatesUserInfo.TypeCertificate,
      RequestGroup: generateCertificatesUserInfo.RequestGroup,
      GroupCode: generateCertificatesUserInfo.GroupCode,
      LoginUser: generateCertificatesUserInfo.LoginUser
    }
    return this.http.post(url, params)
  }

  //Descarga Certificados
  getDownloadCertAffiliatedPayments(generateCertificatesUserInfo: GenerateCertificatesUserInfo) {
    let url = environment.API_URL + 'Affiliate/GetDownloadCertAffiliatedPayments';
    let params = {
      DocumentType: generateCertificatesUserInfo.DocumentType,
      Document: generateCertificatesUserInfo.Document,
      TypeCertificate: generateCertificatesUserInfo.TypeCertificate,
      RequestGroup: generateCertificatesUserInfo.RequestGroup,
      GroupCode: generateCertificatesUserInfo.GroupCode,
      FileName: generateCertificatesUserInfo.FileName,
      CertificateCode: generateCertificatesUserInfo.CertificateCode,
      //Parametros extra para certificado de Red Siem y covertura de viaje
      Name: generateCertificatesUserInfo.Name,
      Surnames: generateCertificatesUserInfo.Surnames,
      Country: generateCertificatesUserInfo.countryCode,
      CodeCity: generateCertificatesUserInfo.CodeCity,
      DateStart: generateCertificatesUserInfo.DateStart,
      DateEnd: generateCertificatesUserInfo.DateEnd,
      NameCountry: generateCertificatesUserInfo.NameCountry,
      FullNameCertified: generateCertificatesUserInfo.FullNameCertified,
      //Para certificado de pagos
      CertifiedYear: generateCertificatesUserInfo.CertifiedYear
    }
    return this.http.post(url, params)
  }

  //Envío email Certificados
  getSendCertAffiliatedPayments(generateCertificatesUserInfo: GenerateCertificatesUserInfo) {
    let url = environment.API_URL + 'Affiliate/GetSendCertAffiliatedPayments';
    let params = {
      //Select patient data
      DocumentType: generateCertificatesUserInfo.DocumentType,
      Document: generateCertificatesUserInfo.Document,
      TypeCertificate: generateCertificatesUserInfo.TypeCertificate,
      RequestGroup: generateCertificatesUserInfo.RequestGroup,
      GroupCode: generateCertificatesUserInfo.GroupCode,
      FileName: generateCertificatesUserInfo.FileName,
      CertificateCode: generateCertificatesUserInfo.CertificateCode,
      //Titular data
      Name: generateCertificatesUserInfo.Name,
      Surnames: generateCertificatesUserInfo.Surnames,
      Mail: generateCertificatesUserInfo.Mail,
      Country: generateCertificatesUserInfo.countryCode,
      CodeCity: generateCertificatesUserInfo.CodeCity,
      DateStart: generateCertificatesUserInfo.DateStart,
      DateEnd: generateCertificatesUserInfo.DateEnd,
      NameCountry: generateCertificatesUserInfo.NameCountry,
      FullNameCertified: generateCertificatesUserInfo.FullNameCertified,
      //Para certificado de pagos
      CertifiedYear: generateCertificatesUserInfo.CertifiedYear
    }
    return this.http.post(url, params)
  }

  //Países Red Siem
  getCountryRedSiem() {
    let url = environment.API_URL + 'DataLists/GetCountryRedSiem';
    let params = {}
    return this.http.post(url, params)
  }

  //Ciudades Red Siem
  GetConsultantCities(generateCertificatesUserInfo: GenerateCertificatesUserInfo) {
    let url = environment.API_URL + 'DataLists/GetCitiesRedSiem';
    let params = {
      Country: generateCertificatesUserInfo.countryCode
    }
    return this.http.post(url, params)
  }

  private handleError(error: any) {
    console.error(error);
  }

}
