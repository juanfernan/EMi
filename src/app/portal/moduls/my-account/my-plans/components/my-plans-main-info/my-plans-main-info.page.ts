import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-plans-main-info',
  templateUrl: './my-plans-main-info.page.html',
  styleUrls: ['./my-plans-main-info.page.scss'],
})
export class MyPlansMainInfoPage implements OnInit {
  @Input() responsable: any;
  @Input() lastFeeDate: any;

  constructor() { }

  ngOnInit() { }

}
