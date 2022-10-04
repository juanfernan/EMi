import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyGroupDataModalPage } from './family-group-data-modal.page';

describe('FamilyGroupDataModalPage', () => {
  let component: FamilyGroupDataModalPage;
  let fixture: ComponentFixture<FamilyGroupDataModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyGroupDataModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyGroupDataModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
