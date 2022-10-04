import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.page.html',
  styleUrls: ['./step.page.scss']
})
export class StepPage implements OnInit {
@Input() index: number;
@Input() isLast: boolean; 
@Input() hasFocus: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
