import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailFacturePage } from './modal-detail-facture.page';

describe('ModalDetailFacturePage', () => {
  let component: ModalDetailFacturePage;
  let fixture: ComponentFixture<ModalDetailFacturePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailFacturePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailFacturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
