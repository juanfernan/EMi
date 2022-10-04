import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPlansConsumptionsModalPage } from './my-plans-consumptions-modal.page';

describe('MyPlansConsumptionsModalPage', () => {
  let component: MyPlansConsumptionsModalPage;
  let fixture: ComponentFixture<MyPlansConsumptionsModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlansConsumptionsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPlansConsumptionsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
