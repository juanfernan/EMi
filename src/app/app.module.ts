import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';

/* Interceptors */
import { AuthInterceptor } from './auth/auth-interceptor';

/* Translate */
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* Function */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/idiom/', '.json');
}

/* Sentry */
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import { environment } from 'src/environments/environment';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

if (environment.useSentry) {
  Sentry.init({
    dsn: "https://96505b239a744237a9ff502751148331@o1112787.ingest.sentry.io/6221471",
    integrations: [
      new Integrations.BrowserTracing({
        tracingOrigins: ["localhost", "https://yourserver.io/api"],
        routingInstrumentation: Sentry.routingInstrumentation,
      }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    RouterModule,
    IonicModule.forRoot({animated: false}),
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot()],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  { provide: FingerprintAIO},
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
