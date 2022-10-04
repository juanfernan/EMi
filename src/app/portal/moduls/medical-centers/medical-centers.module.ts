import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicalCentersPageRoutingModule } from './medical-centers-routing.module';
import { MedicalCentersPage } from './medical-centers.page';
import { SharedModule } from '../../../shared/shared.module';
import { GlobalServiceVariables } from './models/globalServiceVariables';
import { ClinicDetailsPage } from './components/clinic-details/clinic-details.page';
import { DetailsPendingCoordinationsPage } from './components/details-pending-coordinations/details-pending-coordinations.page';
import { MainCoordinationsPage } from './components/main-coordinations/main-coordinations.page';
import { NewCoordinationPage } from './components/new-coordination/new-coordination.page';
import { PendingCoordinationsPage } from './components/pending-coordinations/pending-coordinations.page';
import { ArraySortPipe } from './pipes/array-sort.pipe';
import { AgmCoreModule, GoogleMapsAPIWrapper, LazyMapsAPILoaderConfigLiteral, LAZY_MAPS_API_CONFIG } from '@agm/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class GoogleMapsConfig implements LazyMapsAPILoaderConfigLiteral {
  apiKey: string
  constructor() {
    this.apiKey = environment.apiKeyMaps;
  }
}

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalCentersPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKeyMaps, libraries: ["places"]
    }),
  ],
  declarations: [
    MedicalCentersPage,
    ClinicDetailsPage,
    DetailsPendingCoordinationsPage,
    MainCoordinationsPage,
    NewCoordinationPage,
    ArraySortPipe,
    PendingCoordinationsPage
  ],
  providers: [
    GoogleMapsAPIWrapper,
    GlobalServiceVariables,
    {
      provide: LAZY_MAPS_API_CONFIG, useClass: GoogleMapsConfig
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicalCentersPageModule {}
