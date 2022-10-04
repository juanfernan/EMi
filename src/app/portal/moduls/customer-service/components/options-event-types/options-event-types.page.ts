import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UrlDataService } from 'src/app/shared/services/url-data-service';

@Component({
  selector: 'app-options-event-types',
  templateUrl: './options-event-types.page.html',
  styleUrls: ['./options-event-types.page.scss'],
})
export class OptionsEventTypesPage implements OnInit {

  translate: TranslateService;
  tracingEventTypesItialization = false;
  tabIndex: any;

  currentSection: 'change-option' | 'change-course' = 'change-option';
  section: string;

  constructor(

  ) {

  }

  ngOnInit() {
    this.currentSection = 'change-option';
  }

  setSection(section: 'change-option' | 'change-course') {
    this.currentSection = section;

    if (this.currentSection == 'change-option') {
      this.tracingEventTypesItialization = true;
    } else {
      this.tracingEventTypesItialization = false;
    }
  }

  eventTracingEventTypesItialization(event: string) {
    if (event == 'change-option') {
      this.tracingEventTypesItialization = true;
    } else {
      this.tracingEventTypesItialization = false;
    }
  }

  changeTab($event: any) {
    this.tabIndex = $event.index == 0;
    if ($event.index == false) {
      this.tracingEventTypesItialization = false;
    } else {
      this.tracingEventTypesItialization = true;
    }
  }

}
