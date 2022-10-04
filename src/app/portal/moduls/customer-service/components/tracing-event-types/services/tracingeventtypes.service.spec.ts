import { TestBed } from '@angular/core/testing';

import { TracingeventtypesService } from './tracingeventtypes.service';

describe('TracingeventtypesService', () => {
  let service: TracingeventtypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracingeventtypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
