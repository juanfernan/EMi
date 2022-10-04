import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventTypesClass } from '../../options-event-types/models/eventTypes';

@Injectable({
  providedIn: 'root'
})
export class EventtypesformService {


  constructor(private http: HttpClient) { }

  getEventAreas(): Observable<any> {
    return this.http.get<Array<any>>(`${environment.API_URL}/DataLists/GetEventAreas`);
  }

  getTermsConditions(): Observable<any> {
    return this.http.get<Array<any>>(`${environment.API_URL}/pqrs/TermsConditions`);
  }


  getRefundTypes(responsable: string): Observable<any> {
    let params = {
      Responsable: responsable
    }
    return this.http.post<Array<any>>(`${environment.API_URL}/DataLists/GetRefundType`, params);
  }




  getDepartments(): Observable<any> {
    return this.http.post<Array<any>>(`${environment.API_URL}/DataLists/GetDepartmentsWithOutOther`, null);
  }



  getCities(departmentCode: string): Observable<any> {
    let params = {
      value: departmentCode
    }
    return this.http.post<Array<any>>(`${environment.API_URL}/DataLists/GetCitiesWithOutOther`, params);
  }

  postCreatePqrs(eventTypesClass: EventTypesClass): Observable<any> {


    let params = {
      EventType: eventTypesClass.EventType,
      SubjectOfTheEvent: eventTypesClass.SubjectOfTheEvent,
      ApplicantDocumentType: eventTypesClass.ApplicantDocumentType,
      ApplicantDocument: eventTypesClass.ApplicantDocument,
      ThirdDocumentType: eventTypesClass.ThirdDocumentType,
      ThirdDocument: eventTypesClass.ThirdDocument,
      RelatedArea: eventTypesClass.RelatedArea,
      NamesOfficial: eventTypesClass.NamesOfficial,
      EventDate: eventTypesClass.EventDate,
      EventCodeDepartment: eventTypesClass.EventCodeDepartment,
      EventCodeCity: eventTypesClass.EventCodeCity,
      EventComment: eventTypesClass.EventComment,
      AcceptTermsAndConditions: eventTypesClass.AcceptTermsAndConditions,
      SendFileThanksAndCongratulations: eventTypesClass.SendFileThanksAndCongratulations,
      SendFilesComplaintsAndClaims: eventTypesClass.SendFilesComplaintsAndClaims,
      SendBeneficiaryDeathCertificate: eventTypesClass.SendBeneficiaryDeathCertificate,
      SendFileBankAccount: eventTypesClass.SendFileBankAccount,
      SendFileTitularDeathCertificate: eventTypesClass.SendFileTitularDeathCertificate,
      SendFilesCivilRegistrationMarriage: eventTypesClass.SendFilesCivilRegistrationMarriage,
      SendFileBirthCertificateSon: eventTypesClass.SendFileBirthCertificateSon,
      SendFileSpouseDeathCertificate: eventTypesClass.SendFileSpouseDeathCertificate,
      SendFileExtraJudgmentStatement: eventTypesClass.SendFileExtraJudgmentStatement,
      SendFileBankAccountCertificate: eventTypesClass.SendFileBankAccountCertificate,
      SendFileBankStatementOrRemovablePayroll: eventTypesClass.SendFileBankStatementOrRemovablePayroll,
      ReasonsForReimbursement: eventTypesClass.ReasonsForReimbursement,
      BankAccountUser: eventTypesClass.BankAccountUser
    }

  
    return this.http.post<Array<EventTypesClass>>(`${environment.API_URL}pqrs/PostCreatePqrs`, params);



  }


}
