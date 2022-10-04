import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsPendingCoordinationsPage } from './details-pending-coordinations.page';

describe('DetailsPendingCoordinationsPage', () => {
  let component: DetailsPendingCoordinationsPage;
  let fixture: ComponentFixture<DetailsPendingCoordinationsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPendingCoordinationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPendingCoordinationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
