import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { SecurityQuestion } from "src/app/public/models/entities/security-question";
import { User } from "src/app/public/models/entities/user";
import { NewForgotPassword } from "src/app/public/models/requests/new-forgot-password";

@Injectable({
  providedIn: 'root'
})
export class UrlDataService {
  private user: User;
  private securityQuestions: Array<SecurityQuestion>;
  private newForgotPassword: NewForgotPassword;
  private codeValidator: string;
  public SelectedPerson: any;
  private reloadSelectedPatient: BehaviorSubject<boolean>
  public reload: Observable<boolean>;
  private principalPageName: string;
  private _tittleHeaderPortal: BehaviorSubject<string | null> = new BehaviorSubject<string | null>('');
  private urlMenu: string | null;
  private urlService: string;
  private _headerNavPortal: BehaviorSubject<Array<string>>;
  public _headerNavPortalData: Observable<Array<string>>;
  private showHeaderPortal: BehaviorSubject<boolean>
  public showHeader: Observable<boolean>;

  constructor() {
    this.reloadSelectedPatient = new BehaviorSubject<boolean>(false);
    this.reload = this.reloadSelectedPatient.asObservable();
    this._headerNavPortal = new BehaviorSubject<Array<string>>([]);
    this._headerNavPortalData = this._headerNavPortal.asObservable();
    this.showHeaderPortal = new BehaviorSubject<boolean>(true);
    this.showHeader = this.showHeaderPortal.asObservable();
    this.urlMenu = localStorage.getItem("nameItemMenu")
    this.principalPageName = 'Inicio'
    this.tittleHeaderData = this.urlMenu;
  }

  get tittleHeader() {
    return this._tittleHeaderPortal.asObservable();
  }

  get headerNavigationPortal() {
    return this._headerNavPortal.asObservable();
  }

  set tittleHeaderData(data: string | null) {
    let tittle: string | null;
    if (data === this.principalPageName) {
      const fullName = `${localStorage.getItem('NameOne') ?? ''} ${localStorage.getItem('NameTwo') ?? ''}`
      tittle = `Hola  ${fullName}`;
    } else {
      tittle = data
    }
    this._tittleHeaderPortal.next(tittle);
  }

  set User(value: User) {
    this.user = value;
  }

  get User(): User {
    return this.user;
  }

  set SecurityQuestions(value: any) {
    this.securityQuestions = value
  }

  get SecurityQuestions(): any {
    return this.securityQuestions;
  }

  set NewForgotPasswor(value: NewForgotPassword) {
    this.newForgotPassword = value;
  }

  get NewForgotPasswor(): NewForgotPassword {
    return this.newForgotPassword;
  }

  set CodeValidator(value: string) {
    this.codeValidator = value;
  }

  get CodeValidator(): string {
    return this.codeValidator;
  }

  setReloadSelectedPatient = (value: boolean) => {
    this.reloadSelectedPatient.next(value)
  }

  setHeaderNavPortal(value: Array<string>) {
    this._headerNavPortal.next(value);
  }

  setShowHeaderPortal(value: boolean) {
    this.showHeaderPortal.next(value);
  }
  set UrlService(value: string) {
    this.urlService = value;
  }

  get UrlService(): string {
    return this.urlService;
  }

}
