import { TestBed } from '@angular/core/testing';

import { PendingCoordinationsService } from './pending-coordinations.service';

describe('PendingCoordinationsService', () => {
  let service: PendingCoordinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingCoordinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
