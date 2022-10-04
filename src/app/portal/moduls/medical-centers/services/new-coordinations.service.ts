import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfirmCoordination } from '../models/ConfirmCoordination.model';

@Injectable({
  providedIn: 'root'
})
export class NewCoordinationsService {

  constructor(private http: HttpClient) { }

  preConfirmCoordination(coordination: ConfirmCoordination) {
    let params = {
      IdReference: coordination.IdReference,
      Token: coordination.Token,
      RDACode: coordination.RDACode,
      LocalCode: coordination.LocalCode,
      ClinicCode: coordination.ClinicCode,
      SpecialityCode: coordination.SpecialityCode,
      DocumentType: coordination.DocumentType,
      Number: coordination.Number,
      Phone: coordination.Phone
    }
    return this.http
      .post(environment.API_URL + 'Coordinations/PreConfirmCoordination', params)
  }

  getServicesTypes(url: string) {
    return this.http.post(environment.API_URL + url, null)
  }

  getSpecialties(serviceType: string) {
    let url = 'DataLists/GetMedicalSpecialites';
    let params = {
      ServiceType: serviceType
    }
    return this.http.post(environment.API_URL + url, params)
  }

  confirmCoordination(coordination: ConfirmCoordination) {
    let params = {
      IdReference: coordination.IdReference,
      Token: coordination.Token,
      RDACode: coordination.RDACode,
      LocalCode: coordination.LocalCode,
      ClinicCode: coordination.ClinicCode,
      SpecialityCode: coordination.SpecialityCode,
      Phone: coordination.Phone,
      Email: coordination.Email,
      YearMonthDay: coordination.YearMonthDay,
      Time: coordination.Time,
      PatientCode: coordination.PatientCode,
      ProductCode: coordination.ProductCode,
      UserEmail: coordination.UserEmail,
      PaymentMethodName: "",
      AgendaType: coordination.ServicesType,
      PatientName: coordination.FullNames
    }
    return this.http
      .post(environment.API_URL + 'Coordinations/ConfirmCoordination', params)
  }

  getMedicalCenterSchedules(url: string, specialityCode: string): Observable<any> {
    let params = {
      SpecialityCode: specialityCode
    }
    return this.http.post(environment.API_URL + url, params)
  }

  getPaymentMethods(coordination: ConfirmCoordination) {
    let params = {
      IdReference: coordination.IdReference,
      RDACode: coordination.RDACode,
      LocalCode: coordination.LocalCode,
      ClinicCode: coordination.ClinicCode,
      SpecialityCode: coordination.SpecialityCode,
      DocumentType: coordination.DocumentType,
      Number: coordination.Number,
      YearMonthDay: coordination.YearMonthDay,
      Time: coordination.Time,
      PatientCode: coordination.PatientCode,
      ProductCode: coordination.ProductCode,
      Price: coordination.Price != "" ? Number(coordination.Price) : ""
    }
    return this.http
      .post(environment.API_URL + 'Coordinations/GetPaymentMethods', params)
  }

  payCoordination(coordination: ConfirmCoordination) {
    let params = {
      IdReference: coordination.IdReference,
      Token: coordination.Token,
      TrxToken: coordination.TrxToken,
      RDACode: coordination.RDACode,
      LocalCode: coordination.LocalCode,
      ClinicCode: coordination.ClinicCode,
      SpecialityCode: coordination.SpecialityCode,
      DocumentType: coordination.DocumentType,
      Number: coordination.Number,
      PatientCode: coordination.PatientCode,
      ProductCode: coordination.ProductCode,
      YearMonthDay: coordination.YearMonthDay,
      Time: coordination.Time,
      Phone: coordination.Phone,
      UserEmail: coordination.UserEmail,
      Email: coordination.Email,
      PaymentMethodCode: coordination.PaymentMethodCode,
      PaymentMethodName: coordination.PaymentMethodName,
      Price: coordination.Price != "" ? Number(coordination.Price) : "",
      Installments: Number(coordination.Installments),
      AgendaType: coordination.ServicesType,
      PatientName: coordination.FullNames
    }
    return this.http
      .post(environment.API_URL + 'Coordinations/Pay', params)
  }

  getBankCardInformation() {
    let params = {
      Code: "6A69C947-80FC-4A13-A562-689DF981CDE7"
    }
    return this.http
      .post(environment.API_URL + 'DataLists/GetBankCardInformation', params)
  }
}
