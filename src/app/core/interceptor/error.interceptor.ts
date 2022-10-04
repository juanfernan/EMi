import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import * as Sentry from '@sentry/angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError(this.handleError)
            )
    };

    handleError(error: HttpErrorResponse) {
        Sentry.captureException(error);
        return throwError(error);
    }
}