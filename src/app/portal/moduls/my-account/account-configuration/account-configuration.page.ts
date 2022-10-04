import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-configuration',
  templateUrl: './account-configuration.page.html',
  styleUrls: ['./account-configuration.page.scss']
})
export class AccountConfigurationPage implements OnInit {

  currentSection: 'change-password' | 'deactivate-account' | 'change-email' = 'change-password';
  section: string;

  constructor() { }

  ngOnInit(): void {
    this.currentSection = "change-password";
  }

  setSection(section: 'change-password' | 'deactivate-account' | 'change-email') {
    this.currentSection = section;
  }

}
