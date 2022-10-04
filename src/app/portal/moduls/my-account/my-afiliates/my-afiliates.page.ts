import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlDataService } from 'src/app/shared/services/url-data-service';
import { Afiliate } from './models/afiliate';
import { getBeneficiariesPayload } from './models/getBeneficiaries';
import { FetchInfoService } from '../services/fetch-info.service';

@Component({
  selector: 'app-my-afiliates',
  templateUrl: './my-afiliates.page.html',
  styleUrls: ['./my-afiliates.page.scss']
})
export class MyAfiliatesPage implements OnInit {
  afiliates: Array<Afiliate> = new Array<Afiliate>();
  groupsOfThreeAfiliates: any;
  isLoading: boolean = true;

  constructor
  (
      private urlDataService: UrlDataService,
      private fetchInfoService: FetchInfoService,
      private router: Router
      ) {
      this.urlDataService.setShowHeaderPortal(true);
      this.urlDataService.setHeaderNavPortal(['Mi cuenta', 'Mis afiliados']);
      let payload = new getBeneficiariesPayload();
      payload.Document = localStorage.getItem("document");
      payload.DocumentType = localStorage.getItem("documentType");

      this.fetchInfoService.getBeneficiaries(payload).subscribe((resp: any) => {
        if (resp.StatusCode == 0) {
          this.isLoading = false;
          this.afiliates = resp.Beneficiaries;
          this.groupByThree();
        } else {
          //manejo de error
        }
      });
  }

  groupByThree() {
    let result = [];
    let subArray = [];
    for (let i = 0; i < this.afiliates.length; i++) {
      if (((i + 1) % 3) != 0) {
        subArray.push(this.afiliates[i]);
      } else {
        subArray.push(this.afiliates[i]);
        result.push(subArray);
        subArray = [];
      }
    }
    if (subArray.length > 0) {
      result.push(subArray);
    }
    this.groupsOfThreeAfiliates = result;
  }

  newAfiliate() {
    this.router.navigate(['/portal/my-account/my-afiliates/new-afiliate']);
  }

  ngOnInit() {
  }

}
