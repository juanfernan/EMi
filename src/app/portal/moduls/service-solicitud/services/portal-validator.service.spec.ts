import { TestBed } from '@angular/core/testing';

import { PortalValidatorService } from './portal-validator.service';

describe('PortalValidatorService', () => {
  let service: PortalValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
