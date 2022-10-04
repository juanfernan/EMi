import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpiredMedicalServicesPage } from './expired-medical-services.page';

describe('ExpiredMedicalServicesPage', () => {
  let component: ExpiredMedicalServicesPage;
  let fixture: ComponentFixture<ExpiredMedicalServicesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredMedicalServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpiredMedicalServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
