import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Afiliate } from '../../models/afiliate';

@Component({
  selector: 'app-afiliate-card',
  templateUrl: './afiliate-card.page.html',
  styleUrls: ['./afiliate-card.page.scss']
})

export class AfiliateCardPage implements OnInit {
  @Input() afiliate: Afiliate;
  imgRoute: string;
  environment: any;

  constructor(

  ) {
    this.environment = environment;
    this.imgRoute = environment.imagesRoute;
   }

  ngOnInit(): void {
  }

  //Get age from date of birth in a format "yyyymmdd"
  getAge(birthday: any) {
    var today = new Date();
    var birthDate = new Date(birthday.substring(0, 4), birthday.substring(4, 6) - 1, birthday.substring(6, 8));
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
