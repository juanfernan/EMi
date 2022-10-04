import { TestBed } from '@angular/core/testing';

import { DetailsPendingCoordinationsService } from './details-pending-coordinations.service';

describe('DetailsPendingCoordinationsService', () => {
  let service: DetailsPendingCoordinationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsPendingCoordinationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
