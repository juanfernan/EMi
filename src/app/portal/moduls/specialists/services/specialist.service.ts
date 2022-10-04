import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ScheduleAvailableModel } from "../models/ScheduleAvailableModel";
import { environment } from 'src/environments/environment';
import { DateFormat, DateUtils } from 'src/app/shared/utils/DateUtils';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {

  private readonly apiUrl: string = environment.API_URL;

  constructor(
    private http: HttpClient
    ) {

  }

  public getPersons(documentType: string, document: string): Observable<any> {
    const path: string = 'Affiliate/GetPersons';
    let body = {
      DocumentType: documentType,
      Document: document,
    }
    return this.http.post(this.apiUrl + path, body);
  }

  public getFilterSpecialties(
    city: string = "",
    specialty: string = "",
    doctor: string = ""
  ): Observable<any> {
    const path: string = 'DataLists/GetFilterSpecialties';
    const body = {
      "City": city,
      "Specialty": specialty,
      "Doctor": doctor
    }
    return this.http.post(this.apiUrl + path, body);
  }

  public getFilterSpecialits(
    city: string = "",
    specialty: string = "",
    doctor: string = "",
    startDate: string = "",
    endDate: string = ""
  ): Observable<any> {
    const path: string = 'Specialists/GetFilterSpecialits';
    const body = {
      "City": city,
      "Specialty": specialty,
      "Doctor": doctor,
      "StartDate": startDate,
      "EndDate": endDate
    }
    return this.http.post(this.apiUrl + path, body);
  }

  public getConsultantCities(): Observable<any> {
    const path: string = 'DataLists/GetConsultantCities';
    return this.http.post(this.apiUrl + path, null);
  }

  public getConsultationType(): Observable<any> {
    const path: string = 'Agenda/GetConsultationType';
    return this.http.post(this.apiUrl + path, null);
  }

  public getAvailableDays(
    medicalConsultantsId: string | null,
    startDate: Date | null = null,
    endDate: Date | null = null
  ): Observable<any> {
    const path: string = 'Agenda/GetAvailableDays';
    const body = {
      "MedicalConsultantsId": medicalConsultantsId,
      "StartDate": startDate,
      "EndDate": endDate
    }
    return this.http.post(this.apiUrl + path, body);
  }

  public getSchedulesAvailable(
    medicalConsultantsId: string,
    date: Date,
  ): Observable<any> {
    const path: string = 'Agenda/GetSchedulesAvailable';
    const body = {
      "MedicalConsultantsId": medicalConsultantsId,
      "Date": DateUtils.convertDateToString(date, DateFormat.yyyymmdd_separatedbyMiddleDash),
    }
    return this.http.post(this.apiUrl + path, body);
  }

  public assignAppointment(
    consultationTypeId:string,
    specialtiesId: string,
    document: string,
    typeDocument: string,
    typeDocumentShort: string,
    fullName: string,
    specialistAgendaId: string,
    applicantType: number,
    applicantNameOne: string,
    applicantNameTwo: string,
    applicantLastNameOne: string,
    applicantLastNameTwo: string,
    applicantDocumentType: string,
    applicantDocumentTypeName: string,
    applicantDocument: string,
    applicantCellPhone: string,
    applicantMail: string
  ): Observable<any> {
    const path: string = 'Agenda/AssignAppointment';
    const body = {
      "ConsultationTypeId": consultationTypeId,
      "SpecialtiesId": specialtiesId,
      "Document": document,
      "TypeDocument": typeDocument,
      "TypeDocumentShort": typeDocumentShort,
      "FullName": fullName,
      "SpecialistAgendaId": specialistAgendaId,
      "ApplicantType": applicantType,
      "ApplicantNameOne": applicantNameOne,
      "ApplicantNameTwo": applicantNameTwo,
      "ApplicantLastNameOne": applicantLastNameOne,
      "ApplicantLastNameTwo": applicantLastNameTwo,
      "ApplicantDocumentType": applicantDocumentType,
      "ApplicantDocumentTypeName": applicantDocumentTypeName,
      "ApplicantDocument": applicantDocument,
      "ApplicantCellPhone": applicantCellPhone,
      "ApplicantMail": applicantMail
    }
     return this.http.post(this.apiUrl + path, body);
  }

}
