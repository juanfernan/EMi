import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addHeader(req);
    return next.handle(req);
  }

  private addHeader(request: HttpRequest<any>) {
    const token = `Bearer ${localStorage.getItem("token")}`;
    const env = environment.ambiente;
    const channel = '1';
    const subsKey = environment.suscriptionKey;
    let profile = '1';
    let appName = environment.country == 'co' ? 'WebEmi' : 'WebUcm';
    request = request.clone(
      {
        setHeaders: {
          'AppName': appName,
          'Authorization': token,
          'Ambiente': env,
          'Profile': profile,
          'Channel': channel,
          'Ocp-Apim-Subscription-Key': subsKey,
          'Content-Type': 'application/json'
        }
      }
    );

    return request;

  }
}
