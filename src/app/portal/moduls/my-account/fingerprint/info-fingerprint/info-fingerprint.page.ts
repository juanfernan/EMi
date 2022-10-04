import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info-fingerprint',
  templateUrl: './info-fingerprint.page.html',
  styleUrls: ['./info-fingerprint.page.scss'],
})
export class InfoFingerprintPage implements OnInit {
  imgRoute: string;
  configurationButtonAccept = new ButtonConfiguration();
  buttonAcceptText: string ;

  constructor(
    private router: Router,
    private platform: Platform,
    private translate: TranslateService, 
  ) {
    this.imgRoute = environment.imagesRoute;
    this.translate.get('PORTAL.FINGERPRINT.AcceptButton').subscribe(resp => {
    this.buttonAcceptText = resp;
    });
       
   }

  ngOnInit() {
    this.configurationButtonAccept.buttonType = ButtonType.Primary;
    this.configurationButtonAccept.text = "Aceptar";
    this.configurationButtonAccept.width = '250px'
  }

   back() {
    this.router.navigate(['portal/home']);
  }

  
}
