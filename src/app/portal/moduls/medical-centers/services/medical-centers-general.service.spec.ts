import { TestBed } from '@angular/core/testing';

import { MedicalCentersGeneralService } from './medical-centers-general.service';

describe('MedicalCentersGeneralService', () => {
  let service: MedicalCentersGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalCentersGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
