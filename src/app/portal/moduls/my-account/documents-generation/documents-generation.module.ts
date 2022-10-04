import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsGenerationRoutingModule } from './documents-generation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FamilyGroupDataModalPage } from './components/family-group-data-modal/family-group-data-modal.page';
import { DocumentsGenerationPage } from './documents-generation.page';
import { RedSiemPage } from './components/red-siem/red-siem.page';

@NgModule({
  declarations: [
    DocumentsGenerationPage,
    FamilyGroupDataModalPage,
    RedSiemPage
  ],
  imports: [
    CommonModule,
    DocumentsGenerationRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})
export class DocumentsGenerationModule { }
