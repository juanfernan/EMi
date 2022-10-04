import { TestBed } from '@angular/core/testing';

import { ExpiredMedicalServicesService } from './expired-medical-services.service';

describe('ExpiredMedicalServicesService', () => {
  let service: ExpiredMedicalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpiredMedicalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
