import { Component, OnInit } from '@angular/core';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.page.html',
  styleUrls: ['./fingerprint.page.scss'],
})

export class FingerprintPage implements OnInit {

  fingerprintOptions: FingerprintOptions;

  constructor(
    private faio: FingerprintAIO,
    private platform: Platform
  ) {
    this.fingerprintOptions = ({ });
      
   }

  ngOnInit() {

  }

}
