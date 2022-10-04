import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recover-password-mail-phone',
  templateUrl: './recover-password-mail-phone.page.html',
  styleUrls: ['./recover-password-mail-phone.page.scss'],
})
export class RecoverPasswordMailPhonePage implements OnInit {

  smsBtn = new ButtonConfiguration();
  mailBtn = new ButtonConfiguration();
  sendMail: string;
  sendSms: string;
  imgRoute: string;

  constructor(
    private translate: TranslateService
  ) { 
    this.imgRoute = environment.imagesRoute;
    this.translate.get('PUBLIC.PASSWORD.sendEmail').subscribe(resp => {
      this.sendMail = resp;
    });

    this.translate.get('PUBLIC.PASSWORD.sendSms').subscribe(resp => {
      this.sendSms = resp;
    });
  }

  ngOnInit() {
    this.smsBtn.buttonType = ButtonType.Tertiary
    this.smsBtn.text = this.sendSms;
    this.smsBtn.imageName = "cel-icon.svg";

    this.mailBtn.buttonType = ButtonType.Tertiary;
    this.mailBtn.text = this.sendMail;
    this.mailBtn.imageName = "mail-icon.svg";
  }

}
