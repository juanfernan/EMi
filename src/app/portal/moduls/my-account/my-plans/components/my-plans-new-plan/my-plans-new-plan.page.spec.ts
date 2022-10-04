import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlansNewPlanPage } from './my-plans-new-plan.page';

describe('MyPlansNewPlanComponent', () => {
  let component: MyPlansNewPlanPage;
  let fixture: ComponentFixture<MyPlansNewPlanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlansNewPlanPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlansNewPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
