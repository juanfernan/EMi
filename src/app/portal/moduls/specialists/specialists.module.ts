import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialistsPageRoutingModule } from './specialists-routing.module';

import { SpecialistsPage } from './specialists.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgendaStepOnePage } from './components/agenda-step-one/agenda-step-one.page';
import { AgendaStepTwoPage } from './components/agenda-step-two/agenda-step-two.page';
import { AgendaStepThreePage } from './components/agenda-step-three/agenda-step-three.page';
import { AgendaStepFourPage } from './components/agenda-step-four/agenda-step-four.page';

import { AgendaMapModalPage } from './components/agenda-map-modal/agenda-map-modal.page';
import { AgmCoreModule, GoogleMapsAPIWrapper, LazyMapsAPILoaderConfigLiteral, LAZY_MAPS_API_CONFIG } from '@agm/core';
import { environment } from 'src/environments/environment';
import { GlobalServiceVariables } from '../medical-centers/models/globalServiceVariables';
import { AgendaStepFivePage, RouteDirective } from './components/agenda-step-five/agenda-step-five.page';

@Injectable()
export class GoogleMapsConfig implements LazyMapsAPILoaderConfigLiteral {
  apiKey: string
  constructor() {
    this.apiKey = environment.apiKeyMaps;
  }
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKeyMaps, libraries: ["places"]
    }),
    SpecialistsPageRoutingModule
  ],
  declarations: [
    SpecialistsPage,
    AgendaStepOnePage,
    AgendaStepTwoPage,
    AgendaStepThreePage,
    AgendaStepFourPage,
    AgendaStepFivePage,
    RouteDirective,
    AgendaMapModalPage
  ],
  providers: [
    GoogleMapsAPIWrapper,
    GlobalServiceVariables,
    //SwiperModule,
    {
      provide: LAZY_MAPS_API_CONFIG, useClass: GoogleMapsConfig
    },
  ]
})
export class SpecialistsPageModule {}
