import { TestBed } from '@angular/core/testing';

import { RequestEventTypesService } from './request-event-types.service';

describe('RequestEventTypesService', () => {
  let service: RequestEventTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestEventTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
