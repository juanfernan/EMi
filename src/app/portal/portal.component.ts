import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UrlDataService } from '../shared/services/url-data-service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  icon: string;
  screenWidth: number;
  showHeader: boolean;

  constructor(
      private urlDataServices: UrlDataService
      ) {
    this.urlDataServices.showHeader.subscribe(resp => this.showHeader = resp);
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };

    this.icon = `${environment.imagesRoute}icons/hambur-icon.svg`;
    
  }

  ngOnInit(): void {
  }

}
