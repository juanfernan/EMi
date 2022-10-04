import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecoverPasswordMailPhonePage } from './recover-password-mail-phone.page';

describe('RecoverPasswordMailPhonePage', () => {
  let component: RecoverPasswordMailPhonePage;
  let fixture: ComponentFixture<RecoverPasswordMailPhonePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverPasswordMailPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordMailPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
