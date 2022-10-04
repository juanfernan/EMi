import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlansCardPage } from './my-plans-card.page';

describe('MyPlansCardPage', () => {
  let component: MyPlansCardPage;
  let fixture: ComponentFixture<MyPlansCardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlansCardPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlansCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
