import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { InformativeModalComponent } from './components/informative-modal/informative-modal.component';
import { MenuComponent } from './components/menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LoaderComponent,
    InformativeModalComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    TranslateModule,
    ButtonComponent,
    LoaderComponent,
    MenuComponent,
    IonicModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
