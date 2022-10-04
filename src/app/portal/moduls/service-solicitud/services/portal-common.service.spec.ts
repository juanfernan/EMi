import { TestBed } from '@angular/core/testing';

import { PortalCommonService } from './portal-common.service';

describe('PortalCommonService', () => {
  let service: PortalCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
