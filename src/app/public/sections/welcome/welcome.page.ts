import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ButtonType } from 'src/app/shared/enums/enumerations';
import { ButtonConfiguration } from 'src/app/shared/models/button-configuration';
import { environment } from 'src/environments/environment';
import { OptionCityComponent } from '../useful-phones/option-city/option-city.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  bsModalRef?: BsModalRef;
  imgRoute: string;
  loginButton = new ButtonConfiguration();
  usefulPhonesButton = new ButtonConfiguration();
  enterWithUserNameText: string;
  useFulPhonesText: string
  environment: any;
  country: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService, 
    public modalService: BsModalService
    ) {
      this.translate.get('PUBLIC.WELCOME.enterWithUserName').subscribe(resp => {
      this.enterWithUserNameText = resp;
    });
      this.translate.get('PUBLIC.WELCOME.useFulPhones').subscribe(resp => {
      this.useFulPhonesText = resp;
    });
    this.imgRoute = environment.imagesRoute;
    this.country = environment.country;
  }

  ngOnInit() {
    this.loginButton.buttonType = ButtonType.Primary;
    this.loginButton.text = this.enterWithUserNameText;
    this.loginButton.width = '300px'

    this.usefulPhonesButton.buttonType = ButtonType.Secundary;
    this.usefulPhonesButton.text = this.useFulPhonesText;
    this.usefulPhonesButton.width = '300px';
  }

  clickUsefulPhones() {
    const initialState: ModalOptions = {
      initialState: {
      },
      class: 'modal-dialog-centered modal-rounded',
      id: 1
    }
    this.bsModalRef = this.modalService.show(OptionCityComponent, initialState);
  }

  clickLogin() {
    this.router.navigate(['/onboarding/ini-sesion']);
  }

}
