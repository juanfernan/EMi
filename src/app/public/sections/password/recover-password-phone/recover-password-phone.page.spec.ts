import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecoverPasswordPhonePage } from './recover-password-phone.page';

describe('RecoverPasswordPhonePage', () => {
  let component: RecoverPasswordPhonePage;
  let fixture: ComponentFixture<RecoverPasswordPhonePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverPasswordPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
