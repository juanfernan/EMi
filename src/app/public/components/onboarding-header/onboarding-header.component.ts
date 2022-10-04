import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-onboarding-header',
  templateUrl: './onboarding-header.component.html',
  styleUrls: ['./onboarding-header.component.scss'],
})
export class OnboardingHeaderComponent implements OnInit {
  imgRoute: string;

  constructor(private router: Router) {
    this.imgRoute = environment.imagesRoute;
  }

  ngOnInit() { }

  navigate() {
    this.router.navigate(['onboarding/welcome']);
  }
}
