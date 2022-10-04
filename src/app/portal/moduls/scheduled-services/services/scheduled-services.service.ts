import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/shared/models/user-login';
import { environment } from 'src/environments/environment';
import { cancelMedicalHomeService } from '../models/cancelMedicalHome';
import { ScheduledServices } from '../models/scheduledServices';

@Injectable({
  providedIn: 'root'
})
export class ScheduledServicesService {

  constructor(private http: HttpClient) { }

  getSheduledServices(userLogin: UserLogin) {
    let url = environment.API_URL + 'Services/GetSheduledServices';
    let params = {
      DocumentType: userLogin.documentType,
      Document: userLogin.document,
      IdReference: userLogin.idReference
    }
    return this.http.post(url, params)
  }

  cancelService(scheduledServices: ScheduledServices) {
    let url = environment.API_URL + 'Services/CancelService';
    //let url = "http://localhost:52401/api/Services/CancelService";
    let params = {
      Code: scheduledServices.Code,
      ServiceType: scheduledServices.ServiceType,
      DocumentType: scheduledServices.DocumentTypeUser,
      Document: scheduledServices.DocumentUser,
      CancelCoordinationRequest: {
        IdReference: scheduledServices.IdReference,
        AgendaType: scheduledServices.AgendaType,
        RDACode: scheduledServices.RDACode,
        ClinicCode: scheduledServices.ClinicCode,
        SpecialityCode: scheduledServices.SpecialityCode,
        YearMonthDay: scheduledServices.YearMonthDay,
        Time: scheduledServices.Time,
        Document: scheduledServices.Document
      },
      Applicant: {
        ApplicantNameOne: scheduledServices.ApplicantNameOne,
        ApplicantNameTwo: scheduledServices.ApplicantNameTwo,
        ApplicantLastNameOne: scheduledServices.ApplicantLastNameOne,
        ApplicantLastNameTwo: scheduledServices.ApplicantLastNameTwo,
        ApplicantDocumentType: scheduledServices.ApplicantDocumentType,
        ApplicantDocumentTypeName: scheduledServices.ApplicantDocumentTypeName,
        ApplicantDocument: scheduledServices.ApplicantDocument,
        ApplicantCellPhone: scheduledServices.ApplicantCellPhone,
        ApplicantMail: scheduledServices.ApplicantMail
      }
    }
    return this.http.post(url, params)
  }

  cancelMedicalHomeService(cancelMedicalHomeService: cancelMedicalHomeService) {
    let url = environment.API_URL + 'Services/GetCancelMedicalHomeService';
    let params = {
      IdService: cancelMedicalHomeService.IdService
    }
    return this.http.post(url, params)
  }

}
