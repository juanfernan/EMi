import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-onboarding-carousel',
  templateUrl: './onboarding-carousel.component.html',
  styleUrls: ['./onboarding-carousel.component.scss'],
})
export class OnboardingCarouselComponent implements OnInit {
  slides: any = []
  imgRoute: string;
  environment: any;
  indexSlide: number;
  @ViewChild('slide') mySlide: IonSlides;

  slideOpts = {
    allowTouchMove: false,
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private router: Router
    ) {
      this.environment = environment;
      this.imgRoute = environment.imagesRoute;
    }

  ngOnInit() {
    this.indexSlide = 0;
    environment.country === 'co' ? this.slides = this.co : this.slides = this.uy;
  }

  moveSlide(position: number) {
    this.mySlide.getActiveIndex().then(index => {
      if (position > 0 && index+1 != this.slides.length || position < 0) {
        if (position > 0) {
          this.indexSlide = index+1
          this.mySlide.slideNext()
        }
        else{
          this.indexSlide = index-1;
          this.mySlide.slidePrev();
        }
      }
    });
  }

  co = [
    {
      title: 'Solicita servicio médico',
      description: 'Pide atención médica en tu domicilio cuando lo necesites.',
      image: `${environment.imagesRoute}onboarding-1.png`,
      icon: `${environment.imagesRoute}icons/icon-onboarding-1.svg`
    },
    {
      title: 'Videoconsulta',
      description: 'Haz una videoconsulta o chatea con tu médico para resolver inquietudes y solicitar la lectura de tus exámenes de laboratorio.',
      image: `${environment.imagesRoute}onboarding-2.png`,
      icon: `${environment.imagesRoute}icons/icon-onboarding-2.svg`
    },
    {
      title: 'Accede a tu historia clínica',
      description: 'Conoce tu historial de servicios médicos con nosotros y descarga fácilmente tu historia clínica.',
      image: `${environment.imagesRoute}onboarding-3.png`,
      icon: `${environment.imagesRoute}icons/icon-onboarding-3.svg`
    },
    {
      title: 'Emi especialistas',
      description: 'Agenda en tiempo real citas con los especialistas de nuestra red de aliados.',
      image: `${environment.imagesRoute}onboarding-4.png`,
      icon: `${environment.imagesRoute}icons/icon-onboarding-4.svg`
    }
  ]
  uy = [
    {
      title: 'Solicita servicio médico',
      description: 'Pide atención médica en tu domicilio cuando lo necesites.',
      image: `${environment.imagesRoute}onboarding-1.png`,
      icon: `${environment.imagesRoute}icons/icon-onboarding-1.svg`
    },
    {
      title: 'Videoconsulta',
      description: 'Haz una videoconsulta o chatea con tu médico para resolver inquietudes y solicitar la lectura de tus exámenes de laboratorio.',
      image: `${environment.imagesRoute}onboarding-2.png`,
      icon: `${environment.imagesRoute}icons/icon-onboarding-2.svg`
    },
    {
      title: 'Accede a tu historia clínica',
      description: 'Conoce tu historial de servicios médicos con nosotros y descarga fácilmente tu historia clínica.',
      image: `${environment.imagesRoute}onboarding-3.png`,
      icon: `${environment.imagesRoute}icons/icon-onboarding-3.svg`
    },
    {
      title: 'Centros Médicos ucm',
      description: 'Agenda en tiempo real citas con especialistas en nuestros Centros Médicos y Clínicas.',
      image: `${environment.imagesRoute}onboarding-4.png`,
      icon: `${environment.imagesRoute}icons/icon-onboarding-4.svg`
    }
  ];

  navigate() {
    this.router.navigate(['onboarding/welcome']);
  }

}
