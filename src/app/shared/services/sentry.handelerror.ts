import { Injectable } from "@angular/core";
import * as Sentry from '@sentry/angular';

@Injectable({
  providedIn: 'root'
})
export class SentryHandelError {
    handleError(error: any) {
        Sentry.captureException(error);
    }
}