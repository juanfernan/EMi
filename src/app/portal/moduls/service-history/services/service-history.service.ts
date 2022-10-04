import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/shared/models/user-login';
import { environment } from 'src/environments/environment';
import { ServiceHistory } from '../models/serviceHistory';
import { ServiceHistoryRequest } from '../models/serviceHistoryRequest';

@Injectable({
  providedIn: 'root'
})
export class ServiceHistoryService {
  constructor(private http: HttpClient,
  ) {
  }

  getServicesHistoryLists(serviceHistory: ServiceHistory) {
    let url = environment.API_URL + 'Services/GetServicesHistoryLists';
    let params = {
      DocumentType: serviceHistory.DocumentType,
      Document: serviceHistory.Document
    }
    return this.http.post(url, params)
  }

  getServicesHistory(serviceHistory: ServiceHistory) {
    let url = environment.API_URL + 'Services/GetServicesHistory';
    let params = {
      // AAE: Envía documento dependiendo usuarios seleccionados, menores o logueado
      DocumentType: serviceHistory.DocumentType,
      Document: serviceHistory.Document,
      ServiceType: serviceHistory.ServicesTypeId,
      Speciality: serviceHistory.SpecialtyId,
      Doctor: serviceHistory.DoctorId,
      City: serviceHistory.CityId,
      InitDate: serviceHistory.StartDate,
      EndDate: serviceHistory.EndDate
    }
    return this.http.post(url, params)
  }

  async sendServiceFile(user: string, code: string) {
    let url = environment.API_URL + 'Services/SendServiceFile';
    let params = {
      User: user,
      Code: code
    }
    return this.http.post(url, params)
  }

  async sendServiceFileByEmail(email: string, user: string, code: string) {
    let url = environment.API_URL + 'Services/SendServiceFileByEmail';
    let params = {
      Email: email,
      User: user,
      Code: code
    }
    return this.http.post(url, params)
  }

  getServiceFile(user: string | null, code: string) {
    let url = environment.API_URL + 'Services/GetServiceFile';
    let params = {
      User: user,
      Code: code
    }
    return this.http.post(url, params)
  }

  getPatiens(serviceHistory: ServiceHistory) {
    let url = environment.API_URL + 'Family/GetMinorAuthorizations';
    let params = {
      // Este es el real
      DocumentType: serviceHistory.DocumentType,
      Document: serviceHistory.Document
      // Temporales para probar Test
      // DocumentType : "1",
      // Document : "38944826"
    }
    return this.http.post(url, params)
  }

  getPatients(userLogin: UserLogin) {
    let url = environment.API_URL + 'Affiliate/GetPersons';
    let params = {
      IdReference: userLogin.idReference,
      DocumentType: userLogin.documentType,
      Document: userLogin.document,
    }
    return this.http.post(url, params)
  }

  GetServicesHistoryPrescriptions(request: ServiceHistoryRequest) {
    // let params = new HttpParams();
    // params = params.set('Code', request.Code);
    return this.http.post(`${environment.API_URL}Services/GetServicesHistoryPrescriptions`, request)
  }

  GetServicesHistoryInability(request: ServiceHistoryRequest) {
    return this.http
      .post(`${environment.API_URL}Services/GetServicesHistoryInability`, request)
  }
}
